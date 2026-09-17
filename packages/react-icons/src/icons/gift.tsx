import React from 'react';
import { IconProps } from '../types';

export const GiftIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <g clipPath="url(#clip0_1622_552)">
          <path
            d="M20.6424 6.55209C19.4081 8.21958 17.2094 8.86064 16.1224 9.00077C16.1224 9.00077 14.9376 4.96441 16.3288 3.08578C17.238 1.85813 18.9398 1.63875 20.1306 2.59568C21.3214 3.55262 21.5498 5.32463 20.6407 6.55228"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.8687 7.81206C12.4855 9.11201 14.7749 9.17447 15.8619 9.03434"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.8593 9.03463C15.8593 9.03463 15.9814 4.82985 14.1592 3.36547"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.8697 7.81189C9.67889 6.85496 9.45046 5.08295 10.3596 3.8553C11.2688 2.62765 12.9707 2.40825 14.1615 3.36519"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M26.2898 17.6936V27.3361C26.2898 28.0721 25.6924 28.6694 24.9564 28.6694H8.95644C8.22044 28.6694 7.62311 28.0721 7.62311 27.3361V19.1206"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M26.3167 8.3183L5.14774 10.9617C4.41741 11.0528 3.8987 11.7196 3.98989 12.4499L4.32031 15.096C4.41151 15.8264 5.07825 16.3451 5.80858 16.2539L26.9775 13.6105C27.7078 13.5193 28.2266 12.8526 28.1354 12.1223L27.8049 9.47615C27.7137 8.74583 27.047 8.22711 26.3167 8.3183Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1622_552">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
