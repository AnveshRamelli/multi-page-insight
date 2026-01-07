import { getMetricTrend } from "@/data/resolvers";
import { MetricKey, MetricTrendPoint, TimeGrain } from "@/data/types";
import TrendInsight from "./TrendInsight";

// Data type for the TrendInsightServer component props
interface Props {
  metric: MetricKey;
  grain: TimeGrain;
  from: Date;
  to: Date;
  title: string;
}

// Server component to fetch data and render TrendInsight
export default async function TrendInsightServer({
  metric,
  grain,
  from,
  to,
  title,
}: Props) {
  try {
    const data: MetricTrendPoint[] = await getMetricTrend(
      metric,
      grain,
      from,
      to
    );
    return <TrendInsight data={data} title={title} />;
  } catch (error) {
    return <div>Error loading trend data.</div>;
  }
}
