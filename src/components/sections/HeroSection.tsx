'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: 600,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Vignette */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(4,10,22,0.7) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        maxWidth: 900,
        padding: '0 32px',
      }}>
        {/* Name */}
        <div style={{ overflow: 'hidden', marginBottom: 32 }}>
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ delay: 1.6, duration: 1, ease: [0.76, 0, 0.24, 1] }}
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(3.5rem, 9vw, 9rem)',
              fontWeight: 300,
              lineHeight: 1,
              letterSpacing: '0.06em',
              color: 'var(--ink)',
            }}
          >
            Ivan Dubovoi
          </motion.h1>
        </div>

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.7 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            marginBottom: 16,
          }}
        >
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--ink-dim)' }}>
            Videographer
          </span>
          <span style={{ width: 1, height: 14, background: 'var(--gold)', opacity: 0.6, display: 'block' }} />
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--ink-dim)' }}>
            Director
          </span>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.7 }}
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: 56,
          }}
        >
          Vienna, Austria
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 0.7 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <button className="btn-gold" onClick={() => scrollTo('#showreel')}>
            View Showreel
          </button>
          <button className="btn-outline" onClick={() => scrollTo('#contact')}>
            Let's Work Together
          </button>
        </motion.div>
      </div>
    </section>
  );
}
