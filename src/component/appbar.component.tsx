"use client";

import { Inter } from "next/font/google";

import { useTheme } from "@/app/hook/use-theme.hook";
import SvgIcon from "@/component/icons/svg-icon";
import Link from "next/link";
import {usePathname} from 'next/navigation'

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

/**
 * Appbar component
 */
export default function Appbar() {
  const { toggleTheme, darkMode } = useTheme();
  const pathname = usePathname();

  const isActive = (route: string): boolean => pathname === route 
  
  return (
    <div className={`${inter.className}`}>
      <nav className="flex place-content-between py-6 theme-text-h3 ">
        <div>
          <Link href="/">
            <SvgIcon
              className={isActive('/')}
              icon={"Book"} title="return to homepage"
            />
          </Link>
          <Link href="/suggest">
            <SvgIcon
              className={isActive('/suggest')}
              icon={"Plus"} title="suggest a new word"
            />
          </Link>
        </div>
        <div className="flex place-content-center gap-2 ">
          <button
            className="flex place-content-center"
            title="toggle mode"
            onClick={toggleTheme}
          >
            <div className="flex items-center">
              <SvgIcon
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
