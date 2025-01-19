// "use client";

import { Inter, Source_Serif_4 } from "next/font/google";
import SearchPage from "./((search))/search.page";

const inter = Inter({ subsets: ["latin"] });
const nunitoSans = Source_Serif_4({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className={nunitoSans.className}>
      <SearchPage />
    </div>
  );
}
