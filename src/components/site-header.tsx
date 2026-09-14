import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nav, profile } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-heading text-lg tracking-tight">
          {profile.shortName}
        </a>
        <nav className="hidden items-center gap-5 text-sm text-muted-foreground lg:gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button asChild size="sm">
          <a href={profile.resumePath} download>
            Resume
            <ArrowUpRight data-icon="inline-end" />
          </a>
        </Button>
      </div>
    </header>
  );
}
