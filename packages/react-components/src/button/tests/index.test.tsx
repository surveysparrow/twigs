import React from 'react';
import 'jest';
import { render } from '@testing-library/react';
import { TickCircleFillIcon } from '@sparrowengg/twigs-react-icons';
import '@testing-library/jest-dom';
import { Button } from '../index';
import { config } from '../../stitches.config';

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

  it('renders button with left icon', () => {
    const { getByTestId } = render(
      <Button color="primary" leftIcon={<TickCircleFillIcon />}>
        Primary Button
      </Button>
    );
    const button = getByTestId('button');
    const iconContainer = button.querySelector('.button-icon-container');

    expect(iconContainer).toBeDefined();
  });

  it('renders button with loader', () => {
    const { getByTestId, rerender } = render(
      <Button color="primary" leftIcon={<TickCircleFillIcon />}>
        Primary Button
      </Button>
    );
    const button = getByTestId('button');

    expect(
      button.querySelector(`.${config.prefix}-button__icon-container`)
    ).not.toBe(null);

    expect(
      button.querySelector(`.${config.prefix}-button__loader`)
    ).toBe(null);

    rerender(
      <Button color="primary" leftIcon={<TickCircleFillIcon />} loading>
        Primary Button
      </Button>
    );

    expect(
      button.querySelector(`.${config.prefix}-button__loader`)
    ).not.toBe(null);
  });
});
