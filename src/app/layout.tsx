import type { Metadata } from "next";
import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Display face. Carries the personality of the page, so it is used only where
// type is doing visual work — the hero and section titles.
const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

// Metadata, rails and stack labels. Monospace here is structural: it marks the
// difference between prose and machine-readable detail.
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const title = `${site.name} · ${site.role}`;
const description =
  "Software engineer in Bengaluru building enterprise SaaS, queue-driven backends and integrations. Currently Associate Software Engineer at Simplify3x.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s · ${site.name}` },
  description,
  keywords: [
    "Software Engineer",
    "Backend Engineer",
    "Node.js",
    "Angular",
    "TypeScript",
    "MongoDB",
    "BullMQ",
    "Multi-tenant SaaS",
    "Pratik Sharma",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    url: site.url,
    title,
    description,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.currentRole,
  email: `mailto:${site.email}`,
  url: site.url,
  address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
  sameAs: [site.github, site.linkedin, site.leetcode],
  knowsAbout: [
    "Backend Engineering",
    "Multi-tenant SaaS",
    "Node.js",
    "Angular",
    "TypeScript",
    "MongoDB",
    "Redis",
    "BullMQ",
    "System Integration",
  ],
  worksFor: { "@type": "Organization", name: site.currentCompany },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${grotesk.variable} ${plexMono.variable} h-full antialiased`}
    >
      <head>
        {/* Reveal elements start transparent and are shown by an observer.
            Without JavaScript that observer never runs, so force them visible
            rather than serving a page of empty space. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#work"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
