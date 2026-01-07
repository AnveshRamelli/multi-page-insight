import { METRIC_KEYS, TIME_GRAINS } from "@/data/constants";
import { MetricKey, TimeGrain } from "@/data/types";

// Validate a metric key
export function validateMetric(metric: string): MetricKey | null {
  return METRIC_KEYS.includes(metric as MetricKey)
    ? (metric as MetricKey)
    : null;
}

// Validate time grain
export function validateGrain(grain?: string): TimeGrain {
  if (!grain) return "weekly";

  return TIME_GRAINS.includes(grain as TimeGrain)
    ? (grain as TimeGrain)
    : "weekly";
}

// Validate range and provide a default if invalid
export function validateRange(range?: string): number {
  const parsed = Number(range);

  if (!Number.isFinite(parsed)) return 30;
  if (parsed <= 0) return 30;
  if (parsed > 365) return 365;

  return parsed;
}
