"use client";

import { MetricTrendPoint } from "@/data/types";
import TrendChart from "../charts/TrendChart";

interface Props {
  title: string;
  data: MetricTrendPoint[];
}

export default function TrendInsight({ data, title }: Props) {
  const chartData = data.map((point: MetricTrendPoint) => ({
    date: point.timestamp.slice(0, 10),
    value: point.value,
  }));
  console.log(chartData);

  if (!chartData.length) {
    return (
      <p className="text-sm text-gray-500">
        No data available for this metric.
      </p>
    );
  }

  return (
    <div>
      <h2 className="text-lg font-medium mb-2">{title}</h2>

      <TrendChart data={chartData} />
    </div>
  );
}
