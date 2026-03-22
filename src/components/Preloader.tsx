'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const duration = 2200;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(elapsed / duration, 1);
      setProgress(Math.round(p * 100));
      if (p < 1) requestAnimationFrame(tick);
      else setTimeout(() => { setShow(false); setTimeout(onComplete, 600); }, 400);
    };
    requestAnimationFrame(tick);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.h1
            className="font-display text-5xl md:text-7xl font-bold text-gradient mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Shivansh Dubey
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-sm tracking-[0.4em] uppercase mb-12 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Loading Portfolio
          </motion.p>
          <div className="w-72 md:w-96 h-[3px] bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full shadow-[0_0_15px_hsl(var(--primary)/0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <motion.span
            className="text-primary/60 text-xs mt-4 font-mono font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {progress}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
