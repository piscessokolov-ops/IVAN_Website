'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Viennese Luxury Brand Film',
    category: 'commercial',
    catLabel: 'Commercial',
    span: 'large',
    gradient: 'linear-gradient(135deg, #1a1008 0%, #2a1c0a 45%, #0f0a06 100%)',
    accent: 'rgba(200,130,40,0.15)',
  },
  {
    id: 2,
    title: 'Editorial: SS Collection',
    category: 'fashion',
    catLabel: 'Fashion',
    span: 'medium',
    gradient: 'linear-gradient(135deg, #0a0a14 0%, #141428 45%, #08080f 100%)',
    accent: 'rgba(80,80,200,0.1)',
  },
  {
    id: 3,
    title: 'Midnight in Vienna',
    category: 'music',
    catLabel: 'Music Videos',
    span: 'medium',
    gradient: 'linear-gradient(135deg, #0a100a 0%, #0e1c0e 45%, #060c06 100%)',
    accent: 'rgba(40,160,80,0.08)',
  },
  {
    id: 4,
    title: 'Corporate Gala 2024',
    category: 'events',
    catLabel: 'Events',
    span: 'small',
    gradient: 'linear-gradient(135deg, #120808 0%, #200c10 45%, #0c0608 100%)',
    accent: 'rgba(200,60,80,0.08)',
  },
  {
    id: 5,
    title: 'Artisan Coffee Story',
    category: 'commercial',
    catLabel: 'Commercial',
    span: 'small',
    gradient: 'linear-gradient(135deg, #080a14 0%, #0e1228 45%, #06080f 100%)',
    accent: 'rgba(60,80,200,0.08)',
  },
  {
    id: 6,
    title: 'Dusk Light Editorial',
    category: 'fashion',
    catLabel: 'Fashion',
    span: 'small',
    gradient: 'linear-gradient(135deg, #100a06 0%, #1e1008 45%, #0a0804 100%)',
    accent: 'rgba(200,140,40,0.1)',
  },
];

const filters = ['All', 'Commercial', 'Fashion', 'Music', 'Events'];

export default function PortfolioSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeFilter, setActiveFilter] = useState('All');
  const [modalProject, setModalProject] = useState<typeof projects[0] | null>(null);

  const filterKey = activeFilter.toLowerCase();
  const visible = projects.filter((p) =>
    filterKey === 'all' || p.category === filterKey || p.catLabel.toLowerCase().includes(filterKey)
  );

  return (
    <>
      <section
        id="portfolio"
        ref={ref}
        style={{
          padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,80px)',
          maxWidth: 1400,
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 48,
          flexWrap: 'wrap',
          gap: 24,
        }}>
          <div>
            <motion.span
              className="label"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              Selected Work
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
              Portfolio
            </motion.h2>
          </div>

          {/* Filter buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}
          >
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Portfolio grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'auto',
          gap: 12,
        }}>
          {projects.map((p, i) => {
            const isVisible = visible.find((v) => v.id === p.id);
            const gridStyle: React.CSSProperties =
              i === 0 ? { gridColumn: 'span 7', gridRow: 'span 2' } :
              i === 1 ? { gridColumn: 'span 5' } :
              i === 2 ? { gridColumn: 'span 5' } :
              i === 3 ? { gridColumn: 'span 4' } :
              i === 4 ? { gridColumn: 'span 4' } :
                        { gridColumn: 'span 4' };

            return (
              <motion.div
                key={p.id}
                className="portfolio-item"
                style={{
                  ...gridStyle,
                  opacity: isVisible ? 1 : 0.15,
                  transition: 'opacity 0.4s',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'var(--bg-2)',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: isVisible ? 1 : 0.15, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.06 * i }}
                onClick={() => isVisible && setModalProject(p)}
              >
                <div className="portfolio-thumb" style={{
                  minHeight: i === 0 ? 520 : 260,
                }}>
                  {/* Cinematic gradient background */}
                  <div className="thumb-inner" style={{ background: p.gradient, position: 'absolute', inset: 0 }}>
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: `radial-gradient(ellipse at 40% 60%, ${p.accent} 0%, transparent 65%)`,
                    }} />
                    {/* Grid lines for cinematic depth */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      opacity: 0.06,
                      backgroundImage: 'linear-gradient(rgba(240,235,225,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(240,235,225,0.5) 1px, transparent 1px)',
                      backgroundSize: '60px 60px',
                    }} />
                  </div>

                  {/* Hover overlay with play button */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0)',
                    transition: 'background 0.4s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                  }}
                  className="thumb-overlay-hover">
                    <div className="play-btn">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M6 3.5l9 5.5-9 5.5V3.5z" fill="white"/>
                      </svg>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="portfolio-info" style={{ zIndex: 3 }}>
                    <div style={{
                      fontSize: '0.6rem',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      marginBottom: 4,
                    }}>
                      {p.catLabel}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontSize: 'clamp(1rem,1.6vw,1.3rem)',
                      fontWeight: 300,
                      color: 'var(--ink)',
                    }}>
                      {p.title}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: stack all in 1 column */}
        <style>{`
          @media (max-width: 900px) {
            #portfolio .portfolio-item { grid-column: span 6 !important; grid-row: auto !important; }
          }
          @media (max-width: 600px) {
            #portfolio .portfolio-item { grid-column: span 12 !important; }
          }
          .portfolio-item:hover .thumb-overlay-hover { background: rgba(0,0,0,0.42) !important; }
        `}</style>
      </section>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setModalProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: 'min(920px, 92vw)',
                position: 'relative',
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setModalProject(null)}
                style={{
                  position: 'absolute',
                  top: -48,
                  right: 0,
                  background: 'none',
                  border: 'none',
                  color: 'var(--ink-dim)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  fontFamily: 'var(--font-outfit), sans-serif',
                  transition: 'color 0.2s',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1"/>
                </svg>
                Close
              </button>

              {/* Video container */}
              <div style={{
                aspectRatio: '16/9',
                background: 'var(--bg-2)',
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 16,
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: modalProject.gradient,
                  opacity: 0.6,
                }} />
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, color: 'var(--ink-dim)' }}>
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="0.8"/>
                    <path d="M26 22l18 10-18 10z" fill="currentColor" opacity="0.5"/>
                  </svg>
                  <span style={{ fontSize: '0.65rem', letterSpacing: '0.28em', textTransform: 'uppercase' }}>
                    {modalProject.catLabel}: {modalProject.title}
                  </span>
                  <span style={{ fontSize: '0.6rem', color: 'var(--ink-muted)', letterSpacing: '0.1em' }}>
                    Add video source to activate
                  </span>
                </div>
              </div>

              {/* Project info bar */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px 0 0',
              }}>
                <div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 4 }}>
                    {modalProject.catLabel}
                  </div>
                  <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.4rem', fontWeight: 300, color: 'var(--ink)' }}>
                    {modalProject.title}
                  </div>
                </div>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>
                  Vienna, Austria
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
