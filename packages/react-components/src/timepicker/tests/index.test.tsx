import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { TimePicker } from '../index';

test('renders without crashing', () => {
  render(
    <TimePicker label="What time works for you?" />
  );
});
