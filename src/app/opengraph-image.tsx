import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Pratik Sharma · Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background: "#0a0a0c",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#34d399" }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, background: "#34d399" }} />
          Open to freelance work
        </div>
        <div style={{ marginTop: 36, fontSize: 64, fontWeight: 600, lineHeight: 1.15, maxWidth: 950 }}>
          I help startups and businesses ship reliable web applications that scale.
        </div>
        <div style={{ marginTop: 40, fontSize: 28, color: "#a1a1aa" }}>
          Pratik Sharma · Full Stack Developer
        </div>
        <div style={{ marginTop: 14, fontSize: 22, color: "#52525b" }}>
          Angular · React · Node.js · TypeScript · MongoDB · Redis
        </div>
      </div>
    ),
    { ...size }
  );
}
