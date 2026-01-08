import { getMetricContributors, getMetricTrend } from "@/data/resolvers";
import {
  MetricContributorsResponse,
  MetricKey,
  MetricTrendPoint,
  TimeGrain,
} from "@/data/types";
import ContributorInsight from "./ContributorInsight";

// Data type for the TrendInsightServer component props
interface Props {
  metric: MetricKey;
  grain: TimeGrain;
  from: Date;
  to: Date;
  title: string;
}

// Server component to fetch data and render TrendInsight
export default async function ContributorInsightServer({
  metric,
  grain,
  from,
  to,
  title,
}: Props) {
  try {
    const data: MetricContributorsResponse = await getMetricContributors(
      metric,
      grain,
      from,
      to
    );
    return <ContributorInsight data={data} title={title} />;
  } catch (error) {
    return <div>Error loading contributor data.</div>;
  }
}
