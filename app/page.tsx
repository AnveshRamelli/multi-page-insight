import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-2">
        Multi-Page Insight Dashboard
      </h1>

      <p className="text-sm text-gray-600 mb-6">
        Explore metrics and drill down into trends and contributors using
        URL-driven insights.
      </p>

      <Link
        href="/metrics"
        className="text-blue-600 underline text-sm"
      >
        View metrics
      </Link>
    </main>
  );
}
