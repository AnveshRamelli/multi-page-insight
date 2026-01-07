"use client";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

interface Props {
  data: Array<{
    date: string;
    value: number;
  }>;
}

export default function TrendChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" minHeight={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e3a8a" stopOpacity={0.25} />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#1e3a8a"
          strokeWidth={2}
          fill="url(#trendGradient)"
          dot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
