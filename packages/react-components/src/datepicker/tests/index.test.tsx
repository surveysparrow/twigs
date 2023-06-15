import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { DatePicker } from '../index';

test('DatePicker renders without crashing', () => {
  render(
    <DatePicker label="Choose a nice day" />
  );
});
