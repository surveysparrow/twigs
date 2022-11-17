import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Switch, SwitchThumb } from '../index';

describe('Switch', () => {
  it('renders without crashing', () => {
    render(
      <Switch defaultChecked id="s1">
        <SwitchThumb />
      </Switch>
    );
  });
});
