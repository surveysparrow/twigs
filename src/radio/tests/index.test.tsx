import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { createRoot } from 'react-dom/client';
import { act } from 'react-test-renderer';
import { RadioGroup, Radio, RadioIndicator } from '../index';

describe('Radio', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div!);
    act(() => {
      root.render(
        <RadioGroup defaultValue="default" aria-label="View density">
          <Radio disabled value="default" id="r1">
            <RadioIndicator />
          </Radio>
          <Radio value="comfortable" id="r2">
            <RadioIndicator />
          </Radio>
          <Radio value="compact" id="r3">
            <RadioIndicator />
          </Radio>
        </RadioGroup>,
      );
      root.unmount();
    });
  });
});
