# Multi-Page Insight

A multi-page analytics-style Insight application built using Next.js 16 (App Router).
The project simulates a real-world metrics dashboard and focuses on URL-driven state, clean data boundaries, and performance-aware architecture.


## Features

- Browse available metrics

- Drill into a metric on a dedicated page

- View multiple insights (trend, contributors)

- Share and navigate via URLs

- Handle data fetching, loading states, and error isolation properly

---

## Usage    

### Step 1: Install dependencies
```
npm install

```

### Step 2: Run App

```
npm run dev

```
---

## Architecture Overview

The application is built using Next.js App Router with a clear separation of concerns:

### Pages (Server Components)

- Own routing, URL parsing, validation, and orchestration

- Act as the single source of truth for state via URL params

### Data Layer (Server-only)

- Centralized mock resolvers simulate API behavior

- Latency and error scenarios are intentionally modeled

- Resolver-level caching is applied using React’s cache()

### Insights (Server + Client split)

- Small async server wrappers handle data fetching

- Presentation components remain dumb and client-only

### Charts & Controls (Client Components)

- Charts handle rendering only

- Controls update URL state via router navigation

---

## Routing & URL Design

### Routes

- /metrics — Metrics list page

- /metrics/[metric] — Metric detail page

### URL-driven State

The metric detail page is fully driven by the URL:

```
/metrics/revenue?grain=weekly&range=30

```
- metric → route param

- grain → daily | weekly | monthly

- range → number of days

### Validation Strategy

- All params are validated server-side

- Invalid metrics trigger notFound()

- Invalid or missing query params fall back to safe defaults

- No redirects are used; URLs remain stable and shareable

---

## Data Flow

-  Request hits a route (/metrics/[metric])

- Page component validates params and derives state from URL

- Each insight is rendered inside its own Suspense boundary

- Async server wrappers fetch data from resolvers

- Data is passed to dumb client components for rendering

- Errors are caught per insight so one failure does not break the page

- Each insight is isolated in terms of:

  - Loading

  - Error handling

  - Rendering

---

## Performance Considerations

- Server-side data fetching to avoid client waterfalls

- URL as the single source of truth (no duplicated state)

- Resolver-level memoisation using React cache() to avoid duplicate work

- Suspense boundaries per insight for granular loading

- Keyed Suspense boundaries to re-trigger loading on URL changes

- Explicit route prefetching from metrics list to metric detail pages

- No unnecessary memoisation (useMemo avoided where not needed)

--- 

## Trade-offs

Some intentional trade-offs were made:

- Mock data is shaped to be chart-ready to keep charts dumb and avoid data transformation logic (within assignment scope).

- Intentional error simulation and fetch delay to test loading and error boundaries.

- Resolver caching uses in-memory cache() instead of external stores

- Query param validation uses fallbacks instead of redirects

- Suspense is used selectively, not everywhere, to avoid over-complexity

- Avoided memoizing derived values (e.g. range calculations) since they are cheap and recomputed per server request.

---

## What I Would Improve With More Time (Future scope)

- Proper design system and integrate component libraries for consistent UI and ease of modification.

- Replace mock data with real APIs and introduce a dedicated data transformation layer.

- Add dynamic metadata generation to improve SEO.

- Add unit tests for data resolvers.

---

This project prioritizes architectural clarity, explainability, and correctness over visual polish.