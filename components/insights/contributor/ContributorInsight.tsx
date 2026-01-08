"use client";

import { ContributorChart } from "@/components/charts/ContributorChart";
import { MetricContributorsResponse, MetricTrendPoint } from "@/data/types";

interface Props {
  title: string;
  data: MetricContributorsResponse;
}

// Client component to display contributor insights
export default function ContributorInsight({ data, title }: Props) {
  if (!data.data.length && !data.dimensions.length) {
    return (
      <p className="text-sm text-gray-500">
        No data available for this metric.
      </p>
    );
  }

  return (
    <>
      <h2 className="text-lg font-medium mb-2">{title}</h2>
      {/* Render the contributor chart */}
      <ContributorChart {...data} />
    </>
  );
}
