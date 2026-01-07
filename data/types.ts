
// Metric definitions
export type MetricKey =
  | "revenue"
  | "orders"
  | "active_users"
  | "conversion_rate";

  // Time grain definitions
export type TimeGrain = "daily" | "weekly" | "monthly";

// Metric trend point structure
export interface MetricTrendPoint {
  timestamp: string;
  value: number;
}

// Metric contributor point structure
export interface MetricContributorPoint {
  timestamp: string;
  contributions: Record<string, number>;
}

// Contributor response structure
export interface MetricContributorsResponse {
  dimensions: string[];
  data: MetricContributorPoint[];
}

