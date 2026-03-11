import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, RefreshCw } from 'lucide-react';

export const KeyBoundIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="8" cy="15" r="4" />
    <path d="M10.8 12.2L19 4" />
    <path d="M14 9l2 2" />
    <path d="M17 6l2 2" />
  </svg>
);

const sequence = [
  { id: 0, label: 'Initial State', data: { A: 100, B: 200, C: 150 }, updated: null },
  { id: 1, label: 'After Update (key=B)', data: { A: 100, B: 250, C: 150 }, updated: 'B' },
  { id: 2, label: 'After Update (key=A)', data: { A: 150, B: 250, C: 150 }, updated: 'A' },
];

export default function Slide16() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sequence.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentState = sequence[activeIndex];

  return (
    <div className="flex-1 flex flex-col h-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 shrink-0"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-white border-2 border-[#120F1A] w-8 h-8 flex items-center justify-center rounded-[4px] shadow-[2px_2px_0px_#120F1A]">
            <KeyBoundIcon className="w-5 h-5 text-[#EC4899]" />
          </div>
          <h1 className="text-[24px] font-semibold text-[#231F2B]">
            Temporal Binding: Key-Bound
          </h1>
        </div>
      </motion.div>

      <div className="flex-1 grid grid-cols-2 gap-12 items-start min-h-0">
        {/* Left: Concept Intro */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-6 overflow-y-auto pr-4 pb-4"
        >
          <div>
            <h2 className="text-[18px] font-bold text-[#231F2B] mb-2">Concept</h2>
            <p className="text-[15px] text-[#514E58] leading-relaxed">
              In key-bound mode, each unique key maintains exactly one data point on the canvas—its most recent value. When new data arrives for a key, it replaces the previous value. Think of chess pieces: each piece (key) has one position (value), and moves update that position.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-bold text-[#231F2B] mb-2">Vistral Grammar</h2>
            <div className="bg-white rounded-[8px] p-4 font-mono text-[13px] text-[#231F2B] shadow-[4px_4px_0px_#EC4899] border-2 border-[#120F1A] leading-relaxed">
              <span className="text-[#D53F8C]">temporal</span>: {'{'}
              <br />
              &nbsp;&nbsp;<span className="text-[#2563EB]">mode</span>: <span className="text-[#059669]">'key'</span>,
              <br />
              &nbsp;&nbsp;<span className="text-[#2563EB]">field</span>: <span className="text-[#059669]">'entity_id'</span>
              <br />
              {'}'}
            </div>
          </div>
        </motion.div>

        {/* Right: Visualization */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center justify-start pt-2 h-full w-full"
        >
          {/* Live Updating View */}
          <div className="w-full max-w-md mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-[#514E58] text-[14px] flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-[#EC4899]" /> Live Updates
              </span>
              <span className="font-mono font-bold text-[#EC4899] text-[13px]">{currentState.label}</span>
            </div>
            <div className="w-full bg-white border-2 border-[#120F1A] rounded-[8px] shadow-[6px_6px_0px_#120F1A] p-5">
              <div className="space-y-3">
                {['A', 'B', 'C'].map((key) => {
                  const value = currentState.data[key as keyof typeof currentState.data];
                  const isUpdated = currentState.updated === key;
                  
                  return (
                    <div key={key} className="flex items-center gap-3">
                      <div className="w-6 font-mono font-bold text-[#231F2B] text-[15px]">{key}:</div>
                      <div className="flex-1 h-6 bg-[#F3F4F6] rounded-[4px] border-2 border-[#120F1A] overflow-hidden relative">
                        <motion.div
                          className={`absolute top-0 left-0 h-full ${isUpdated ? 'bg-[#EC4899]' : 'bg-[#9CA3AF]'}`}
                          initial={false}
                          animate={{ width: `${(value / 300) * 100}%` }}
                          transition={{ type: "spring", stiffness: 120, damping: 15 }}
                        />
                      </div>
                      <div className="w-10 font-mono font-bold text-[#514E58] text-[13px] text-right">
                        {value}
                      </div>
                      <div className="w-14">
                        <AnimatePresence>
                          {isUpdated && (
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 10 }}
                              className="text-[#EC4899] font-bold text-[11px] flex items-center gap-1"
                            >
                              ← new
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Static 3-Step Sequence */}
          <div className="flex items-center justify-center w-full max-w-lg gap-3">
            {sequence.map((step, idx) => (
              <React.Fragment key={`static-${idx}`}>
                <div className={`flex flex-col items-center gap-2 transition-opacity duration-300 ${activeIndex === idx ? 'opacity-100' : 'opacity-40'}`}>
                  <span className="font-mono text-[10px] font-bold text-[#231F2B] text-center whitespace-nowrap">{step.label}</span>
                  <div className={`w-28 bg-white border-2 ${activeIndex === idx ? 'border-[#EC4899] shadow-[4px_4px_0px_#EC4899]' : 'border-[#120F1A]'} rounded-[4px] p-2`}>
                    {['A', 'B', 'C'].map((key) => {
                      const val = step.data[key as keyof typeof step.data];
                      const isNew = step.updated === key;
                      return (
                        <div key={key} className="flex justify-between items-center font-mono text-[11px] my-0.5">
                          <span className="font-bold text-[#231F2B]">{key}: {val}</span>
                          {isNew && <span className="text-[#EC4899] font-bold text-[9px]">←new</span>}
                        </div>
                      );
                    })}
                  </div>
                </div>
                {idx < sequence.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-[#9CA3AF] shrink-0 mt-4" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
