import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` emits plain HTML/CSS/JS into ./out,
  // deployable on any static host (Render Static Site, GitHub Pages, etc.)
  output: "export",
};

export default nextConfig;
