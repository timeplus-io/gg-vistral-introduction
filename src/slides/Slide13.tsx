import React from 'react';
import { motion } from 'motion/react';
import { Layers, Clock } from 'lucide-react';

export const AxisBoundIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 12h18" />
    <path d="M17 8l4 4-4 4" />
    <rect x="7" y="6" width="6" height="12" rx="1" strokeDasharray="2 2" />
    <circle cx="10" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

export const FrameBoundIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 20h10a2 2 0 0 0 2-2V8" />
    <rect x="4" y="4" width="12" height="12" rx="2" />
    <polygon points="8,7 12,10 8,13" fill="currentColor" stroke="none" />
  </svg>
);

export const KeyBoundIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="8" cy="15" r="4" />
    <path d="M10.8 12.2L19 4" />
    <path d="M14 9l2 2" />
    <path d="M17 6l2 2" />
  </svg>
);

export default function Slide13() {
  const stack = [
    { 
      id: 'theme', 
      name: 'Theme', 
      type: 'normal',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.53-.21-1.04-.59-1.41C13.54 17.72 13.38 17.22 13.5 16.5c.17-1.06 1.1-1.9 2.18-2h3.82c2.48 0 4.5-2.02 4.5-4.5C24 6.13 18.63 2 12 2z"/>
        </svg>
      )
    },
    { 
      id: 'temporal', 
      name: 'Temporal Binding', 
      type: 'highlight',
      icon: <Clock className="w-4 h-4" />
    },
    { 
      id: 'coords', 
      name: 'Coordinates', 
      type: 'normal',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      type: 'normal',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1"/>
          <rect x="14" y="3" width="7" height="7" rx="1"/>
          <rect x="14" y="14" width="7" height="7" rx="1"/>
          <rect x="3" y="14" width="7" height="7" rx="1"/>
        </svg>
      )
    },
    { 
      id: 'geom', 
      name: 'Geometries', 
      type: 'normal',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18"/>
          <rect x="7" y="10" width="4" height="11" rx="1"/>
          <rect x="15" y="5" width="4" height="16" rx="1"/>
          <circle cx="9" cy="5" r="2"/>
          <path d="M10 6l4 4"/>
        </svg>
      )
    },
    { 
      id: 'aes', 
      name: 'Aesthetics', 
      type: 'normal',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      )
    },
    { 
      id: 'data', 
      name: 'Data', 
      type: 'normal',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
          <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
        </svg>
      )
    },
  ];

  return (
    <div className="flex-1 flex flex-col h-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 shrink-0"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-white border-2 border-[#120F1A] w-8 h-8 flex items-center justify-center rounded-[4px] shadow-[2px_2px_0px_#120F1A]">
            <Layers className="w-5 h-5 text-[#D53F8C]" />
          </div>
          <h1 className="text-[24px] font-semibold text-[#231F2B]">
            Vistral: The Temporal Binding Layer
          </h1>
        </div>
        <p className="text-[16px] text-[#514E58] max-w-3xl">
          To solve the challenges of streaming data, Vistral introduces an extra layer to the Grammar of Graphics: <strong>Temporal Binding</strong>.
        </p>
      </motion.div>

      <div className="flex-1 grid grid-cols-2 gap-12 items-start pt-4">
        {/* Left: The Stack */}
        <div className="relative flex flex-col items-center">
          {stack.map((layer, index) => {
            if (layer.type === 'highlight') {
              return (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, x: -50, scale: 1.1 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                  className="w-64 h-12 my-1 bg-[#D53F8C] border-2 border-[#120F1A] rounded-[8px] shadow-[4px_4px_0px_#120F1A] flex items-center justify-start px-6 gap-3 z-20 relative"
                >
                  <div className="text-white">
                    {layer.icon}
                  </div>
                  <span className="font-bold text-white tracking-wide">{layer.name}</span>
                  
                  {/* Glow effect */}
                  <motion.div 
                    className="absolute inset-0 bg-white rounded-[6px] z-[-1]"
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </motion.div>
              );
            }

            return (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (stack.length - index) * 0.1 }}
                className="w-64 h-10 -mt-2 border-2 border-[#120F1A] rounded-[8px] flex items-center justify-start px-6 gap-3 relative z-10 bg-[#E5E7EB]"
              >
                <div className="text-[#514E58]">
                  {layer.icon}
                </div>
                <span className="font-bold text-[14px] text-[#514E58]">
                  {layer.name}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Right: Explanation */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-white border-2 border-[#120F1A] rounded-[12px] shadow-[8px_8px_0px_#120F1A] p-6"
        >
          <h2 className="text-[20px] font-bold text-[#231F2B] mb-4 flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#D53F8C]" />
            The Three Bindings
          </h2>
          
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <div className="bg-[#F3F4F6] p-1.5 rounded-full border-2 border-[#120F1A] shrink-0 mt-0.5">
                <AxisBoundIcon className="w-4 h-4 text-[#EC4899]" />
              </div>
              <div>
                <h3 className="font-bold text-[#231F2B] text-[15px]">Axis-Bound</h3>
                <p className="text-[#514E58] text-[13px] mt-0.5">
                  Time mapped to a visual axis with sliding window.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="bg-[#F3F4F6] p-1.5 rounded-full border-2 border-[#120F1A] shrink-0 mt-0.5">
                <FrameBoundIcon className="w-4 h-4 text-[#EC4899]" />
              </div>
              <div>
                <h3 className="font-bold text-[#231F2B] text-[15px]">Frame-Bound</h3>
                <p className="text-[#514E58] text-[13px] mt-0.5">
                  Time controls playback of complete snapshots.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="bg-[#F3F4F6] p-1.5 rounded-full border-2 border-[#120F1A] shrink-0 mt-0.5">
                <KeyBoundIcon className="w-4 h-4 text-[#EC4899]" />
              </div>
              <div>
                <h3 className="font-bold text-[#231F2B] text-[15px]">Key-Bound</h3>
                <p className="text-[#514E58] text-[13px] mt-0.5">
                  Latest value maintained per entity key.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
