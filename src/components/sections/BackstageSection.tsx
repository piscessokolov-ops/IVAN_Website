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

      {/* Masonry columns — full format, no cropping */}
      <div className="backstage-grid">
        {photos.map((src, i) => (
          <motion.div
            key={src}
            className="backstage-item"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.07 * i }}
          >
            <Image
              src={src}
              alt={`Backstage ${i + 1}`}
              width={0}
              height={0}
              sizes="(max-width: 600px) 50vw, 33vw"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </motion.div>
        ))}
      </div>

      <style>{`
        .backstage-grid {
          columns: 3;
          column-gap: 6px;
        }
        .backstage-item {
          break-inside: avoid;
          margin-bottom: 6px;
          overflow: hidden;
          line-height: 0;
        }
        @media (max-width: 600px) {
          .backstage-grid { columns: 2; }
        }
      `}</style>
    </section>
  );
}
