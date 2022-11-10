import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { RadioGroup, Radio, RadioIndicator } from '../index';

describe('Radio', () => {
  it('renders without crashing', () => {
    render(
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
      </RadioGroup>
    );
  });
});
