import { getMetricTrend } from "@/data/resolvers";
import { MetricKey, MetricTrendPoint, TimeGrain } from "@/data/types";
import TrendInsight from "./TrendInsight";

interface Props {
  metric: MetricKey;
  grain: TimeGrain;
  from: Date;
  to: Date;
  title: string;
}

export default async function TrendInsightServer({
  metric,
  grain,
  from,
  to,
  title,
}: Props) {
  const data: MetricTrendPoint[] = await getMetricTrend(
    metric,
    grain,
    from,
    to
  );

  return <TrendInsight data={data} title={title} />;
}
