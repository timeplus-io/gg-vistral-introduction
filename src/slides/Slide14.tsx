import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MoveRight, MoveLeft } from 'lucide-react';

const AxisBoundIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 12h18" />
    <path d="M17 8l4 4-4 4" />
    <rect x="7" y="6" width="6" height="12" rx="1" strokeDasharray="2 2" />
    <circle cx="10" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

export default function Slide14() {
  // Generate static points for the seamless scrolling animation
  const points = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: 10 + Math.random() * 80, // percentage
      size: 4 + Math.random() * 6, // px
      opacity: 0.4 + Math.random() * 0.6,
    }));
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
            <AxisBoundIcon className="w-5 h-5 text-[#EC4899]" />
          </div>
          <h1 className="text-[24px] font-semibold text-[#231F2B]">
            Temporal Binding: Axis-Bound
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
              In axis-bound mode, time is explicitly mapped to a visual axis (typically X, but potentially Y). As new data arrives, the visualization scrolls—recent data enters from one edge while old data exits from the opposite edge.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-bold text-[#231F2B] mb-2">Vistral Grammar</h2>
            <div className="bg-white rounded-[8px] p-4 font-mono text-[13px] text-[#231F2B] shadow-[4px_4px_0px_#D53F8C] border-2 border-[#120F1A] leading-relaxed">
              <span className="text-[#D53F8C]">temporal</span>: {'{'}
              <br />
              &nbsp;&nbsp;<span className="text-[#2563EB]">mode</span>: <span className="text-[#059669]">'axis'</span>,
              <br />
              &nbsp;&nbsp;<span className="text-[#2563EB]">field</span>: <span className="text-[#059669]">'time_field'</span>, <span className="text-[#6B7280]">{'//'} Which field contains time</span>
              <br />
              &nbsp;&nbsp;<span className="text-[#2563EB]">axis</span>: <span className="text-[#059669]">'x'</span>, <span className="text-[#6B7280]">{'//'} Which axis time binds to</span>
              <br />
              &nbsp;&nbsp;<span className="text-[#2563EB]">range</span>: <span className="text-[#059669]">'5m'</span> <span className="text-[#6B7280]">{'//'} Visible time window</span>
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
          className="flex flex-col items-center justify-center h-full"
        >
          <div className="w-full max-w-lg">
            {/* Top Label */}
            <div className="flex justify-center items-center gap-2 mb-4 text-[#514E58] font-bold text-[14px]">
              Time Direction <ArrowRight className="w-4 h-4" />
            </div>

            {/* The Window */}
            <div className="relative w-full h-64 bg-white border-2 border-[#120F1A] rounded-[8px] shadow-[8px_8px_0px_#120F1A] overflow-hidden">
              {/* Grid Lines */}
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#E5E7EB 1px, transparent 1px), linear-gradient(90deg, #E5E7EB 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.5 }}></div>
              
              {/* Scrolling Content */}
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
                className="absolute top-0 left-0 h-full w-[200%] flex"
              >
                {/* First Half */}
                <div className="w-1/2 h-full relative">
                  {points.map((p) => (
                    <div
                      key={`p1-${p.id}`}
                      className="absolute rounded-full bg-[#D53F8C]"
                      style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        opacity: p.opacity,
                      }}
                    />
                  ))}
                </div>
                {/* Second Half (Duplicate for seamless loop) */}
                <div className="w-1/2 h-full relative">
                  {points.map((p) => (
                    <div
                      key={`p2-${p.id}`}
                      className="absolute rounded-full bg-[#D53F8C]"
                      style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        opacity: p.opacity,
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Edge Indicators (t-5min and t-now) */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-l from-white to-transparent z-10"></div>
              
              <div className="absolute left-0 bottom-0 w-[2px] h-3 bg-[#120F1A] z-20"></div>
              <div className="absolute right-0 bottom-0 w-[2px] h-3 bg-[#120F1A] z-20"></div>
            </div>

            {/* Bottom Labels */}
            <div className="flex justify-between mt-2 px-1">
              <span className="font-mono text-[12px] font-bold text-[#231F2B]">t-5min</span>
              <span className="font-mono text-[12px] font-bold text-[#231F2B]">t-now</span>
            </div>

            {/* Bottom Arrows */}
            <div className="flex justify-between mt-6 px-4">
              <div className="flex items-center gap-2 text-[#D53F8C] font-bold text-[14px]">
                <MoveLeft className="w-4 h-4" /> Old data exits
              </div>
              <div className="flex items-center gap-2 text-[#3B82F6] font-bold text-[14px]">
                New data enters <MoveRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
