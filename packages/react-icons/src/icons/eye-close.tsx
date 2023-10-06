import React from 'react';
import { IconProps } from '../types';

export const EyeCloseIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        ref={ref}
      >
        <path d="M16 25.3333C14.8773 25.3333 13.7533 25.096 12.6613 24.6733" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M27.8427 16.624C25.32 21.2894 20.66 25.3334 16 25.3334" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25.4387 11.8947C26.36 12.9734 27.1787 14.1494 27.8427 15.3774C28.052 15.7654 28.052 16.236 27.8427 16.624" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.66663 25.3334L25.3333 6.66669" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.0307 18.9694C11.3907 17.3294 11.3907 14.6694 13.0307 13.0294C14.6707 11.3894 17.3307 11.3894 18.9707 13.0294" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22.7253 9.27469C20.6626 7.67869 18.3306 6.66669 16 6.66669C11.34 6.66669 6.67997 10.7107 4.15731 15.3774C3.94797 15.7654 3.94797 16.236 4.15731 16.624C5.41864 18.956 7.21331 21.132 9.27464 22.7267" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    );
  }
);
