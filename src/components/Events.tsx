import { useEffect, useRef } from 'react';

// Sample event data
const upcomingEvents = [
  {
    id: 1,
    date: 'May 15, 2025',
    time: '8:00 PM',
    venue: 'Carnegie Hall',
    location: 'New York, NY',
    program: 'Rachmaninoff Piano Concerto No. 2 with New York Philharmonic',
    ticketLink: 'https://carnegiehall.org',
  },
  {
    id: 2,
    date: 'June 3, 2025',
    time: '7:30 PM',
    venue: 'Royal Albert Hall',
    location: 'London, UK',
    program: 'Solo Recital: Chopin, Liszt, and Debussy',
    ticketLink: 'https://royalalberthall.com',
  },
  {
    id: 3,
    date: 'June 18, 2025',
    time: '8:00 PM',
    venue: 'Berliner Philharmonie',
    location: 'Berlin, Germany',
    program: 'Beethoven Piano Concerto No. 5 with Berlin Philharmonic',
    ticketLink: 'https://berliner-philharmoniker.de',
  },
  {
    id: 4,
    date: 'July 10, 2025',
    time: '7:00 PM',
    venue: 'Sydney Opera House',
    location: 'Sydney, Australia',
    program: 'Solo Recital: The Complete Chopin Ballades and Scherzi',
    ticketLink: 'https://sydneyoperahouse.com',
  },
  {
    id: 5,
    date: 'August 5, 2025',
    time: '8:30 PM',
    venue: 'Salle Pleyel',
    location: 'Paris, France',
    program: 'Tchaikovsky Piano Concerto No. 1 with Orchestre de Paris',
    ticketLink: 'https://sallepleyel.com',
  },
];

const Events = () => {
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
    <section id="events" className="section-padding bg-primary text-white" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">Upcoming Events</h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-300">
            Experience the artistry of Ivan Belminsi live in concert. From intimate recitals to grand orchestral collaborations, each performance is a unique journey through the world of classical music.
          </p>
        </div>
        
        <div className="space-y-8">
          {upcomingEvents.map((event, index) => (
            <div 
              key={event.id}
              className="bg-primary-light p-6 md:p-8 grid grid-cols-1 md:grid-cols-4 gap-6 items-center animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="md:col-span-1">
                <div className="font-serif text-2xl text-secondary">{event.date}</div>
                <div className="text-gray-300 mt-1">{event.time}</div>
              </div>
              
              <div className="md:col-span-2">
                <h3 className="font-serif text-xl mb-2">{event.venue}</h3>
                <p className="text-gray-300 mb-4">{event.location}</p>
                <p className="text-white">{event.program}</p>
              </div>
              
              <div className="md:col-span-1 flex justify-start md:justify-end">
                <a 
                  href={event.ticketLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 border border-secondary text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 text-center"
                >
                  Get Tickets
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll opacity-0">
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 bg-secondary text-primary hover:bg-secondary-light transition-colors duration-300 uppercase tracking-wider text-sm"
          >
            Book Ivan for Your Event
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
