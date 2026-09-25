import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };

const fraunces = readFile(join(process.cwd(), "assets/fonts/Fraunces-Medium.ttf"));
const plexMono = readFile(join(process.cwd(), "assets/fonts/IBMPlexMono-Medium.ttf"));

// Colours match the light theme in globals.css.
const paper = "#faf9f6";
const ink = "#17140f";
const inkSoft = "#5c574a";
const rule = "#ddd8cb";
const accent = "#c2401b";
const brass = "#c8862a";

export async function renderOgImage({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  const titleSize = title.length > 50 ? 64 : 80;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: paper,
          borderTop: `16px solid ${accent}`,
          padding: "72px 80px 64px",
          fontFamily: "Fraunces",
          color: ink,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "IBM Plex Mono",
              fontSize: 24,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: brass,
              marginBottom: 32,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              fontSize: titleSize,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: `2px solid ${rule}`,
            paddingTop: 28,
          }}
        >
          <div style={{ fontSize: 40 }}>Tywyn Websites</div>
          <div
            style={{
              fontFamily: "IBM Plex Mono",
              fontSize: 24,
              color: inkSoft,
            }}
          >
            tywynwebsites.co.uk
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Fraunces", data: await fraunces, style: "normal", weight: 500 },
        { name: "IBM Plex Mono", data: await plexMono, style: "normal", weight: 500 },
      ],
    },
  );
}
