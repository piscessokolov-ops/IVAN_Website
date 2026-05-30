import LoadingScreen from '@/components/ui/LoadingScreen';
import CustomCursor from '@/components/ui/CustomCursor';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ShowreelSection from '@/components/sections/ShowreelSection';
import BackstageSection from '@/components/sections/BackstageSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>

      {/* Loading screen */}
      <LoadingScreen />

      {/* Custom cursor (hidden on touch devices) */}
      <CustomCursor />

      {/* Sticky navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ShowreelSection />
        <BackstageSection />
        <ProcessSection />
        <ContactSection />
      </main>

      <footer style={{
        padding: '24px clamp(24px,5vw,80px)',
        borderTop: '1px solid var(--border)',
        textAlign: 'center',
        fontSize: '0.6rem',
        letterSpacing: '0.18em',
        color: 'var(--ink-muted)',
        textTransform: 'uppercase',
      }}>
        All rights reserved © 2026 Ivan Dubovoi
      </footer>
    </>
  );
}
