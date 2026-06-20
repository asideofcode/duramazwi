import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

type OgTheme = {
  primary: string;
  primaryDark: string;
  accent: string;
  danger: string;
  background: string;
  surface: string;
  raised: string;
  text: string;
  muted: string;
  border: string;
  heroText: string;
};

function StatCard({
  label,
  value,
  color,
  theme,
  right = false,
}: {
  label: string;
  value: string;
  color: string;
  theme: OgTheme;
  right?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        height: 170,
        borderRadius: 28,
        background: theme.raised,
        border: `2px solid ${theme.border}`,
        boxShadow: "0 10px 20px rgba(27, 27, 27, 0.09)",
        marginLeft: right ? 24 : 0,
      }}
    >
      <div
        style={{
          display: "flex",
          color,
          fontSize: 70,
          fontWeight: 800,
          marginBottom: 6,
        }}
      >
        {value}
      </div>
      <div style={{ display: "flex", color: theme.muted, fontSize: 28 }}>
        {label}
      </div>
    </div>
  );
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const score = searchParams.get("score") || "0";
    const accuracy = searchParams.get("accuracy") || "0";
    const correct = searchParams.get("correct") || "0";
    const total = searchParams.get("total") || "0";
    const time = searchParams.get("time") || "0:00";
    const date =
      searchParams.get("date") || new Date().toISOString().split("T")[0];
    const displayDate = new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const theme = {
      primary: "#1F5C3A",
      primaryDark: "#102A22",
      accent: "#F2B705",
      danger: "#B8322A",
      background: "#FFF7E6",
      surface: "#F6E8C8",
      raised: "#FFFFFF",
      text: "#1B1B1B",
      muted: "#6B4F35",
      border: "#D9C59C",
      heroText: "#FFF7E6",
    };

    const accuracyNum = parseInt(accuracy);
    const getMessage = () => {
      if (accuracyNum === 100) return "My Shona is basically perfect!";
      if (accuracyNum >= 80) return "My Shona isn't too bad!";
      if (accuracyNum >= 60) return "My Shona is coming along!";
      return "I (maybe) need to work on my Shona!";
    };

    const imageResponse = new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          background: theme.background,
          color: theme.text,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            padding: 64,
            background: `linear-gradient(180deg, ${theme.background} 0%, ${theme.surface} 100%)`,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "54px 48px",
              borderRadius: 48,
              background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.primaryDark} 100%)`,
              color: theme.heroText,
              boxShadow: "0 18px 38px rgba(27, 27, 27, 0.18)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 176,
                height: 176,
                borderRadius: "50%",
                background: theme.accent,
                boxShadow: "0 14px 28px rgba(0, 0, 0, 0.24)",
                marginBottom: 34,
              }}
            >
              <svg
                width="104"
                height="104"
                viewBox="0 0 576 512"
                fill={theme.primary}
              >
                <path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z" />
              </svg>
            </div>

            <div style={{ display: "flex", fontSize: 48, marginBottom: 10 }}>
              Completed my
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 72,
                fontWeight: 800,
                color: theme.accent,
                marginBottom: 28,
              }}
            >
              Daily Shona Challenge
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 34,
                color: theme.heroText,
                background: "rgba(255, 247, 230, 0.14)",
                border: `2px solid ${theme.accent}`,
                borderRadius: 999,
                padding: "14px 30px",
              }}
            >
              {displayDate}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 54,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 270,
                height: 390,
                borderRadius: 36,
                background: theme.raised,
                border: `2px solid ${theme.border}`,
                boxShadow: "0 12px 24px rgba(27, 27, 27, 0.10)",
                marginRight: 36,
              }}
            >
              <img
                src="https://shonadictionary.com/challenge-hero.png"
                width={230}
                height={330}
                alt="Daily Shona Challenge character"
                style={{ objectFit: "contain" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", marginBottom: 24 }}>
                <StatCard
                  label="Points Earned"
                  value={score}
                  color={theme.primary}
                  theme={theme}
                />
                <StatCard
                  label="Accuracy"
                  value={`${accuracy}%`}
                  color={theme.primary}
                  theme={theme}
                  right
                />
              </div>
              <div style={{ display: "flex" }}>
                <StatCard
                  label="Correct Answers"
                  value={`${correct}/${total}`}
                  color={theme.primary}
                  theme={theme}
                />
                <StatCard
                  label="Time Taken"
                  value={time}
                  color={theme.muted}
                  theme={theme}
                  right
                />
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 56,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                width: "100%",
                padding: "32px 40px",
                borderRadius: 32,
                background: theme.raised,
                border: `2px solid ${theme.border}`,
                color: theme.primary,
                fontSize: 46,
                fontWeight: 800,
                boxShadow: "0 10px 22px rgba(27, 27, 27, 0.08)",
              }}
            >
              {getMessage()}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "auto",
              color: theme.muted,
            }}
          >
            <div style={{ display: "flex", fontSize: 34, marginBottom: 16 }}>
              Daily Shona Challenge
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <svg
                width="58"
                height="58"
                viewBox="0 0 24 24"
                fill="none"
                stroke={theme.primary}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
                <line x1="13" y1="8" x2="15" y2="8" />
                <line x1="13" y1="12" x2="15" y2="12" />
              </svg>
              <div
                style={{
                  display: "flex",
                  fontSize: 54,
                  fontWeight: 800,
                  color: theme.primary,
                  marginLeft: 18,
                }}
              >
                shonadictionary.com
              </div>
            </div>
          </div>
        </div>
      </div>,
      {
        width: 1080,
        height: 1920,
      },
    );

    // Set headers to display inline and suggest filename
    const filename = "Daily Shona Challenge Results.png";
    imageResponse.headers.set(
      "Content-Disposition",
      `inline; filename="${filename}"; filename*=UTF-8''${encodeURIComponent(filename)}`,
    );
    imageResponse.headers.set("Content-Type", "image/png");
    // Some browsers also check this header for download naming
    imageResponse.headers.set("X-Content-Type-Options", "nosniff");

    return imageResponse;
  } catch (e) {
    console.error(e);
    return new Response("Failed to generate image", { status: 500 });
  }
}
