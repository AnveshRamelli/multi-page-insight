import { Metric } from "./types";

// Mock data for available metrics
export const METRICS: Metric[] = [
  { key: "revenue", label: "Revenue", description: "View revenue insights" },
  { key: "orders", label: "Orders", description: "View order insights" },
  { key: "active_users", label: "Active Users", description: "View active user insights" },
  { key: "conversion_rate", label: "Conversion Rate", description: "View conversion rate insights" },
];

// Mock data for Trend insights
export const REVENUE_TREND_DAILY = [
  { date: "2025-01-01", value: 120 },
  { date: "2025-01-02", value: 180 },
  { date: "2025-01-03", value: 150 },
  { date: "2025-01-04", value: 210 },
];

export const REVENUE_TREND_WEEKLY = [
  { date: "2025-01-01", value: 980 },
  { date: "2025-01-08", value: 1120 },
  { date: "2025-01-15", value: 1040 },
];

export const REVENUE_TREND_MONTHLY = [
  { date: "2025-01-01", value: 4200 },
  { date: "2025-02-01", value: 4600 },
];

export const ORDERS_TREND_DAILY = [
  { date: "2025-01-01", value: 45 },
  { date: "2025-01-02", value: 60 },
  { date: "2025-01-03", value: 50 },
  { date: "2025-01-04", value: 70 },
];

export const ORDERS_TREND_WEEKLY = [
  { date: "2025-01-01", value: 320 },
  { date: "2025-01-08", value: 410 },
  { date: "2025-01-15", value: 380 },
];
export const ORDERS_TREND_MONTHLY = [
  { date: "2025-01-01", value: 1800 },
  { date: "2025-02-01", value: 2100 },
  { date: "2025-03-01", value: 2000 },
];

export const USERS_TREND_DAILY = [
  { date: "2025-01-01", value: 600 },
  { date: "2025-01-02", value: 750 },
  { date: "2025-01-03", value: 700 },
  { date: "2025-01-04", value: 800 },
];

export const USERS_TREND_WEEKLY = [
  { date: "2025-01-01", value: 4200 },
  { date: "2025-01-08", value: 2500 },
  { date: "2025-01-15", value: 5400 },
];

export const USERS_TREND_MONTHLY = [
  { date: "2025-01-01", value: 16000 },
  { date: "2025-02-01", value: 18000 },
  { date: "2025-03-01", value: 17500 },
];



// Mock data for Contributors insights

/* Revenue by Region */
export const REVENUE_CONTRIBUTORS = {
  dimensions: ["India", "USA", "Europe"],
  data: [
    {
      date: "2025-01-01",
      contributions: {
        India: 420,
        USA: 310,
        Europe: 250,
      },
    },
    {
      date: "2025-01-08",
      contributions: {
        India: 460,
        USA: 330,
        Europe: 290,
      },
    },
  ],
};

/* Orders by Platform */
export const ORDERS_CONTRIBUTORS = {
  dimensions: ["Web", "iOS", "Android"],
  data: [
    {
      date: "2025-01-01",
      contributions: {
        Web: 180,
        iOS: 90,
        Android: 50,
      },
    },
    {
      date: "2025-01-08",
      contributions: {
        Web: 210,
        iOS: 120,
        Android: 80,
      },
    },
  ],
};

/* Users by Region */
export const USERS_CONTRIBUTORS = {
  dimensions: ["Asia", "North America", "Europe"],
  data: [
    {
      date: "2025-01-01",
      contributions: {
        Asia: 2600,
        "North America": 1600,
        Europe: 1000,
      },
    },
    {
      date: "2025-01-08",
      contributions: {
        Asia: 2800,
        "North America": 1700,
        Europe: 1100,
      },
    },
  ],
};