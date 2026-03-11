import React from 'react';
import { motion } from 'motion/react';

export default function Slide3() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-4xl"
      >
        <h1 className="text-[48px] leading-tight font-semibold text-[#231F2B] mb-4">
          Never trust summary statistics alone.
        </h1>
        <h2 className="text-[48px] leading-tight font-semibold text-[#231F2B]">
          Always <span className="text-[#D53F8C] relative inline-block">
            visualize
            <motion.svg 
              className="absolute -bottom-2 left-0 w-full h-4" 
              viewBox="0 0 100 20" 
              preserveAspectRatio="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            >
              <path d="M5 15 Q 50 5 95 15" fill="none" stroke="#D53F8C" strokeWidth="4" strokeLinecap="round" />
            </motion.svg>
          </span> your data.
        </h2>
      </motion.div>
    </div>
  );
}
