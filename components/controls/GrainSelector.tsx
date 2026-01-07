"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { TimeGrain } from "@/data/types";

// Define the available grain options
const GRAINS: TimeGrain[] = ["daily", "weekly", "monthly"];

export default function GrainSelector({ value }: { value: TimeGrain }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Handle changes to the grain selection
  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("grain", e.target.value);
    router.push(`?${params.toString()}`);
  }

  return (
    <label className="text-sm">
      <span className="mr-2 text-gray-600">Grain</span>
      <select
        value={value}
        onChange={onChange}
        className="border px-2 py-1 text-sm"
      >
        {GRAINS.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>
    </label>
  );
}
