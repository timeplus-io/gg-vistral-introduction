import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Map, Grid3X3, RotateCw, PieChart } from 'lucide-react';

export default function Slide9() {
  const [coord, setCoord] = useState<'cartesian' | 'flipped' | 'polar'>('cartesian');

  const data = [
    { id: 'A', val: 45, color: '#D53F8C' },
    { id: 'B', val: 85, color: '#7C3AED' },
    { id: 'C', val: 60, color: '#059669' },
  ];

  // Helper functions for Polar coordinates (Coxcomb chart)
  const polarToCartesian = (cx: number, cy: number, r: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: cx + (r * Math.cos(angleInRadians)),
      y: cy + (r * Math.sin(angleInRadians))
    };
  };

  const getPieSlice = (cx: number, cy: number, r: number, startAngle: number, endAngle: number) => {
    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
      "M", cx, cy,
      "L", start.x, start.y,
      "A", r, r, 0, largeArcFlag, 0, end.x, end.y,
      "Z"
    ].join(" ");
  };

  const isCartesian = coord === 'cartesian';

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
            5
          </div>
          <h1 className="text-[24px] font-semibold text-[#231F2B]">
            The Coordinates Layer
          </h1>
        </div>
        <p className="text-[16px] text-[#514E58] max-w-3xl">
          Coordinate systems determine how the x and y aesthetics are mapped to the 2D plane of the graphic. Changing the coordinate system can completely alter the interpretation of the same underlying geometry.
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
              <Map className="w-4 h-4 text-[#D53F8C]" />
              Coordinate Systems
            </h2>
            <ul className="space-y-2 text-[13px] text-[#514E58]">
              <li className="flex items-start gap-2">
                <div className="mt-0.5 bg-white border border-[#DAD9DB] p-1 rounded-[4px] shadow-[2px_2px_0px_#120F1A]">
                  <Grid3X3 className="w-3 h-3 text-[#D53F8C]" />
                </div>
                <div>
                  <strong className="text-[#231F2B] block mb-0.5">coord_cartesian()</strong>
                  <span className="text-[12px] leading-tight block">
                    Default system. X and Y map directly to orthogonal horizontal and vertical axes.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-0.5 bg-white border border-[#DAD9DB] p-1 rounded-[4px] shadow-[2px_2px_0px_#120F1A]">
                  <RotateCw className="w-3 h-3 text-[#D53F8C]" />
                </div>
                <div>
                  <strong className="text-[#231F2B] block mb-0.5">coord_flip()</strong>
                  <span className="text-[12px] leading-tight block">
                    Swaps X and Y axes. Useful for horizontal bar charts, especially with long category names.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-0.5 bg-white border border-[#DAD9DB] p-1 rounded-[4px] shadow-[2px_2px_0px_#120F1A]">
                  <PieChart className="w-3 h-3 text-[#D53F8C]" />
                </div>
                <div>
                  <strong className="text-[#231F2B] block mb-0.5">coord_polar()</strong>
                  <span className="text-[12px] leading-tight block">
                    Uses polar coordinates. Maps X to angle and Y to radius, transforming bars into a Coxcomb or pie chart.
                  </span>
                </div>
              </li>
            </ul>
            
            <div className="mt-2 p-2 bg-white border border-[#DAD9DB] rounded-[4px]">
              <h3 className="text-[12px] font-bold text-[#231F2B] mb-0.5">Geometry remains the same</h3>
              <p className="text-[11px] text-[#514E58] leading-tight">
                The underlying data and geometry (bars) remain unchanged. We only change the mathematical space drawing them.
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
              <span className="font-mono text-[12px] font-bold text-[#231F2B]">Apply Coordinates</span>
              <span className="text-[10px] font-mono text-[#D53F8C] bg-[#D53F8C]/10 px-2 py-0.5 rounded-[2px]">INTERACTIVE</span>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setCoord('cartesian')}
                className={`flex-1 py-1.5 px-1 rounded-[2px] font-mono text-[10px] font-bold transition-all border-2 ${
                  coord === 'cartesian' 
                    ? 'bg-[#D53F8C] text-white border-[#120F1A] shadow-[2px_2px_0px_#120F1A] translate-y-[-2px]' 
                    : 'bg-[#F7F6F6] text-[#514E58] border-transparent hover:border-[#DAD9DB]'
                }`}
              >
                coord_cartesian()
              </button>
              <button
                onClick={() => setCoord('flipped')}
                className={`flex-1 py-1.5 px-1 rounded-[2px] font-mono text-[10px] font-bold transition-all border-2 ${
                  coord === 'flipped' 
                    ? 'bg-[#D53F8C] text-white border-[#120F1A] shadow-[2px_2px_0px_#120F1A] translate-y-[-2px]' 
                    : 'bg-[#F7F6F6] text-[#514E58] border-transparent hover:border-[#DAD9DB]'
                }`}
              >
                coord_flip()
              </button>
              <button
                onClick={() => setCoord('polar')}
                className={`flex-1 py-1.5 px-1 rounded-[2px] font-mono text-[10px] font-bold transition-all border-2 ${
                  coord === 'polar' 
                    ? 'bg-[#D53F8C] text-white border-[#120F1A] shadow-[2px_2px_0px_#120F1A] translate-y-[-2px]' 
                    : 'bg-[#F7F6F6] text-[#514E58] border-transparent hover:border-[#DAD9DB]'
                }`}
              >
                coord_polar()
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
            
            <div className="relative flex-1 mt-4 mb-4 mx-12">
              <AnimatePresence mode="wait">
                {coord !== 'polar' ? (
                  <motion.div
                    key="rectilinear"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    {/* Axes lines */}
                    <div className="absolute inset-0 border-b-2 border-l-2 border-[#120F1A]" />
                    
                    {/* Animated Axis Labels */}
                    <motion.span
                      animate={{
                        left: isCartesian ? '50%' : '-45px',
                        bottom: isCartesian ? '-24px' : '50%',
                        x: isCartesian ? '-50%' : '0%',
                        y: isCartesian ? '0%' : '50%',
                        rotate: isCartesian ? 0 : -90,
                      }}
                      className="absolute text-[10px] font-mono text-[#514E58] whitespace-nowrap"
                    >
                      Category (X)
                    </motion.span>
                    
                    <motion.span
                      animate={{
                        left: isCartesian ? '-45px' : '50%',
                        bottom: isCartesian ? '50%' : '-24px',
                        x: isCartesian ? '0%' : '-50%',
                        y: isCartesian ? '50%' : '0%',
                        rotate: isCartesian ? -90 : 0,
                      }}
                      className="absolute text-[10px] font-mono text-[#514E58] whitespace-nowrap"
                    >
                      Value (Y)
                    </motion.span>

                    {/* Bars */}
                    {data.map((d, i) => (
                      <motion.div
                        key={d.id}
                        animate={{
                          left: isCartesian ? `${15 + i * 28}%` : '0%',
                          bottom: isCartesian ? '0%' : `${15 + i * 28}%`,
                          width: isCartesian ? '15%' : `${d.val}%`,
                          height: isCartesian ? `${d.val}%` : '15%',
                        }}
                        transition={{ type: 'spring', stiffness: 60, damping: 12 }}
                        className="absolute border-2 border-[#120F1A] shadow-[2px_2px_0px_#120F1A]"
                        style={{ backgroundColor: d.color }}
                      />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="polar"
                    initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 45 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full max-w-[200px] max-h-[200px] overflow-visible">
                      {/* Circular grid lines */}
                      <circle cx="50" cy="50" r="25" fill="none" stroke="#DAD9DB" strokeWidth="1" strokeDasharray="2 2" />
                      <circle cx="50" cy="50" r="50" fill="none" stroke="#DAD9DB" strokeWidth="1" strokeDasharray="2 2" />
                      
                      {/* Slices (Coxcomb) */}
                      {data.map((d, i) => {
                        // Max value is 100, max radius is 50. So radius = val / 2
                        const radius = d.val / 2;
                        const startAngle = i * 120;
                        const endAngle = (i + 1) * 120;
                        return (
                          <motion.path
                            key={d.id}
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            d={getPieSlice(50, 50, radius, startAngle, endAngle)}
                            fill={d.color}
                            stroke="#120F1A"
                            strokeWidth="1.5"
                            className="drop-shadow-[2px_2px_0px_rgba(18,15,26,1)]"
                            style={{ transformOrigin: '50px 50px' }}
                          />
                        );
                      })}
                      
                      {/* Center dot */}
                      <circle cx="50" cy="50" r="2" fill="#120F1A" />
                    </svg>
                    
                    {/* Polar Labels */}
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full text-[10px] font-mono text-[#514E58]">
                      Angle = Category (X)
                    </span>
                    <span className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 text-[10px] font-mono text-[#514E58] rotate-90 origin-left">
                      Radius = Value (Y)
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
