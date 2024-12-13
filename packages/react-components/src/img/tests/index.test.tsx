import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Img } from '../img';

describe('Img', () => {
  it('renders without crashing', () => {
    render(<Img alt="" src="https://via.placeholder.com/150" />);
  });
});
