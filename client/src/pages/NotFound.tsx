import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center relative z-10 px-6"
      >
        {/* 404 number */}
        <div className="text-[10rem] md:text-[14rem] font-bold leading-none gradient-text select-none">
          404
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-text-primary -mt-6 mb-4">
          Page not found
        </h1>

        <p className="text-text-secondary max-w-md mx-auto mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-primary text-white font-semibold text-sm hover:bg-accent-secondary transition-colors shadow-lg shadow-accent-primary/25"
          >
            <Home size={16} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-bg-tertiary/50 border border-border-primary text-text-primary font-semibold text-sm hover:border-border-hover transition-all"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
