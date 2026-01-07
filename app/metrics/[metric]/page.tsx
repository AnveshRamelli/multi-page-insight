import { MetricKey } from "@/data/types";

export default async function MetricPage({ params }: { params: { metric: MetricKey } }) {
    const { metric } = await params;
    return (
        <div>
            <h1>{metric}</h1>
        </div>
    );
}