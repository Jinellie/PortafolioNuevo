import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Theme } from '../App';
import { Award, Trophy, Star } from 'lucide-react';

interface AwardsProps {
  theme: Theme;
  prefersReducedMotion: boolean;
  data: {
    awards: Array<{
      title: string;
      organization: string;
      year: string;
      description: string;
    }>;
    certifications: Array<{
      name: string;
      issuer: string;
      year: string;
    }>;
  };
}

const awardIcons = [Trophy, Star, Award];

export default function Awards({ theme, prefersReducedMotion, data }: AwardsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="py-24 px-6 lg:px-8"
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
            Recognition
          </p>
          <h2 className="tracking-tight">
            Awards & Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Awards */}
          <div>
            <h3 className="mb-8 tracking-tight">
              Awards
            </h3>
            <div className="space-y-6">
              {data.awards.map((award, index) => {
                const Icon = awardIcons[index] || Award;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: prefersReducedMotion ? 0 : 0.6, 
                      delay: index * 0.1 
                    }}
                    whileHover={{ 
                      x: prefersReducedMotion ? 0 : 4,
                      transition: { duration: 0.2 }
                    }}
                    className={`p-6 rounded-2xl transition-all duration-300 ${
                      theme === 'dark' 
                        ? 'bg-neutral-900 hover:bg-neutral-800' 
                        : 'bg-neutral-100 hover:bg-neutral-200'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                        theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-200'
                      }`}>
                        <Icon className="w-6 h-6 text-yellow-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h4 className="tracking-tight">
                            {award.title}
                          </h4>
                          <span className={`flex-shrink-0 ${
                            theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'
                          }`}>
                            {award.year}
                          </span>
                        </div>
                        <p className={`mb-2 ${
                          theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                        }`}>
                          {award.organization}
                        </p>
                        <p className={theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'}>
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="mb-8 tracking-tight">
              Certifications
            </h3>
            <div className="space-y-4">
              {data.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: prefersReducedMotion ? 0 : 0.6, 
                    delay: index * 0.1 
                  }}
                  whileHover={{ 
                    x: prefersReducedMotion ? 0 : 4,
                    transition: { duration: 0.2 }
                  }}
                  className={`p-5 rounded-xl transition-all duration-300 border-l-4 ${
                    theme === 'dark' 
                      ? 'bg-neutral-900 hover:bg-neutral-800 border-neutral-700 hover:border-neutral-500' 
                      : 'bg-neutral-100 hover:bg-neutral-200 border-neutral-300 hover:border-neutral-500'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="mb-1 tracking-tight">
                        {cert.name}
                      </h4>
                      <p className={theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}>
                        {cert.issuer}
                      </p>
                    </div>
                    <span className={`flex-shrink-0 ${
                      theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'
                    }`}>
                      {cert.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}