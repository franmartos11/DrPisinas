import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import PoolSimulator from '@/components/PoolSimulator';
import Portfolio from '@/components/Portfolio';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import RevealFallback from '@/components/RevealFallback';

export default function Home() {
  return (
    <div className="dp">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <PoolSimulator />
        <Portfolio />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <RevealFallback />
    </div>
  );
}
