import React from 'react';
import { IconProps } from '../types';

export const SmartFilterIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1634_639)">
          <path
            d="M26.5067 7.32989V5.996C26.5067 5.25969 25.9092 4.66211 25.1728 4.66211H6.4984C5.76209 4.66211 5.16451 5.25969 5.16451 5.996V9.44544C5.16451 9.79892 5.30457 10.1391 5.55534 10.3885L12.5009 17.3341V25.6695C12.5009 26.754 13.52 27.5503 14.5724 27.2875L17.9072 26.4539C18.6488 26.2684 19.1703 25.6015 19.1703 24.8358V21.9693"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.8355 9.33301V11.003"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.8355 17.6631V19.3331"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.4755 16.6931L18.2955 17.8731"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M25.3755 10.793L24.1955 11.973"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18.5055 14.333H16.8355"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M26.8355 14.333H25.1655"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18.2955 10.793L19.4755 11.973"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.1955 16.6931L25.3755 17.8731"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.1923 11.9762C25.4939 13.2778 25.4939 15.3882 24.1923 16.6898C22.8907 17.9914 20.7803 17.9914 19.4787 16.6898C18.1771 15.3882 18.1771 13.2778 19.4787 11.9762C20.7804 10.6746 22.8907 10.6746 24.1923 11.9762Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1634_639">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
