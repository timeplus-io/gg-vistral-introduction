import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export const FrameBoundIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 20h10a2 2 0 0 0 2-2V8" />
    <rect x="4" y="4" width="12" height="12" rx="2" />
    <polygon points="8,7 12,10 8,13" fill="currentColor" stroke="none" />
  </svg>
);

const frames = [
  [ { id: 1, x: 30, y: 30 }, { id: 2, x: 20, y: 60 }, { id: 3, x: 60, y: 50 }, { id: 4, x: 50, y: 80 } ],
  [ { id: 1, x: 50, y: 20 }, { id: 2, x: 30, y: 50 }, { id: 3, x: 70, y: 40 }, { id: 4, x: 40, y: 70 } ],
  [ { id: 1, x: 70, y: 30 }, { id: 2, x: 50, y: 40 }, { id: 3, x: 80, y: 60 }, { id: 4, x: 60, y: 80 } ],
];

export default function Slide15() {
  const [activeFrame, setActiveFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFrame((prev) => (prev + 1) % frames.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 flex flex-col h-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 shrink-0"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-white border-2 border-[#120F1A] w-8 h-8 flex items-center justify-center rounded-[4px] shadow-[2px_2px_0px_#120F1A]">
            <FrameBoundIcon className="w-5 h-5 text-[#EC4899]" />
          </div>
          <h1 className="text-[24px] font-semibold text-[#231F2B]">
            Temporal Binding: Frame-Bound
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
              In frame-bound mode, time acts as a playback controller rather than a visual dimension. The visualization displays only data from the current timestamp, like frames in a movie. As time advances, the entire canvas updates to show the new frame.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-bold text-[#231F2B] mb-2">Vistral Grammar</h2>
            <div className="bg-white rounded-[8px] p-4 font-mono text-[13px] text-[#231F2B] shadow-[4px_4px_0px_#EC4899] border-2 border-[#120F1A] leading-relaxed">
              <span className="text-[#D53F8C]">temporal</span>: {'{'}
              <br />
              &nbsp;&nbsp;<span className="text-[#2563EB]">mode</span>: <span className="text-[#059669]">'frame'</span>,
              <br />
              &nbsp;&nbsp;<span className="text-[#2563EB]">field</span>: <span className="text-[#059669]">'timestamp'</span>, <span className="text-[#6B7280]">{'//'} Field that controls frame selection</span>
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
          className="flex flex-col items-center justify-center h-full w-full"
        >
          {/* Main Playback Window */}
          <div className="w-full max-w-md mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-[#514E58] text-[14px] flex items-center gap-2">
                <Play className="w-4 h-4 text-[#EC4899]" /> Live Playback
              </span>
              <span className="font-mono font-bold text-[#EC4899] text-[14px]">t={activeFrame + 1}</span>
            </div>
            <div className="relative w-full aspect-video bg-white border-2 border-[#120F1A] rounded-[8px] shadow-[8px_8px_0px_#120F1A] overflow-hidden">
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#E5E7EB 1px, transparent 1px), linear-gradient(90deg, #E5E7EB 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.5 }}></div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFrame}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  {frames[activeFrame].map((p) => (
                    <div
                      key={p.id}
                      className="absolute rounded-full bg-[#EC4899] w-6 h-6 border-2 border-[#120F1A] shadow-[2px_2px_0px_#120F1A]"
                      style={{ left: `${p.x}%`, top: `${p.y}%`, transform: 'translate(-50%, -50%)' }}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Film Strip (ASCII Art representation) */}
          <div className="flex items-center justify-center gap-4 w-full max-w-lg">
            {frames.map((frame, idx) => (
              <React.Fragment key={`strip-${idx}`}>
                <div className={`flex flex-col items-center gap-2 transition-opacity duration-300 ${activeFrame === idx ? 'opacity-100' : 'opacity-40'}`}>
                  <span className="font-mono text-[12px] font-bold text-[#231F2B]">Frame t={idx + 1}</span>
                  <div className={`relative w-24 h-16 bg-white border-2 ${activeFrame === idx ? 'border-[#EC4899] shadow-[4px_4px_0px_#EC4899]' : 'border-[#120F1A]'} rounded-[4px] overflow-hidden`}>
                    {frame.map((p) => (
                      <div
                        key={`thumb-${p.id}`}
                        className="absolute rounded-full bg-[#EC4899] w-2.5 h-2.5"
                        style={{ left: `${p.x}%`, top: `${p.y}%`, transform: 'translate(-50%, -50%)' }}
                      />
                    ))}
                  </div>
                </div>
                {idx < frames.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-[#9CA3AF]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
