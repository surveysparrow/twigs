import React from 'react';
import { styled } from '../stitches.config';

const StyledSeparator = styled('div', {
  padding: '0 $8'
});

const Arrow = () => (
  <svg
    width="27"
    height="12"
    viewBox="0 0 27 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      // eslint-disable-next-line max-len
      d="M21.2574 1.08686L26.0303 5.85983C26.3232 6.15272 26.3232 6.6276 26.0303 6.92049L21.2574 11.6935C20.9645 11.9864 20.4896 11.9864 20.1967 11.6935C19.9038 11.4006 19.9038 10.9257 20.1967 10.6328L23.6893 7.14016H1.5C1.08579 7.14016 0.75 6.80437 0.75 6.39016C0.75 5.97595 1.08579 5.64016 1.5 5.64016H23.6893L20.1967 2.14752C19.9038 1.85462 19.9038 1.37975 20.1967 1.08686C20.4896 0.793964 20.9645 0.793964 21.2574 1.08686Z"
      fill="black"
      fillOpacity="0.2"
    />
  </svg>
);

const Separator = () => (<StyledSeparator><Arrow /></StyledSeparator>);

export { Separator };
