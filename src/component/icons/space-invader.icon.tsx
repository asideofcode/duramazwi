import { SvgIconProps, SvgIconSize } from "./svg-icon";

export default function SpaceInvaderIcon({
  size = 5,
  className = "",
}: SvgIconProps<any>) {
  const sizeClass = `w-${size} h-${size}`;

  return (
    <svg
      className={`${sizeClass} ${className}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Classic space invader pixel art design */}
      <g>
        {/* Top row */}
        <rect x="8" y="2" width="2" height="2" />
        <rect x="14" y="2" width="2" height="2" />
        
        {/* Second row */}
        <rect x="9" y="4" width="2" height="2" />
        <rect x="13" y="4" width="2" height="2" />
        
        {/* Third row - body */}
        <rect x="6" y="6" width="2" height="2" />
        <rect x="8" y="6" width="2" height="2" />
        <rect x="10" y="6" width="4" height="2" />
        <rect x="16" y="6" width="2" height="2" />
        
        {/* Fourth row - wider body */}
        <rect x="4" y="8" width="2" height="2" />
        <rect x="6" y="8" width="12" height="2" />
        <rect x="18" y="8" width="2" height="2" />
        
        {/* Fifth row - full body */}
        <rect x="2" y="10" width="20" height="2" />
        
        {/* Sixth row - body with indents */}
        <rect x="2" y="12" width="4" height="2" />
        <rect x="8" y="12" width="8" height="2" />
        <rect x="18" y="12" width="4" height="2" />
        
        {/* Seventh row - legs */}
        <rect x="2" y="14" width="2" height="2" />
        <rect x="6" y="14" width="2" height="2" />
        <rect x="16" y="14" width="2" height="2" />
        <rect x="20" y="14" width="2" height="2" />
        
        {/* Bottom row - feet */}
        <rect x="4" y="16" width="2" height="2" />
        <rect x="18" y="16" width="2" height="2" />
        
        {/* Eyes */}
        <rect x="7" y="8" width="2" height="2" fill="white" />
        <rect x="15" y="8" width="2" height="2" fill="white" />
      </g>
    </svg>
  );
}
