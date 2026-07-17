import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const title = `${site.name} · Full Stack Developer`;
const description =
  "Full-stack developer helping startups and businesses ship reliable web applications that scale. Angular, React, Node.js, MongoDB. Bug fixes, features, API integrations, and complete products.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s · ${site.name}`,
  },
  description,
  keywords: [
    "Full Stack Developer",
    "Freelance Developer",
    "SaaS Development",
    "Angular Developer",
    "Node.js Developer",
    "REST API Development",
    "Bug Fixing",
    "Pratik Sharma",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: site.url,
    title,
    description,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
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
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  url: site.url,
  sameAs: [site.github, site.linkedin],
  knowsAbout: [
    "Full Stack Development",
    "SaaS Architecture",
    "Angular",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "Redis",
    "Multi-tenant Architecture",
  ],
  worksFor: { "@type": "Organization", name: "Simplify3x" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
