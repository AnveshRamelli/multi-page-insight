"use client";

import { useMemo } from "react";
import { MetricTrendPoint } from "@/data/types";

interface Props {
  data: MetricTrendPoint[];
}

export default function TrendInsight({ data }: Props) {
  const rows = data.map((point: MetricTrendPoint) => ({
      date: new Date(point.timestamp).toLocaleDateString(),
      value: point.value,
    }));
  

  if (!rows.length) {
    return (
      <p className="text-sm text-gray-500">
        No data available for this metric.
      </p>
    );
  }

  return (
    <div>
      <h2 className="text-lg font-medium mb-2">Trend</h2>

      <table className="w-full text-sm border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left px-3 py-2">Date</th>
            <th className="text-left px-3 py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="border-t">
              <td className="px-3 py-2">{row.date}</td>
              <td className="px-3 py-2">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
