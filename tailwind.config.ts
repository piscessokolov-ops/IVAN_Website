import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/sections/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#080808',
        'bg-1': '#0f0f0f',
        'bg-2': '#161616',
        'bg-3': '#1e1e1e',
        ink: '#F0EBE1',
        'ink-dim': '#9A9590',
        'ink-muted': '#555550',
        gold: '#C8A96E',
        'gold-dark': '#8B6914',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-xl': ['clamp(3rem,8vw,8rem)', { lineHeight: '1.0', letterSpacing: '-0.01em' }],
        'hero-lg': ['clamp(2.5rem,5vw,5rem)', { lineHeight: '1.1' }],
        'hero-md': ['clamp(2rem,4vw,4rem)', { lineHeight: '1.1' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.4,0,0.2,1) forwards',
        'slide-up': 'slideUp 0.9s cubic-bezier(0.76,0,0.24,1) forwards',
        'scroll-pulse': 'scrollPulse 2s ease-in-out infinite',
        'atmospheric': 'atmosphericDrift 20s ease-in-out infinite alternate',
        'grain': 'grainShift 0.15s steps(1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollPulse: {
          '0%,100%': { opacity: '0.4', transform: 'scaleY(1)', transformOrigin: 'top' },
          '50%': { opacity: '1', transform: 'scaleY(0.6)', transformOrigin: 'top' },
        },
        atmosphericDrift: {
          '0%': { transform: 'translate(0,0) scale(1)' },
          '100%': { transform: 'translate(-3%,2%) scale(1.05)' },
        },
        grainShift: {
          '0%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-5%,-10%)' },
          '20%': { transform: 'translate(-15%,5%)' },
          '30%': { transform: 'translate(7%,-25%)' },
          '40%': { transform: 'translate(-5%,25%)' },
          '50%': { transform: 'translate(-15%,10%)' },
          '60%': { transform: 'translate(15%,0%)' },
          '70%': { transform: 'translate(0%,15%)' },
          '80%': { transform: 'translate(3%,35%)' },
          '90%': { transform: 'translate(-10%,10%)' },
          '100%': { transform: 'translate(0,0)' },
        },
      },
      backdropBlur: {
        glass: '20px',
      },
      boxShadow: {
        'gold-glow': '0 0 40px rgba(200,169,110,0.15)',
        'card': '0 8px 32px rgba(0,0,0,0.4)',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};

export default config;
