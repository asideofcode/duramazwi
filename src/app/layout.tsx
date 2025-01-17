import AnalyticsWrapper from "@/component/analytics.component";
import "./globals.css";

export const metadata = {
  title: "Duramazwi - Shona Dictionary",
  description:
    "Duramazwi is a user-friendly Shona dictionary. It provides an intuitive interface to search for Shona words easily and quickly, offering definitions, pronunciations, and usage examples. Expand your Shona vocabulary with related and similar words.",
  url: "https://duramazwi.vercel.app/",
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: "https://duramazwi.vercel.app/",
    title: "Duramazwi - Shona Dictionary",
    description:
      "Duramazwi is a user-friendly Shona dictionary. It provides an intuitive interface to search for Shona words easily and quickly, offering definitions, pronunciations, and usage examples. Expand your Shona vocabulary with related and similar words.",
    images: [
      {
        url: "https://duramazwi.vercel.app/og-image.jpg", // Example Open Graph image
        width: 1200,
        height: 630,
        alt: "Duramazwi - Shona Dictionary",
      },
    ],
  },
  twitter: {
    handle: "@duramazwi",
    site: "@duramazwi",
    cardType: "summary_large_image",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={"bg-default min-h-screen"}>{children}</body>
      <AnalyticsWrapper />
    </html>
  );
}
