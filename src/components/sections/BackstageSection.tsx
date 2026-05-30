'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

// 2 columns everywhere — same layout on desktop and mobile
const rows = [
  [
    '/backstage/photo_5219679858437332353_y.jpg',
    '/backstage/photo_5219679858437332355_y.jpg',
  ],
  [
    '/backstage/photo_5219679858437332356_y.jpg',
    '/backstage/photo_5219679858437332358_y.jpg',
  ],
  [
    '/backstage/photo_5219679858437332359_y.jpg',
    '/backstage/photo_5219679858437332364_y.jpg',
  ],
  [
    '/backstage/IMG_5494.jpg',
    '/backstage/photo_5212995476276764687_y.jpg',
  ],
  [
    '/backstage/PXL_20240509_160310171.jpg',
  ],
];

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

      {/* Gallery — identical on all screen sizes */}
      <div className="bs-gallery">
        {rows.map((row, ri) => (
          <motion.div
            key={ri}
            className="bs-row"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.12 * ri }}
          >
            {row.map((src, ci) => (
              <div key={src} className="bs-cell">
                <Image
                  src={src}
                  alt={`Backstage ${ri * 2 + ci + 1}`}
                  fill
                  sizes="(max-width: 600px) 50vw, 50vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
            ))}
          </motion.div>
        ))}
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
          height: clamp(160px, 30vw, 480px);
        }
        .bs-cell {
          position: relative;
          flex: 1;
          overflow: hidden;
        }
        .bs-cell img {
          transition: transform 0.5s ease;
        }
        .bs-cell:hover img {
          transform: scale(1.04);
        }
      `}</style>
    </section>
  );
}
