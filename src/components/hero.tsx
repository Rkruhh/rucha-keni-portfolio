import { ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="site-grid site-glow absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)] lg:py-28">
        <div>
          <p className="font-mono text-xs tracking-[0.22em] text-primary uppercase">
            Data Analytics · Dashboards · Automation
          </p>
          <h1 className="mt-5 font-heading text-5xl leading-[0.95] text-balance sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground text-pretty">
            {profile.title}. I connect SQL, Python, and Power BI so operational
            decisions are based on clean numbers—not last-minute fire drills.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" />
            {profile.location}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-10 px-4">
              <a href="#work">See experience</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-10 px-4">
              <a href={`mailto:${profile.email}`}>
                Email me
                <ArrowUpRight data-icon="inline-end" />
              </a>
            </Button>
          </div>
        </div>

        <aside className="self-end rounded-2xl border border-border bg-card/80 p-6 backdrop-blur">
          <p className="font-mono text-xs tracking-[0.18em] text-accent-foreground uppercase">
            Currently
          </p>
          <p className="mt-3 font-heading text-2xl leading-snug">
            Analyst at Holiday Channel
          </p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Building Python/SQL validation pipelines and Power BI KPI reporting across
            content, search, and marketplace data.
          </p>
          <dl className="mt-6 border-t border-border pt-5 text-sm">
            <div>
              <dt className="text-muted-foreground">Stack</dt>
              <dd className="mt-1">SQL · Python · Power BI</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
