import { getMetricTrend } from "@/data/resolvers";
import { MetricKey, MetricTrendPoint, TimeGrain } from "@/data/types";
import TrendInsight from "@/components/insights/TrendInsight";

interface PageProps {
  params: {
    metric: MetricKey;
  };
  searchParams: {
    grain?: TimeGrain;
    range?: string;
  };
}

export default async function MetricDetailPage({
  params,
  searchParams,
}: PageProps) {
  const { metric } = await params;
  const sp = await searchParams;
  

  const grain: TimeGrain = sp.grain ?? "weekly";
  const range = Number(sp.range ?? 30);

  const to = new Date();
  const from = new Date();
  from.setDate(to.getDate() - range);

  const trendData: MetricTrendPoint[] = await getMetricTrend(metric, grain, from, to);

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-1">
        Trend Insight
      </h1>

      <p className="text-sm text-gray-600 mb-6">
        Trend over last {range} days ({grain})
      </p>

      <TrendInsight data={trendData} />
    </main>
  );
}
