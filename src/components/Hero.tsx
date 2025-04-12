import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      heroRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div
        ref={heroRef}
        className="absolute inset-0 bg-cover bg-no-repeat hero-bg"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          height: "120%", // Extra height for parallax effect
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-white container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-6xl lg:text-display-large mb-4 fade-in font-light">
          Ivan Belminsi
        </h1>
        <p className="font-sans text-xl md:text-2xl uppercase tracking-widest mb-8 fade-in delay-200 font-light">
          Classical Pianist
        </p>
        <div className="w-16 h-0.5 bg-secondary mb-8 fade-in delay-300"></div>
        <p className="max-w-2xl font-serif text-lg md:text-xl italic fade-in delay-400">
          "Belminsi\'s performances are a rare combination of technical brilliance and profound emotional depth."
        </p>
        <p className="text-sm uppercase tracking-wider mt-2 fade-in delay-500">
          — The New York Times
        </p>

        <div className="mt-12 fade-in delay-500">
          <a
            href="#events"
            className="inline-block px-8 py-3 border-2 border-white hover:bg-white hover:text-primary transition-all duration-300 uppercase tracking-wider text-sm"
          >
            Upcoming Performances
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center fade-in delay-500">
        <span className="text-white text-xs uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-0.5 h-8 bg-white opacity-50 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
