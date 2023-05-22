import React from 'react';
import 'jest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../index';

describe('Button', () => {
  it('renders without crashing', () => {
    render(<Button>Button</Button>);
  });

  it('renders button correctly', () => {
    const { getByTestId } = render(
      <Button color="primary">Primary Button</Button>
    );
    const button = getByTestId('button');

    expect(button).toHaveTextContent('Primary Button');
  });
});
