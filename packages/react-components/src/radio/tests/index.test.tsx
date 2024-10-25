import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { RadioGroup, Radio } from '../index';

describe('Radio', () => {
  it('renders without crashing', () => {
    render(
      <RadioGroup
        defaultValue="default"
        aria-label="View density"
        onChange={() => {}}
      >
        <Radio disabled value="default" id="r1" />
        <Radio value="comfortable" id="r2" />
        <Radio value="compact" id="r3" />
      </RadioGroup>
    );
  });
});
