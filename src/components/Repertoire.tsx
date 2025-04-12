import { useState, useEffect, useRef } from 'react';

// Sample repertoire data
const repertoireData = {
  concertos: [
    'Beethoven: Piano Concerto No. 3 in C minor, Op. 37',
    'Beethoven: Piano Concerto No. 4 in G major, Op. 58',
    'Beethoven: Piano Concerto No. 5 in E-flat major, Op. 73 "Emperor"',
    'Brahms: Piano Concerto No. 1 in D minor, Op. 15',
    'Brahms: Piano Concerto No. 2 in B-flat major, Op. 83',
    'Chopin: Piano Concerto No. 1 in E minor, Op. 11',
    'Chopin: Piano Concerto No. 2 in F minor, Op. 21',
    'Liszt: Piano Concerto No. 1 in E-flat major, S.124',
    'Liszt: Piano Concerto No. 2 in A major, S.125',
    'Mozart: Piano Concerto No. 20 in D minor, K.466',
    'Mozart: Piano Concerto No. 21 in C major, K.467',
    'Mozart: Piano Concerto No. 23 in A major, K.488',
    'Rachmaninoff: Piano Concerto No. 2 in C minor, Op. 18',
    'Rachmaninoff: Piano Concerto No. 3 in D minor, Op. 30',
    'Tchaikovsky: Piano Concerto No. 1 in B-flat minor, Op. 23',
  ],
  soloWorks: [
    'Bach: Goldberg Variations, BWV 988',
    'Bach: The Well-Tempered Clavier, Books I & II',
    'Beethoven: Piano Sonata No. 8 in C minor, Op. 13 "Pathétique"',
    'Beethoven: Piano Sonata No. 14 in C-sharp minor, Op. 27 No. 2 "Moonlight"',
    'Beethoven: Piano Sonata No. 21 in C major, Op. 53 "Waldstein"',
    'Beethoven: Piano Sonata No. 23 in F minor, Op. 57 "Appassionata"',
    'Beethoven: Piano Sonata No. 29 in B-flat major, Op. 106 "Hammerklavier"',
    'Beethoven: Piano Sonata No. 32 in C minor, Op. 111',
    'Chopin: Ballades (Complete)',
    'Chopin: Études, Op. 10 & Op. 25',
    'Chopin: Nocturnes (Complete)',
    'Chopin: Polonaises (Selection)',
    'Chopin: Preludes, Op. 28',
    'Chopin: Scherzos (Complete)',
    'Debussy: Préludes, Books I & II',
    'Liszt: Années de pèlerinage (Selection)',
    'Liszt: Transcendental Études',
    'Rachmaninoff: Études-Tableaux, Op. 33 & Op. 39',
    'Rachmaninoff: Preludes, Op. 23 & Op. 32',
    'Schubert: Piano Sonata in B-flat major, D.960',
    'Schumann: Carnaval, Op. 9',
    'Schumann: Fantasie in C major, Op. 17',
    'Schumann: Kreisleriana, Op. 16',
  ],
  chamberMusic: [
    'Beethoven: Piano Trios (Complete)',
    'Beethoven: Violin Sonatas (Complete)',
    'Brahms: Piano Quartet No. 1 in G minor, Op. 25',
    'Brahms: Piano Quintet in F minor, Op. 34',
    'Brahms: Piano Trio No. 1 in B major, Op. 8',
    'Brahms: Violin Sonatas (Complete)',
    'Dvořák: Piano Quintet No. 2 in A major, Op. 81',
    'Franck: Violin Sonata in A major',
    'Mendelssohn: Piano Trio No. 1 in D minor, Op. 49',
    'Schubert: Piano Quintet in A major, D.667 "Trout"',
    'Schubert: Piano Trio No. 1 in B-flat major, D.898',
    'Schubert: Piano Trio No. 2 in E-flat major, D.929',
    'Schumann: Piano Quartet in E-flat major, Op. 47',
    'Schumann: Piano Quintet in E-flat major, Op. 44',
  ],
};

const Repertoire = () => {
  const [activeCategory, setActiveCategory] = useState<'concertos' | 'soloWorks' | 'chamberMusic'>('concertos');
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
    <section id="repertoire" className="section-padding bg-background" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">Repertoire</h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-text-light">
            Ivan Belminsi's extensive repertoire spans from Bach to contemporary composers, with particular focus on the Romantic period.
          </p>
        </div>
        
        <div className="flex justify-center mb-12 animate-on-scroll opacity-0">
          <div className="inline-flex border border-gray-300 rounded-sm overflow-hidden">
            <button 
              className={`px-6 py-3 text-sm uppercase tracking-wider transition-colors duration-300 ${
                activeCategory === 'concertos' ? 'bg-primary text-white' : 'bg-white text-text hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory('concertos')}
            >
              Concertos
            </button>
            <button 
              className={`px-6 py-3 text-sm uppercase tracking-wider transition-colors duration-300 ${
                activeCategory === 'soloWorks' ? 'bg-primary text-white' : 'bg-white text-text hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory('soloWorks')}
            >
              Solo Works
            </button>
            <button 
              className={`px-6 py-3 text-sm uppercase tracking-wider transition-colors duration-300 ${
                activeCategory === 'chamberMusic' ? 'bg-primary text-white' : 'bg-white text-text hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory('chamberMusic')}
            >
              Chamber Music
            </button>
          </div>
        </div>
        
        <div className="bg-white p-8 shadow-md animate-on-scroll opacity-0">
          <h3 className="font-serif text-2xl mb-6 text-center">
            {activeCategory === 'concertos' && 'Piano Concertos'}
            {activeCategory === 'soloWorks' && 'Solo Piano Works'}
            {activeCategory === 'chamberMusic' && 'Chamber Music'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {repertoireData[activeCategory].map((piece, index) => (
              <div key={index} className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0"></div>
                <p>{piece}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-text-light italic">
              This is a selection of Ivan's most frequently performed works. For a complete repertoire list or specific program inquiries, please contact management.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center animate-on-scroll opacity-0">
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 bg-primary text-white hover:bg-primary-light transition-colors duration-300 uppercase tracking-wider text-sm"
          >
            Request Program Information
          </a>
        </div>
      </div>
    </section>
  );
};

export default Repertoire;
