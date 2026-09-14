import { education } from "@/data/site";

export function Education() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)]">
        <div>
          <p className="font-mono text-xs tracking-[0.22em] text-primary uppercase">
            Education
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((item) => (
            <article key={item.school} className="rounded-xl border border-border p-6">
              <p className="font-mono text-xs text-accent-foreground">{item.dates}</p>
              <h3 className="mt-3 font-heading text-2xl leading-snug">{item.school}</h3>
              <p className="mt-2 text-sm text-primary">{item.credential}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
