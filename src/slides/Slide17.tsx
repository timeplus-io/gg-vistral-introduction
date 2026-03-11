import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, LineChart, AreaChart, PieChart, Grid3X3, BarChart3, BarChart } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { BasicLineChart, MultiSeriesAreaChart, FrameBoundBarChart, GrammarBarChart, GrammarDonutChart, GrammarHeatmap } from './VistralCharts';

const examples = [
  {
    id: 'line',
    title: 'Line Chart',
    icon: LineChart,
    file: 'basic-examples.tsx',
    component: BasicLineChart,
    code: `const config: TimeSeriesConfig = {
  chartType: 'line',
  xAxis: 'time',
  yAxis: 'value',
  lineStyle: 'curve',
  gridlines: true,
  yTitle: 'CPU Usage (%)',
  yRange: { min: 0, max: 100 },
  unit: { position: 'right', value: '%' },
  fractionDigits: 1,
};`
  },
  {
    id: 'area',
    title: 'Area Chart',
    icon: AreaChart,
    file: 'basic-examples.tsx',
    component: MultiSeriesAreaChart,
    code: `const config: TimeSeriesConfig = {
  chartType: 'area',
  xAxis: 'timestamp',
  yAxis: 'temperature',
  color: 'location',
  legend: true,
  gridlines: true,
  xTitle: 'Time',
  yTitle: 'Temperature (°C)',
  colors: findPaletteByLabel('Morning')?.values,
};`
  },
  {
    id: 'bar',
    title: 'Bar Chart (Frame-Bound)',
    icon: BarChart3,
    file: 'basic-examples.tsx',
    component: FrameBoundBarChart,
    code: `const config: BarColumnConfig = {
  chartType: 'column',
  xAxis: 'product',
  yAxis: 'sales',
  temporal: { mode: 'frame', field: 'timestamp' },
  dataLabel: true,
  gridlines: true,
  yTitle: 'Sales',
  fractionDigits: 0,
  colors: findPaletteByLabel('Ocean')?.values,
};`
  },
  {
    id: 'grammar-bar',
    title: 'Grammar: Bar Chart',
    icon: BarChart,
    file: 'grammar-examples.tsx',
    component: GrammarBarChart,
    code: `const spec: VistralSpec = {
  marks: [
    {
      type: 'interval',
      encode: {
        x: 'product',
        y: 'sales',
        color: 'product',
      },
    },
  ],
  scales: {
    x: { padding: 0.5 },
    y: { type: 'linear', nice: true },
  },
  coordinate: {
    transforms: [{ type: 'transpose' }],
  },
  temporal: { mode: 'frame', field: 'timestamp' },
  streaming: { maxItems: 500 },
  axes: {
    x: { title: false, grid: false },
    y: { title: 'Value', grid: true },
  },
  legend: false,
  theme: 'light',
  animate: false,
};`
  },
  {
    id: 'donut',
    title: 'Grammar: Donut Chart',
    icon: PieChart,
    file: 'grammar-examples.tsx',
    component: GrammarDonutChart,
    code: `const spec: VistralSpec = {
  marks: [
    {
      type: 'interval',
      encode: {
        y: 'count',
        color: 'status',
      },
      transforms: [{ type: 'stackY' }],
      style: {
        lineWidth: 1,
      },
      labels: [
        {
          text: 'status',
          style: { fontSize: 11 },
        },
      ],
    },
  ],
  coordinate: {
    type: 'theta',
    innerRadius: 0.5,
  },
  streaming: { maxItems: 500 },
  legend: { position: 'bottom' },
  theme: 'light',
  animate: false,
};`
  },
  {
    id: 'heatmap',
    title: 'Grammar: Heatmap',
    icon: Grid3X3,
    file: 'grammar-examples.tsx',
    component: GrammarHeatmap,
    code: `const spec: VistralSpec = {
  marks: [
    {
      type: 'cell',
      encode: {
        x: 'hour',
        y: 'day',
        color: 'load',
      },
      style: {
        lineWidth: 1,
      },
    },
  ],
  scales: {
    color: { 
      type: 'sequential', 
      range: ['#0d47a1', '#2196f3', '#64b5f6', '#fff176', '#ff9800', '#f44336'] 
    },
  },
  streaming: { maxItems: 500 },
  axes: {
    x: { title: 'Hour of Day', grid: false },
    y: { title: false, grid: false },
  },
  legend: { position: 'bottom' },
  theme: 'light',
  animate: false,
};`
  }
];

