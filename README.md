# Multi-Page Insight

A multi-page analytics-style Insight application built using **Next.js 16 (App Router)**.  
The project simulates a real-world metrics dashboard and focuses on **URL-driven state**, **clean data boundaries**, and **performance-aware architecture**.

The app allows users to:

Browse available metrics
Drill into a metric on a dedicated page
View multiple insights (trend, contributors, summary)
Share and navigate via URLs
Handle data fetching, loading states, and optimisations properly

## 🚀 Incremental Development Plan

The project is intentionally developed in two phases.  
Each phase has a clearly defined scope and purpose.

## Phase 1 — Core Metric Insight Flow

**Goal:** Establish a solid foundation with clean routing, URL-driven state, and a scalable architecture.

### Scope
- Metrics list page (`/metrics`)
- Metric insight page (`/metrics/[metric]`)
- URL-driven controls for:
  - Time grain
  - Date range
- Trend insight visualization
- Centralized mock data resolver layer
- Loading, error, and empty states
- Server vs Client Component split

### Key Architectural Focus
- URL as the single source of truth
- Data fetching at the page level
- Clean separation of concerns
- Avoiding unnecessary client-side state
- Clear data flow from server → client

## Phase 2 — Contributors & Performance Optimisation

**Goal:** Extend the existing architecture and demonstrate performance-aware thinking.

### Scope
- Contributors insight for each metric
- Shared data contracts between insights
- Memoisation of derived data
- Optional in-memory caching at the resolver level
- Skeleton loaders instead of spinners
- Link prefetching where applicable
- Expanded README with trade-offs and improvements
- Short Loom walkthrough explaining design decisions

### Focus Areas
- Extensibility of the existing architecture
- Avoiding duplicate data fetching
- Reducing unnecessary re-renders
- Making performance decisions explicit and explainable