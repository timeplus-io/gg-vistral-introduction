import React from 'react';
import { motion } from 'motion/react';
import { Layers, Database, Palette, Shapes, LayoutGrid, Map, Paintbrush } from 'lucide-react';

const layers = [
  { 
    id: 'theme', 
    name: 'Theme', 
    desc: 'Styling, fonts, background, and visual hierarchy',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.53-.21-1.04-.59-1.41C13.54 17.72 13.38 17.22 13.5 16.5c.17-1.06 1.1-1.9 2.18-2h3.82c2.48 0 4.5-2.02 4.5-4.5C24 6.13 18.63 2 12 2z"/>
      </svg>
    )
  },
  { 
    id: 'coordinates', 
    name: 'Coordinates', 
    desc: 'The space the data is plotted in (e.g., Cartesian, Polar)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/>
        <path d="M3 15h18" strokeDasharray="4 4" opacity="0.5"/>
        <path d="M9 3v18" strokeDasharray="4 4" opacity="0.5"/>
        <path d="M15 3v18" strokeDasharray="4 4" opacity="0.5"/>
        <path d="M3 9h18" strokeDasharray="4 4" opacity="0.5"/>
      </svg>
    )
  },
  { 
    id: 'facets', 
    name: 'Facets', 
    desc: 'Splitting data into small multiples or subplots',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
      </svg>
    )
  },
  { 
    id: 'geometries', 
    name: 'Geometries', 
    desc: 'The visual elements (points, lines, bars, polygons)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/>
        <rect x="7" y="10" width="4" height="11" rx="1"/>
        <rect x="15" y="5" width="4" height="16" rx="1"/>
        <circle cx="9" cy="5" r="2"/>
        <path d="M10 6l4 4"/>
      </svg>
    )
  },
  { 
    id: 'aesthetics', 
    name: 'Aesthetics', 
    desc: 'Mapping data variables to visual properties (x, y, color, size)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    )
  },
  { 
    id: 'data', 
    name: 'Data', 
    desc: 'The raw dataset and any statistical transformations',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
      </svg>
    )
  },
];

export default function Slide4() {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-4 shrink-0"
      >
        <h1 className="text-[24px] font-semibold text-[#231F2B] mb-2">
          The Grammar of Graphics
        </h1>
        <p className="text-[16px] text-[#514E58] max-w-3xl">
          A theoretical framework created by <a href="https://en.wikipedia.org/wiki/Leland_Wilkinson" target="_blank" rel="noopener noreferrer" className="text-[#D53F8C] hover:underline">Leland Wilkinson</a> that provides a structured way to describe and build data visualizations by breaking them down into semantic layers.
        </p>
      </motion.div>

      <div className="flex-1 grid grid-cols-2 gap-12 min-h-0 items-start pt-2">
        {/* Left: Explanation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-6"
        >
          <div className="bg-[#F7F6F6] border border-[#DAD9DB] rounded-[4px] p-6">
            <h2 className="text-[18px] font-semibold text-[#231F2B] mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#D53F8C]" />
              Why it matters
            </h2>
            <ul className="space-y-5 text-[15px] text-[#514E58]">
              <li className="flex items-start gap-3">
                <span className="text-[#D53F8C] font-bold mt-0.5">•</span>
                <span><strong>Beyond Chart Types:</strong> Moves beyond a fixed taxonomy of charts (e.g., "bar chart", "pie chart") to a flexible system of building blocks.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D53F8C] font-bold mt-0.5">•</span>
                <span><strong>Infinite Combinations:</strong> Allows for endless combinations of data mappings and geometries to create novel visualizations.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D53F8C] font-bold mt-0.5">•</span>
                <span><strong>The Foundation:</strong> Forms the underlying architecture of modern visualization tools like <a href="https://ggplot2.tidyverse.org/" target="_blank" rel="noopener noreferrer" className="text-[#D53F8C] hover:underline">ggplot2</a>, <a href="https://vega.github.io/vega-lite/" target="_blank" rel="noopener noreferrer" className="text-[#D53F8C] hover:underline">Vega-Lite</a>, and <a href="https://observablehq.com/plot/" target="_blank" rel="noopener noreferrer" className="text-[#D53F8C] hover:underline">Observable Plot</a>.</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Right: Layer Stack */}
        <div className="flex flex-col justify-start h-full min-h-0">
          <div className="relative w-full max-w-md mx-auto flex flex-col gap-1.5">
            {layers.map((layer, index) => {
              // We reverse the index for the animation delay so it builds from the bottom up
              const buildOrder = layers.length - index;
              
              return (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + (buildOrder - 1) * 0.5, duration: 0.3 }}
                  className="bg-white border-2 border-[#120F1A] rounded-[4px] py-1.5 px-2 flex items-center gap-3 shadow-[3px_3px_0px_#120F1A] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#D53F8C] transition-all cursor-default"
                >
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="bg-[#F7F6F6] w-7 h-7 flex items-center justify-center rounded-[4px] border border-[#DAD9DB]">
                      <span className="text-[11px] font-mono font-bold text-[#D53F8C]">{buildOrder}</span>
                    </div>
                    <div className="text-[#D53F8C]">
                      {layer.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[12px] font-bold text-[#231F2B] leading-tight mb-0.5">{layer.name}</h3>
                    <p className="text-[10px] text-[#514E58] leading-tight">{layer.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
