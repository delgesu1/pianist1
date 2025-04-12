import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Sample albums data
const albumsData = [
  {
    id: 1,
    title: 'Chopin: Complete Nocturnes',
    year: '2024',
    label: 'Deutsche Grammophon',
    cover: '/images/main2.jpg',
    description: 'Ivan Belminsi brings his signature poetic sensitivity to Chopin\'s complete Nocturnes, revealing new depths in these beloved works.',
    tracks: [
      'Nocturne in B-flat minor, Op. 9 No. 1',
      'Nocturne in E-flat major, Op. 9 No. 2',
      'Nocturne in B major, Op. 9 No. 3',
      'Nocturne in F major, Op. 15 No. 1',
      'Nocturne in F-sharp major, Op. 15 No. 2',
      // More tracks would be listed here
    ],
    spotifyUrl: 'https://open.spotify.com/album/example1',
    appleUrl: 'https://music.apple.com/album/example1',
  },
  {
    id: 2,
    title: 'Rachmaninoff: Piano Concertos Nos. 2 & 3',
    year: '2023',
    label: 'Sony Classical',
    cover: '/images/main3.jpg',
    description: 'Recorded with the London Symphony Orchestra under the baton of Sir Antonio Pappano, this album showcases Belminsi\'s virtuosic command of Rachmaninoff\'s most beloved concertos.',
    tracks: [
      'Piano Concerto No. 2 in C minor, Op. 18: I. Moderato',
      'Piano Concerto No. 2 in C minor, Op. 18: II. Adagio sostenuto',
      'Piano Concerto No. 2 in C minor, Op. 18: III. Allegro scherzando',
      'Piano Concerto No. 3 in D minor, Op. 30: I. Allegro ma non tanto',
      'Piano Concerto No. 3 in D minor, Op. 30: II. Intermezzo: Adagio',
      'Piano Concerto No. 3 in D minor, Op. 30: III. Finale: Alla breve',
    ],
    spotifyUrl: 'https://open.spotify.com/album/example2',
    appleUrl: 'https://music.apple.com/album/example2',
  },
  {
    id: 3,
    title: 'Beethoven: Piano Sonatas',
    year: '2022',
    label: 'Decca',
    cover: '/images/playing.jpg',
    description: 'A landmark recording of Beethoven\'s most significant piano sonatas, including the "Pathétique," "Moonlight," "Waldstein," and "Appassionata."',
    tracks: [
      'Piano Sonata No. 8 in C minor, Op. 13 "Pathétique": I. Grave - Allegro di molto e con brio',
      'Piano Sonata No. 8 in C minor, Op. 13 "Pathétique": II. Adagio cantabile',
      'Piano Sonata No. 8 in C minor, Op. 13 "Pathétique": III. Rondo: Allegro',
      'Piano Sonata No. 14 in C-sharp minor, Op. 27 No. 2 "Moonlight": I. Adagio sostenuto',
      // More tracks would be listed here
    ],
    spotifyUrl: 'https://open.spotify.com/album/example3',
    appleUrl: 'https://music.apple.com/album/example3',
  },
  {
    id: 4,
    title: 'Debussy: Préludes',
    year: '2021',
    label: 'Harmonia Mundi',
    cover: '/images/performance3.webp',
    description: 'Belminsi\'s impressionistic approach to Debussy\'s Préludes creates a kaleidoscope of colors and textures, bringing these evocative miniatures to vivid life.',
    tracks: [
      'Préludes, Book 1: I. Danseuses de Delphes',
      'Préludes, Book 1: II. Voiles',
      'Préludes, Book 1: III. Le vent dans la plaine',
      'Préludes, Book 1: IV. Les sons et les parfums tournent dans l\'air du soir',
      // More tracks would be listed here
    ],
    spotifyUrl: 'https://open.spotify.com/album/example4',
    appleUrl: 'https://music.apple.com/album/example4',
  },
];

const Albums = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<typeof albumsData[0] | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="albums" className="section-padding bg-primary text-white" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">Studio Albums</h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-300">
            Explore Ivan Belminsi\'s discography, featuring acclaimed recordings of the classical piano repertoire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {albumsData.map((album, index) => (
            <div
              key={album.id}
              className="group cursor-pointer animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedAlbum(album)}
            >
              <div className="relative aspect-square overflow-hidden mb-4">
                <Image
                  src={album.cover}
                  alt={album.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="font-serif text-xl mb-1">{album.title}</h3>
              <p className="text-gray-300 text-sm">{album.year} • {album.label}</p>
            </div>
          ))}
        </div>

        {/* Album Detail Modal */}
        {selectedAlbum && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-primary-light p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="relative aspect-square">
                    <Image
                      src={selectedAlbum.cover}
                      alt={selectedAlbum.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="mt-6 flex space-x-4">
                    <a
                      href={selectedAlbum.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 bg-[#1DB954] text-white text-center hover:bg-opacity-90 transition-colors duration-300"
                    >
                      Spotify
                    </a>
                    <a
                      href={selectedAlbum.appleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 bg-[#FA243C] text-white text-center hover:bg-opacity-90 transition-colors duration-300"
                    >
                      Apple Music
                    </a>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl">{selectedAlbum.title}</h3>
                      <p className="text-gray-300 mt-1">{selectedAlbum.year} • {selectedAlbum.label}</p>
                    </div>
                    <button
                      className="w-10 h-10 flex items-center justify-center"
                      onClick={() => setSelectedAlbum(null)}
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-300 mb-6">{selectedAlbum.description}</p>
                  <h4 className="text-secondary uppercase tracking-wider text-sm mb-4">Tracklist</h4>
                  <ul className="space-y-3">
                    {selectedAlbum.tracks.map((track, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-gray-400 mr-4">{index + 1}</span>
                        <span>{track}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Albums;
