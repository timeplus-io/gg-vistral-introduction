import React, { useEffect, useRef } from 'react';
import {
  VistralChart,
} from '@timeplus/vistral';
import type {
  VistralSpec,
  ChartHandle,
} from '@timeplus/vistral';
import { dataGenerators } from '../data-utils';

// =============================================================================
// Example 1: Streaming Line Chart
// =============================================================================
export function BasicLineChart() {
  const handleRef = useRef<ChartHandle | null>(null);
  const loadedRef = useRef(false);           // Guard against Strict Mode double-run

  const spec: VistralSpec = {
    marks: [
      {
        type: 'line',
        encode: { x: 'time', y: 'value' },
        style: { shape: 'smooth' },
      },
    ],
    scales: {
      y: { type: 'linear', domain: [0, 100] },
    },
    temporal: { mode: 'axis', field: 'time', range: 5 },
    axes: {
      y: { title: 'CPU Usage (%)' },
    },
    theme: 'light',
    animate: false,
  };

  useEffect(() => {
    // Guard against React 18 Strict Mode double-run
    if (!loadedRef.current && handleRef.current) {
      loadedRef.current = true;
      handleRef.current.append(dataGenerators.cpuLoad.generate(30));
    } else if (!loadedRef.current) {
      loadedRef.current = true;
      setTimeout(() => handleRef.current?.append(dataGenerators.cpuLoad.generate(30)), 50);
    }
    const interval = setInterval(() => {
      handleRef.current?.append(dataGenerators.cpuLoad.generate());
    }, dataGenerators.cpuLoad.interval);
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
// Example 2: Multi-Series Streaming Area Chart
// =============================================================================
export function MultiSeriesAreaChart() {
  const handleRef = useRef<ChartHandle | null>(null);
  const loadedRef = useRef(false);           // Guard against Strict Mode double-run

  const spec: VistralSpec = {
    marks: [
      {
        type: 'area',
        encode: { x: 'timestamp', y: 'temperature', color: 'location' },
        transforms: [{ type: 'stackY' }],
      },
    ],
    temporal: { mode: 'axis', field: 'timestamp', range: 5 },
    axes: {
      x: { title: 'Time' },
      y: { title: 'Temperature (°C)' },
    },
    legend: { position: 'top' },
    theme: 'light',
    animate: false,
  };

  useEffect(() => {
    // Guard against React 18 Strict Mode double-run
    if (!loadedRef.current && handleRef.current) {
      loadedRef.current = true;
      handleRef.current.append(dataGenerators.sensors.generate(30));
    } else if (!loadedRef.current) {
      loadedRef.current = true;
      setTimeout(() => handleRef.current?.append(dataGenerators.sensors.generate(30)), 50);
    }
    const interval = setInterval(() => {
      handleRef.current?.append(dataGenerators.sensors.generate());
    }, dataGenerators.sensors.interval);
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
// Example 3: Grammar Frame-Bound Bar Chart
// =============================================================================
export function GrammarFrameBoundBarChart() {
  const handleRef = useRef<ChartHandle | null>(null);
  const loadedRef = useRef(false);           // Guard against Strict Mode double-run

  const spec: VistralSpec = {
    marks: [
      {
        type: 'interval',
        encode: { x: 'server', y: 'cpu', color: 'server' },
      },
    ],
    temporal: { mode: 'frame', field: 'timestamp' },
    axes: {
      y: { title: 'CPU Usage (%)' },
    },
    scales: {
      y: { type: 'linear', domain: [0, 100] },
    },
    legend: false,
    theme: 'light',
    animate: false,
  };

  useEffect(() => {
    // Guard against React 18 Strict Mode double-run
    if (!loadedRef.current && handleRef.current) {
      loadedRef.current = true;
      handleRef.current.append(dataGenerators.metrics.generate());
    } else if (!loadedRef.current) {
      loadedRef.current = true;
      setTimeout(() => handleRef.current?.append(dataGenerators.metrics.generate()), 50);
    }
    const interval = setInterval(() => {
      handleRef.current?.append(dataGenerators.metrics.generate());
    }, dataGenerators.metrics.interval);
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
// Example 4: Grammar Key-Bound Bar Chart
// =============================================================================
export function GrammarKeyBoundBarChart() {
  const handleRef = useRef<ChartHandle | null>(null);
  const loadedRef = useRef(false);           // Guard against Strict Mode double-run

  const spec: VistralSpec = {
    marks: [
      {
        type: 'interval',
        encode: { x: 'price', y: 'symbol', color: 'symbol' },
      },
    ],
    temporal: { mode: 'key', field: 'symbol' },
    scales: {
      x: { type: 'linear' },
      y: { type: 'band', nice: true },
    },
    axes: {
      x: { title: 'Stock Price ($)' },
    },
    legend: false,
    theme: 'light',
    animate: false,
  };

  useEffect(() => {
    // Guard against React 18 Strict Mode double-run
    if (!loadedRef.current && handleRef.current) {
      loadedRef.current = true;
      handleRef.current.append(dataGenerators.stocks.generate());
    } else if (!loadedRef.current) {
      loadedRef.current = true;
      setTimeout(() => handleRef.current?.append(dataGenerators.stocks.generate()), 50);
    }
    const interval = setInterval(() => {
      handleRef.current?.append(dataGenerators.stocks.generate());
    }, dataGenerators.stocks.interval);
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
  const loadedRef = useRef(false);           // Guard against Strict Mode double-run

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
    // Guard against React 18 Strict Mode double-run
    if (!loadedRef.current && handleRef.current) {
      loadedRef.current = true;
      handleRef.current.replace(dataGenerators.httpResponses.generate());
    } else if (!loadedRef.current) {
      loadedRef.current = true;
      setTimeout(() => handleRef.current?.replace(dataGenerators.httpResponses.generate()), 50);
    }
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
  const loadedRef = useRef(false);           // Guard against Strict Mode double-run

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
    // Guard against React 18 Strict Mode double-run
    if (!loadedRef.current && handleRef.current) {
      loadedRef.current = true;
      handleRef.current.replace(dataGenerators.datacenterLoad.generate());
    } else if (!loadedRef.current) {
      loadedRef.current = true;
      setTimeout(() => handleRef.current?.replace(dataGenerators.datacenterLoad.generate()), 50);
    }
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
