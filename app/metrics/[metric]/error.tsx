"use client";

import Link from "next/link";

// Error boundary for the metric detail page
export default function MetricErrorPage() {
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>Please try reloading the page or go back to the metrics page</p>
      <Link href="/metrics" className="underline text-blue-600">View all metrics</Link>
    </div>
  );
}
