import Link from "next/link";

// Not found page for the metric detail page
export default function MetricDetailNotFound() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-xl font-semibold mb-2">Invalid metric</h1>
      <p className="text-sm text-gray-600 mb-4">
        This metric does not exist or is no longer available.
      </p>
      <Link href="/metrics" className="text-blue-600 underline">
        Back to metrics
      </Link>
    </main>
  );
}
