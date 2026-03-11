import React from 'react';
import { motion } from 'motion/react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';

// Anscombe's Quartet Data
const datasetI = [
  { x: 10.0, y: 8.04 }, { x: 8.0, y: 6.95 }, { x: 13.0, y: 7.58 },
  { x: 9.0, y: 8.81 }, { x: 11.0, y: 8.33 }, { x: 14.0, y: 9.96 },
  { x: 6.0, y: 7.24 }, { x: 4.0, y: 4.26 }, { x: 12.0, y: 10.84 },
  { x: 7.0, y: 4.82 }, { x: 5.0, y: 5.68 }
];

const datasetII = [
  { x: 10.0, y: 9.14 }, { x: 8.0, y: 8.14 }, { x: 13.0, y: 8.74 },
  { x: 9.0, y: 8.77 }, { x: 11.0, y: 9.26 }, { x: 14.0, y: 8.10 },
  { x: 6.0, y: 6.13 }, { x: 4.0, y: 3.10 }, { x: 12.0, y: 9.13 },
  { x: 7.0, y: 7.26 }, { x: 5.0, y: 4.74 }
];

const datasetIII = [
  { x: 10.0, y: 7.46 }, { x: 8.0, y: 6.77 }, { x: 13.0, y: 12.74 },
  { x: 9.0, y: 7.11 }, { x: 11.0, y: 7.81 }, { x: 14.0, y: 8.84 },
  { x: 6.0, y: 6.08 }, { x: 4.0, y: 5.39 }, { x: 12.0, y: 8.15 },
  { x: 7.0, y: 6.42 }, { x: 5.0, y: 5.73 }
];

const datasetIV = [
  { x: 8.0, y: 6.58 }, { x: 8.0, y: 5.76 }, { x: 8.0, y: 7.71 },
  { x: 8.0, y: 8.84 }, { x: 8.0, y: 8.47 }, { x: 8.0, y: 7.04 },
  { x: 8.0, y: 5.25 }, { x: 19.0, y: 12.50 }, { x: 8.0, y: 5.56 },
  { x: 8.0, y: 7.91 }, { x: 8.0, y: 6.89 }
];

const datasets = [
  { id: 'I', data: datasetI },
  { id: 'II', data: datasetII },
  { id: 'III', data: datasetIII },
  { id: 'IV', data: datasetIV }
];

export default function Slide2() {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-4 shrink-0"
      >
        <h1 className="text-[20px] font-semibold text-[#231F2B] mb-1">
          Why Data Visualization is Important
        </h1>
        <p className="text-[14px] text-[#514E58]">
          Anscombe's Quartet: Four datasets with nearly identical simple descriptive statistics, yet appear very different when graphed.
        </p>
      </motion.div>

      <div className="flex-1 grid grid-cols-3 gap-6 min-h-0">
        {/* Left: Charts (takes up 2 columns) */}
        <div className="col-span-2 grid grid-cols-2 gap-3 min-h-0">
          {datasets.map((ds, index) => (
            <motion.div
              key={ds.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white border border-[#DAD9DB] rounded-[4px] p-3 flex flex-col min-h-0"
            >
              <h3 className="text-[12px] font-semibold text-[#231F2B] mb-1">Dataset {ds.id}</h3>
              <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart margin={{ top: 5, right: 5, bottom: -10, left: -25 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ECECED" />
                    <XAxis 
                      type="number" 
                      dataKey="x" 
                      domain={[0, 20]} 
                      tick={{ fill: '#7D7B82', fontSize: 9 }}
                      axisLine={{ stroke: '#DAD9DB' }}
                      tickLine={false}
                    />
                    <YAxis 
                      type="number" 
                      dataKey="y" 
                      domain={[0, 14]} 
                      tick={{ fill: '#7D7B82', fontSize: 9 }}
                      axisLine={{ stroke: '#DAD9DB' }}
                      tickLine={false}
                    />
                    <Tooltip 
                      cursor={{ strokeDasharray: '3 3' }}
                      contentStyle={{
                        backgroundColor: '#231F2B',
                        borderColor: '#3A3741',
                        color: '#F7F6F6',
                        fontSize: '11px',
                        borderRadius: '4px',
                        padding: '4px 8px'
                      }}
                    />
                    <Scatter name={`Dataset ${ds.id}`} data={ds.data} fill="#D53F8C" />
                    {/* Linear regression line y = 3.00 + 0.500x */}
                    <ReferenceLine 
                      segment={[{ x: 0, y: 3 }, { x: 20, y: 13 }]} 
                      stroke="#120F1A" 
                      strokeWidth={1.5}
                      strokeOpacity={0.5}
                    />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Statistics */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-[#F7F6F6] border border-[#DAD9DB] rounded-[4px] p-4 flex flex-col justify-center min-h-0"
        >
          <h2 className="text-[14px] font-semibold text-[#231F2B] mb-4 shrink-0">Shared Statistics</h2>
          
          <div className="space-y-3 overflow-y-auto pr-2">
            <div className="flex justify-between items-center border-b border-[#DAD9DB] pb-1.5">
              <span className="text-[12px] text-[#514E58]">Mean of x</span>
              <span className="text-[13px] font-mono font-semibold text-[#120F1A]">9.0</span>
            </div>
            
            <div className="flex justify-between items-center border-b border-[#DAD9DB] pb-1.5">
              <span className="text-[12px] text-[#514E58]">Sample variance of x</span>
              <span className="text-[13px] font-mono font-semibold text-[#120F1A]">11.0</span>
            </div>
            
            <div className="flex justify-between items-center border-b border-[#DAD9DB] pb-1.5">
              <span className="text-[12px] text-[#514E58]">Mean of y</span>
              <span className="text-[13px] font-mono font-semibold text-[#120F1A]">7.50</span>
            </div>
            
            <div className="flex justify-between items-center border-b border-[#DAD9DB] pb-1.5">
              <span className="text-[12px] text-[#514E58]">Sample variance of y</span>
              <span className="text-[13px] font-mono font-semibold text-[#120F1A]">4.125</span>
            </div>
            
            <div className="flex justify-between items-center border-b border-[#DAD9DB] pb-1.5">
              <span className="text-[12px] text-[#514E58]">Correlation (x, y)</span>
              <span className="text-[13px] font-mono font-semibold text-[#120F1A]">0.816</span>
            </div>
            
            <div className="flex justify-between items-center border-b border-[#DAD9DB] pb-1.5">
              <span className="text-[12px] text-[#514E58]">Linear regression</span>
              <span className="text-[13px] font-mono font-semibold text-[#D53F8C]">y = 3.0 + 0.5x</span>
            </div>
            
            <div className="flex justify-between items-center border-b border-[#DAD9DB] pb-1.5">
              <span className="text-[12px] text-[#514E58]">R-squared (R²)</span>
              <span className="text-[13px] font-mono font-semibold text-[#120F1A]">0.67</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
