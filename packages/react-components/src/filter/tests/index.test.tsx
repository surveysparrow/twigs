import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import 'jest';
import React from 'react';
import { Example } from '../stories/filter.stories';

describe('Cascader', () => {
  it('should render correctly', () => {
    render(<Example />);
  });
});
