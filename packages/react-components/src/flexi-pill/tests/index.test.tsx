import React from 'react';
import 'jest';
import { render } from '@testing-library/react';
import { TickCircleFillIcon } from '@sparrowengg/twigs-react-icons';
import '@testing-library/jest-dom';
import { FlexiPill } from '../index';
import { config } from '../../stitches.config';

describe('FlexiPill', () => {
  it('renders without crashing', () => {
    render(<FlexiPill>FlexiPill</FlexiPill>);
  });

  it('renders button correctly', () => {
    const { getByTestId } = render(
      <FlexiPill>Primary FlexiPill</FlexiPill>
    );
    const button = getByTestId('button');

    expect(button).toHaveTextContent('Primary FlexiPill');
  });

  it('renders button with left icon', () => {
    const { getByTestId } = render(
      <FlexiPill leftIcon={<TickCircleFillIcon />}>
        Primary FlexiPill
      </FlexiPill>
    );
    const button = getByTestId('button');
    const iconContainer = button.querySelector('.button-icon-container');

    expect(iconContainer).toBeDefined();
  });

  it('renders button with loader', () => {
    const { getByTestId, rerender } = render(
      <FlexiPill leftIcon={<TickCircleFillIcon />}>
        Primary FlexiPill
      </FlexiPill>
    );
    const button = getByTestId('button');

    expect(
      button.querySelector(`.${config.prefix}-button__icon-container`)
    ).not.toBe(null);

    expect(button.querySelector(`.${config.prefix}-button__loader`)).toBe(null);

    rerender(
      <FlexiPill leftIcon={<TickCircleFillIcon />} loading>
        Primary FlexiPill
      </FlexiPill>
    );

    expect(button.querySelector(`.${config.prefix}-button__loader`)).not.toBe(
      null
    );
  });
});
