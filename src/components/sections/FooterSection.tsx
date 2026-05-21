'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/ivandubovoi',
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1"/>
        <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1"/>
        <circle cx="13.5" cy="4.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'Vimeo',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
        <path d="M15.5 6.5c-.1 2-1.5 4.7-4.2 8.3C8.5 18.5 6.2 18.5 4.8 16c-.7-1.4-1.8-6-2.7-6-.3 0-.9.6-1.8 1.8L0 11c1-1 2-1.9 2.8-2.8 1.2-1 2.2-1.6 2.7-1.4 1.4.3 2.2 4.5 2.8 5.9.4 1.1 1 1.7 1.5 1.7.5 0 1.3-.6 2.3-1.9 1-1.3 1.6-2.3 1.6-3.6 0-.6-.3-1-.9-1-.4 0-.9.4-1.8 1.4-.1-2.7 1.2-4 3.7-4 1.3 0 2 .9 1.8 2.2z" fill="currentColor" opacity="0.6"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
        <path d="M17 6c-.2-1.1-.8-1.9-1.9-2C13.3 3.8 9 3.8 9 3.8s-4.3 0-6.1.2C1.8 4.1 1.2 4.9 1 6 .8 7.1.8 9 .8 9s0 1.9.2 3c.2 1.1.8 1.9 1.9 2C4.7 14.2 9 14.2 9 14.2s4.3 0 6.1-.2c1.1-.1 1.7-.9 1.9-2C17.2 10.9 17.2 9 17.2 9s0-1.9-.2-3z" stroke="currentColor" strokeWidth="0.8"/>
        <path d="M7.5 11.5v-5l4.5 2.5z" fill="currentColor" opacity="0.6"/>
      </svg>
    ),
  },
];

const navLinks = ['About', 'Services', 'Portfolio', 'Process', 'Contact'];

export default function FooterSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      ref={ref}
      style={{
        borderTop: '1px solid var(--border)',
        padding: 'clamp(40px,6vw,72px) clamp(24px,5vw,80px) clamp(28px,4vw,44px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 28,
      }}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{
          fontFamily: 'var(--font-cormorant), serif',
          fontSize: '1.4rem',
          fontWeight: 300,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--ink)',
        }}
      >
        Ivan Dubovoi
      </motion.div>

      {/* Nav links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.15, duration: 0.6 }}
        style={{ display: 'flex', gap: 'clamp(16px,3vw,32px)', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {navLinks.map((l) => (
          <button
            key={l}
            onClick={() => scrollTo(l)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.64rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--ink-muted)',
              transition: 'color 0.3s',
              fontFamily: 'var(--font-outfit), sans-serif',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-muted)')}
          >
            {l}
          </button>
        ))}
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.25, duration: 0.9 }}
        style={{
          width: 'min(400px, 80vw)',
          height: 1,
          background: 'linear-gradient(to right, transparent, var(--border), transparent)',
          transformOrigin: 'center',
        }}
      />

      {/* Socials */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ display: 'flex', gap: 16 }}
      >
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href !== '#' ? '_blank' : undefined}
            rel={s.href !== '#' ? 'noopener noreferrer' : undefined}
            className="social-link"
            aria-label={s.label}
          >
            {s.icon}
          </a>
        ))}
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{
          fontSize: '0.6rem',
          letterSpacing: '0.15em',
          color: 'var(--ink-muted)',
          textAlign: 'center',
        }}
      >
        © {new Date().getFullYear()} Ivan Dubovoi. All rights reserved. Vienna, Austria.
      </motion.div>
    </footer>
  );
}
