import { experience } from "@/data/site";

export function Experience() {
  return (
    <section id="work" className="scroll-mt-28 border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs tracking-[0.22em] text-primary uppercase">
            Experience
          </p>
          <h2 className="mt-3 font-heading text-4xl sm:text-5xl">
            Work that moved the numbers
          </h2>
          <p className="mt-4 text-muted-foreground">
            Dashboards, ETL, and KPI reporting across operations, content, and
            enterprise systems—from SAP and Oracle into views stakeholders actually use.
          </p>
        </div>

        <ol className="space-y-0">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.dates}`}
              className="grid gap-4 border-t border-border py-10 lg:grid-cols-[220px_minmax(0,1fr)]"
            >
              <div>
                <p className="font-mono text-xs text-accent-foreground">{job.dates}</p>
                <p className="mt-2 text-sm text-muted-foreground">{job.location}</p>
              </div>
              <div>
                <h3 className="font-heading text-2xl">{job.role}</h3>
                <p className="mt-1 text-sm text-primary">{job.company}</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="pl-4 relative">
                      <span className="absolute top-2.5 left-0 size-1.5 rounded-full bg-primary/70" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
