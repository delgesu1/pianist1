import Image from 'next/image';
import { useEffect, useRef } from 'react';

const Biography = () => {
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
    <section id="biography" className="section-padding bg-background" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="animate-on-scroll opacity-0">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6 font-light">Biography</h2>
            <div className="w-16 h-0.5 bg-secondary mb-8"></div>

            <div className="prose prose-lg max-w-none">
              <p className="mb-6">
                Ivan Belminsi is an internationally acclaimed classical pianist known for his profound interpretations of romantic repertoire and his commanding technique. Born in Vienna to a family of musicians, Ivan began his piano studies at the age of four and gave his first public performance at seven.
              </p>

              <p className="mb-6">
                A graduate of the prestigious Juilliard School in New York, where he studied under the legendary Martha Argerich, Ivan has since performed with leading orchestras including the Vienna Philharmonic, London Symphony Orchestra, and New York Philharmonic.
              </p>

              <p>
                His recordings of Chopin's complete Nocturnes and Beethoven's Piano Sonatas have received critical acclaim, with Gramophone Magazine describing his playing as "possessing both intellectual rigor and poetic sensitivity." Ivan is particularly renowned for his interpretations of Rachmaninoff, Liszt, and Chopin.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-primary text-white hover:bg-primary-light transition-colors duration-300"
              >
                Contact for Bookings
              </a>
            </div>
          </div>

          <div className="relative animate-on-scroll opacity-0">
            <div className="aspect-[3/4] relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-secondary"></div>
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/about.jpg"
                  alt="Ivan Belminsi playing piano"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 bg-secondary p-6 max-w-xs">
              <p className="font-display text-lg italic text-primary">
                "Music is not just notes on a page—it\'s the space between them, the breath, the silence. That\'s where the magic happens."
              </p>
              <p className="mt-2 text-right text-primary-light">— Ivan Belminsi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
