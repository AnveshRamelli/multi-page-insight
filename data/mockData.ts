import { Metric } from "./types";

// Mock data for available metrics
export const METRICS: Metric[] = [
  { key: "revenue", label: "Revenue", description: "View revenue insights" },
  { key: "orders", label: "Orders", description: "View order insights" },
  {
    key: "active_users",
    label: "Active Users",
    description: "View active user insights",
  },
  {
    key: "conversion_rate",
    label: "Conversion Rate",
    description: "View conversion rate insights",
  },
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

export const CONVERSION_RATE_TREND_WEEKLY = [
  { date: "2025-01-01", value: 2.5 },
  { date: "2025-01-08", value: 2.8 },
  { date: "2025-01-15", value: 2.6 },
];

export const CONVERSION_RATE_TREND_MONTHLY = [
  { date: "2025-01-01", value: 2.5 },
  { date: "2025-02-01", value: 2.8 },
  { date: "2025-03-01", value: 2.6 },
  { date: "2025-04-01", value: 2.9 },
];

// Mock data for Contributors insights

/* Revenue by Region */
export const REVENUE_CONTRIBUTORS = {
  dimensions: [
    { key: "india", label: "India", color: "#8884d8" },
    { key: "usa", label: "USA", color: "#82ca9d" },
    { key: "europe", label: "Europe", color: "#ffc658" },
  ],
  data: [
    {
      date: "2025-01-01",
      india: 420,
      usa: 310,
      europe: 250,
    },
    {
      date: "2025-01-08",
      india: 460,
      usa: 330,
      europe: 290,
    },
    {
      date: "2025-01-15",
      india: 480,
      usa: 350,
      europe: 300,
    },
  ],
};

/* Orders by Platform */
export const ORDERS_CONTRIBUTORS = {
  dimensions: [
    { key: "web", label: "Web", color: "#1f77b4" },
    { key: "ios", label: "iOS", color: "#ff7f0e" },
    { key: "android", label: "Android", color: "#2ca02c" },
  ],
  data: [
    {
      date: "2025-01-01",
      web: 180,
      ios: 90,
      android: 50,
    },
    {
      date: "2025-01-08",
      web: 210,
      ios: 120,
      android: 80,
    },
  ],
};

/* Users by Region - commented out to test error handling */
// export const USERS_CONTRIBUTORS = {
//   dimensions: [
//     { key: "asia", label: "Asia", color: "#ff0000" },
//     { key: "na", label: "North America", color: "#00ff00" },
//     { key: "eu", label: "Europe", color: "#0000ff" },
//   ],
//   data: [
//     {
//       date: "2025-01-01",
//       asia: 2600,
//       "north america": 1600,
//       europe: 1000,
//     },
//     {
//       date: "2025-01-08",

//       asia: 2800,
//       "north america": 1700,
//       europe: 1100,
//     },
//   ],
// };

export const CONVERSION_RATE_CONTRIBUTORS = {
  dimensions: [
    { key: "email", label: "Email", color: "#a83232" },
    { key: "phone", label: "Phone", color: "#32a832" },
  ],
  data: [
    { date: "2025-01-01", email: 2.5, phone: 1.8 },
    { date: "2025-01-08", email: 2.8, phone: 2.0 },
  ],
};
