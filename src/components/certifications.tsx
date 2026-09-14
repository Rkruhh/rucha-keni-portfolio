import { certifications } from "@/data/site";

export function Certifications() {
  return (
    <section id="certs" className="scroll-mt-28 border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <p className="font-mono text-xs tracking-[0.22em] text-primary uppercase">
          Certifications
        </p>
        <h2 className="mt-3 font-heading text-4xl sm:text-5xl">
          Courses that back the toolkit
        </h2>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {certifications.map((item) => (
            <li
              key={`${item.name}-${item.issuer}`}
              className="flex items-start justify-between gap-4 bg-background px-5 py-4"
            >
              <div>
                <p className="text-sm font-medium leading-snug">{item.name}</p>
                <p className="mt-1 text-sm text-primary">{item.issuer}</p>
              </div>
              <p className="shrink-0 font-mono text-xs text-accent-foreground">
                {item.dates}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
