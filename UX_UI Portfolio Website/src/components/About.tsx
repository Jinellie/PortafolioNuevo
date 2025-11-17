import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Theme } from '../App';
import { Sparkles, Heart, Lightbulb } from 'lucide-react';

interface AboutProps {
  theme: Theme;
  prefersReducedMotion: boolean;
  data: {
    title: string;
    paragraphs: string[];
    values: Array<{
      title: string;
      description: string;
    }>;
  };
}

const valueIcons = [Sparkles, Heart, Lightbulb];

export default function About({ theme, prefersReducedMotion, data }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="about"
      ref={ref}
      className={`py-24 px-6 lg:px-8 ${
        theme === 'dark' ? 'bg-neutral-900' : 'bg-neutral-100'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Image */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
          >
            <div className={`aspect-[3/4] rounded-2xl overflow-hidden ${
              theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-200'
            }`}>
              <div className="w-full h-full flex items-center justify-center">
                <div className={`w-32 h-32 rounded-full ${
                  theme === 'dark' ? 'bg-neutral-700' : 'bg-neutral-300'
                }`} />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 0.2 }}
            >
              <p className={`mb-4 tracking-wider uppercase ${
                theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'
              }`}>
                About Me
              </p>
              <h2 className="mb-6 tracking-tight">
                Designing with Purpose
              </h2>
              <div className={`space-y-4 mb-12 ${
                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
              }`}>
                {data.paragraphs.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Values */}
              <div className="space-y-6">
                {data.values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: prefersReducedMotion ? 0 : 0.6, 
                      delay: 0.4 + (index * 0.1) 
                    }}
                    className="flex gap-4"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                      theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-200'
                    }`}>
                      {(() => {
                        const Icon = valueIcons[index];
                        return <Icon className="w-6 h-6" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="mb-2 tracking-tight">
                        {value.title}
                      </h3>
                      <p className={theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}>
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}