'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    num: '1',
    title: 'Discovery',
    desc: 'Deep-dive into your brand, vision, and audience to uncover the core story worth telling.',
  },
  {
    num: '2',
    title: 'Concept',
    desc: 'Crafting the visual language, mood, and narrative direction that will define the film.',
  },
  {
    num: '3',
    title: 'Production',
    desc: 'Precision-led filming with meticulous attention to light, motion, and atmosphere.',
  },
  {
    num: '4',
    title: 'Editing',
    desc: 'Cinematic color grading, rhythm, and sound design that make the piece come alive.',
  },
  {
    num: '5',
    title: 'Delivery',
    desc: 'Multi-format delivery optimized for broadcast, web, and social — ready to make impact.',
  },
];

export default function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="process"
      ref={ref}
      style={{
        padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,80px)',
        maxWidth: 1400,
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 80 }}>
        <motion.span
          className="label"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          How It Works
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
          The Process
        </motion.h2>
      </div>

      {/* Desktop horizontal timeline */}
      <div style={{ position: 'relative' }}>
        {/* Connecting line */}
        <div className="process-connector" style={{
          position: 'absolute',
          top: 24,
          left: 'calc(10% + 24px)',
          right: 'calc(10% + 24px)',
          height: 1,
          background: 'var(--border)',
          zIndex: 0,
        }}>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            style={{
              height: '100%',
              background: 'linear-gradient(to right, var(--gold), rgba(200,169,110,0.3))',
              transformOrigin: 'left',
            }}
          />
        </div>

        {/* Steps row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 0,
          position: 'relative',
          zIndex: 1,
        }}
          className="process-grid"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: [0.4, 0, 0.2, 1] }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 16px',
              }}
            >
              {/* Circle */}
              <motion.div
                className="step-circle"
                initial={{ borderColor: 'rgba(240,235,225,0.08)', color: 'var(--ink-muted)' }}
                animate={inView ? {
                  borderColor: 'rgba(200,169,110,0.3)',
                  color: 'var(--gold)',
                } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
                style={{ marginBottom: 24, flexShrink: 0 }}
              >
                {s.num}
              </motion.div>

              {/* Text group — stays together as one block on mobile */}
              <div className="step-text">
                <h3 style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: '1.2rem',
                  fontWeight: 400,
                  color: 'var(--ink)',
                  marginBottom: 10,
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontSize: '0.78rem',
                  lineHeight: 1.65,
                  color: 'var(--ink-muted)',
                }}>
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile table-like grid — all descriptions start at same x-position */}
      <div className="process-mobile">
        {steps.map((s, i) => (
          <motion.div
            key={s.num + '-m'}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
            style={{ display: 'contents' }}
          >
            <div className="pm-circle">{s.num}</div>
            <div className="pm-title">{s.title}</div>
            <div className="pm-desc">{s.desc}</div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .step-text { text-align: center; }
        .process-mobile { display: none; }

        @media (max-width: 768px) {
          .process-connector { display: none; }
          .process-grid { display: none !important; }

          .process-mobile {
            display: grid;
            grid-template-columns: 48px max-content 1fr;
            column-gap: 20px;
            row-gap: 20px;
            align-items: center;
          }
          .pm-circle {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            border: 1px solid rgba(139,191,214,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: var(--font-cormorant), serif;
            font-size: 1.1rem;
            font-weight: 300;
            color: var(--gold);
            flex-shrink: 0;
            align-self: start;
            margin-top: 2px;
          }
          .pm-title {
            font-family: var(--font-cormorant), serif;
            font-size: 1.15rem;
            font-weight: 400;
            color: var(--ink);
            white-space: nowrap;
            align-self: start;
            padding-top: 13px;
          }
          .pm-desc {
            font-size: 0.78rem;
            line-height: 1.65;
            color: var(--ink-muted);
            align-self: start;
            padding-top: 13px;
          }
        }
      `}</style>
    </section>
  );
}
