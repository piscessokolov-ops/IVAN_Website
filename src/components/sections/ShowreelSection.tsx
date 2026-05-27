'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ShowreelSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="showreel"
      ref={ref}
      style={{
        padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,80px)',
        maxWidth: 1400,
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <motion.span
          className="label"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Cinematic Work
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 'clamp(2.5rem,5vw,4.5rem)',
            fontWeight: 300,
            lineHeight: 1.1,
          }}
        >
          Showreel
        </motion.h2>
      </div>

      {/* Video — 70% width, centered */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        style={{ width: '70%', margin: '0 auto' }}
      >
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#000' }}>
          <iframe
            src="https://www.youtube.com/embed/5qpkhQEErGE?rel=0&modestbranding=1"
            title="Ivan Dubovoi Showreel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
