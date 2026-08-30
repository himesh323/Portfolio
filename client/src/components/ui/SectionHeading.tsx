import { motion } from 'framer-motion';
import { useIntersection } from '@/hooks/useIntersection';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  align?: 'left' | 'center';
}

export function SectionHeading({ badge, title, subtitle, children, align = 'left' }: SectionHeadingProps) {
  const { ref, isInView } = useIntersection({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent-primary/10 text-accent-primary border border-accent-primary/20 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse-glow" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mt-3 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-text-secondary text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  );
}
