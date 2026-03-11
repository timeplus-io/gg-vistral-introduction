import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutGrid, Columns, Rows } from 'lucide-react';

export default function Slide8() {
  const [isFaceted, setIsFaceted] = useState(false);

  // Dataset with a categorical variable 'cat'
  const data = [
    // Category A (Pink)
    { id: 'a1', cat: 'A', x: 15, y: 30, color: '#D53F8C' },
    { id: 'a2', cat: 'A', x: 35, y: 50, color: '#D53F8C' },
    { id: 'a3', cat: 'A', x: 55, y: 40, color: '#D53F8C' },
    { id: 'a4', cat: 'A', x: 75, y: 60, color: '#D53F8C' },
    { id: 'a5', cat: 'A', x: 90, y: 45, color: '#D53F8C' },
    // Category B (Purple)
    { id: 'b1', cat: 'B', x: 20, y: 70, color: '#7C3AED' },
    { id: 'b2', cat: 'B', x: 40, y: 85, color: '#7C3AED' },
    { id: 'b3', cat: 'B', x: 60, y: 75, color: '#7C3AED' },
    { id: 'b4', cat: 'B', x: 80, y: 90, color: '#7C3AED' },
    { id: 'b5', cat: 'B', x: 95, y: 80, color: '#7C3AED' },
    // Category C (Green)
    { id: 'c1', cat: 'C', x: 10, y: 20, color: '#059669' },
    { id: 'c2', cat: 'C', x: 30, y: 15, color: '#059669' },
    { id: 'c3', cat: 'C', x: 50, y: 35, color: '#059669' },
    { id: 'c4', cat: 'C', x: 70, y: 25, color: '#059669' },
    { id: 'c5', cat: 'C', x: 85, y: 10, color: '#059669' },
  ];

  // Axis definitions for the two states
  const axes = {
    single: { left: 10, width: 85, bottom: 15, height: 75 },
    faceted: {
      A: { left: 5, width: 26, bottom: 15, height: 75 },
      B: { left: 37, width: 26, bottom: 15, height: 75 },
      C: { left: 69, width: 26, bottom: 15, height: 75 },
    }
  };

  const getPointPos = (d: typeof data[0], faceted: boolean) => {
    const axis = faceted ? axes.faceted[d.cat as keyof typeof axes.faceted] : axes.single;
    const left = axis.left + (d.x / 100) * axis.width;
    const bottom = axis.bottom + (d.y / 100) * axis.height;
    return { left: `${left}%`, bottom: `${bottom}%` };
  };

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
            4
          </div>
          <h1 className="text-[24px] font-semibold text-[#231F2B]">
            The Facets Layer
          </h1>
        </div>
        <p className="text-[16px] text-[#514E58] max-w-3xl">
          Faceting generates small multiples, each displaying a different subset of the data. It is a powerful way to compare distributions or relationships across different categories without cluttering a single plot.
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
          <div className="bg-[#F7F6F6] border border-[#DAD9DB] rounded-[4px] p-2">
            <h2 className="text-[16px] font-semibold text-[#231F2B] mb-1.5 flex items-center gap-2">
              <LayoutGrid className="w-4 h-4 text-[#D53F8C]" />
              Types of Faceting
            </h2>
            <ul className="space-y-2 text-[13px] text-[#514E58]">
              <li className="flex items-start gap-2">
                <div className="mt-0.5 bg-white border border-[#DAD9DB] p-1 rounded-[4px] shadow-[2px_2px_0px_#120F1A]">
                  <Columns className="w-3 h-3 text-[#D53F8C]" />
                </div>
                <div>
                  <strong className="text-[#231F2B] block mb-0.5">facet_wrap()</strong>
                  <span className="text-[12px] leading-tight block">
                    Wraps a 1D sequence of panels into 2D. This is generally the most useful facet when you have a single categorical variable with many levels. It automatically arranges the plots into a grid that fits the screen.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-0.5 bg-white border border-[#DAD9DB] p-1 rounded-[4px] shadow-[2px_2px_0px_#120F1A]">
                  <Rows className="w-3 h-3 text-[#D53F8C]" />
                </div>
                <div>
                  <strong className="text-[#231F2B] block mb-0.5">facet_grid()</strong>
                  <span className="text-[12px] leading-tight block">
                    Forms a matrix of panels defined by row and column faceting variables. It is most useful when you have two discrete variables, and all combinations of the variables exist in the data.
                  </span>
                </div>
              </li>
            </ul>
            
            <div className="mt-2 p-2 bg-white border border-[#DAD9DB] rounded-[4px]">
              <h3 className="text-[12px] font-bold text-[#231F2B] mb-0.5">Why use facets?</h3>
              <p className="text-[11px] text-[#514E58] leading-tight">
                Plotting too much data on a single set of axes can lead to "overplotting," making it impossible to distinguish patterns. Faceting solves this by separating the data into distinct, comparable visual contexts.
              </p>
            </div>
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
              <span className="font-mono text-[12px] font-bold text-[#231F2B]">Apply Faceting</span>
              <span className="text-[10px] font-mono text-[#D53F8C] bg-[#D53F8C]/10 px-2 py-0.5 rounded-[2px]">INTERACTIVE</span>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setIsFaceted(false)}
                className={`flex-1 py-1.5 px-2 rounded-[2px] font-mono text-[11px] font-bold transition-all border-2 ${
                  !isFaceted 
                    ? 'bg-[#D53F8C] text-white border-[#120F1A] shadow-[2px_2px_0px_#120F1A] translate-y-[-2px]' 
                    : 'bg-[#F7F6F6] text-[#514E58] border-transparent hover:border-[#DAD9DB]'
                }`}
              >
                Single Plot
              </button>
              <button
                onClick={() => setIsFaceted(true)}
                className={`flex-1 py-1.5 px-2 rounded-[2px] font-mono text-[11px] font-bold transition-all border-2 ${
                  isFaceted 
                    ? 'bg-[#D53F8C] text-white border-[#120F1A] shadow-[2px_2px_0px_#120F1A] translate-y-[-2px]' 
                    : 'bg-[#F7F6F6] text-[#514E58] border-transparent hover:border-[#DAD9DB]'
                }`}
              >
                + facet_wrap(~category)
              </button>
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
            
            <div className="relative flex-1 mt-3 mb-1 mx-2">
              <AnimatePresence>
                {/* Single Axis Background */}
                {!isFaceted && (
                  <motion.div
                    key="single-axis"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute border-b-2 border-l-2 border-[#120F1A]"
                    style={{ 
                      left: `${axes.single.left}%`, 
                      width: `${axes.single.width}%`, 
                      bottom: `${axes.single.bottom}%`, 
                      height: `${axes.single.height}%` 
                    }}
                  >
                    <span className="absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-mono text-[#514E58]">
                      Value Y
                    </span>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-[#514E58]">
                      Value X
                    </span>
                  </motion.div>
                )}

                {/* Faceted Axes Backgrounds */}
                {isFaceted && (
                  <motion.div
                    key="faceted-axes"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0"
                  >
                    {['A', 'B', 'C'].map((cat) => {
                      const axis = axes.faceted[cat as keyof typeof axes.faceted];
                      return (
                        <div
                          key={cat}
                          className="absolute border-b-2 border-l-2 border-[#120F1A]"
                          style={{ 
                            left: `${axis.left}%`, 
                            width: `${axis.width}%`, 
                            bottom: `${axis.bottom}%`, 
                            height: `${axis.height}%` 
                          }}
                        >
                          {/* Facet Strip (Title) */}
                          <div className="absolute -top-6 left-0 right-0 bg-[#F7F6F6] border-2 border-[#120F1A] py-0.5 text-center">
                            <span className="text-[10px] font-mono font-bold text-[#231F2B]">Category {cat}</span>
                          </div>
                          
                          {/* Minimal Axis Labels for facets */}
                          {cat === 'A' && (
                            <span className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] font-mono text-[#514E58]">
                              Value Y
                            </span>
                          )}
                          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-mono text-[#514E58]">
                            Value X
                          </span>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Data Points */}
              {data.map((d) => (
                <motion.div
                  key={d.id}
                  className="absolute w-3 h-3 rounded-full border-2 border-[#120F1A] shadow-[1px_1px_0px_#120F1A] z-10"
                  style={{ backgroundColor: d.color, transform: 'translate(-50%, 50%)' }}
                  animate={getPointPos(d, isFaceted)}
                  transition={{ type: 'spring', stiffness: 60, damping: 12 }}
                />
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
