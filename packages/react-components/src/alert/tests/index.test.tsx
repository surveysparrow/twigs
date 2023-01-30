import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Alert, AlertDescription } from '../index';

describe('Alert', () => {
  it('renders without crashing', () => {
    render(<Alert status={'success'}><AlertDescription> Alert message </AlertDescription></Alert>);
  });
});