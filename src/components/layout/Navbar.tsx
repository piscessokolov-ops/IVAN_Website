'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'About',     href: '#about'     },
  { label: 'Showreel',  href: '#showreel'  },
  { label: 'Backstage', href: '#backstage' },
  { label: 'Process',   href: '#process'   },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  const scrollTo = (href: string) => {
    closeMenu();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: scrolled ? '16px 48px' : '28px 48px',
          transition: 'padding 0.4s, background 0.4s, backdrop-filter 0.4s',
          background: scrolled ? 'rgba(12,24,44,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(240,235,225,0.06)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontWeight: 400,
            fontSize: '1.05rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--ink)',
            textDecoration: 'none',
          }}
        >
          Ivan Dubovoi
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', listStyle: 'none', gap: 40, alignItems: 'center' }}
          className="hidden-mobile">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-link"
                onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <a
            href="#contact"
            className="btn-gold hidden-mobile"
            style={{ padding: '9px 24px', fontSize: '0.62rem' }}
            onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
          >
            Contact
          </a>

          {/* Hamburger */}
          <button
            className="show-mobile"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
              cursor: 'pointer',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: 'block',
                width: 24,
                height: 1,
                background: 'var(--ink)',
                transition: 'transform 0.4s, opacity 0.4s, width 0.4s',
                transformOrigin: 'center',
                transform: menuOpen
                  ? i === 0 ? 'translateY(6px) rotate(45deg)'
                  : i === 2 ? 'translateY(-6px) rotate(-45deg)'
                  : 'none'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'rgba(12,24,44,0.97)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 40,
            }}
          >
            {/* Corner accents */}
            <div style={{
              position: 'absolute',
              top: 32, left: 32,
              width: 28, height: 28,
              borderTop: '1px solid rgba(200,169,110,0.3)',
              borderLeft: '1px solid rgba(200,169,110,0.3)',
            }} />
            <div style={{
              position: 'absolute',
              bottom: 32, right: 32,
              width: 28, height: 28,
              borderBottom: '1px solid rgba(200,169,110,0.3)',
              borderRight: '1px solid rgba(200,169,110,0.3)',
            }} />

            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                  fontWeight: 300,
                  color: 'var(--ink)',
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                  transition: 'color 0.3s',
                }}
                whileHover={{ x: 12, color: '#C8A96E' } as any}
              >
                {l.label}
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                position: 'absolute',
                bottom: 40,
                fontSize: '0.65rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--ink-muted)',
              }}
            >
              Vienna, Austria
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: flex; }
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
