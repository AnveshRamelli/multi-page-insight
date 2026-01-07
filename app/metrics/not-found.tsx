import Link from "next/link";

export default function MetricsNotFound() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-xl font-semibold mb-2">Metric not found</h1>
      <p className="text-sm text-gray-600 mb-4">
        The requested metric does not exist.
      </p>
      <Link href="/metrics" className="text-blue-600 underline">
        View all metrics
      </Link>
    </main>
  );
}
