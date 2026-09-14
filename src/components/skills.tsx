import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/data/site";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <p className="font-mono text-xs tracking-[0.22em] text-primary uppercase">
          Core skills
        </p>
        <h2 className="mt-3 font-heading text-4xl sm:text-5xl">
          The toolkit behind the dashboards
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-medium tracking-wide uppercase text-accent-foreground">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="secondary" className="h-auto py-1">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
