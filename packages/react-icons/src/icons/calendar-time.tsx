import React from 'react';
import { IconProps } from '../types';

export const CalendarTimeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_2090_16771)">
          <path
            d="M26.3089 10.5154H4"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.328 26.9749H7.71815C5.6647 26.9749 4 25.3103 4 23.2568V8.38417C4 6.33069 5.6647 4.66602 7.71815 4.66602H22.5908C24.6442 4.66602 26.3089 6.33069 26.3089 8.38417V16.7117"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M9.10335 14.7911C9.08692 14.7908 9.05958 14.809 9.05958 14.809C9.05958 14.809 9.04194 14.8367 9.04263 14.8531C9.04263 14.8778 9.05756 14.9 9.08041 14.9093C9.10325 14.9186 9.12947 14.9132 9.14674 14.8956C9.164 14.8779 9.16889 14.8516 9.1591 14.829C9.14931 14.8063 9.12678 14.7919 9.10212 14.7924"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M9.10335 18.5094C9.08692 18.509 9.07108 18.5155 9.05958 18.5272C9.04807 18.539 9.04194 18.5549 9.04263 18.5714C9.04263 18.596 9.05756 18.6182 9.08041 18.6276C9.10325 18.6369 9.12947 18.6315 9.14674 18.6138C9.164 18.5962 9.16889 18.5699 9.1591 18.5472C9.14931 18.5246 9.12678 18.5101 9.10212 18.5106"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M9.10335 22.2287C9.12802 22.2282 9.14931 22.2427 9.1591 22.2653C9.16889 22.288 9.164 22.3143 9.14674 22.3319C9.12947 22.3496 9.10325 22.355 9.08041 22.3457C9.05756 22.3363 9.04263 22.3141 9.04262 22.2894"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M13.7745 14.8091H13.6006"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.329 19.4433V21.6221L23.0418 22.6669"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M28 21.1169C28 24.5721 25.199 27.3732 21.7437 27.3732C18.2885 27.3732 15.4874 24.5721 15.4874 21.1169C15.4874 17.6616 18.2885 14.8606 21.7437 14.8606C25.199 14.8606 28 17.6616 28 21.1169Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_2090_16771">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
