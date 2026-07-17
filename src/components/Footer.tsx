import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex items-center gap-6 text-sm text-zinc-500">
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-zinc-200">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-zinc-200">
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-zinc-200">
            Email
          </a>
          <a href="#" className="transition-colors hover:text-zinc-200">
            Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
