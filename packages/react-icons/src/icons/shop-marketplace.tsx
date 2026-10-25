import React from 'react';
import { IconProps } from '../types';

export const ShopMarketplaceIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_3825_30)">
          <path
            d="M20.0017 11.4993V11.9996"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20.0017 11.9996C20.0017 14.2096 18.2101 16.0012 16 16.0012C13.7899 16.0012 11.9983 14.2096 11.9983 11.9996"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20.0017 11.9996C20.0017 14.2096 21.7933 16.0011 24.0033 16.0011H24.3344C26.3616 16.0011 28.005 14.3577 28.005 12.3305C28.005 11.7866 27.8572 11.2528 27.5773 10.7864L24.3774 5.45321C23.835 4.54922 22.8581 3.99609 21.8038 3.99609H10.1962C9.14192 3.99609 8.165 4.54922 7.6226 5.45321L4.42269 10.7864C4.14283 11.2528 3.995 11.7866 3.995 12.3305C3.995 14.3577 5.63836 16.0011 7.66556 16.0011H7.99666C10.2067 16.0011 11.9983 14.2096 11.9983 11.9996"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M11.9983 11.9996V11.4993"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.6665 27.7462V21.0009H12.3332V27.7462"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M26.5044 15.2871V25.005C26.5044 26.6626 25.1606 28.0063 23.5031 28.0063H8.49686C6.83931 28.0063 5.49561 26.6626 5.49561 25.005V15.2868"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_3825_30">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
