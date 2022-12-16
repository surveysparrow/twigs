import React from 'react';
import { IconProps } from '../types';

export const OpinionScaleColorIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 5.96613C3.0335 5.96613 2.25 6.74963 2.25 7.71613V17.7161C2.25 18.6826 3.0335 19.4661 4 19.4661H28C28.9665 19.4661 29.75 18.6826 29.75 17.7161V7.71613C29.75 6.74963 28.9665 5.96613 28 5.96613H4Z"
          fill="#CEE7EA"
          stroke="#4A9CA6"
          strokeWidth="1.5"
        />
        <path
          d="M15.6211 24.0848L12.7114 27.4641C12.4323 27.7882 12.6626 28.2904 13.0903 28.2904H18.9097C19.3374 28.2904 19.5677 27.7882 19.2886 27.4641L16.3789 24.0848C16.1794 23.8531 15.8206 23.8531 15.6211 24.0848Z"
          fill="#CEE7EA"
          stroke="#4A9CA6"
          strokeWidth="1.5"
        />
        <path
          d="M9 19L9 6"
          stroke="#4A9CA6"
          strokeWidth="0.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23 19L23 6"
          stroke="#4A9CA6"
          strokeWidth="0.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 19L16 6"
          stroke="#4A9CA6"
          strokeWidth="0.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
