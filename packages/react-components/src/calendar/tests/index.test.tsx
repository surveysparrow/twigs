import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Calendar, CalendarRange } from '../index';

test('Calendar renders without crashing', () => {
  render(
    <Calendar />
  );
});

test('CalendarRange renders without crashing', () => {
  const tree = render(
    <CalendarRange />
  );
  expect(tree).toMatchSnapshot();
});
