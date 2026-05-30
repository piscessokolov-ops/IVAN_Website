'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const photos = [
  '/backstage/IMG_5494.jpg',
  '/backstage/photo_5212995476276764687_y.jpg',
  '/backstage/photo_5219679858437332353_y.jpg',
  '/backstage/photo_5219679858437332355_y.jpg',
  '/backstage/photo_5219679858437332356_y.jpg',
  '/backstage/photo_5219679858437332358_y.jpg',
  '/backstage/photo_5219679858437332359_y.jpg',
  '/backstage/photo_5219679858437332364_y.jpg',
  '/backstage/PXL_20240509_160310171.jpg',
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

      {/* Grid: uniform rows, no cropping */}
      <div className="backstage-grid">
        {photos.map((src, i) => (
          <motion.div
            key={src}
            className="backstage-cell"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.06 * i }}
          >
            <Image
              src={src}
              alt={`Backstage ${i + 1}`}
              fill
              sizes="(max-width: 600px) 50vw, 33vw"
              style={{ objectFit: 'contain', objectPosition: 'center' }}
            />
          </motion.div>
        ))}
      </div>

      <style>{`
        .backstage-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }
        .backstage-cell {
          position: relative;
          aspect-ratio: 3 / 2;
          overflow: hidden;
        }
        @media (max-width: 600px) {
          .backstage-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2px;
          }
        }
      `}</style>
    </section>
  );
}
