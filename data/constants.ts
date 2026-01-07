import { MetricKey, TimeGrain } from "./types";

// Runtime representations of domain enums for validations.
// These intentionally typescript types.

export const METRIC_KEYS: readonly MetricKey[] = [
  "revenue",
  "orders",
  "active_users",
  "conversion_rate",
] as const;

export const TIME_GRAINS: readonly TimeGrain[] = [
  "daily",
  "weekly",
  "monthly",
] as const;
