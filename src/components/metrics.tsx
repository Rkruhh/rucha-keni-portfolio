import { metrics } from "@/data/site";

export function Metrics() {
  return (
    <section aria-label="Impact metrics" className="border-b border-border">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 overflow-hidden sm:grid-cols-3 lg:grid-cols-6">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="border-r border-b border-border px-4 py-7 sm:px-5 lg:border-b-0"
          >
            <p className="font-heading text-3xl tracking-tight text-primary">
              {metric.value}
            </p>
            <p className="mt-2 text-sm font-medium">{metric.label}</p>
            <p className="mt-1 text-xs text-muted-foreground">{metric.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
