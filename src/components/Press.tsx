import { useEffect, useRef } from 'react';

// Sample press quotes
const pressQuotes = [
  {
    id: 1,
    quote: "Belminsi\'s performances are a rare combination of technical brilliance and profound emotional depth. His Rachmaninoff was nothing short of revelatory.",
    source: "The New York Times",
    date: "March 2025",
  },
  {
    id: 2,
    quote: "A pianist of extraordinary sensitivity and intelligence. Belminsi\'s Chopin Nocturnes recording stands as one of the finest of the past decade.",
    source: "Gramophone Magazine",
    date: "January 2025",
  },
  {
    id: 3,
    quote: "Ivan Belminsi possesses that rare ability to make the piano sing. His phrasing is exquisite, his touch varied and nuanced, his interpretations both personal and faithful to the composer\'s intentions.",
    source: "BBC Music Magazine",
    date: "December 2024",
  },
  {
    id: 4,
    quote: "The audience was spellbound from the first note to the last. Belminsi\'s command of the Rachmaninoff Third Concerto was both technically impeccable and emotionally shattering.",
    source: "The Guardian",
    date: "November 2024",
  },
  {
    id: 5,
    quote: "A towering performance of Beethoven\'s \'Hammerklavier\' Sonata. Belminsi navigated its treacherous technical demands with apparent ease while illuminating the work\'s profound spiritual dimensions.",
    source: "The Washington Post",
    date: "October 2024",
  },
  {
    id: 6,
    quote: "Belminsi\'s Debussy is a masterclass in color and atmosphere. Each Prélude emerged as a perfectly realized miniature world, alive with imagination and poetic insight.",
    source: "Le Figaro",
    date: "September 2024",
  },
];

// Sample news articles
const newsArticles = [
  {
    id: 1,
    title: "Ivan Belminsi Appointed Artist-in-Residence at Vienna Musikverein",
    excerpt: "The prestigious appointment will see Belminsi perform a series of five recitals exploring the evolution of the piano sonata from Scarlatti to Scriabin.",
    source: "Musical America",
    date: "April 15, 2025",
    url: "#",
  },
  {
    id: 2,
    title: "Belminsi\'s Chopin Recording Wins Diapason d\'Or",
    excerpt: "The acclaimed pianist\'s complete Nocturnes recording has been awarded the prestigious French prize, with critics praising its \'poetic sensitivity and technical refinement.\'",
    source: "Diapason Magazine",
    date: "March 10, 2025",
    url: "#",
  },
  {
    id: 3,
    title: "New York Philharmonic Announces 2025-26 Season with Belminsi as Featured Soloist",
    excerpt: "The pianist will perform all five Beethoven piano concertos across three concerts in a special festival celebrating the composer\'s revolutionary impact.",
    source: "Classical Music News",
    date: "February 22, 2025",
    url: "#",
  },
];

const Press = () => {
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
    <section id="press" className="section-padding bg-background" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">Press & Reviews</h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-text-light">
            Critical acclaim and recent news featuring Ivan Belminsi's performances and recordings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Press Quotes */}
          <div className="animate-on-scroll opacity-0">
            <h3 className="font-serif text-2xl mb-8 flex items-center">
              <span className="w-8 h-0.5 bg-secondary mr-4"></span>
              Critical Acclaim
            </h3>

            <div className="space-y-8">
              {pressQuotes.map((quote, index) => (
                <div
                  key={quote.id}
                  className="bg-white p-6 shadow-md"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="font-serif text-lg italic mb-4">"{quote.quote}"</p>
                  <div className="flex justify-between text-text-light text-sm">
                    <span>{quote.source}</span>
                    <span>{quote.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* News Articles */}
          <div className="animate-on-scroll opacity-0">
            <h3 className="font-serif text-2xl mb-8 flex items-center">
              <span className="w-8 h-0.5 bg-secondary mr-4"></span>
              Latest News
            </h3>

            <div className="space-y-8">
              {newsArticles.map((article, index) => (
                <div
                  key={article.id}
                  className="border-b border-gray-200 pb-8"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="font-serif text-xl mb-3">
                    <a href={article.url} className="hover:text-secondary transition-colors duration-300">
                      {article.title}
                    </a>
                  </h4>
                  <p className="text-text-light mb-4">{article.excerpt}</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-lighter">{article.source}</span>
                    <span className="text-text-lighter">{article.date}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300"
              >
                View All News
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Press Kit */}
        <div className="mt-20 bg-primary text-white p-8 md:p-12 text-center animate-on-scroll opacity-0">
          <h3 className="font-serif text-2xl md:text-3xl mb-4">Press Kit</h3>
          <p className="max-w-2xl mx-auto mb-8">
            Download high-resolution photos, biography, and program information for media and promotional use.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#"
              className="inline-block px-6 py-3 bg-white text-primary hover:bg-gray-100 transition-colors duration-300"
            >
              Download Press Kit
            </a>
            <a
              href="#contact"
              className="inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
            >
              Media Inquiries
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Press;
