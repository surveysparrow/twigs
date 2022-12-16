import React from 'react';
import { IconProps } from '../types';

export const FlowerColorIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', size = 32, ...rest }, ref) => {
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
          d="M22.6666 15.7707V17.3333C22.6666 21.0147 19.6813 24 16 24C12.3186 24 9.33331 21.0147 9.33331 17.3333V14.988"
          fill="#CEE7EA"
        />
        <path
          d="M22.6666 15.7707V17.3333C22.6666 21.0147 19.6813 24 16 24C12.3186 24 9.33331 21.0147 9.33331 17.3333V14.988"
          stroke="#4A9CA6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M16 24C16 25.5621 16 30 16 30V24Z" fill="#CEE7EA" />
        <path
          d="M16 24C16 25.5621 16 30 16 30"
          stroke="#4A9CA6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.3333 8C23.5427 8 25.3333 9.79067 25.3333 12C25.3333 14.2093 23.5427 16 21.3333 16H12.7987H12.6667C9.35332 16 6.66666 13.3133 6.66666 10C6.66666 6.68667 9.35332 4 12.6667 4H12.7987H17.3333C19.5427 4 21.3333 5.79067 21.3333 8C21.3333 10.2093 19.5427 12 17.3333 12H13.4773H13.4373C12.3333 12 11.4373 11.104 11.4373 10C11.4373 8.896 12.3333 8 13.4373 8H13.4773H16.144"
          fill="#CEE7EA"
        />
        <path
          d="M21.3333 8C23.5427 8 25.3333 9.79067 25.3333 12C25.3333 14.2093 23.5427 16 21.3333 16H12.7987H12.6667C9.35332 16 6.66666 13.3133 6.66666 10C6.66666 6.68667 9.35332 4 12.6667 4H12.7987H17.3333C19.5427 4 21.3333 5.79067 21.3333 8ZM21.3333 8C21.3333 10.2093 19.5427 12 17.3333 12H13.4773H13.4373C12.3333 12 11.4373 11.104 11.4373 10C11.4373 8.896 12.3333 8 13.4373 8H13.4773H16.144"
          stroke="#4A9CA6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.5 26C19 26 16 27.5 16 30"
          stroke="#4A9CA6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
