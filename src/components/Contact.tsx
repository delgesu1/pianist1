import { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLElement>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };
  
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
    <section id="contact" className="section-padding bg-primary text-white" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">Contact</h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-300">
            For bookings, press inquiries, or any other information, please get in touch using the form below or contact Ivan's management directly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-on-scroll opacity-0">
            <h3 className="font-serif text-2xl mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-light border border-gray-700 focus:border-secondary focus:outline-none transition-colors duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-light border border-gray-700 focus:border-secondary focus:outline-none transition-colors duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm uppercase tracking-wider">Subject</label>
                <select 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-light border border-gray-700 focus:border-secondary focus:outline-none transition-colors duration-300"
                >
                  <option value="">Select a subject</option>
                  <option value="Booking Inquiry">Booking Inquiry</option>
                  <option value="Press/Media">Press/Media</option>
                  <option value="Teaching/Masterclass">Teaching/Masterclass</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm uppercase tracking-wider">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-primary-light border border-gray-700 focus:border-secondary focus:outline-none transition-colors duration-300"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className="px-8 py-4 bg-secondary text-primary hover:bg-secondary-light transition-colors duration-300 uppercase tracking-wider text-sm disabled:opacity-70"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
              
              {formStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-800 text-white">
                  Thank you for your message! We'll get back to you as soon as possible.
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-800 text-white">
                  There was an error sending your message. Please try again later.
                </div>
              )}
            </form>
          </div>
          
          <div className="animate-on-scroll opacity-0">
            <h3 className="font-serif text-2xl mb-8">Management & Representation</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-secondary uppercase tracking-wider text-sm mb-3">Worldwide Management</h4>
                <p className="text-white font-serif text-lg mb-2">Classical Artists Management</p>
                <p className="text-gray-300 mb-4">
                  123 Music Lane<br />
                  New York, NY 10001<br />
                  United States
                </p>
                <p className="text-gray-300">
                  <span className="text-white">Email:</span> management@ivanbelminsi.com<br />
                  <span className="text-white">Phone:</span> +1 (212) 555-1234
                </p>
              </div>
              
              <div>
                <h4 className="text-secondary uppercase tracking-wider text-sm mb-3">European Representation</h4>
                <p className="text-white font-serif text-lg mb-2">Vienna Concert Agency</p>
                <p className="text-gray-300 mb-4">
                  Musikstrasse 45<br />
                  1010 Vienna<br />
                  Austria
                </p>
                <p className="text-gray-300">
                  <span className="text-white">Email:</span> europe@ivanbelminsi.com<br />
                  <span className="text-white">Phone:</span> +43 1 234 5678
                </p>
              </div>
              
              <div>
                <h4 className="text-secondary uppercase tracking-wider text-sm mb-3">Asian Representation</h4>
                <p className="text-white font-serif text-lg mb-2">Tokyo Arts Management</p>
                <p className="text-gray-300 mb-4">
                  Harmony Building, 7F<br />
                  Shibuya-ku, Tokyo 150-0002<br />
                  Japan
                </p>
                <p className="text-gray-300">
                  <span className="text-white">Email:</span> asia@ivanbelminsi.com<br />
                  <span className="text-white">Phone:</span> +81 3 1234 5678
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-secondary uppercase tracking-wider text-sm mb-6">Connect with Ivan</h4>
              <div className="flex space-x-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg className="w-6 h-6 fill-current text-white hover:text-secondary transition-colors duration-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg className="w-6 h-6 fill-current text-white hover:text-secondary transition-colors duration-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg className="w-6 h-6 fill-current text-white hover:text-secondary transition-colors duration-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                  <svg className="w-6 h-6 fill-current text-white hover:text-secondary transition-colors duration-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
