import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") || "Eman Trades";
    const subtitle =
      searchParams.get("subtitle") ||
      "Institutional Market Analyst & Financial Strategist";
    const tag = searchParams.get("tag") || "INDEPENDENT DESK • LONDON / DUBAI";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            backgroundColor: "#000000",
            padding: "60px 80px",
            border: "2px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          {/* Top Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <span
              style={{
                fontSize: 16,
                letterSpacing: "0.25em",
                color: "rgba(255, 255, 255, 0.6)",
                textTransform: "uppercase",
                fontFamily: "monospace",
              }}
            >
              [ {tag} ]
            </span>
            <span
              style={{
                fontSize: 14,
                letterSpacing: "0.2em",
                color: "rgba(255, 255, 255, 0.4)",
                textTransform: "uppercase",
                fontFamily: "monospace",
              }}
            >
              EMANTRADES.COM
            </span>
          </div>

          {/* Main Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              maxWidth: "1000px",
            }}
          >
            <h1
              style={{
                fontSize: 60,
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.15,
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: 24,
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Bottom Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              borderTop: "1px solid rgba(255, 255, 255, 0.15)",
              paddingTop: "24px",
            }}
          >
            <span
              style={{
                fontSize: 14,
                color: "#ffffff",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "monospace",
              }}
            >
              Institutional Order Flow • Auction Theory • Risk Engineering
            </span>
            <span
              style={{
                fontSize: 14,
                color: "rgba(255, 255, 255, 0.5)",
                fontFamily: "monospace",
              }}
            >
              Eman Trades Desk
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate the image: ${e.message}`, {
      status: 500,
    });
  }
}
