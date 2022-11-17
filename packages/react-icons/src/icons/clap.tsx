import React from 'react';
import { IconProps } from '../types';

export const ClapIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M23.1867 2.34667L21.7467 3.78667"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.08 2.34667L12.4134 3.68001"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.1333 1.33334V3.21334"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.4427 30.06C22.2547 30.3987 25.1867 29.4973 27.344 27.3387V27.3387C29.6027 25.08 30.5827 21.8413 29.9574 18.7093L28.3014 10.432C28.108 9.464 27.2574 8.76667 26.2694 8.76667V8.76667C25.1254 8.76667 24.1974 9.69467 24.1974 10.8387V12.816"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.4933 10.7187L18.0693 8.29467C17.288 7.51334 16.0213 7.51334 15.2413 8.29467V8.29467C14.46 9.076 14.46 10.3427 15.2413 11.1227"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.04269 10.5827C8.26136 9.80134 8.26136 8.53467 9.04269 7.75467V7.75467C9.82402 6.97334 11.0907 6.97334 11.8707 7.75467L17.056 12.94L19.884 15.768V12.1827C19.884 11.0387 20.812 10.1107 21.956 10.1107V10.1107C22.944 10.1107 23.7947 10.808 23.988 11.776L25.48 19.2387C26.1067 22.3707 25.1267 25.6093 22.8667 27.868V27.868C19.136 31.5987 13.0867 31.5987 9.35602 27.868L5.74269 24.2533L2.44269 20.9533C1.66136 20.172 1.66136 18.9053 2.44269 18.1253V18.1253C3.22402 17.344 4.49069 17.344 5.27069 18.1253"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.51466 22.368L3.38666 16.24C2.60533 15.4587 2.60533 14.192 3.38666 13.412V13.412C4.16799 12.6307 5.43466 12.6307 6.21466 13.412"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.3427 19.5387L4.32935 11.5253C3.54801 10.744 3.54801 9.47734 4.32935 8.69734V8.69734C5.11068 7.916 6.37735 7.916 7.15735 8.69734L15.1707 16.7107"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
