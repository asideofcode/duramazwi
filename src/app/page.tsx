"use client";

import { Inter, Source_Serif_4 } from "next/font/google";
import SearchPage from "./((search))/search.page";
import { useParams } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
const nunitoSans = Source_Serif_4({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  // const params = useParams(); // Extract the dynamic route parameter
  // const searchQuery = params?.search_query?.join(" ") || ""; // Handle optional parameter

  return (
    <div className={nunitoSans.className}>
      <SearchPage />
    </div>
  );
}
