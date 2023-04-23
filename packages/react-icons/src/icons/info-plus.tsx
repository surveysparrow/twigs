import React from 'react';
import { IconProps } from '../types';

export const InfoPlusIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', size = 32, ...rest }, ref) => {
    return (
      <svg
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <path d="M14.4861 3.28397C13.8474 3.13903 13.1826 3.0625 12.5 3.0625C7.56395 3.0625 3.5625 7.06395 3.5625 12C3.5625 16.936 7.56395 20.9375 12.5 20.9375C17.436 20.9375 21.4375 16.936 21.4375 12C21.4375 11.2759 21.3514 10.5719 21.1888 9.89767" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.6875 15.25H13.3125" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.5 15.25V11.1875H11.6875" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx="12.5" cy="8.75" rx="0.8125" ry="0.8125" fill={color} />
        <path d="M19.75 2.25V6.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.75 4.25H21.75" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
);
