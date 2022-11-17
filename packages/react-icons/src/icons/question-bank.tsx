import React from 'react';
import { IconProps } from '../types';

export const QuestionBankIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22.6667 24H8"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 24V8C4 5.79067 5.79067 4 8 4H21.3333C22.8067 4 24 5.19333 24 6.66667V18.6667C24 19.4027 23.4027 20 22.6667 20H8C5.79067 20 4 21.7907 4 24ZM4 24C4 26.2093 5.79067 28 8 28H25.3333C26.8067 28 28 26.8067 28 25.3333V6.66667"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 10.0327C12.1382 9.43701 12.4801 8.90827 12.9667 8.53784C13.4533 8.16742 14.054 7.97857 14.665 8.00393C15.3428 7.96641 16.0078 8.19843 16.5151 8.64937C17.0224 9.10031 17.3308 9.73357 17.373 10.411C17.373 12.221 14.7854 12.8181 14.7854 14.0216"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.7854 16.8452C14.7701 16.8452 14.7552 16.8498 14.7425 16.8583C14.7297 16.8668 14.7198 16.8789 14.714 16.893C14.7081 16.9072 14.7066 16.9227 14.7096 16.9377C14.7125 16.9527 14.7199 16.9665 14.7307 16.9773C14.7416 16.9882 14.7553 16.9955 14.7703 16.9985C14.7854 17.0015 14.8009 17 14.8151 16.9941C14.8292 16.9883 14.8413 16.9783 14.8498 16.9656C14.8583 16.9529 14.8628 16.9379 14.8628 16.9226C14.8628 16.9021 14.8547 16.8824 14.8402 16.8679C14.8256 16.8534 14.806 16.8452 14.7854 16.8452"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
