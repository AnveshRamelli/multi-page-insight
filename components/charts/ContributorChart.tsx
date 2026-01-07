import { MetricContributorsResponse } from "@/data/types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

// ContributorChart component to display top contributors as a bar chart
export function ContributorChart({
  dimensions,
  data,
}: MetricContributorsResponse) {
  if (!data.length || !dimensions.length) return null;

  return (
    <ResponsiveContainer width="100%" minHeight={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />

        {dimensions.map((d) => (
          <Bar
            key={d.key}
            dataKey={d.key}
            stackId="total"
            fill={d.color}
            name={d.label ?? d.key}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
