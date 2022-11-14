import React from 'react';
import { IconProps } from '../types';

export const PageIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 10.6902H20"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 16H16"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 5.33333H21.3333C22.0406 5.33333 22.7189 5.61428 23.219 6.11438C23.719 6.61447 24 7.29275 24 7.99999V21.3333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 26.6667H25.3333C26.0406 26.6667 26.7189 26.3857 27.219 25.8856C27.719 25.3855 28 24.7072 28 24V22.6667C28 22.313 27.8595 21.9739 27.6095 21.7239C27.3594 21.4738 27.0203 21.3333 26.6667 21.3333H13.3333C12.9797 21.3333 12.6406 21.4738 12.3905 21.7239C12.1405 21.9739 12 22.313 12 22.6667V24.6667C12 25.1971 11.7893 25.7058 11.4142 26.0809C11.0391 26.4559 10.5304 26.6667 10 26.6667ZM10 26.6667C9.46957 26.6667 8.96086 26.4559 8.58579 26.0809C8.21071 25.7058 8 25.1971 8 24.6667V7.33333C8 6.8029 7.78929 6.29419 7.41421 5.91911C7.03914 5.54404 6.53043 5.33333 6 5.33333C5.46957 5.33333 4.96086 5.54404 4.58579 5.91911C4.21071 6.29419 4 6.8029 4 7.33333V10.6667C4 11.0203 4.14048 11.3594 4.39052 11.6095C4.64057 11.8595 4.97971 12 5.33333 12H8"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
