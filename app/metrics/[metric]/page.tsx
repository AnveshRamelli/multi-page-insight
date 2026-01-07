import { MetricKey, TimeGrain } from "@/data/types";
import GrainSelector from "@/components/controls/GrainSelector";
import RangeSelector from "@/components/controls/RangeSelector";
import Link from "next/link";
import { Suspense } from "react";
import TrendInsightSkeleton from "@/components/insights/trend/TrendInsightSkeleton";
import TrendInsightServer from "@/components/insights/trend/TrendInsight.server";
import {
  validateGrain,
  validateMetric,
  validateRange,
} from "@/utils/validators";
import { notFound } from "next/navigation";

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
  let { metric } = await params;
  metric = validateMetric(metric)!;
  if (!metric) {
    return notFound();
  }
  const sp = await searchParams;

  // Validate and set defaults for grain and range
  const grain = validateGrain(sp.grain);
  const range = validateRange(sp.range);

  // Calculate date range based on range (Not memoised as it is a server component and runs per request)
  const to = new Date();
  const from = new Date();
  from.setDate(to.getDate() - range);

  const title = metric.replace("_", " ").toUpperCase();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <p>
        <Link href="/metrics">🔙</Link>
      </p>
      <div className="flex gap-4 mb-6">
        <GrainSelector value={grain} />
        <RangeSelector value={range} />
      </div>

      <h1 className="text-2xl font-semibold mb-1">Trend Insight</h1>

      <p className="text-sm text-gray-600 mb-6">
        Trend over last {range} days ({grain})
      </p>
      {/* Suspense for loading state while fetching Trend data */}
      <Suspense
        key={`${metric}-${grain}-${range}`}
        fallback={<TrendInsightSkeleton />}
      >
        <TrendInsightServer
          metric={metric}
          grain={grain}
          from={from}
          to={to}
          title={title}
        />
      </Suspense>
    </main>
  );
}
