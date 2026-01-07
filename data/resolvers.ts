import { METRICS, ORDERS_TREND_DAILY, ORDERS_TREND_MONTHLY, REVENUE_TREND_DAILY, REVENUE_TREND_MONTHLY, REVENUE_TREND_WEEKLY, USERS_TREND_MONTHLY, USERS_TREND_DAILY, USERS_TREND_WEEKLY } from "./mockData";
import { Metric, MetricKey, MetricTrendPoint, TimeGrain } from "./types";

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
  return METRICS;
}

// Fetch trend data for a specific metric
export async function getMetricTrend(
  metric: MetricKey,
  grain: TimeGrain,
  from: Date,
  to: Date
): Promise<MetricTrendPoint[]> {
  await simulateLatency();

  if (shouldSimulateError(metric)) {
    throw new Error("Failed to load trend data");
  }

  if (metric === "revenue") {
    if (grain === "daily") return REVENUE_TREND_DAILY;
    if (grain === "weekly") return REVENUE_TREND_WEEKLY;
    if (grain === "monthly") return REVENUE_TREND_MONTHLY;
  }

  if (metric === "orders") {
    if (grain === "daily") return ORDERS_TREND_DAILY;
    if (grain === "monthly") return ORDERS_TREND_MONTHLY;
  }

  if (metric === "active_users") {
    if (grain === "daily") return USERS_TREND_DAILY;
    if (grain === "weekly") return USERS_TREND_WEEKLY;
    if (grain === "monthly") return USERS_TREND_MONTHLY;
  }

  return [];
}