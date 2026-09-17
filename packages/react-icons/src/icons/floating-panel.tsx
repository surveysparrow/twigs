import React from 'react';
import { IconProps } from '../types';

export const FloatingPanelIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_3032_564)">
          <path
            d="M4 10.6667H28"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M25.4737 28H6.52632C5.13107 28 4 26.8061 4 25.3333V6.66667C4 5.19391 5.13107 4 6.52632 4H25.4737C26.8689 4 28 5.19391 28 6.66667V25.3333C28 26.8061 26.8689 28 25.4737 28Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.9593 22.0111L21.0666 21.9877C22.4613 21.9844 23.5894 20.7873 23.5863 19.3152C23.5833 17.843 22.4502 16.6511 21.0555 16.6544L10.9482 16.6778C9.55351 16.6811 8.4254 17.8782 8.42847 19.3503C8.43154 20.8225 9.56462 22.0144 10.9593 22.0111Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.2269 7.33398C15.2269 7.9231 14.7747 8.40039 14.2166 8.40039C13.6586 8.40024 13.2063 7.92301 13.2063 7.33398C13.2064 7.05118 13.3129 6.78006 13.5024 6.58008C13.6918 6.3801 13.9487 6.26765 14.2166 6.26758C14.7746 6.26758 15.2267 6.74499 15.2269 7.33398Z"
            fill={color}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M12.021 7.33398C12.021 7.9231 11.5689 8.40039 11.0108 8.40039C10.4528 8.40024 10.0005 7.92301 10.0005 7.33398C10.0006 6.74509 10.4529 6.26773 11.0108 6.26758C11.2787 6.26758 11.5355 6.38021 11.725 6.58008C11.9144 6.78006 12.021 7.05118 12.021 7.33398Z"
            fill={color}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M8.8062 7.33398C8.8062 7.9231 8.35404 8.40039 7.79592 8.40039C7.23793 8.40024 6.78564 7.92301 6.78564 7.33398C6.78579 6.74509 7.23802 6.26773 7.79592 6.26758C8.35395 6.26758 8.80606 6.74499 8.8062 7.33398Z"
            fill={color}
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_3032_564">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
