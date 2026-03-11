import React from 'react';
import { motion } from 'motion/react';
import { Database, Filter, ArrowRight, Calculator } from 'lucide-react';

const rawData = [
  { id: 1, time: '10:00:01', event: 'click', user: 'u_123', latency: 42 },
  { id: 2, time: '10:00:02', event: 'view', user: 'u_456', latency: 12 },
  { id: 3, time: '10:00:03', event: 'click', user: 'u_789', latency: 55 },
  { id: 4, time: '10:00:04', event: 'purchase', user: 'u_123', latency: 105 },
  { id: 5, time: '10:00:05', event: 'view', user: 'u_999', latency: 18 },
];

export default function Slide5() {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-4 shrink-0"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-[#D53F8C] w-8 h-8 flex items-center justify-center rounded-[4px] text-white font-mono font-bold text-[14px]">
            1
          </div>
          <h1 className="text-[24px] font-semibold text-[#231F2B]">
            The Data Layer
          </h1>
        </div>
        <p className="text-[16px] text-[#514E58] max-w-3xl">
          The foundation of any visualization. Before we can draw anything, we must define the dataset and any necessary statistical transformations.
        </p>
      </motion.div>

      <div className="flex-1 grid grid-cols-2 gap-12 min-h-0 items-start pt-2">
        {/* Left: Explanation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-4"
        >
          <div className="bg-[#F7F6F6] border border-[#DAD9DB] rounded-[4px] p-4">
            <h2 className="text-[18px] font-semibold text-[#231F2B] mb-3 flex items-center gap-2">
              <Database className="w-5 h-5 text-[#D53F8C]" />
              Core Concepts
            </h2>
            <ul className="space-y-3 text-[14px] text-[#514E58]">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 bg-white border border-[#DAD9DB] p-1 rounded-[4px] shadow-[2px_2px_0px_#120F1A]">
                  <Database className="w-4 h-4 text-[#D53F8C]" />
                </div>
                <div>
                  <strong className="text-[#231F2B] block mb-1">Raw Dataset</strong>
                  <span>The source tables, streams, or files containing the variables you want to map to visual properties.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 bg-white border border-[#DAD9DB] p-1 rounded-[4px] shadow-[2px_2px_0px_#120F1A]">
                  <Filter className="w-4 h-4 text-[#D53F8C]" />
                </div>
                <div>
                  <strong className="text-[#231F2B] block mb-1">Filtering & Subsetting</strong>
                  <span>Selecting specific rows or columns before rendering to focus the narrative or improve performance.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 bg-white border border-[#DAD9DB] p-1 rounded-[4px] shadow-[2px_2px_0px_#120F1A]">
                  <Calculator className="w-4 h-4 text-[#D53F8C]" />
                </div>
                <div>
                  <strong className="text-[#231F2B] block mb-1">Statistical Transformations</strong>
                  <span>Aggregating data (e.g., sums, averages, counts) or binning values (e.g., for histograms) directly within the visualization pipeline.</span>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Right: Data Visualization */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col h-full min-h-0 gap-2"
        >
          {/* Raw Data Table */}
          <div className="bg-white border-2 border-[#120F1A] rounded-[4px] shadow-[4px_4px_0px_#120F1A] overflow-hidden flex flex-col">
            <div className="bg-[#F7F6F6] border-b-2 border-[#120F1A] p-2 flex items-center justify-between">
              <span className="font-mono text-[12px] font-bold text-[#231F2B]">events_stream</span>
              <span className="text-[10px] font-mono text-[#D53F8C] bg-[#D53F8C]/10 px-2 py-0.5 rounded-[2px]">RAW DATA</span>
            </div>
            <div className="p-2 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="font-mono text-[11px] text-[#514E58] pb-2 border-b border-[#DAD9DB]">time</th>
                    <th className="font-mono text-[11px] text-[#514E58] pb-2 border-b border-[#DAD9DB]">event</th>
                    <th className="font-mono text-[11px] text-[#514E58] pb-2 border-b border-[#DAD9DB]">user</th>
                    <th className="font-mono text-[11px] text-[#514E58] pb-2 border-b border-[#DAD9DB] text-right">latency_ms</th>
                  </tr>
                </thead>
                <tbody>
                  {rawData.map((row, i) => (
                    <motion.tr 
                      key={row.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + (i * 0.1) }}
                      className="border-b border-[#F7F6F6] last:border-0 hover:bg-[#F7F6F6] transition-colors"
                    >
                      <td className="font-mono text-[11px] text-[#231F2B] py-1">{row.time}</td>
                      <td className="font-mono text-[11px] text-[#D53F8C] py-1">{row.event}</td>
                      <td className="font-mono text-[11px] text-[#514E58] py-1">{row.user}</td>
                      <td className="font-mono text-[11px] text-[#231F2B] py-1 text-right">{row.latency}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Transformation Arrow */}
          <div className="flex justify-center py-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 }}
              className="bg-[#D53F8C] text-white p-1.5 rounded-full shadow-[2px_2px_0px_#120F1A]"
            >
              <ArrowRight className="w-4 h-4 rotate-90" />
            </motion.div>
          </div>

          {/* Transformed Data Table */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
            className="bg-white border-2 border-[#120F1A] rounded-[4px] shadow-[4px_4px_0px_#120F1A] overflow-hidden flex flex-col"
          >
            <div className="bg-[#F7F6F6] border-b-2 border-[#120F1A] p-2 flex items-center justify-between">
              <span className="font-mono text-[12px] font-bold text-[#231F2B]">SELECT event, AVG(latency_ms) ...</span>
              <span className="text-[10px] font-mono text-[#D53F8C] bg-[#D53F8C]/10 px-2 py-0.5 rounded-[2px]">TRANSFORMED</span>
            </div>
            <div className="p-2">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="font-mono text-[11px] text-[#514E58] pb-2 border-b border-[#DAD9DB]">event</th>
                    <th className="font-mono text-[11px] text-[#514E58] pb-2 border-b border-[#DAD9DB] text-right">avg_latency</th>
                    <th className="font-mono text-[11px] text-[#514E58] pb-2 border-b border-[#DAD9DB] text-right">count</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#F7F6F6] hover:bg-[#F7F6F6] transition-colors">
                    <td className="font-mono text-[11px] text-[#D53F8C] py-1">click</td>
                    <td className="font-mono text-[11px] text-[#231F2B] py-1 text-right">48.5</td>
                    <td className="font-mono text-[11px] text-[#514E58] py-1 text-right">2</td>
                  </tr>
                  <tr className="border-b border-[#F7F6F6] hover:bg-[#F7F6F6] transition-colors">
                    <td className="font-mono text-[11px] text-[#D53F8C] py-1">view</td>
                    <td className="font-mono text-[11px] text-[#231F2B] py-1 text-right">15.0</td>
                    <td className="font-mono text-[11px] text-[#514E58] py-1 text-right">2</td>
                  </tr>
                  <tr className="hover:bg-[#F7F6F6] transition-colors">
                    <td className="font-mono text-[11px] text-[#D53F8C] py-1">purchase</td>
                    <td className="font-mono text-[11px] text-[#231F2B] py-1 text-right">105.0</td>
                    <td className="font-mono text-[11px] text-[#514E58] py-1 text-right">1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
