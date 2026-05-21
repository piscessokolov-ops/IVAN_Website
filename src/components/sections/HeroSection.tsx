'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [letterboxOpen, setLetterboxOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLetterboxOpen(true), 2800);
    return () => clearTimeout(timer);
  }, []);

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
      {/* Atmospheric background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, #0a0806 0%, #070707 50%, #0c0c0c 100%)',
        overflow: 'hidden',
      }}>
        {/* Drifting light blobs */}
        <div style={{
          position: 'absolute',
          inset: '-50%',
          background: `
            radial-gradient(ellipse 40% 40% at 30% 70%, rgba(200,169,110,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 70% 30%, rgba(100,80,40,0.04) 0%, transparent 60%)
          `,
          animation: 'atmosphericDrift 20s ease-in-out infinite alternate',
        }} />
      </div>

      {/* Video background (swap in real video) */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.32,
        }}
      >
        {/* <source src="/videos/hero.mp4" type="video/mp4" /> */}
      </video>

      {/* Cinematic vignette overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          linear-gradient(to bottom, rgba(8,8,8,0.25) 0%, rgba(8,8,8,0.05) 40%, rgba(8,8,8,0.55) 100%),
          radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.75) 100%)
        `,
        zIndex: 1,
      }} />

      {/* Cinematic letterbox bars */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: letterboxOpen ? 0 : '10%',
        background: '#000',
        zIndex: 2,
        transition: 'height 1.6s cubic-bezier(0.76,0,0.24,1)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: letterboxOpen ? 0 : '10%',
        background: '#000',
        zIndex: 2,
        transition: 'height 1.6s cubic-bezier(0.76,0,0.24,1)',
      }} />

      {/* Hero content */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        textAlign: 'center',
        maxWidth: 960,
        padding: '0 32px',
      }}>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{
            fontSize: '0.62rem',
            letterSpacing: '0.45em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: 28,
          }}
        >
          Videographer · Vienna, Austria
        </motion.div>

        {/* Title */}
        <h1 style={{
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          fontSize: 'clamp(3rem, 7.5vw, 7.5rem)',
          fontWeight: 300,
          lineHeight: 1.02,
          letterSpacing: '-0.01em',
          marginBottom: 28,
          overflow: 'hidden',
        }}>
          {['Cinematic Stories', 'That Feel Real'].map((line, i) => (
            <span key={i} style={{ display: 'block', overflow: 'hidden' }}>
              <motion.span
                style={{ display: 'block' }}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{
                  delay: 1.85 + i * 0.18,
                  duration: 0.9,
                  ease: [0.76, 0, 0.24, 1],
                }}
              >
                {i === 1 ? (
                  <>That Feel <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Real</em></>
                ) : line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{
            fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
            fontWeight: 300,
            fontFamily: 'var(--font-outfit), sans-serif',
            color: 'var(--ink-dim)',
            letterSpacing: '0.12em',
            marginBottom: 52,
          }}
        >
          Videographer &amp; Creative Filmmaker based in Vienna.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <button
            className="btn-gold"
            onClick={() => scrollTo('#portfolio')}
          >
            View Portfolio
          </button>
          <button
            className="btn-outline"
            onClick={() => scrollTo('#contact')}
          >
            Let's Work Together
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <span style={{
          fontSize: '0.58rem',
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          color: 'var(--ink-muted)',
        }}>
          Scroll
        </span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
}
