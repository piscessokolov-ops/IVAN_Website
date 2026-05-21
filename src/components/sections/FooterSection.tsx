'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const socials = [
  {
    label: 'Email',
    href: 'mailto:ivan2006dubo@gmail.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
        <rect x="1" y="3" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1"/>
        <path d="M1 5l8 6 8-6" stroke="currentColor" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/ivan_dubovoi_',
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1"/>
        <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1"/>
        <circle cx="13.5" cy="4.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'Telegram',
    href: 'https://t.me/IvanDubovoi',
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
        <path d="M2 9l13-6-5 14-3-5-5-3z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
        <path d="M7 13l1-4 5-4" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/436818151355',
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
        <path d="M9 1.5A7.5 7.5 0 0116.5 9a7.5 7.5 0 01-10.6 6.8L2 17l1.2-3.9A7.5 7.5 0 019 1.5z" stroke="currentColor" strokeWidth="1"/>
        <path d="M6.5 7c.2.7.7 1.4 1.2 1.9.6.6 1.3 1 2 1.2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
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
