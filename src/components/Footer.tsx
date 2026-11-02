import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white/45">
      <div className="mx-auto max-w-[1200px] px-6 py-8 font-mono text-[12px] md:px-10">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
