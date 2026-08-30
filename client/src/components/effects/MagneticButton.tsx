import { useRef, type ReactNode, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

export function MagneticButton({
  children,
  className = '',
  strength = 0.3,
  onClick,
  href,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouse = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const scale = useTransform(springX, [-20, 0, 20], [1.02, 1, 1.02]);

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, scale }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className="inline-block"
    >
      <Component
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={className}
      >
        {children}
      </Component>
    </motion.div>
  );
}
