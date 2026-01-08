// Metric definitions
export type MetricKey =
  | "revenue"
  | "orders"
  | "active_users"
  | "conversion_rate";

// Time grain definitions
export type TimeGrain = "daily" | "weekly" | "monthly";

// Metric definition structure
export interface Metric {
  key: MetricKey;
  label: string;
  description: string;
}

// Metric trend point structure
export interface MetricTrendPoint {
  date: string;
  value: number;
}

// Metric contributor point structure
export interface MetricContributorPoint {
  date: string;
  [dimensionKey: string]: number | string;
}

export interface MetricContributorDimension {
  key: string;
  label: string;
  color: string;
}

// Contributor response structure
export interface MetricContributorsResponse {
  dimensions: MetricContributorDimension[];
  data: MetricContributorPoint[];
}