export default function Slide17() {
  const [activeTab, setActiveTab] = useState(examples[0].id);
  const [viewMode, setViewMode] = useState<'chart' | 'code'>('chart');
  const activeExample = examples.find(e => e.id === activeTab)!;
  const ActiveComponent = activeExample.component;

  return (
    <div className="flex-1 flex flex-col h-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 shrink-0"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-white border-2 border-[#120F1A] w-8 h-8 flex items-center justify-center rounded-[4px] shadow-[2px_2px_0px_#120F1A]">
            <Code2 className="w-5 h-5 text-[#EC4899]" />
          </div>
          <h1 className="text-[24px] font-semibold text-[#231F2B]">
            Vistral Code Examples
          </h1>
        </div>
      </motion.div>

      <div className="flex-1 flex gap-8 min-h-0">
        {/* Left: Tabs */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="w-64 flex flex-col gap-3 shrink-0"
        >
          {examples.map((example) => {
            const isActive = activeTab === example.id;
            const Icon = example.icon;
            return (
              <button
                key={example.id}
                onClick={() => setActiveTab(example.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-[8px] border-2 transition-all duration-200 text-left ${
                  isActive 
                    ? 'bg-white border-[#120F1A] shadow-[4px_4px_0px_#EC4899]' 
                    : 'bg-[#F3F4F6] border-transparent hover:border-[#120F1A]/20 text-[#514E58]'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#EC4899]' : 'text-[#9CA3AF]'}`} />
                <span className={`font-bold text-[14px] ${isActive ? 'text-[#231F2B]' : ''}`}>
                  {example.title}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Right: Chart & Code Viewer */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex-1 flex flex-col gap-4 min-h-0"
        >
          {/* Toggle Header */}
          <div className="flex bg-[#F3F4F6] p-1 rounded-[8px] border-2 border-[#120F1A] w-fit">
            <button
              onClick={() => setViewMode('chart')}
              className={`px-4 py-1.5 rounded-[4px] text-[14px] font-bold transition-all ${
                viewMode === 'chart' 
                  ? 'bg-white text-[#231F2B] shadow-[2px_2px_0px_#120F1A] border-2 border-[#120F1A]' 
                  : 'text-[#9CA3AF] hover:text-[#514E58] border-2 border-transparent'
              }`}
            >
              Live Chart
            </button>
            <button
              onClick={() => setViewMode('code')}
              className={`px-4 py-1.5 rounded-[4px] text-[14px] font-bold transition-all ${
                viewMode === 'code' 
                  ? 'bg-white text-[#231F2B] shadow-[2px_2px_0px_#120F1A] border-2 border-[#120F1A]' 
                  : 'text-[#9CA3AF] hover:text-[#514E58] border-2 border-transparent'
              }`}
            >
              Code Config
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 relative min-h-0">
            {viewMode === 'chart' ? (
              <div className="absolute inset-0 bg-white rounded-[12px] shadow-[8px_8px_0px_rgba(18,15,26,0.2)] border-2 border-[#120F1A] p-4 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeExample.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full absolute inset-0 p-4"
                  >
                    <ActiveComponent />
                  </motion.div>
                </AnimatePresence>
              </div>
            ) : (
              <div className="absolute inset-0 bg-[#1E1E1E] rounded-[12px] shadow-[8px_8px_0px_rgba(18,15,26,0.2)] overflow-hidden flex flex-col border-2 border-[#120F1A]">
                <div className="bg-[#2D2D2D] px-4 py-3 flex items-center gap-2 border-b border-white/10 shrink-0">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                    <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                    <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                  </div>
                  <span className="ml-4 font-mono text-[13px] text-[#9CA3AF]">
                    {activeExample.file}
                  </span>
                </div>
                <div className="flex-1 overflow-y-auto relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeExample.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="h-full"
                    >
                      <SyntaxHighlighter
                        language="typescript"
                        style={vscDarkPlus}
                        customStyle={{
                          margin: 0,
                          padding: '1.5rem',
                          background: 'transparent',
                          fontSize: '14px',
                          lineHeight: '1.5',
                        }}
                        showLineNumbers={true}
                        wrapLines={true}
                      >
                        {activeExample.code}
                      </SyntaxHighlighter>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
