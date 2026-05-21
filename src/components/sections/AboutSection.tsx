'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { number: '8+', label: 'Years Experience' },
  { number: '200+', label: 'Projects' },
  { number: '50+', label: 'Clients' },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
    transition: { duration: 0.9, delay, ease: [0.4, 0, 0.2, 1] },
  });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,80px)',
        position: 'relative',
        maxWidth: 1400,
        margin: '0 auto',
      }}
    >
      {/* Background section number */}
      <div className="section-number" style={{
        position: 'absolute',
        top: 40,
        right: 'clamp(24px,5vw,80px)',
      }}>
        01
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 'clamp(40px,6vw,80px)',
        alignItems: 'center',
      }}>
        {/* Text column */}
        <div>
          <motion.span className="label" {...fadeUp(0)}>About</motion.span>

          <motion.h2 {...fadeUp(0.1)} style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            marginBottom: 28,
          }}>
            About Ivan
          </motion.h2>

          <motion.blockquote {...fadeUp(0.2)} style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontStyle: 'italic',
            fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)',
            fontWeight: 300,
            color: 'var(--ink)',
            lineHeight: 1.55,
            paddingLeft: 20,
            borderLeft: '1px solid var(--gold)',
            marginBottom: 28,
          }}>
            "Every frame is a story waiting to be told."
          </motion.blockquote>

          <motion.p {...fadeUp(0.3)} style={{
            fontSize: 'clamp(0.9rem,1.4vw,1.05rem)',
            lineHeight: 1.9,
            color: 'var(--ink-dim)',
            marginBottom: 40,
          }}>
            Ivan Dubovoi is a Vienna-based videographer focused on cinematic storytelling,
            emotional visuals, and modern brand films. From commercial projects and events
            to music videos and social media content, every frame is crafted with atmosphere,
            movement, and authenticity.
          </motion.p>

          {/* Stats */}
          <motion.div {...fadeUp(0.4)} style={{ display: 'flex', gap: 'clamp(24px,4vw,48px)' }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: 'clamp(2rem,3.5vw,2.8rem)',
                  fontWeight: 300,
                  color: 'var(--gold)',
                  lineHeight: 1,
                  marginBottom: 6,
                }}>
                  {s.number}
                </div>
                <div style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-muted)',
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Portrait column */}
        <motion.div {...fadeUp(0.15)} style={{ position: 'relative' }}>
          {/* Portrait frame */}
          <div style={{
            aspectRatio: '3/4',
            background: 'var(--bg-2)',
            border: '1px solid var(--border)',
            overflow: 'hidden',
            position: 'relative',
            maxWidth: 480,
          }}>
            {/* Ambient light simulation */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: `
                linear-gradient(135deg, rgba(200,169,110,0.07) 0%, transparent 50%),
                radial-gradient(ellipse at 30% 70%, rgba(200,169,110,0.04) 0%, transparent 60%)
              `,
              zIndex: 1,
            }} />

            {/* Portrait placeholder */}
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16,
              color: 'var(--ink-muted)',
            }}>
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none" style={{ opacity: 0.22 }}>
                <circle cx="36" cy="26" r="14" stroke="currentColor" strokeWidth="1"/>
                <path d="M8 64c0-15.464 12.536-28 28-28s28 12.536 28 28" stroke="currentColor" strokeWidth="1"/>
              </svg>
              <span style={{
                fontSize: '0.6rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                opacity: 0.35,
              }}>
                Portrait Photo
              </span>
            </div>

            {/* Film strip dots */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: 20,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              zIndex: 2,
              opacity: 0.12,
            }}>
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} style={{
                  width: 8,
                  height: 12,
                  borderRadius: 1,
                  background: 'var(--ink)',
                }} />
              ))}
            </div>
          </div>

          {/* Decorative offset border */}
          <div style={{
            position: 'absolute',
            bottom: -16,
            right: -16,
            width: '55%',
            height: '55%',
            border: '1px solid rgba(200,169,110,0.2)',
            pointerEvents: 'none',
            maxWidth: 264,
          }} />

          {/* "Based in Vienna" tag */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
            style={{
              position: 'absolute',
              top: 24,
              right: -12,
              background: 'rgba(8,8,8,0.92)',
              border: '1px solid var(--border)',
              padding: '10px 18px',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <div style={{ fontSize: '0.58rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Based in
            </div>
            <div style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: '1.1rem',
              fontWeight: 300,
              color: 'var(--ink)',
              letterSpacing: '0.06em',
            }}>
              Vienna, Austria
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
