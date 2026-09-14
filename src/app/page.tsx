import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Metrics } from "@/components/metrics";
import { Projects } from "@/components/projects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Certifications } from "@/components/certifications";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to experience
      </a>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Metrics />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
