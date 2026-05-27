'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const steps = [20, 45, 70, 90, 100];
    let i = 0;
    const tick = () => {
      if (i < steps.length) {
        setProgress(steps[i]);
        i++;
        setTimeout(tick, i === steps.length ? 400 : 280);
      } else {
        setTimeout(() => setDone(true), 600);
      }
    };
    const timer = setTimeout(tick, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          style={{ position: 'fixed', inset: 0, zIndex: 100000, background: '#000' }}
        >
          {/* Cinematic corner marks */}
          <div style={{
            position: 'absolute',
            inset: 32,
            pointerEvents: 'none',
          }}>
            {[
              { top: 0, left: 0, borderTop: '1px solid rgba(200,169,110,0.3)', borderLeft: '1px solid rgba(200,169,110,0.3)' },
              { top: 0, right: 0, borderTop: '1px solid rgba(200,169,110,0.3)', borderRight: '1px solid rgba(200,169,110,0.3)' },
              { bottom: 0, left: 0, borderBottom: '1px solid rgba(200,169,110,0.3)', borderLeft: '1px solid rgba(200,169,110,0.3)' },
              { bottom: 0, right: 0, borderBottom: '1px solid rgba(200,169,110,0.3)', borderRight: '1px solid rgba(200,169,110,0.3)' },
            ].map((style, i) => (
              <motion.div
                key={i}
                style={{ position: 'absolute', width: 32, height: 32, ...style }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
              />
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontWeight: 300,
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                letterSpacing: '0.5em',
                color: '#F0EBE1',
                textTransform: 'uppercase',
              }}
            >
              Ivan Dubovoi
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{
                width: 'min(320px, 70vw)',
                height: 1,
                background: 'rgba(240,235,225,0.08)',
                overflow: 'hidden',
              }}
            >
              <motion.div
                style={{
                  height: '100%',
                  background: 'var(--gold)',
                  width: `${progress}%`,
                  transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1)',
                }}
              />
            </motion.div>

            {/* Roles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                fontFamily: 'var(--font-outfit), sans-serif',
                fontWeight: 300,
                fontSize: '0.65rem',
                letterSpacing: '0.35em',
                color: 'rgba(232,225,217,0.45)',
                textTransform: 'uppercase',
              }}
            >
              <span>Videographer</span>
              <span style={{ width: 1, height: 12, background: '#8BBFD6', opacity: 0.6, display: 'block' }} />
              <span>Director</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
