import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Theme } from '../App';

interface SkillsProps {
  theme: Theme;
  prefersReducedMotion: boolean;
  data: Array<{
    category: string;
    items: string[];
  }>;
}

export default function Skills({ theme, prefersReducedMotion, data }: SkillsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className={`py-24 px-6 lg:px-8 ${
        theme === 'dark' ? 'bg-neutral-900' : 'bg-neutral-100'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="mb-16"
        >
          <p className={`mb-4 tracking-wider uppercase ${
            theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'
          }`}>
            Expertise
          </p>
          <h2 className="tracking-tight">
            Skills & Tools
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: prefersReducedMotion ? 0 : 0.6, 
                delay: categoryIndex * 0.1 
              }}
            >
              <h3 className="mb-6 tracking-tight">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: prefersReducedMotion ? 0 : 0.4, 
                      delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                    }}
                    whileHover={{ 
                      x: prefersReducedMotion ? 0 : 4,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      theme === 'dark' 
                        ? 'bg-neutral-800 hover:bg-neutral-700' 
                        : 'bg-neutral-200 hover:bg-neutral-300'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        theme === 'dark' ? 'bg-neutral-600 group-hover:bg-neutral-400' : 'bg-neutral-400 group-hover:bg-neutral-600'
                      }`} />
                      <span className={`transition-colors ${
                        theme === 'dark' ? 'text-neutral-300 group-hover:text-neutral-100' : 'text-neutral-700 group-hover:text-neutral-900'
                      }`}>
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}