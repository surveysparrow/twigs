import React from 'react';
import { IconProps } from '../types';

export const ImageIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M28 10.6667L18.6667 20"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.3333 26.6667L13.8856 15.2189C13.3855 14.7188 12.7072 14.4379 12 14.4379C11.2928 14.4379 10.6145 14.7188 10.1144 15.2189L4 21.3333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.3333 4H10.6667C6.98477 4 4 6.98477 4 10.6667V21.3333C4 25.0152 6.98477 28 10.6667 28H21.3333C25.0152 28 28 25.0152 28 21.3333V10.6667C28 6.98477 25.0152 4 21.3333 4Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.7333 10.6667C18.7333 10.6799 18.7294 10.6927 18.7221 10.7037C18.7147 10.7147 18.7043 10.7232 18.6922 10.7283C18.68 10.7333 18.6666 10.7346 18.6536 10.7321C18.6407 10.7295 18.6288 10.7231 18.6195 10.7138C18.6102 10.7045 18.6038 10.6926 18.6013 10.6797C18.5987 10.6667 18.6 10.6533 18.605 10.6412C18.6101 10.629 18.6186 10.6186 18.6296 10.6112C18.6406 10.6039 18.6535 10.6 18.6666 10.6"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.6667 10.6C18.6844 10.6 18.7013 10.607 18.7138 10.6195C18.7263 10.632 18.7334 10.649 18.7334 10.6667"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
