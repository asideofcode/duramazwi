import AnalyticsWrapper from "@/component/analytics.component";
import Appbar from "@/component/appbar.component";
import { Inter, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SearchProvider } from "@/context/search-context";

const inter = Inter({ subsets: ["latin"] });
const nunitoSans = Source_Serif_4({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Duramazwi - Shona Dictionary",
  description:
    "Duramazwi is a user-friendly Shona dictionary. It provides an intuitive interface to search for Shona words easily and quickly, offering definitions, pronunciations, and usage examples. Expand your Shona vocabulary with related and similar words.",
  url: "https://dictionary.chishona.org",
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: "https://dictionary.chishona.org",
    title: "Duramazwi - Shona Dictionary",
    description:
      "Duramazwi is a user-friendly Shona dictionary. It provides an intuitive interface to search for Shona words easily and quickly, offering definitions, pronunciations, and usage examples. Expand your Shona vocabulary with related and similar words.",
    images: [
      {
        url: "https://dictionary.chishona.org/og-image.jpg", // Example Open Graph image
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
      <body className={"bg-default min-h-screen"}>
        <main className="max-w-3xl mx-auto px-4 sm:px-0">
          <Appbar />
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-500">
              Duramazwi
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Explore the meanings of Shona words or find Shona equivalents for
              English words.
            </p>
          </div>
          <div className={nunitoSans.className}>
          <SearchProvider>{children}</SearchProvider>
          </div>
        </main>
      </body>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-Y8JQGYJC4X`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Y8JQGYJC4X', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <AnalyticsWrapper />
    </html>
  );
}
