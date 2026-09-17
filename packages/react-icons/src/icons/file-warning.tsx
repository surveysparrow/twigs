import React from 'react';
import { IconProps } from '../types';

export const FileWarningIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_541)">
          <path
            d="M26.6667 10.6667H21.3333C20.9797 10.6667 20.6406 10.5262 20.3905 10.2761C20.1405 10.0261 20 9.68696 20 9.33333V4"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M8 10.6667V6.66667C8 5.95942 8.28095 5.28115 8.78105 4.78105C9.28115 4.28095 9.95942 4 10.6667 4H20.2293C20.9365 4.00015 21.6147 4.2812 22.1147 4.78133L25.8853 8.552C26.3855 9.05198 26.6665 9.73015 26.6667 10.4373V25.3333C26.6667 26.0406 26.3857 26.7189 25.8856 27.219C25.3855 27.719 24.7072 28 24 28H10.6667C9.95942 28 9.28115 27.719 8.78105 27.219C8.28095 26.7189 8 26.0406 8 25.3333V24"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.6667 17.0667V14.472"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M6.836 23.132L4.868 21.164C4.59244 20.8887 4.37392 20.5617 4.22497 20.2018C4.07602 19.8419 3.99957 19.4562 4 19.0667V15.6C3.99992 15.2109 4.07655 14.8257 4.22548 14.4663C4.37442 14.1068 4.59276 13.7803 4.868 13.5053L6.836 11.536C7.11105 11.26 7.43794 11.0411 7.79788 10.8919C8.15782 10.7428 8.5437 10.6662 8.93334 10.6667H12.4C12.7891 10.6666 13.1743 10.7432 13.5337 10.8922C13.8932 11.0411 14.2197 11.2594 14.4947 11.5347L16.464 13.504C16.7398 13.7789 16.9585 14.1056 17.1077 14.4653C17.2569 14.825 17.3336 15.2106 17.3333 15.6V19.0667C17.3334 19.4557 17.2568 19.841 17.1079 20.2004C16.9589 20.5598 16.7406 20.8864 16.4653 21.1613L14.496 23.1307C14.2212 23.4065 13.8945 23.6254 13.5348 23.7746C13.1751 23.9238 12.7894 24.0004 12.4 24H8.93334C8.54383 24.0004 8.15806 23.924 7.79816 23.775C7.43826 23.6261 7.11129 23.4076 6.836 23.132Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.6667 19.936C10.6313 19.936 10.5974 19.95 10.5724 19.9751C10.5474 20.0001 10.5333 20.034 10.5333 20.0693C10.5333 20.0957 10.5412 20.1215 10.5558 20.1434C10.5705 20.1653 10.5913 20.1824 10.6156 20.1925C10.64 20.2026 10.6668 20.2052 10.6927 20.2001C10.7185 20.195 10.7423 20.1823 10.761 20.1636C10.7796 20.145 10.7923 20.1212 10.7974 20.0953C10.8026 20.0695 10.7999 20.0427 10.7899 20.0183C10.7798 19.9939 10.7627 19.9731 10.7407 19.9585C10.7188 19.9438 10.693 19.936 10.6667 19.936Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_541">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
