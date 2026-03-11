import React, { useEffect, useRef } from 'react';
import {
  StreamChart,
  VistralChart,
  useStreamingData,
  findPaletteByLabel,
} from '@timeplus/vistral';
import type {
  StreamDataSource,
  TimeSeriesConfig,
  VistralSpec,
  ChartHandle,
} from '@timeplus/vistral';
import { dataGenerators } from '../data-utils';

// =============================================================================
// Example 1: Streaming Line Chart
// =============================================================================
export function BasicLineChart() {
  const { data, append } = useStreamingData<Record<string, unknown>[]>([], 300);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (!loadedRef.current) {
      loadedRef.current = true;
      append(dataGenerators.cpuLoad.generate(30));
    }
    const id = setInterval(() => {
      append(dataGenerators.cpuLoad.generate());
    }, dataGenerators.cpuLoad.interval);
    return () => clearInterval(id);
  }, []);

  const source: StreamDataSource = {
    columns: dataGenerators.cpuLoad.columns,
    data,
    isStreaming: true,
  };

  const config: TimeSeriesConfig = {
    chartType: 'line',
    xAxis: 'time',
    yAxis: 'value',
    lineStyle: 'curve',
    gridlines: true,
    yTitle: 'CPU Usage (%)',
    yRange: { min: 0, max: 100 },
    unit: { position: 'right', value: '%' },
    fractionDigits: 1,
  };

  return (
    <div className="w-full h-full">
      <StreamChart config={config} data={source} theme="light" />
    </div>
  );
}

// =============================================================================
// Example 2: Multi-Series Streaming Area Chart
// =============================================================================
export function MultiSeriesAreaChart() {
  const { data, append } = useStreamingData<Record<string, unknown>[]>(
    [],
    240
  );
  const loadedRef = useRef(false);

  useEffect(() => {
    if (!loadedRef.current) {
      loadedRef.current = true;
      append(dataGenerators.sensors.generate(30));
    }
    const id = setInterval(() => {
      append(dataGenerators.sensors.generate());
    }, dataGenerators.sensors.interval);
    return () => clearInterval(id);
  }, []);

  const source: StreamDataSource = {
    columns: dataGenerators.sensors.columns,
    data: data,
    isStreaming: true,
  };

  const config: TimeSeriesConfig = {
    chartType: 'area',
    xAxis: 'timestamp',
    yAxis: 'temperature',
    color: 'location',
    legend: true,
    gridlines: true,
    xTitle: 'Time',
    yTitle: 'Temperature (°C)',
    colors: findPaletteByLabel('Morning')?.values,
  };

  return (
    <div className="w-full h-full">
      <StreamChart config={config} data={source} theme="light" />
    </div>
  );
}

// =============================================================================
// Example 3: Frame-Bound Bar Chart
// =============================================================================
export function FrameBoundBarChart() {
  const [data, setData] = React.useState<Record<string, unknown>[]>([]);

  useEffect(() => {
    setData(dataGenerators.productInventory.generate());
    const id = setInterval(() => {
      setData(dataGenerators.productInventory.generate());
    }, dataGenerators.productInventory.interval);
    return () => clearInterval(id);
  }, []);

  const source: StreamDataSource = {
    columns: dataGenerators.productInventory.columns,
    data,
    isStreaming: true,
  };

  const config: TimeSeriesConfig = {
    chartType: 'column',
    xAxis: 'product',
    yAxis: 'sales',
    temporal: { mode: 'frame', field: 'timestamp' },
    dataLabel: true,
    gridlines: true,
    yTitle: 'Sales',
    fractionDigits: 0,
    colors: findPaletteByLabel('Ocean')?.values,
  };

  return (
    <div className="w-full h-full">
      <StreamChart config={config} data={source} theme="light" />
    </div>
  );
}

// =============================================================================
// Example 4: Grammar Bar Chart
// =============================================================================
export function GrammarBarChart() {
  const handleRef = useRef<ChartHandle | null>(null);

  const spec: VistralSpec = {
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
  };

  useEffect(() => {
    handleRef.current?.replace(dataGenerators.productInventory.generate());
    const interval = setInterval(() => {
      handleRef.current?.replace(dataGenerators.productInventory.generate());
    }, dataGenerators.productInventory.interval);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full">
      <VistralChart
        spec={spec}
        height={300}
        onReady={(handle) => { handleRef.current = handle; }}
      />
    </div>
  );
}

// =============================================================================
// Example 5: GrammarDonutChart
// =============================================================================
export function GrammarDonutChart() {
  const handleRef = useRef<ChartHandle | null>(null);

  const spec: VistralSpec = {
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
  };

  useEffect(() => {
    handleRef.current?.replace(dataGenerators.httpResponses.generate());
    const interval = setInterval(() => {
      handleRef.current?.replace(dataGenerators.httpResponses.generate());
    }, dataGenerators.httpResponses.interval);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full">
      <VistralChart
        spec={spec}
        height={300}
        onReady={(handle) => { handleRef.current = handle; }}
      />
    </div>
  );
}

// =============================================================================
// Example 6: GrammarHeatmap
// =============================================================================
export function GrammarHeatmap() {
  const handleRef = useRef<ChartHandle | null>(null);

  const spec: VistralSpec = {
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
      color: { type: 'sequential', range: ['#0d47a1', '#2196f3', '#64b5f6', '#fff176', '#ff9800', '#f44336'] },
    },
    streaming: { maxItems: 500 },
    axes: {
      x: { title: 'Hour of Day', grid: false },
      y: { title: false, grid: false },
    },
    legend: { position: 'bottom' },
    theme: 'light',
    animate: false,
  };

  useEffect(() => {
    handleRef.current?.replace(dataGenerators.datacenterLoad.generate());
    const interval = setInterval(() => {
      handleRef.current?.replace(dataGenerators.datacenterLoad.generate());
    }, dataGenerators.datacenterLoad.interval);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full">
      <VistralChart
        spec={spec}
        height={300}
        onReady={(handle) => { handleRef.current = handle; }}
      />
    </div>
  );
}
