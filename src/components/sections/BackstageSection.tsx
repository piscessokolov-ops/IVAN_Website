'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// ar = natural width / height — used for justified gallery (equal heights, no cropping)
const rowsDesktop: { src: string; ar: number }[][] = [
  [
    { src: '/backstage/photo_5219679858437332353_y.jpg', ar: 828 / 943 },
    { src: '/backstage/photo_5219679858437332355_y.jpg', ar: 1280 / 848 },
  ],
  [
    { src: '/backstage/photo_5219679858437332356_y.jpg', ar: 853 / 1280 },
    { src: '/backstage/photo_5219679858437332358_y.jpg', ar: 964 / 1280 },
  ],
  [
    { src: '/backstage/photo_5219679858437332359_y.jpg', ar: 1070 / 1280 },
    { src: '/backstage/photo_5219679858437332364_y.jpg', ar: 960 / 1280 },
  ],
  [
    { src: '/backstage/IMG_5494.jpg', ar: 2530 / 3162 },
    { src: '/backstage/photo_5212995476276764687_y.jpg', ar: 960 / 1280 },
    { src: '/backstage/PXL_20240509_160310171.jpg', ar: 3072 / 4080 },
  ],
];

const rowsMobile: { src: string; ar: number }[][] = [
  [
    { src: '/backstage/photo_5219679858437332353_y.jpg', ar: 828 / 943 },
    { src: '/backstage/photo_5219679858437332355_y.jpg', ar: 1280 / 848 },
    { src: '/backstage/photo_5219679858437332356_y.jpg', ar: 853 / 1280 },
  ],
  [
    { src: '/backstage/photo_5219679858437332358_y.jpg', ar: 964 / 1280 },
    { src: '/backstage/photo_5219679858437332359_y.jpg', ar: 1070 / 1280 },
    { src: '/backstage/photo_5219679858437332364_y.jpg', ar: 960 / 1280 },
  ],
  [
    { src: '/backstage/IMG_5494.jpg', ar: 2530 / 3162 },
    { src: '/backstage/photo_5212995476276764687_y.jpg', ar: 960 / 1280 },
    { src: '/backstage/PXL_20240509_160310171.jpg', ar: 3072 / 4080 },
  ],
];

function Gallery({ rows, ri }: { rows: { src: string; ar: number }[][]; ri: number }) {
  return (
    <>
      {rows.map((row, i) => (
        <motion.div
          key={i}
          className="bs-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.12 * i }}
        >
          {row.map((photo, ci) => (
            <div key={photo.src} style={{ flex: photo.ar, minWidth: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={`Backstage ${ri + i * row.length + ci + 1}`}
                draggable={false}
                style={{
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
              />
            </div>
          ))}
        </motion.div>
      ))}
    </>
  );
}

export default function BackstageSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="backstage"
      ref={ref}
      style={{
        padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,80px)',
        maxWidth: 1400,
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <motion.span
          className="label"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Behind the Scenes
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
          Backstage
        </motion.h2>
      </div>

      {/* Desktop: 2 per row at 70% width */}
      <div className="bs-desktop">
        <div className="bs-gallery">
          <Gallery rows={rowsDesktop} ri={0} />
        </div>
      </div>

      {/* Mobile: 3 per row, full width */}
      <div className="bs-mobile">
        <div className="bs-gallery">
          <Gallery rows={rowsMobile} ri={0} />
        </div>
      </div>

      <style>{`
        .bs-gallery {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .bs-row {
          display: flex;
          gap: 2px;
          align-items: flex-start;
        }
        .bs-desktop {
          max-width: 70%;
          margin: 0 auto;
        }
        .bs-mobile { display: none; }

        @media (max-width: 768px) {
          .bs-desktop { display: none; }
          .bs-mobile { display: block; }
        }
      `}</style>
    </section>
  );
}
