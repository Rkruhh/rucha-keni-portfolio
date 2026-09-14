import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/site";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs tracking-[0.22em] text-primary uppercase">
            Projects
          </p>
          <h2 className="mt-3 font-heading text-4xl sm:text-5xl">
            Selected work, not just charts
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.name} className="bg-card/80">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="font-heading text-2xl font-normal">
                    {project.name}
                  </CardTitle>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex size-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={`Open ${project.name} on GitHub`}
                  >
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="leading-6 text-muted-foreground">{project.summary}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
