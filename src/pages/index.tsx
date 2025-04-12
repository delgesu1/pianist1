import { useEffect } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Biography from '@/components/Biography';
import Events from '@/components/Events';
import MediaGallery from '@/components/MediaGallery';
import Albums from '@/components/Albums';
import Repertoire from '@/components/Repertoire';
import Teaching from '@/components/Teaching';
import Press from '@/components/Press';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.closest('a')?.getAttribute('href');
      
      if (href?.startsWith('#')) {
        e.preventDefault();
        const id = href.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100, // Offset for header
            behavior: 'smooth',
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <>
      <Head>
        <title>Ivan Belminsi | Classical Pianist</title>
        <meta name="description" content="Ivan Belminsi - Acclaimed classical pianist performing worldwide. Explore repertoire, upcoming concerts, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <main>
        <Hero />
        <Biography />
        <Events />
        <MediaGallery />
        <Albums />
        <Repertoire />
        <Teaching />
        <Press />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}
