import React from 'react';
import { IconProps } from '../types';

export const LightBulbIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M20.2534 20.5067H12.2534"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M11.6413 20.1147C9.27333 18.4413 7.85333 15.52 8.35333 12.304C8.89467 8.828 11.792 6.05334 15.2867 5.644C20.1373 5.07467 24.2533 8.85067 24.2533 13.5867C24.2533 16.2867 22.912 18.6693 20.8627 20.1173C20.4947 20.3773 20.2533 20.78 20.2533 21.2307V24.92C20.2533 26.7613 18.7613 28.2533 16.92 28.2533H15.5867C13.7453 28.2533 12.2533 26.7613 12.2533 24.92V21.236C12.2533 20.7813 12.0107 20.376 11.6413 20.1147Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M26.92 6.92L28.5066 5.33334"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M5.58667 20.2533L4 21.84"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M6.91998 5.58667L5.33331 4"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M26.92 20.2533L28.5066 21.84"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M28.2534 13.5867H30.5067"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M2 13.5867H4.25333"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M12.2534 24.2533H20.08"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }
);
