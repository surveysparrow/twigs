import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Checkbox } from '../index';

describe('Checkbox', () => {
  it('renders without crashing', () => {
    render(<Checkbox onChange={() => { }} required={false} disabled={false} />);
  });
});
