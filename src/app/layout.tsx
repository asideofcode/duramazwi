import AnalyticsWrapper from "@/component/analytics.component";
import { Inter, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { createMetadata } from "@/utils/metadata";

const inter = Inter({ subsets: ["latin"] });
const nunitoSans = Source_Serif_4({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = createMetadata({});

// Root layout - minimal, just provides base HTML structure
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Theme handled by useTheme hook on client-side */}
      </head>
      <body className={`${inter.className} bg-default min-h-screen text-base`}>
        {children}

        <AnalyticsWrapper />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y8JQGYJC4X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y8JQGYJC4X');
          `}
        </Script>
      </body>
    </html>
  );
}
