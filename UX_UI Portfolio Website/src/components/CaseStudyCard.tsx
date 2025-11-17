import { motion } from 'motion/react';
import { Theme } from '../App';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CaseStudyCardProps {
  caseStudy: {
    id: string;
    title: string;
    category: string;
    description: string;
    thumbnail: string;
    year: string;
    color: string;
  };
  theme: Theme;
  onClick: () => void;
  delay: number;
  isInView: boolean;
  prefersReducedMotion: boolean;
}

export default function CaseStudyCard({ 
  caseStudy, 
  theme, 
  onClick, 
  delay, 
  isInView,
  prefersReducedMotion 
}: CaseStudyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
        theme === 'dark' 
          ? 'bg-neutral-900 hover:bg-neutral-800' 
          : 'bg-neutral-100 hover:bg-neutral-200'
      }`}>
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.div
            whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full h-full"
          >
            <ImageWithFallback
              src={caseStudy.thumbnail}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />

          {/* Arrow icon */}
          <motion.div
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100"
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight className="w-5 h-5 text-white" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8">
          <div className="flex items-center justify-between mb-3">
            <span 
              className="tracking-wider uppercase"
              style={{ 
                color: caseStudy.color,
                fontSize: '0.75rem'
              }}
            >
              {caseStudy.category}
            </span>
            <span className={`${
              theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'
            }`}>
              {caseStudy.year}
            </span>
          </div>
          
          <h3 className="mb-3 tracking-tight">
            {caseStudy.title}
          </h3>
          
          <p className={`${
            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
          }`}>
            {caseStudy.description}
          </p>

          {/* Animated underline */}
          <motion.div
            className="mt-6 h-px bg-current"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4 }}
            style={{ 
              transformOrigin: 'left',
              color: caseStudy.color
            }}
          />
        </div>
      </div>
    </motion.article>
  );
}
