import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { createRoot } from 'react-dom/client';
import { act } from 'react-test-renderer';
import { Chip } from '../index';

describe('Chip', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div!);
    act(() => {
      root.render(<Chip color="info" size="md">Chip Content</Chip>);
      root.unmount();
    });
  });
});
