import { useEffect, useRef } from 'react';
import Image from 'next/image';

const Teaching = () => {
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
    <section id="teaching" className="section-padding bg-primary text-white" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll opacity-0">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">Teaching Studio</h2>
            <div className="w-16 h-0.5 bg-secondary mb-8"></div>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="mb-6">
                Ivan Belminsi is a dedicated educator who believes in nurturing the next generation of pianists. His teaching philosophy combines technical precision with artistic expression, helping students develop their unique musical voice.
              </p>

              <p className="mb-6">
                As a faculty member at the prestigious Manhattan School of Music, Ivan teaches a select studio of talented pianists at the undergraduate and graduate levels. He also maintains a private studio for exceptional pre-college students.
              </p>

              <h3 className="font-serif text-xl mt-8 mb-4 text-secondary">Masterclasses</h3>
              <p className="mb-6">
                Throughout the year, Ivan conducts masterclasses at conservatories and music festivals worldwide. These intensive sessions focus on interpretation, technique, and performance practice across a wide range of repertoire.
              </p>

              <h3 className="font-serif text-xl mt-8 mb-4 text-secondary">Summer Academy</h3>
              <p>
                The Ivan Belminsi Summer Piano Academy takes place annually in Vienna, Austria. This two-week intensive program includes private lessons, masterclasses, performance opportunities, and lectures on piano literature and performance practice.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block px-6 py-3 border border-secondary text-secondary hover:bg-secondary hover:text-primary transition-all duration-300"
              >
                Inquire About Lessons
              </a>
            </div>
          </div>

          <div className="relative animate-on-scroll opacity-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] relative">
                <Image
                  src="/images/perfomance1.webp"
                  alt="Ivan Belminsi teaching a masterclass"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="aspect-[3/4] relative mt-8">
                <Image
                  src="/images/performance2.jpg"
                  alt="Ivan Belminsi with students"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-secondary p-6 max-w-xs">
              <p className="font-serif text-lg italic text-primary">
                "Teaching is not just about passing on knowledge—it's about inspiring a lifelong passion for music and artistic excellence."
              </p>
              <p className="mt-2 text-right text-primary-light">— Ivan Belminsi</p>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll opacity-0">
          <div className="bg-primary-light p-8">
            <h3 className="font-serif text-xl mb-4 text-secondary">Private Lessons</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• One-on-one instruction</li>
              <li>• Customized curriculum</li>
              <li>• Technical development</li>
              <li>• Repertoire selection</li>
              <li>• Performance preparation</li>
            </ul>
          </div>

          <div className="bg-primary-light p-8">
            <h3 className="font-serif text-xl mb-4 text-secondary">Masterclasses</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Intensive group sessions</li>
              <li>• Performance critique</li>
              <li>• Interpretive guidance</li>
              <li>• Stylistic considerations</li>
              <li>• Audience engagement</li>
            </ul>
          </div>

          <div className="bg-primary-light p-8">
            <h3 className="font-serif text-xl mb-4 text-secondary">Summer Academy</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Two-week intensive program</li>
              <li>• Daily private lessons</li>
              <li>• Performance opportunities</li>
              <li>• Lectures and workshops</li>
              <li>• Cultural excursions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
