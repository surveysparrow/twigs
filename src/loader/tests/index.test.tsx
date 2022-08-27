import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-test-renderer';
import { DotLoader } from '../index';
import 'jest';
import '@testing-library/jest-dom';

describe('Box', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div!);
    act(() => {
      root.render(<DotLoader />);
      root.unmount();
    });
  });
});
