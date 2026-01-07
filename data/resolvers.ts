import { METRICS } from "./mockData";
import { Metric, MetricKey } from "./types";

// Simulate network latency
function simulateLatency(delay = 1500): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

//Simulate occasional API failure
function shouldSimulateError(metric?: MetricKey): boolean {
  // Intentionally fail for one specific case to test error handling
  if (metric === "conversion_rate") return true;

  return false;
}

// Fetch available metrics
export async function getAvailableMetrics(): Promise<Metric[]> {
  await simulateLatency();

  if (shouldSimulateError()) {
    throw new Error("Failed to load available metrics");
  }

  return METRICS;
}
