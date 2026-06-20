import React from "react";
import cx from "classnames";
import { SvgIconProps } from "./svg-icon";

export default function DeviceIcon({ className, size }: SvgIconProps<void>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cx("", className)}
      height={size ? size * 4 : "100%"}
      width={size ? size * 4 : "100%"}
      viewBox="0 0 24 24"
      strokeWidth="1.7"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x="4" y="5" width="16" height="11" rx="2" />
      <path d="M8 20h8" />
      <path d="M10 16v4" />
      <path d="M14 16v4" />
      <path d="M8 9h8" />
      <path d="M8 12h5" />
    </svg>
  );
}
