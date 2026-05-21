'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    text: '"Ivan transformed our vision into a cinematic masterpiece. The final film exceeded every expectation — emotionally powerful and visually unforgettable."',
    role: 'Creative Director',
    company: 'Premium Agency Vienna',
  },
  {
    text: '"Working with Ivan is an experience in itself. He understands atmosphere, narrative, and light in a way very few videographers do. Our brand film is now our greatest asset."',
    role: 'Founder',
    company: 'Vienna Fashion House',
  },
  {
    text: '"The music video Ivan produced for us gained massive traction within 48 hours. His visual language is distinct, modern, and genuinely cinematic. We\'ll never work with anyone else."',
    role: 'Artist Manager',
    company: 'Sony Music Austria',
  },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (i: number) => setCurrent(i);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 5200);
  };

  useEffect(() => {
    resetInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  return (
    <section
      id="testimonials"
      ref={ref}
      style={{
        background: 'var(--bg-1)',
        padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,80px)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
        <motion.span
          className="label"
          style={{ display: 'block', textAlign: 'center' }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Client Words
        </motion.span>

        {/* Giant quotation mark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 'clamp(5rem,10vw,8rem)',
            lineHeight: 0.5,
            color: 'var(--gold)',
            opacity: 0.28,
            marginBottom: 24,
            display: 'block',
            userSelect: 'none',
          }}
        >
          "
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{ position: 'relative', minHeight: 220 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
            >
              <p style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontStyle: 'italic',
                fontSize: 'clamp(1.3rem,2.5vw,1.9rem)',
                fontWeight: 300,
                lineHeight: 1.6,
                color: 'var(--ink)',
                marginBottom: 32,
              }}>
                {testimonials[current].text}
              </p>
              <div style={{
                fontSize: '0.68rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--ink-muted)',
              }}>
                — <span style={{ color: 'var(--gold)' }}>{testimonials[current].role}</span>,{' '}
                {testimonials[current].company}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Dot indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 48 }}
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); resetInterval(); }}
              style={{
                height: 1,
                width: i === current ? 40 : 24,
                background: i === current ? 'var(--gold)' : 'var(--ink-muted)',
                border: 'none',
                cursor: 'pointer',
                transition: 'width 0.4s, background 0.3s',
                padding: 0,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
