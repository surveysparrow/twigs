import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import type { RenderResult } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Avatar, AvatarImage, AvatarFallback } from '../avatar';

const ROOT_TEST_ID = 'avatar-root';
const FALLBACK_TEXT = 'AB';
const IMAGE_ALT_TEXT = 'Fake Avatar';
const DELAY = 300;

describe('Avatar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div!);
    act(() => {
      root.render(
        <Avatar>
          <AvatarImage
            src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
            alt="Pedro Duarte"
          />
          <AvatarFallback delayMs={DELAY}>{FALLBACK_TEXT}</AvatarFallback>
        </Avatar>,
      );
      root.unmount();
    });
  });
});

describe('given an Avatar with fallback and a working image', () => {
  let rendered: RenderResult;
  let image: HTMLElement | null = null;

  beforeEach(() => {
    rendered = render(
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt={IMAGE_ALT_TEXT}
        />
        <AvatarFallback>{FALLBACK_TEXT}</AvatarFallback>
      </Avatar>,
    );
  });

  it('should render the fallback initially', () => {
    const fallback = rendered.queryByText(FALLBACK_TEXT);
    expect(fallback).toBeInTheDocument();
  });

  it('should not render the image initially', () => {
    image = rendered.queryByRole('img');
    expect(image).not.toBeInTheDocument();
  });
});

describe('given an Avatar with fallback and delayed render', () => {
  let rendered: RenderResult;
  let fallback: HTMLElement | null;

  beforeEach(() => {
    rendered = render(
      <Avatar data-testid={ROOT_TEST_ID}>
        <AvatarFallback delayMs={DELAY}>{FALLBACK_TEXT}</AvatarFallback>
      </Avatar>,
    );
  });

  it('should not render a fallback immediately', () => {
    fallback = rendered.queryByText(FALLBACK_TEXT);
    expect(fallback).not.toBeInTheDocument();
  });

  it('should render a fallback after the delay', async () => {
    fallback = rendered.queryByText(FALLBACK_TEXT);
    expect(fallback).not.toBeInTheDocument();
    fallback = await rendered.findByText(FALLBACK_TEXT);
    expect(fallback).toBeInTheDocument();
  });
});
