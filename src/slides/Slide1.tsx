import React from 'react';
import { motion } from 'motion/react';
import StreamingChart from '../components/StreamingChart';

export default function Slide1() {
  return (
    <div className="flex-1 grid grid-cols-2 gap-12 items-center h-full">
      <div className="flex flex-col items-start justify-center text-left pl-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <img 
            src="https://github.com/timeplus-io/vistral/raw/main/examples/assets/timeplus-vistral_logo_pink.svg" 
            alt="Vistral Logo" 
            className="h-20 mb-8"
            referrerPolicy="no-referrer"
          />
          <h1 className="text-[40px] leading-tight mb-4 text-[#231F2B] font-semibold">
            Introduction to Vistral
          </h1>
          <p className="text-[20px] text-[#514E58] max-w-xl">
            the grammar of graphic for streaming data
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-sm text-[#7D7B82]"
        >
          Press <kbd className="px-2 py-1 bg-[#ECECED] border border-[#DAD9DB] rounded text-xs font-mono text-[#231F2B]">Space</kbd> or <kbd className="px-2 py-1 bg-[#ECECED] border border-[#DAD9DB] rounded text-xs font-mono text-[#231F2B]">→</kbd> to continue
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="h-full py-8 pr-8"
      >
        <StreamingChart />
      </motion.div>
    </div>
  );
}
