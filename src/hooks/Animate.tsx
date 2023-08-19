'use client';

import { motion } from 'framer-motion';

export function Animate({
  children,
  delay,
  variant,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  variant: 'fadeUp';
  className?: string;
}) {
  const animateMap = {
    fadeUp: (
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay,
          duration: 0.7,
          ease: [0.74, 0.22, 0.11, 0.64],
        }}
        className={className}
      >
        {children}
      </motion.div>
    ),
  };

  return animateMap[variant];
}


// cubic - bezier(0.74, 0.22, 0.23, 0.77);

// 0.74, 0.22, 0.28, 0.89;

// cubic - bezier(0.74, 0.22, 0.11, 0.64);