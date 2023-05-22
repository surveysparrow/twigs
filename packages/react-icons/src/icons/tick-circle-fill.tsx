import React from 'react';
import { IconProps } from '../types';

export const TickCircleFillIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', size = 32, ...rest }, ref) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...rest}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 16C4 22.6265 9.37347 28 16 28C22.6265 28 28 22.6265 28 16C28 9.37347 22.6265 4 16 4C9.37347 4 4 9.37347 4 16ZM22.0073 14.3412C22.5429 13.8056 22.5429 12.9373 22.0073 12.4017C21.4717 11.8661 20.6034 11.8661 20.0678 12.4017L14.3709 18.0986L11.3415 15.0673C10.8061 14.5315 9.93773 14.5312 9.40199 15.0666C8.86624 15.602 8.86597 16.4704 9.40138 17.0061L13.4005 21.0078C13.6577 21.2651 14.0066 21.4097 14.3704 21.4098C14.7342 21.4099 15.0831 21.2654 15.3403 21.0081L22.0073 14.3412Z"
          fill={color}
        />
      </svg>
    );
  }
);
