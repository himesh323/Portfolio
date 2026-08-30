import { useEffect, useState } from 'react';
import { useIntersection } from '@/hooks/useIntersection';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({
  target,
  duration = 1500,
  suffix = '',
  prefix = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useIntersection({ threshold: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
