'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';


export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
    transition: { duration: 0.9, delay, ease: [0.4, 0, 0.2, 1] },
  });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,80px)',
        maxWidth: 1400,
        margin: '0 auto',
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 'clamp(40px,6vw,80px)',
        alignItems: 'center',
      }}>
        {/* Text column */}
        <div>
          <motion.span className="label" {...fadeUp(0)}>About</motion.span>

          <motion.h2 {...fadeUp(0.1)} style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            marginBottom: 28,
          }}>
            My Approach
          </motion.h2>

          <motion.blockquote {...fadeUp(0.2)} style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontStyle: 'italic',
            fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)',
            fontWeight: 300,
            color: 'var(--ink)',
            lineHeight: 1.55,
            paddingLeft: 20,
            borderLeft: '1px solid var(--gold)',
            marginBottom: 28,
          }}>
            "Visual storytelling that transforms emotion into cinematic experience"
          </motion.blockquote>

          <motion.p {...fadeUp(0.3)} style={{
            fontSize: 'clamp(0.9rem,1.4vw,1.05rem)',
            lineHeight: 1.9,
            color: 'var(--ink-dim)',
            marginBottom: 40,
          }}>
            I'm Ivan Dubovoi, a Vienna-based videographer and cinematographer focused on cinematic storytelling, atmosphere, and emotionally driven visuals. I create commercial content, event films, music videos, and social media content with a strong emphasis on movement, lighting, composition, and mood.
            <br /><br />
            For me, every project is more than just capturing footage — it's about building a visual language that feels authentic, dynamic, and immersive. My goal is to create modern, atmospheric visuals that not only look cinematic but also leave a lasting impression.
          </motion.p>

          {/* Stat */}
          <motion.div {...fadeUp(0.4)}>
            <div style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: 'clamp(2rem,3.5vw,2.8rem)',
              fontWeight: 300,
              color: 'var(--gold)',
              lineHeight: 1,
              marginBottom: 6,
            }}>
              6+
            </div>
            <div style={{
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--ink-muted)',
            }}>
              Years Experience
            </div>
          </motion.div>
        </div>

        {/* Portrait column */}
        <motion.div {...fadeUp(0.15)} style={{ position: 'relative' }}>
          {/* Portrait frame */}
          <div style={{
            aspectRatio: '3/4',
            background: 'var(--bg-2)',
            border: '1px solid var(--border)',
            overflow: 'hidden',
            position: 'relative',
            maxWidth: 480,
          }}>
            {/* Portrait photo */}
            <Image
              src="/photo_about.jpg"
              alt="Ivan Dubovoi"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
            />
          </div>


          {/* "Based in Vienna" tag */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
            style={{
              position: 'absolute',
              top: 24,
              right: -12,
              background: 'rgba(12,24,44,0.88)',
              border: '1px solid var(--border)',
              padding: '10px 18px',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <div style={{ fontSize: '0.58rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Based in
            </div>
            <div style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: '1.1rem',
              fontWeight: 300,
              color: 'var(--ink)',
              letterSpacing: '0.06em',
            }}>
              Vienna, Austria
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
