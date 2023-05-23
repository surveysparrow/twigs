import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../hover-card';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()
}));

describe('Hover card', () => {
  it('renders with arrow', () => {
    render(
      <HoverCard defaultOpen>
        <HoverCardTrigger>
          Trigger
        </HoverCardTrigger>
        <HoverCardContent>
          <>
            Hover card  content
          </>
        </HoverCardContent>
      </HoverCard>
    );
    const arrow = screen.getByTestId('hover-card-arrow');
    expect(arrow).toBeInTheDocument();
  });

  it('renders without arrow', () => {
    render(
      <HoverCard defaultOpen>
        <HoverCardTrigger>
          Trigger
        </HoverCardTrigger>
        <HoverCardContent arrow={false}>
          <>
            Hover card  content
          </>
        </HoverCardContent>
      </HoverCard>
    );
    const arrow = screen.queryByTestId('hover-card-arrow');
    expect(arrow).toBeNull();
  });
});
