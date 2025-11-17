import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Theme } from '../App';
import { Search, Lightbulb, Palette, Code, TestTube, Rocket } from 'lucide-react';

interface DesignProcessProps {
  theme: Theme;
  prefersReducedMotion: boolean;
  data: Array<{
    title: string;
    description: string;
    color: string;
  }>;
}

const processIcons = [Search, Lightbulb, Palette, Code, TestTube, Rocket];

export default function DesignProcess({ theme, prefersReducedMotion, data }: DesignProcessProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="process"
      ref={ref}
      className="py-24 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="mb-16 text-center"
        >
          <p className={`mb-4 tracking-wider uppercase ${
            theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'
          }`}>
            My Approach
          </p>
          <h2 className="tracking-tight mb-6">
            Design Process
          </h2>
          <p className={`max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
          }`}>
            A systematic approach to creating meaningful, user-centered design solutions
          </p>
        </motion.div>

        {/* Desktop Timeline View */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className={`absolute top-20 left-0 right-0 h-px ${
                theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-300'
              }`}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: prefersReducedMotion ? 0 : 1.2, delay: 0.3 }}
              style={{ transformOrigin: 'left' }}
            />

            <div className="grid grid-cols-6 gap-4">
              {data.map((step, index) => {
                const Icon = processIcons[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ 
                      duration: prefersReducedMotion ? 0 : 0.6, 
                      delay: 0.4 + (index * 0.1) 
                    }}
                    className="relative"
                  >
                    {/* Icon Circle */}
                    <motion.div
                      className={`relative z-10 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${
                        theme === 'dark' ? 'bg-neutral-900' : 'bg-neutral-50'
                      }`}
                      style={{ 
                        border: `2px solid ${step.color}`,
                        backgroundColor: `${step.color}15`
                      }}
                      whileHover={{ 
                        scale: prefersReducedMotion ? 1 : 1.1,
                        rotate: prefersReducedMotion ? 0 : 360
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-8 h-8" style={{ color: step.color }} />
                    </motion.div>

                    <div className="text-center">
                      <h3 className="mb-3 tracking-tight">
                        {step.title}
                      </h3>
                      <p className={`${
                        theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-6">
          {data.map((step, index) => {
            const Icon = processIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: prefersReducedMotion ? 0 : 0.6, 
                  delay: 0.1 * index 
                }}
                className={`p-6 rounded-2xl ${
                  theme === 'dark' ? 'bg-neutral-900' : 'bg-neutral-100'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ 
                      border: `2px solid ${step.color}`,
                      backgroundColor: `${step.color}15`
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: step.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 tracking-tight">
                      {step.title}
                    </h3>
                    <p className={theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}