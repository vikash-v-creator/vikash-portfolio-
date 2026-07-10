"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

const loaderMessages = [
  "Loading Creativity...",
  "Importing Pixels...",
  "Rendering Ideas...",
  "Optimizing Imagination...",
  "Almost Ready...",
  "Launch.",
];

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const intervalTime = 2500 / loaderMessages.length; // Complete in 2.5s
    const progressInterval = 2500 / 100;

    let msgIdx = 0;
    const msgInterval = setInterval(() => {
      msgIdx++;
      if (msgIdx < loaderMessages.length) {
        setMessageIndex(msgIdx);
      } else {
        clearInterval(msgInterval);
      }
    }, intervalTime);

    let prog = 0;
    const progInterval = setInterval(() => {
      prog++;
      if (prog <= 100) {
        setProgress(prog);
      } else {
        clearInterval(progInterval);
        setTimeout(() => {
          setIsLoaded(true);
          setTimeout(onComplete, 1000); // Wait for exit animation
        }, 300);
      }
    }, progressInterval);

    return () => {
      clearInterval(msgInterval);
      clearInterval(progInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            clipPath: "inset(0 0 100% 0)", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-bg"
        >
          <div className="relative z-10 text-center flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.h2
                key={messageIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-2xl md:text-4xl font-display font-bold text-white mb-8"
              >
                {loaderMessages[messageIndex]}
              </motion.h2>
            </AnimatePresence>

            {/* Progress Bar */}
            <div className="w-64 h-1 bg-surface-2 rounded-full overflow-hidden mt-8">
              <motion.div 
                className="h-full bg-accent-orange"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>
            
            <div className="mt-4 font-mono text-sm text-text-muted">
              {progress}%
            </div>
          </div>
          
          {/* Decorative background grid/dots */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
