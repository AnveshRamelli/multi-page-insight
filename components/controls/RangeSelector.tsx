"use client";

import { useRouter, useSearchParams } from "next/navigation";

// Define the available range options
const RANGES = [7, 30, 90];

export default function RangeSelector({ value }: { value: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Handle changes to the range selection
  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("range", e.target.value);
    router.push(`?${params.toString()}`);
  }

  return (
    <label className="text-sm">
      <span className="mr-2 text-gray-600">Range</span>
      <select
        value={value}
        onChange={onChange}
        className="border px-2 py-1 text-sm"
      >
        {RANGES.map((r) => (
          <option key={r} value={r}>
            Last {r} days
          </option>
        ))}
      </select>
    </label>
  );
}
