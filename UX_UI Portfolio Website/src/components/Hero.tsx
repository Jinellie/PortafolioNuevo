import { motion } from 'motion/react';
import { Theme } from '../App';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  theme: Theme;
  prefersReducedMotion: boolean;
  data: {
    name: string;
    role: string;
    heroTagline: string;
    heroDescription: string;
  };
}

export default function Hero({ theme, prefersReducedMotion, data }: HeroProps) {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16 overflow-hidden"
    >
      {/* Artistic Guidelines - Inspired by Swiss Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <motion.div 
          className={`absolute top-0 left-1/4 w-px h-full ${
            theme === 'dark' ? 'bg-neutral-400' : 'bg-neutral-600'
          }`}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          style={{ transformOrigin: 'top' }}
        />
        <motion.div 
          className={`absolute top-0 right-1/3 w-px h-full ${
            theme === 'dark' ? 'bg-neutral-400' : 'bg-neutral-600'
          }`}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          style={{ transformOrigin: 'top' }}
        />
        <motion.div 
          className={`absolute left-0 top-1/3 w-full h-px ${
            theme === 'dark' ? 'bg-neutral-400' : 'bg-neutral-600'
          }`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          style={{ transformOrigin: 'left' }}
        />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Role Label */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className={`inline-block px-6 py-2 rounded-full border ${
              theme === 'dark' ? 'border-neutral-700 text-neutral-400' : 'border-neutral-300 text-neutral-600'
            } tracking-wider uppercase`} style={{ fontSize: '0.75rem' }}>
              {data.role}
            </span>
          </motion.div>

          {/* Main Name - Extra Large */}
          <motion.h1
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 1, delay: 0.4 }}
            className="mb-8 tracking-tighter leading-none"
            style={{ 
              fontSize: 'clamp(3rem, 12vw, 9rem)',
              fontWeight: 600,
              letterSpacing: '-0.04em'
            }}
          >
            {data.name}
          </motion.h1>

          {/* Tagline - Bold Statement */}
          <motion.h2
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: 0.6 }}
            className={`mb-8 tracking-tight ${
              theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
            }`}
            style={{ 
              fontSize: 'clamp(1.25rem, 3vw, 2.5rem)',
              fontWeight: 500,
              lineHeight: 1.2
            }}
          >
            {data.heroTagline}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: 0.8 }}
            className={`max-w-3xl mx-auto mb-16 ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
            }`}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: 1.6 }}
          >
            {data.heroDescription}
          </motion.p>

          {/* CTA Button */}
          <motion.button
            onClick={scrollToWork}
            className={`group inline-flex items-center gap-4 px-12 py-5 rounded-full transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-neutral-50 text-neutral-950 hover:bg-neutral-200 hover:shadow-2xl hover:shadow-neutral-400/20'
                : 'bg-neutral-950 text-neutral-50 hover:bg-neutral-800 hover:shadow-2xl hover:shadow-neutral-950/20'
            }`}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: 1 }}
            whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{ fontSize: '1.125rem', fontWeight: 500 }}
          >
            View Featured Work
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ 
                duration: prefersReducedMotion ? 0 : 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.button>

          {/* Decorative Elements */}
          <div className="mt-24 flex items-center justify-center gap-8">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className={`w-16 h-px ${
                  theme === 'dark' ? 'bg-neutral-700' : 'bg-neutral-300'
                }`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ 
                  duration: prefersReducedMotion ? 0 : 0.8, 
                  delay: 1.2 + (index * 0.1) 
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: prefersReducedMotion ? 0 : 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`flex flex-col items-center gap-2 ${
            theme === 'dark' ? 'text-neutral-600' : 'text-neutral-400'
          }`}
        >
         
          <div className={`w-px h-12 ${
            theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-300'
          }`} />
        </motion.div>
      </motion.div>
    </section>
  );
}
