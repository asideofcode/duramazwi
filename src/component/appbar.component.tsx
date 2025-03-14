"use client";

import { Inter } from "next/font/google";

import { useTheme } from "@/app/hook/use-theme.hook";
import SvgIcon from "@/component/icons/svg-icon";
import StyledAppBarSvgIcon from './icons/styled-appbar-svg-icon';
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

  return (
    <div className={`${inter.className}`}>
      <nav className="flex place-content-between py-6 theme-text-h3 ">
        <div>
          <Link href="/">
            <StyledAppBarSvgIcon
              active={pathname === '/'}
              icon={"Book"} title="Return to homepage"
            />
          </Link>
          <Link href="/suggest">
            <StyledAppBarSvgIcon
              active={pathname === '/suggest'}
              icon={"Plus"} title="Suggest a new word"
            />
          </Link>
        </div>
        <div className="flex place-content-center gap-2 ">
          <button
            className="flex place-content-center"
            title="Toggle mode"
            onClick={toggleTheme}
          >
            <div className="flex items-center">
              <SvgIcon
                className='inline-block h-6 w-6 cursor-pointer hover:text-blue-500 hover:scale-110 transition-transform duration-200'
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
