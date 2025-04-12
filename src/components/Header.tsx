import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background py-3 shadow-md' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="z-50 min-w-[180px] mr-8">
          <h1 className={`font-serif text-2xl md:text-3xl transition-all duration-300 whitespace-nowrap ${
            isScrolled ? 'text-primary' : 'text-white'
          }`}>
            Ivan Belminsi
          </h1>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-8 h-0.5 mb-2 transition-all duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-2.5 bg-white' : isScrolled ? 'bg-primary' : 'bg-white'
          }`}></div>
          <div className={`w-8 h-0.5 mb-2 transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : isScrolled ? 'bg-primary' : 'bg-white'
          }`}></div>
          <div className={`w-8 h-0.5 transition-all duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-2.5 bg-white' : isScrolled ? 'bg-primary' : 'bg-white'
          }`}></div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Biography', 'Events', 'Media', 'Albums', 'Repertoire', 'Teaching', 'Press', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              className={`font-sans text-sm uppercase tracking-wider transition-all duration-300 hover:text-secondary ${
                isScrolled ? 'text-text' : 'text-white'
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 bg-primary bg-opacity-95 flex flex-col items-center justify-center transition-all duration-500 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <nav className="flex flex-col items-center space-y-6">
            {['Biography', 'Events', 'Media', 'Albums', 'Repertoire', 'Teaching', 'Press', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="font-sans text-xl text-white uppercase tracking-wider hover:text-secondary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
