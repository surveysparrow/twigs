import React from 'react';
import { IconProps } from '../types';

export const StarIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_33_745)">
          <path
            d="M9.84471 18.9532L5.67237 14.6992C5.36316 14.3839 5.25484 13.9229 5.39129 13.5029C5.52775 13.083 5.88636 12.7737 6.32182 12.7003L11.9288 11.7564L14.9492 5.96896C15.1535 5.57749 15.5585 5.33203 16.0001 5.33203C16.4417 5.33203 16.8466 5.57749 17.0509 5.96896L20.0711 11.7564L25.6781 12.7003C26.1136 12.7736 26.4722 13.083 26.6086 13.5029C26.7451 13.9229 26.6368 14.3839 26.3276 14.6992L22.1552 18.9532"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M9.8445 18.9544L8.90146 25.3066C8.83663 25.7434 9.01999 26.18 9.37725 26.4396C9.73451 26.6991 10.2064 26.7386 10.6018 26.5419L15.9999 23.8571L21.398 26.5419C21.7934 26.7386 22.2653 26.6991 22.6226 26.4396C22.9798 26.18 23.1632 25.7434 23.0983 25.3066L22.1553 18.9544"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_33_745">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
