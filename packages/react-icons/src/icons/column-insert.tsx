import React from 'react';
import { IconProps } from '../types';

export const ColumnInsertIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_76_41)">
          <path
            d="M28.0052 9.99865H18.668"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M28.0052 16.0013H18.668"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M28.0052 22.0035H18.668"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M14.6663 3.99609H10.6646C9.92793 3.99609 9.33073 4.5933 9.33073 5.32998V10.6655"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M9.33073 21.3366V26.6721C9.33073 27.4088 9.92793 28.006 10.6646 28.006H14.6663"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.9981 16.0013H7.66341"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M9.33068 14.3337V17.6684"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20.0013 28.0061H26.6719C27.4082 28.0061 28.0052 27.4091 28.0052 26.6728V5.32943C28.0052 4.59305 27.4082 3.99609 26.6719 3.99609H20.0013C19.2649 3.99609 18.668 4.59305 18.668 5.32943V26.6728C18.668 27.4091 19.2649 28.0061 20.0013 28.0061Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M5.99512 21.3368H12.6662C13.7708 21.3368 14.6662 20.4414 14.6662 19.3368V12.6657C14.6662 11.5611 13.7708 10.6657 12.6662 10.6657H5.99512C4.89055 10.6657 3.99512 11.5611 3.99512 12.6657V19.3368C3.99512 20.4414 4.89055 21.3368 5.99512 21.3368Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_76_41">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
