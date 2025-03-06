import React from 'react';
import { IconProps } from '../types';

export const GiftWithHeartIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M26.6667 8H5.33333C4.59695 8 4 8.59695 4 9.33333V10.6667C4 11.403 4.59695 12 5.33333 12H26.6667C27.403 12 28 11.403 28 10.6667V9.33333C28 8.59695 27.403 8 26.6667 8Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M26.6666 12V25.3333C26.6666 26.0406 26.3857 26.7189 25.8856 27.219C25.3855 27.719 24.7072 28 24 28H7.99998C7.29274 28 6.61446 27.719 6.11436 27.219C5.61426 26.7189 5.33331 26.0406 5.33331 25.3333V12"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M13.3334 2.66669C14.0406 2.66669 14.7189 2.94764 15.219 3.44774C15.7191 3.94783 16 4.62611 16 5.33335V8.00002H13.3334C12.6261 8.00002 11.9478 7.71907 11.4477 7.21897C10.9476 6.71888 10.6667 6.0406 10.6667 5.33335C10.6667 4.62611 10.9476 3.94783 11.4477 3.44774C11.9478 2.94764 12.6261 2.66669 13.3334 2.66669Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M18.6667 2.66669C19.3739 2.66669 20.0522 2.94764 20.5523 3.44774C21.0524 3.94783 21.3333 4.62611 21.3333 5.33335C21.3333 6.0406 21.0524 6.71888 20.5523 7.21897C20.0522 7.71907 19.3739 8.00002 18.6667 8.00002H16V5.33335C16 4.62611 16.281 3.94783 16.781 3.44774C17.2811 2.94764 17.9594 2.66669 18.6667 2.66669Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M15.736 16.7644L16 17.0324L16.264 16.7643C16.5023 16.5222 16.7863 16.33 17.0996 16.1987C17.4129 16.0675 17.7492 15.9999 18.0889 15.9999C18.4286 15.9999 18.7649 16.0675 19.0782 16.1987C19.3915 16.33 19.6755 16.5222 19.9138 16.7643C20.3965 17.2603 20.6666 17.9252 20.6666 18.6173C20.6666 19.3095 20.3965 19.9743 19.9138 20.4704L17.8626 22.5532C17.6194 22.8003 17.3295 22.9965 17.0097 23.1304C16.6899 23.2644 16.3467 23.3334 16 23.3334C15.6533 23.3334 15.3101 23.2644 14.9903 23.1304C14.6705 22.9965 14.3806 22.8003 14.1374 22.5532L12.0861 20.4704C11.6034 19.9744 11.3333 19.3096 11.3333 18.6174C11.3333 17.9253 11.6034 17.2604 12.0861 16.7644C12.3244 16.5223 12.6085 16.33 12.9218 16.1988C13.2351 16.0676 13.5714 16 13.911 16C14.2507 16 14.587 16.0676 14.9003 16.1988C15.2136 16.33 15.4977 16.5223 15.736 16.7644Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }
);
