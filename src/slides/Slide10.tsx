import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Palette, Type, Grid, Square } from 'lucide-react';

export default function Slide10() {
  const [activeTheme, setActiveTheme] = useState<'gray' | 'minimal' | 'classic' | 'dark'>('gray');

  // Simple dataset for a line chart
  const data = [
    { x: 10, y: 30 },
    { x: 30, y: 70 },
    { x: 50, y: 45 },
    { x: 70, y: 85 },
    { x: 90, y: 60 },
  ];

  // Theme definitions mapping to ggplot2-style themes
  const themes = {
    gray: {
      name: 'theme_gray()',
      bg: '#EBEBEB',
      panelBg: '#EBEBEB',
      grid: '#FFFFFF',
      text: '#514E58',
      axisLine: 'transparent',
      dataColor: '#D53F8C',
    },
    minimal: {
      name: 'theme_minimal()',
      bg: '#FFFFFF',
      panelBg: '#FFFFFF',
      grid: '#F3F4F6',
      text: '#514E58',
      axisLine: 'transparent',
      dataColor: '#D53F8C',
    },
    classic: {
      name: 'theme_classic()',
      bg: '#FFFFFF',
      panelBg: '#FFFFFF',
      grid: 'transparent',
      text: '#231F2B',
      axisLine: '#120F1A',
      dataColor: '#D53F8C',
    },
    dark: {
      name: 'theme_dark()',
      bg: '#120F1A',
      panelBg: '#231F2B',
      grid: '#3A3545',
      text: '#F7F6F6',
      axisLine: 'transparent',
      dataColor: '#F472B6', // Lighter pink for dark mode
    }
  };

  const currentTheme = themes[activeTheme];

  // Generate SVG path for the line
  const linePath = data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${d.x} ${100 - d.y}`).join(' ');

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
            6
          </div>
          <h1 className="text-[24px] font-semibold text-[#231F2B]">
            The Theme Layer
          </h1>
        </div>
        <p className="text-[16px] text-[#514E58] max-w-3xl">
          Themes control the non-data ink of the plot. They do not change how the data is rendered (geometries) or mapped (aesthetics), but they dictate the visual presentation: backgrounds, grid lines, fonts, and colors.
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
              <Palette className="w-4 h-4 text-[#D53F8C]" />
              Theme Elements
            </h2>
            <ul className="space-y-2 text-[13px] text-[#514E58]">
              <li className="flex items-start gap-2">
                <div className="mt-0.5 bg-white border border-[#DAD9DB] p-1 rounded-[4px] shadow-[2px_2px_0px_#120F1A]">
                  <Square className="w-3 h-3 text-[#D53F8C]" />
                </div>
                <div>
                  <strong className="text-[#231F2B] block mb-0.5">Rectangles (rect)</strong>
                  <span className="text-[12px] leading-tight block">
                    Controls backgrounds and borders. Examples include the plot background, panel background, and legend background.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-0.5 bg-white border border-[#DAD9DB] p-1 rounded-[4px] shadow-[2px_2px_0px_#120F1A]">
                  <Grid className="w-3 h-3 text-[#D53F8C]" />
                </div>
                <div>
                  <strong className="text-[#231F2B] block mb-0.5">Lines (line)</strong>
                  <span className="text-[12px] leading-tight block">
                    Controls lines drawn on the plot. Examples include axis lines, major/minor grid lines, and tick marks.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-0.5 bg-white border border-[#DAD9DB] p-1 rounded-[4px] shadow-[2px_2px_0px_#120F1A]">
                  <Type className="w-3 h-3 text-[#D53F8C]" />
                </div>
                <div>
                  <strong className="text-[#231F2B] block mb-0.5">Text (text)</strong>
                  <span className="text-[12px] leading-tight block">
                    Controls typography. Examples include plot titles, axis labels, legend text, and facet strip text.
                  </span>
                </div>
              </li>
            </ul>
            
            <div className="mt-2 p-2 bg-white border border-[#DAD9DB] rounded-[4px]">
              <h3 className="text-[12px] font-bold text-[#231F2B] mb-0.5">Why use themes?</h3>
              <p className="text-[11px] text-[#514E58] leading-tight">
                Themes allow you to make your plots publication-ready, match your company's brand guidelines, or adapt to different environments (like Dark Mode) without touching the data logic.
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
              <span className="font-mono text-[12px] font-bold text-[#231F2B]">Apply Theme</span>
              <span className="text-[10px] font-mono text-[#D53F8C] bg-[#D53F8C]/10 px-2 py-0.5 rounded-[2px]">INTERACTIVE</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(themes) as Array<keyof typeof themes>).map((themeKey) => (
                <button
                  key={themeKey}
                  onClick={() => setActiveTheme(themeKey)}
                  className={`py-1.5 px-1 rounded-[2px] font-mono text-[10px] font-bold transition-all border-2 ${
                    activeTheme === themeKey 
                      ? 'bg-[#D53F8C] text-white border-[#120F1A] shadow-[2px_2px_0px_#120F1A] translate-y-[-2px]' 
                      : 'bg-[#F7F6F6] text-[#514E58] border-transparent hover:border-[#DAD9DB]'
                  }`}
                >
                  {themes[themeKey].name}
                </button>
              ))}
            </div>
          </div>

          {/* Resulting Visual Output */}
          <motion.div 
            className="border-2 border-[#120F1A] rounded-[4px] shadow-[4px_4px_0px_#120F1A] p-2 flex-1 flex flex-col min-h-[140px] relative"
            animate={{ backgroundColor: currentTheme.bg }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center justify-between mb-2 relative z-10">
              <motion.span 
                className="font-mono text-[12px] font-bold"
                animate={{ color: currentTheme.text }}
              >
                Visual Output
              </motion.span>
              <span className="text-[10px] font-mono text-[#D53F8C] bg-[#D53F8C]/10 px-2 py-0.5 rounded-[2px]">RESULT</span>
            </div>
            
            <div className="relative flex-1 flex items-center justify-center mt-2 mb-2">
              <div className="relative w-full max-w-[240px] aspect-[5/3] mb-6 ml-6">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                  {/* Panel Background */}
                  <motion.rect
                    x="0" y="0" width="100" height="100"
                    animate={{ fill: currentTheme.panelBg }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Grid Lines (Horizontal & Vertical) */}
                  {[20, 40, 60, 80].map((pos) => (
                    <React.Fragment key={pos}>
                      <motion.line
                        x1="0" y1={pos} x2="100" y2={pos}
                        strokeWidth="0.5"
                        animate={{ stroke: currentTheme.grid }}
                        transition={{ duration: 0.4 }}
                      />
                      <motion.line
                        x1={pos} y1="0" x2={pos} y2="100"
                        strokeWidth="0.5"
                        animate={{ stroke: currentTheme.grid }}
                        transition={{ duration: 0.4 }}
                      />
                    </React.Fragment>
                  ))}

                  {/* Axis Lines (Classic Theme) */}
                  <motion.line
                    x1="0" y1="100" x2="100" y2="100"
                    strokeWidth="1"
                    animate={{ stroke: currentTheme.axisLine }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.line
                    x1="0" y1="0" x2="0" y2="100"
                    strokeWidth="1"
                    animate={{ stroke: currentTheme.axisLine }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Data Line */}
                  <motion.path
                    d={linePath}
                    fill="none"
                    strokeWidth="2"
                    animate={{ stroke: currentTheme.dataColor }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Data Points */}
                  {data.map((d, i) => (
                    <motion.circle
                      key={i}
                      cx={d.x}
                      cy={100 - d.y}
                      r="2.5"
                      animate={{ fill: currentTheme.dataColor }}
                      transition={{ duration: 0.4 }}
                    />
                  ))}
                </svg>

                {/* Axis Labels */}
                <motion.span
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono whitespace-nowrap"
                  animate={{ color: currentTheme.text }}
                  transition={{ duration: 0.4 }}
                >
                  Time (X)
                </motion.span>
                <motion.span
                  className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-mono whitespace-nowrap"
                  animate={{ color: currentTheme.text }}
                  transition={{ duration: 0.4 }}
                >
                  Value (Y)
                </motion.span>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
