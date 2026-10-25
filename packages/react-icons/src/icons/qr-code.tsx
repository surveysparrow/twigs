import React from 'react';
import { IconProps } from '../types';

export const QrCodeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_621)">
          <path
            d="M21.3803 21.2855C21.4063 21.3116 21.4063 21.3538 21.3803 21.3798C21.3543 21.4059 21.3121 21.4059 21.286 21.3798C21.26 21.3538 21.26 21.3116 21.286 21.2855C21.3121 21.2595 21.3543 21.2595 21.3803 21.2855"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18.7136 18.6195C18.7397 18.6456 18.7397 18.6878 18.7136 18.7138C18.6876 18.7398 18.6454 18.7398 18.6194 18.7138C18.5933 18.6878 18.5933 18.6456 18.6194 18.6195C18.6454 18.5935 18.6876 18.5935 18.7136 18.6195"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18.7136 23.9535C18.7397 23.9795 18.7397 24.0218 18.7136 24.0478C18.6876 24.0738 18.6454 24.0738 18.6194 24.0478C18.5933 24.0218 18.5933 23.9795 18.6194 23.9535C18.6454 23.9275 18.6876 23.9275 18.7136 23.9535"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.047 23.9535C24.073 23.9795 24.073 24.0218 24.047 24.0478C24.0209 24.0738 23.9787 24.0738 23.9527 24.0478C23.9267 24.0218 23.9267 23.9795 23.9527 23.9535C23.9787 23.9275 24.0209 23.9275 24.047 23.9535"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.047 18.6195C24.073 18.6456 24.073 18.6878 24.047 18.7138C24.0209 18.7398 23.9787 18.7398 23.9527 18.7138C23.9267 18.6878 23.9267 18.6456 23.9527 18.6195C23.9787 18.5935 24.0209 18.5935 24.047 18.6195"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M28.6665 10.638V6.00065C28.6665 4.52732 27.4732 3.33398 25.9999 3.33398H21.3625M10.6373 3.33398H5.99992C4.52659 3.33398 3.33325 4.52732 3.33325 6.00065V10.638M3.33325 21.3633V26.0006C3.33325 27.4739 4.52659 28.6673 5.99992 28.6673H10.6373M21.3625 28.6673H25.9999C27.4732 28.6673 28.6665 27.4739 28.6665 26.0006V21.3633M7.99992 8.00065H13.3333V13.334H7.99992V8.00065ZM7.99992 18.6673H13.3333V24.0007H7.99992V18.6673ZM23.9999 13.334H18.6666V8.00065H23.9999V13.334Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_621">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
