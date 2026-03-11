import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shapes, Circle, TrendingUp, BarChart3, Layers } from 'lucide-react';

export default function Slide7() {
  const [activeGeom, setActiveGeom] = useState<'point' | 'line' | 'bar'>('point');

  // Simple dataset mapped to percentages
  const data = [
    { id: 'A', x: 20, y: 30, color: '#D53F8C' },
    { id: 'B', x: 50, y: 80, color: '#7C3AED' },
    { id: 'C', x: 80, y: 50, color: '#059669' },
  ];

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-2 shrink-0"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-[#D53F8C] w-8 h-8 flex items-center justify-center rounded-[4px] text-white font-mono font-bold text-[14px]">
            3
          </div>
          <h1 className="text-[24px] font-semibold text-[#231F2B]">
            The Geometries Layer
          </h1>
        </div>
        <p className="text-[16px] text-[#514E58] max-w-3xl">
          Geometries (or <em>geoms</em>) are the actual physical marks we place on the screen. The same data and aesthetics can tell completely different stories depending on the geometry chosen.
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
              <Shapes className="w-5 h-5 text-[#D53F8C]" />
              Common Geometries
            </h2>
            <ul className="space-y-2 text-[14px] text-[#514E58]">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 bg-white border border-[#DAD9DB] p-1 rounded-[4px] shadow-[2px_2px_0px_#120F1A]">
                  <Circle className="w-4 h-4 text-[#D53F8C]" />
                </div>
                <div>
                  <strong className="text-[#231F2B] block mb-0.5">geom_point</strong>
                  <span className="text-[13px] leading-tight block">Draws points (scatter plots). Best for showing relationships between two continuous variables.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 bg-white border border-[#DAD9DB] p-1 rounded-[4px] shadow-[2px_2px_0px_#120F1A]">
                  <TrendingUp className="w-4 h-4 text-[#D53F8C]" />
                </div>
                <div>
                  <strong className="text-[#231F2B] block mb-0.5">geom_line</strong>
                  <span className="text-[13px] leading-tight block">Connects data points. The standard choice for time-series data to emphasize trends over time.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 bg-white border border-[#DAD9DB] p-1 rounded-[4px] shadow-[2px_2px_0px_#120F1A]">
                  <BarChart3 className="w-4 h-4 text-[#D53F8C]" />
                </div>
                <div>
                  <strong className="text-[#231F2B] block mb-0.5">geom_bar / geom_col</strong>
                  <span className="text-[13px] leading-tight block">Draws rectangles. Best for comparing quantities across different categorical groups.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 bg-white border border-[#DAD9DB] p-1 rounded-[4px] shadow-[2px_2px_0px_#120F1A]">
                  <Layers className="w-4 h-4 text-[#D53F8C]" />
                </div>
                <div>
                  <strong className="text-[#231F2B] block mb-0.5">geom_area / geom_polygon</strong>
                  <span className="text-[13px] leading-tight block">Fills the area under a line. Used for stacked volume charts or geographical maps.</span>
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
          {/* Controls */}
          <div className="bg-white border-2 border-[#120F1A] rounded-[4px] shadow-[4px_4px_0px_#120F1A] p-2 flex flex-col">
            <div className="flex items-center justify-between border-b border-[#DAD9DB] pb-1.5 mb-2">
              <span className="font-mono text-[12px] font-bold text-[#231F2B]">Select Geometry</span>
              <span className="text-[10px] font-mono text-[#D53F8C] bg-[#D53F8C]/10 px-2 py-0.5 rounded-[2px]">INTERACTIVE</span>
            </div>
            
            <div className="flex gap-2">
              {(['point', 'line', 'bar'] as const).map((geom) => (
                <button
                  key={geom}
                  onClick={() => setActiveGeom(geom)}
                  className={`flex-1 py-1.5 px-2 rounded-[2px] font-mono text-[11px] font-bold transition-all border-2 ${
                    activeGeom === geom 
                      ? 'bg-[#D53F8C] text-white border-[#120F1A] shadow-[2px_2px_0px_#120F1A] translate-y-[-2px]' 
                      : 'bg-[#F7F6F6] text-[#514E58] border-transparent hover:border-[#DAD9DB]'
                  }`}
                >
                  geom_{geom}()
                </button>
              ))}
            </div>
          </div>

          {/* Resulting Visual Output */}
          <motion.div 
            className="bg-white border-2 border-[#120F1A] rounded-[4px] shadow-[4px_4px_0px_#120F1A] p-2 flex-1 flex flex-col min-h-[140px]"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[12px] font-bold text-[#231F2B]">Visual Output</span>
              <span className="text-[10px] font-mono text-[#D53F8C] bg-[#D53F8C]/10 px-2 py-0.5 rounded-[2px]">RESULT</span>
            </div>
            
            <div className="relative flex-1 border-b-2 border-l-2 border-[#120F1A] ml-8 mb-4 mt-1">
              {/* Y-Axis Label */}
              <span className="absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-mono text-[#514E58]">
                Value ➔
              </span>
              
              {/* X-Axis Label */}
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-[#514E58]">
                Category ➔
              </span>

              {/* Chart Area */}
              <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                  {/* LINE GEOMETRY */}
                  {activeGeom === 'line' && (
                    <motion.div key="line" className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <svg 
                        viewBox="0 0 100 100" 
                        className="absolute inset-0 w-full h-full overflow-visible"
                        preserveAspectRatio="none"
                      >
                        <motion.path
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                          d={`M ${data[0].x} ${100 - data[0].y} L ${data[1].x} ${100 - data[1].y} L ${data[2].x} ${100 - data[2].y}`}
                          fill="none"
                          stroke="#120F1A"
                          strokeWidth="2"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                      {data.map((d, i) => (
                        <motion.div
                          key={d.id}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + (i * 0.1) }}
                          className="absolute w-3 h-3 rounded-full border-2 border-[#120F1A] opacity-100"
                          style={{ 
                            left: `${d.x}%`, 
                            bottom: `${d.y}%`,
                            transform: 'translate(-50%, 50%)',
                            backgroundColor: d.color,
                          }}
                        />
                      ))}
                    </motion.div>
                  )}

                  {/* BAR GEOMETRY */}
                  {activeGeom === 'bar' && (
                    <motion.div key="bar" className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      {data.map((d, i) => (
                        <motion.div
                          key={d.id}
                          initial={{ height: 0 }}
                          animate={{ height: `${d.y}%` }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="absolute bottom-0 w-[15%] border-2 border-[#120F1A] border-b-0 opacity-90"
                          style={{ 
                            left: `${d.x}%`, 
                            transform: 'translateX(-50%)',
                            backgroundColor: d.color,
                            boxShadow: '2px -2px 0px #120F1A'
                          }}
                        />
                      ))}
                    </motion.div>
                  )}

                  {/* POINT GEOMETRY */}
                  {activeGeom === 'point' && (
                    <motion.div key="point" className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      {data.map((d, i) => (
                        <motion.div
                          key={d.id}
                          initial={{ scale: 0, y: 20 }}
                          animate={{ scale: 1, y: 0 }}
                          transition={{ type: 'spring', delay: i * 0.1 }}
                          className="absolute w-6 h-6 rounded-full border-2 border-[#120F1A] opacity-90"
                          style={{ 
                            left: `${d.x}%`, 
                            bottom: `${d.y}%`,
                            transform: 'translate(-50%, 50%)',
                            backgroundColor: d.color,
                            boxShadow: '2px 2px 0px #120F1A'
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
