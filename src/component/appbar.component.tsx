"use client";

import { Inter } from "next/font/google";

import { useTheme } from "@/app/hook/use-theme.hook";
import SvgIcon from "@/component/icons/svg-icon";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

/**
 * Appbar component
 */
export default function Appbar() {
  // const [isDark, setIsDark] = React.useState(false);
  const { toggleTheme, darkMode } = useTheme();
  // const router = useRouter();

  return (
    <div className={`${inter.className}`}>
      <nav className="flex place-content-between py-6 theme-text-h3 ">
        <div>
          <Link href="/">
            <SvgIcon
              className="h-6 w-6 cursor-pointer hover:text-blue-500 hover:scale-110 transition-transform duration-200"
              icon={"Book"}
            />
          </Link>
          <Link href="/suggest">
            <SvgIcon
              className="h-6 w-6 cursor-pointer hover:text-blue-500 hover:scale-110 transition-transform duration-200"
              icon={"Plus"}
            />
          </Link>
        </div>
        <div className="flex place-content-center gap-2 ">
          <button
            className="flex place-content-center"
            onClick={() => {
              toggleTheme();
            }}
          >
            <div className="flex items-center">
              <SvgIcon
                className="h-6 w-6 cursor-pointer hover:text-blue-500 hover:scale-110 transition-transform duration-200"
                variant={!darkMode ? "dark" : "light"}
                icon={"LightDark"}
              />
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
}
