import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Circle, PackageSearch } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/track-order")({
  head: () => ({
    meta: [
      { title: "Track Your Order — NovaCart" },
      {
        name: "description",
        content: "Track your NovaCart order status. Currently in demo mode — live tracking launches with real order services.",
      },
      { property: "og:title", content: "Track Your Order — NovaCart" },
      { property: "og:description", content: "Demo order tracking for NovaCart orders." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TrackOrderPage,
});

const DEMO_STEPS = ["Order placed", "Packed", "Shipped", "Out for delivery", "Delivered"];

function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [result, setResult] = useState<null | { id: string; step: number }>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const id = orderId.trim();
    if (!id) return;
    // Demo mode: derive a stable fake status from the ID length.
    setResult({ id, step: (id.length % DEMO_STEPS.length) + 1 });
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
          <PackageSearch className="h-7 w-7" />
        </span>
        <h1 className="mt-6 font-display text-4xl text-foreground">Track Your Order</h1>
        <p className="mt-3 text-muted-foreground">
          Order tracking is currently in <strong>demo mode</strong>. Enter any order ID to preview
          how tracking will look once live services are connected.
        </p>
      </div>

      <form onSubmit={handleTrack} className="mt-10 flex gap-3">
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="e.g. NC-1024"
          aria-label="Order ID"
          maxLength={30}
          className="flex-1 rounded-full border border-input bg-card px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
        <button
          type="submit"
          className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-light"
        >
          Track
        </button>
      </form>

      {result && (
        <div className="mt-10 rounded-2xl border border-border bg-card p-7">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl text-foreground">Order {result.id}</h2>
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              Demo status
            </span>
          </div>
          <ol className="mt-6 space-y-4">
            {DEMO_STEPS.map((step, i) => {
              const done = i < result.step;
              return (
                <li key={step} className="flex items-center gap-3">
                  {done ? (
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  ) : (
                    <Circle className="h-5 w-5 text-border" />
                  )}
                  <span className={done ? "font-medium text-foreground" : "text-muted-foreground"}>
                    {step}
                  </span>
                </li>
              );
            })}
          </ol>
          <p className="mt-6 rounded-lg bg-muted px-4 py-3 text-xs text-muted-foreground">
            This is a simulated status for demonstration only. Live tracking will show real
            shipment data once the store goes live.
          </p>
        </div>
      )}
    </div>
  );
}
