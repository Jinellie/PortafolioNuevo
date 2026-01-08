import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Theme } from '../App';
import CaseStudyCard from './CaseStudyCard';

interface CaseStudiesProps {
  theme: Theme;
  onCaseStudyClick: (id: string) => void;
  prefersReducedMotion: boolean;
  data: any[];
}

export default function CaseStudies({ theme, onCaseStudyClick, prefersReducedMotion, data }: CaseStudiesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="work"
      ref={ref}
      className={`py-32 px-6 lg:px-8 ${
        theme === 'dark' ? 'bg-neutral-900' : 'bg-neutral-100'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="mb-20 text-center"
        >
          
          
          
          <h2 className="tracking-tight mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Featured Work
          </h2>
          <p className={`max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
          }`} style={{ fontSize: '1.125rem' }}>
            Case studies showcasing design thinking, execution, and measurable impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {data.map((study, index) => (
            <CaseStudyCard
              key={study.id}
              caseStudy={study}
              theme={theme}
              onClick={() => onCaseStudyClick(study.id)}
              delay={prefersReducedMotion ? 0 : index * 0.1}
              isInView={isInView}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}