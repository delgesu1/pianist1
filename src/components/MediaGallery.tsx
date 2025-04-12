import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Define types for media items
type VideoItem = {
  id: number;
  type: 'video';
  thumbnail: string;
  title: string;
  description: string;
  videoUrl: string;
};

type ImageItem = {
  id: number;
  type: 'image';
  src: string;
  title: string;
  description: string;
};

type MediaItem = VideoItem | ImageItem;

// Type guard functions
function isVideoItem(item: MediaItem): item is VideoItem {
  return item.type === 'video';
}

function isImageItem(item: MediaItem): item is ImageItem {
  return item.type === 'image';
}

// Sample media data
const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: 'video',
    thumbnail: '/images/main2.jpg',
    title: 'Rachmaninoff Piano Concerto No. 2',
    description: 'Live at Carnegie Hall with New York Philharmonic',
    videoUrl: 'https://www.youtube.com/watch?v=example1',
  },
  {
    id: 2,
    type: 'video',
    thumbnail: '/images/main3.jpg',
    title: 'Chopin Nocturne Op. 9 No. 2',
    description: 'Studio recording for Classical Masters label',
    videoUrl: 'https://www.youtube.com/watch?v=example2',
  },
  {
    id: 3,
    type: 'image',
    src: '/images/perfomance1.webp',
    title: 'Vienna Musikverein',
    description: 'Solo recital, October 2024',
  },
  {
    id: 4,
    type: 'image',
    src: '/images/performance2.jpg',
    title: 'Royal Albert Hall',
    description: 'With London Symphony Orchestra, March 2024',
  },
  {
    id: 5,
    type: 'video',
    thumbnail: '/images/playing.jpg',
    title: 'Liszt La Campanella',
    description: 'Live at Berlin Philharmonie',
    videoUrl: 'https://www.youtube.com/watch?v=example3',
  },
  {
    id: 6,
    type: 'image',
    src: '/images/performance3.webp',
    title: 'Tokyo Concert Hall',
    description: 'Asian Tour, January 2024',
  },
];

const MediaGallery = () => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState<'all' | 'video' | 'image'>('all');
  const sectionRef = useRef<HTMLElement>(null);

  const filteredMedia = mediaItems.filter(item =>
    filter === 'all' || item.type === filter
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="media" className="section-padding bg-background" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">Media Gallery</h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-text-light">
            Explore Ivan's performances through videos and photographs from concerts around the world.
          </p>
        </div>

        <div className="flex justify-center mb-12 animate-on-scroll opacity-0">
          <div className="inline-flex border border-gray-300 rounded-sm overflow-hidden">
            <button
              className={`px-6 py-2 text-sm uppercase tracking-wider transition-colors duration-300 ${
                filter === 'all' ? 'bg-primary text-white' : 'bg-white text-text hover:bg-gray-100'
              }`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={`px-6 py-2 text-sm uppercase tracking-wider transition-colors duration-300 ${
                filter === 'video' ? 'bg-primary text-white' : 'bg-white text-text hover:bg-gray-100'
              }`}
              onClick={() => setFilter('video')}
            >
              Videos
            </button>
            <button
              className={`px-6 py-2 text-sm uppercase tracking-wider transition-colors duration-300 ${
                filter === 'image' ? 'bg-primary text-white' : 'bg-white text-text hover:bg-gray-100'
              }`}
              onClick={() => setFilter('image')}
            >
              Photos
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMedia.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden cursor-pointer animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedItem(item)}
            >
              <div className="aspect-video relative">
                <Image
                  src={isVideoItem(item) ? item.thumbnail : item.src}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                {isVideoItem(item) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-serif text-lg">{item.title}</h3>
                <p className="text-text-light text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for selected item */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-white">
              <div className="relative">
                {isVideoItem(selectedItem) ? (
                  <div className="aspect-video bg-black flex items-center justify-center">
                    <p className="text-white">Video player would be embedded here</p>
                  </div>
                ) : (
                  <div className="aspect-video relative">
                    <Image
                      src={selectedItem.src}
                      alt={selectedItem.title}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                )}
                <button
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center"
                  onClick={() => setSelectedItem(null)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl mb-2">{selectedItem.title}</h3>
                <p className="text-text-light">{selectedItem.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MediaGallery;
