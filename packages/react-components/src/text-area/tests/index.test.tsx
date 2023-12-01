import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { TextArea } from '../index';

describe('TextArea', () => {
  it('renders without crashing', () => {
    render(<TextArea />);
  });
});
