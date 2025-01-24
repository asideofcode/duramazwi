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
  title: "Shona Dictionary - Discover the Meaning of Shona Words",
  description:
    "Your go-to resource for understanding Shona. Find accurate definitions, meanings, and examples of Shona words to enhance your language skills and cultural knowledge.",
  keywords:
    "Shona dictionary, Shona words, Shona language, Shona definitions, meanings, learn Shona, Shona-English dictionary, Shona translation, Shona pronunciation",
  url: "https://dictionary.chishona.org",
  google: "notranslate",
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: "https://dictionary.chishona.org",
    title: "Shona Dictionary - Discover the Meaning of Shona Words",
    description:
      "Your go-to resource for understanding Shona. Find accurate definitions, meanings, and examples of Shona words to enhance your language skills and cultural knowledge.",
    images: [
      {
        url: "https://dictionary.chishona.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shona Dictionary - Discover the Meaning of Shona Words",
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
            <div
              role="heading"
              aria-level={1}
              className="text-4xl font-bold text-blue-600 dark:text-blue-500"
            >
              Shona Dictionary (Duramazwi)
            </div>

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
