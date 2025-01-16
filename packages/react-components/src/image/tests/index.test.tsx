import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Image } from '../image';

describe('Image', () => {
  it('renders without crashing', () => {
    render(<Image alt="" src="https://via.placeholder.com/150" />);
  });
});
