import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Slide11() {
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);

  const grammarSteps = [
    { id: 1, code: 'Chart.data(carsDataset)', comment: '// 1. Data', desc: 'The raw dataset being visualized' },
    { id: 2, code: '  .aesthetics({\n    x: "wt", \n    y: "mpg", \n    color: "type"\n  })', comment: '// 2. Aesthetics', desc: 'Mapping variables to visual properties' },
    { id: 3, code: '  .geometry("point")', comment: '// 3. Geometries', desc: 'The visual shapes representing data' },
    { id: 4, code: '  .facets("year")', comment: '// 4. Facets', desc: 'Splitting data into small multiples' },
    { id: 5, code: '  .coordinates("cartesian")', comment: '// 5. Coordinates', desc: 'The 2D space (Cartesian grid)' },
    { id: 6, code: '  .theme("minimal")', comment: '// 6. Theme', desc: 'Visual styling (background, grid lines, fonts)' },
  ];

  // Mock data for the two facets
  const points1999 = [
    { x: 20, y: 70, c: '#3B82F6' }, { x: 35, y: 55, c: '#EC4899' },
    { x: 50, y: 40, c: '#3B82F6' }, { x: 70, y: 25, c: '#10B981' },
    { x: 80, y: 30, c: '#EC4899' }
  ];
  
  const points2008 = [
    { x: 25, y: 60, c: '#3B82F6' }, { x: 40, y: 45, c: '#EC4899' },
    { x: 60, y: 30, c: '#3B82F6' }, { x: 75, y: 20, c: '#10B981' },
    { x: 90, y: 15, c: '#EC4899' }
  ];

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 shrink-0"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-white border-2 border-[#120F1A] w-8 h-8 flex items-center justify-center rounded-[4px] shadow-[2px_2px_0px_#120F1A]">
            <CheckCircle2 className="w-5 h-5 text-[#D53F8C]" />
          </div>
          <h1 className="text-[24px] font-semibold text-[#231F2B]">
            The Complete Grammar
          </h1>
        </div>
        <p className="text-[16px] text-[#514E58] max-w-3xl">
          When we combine all seven layers, we get a complete, expressive description of a graphic. Hover over the code to see how each layer contributes to the final chart.
        </p>
      </motion.div>

      <div className="flex-1 grid grid-cols-2 gap-8 min-h-0 items-start">
        {/* Left: Code Block */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white border-2 border-[#120F1A] rounded-[8px] shadow-[8px_8px_0px_#120F1A] p-4 font-code text-[13px] flex flex-col gap-1 overflow-y-auto"
        >
          {grammarSteps.map((step) => (
            <div 
              key={step.id}
              className={`p-2 rounded-[4px] cursor-pointer transition-colors ${hoveredLayer === step.id ? 'bg-[#ECECED]' : 'hover:bg-[#F7F6F6]'}`}
              onMouseEnter={() => setHoveredLayer(step.id)}
              onMouseLeave={() => setHoveredLayer(null)}
            >
              <div className="flex justify-between items-start">
                <span className="text-[#231F2B] whitespace-pre">{step.code}</span>
                <span className="text-[#7D7B82] whitespace-nowrap ml-4">{step.comment}</span>
              </div>
              {hoveredLayer === step.id && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="text-[#D53F8C] mt-1 text-[11px] font-sans font-medium"
                >
                  ↳ {step.desc}
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Right: The Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white border-2 border-[#120F1A] rounded-[8px] shadow-[8px_8px_0px_#120F1A] p-4 flex flex-col h-full min-h-[300px] relative"
        >
          {/* Legend (Aesthetics) */}
          <div 
            className="flex justify-end gap-4 mb-2 transition-opacity duration-300" 
            style={{ opacity: hoveredLayer === 2 || hoveredLayer === null ? 1 : 0.2 }}
          >
            <div className="flex items-center gap-1 text-[10px] font-mono"><div className="w-2 h-2 rounded-full bg-[#3B82F6]"></div> Sedan</div>
            <div className="flex items-center gap-1 text-[10px] font-mono"><div className="w-2 h-2 rounded-full bg-[#EC4899]"></div> SUV</div>
            <div className="flex items-center gap-1 text-[10px] font-mono"><div className="w-2 h-2 rounded-full bg-[#10B981]"></div> Truck</div>
          </div>

          <div className="flex-1 flex gap-4 ml-6">
            {/* Facet 1: 1999 */}
            <div className="flex-1 flex flex-col">
              <div 
                className="bg-[#F3F4F6] text-center py-1 text-[11px] font-bold font-mono border border-[#DAD9DB] border-b-0 transition-opacity duration-300" 
                style={{ opacity: hoveredLayer === 4 || hoveredLayer === null ? 1 : 0.2 }}
              >
                year: 1999
              </div>
              <div 
                className="flex-1 relative border border-[#DAD9DB] bg-white transition-opacity duration-300" 
                style={{ opacity: hoveredLayer === 6 || hoveredLayer === null ? 1 : (hoveredLayer === 5 ? 1 : 0.8) }}
              >
                {/* Grid (Theme/Coords) */}
                <div className="absolute inset-0 flex flex-col justify-between py-4 transition-opacity duration-300" style={{ opacity: hoveredLayer === 5 || hoveredLayer === 6 || hoveredLayer === null ? 1 : 0.1 }}>
                  {[1,2,3,4].map(i => <div key={i} className="w-full border-t border-[#F3F4F6]"></div>)}
                </div>
                <div className="absolute inset-0 flex justify-between px-4 transition-opacity duration-300" style={{ opacity: hoveredLayer === 5 || hoveredLayer === 6 || hoveredLayer === null ? 1 : 0.1 }}>
                  {[1,2,3,4].map(i => <div key={i} className="h-full border-l border-[#F3F4F6]"></div>)}
                </div>
                
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible">
                  {/* Points (Geometries, Data, Aesthetics) */}
                  {points1999.map((p, i) => (
                    <motion.circle 
                      key={i} cx={p.x} cy={p.y} r="3" fill={p.c}
                      className="transition-opacity duration-300"
                      style={{ opacity: hoveredLayer === 1 || hoveredLayer === 2 || hoveredLayer === 3 || hoveredLayer === null ? 1 : 0.1 }}
                    />
                  ))}
                </svg>
              </div>
            </div>

            {/* Facet 2: 2008 */}
            <div className="flex-1 flex flex-col">
              <div 
                className="bg-[#F3F4F6] text-center py-1 text-[11px] font-bold font-mono border border-[#DAD9DB] border-b-0 transition-opacity duration-300" 
                style={{ opacity: hoveredLayer === 4 || hoveredLayer === null ? 1 : 0.2 }}
              >
                year: 2008
              </div>
              <div 
                className="flex-1 relative border border-[#DAD9DB] bg-white transition-opacity duration-300" 
                style={{ opacity: hoveredLayer === 6 || hoveredLayer === null ? 1 : (hoveredLayer === 5 ? 1 : 0.8) }}
              >
                {/* Grid */}
                <div className="absolute inset-0 flex flex-col justify-between py-4 transition-opacity duration-300" style={{ opacity: hoveredLayer === 5 || hoveredLayer === 6 || hoveredLayer === null ? 1 : 0.1 }}>
                  {[1,2,3,4].map(i => <div key={i} className="w-full border-t border-[#F3F4F6]"></div>)}
                </div>
                <div className="absolute inset-0 flex justify-between px-4 transition-opacity duration-300" style={{ opacity: hoveredLayer === 5 || hoveredLayer === 6 || hoveredLayer === null ? 1 : 0.1 }}>
                  {[1,2,3,4].map(i => <div key={i} className="h-full border-l border-[#F3F4F6]"></div>)}
                </div>

                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible">
                  {/* Points */}
                  {points2008.map((p, i) => (
                    <motion.circle 
                      key={i} cx={p.x} cy={p.y} r="3" fill={p.c}
                      className="transition-opacity duration-300"
                      style={{ opacity: hoveredLayer === 1 || hoveredLayer === 2 || hoveredLayer === 3 || hoveredLayer === null ? 1 : 0.1 }}
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>

          {/* Axes (Coordinates / Aesthetics) */}
          <div 
            className="flex justify-between mt-2 pl-6 text-[10px] font-mono text-[#514E58] transition-opacity duration-300" 
            style={{ opacity: hoveredLayer === 2 || hoveredLayer === 5 || hoveredLayer === null ? 1 : 0.2 }}
          >
            <span className="w-full text-center">Weight (X) &rarr;</span>
            <span className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90">MPG (Y) &rarr;</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
