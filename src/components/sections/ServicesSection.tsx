'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Commercial Videos',
    desc: 'High-impact brand narratives and product films that convert attention into action and elevate your visual identity.',
    icon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <rect x="3" y="10" width="26" height="22" rx="1.5" stroke="currentColor" strokeWidth="1"/>
        <path d="M29 16.5l10-5.5v19l-10-5.5" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
        <circle cx="16" cy="21" r="4.5" stroke="currentColor" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Event Videography',
    desc: 'Immersive coverage of corporate events, galas, and milestone moments — preserved with cinematic precision.',
    icon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <circle cx="21" cy="21" r="14" stroke="currentColor" strokeWidth="1"/>
        <path d="M21 11v10l6 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        <circle cx="21" cy="21" r="2" fill="currentColor" opacity="0.6"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Music Videos',
    desc: 'Visually daring music films that amplify artistic vision, tell stories, and leave lasting impressions.',
    icon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <circle cx="21" cy="21" r="14" stroke="currentColor" strokeWidth="1"/>
        <circle cx="21" cy="21" r="5" stroke="currentColor" strokeWidth="1"/>
        <line x1="7" y1="21" x2="35" y2="21" stroke="currentColor" strokeWidth="0.6" opacity="0.4"/>
        <line x1="21" y1="7" x2="21" y2="35" stroke="currentColor" strokeWidth="0.6" opacity="0.4"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Social Media Content',
    desc: 'Platform-native vertical content and short-form storytelling engineered for maximum impact and virality.',
    icon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <rect x="4" y="6" width="34" height="30" rx="3" stroke="currentColor" strokeWidth="1"/>
        <path d="M4 14h34" stroke="currentColor" strokeWidth="1"/>
        <circle cx="9.5" cy="10" r="1.5" fill="currentColor" opacity="0.6"/>
        <circle cx="15" cy="10" r="1.5" fill="currentColor" opacity="0.6"/>
        <path d="M14 22l5 5 9-9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Brand Films',
    desc: 'Long-form brand storytelling that builds emotional connection, trust, and a distinctive creative voice.',
    icon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <path d="M7 35L21 7l14 28" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 25h18" stroke="currentColor" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Drone Footage',
    desc: 'Sweeping aerial perspectives that transform landscapes and events into breathtaking cinematic sequences.',
    icon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <circle cx="21" cy="21" r="5" stroke="currentColor" strokeWidth="1"/>
        <line x1="21" y1="5" x2="21" y2="11" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        <line x1="21" y1="31" x2="21" y2="37" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        <line x1="5" y1="21" x2="11" y2="21" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        <line x1="31" y1="21" x2="37" y2="21" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        <circle cx="21" cy="5" r="3" stroke="currentColor" strokeWidth="0.8"/>
        <circle cx="21" cy="37" r="3" stroke="currentColor" strokeWidth="0.8"/>
        <circle cx="5" cy="21" r="3" stroke="currentColor" strokeWidth="0.8"/>
        <circle cx="37" cy="21" r="3" stroke="currentColor" strokeWidth="0.8"/>
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="services"
      ref={ref}
      style={{
        background: 'var(--bg-1)',
        padding: 'clamp(80px,10vw,140px) 0',
      }}
    >
      {/* Header */}
      <div style={{
        maxWidth: 1400,
        margin: '0 auto',
        padding: '0 clamp(24px,5vw,80px)',
        marginBottom: 64,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: 24,
        flexWrap: 'wrap',
      }}>
        <div>
          <motion.span
            className="label"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            What I Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: 'clamp(2.5rem,5vw,4.5rem)',
              fontWeight: 300,
              lineHeight: 1.1,
            }}
          >
            Services
          </motion.h2>
        </div>
        <div className="section-number" style={{ opacity: 0.03 }}>02</div>
      </div>

      {/* Grid */}
      <div style={{
        maxWidth: 1400,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 1,
        background: 'var(--border)',
      }}>
        {services.map((s, i) => (
          <motion.div
            key={s.num}
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.05 * i, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Card number */}
            <span style={{
              position: 'absolute',
              top: 20,
              right: 24,
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: '0.75rem',
              color: 'var(--ink-muted)',
              letterSpacing: '0.1em',
            }}>
              {s.num}
            </span>

            {/* Icon */}
            <div style={{ color: 'var(--gold)', opacity: 0.85, marginBottom: 28 }}>
              {s.icon}
            </div>

            {/* Title */}
            <h3 style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: '1.5rem',
              fontWeight: 400,
              color: 'var(--ink)',
              marginBottom: 14,
              transition: 'color 0.3s',
            }}>
              {s.title}
            </h3>

            {/* Description */}
            <p style={{
              fontSize: '0.83rem',
              lineHeight: 1.75,
              color: 'var(--ink-muted)',
            }}>
              {s.desc}
            </p>

            <div className="service-border" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
