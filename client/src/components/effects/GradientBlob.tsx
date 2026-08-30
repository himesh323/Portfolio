import { motion } from 'framer-motion';

export function GradientBlob() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary blob — top left */}
      <motion.div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(129,140,248,0.15), transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -30, 50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Secondary blob — right */}
      <motion.div
        className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(167,139,250,0.12), transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 40, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Tertiary blob — bottom */}
      <motion.div
        className="absolute bottom-20 left-1/3 w-[350px] h-[350px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.1), transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, 60, -20, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
