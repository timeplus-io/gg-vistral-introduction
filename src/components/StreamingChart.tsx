import React, { useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const MAX_POINTS = 30;

export default function StreamingChart() {
  const [data, setData] = useState<{ time: string; value: number }[]>([]);

  useEffect(() => {
    // Generate initial data
    const initialData = Array.from({ length: MAX_POINTS }).map((_, i) => {
      const d = new Date(Date.now() - (MAX_POINTS - i) * 1000);
      return {
        time: `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`,
        value: Math.floor(Math.random() * 60) + 40,
      };
    });
    setData(initialData);

    // Stream new data every second
    const interval = setInterval(() => {
      setData((currentData) => {
        const d = new Date();
        const newDataPoint = {
          time: `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`,
          value: Math.floor(Math.random() * 60) + 40,
        };
        return [...currentData.slice(1), newDataPoint];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-white border border-[#DAD9DB] rounded-[4px] p-6 flex flex-col shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[14px] font-semibold text-[#231F2B]">Live Event Stream</h2>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D53F8C] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D53F8C]"></span>
          </span>
          <span className="text-[12px] text-[#514E58]">Live</span>
        </div>
      </div>
      <div className="flex-1 w-full min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#D53F8C" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#D53F8C" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ECECED" vertical={false} />
            <XAxis 
              dataKey="time" 
              stroke="#7D7B82" 
              fontSize={10} 
              tickMargin={10} 
              tick={{ fill: '#7D7B82' }} 
              axisLine={{ stroke: '#DAD9DB' }}
              tickLine={false}
            />
            <YAxis 
              stroke="#7D7B82" 
              fontSize={10} 
              tickFormatter={(val) => `${val}/s`} 
              tick={{ fill: '#7D7B82' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#231F2B',
                borderColor: '#3A3741',
                color: '#F7F6F6',
                fontSize: '12px',
                borderRadius: '4px',
                padding: '8px 12px'
              }}
              itemStyle={{ color: '#D53F8C', fontWeight: 600 }}
              labelStyle={{ color: '#B5B4B8', marginBottom: '4px' }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#D53F8C"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorValue)"
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
