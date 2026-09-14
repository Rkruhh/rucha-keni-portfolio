import { profile } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © 2026 {profile.name}
        </p>
        <p>Data analyst · Florida, US</p>
      </div>
    </footer>
  );
}
