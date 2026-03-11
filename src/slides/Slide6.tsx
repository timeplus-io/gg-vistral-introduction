import React from 'react';
import { motion } from 'motion/react';
import { Palette, MoveHorizontal, Maximize, ArrowRight, CircleDashed } from 'lucide-react';

export default function Slide6() {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-4 shrink-0"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-[#D53F8C] w-8 h-8 flex items-center justify-center rounded-[4px] text-white font-mono font-bold text-[14px]">
            2
          </div>
          <h1 className="text-[24px] font-semibold text-[#231F2B]">
            The Aesthetics Layer
          </h1>
        </div>
        <p className="text-[16px] text-[#514E58] max-w-3xl">
          Aesthetics (or <em>aes</em>) map variables in your data to visual properties of the geometry. They form the bridge between raw numbers and what we actually see.
        </p>
      </motion.div>

      <div className="flex-1 grid grid-cols-2 gap-12 min-h-0 items-start pt-2">
        {/* Left: Explanation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-2"
        >
          <div className="bg-[#F7F6F6] border border-[#DAD9DB] rounded-[4px] p-3">
            <h2 className="text-[18px] font-semibold text-[#231F2B] mb-2 flex items-center gap-2">
              <Palette className="w-5 h-5 text-[#D53F8C]" />
              Visual Channels
            </h2>
            <ul className="space-y-2 text-[14px] text-[#514E58]">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 bg-white border border-[#DAD9DB] p-1 rounded-[4px] shadow-[2px_2px_0px_#120F1A]">
                  <MoveHorizontal className="w-4 h-4 text-[#D53F8C]" />
                </div>
                <div>
                  <strong className="text-[#231F2B] block mb-0.5">Position (X, Y)</strong>
                  <span className="text-[13px]">The most accurate visual channel. Maps continuous or discrete variables to spatial coordinates.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 bg-white border border-[#DAD9DB] p-1 rounded-[4px] shadow-[2px_2px_0px_#120F1A]">
                  <Palette className="w-4 h-4 text-[#D53F8C]" />
                </div>
                <div>
                  <strong className="text-[#231F2B] block mb-0.5">Color (Hue, Lightness)</strong>
                  <span className="text-[13px]">Great for categorical data (grouping) or continuous data (heatmaps, gradients).</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 bg-white border border-[#DAD9DB] p-1 rounded-[4px] shadow-[2px_2px_0px_#120F1A]">
                  <Maximize className="w-4 h-4 text-[#D53F8C]" />
                </div>
                <div>
                  <strong className="text-[#231F2B] block mb-0.5">Size (Area, Length)</strong>
                  <span className="text-[13px]">Maps quantitative values to the physical size of the geometry (e.g., bubble size, bar height).</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 bg-white border border-[#DAD9DB] p-1 rounded-[4px] shadow-[2px_2px_0px_#120F1A]">
                  <CircleDashed className="w-4 h-4 text-[#D53F8C]" />
                </div>
                <div>
                  <strong className="text-[#231F2B] block mb-0.5">Shape & Opacity</strong>
                  <span className="text-[13px]">Secondary channels used to differentiate categories or show density/overlapping data.</span>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Right: Visualization */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col h-full min-h-0 gap-2"
        >
          {/* Mapping Definition */}
          <div className="bg-white border-2 border-[#120F1A] rounded-[4px] shadow-[4px_4px_0px_#120F1A] p-2 flex flex-col">
            <div className="flex items-center justify-between border-b border-[#DAD9DB] pb-1.5 mb-2">
              <span className="font-mono text-[12px] font-bold text-[#231F2B]">aes() Mapping</span>
              <span className="text-[10px] font-mono text-[#D53F8C] bg-[#D53F8C]/10 px-2 py-0.5 rounded-[2px]">RULES</span>
            </div>
            
            <div className="space-y-1.5">
              <motion.div 
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}
                className="flex items-center justify-between bg-[#F7F6F6] p-2 rounded-[2px]"
              >
                <span className="font-mono text-[11px] text-[#514E58] w-24">avg_latency</span>
                <ArrowRight className="w-3 h-3 text-[#D53F8C]" />
                <span className="font-mono text-[11px] font-bold text-[#231F2B] w-24 text-right">X Position</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}
                className="flex items-center justify-between bg-[#F7F6F6] p-2 rounded-[2px]"
              >
                <span className="font-mono text-[11px] text-[#514E58] w-24">event</span>
                <ArrowRight className="w-3 h-3 text-[#D53F8C]" />
                <span className="font-mono text-[11px] font-bold text-[#231F2B] w-24 text-right">Color</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }}
                className="flex items-center justify-between bg-[#F7F6F6] p-2 rounded-[2px]"
              >
                <span className="font-mono text-[11px] text-[#514E58] w-24">count</span>
                <ArrowRight className="w-3 h-3 text-[#D53F8C]" />
                <span className="font-mono text-[11px] font-bold text-[#231F2B] w-24 text-right">Size</span>
              </motion.div>
            </div>
          </div>

          {/* Resulting Visual Output */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="bg-white border-2 border-[#120F1A] rounded-[4px] shadow-[4px_4px_0px_#120F1A] p-2 flex-1 flex flex-col min-h-[140px]"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[12px] font-bold text-[#231F2B]">Visual Output</span>
              <span className="text-[10px] font-mono text-[#D53F8C] bg-[#D53F8C]/10 px-2 py-0.5 rounded-[2px]">RESULT</span>
            </div>
            
            <div className="relative flex-1 border-b-2 border-l-2 border-[#120F1A] ml-6 mb-4 mt-1">
              {/* Y-Axis Label (Implicit) */}
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-mono text-[#514E58] whitespace-nowrap">
                (No Y mapping)
              </span>
              
              {/* X-Axis Label */}
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-[#514E58]">
                avg_latency ➔
              </span>

              {/* Data Points */}
              {/* View (latency: 15, count: 2, color: gray) */}
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5, type: 'spring' }}
                className="absolute top-1/2 -translate-y-1/2 left-[15%] -translate-x-1/2 w-8 h-8 rounded-full bg-[#514E58] opacity-80 border-2 border-[#120F1A] flex items-center justify-center group cursor-pointer"
              >
                <span className="absolute -top-6 text-[9px] font-mono font-bold opacity-0 group-hover:opacity-100 transition-opacity">view</span>
              </motion.div>

              {/* Click (latency: 48.5, count: 2, color: pink) */}
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.7, type: 'spring' }}
                className="absolute top-1/2 -translate-y-1/2 left-[45%] -translate-x-1/2 w-8 h-8 rounded-full bg-[#D53F8C] opacity-80 border-2 border-[#120F1A] flex items-center justify-center group cursor-pointer"
              >
                <span className="absolute -top-6 text-[9px] font-mono font-bold opacity-0 group-hover:opacity-100 transition-opacity">click</span>
              </motion.div>

              {/* Purchase (latency: 105, count: 1, color: purple) */}
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.9, type: 'spring' }}
                className="absolute top-1/2 -translate-y-1/2 left-[85%] -translate-x-1/2 w-5 h-5 rounded-full bg-[#7C3AED] opacity-80 border-2 border-[#120F1A] flex items-center justify-center group cursor-pointer"
              >
                <span className="absolute -top-6 text-[9px] font-mono font-bold opacity-0 group-hover:opacity-100 transition-opacity">purchase</span>
              </motion.div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
