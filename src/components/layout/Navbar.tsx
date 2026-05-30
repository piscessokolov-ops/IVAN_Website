'use client';

import { useEffect, useRef, useState } from 'react';

const links = [
  { label: 'About',     href: '#about'     },
  { label: 'Showreel',  href: '#showreel'  },
  { label: 'Backstage', href: '#backstage' },
  { label: 'Process',   href: '#process'   },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll effect via direct DOM class toggle with hysteresis — no React re-render
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const update = () => {
      const y = window.scrollY;
      if (y > 80) nav.classList.add('nav-scrolled');
      else if (y < 40) nav.classList.remove('nav-scrolled');
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.body.style.overflow = '';
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  return (
    <>
      <nav ref={navRef} className="site-nav">
        {/* Logo */}
        <a
          href="#hero"
          className="nav-logo"
          onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
        >
          Ivan Dubovoi
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
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
        <div className="nav-right">
          <a
            href="#contact"
            className="btn-gold nav-cta"
            onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
          >
            Contact
          </a>
          <button
            className="nav-hamburger"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={menuOpen ? 'bar bar-top open' : 'bar bar-top'} />
            <span className={menuOpen ? 'bar bar-mid open' : 'bar bar-mid'} />
            <span className={menuOpen ? 'bar bar-bot open' : 'bar bar-bot'} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={menuOpen ? 'mobile-menu open' : 'mobile-menu'}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="mobile-link"
            onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
          >
            {l.label}
          </a>
        ))}
        <span className="mobile-location">Vienna, Austria</span>
      </div>

      <style>{`
        /* ── Base nav ── */
        .site-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px 48px;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: padding 0.4s ease, background 0.4s ease, border-color 0.4s ease;
        }
        .site-nav.nav-scrolled {
          padding: 16px 48px;
          background: rgba(10, 20, 40, 0.92);
          border-bottom-color: rgba(240,235,225,0.06);
        }

        /* ── Logo ── */
        .nav-logo {
          font-family: var(--font-cormorant), serif;
          font-weight: 400;
          font-size: 1.05rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--ink);
          text-decoration: none;
          white-space: nowrap;
        }

        /* ── Desktop links ── */
        .nav-links {
          display: flex;
          list-style: none;
          gap: 40px;
          align-items: center;
        }

        /* ── Right side ── */
        .nav-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .nav-cta {
          padding: 9px 24px;
          font-size: 0.62rem;
        }

        /* ── Hamburger ── */
        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 8px;
          cursor: pointer;
        }
        .bar {
          display: block;
          width: 24px;
          height: 1px;
          background: var(--ink);
          transition: transform 0.35s ease, opacity 0.35s ease;
          transform-origin: center;
        }
        .bar-top.open  { transform: translateY(6px) rotate(45deg); }
        .bar-mid.open  { opacity: 0; }
        .bar-bot.open  { transform: translateY(-6px) rotate(-45deg); }

        /* ── Mobile overlay ── */
        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 999;
          background: rgba(10, 20, 40, 0.97);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 36px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease;
        }
        .mobile-menu.open {
          opacity: 1;
          pointer-events: auto;
        }
        .mobile-link {
          font-family: var(--font-cormorant), serif;
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          font-weight: 300;
          color: var(--ink);
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: color 0.3s;
        }
        .mobile-link:hover { color: var(--gold); }
        .mobile-location {
          position: absolute;
          bottom: 40px;
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--ink-muted);
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .site-nav { padding: 20px 24px; }
          .site-nav.nav-scrolled { padding: 14px 24px; }
          .nav-links, .nav-cta { display: none; }
          .nav-hamburger { display: flex; }
        }
        @media (min-width: 769px) {
          .nav-hamburger { display: none; }
          .mobile-menu { display: none; }
        }
      `}</style>
    </>
  );
}
