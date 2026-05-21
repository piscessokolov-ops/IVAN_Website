'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const infoItems = [
  {
    label: 'Email',
    value: 'hello@ivandubovoi.com',
    href: 'mailto:hello@ivandubovoi.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1" y="3" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="0.9"/>
        <path d="M1 5l8 6 8-6" stroke="currentColor" strokeWidth="0.9"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    value: '@ivandubovoi',
    href: 'https://instagram.com/ivandubovoi',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="0.9"/>
        <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="0.9"/>
        <circle cx="13" cy="5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Vienna, Austria',
    href: null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2a5 5 0 015 5c0 3.5-5 9-5 9S4 10.5 4 7a5 5 0 015-5z" stroke="currentColor" strokeWidth="0.9"/>
        <circle cx="9" cy="7" r="1.8" stroke="currentColor" strokeWidth="0.9"/>
      </svg>
    ),
  },
];

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.85, delay, ease: [0.4, 0, 0.2, 1] as const },
  });

  return (
    <section
      id="contact"
      ref={ref}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Atmospheric background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(ellipse 60% 60% at 80% 50%, rgba(200,169,110,0.04) 0%, transparent 70%),
          radial-gradient(ellipse 40% 80% at 20% 30%, rgba(100,80,40,0.03) 0%, transparent 60%),
          var(--bg-1)
        `,
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 1400,
        margin: '0 auto',
        padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,80px)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'clamp(48px,8vw,120px)',
        alignItems: 'start',
      }}>
        {/* Left: headline + info */}
        <div>
          <motion.span className="label" {...fadeUp(0)}>Get in Touch</motion.span>

          <motion.h2 {...fadeUp(0.1)} style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 'clamp(2.5rem,5.5vw,5.5rem)',
            fontWeight: 300,
            lineHeight: 1.08,
            marginBottom: 52,
          }}>
            Let's Create<br />
            Something<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Beautiful</em>
          </motion.h2>

          <motion.div {...fadeUp(0.2)} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {infoItems.map((item) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
                <div style={{ color: 'var(--gold)', marginTop: 2, flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{
                    fontSize: '0.6rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-muted)',
                    marginBottom: 3,
                  }}>
                    {item.label}
                  </div>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{
                        fontSize: '0.95rem',
                        color: 'var(--ink-dim)',
                        textDecoration: 'none',
                        transition: 'color 0.3s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-dim)')}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: '0.95rem', color: 'var(--ink-dim)' }}>{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: form */}
        <motion.div {...fadeUp(0.15)}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="form-field">
              <label>Your Name</label>
              <input type="text" placeholder="John Doe" required />
              <div className="form-line" />
            </div>
            <div className="form-field">
              <label>Email Address</label>
              <input type="email" placeholder="hello@yourcompany.com" required />
              <div className="form-line" />
            </div>
            <div className="form-field">
              <label>Project Type</label>
              <input type="text" placeholder="Brand Film / Music Video / Event…" />
              <div className="form-line" />
            </div>
            <div className="form-field">
              <label>Tell Me About Your Project</label>
              <textarea placeholder="Share your vision, timeline, and any details…" />
              <div className="form-line" />
            </div>

            <button
              type="submit"
              className="btn-gold"
              style={{ alignSelf: 'flex-start', marginTop: 8 }}
            >
              {submitted ? 'Message Sent ✓' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
