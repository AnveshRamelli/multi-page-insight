"use client";

import { MetricTrendPoint } from "@/data/types";
import TrendChart from "../../charts/TrendChart";

interface Props {
  title: string;
  data: MetricTrendPoint[];
}

export default function TrendInsight({ data, title }: Props) {
  if (!data.length) {
    return (
      <p className="text-sm text-gray-500">
        No data available for this metric.
      </p>
    );
  }

  return (
    <>
      <h2 className="text-lg font-medium mb-2">{title}</h2>
      <TrendChart data={data} />
    </>
  );
}
