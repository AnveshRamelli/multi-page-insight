import Link from "next/link";
import { getAvailableMetrics } from "@/data/resolvers";
import { Metric } from "@/data/types";

export default async function MetricsPage() {
  const metrics: Metric[] = await getAvailableMetrics();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <p><Link href="/">🔙</Link></p>
      <h1 className="text-2xl font-semibold mb-4">
        Metrics
      </h1>

      <div className="border border-gray-200 rounded-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left font-medium px-4 py-2">
                Metric Name
              </th>
              <th className="text-left font-medium px-4 py-2">
                Description
              </th>
            </tr>
          </thead>

          <tbody>
            {metrics.map((metric) => (
              <tr
                key={metric.key}
                className="border-t border-gray-200"
              >
                <td className="px-4 py-2">
                  <Link
                    href={`/metrics/${metric.key}`}
                    className="text-blue-600 underline"
                  >
                    {metric.label}
                  </Link>
                </td>

                <td className="px-4 py-2 text-gray-600">
                  {metric.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
