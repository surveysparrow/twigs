import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import type { RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';
import { Avatar } from '../avatar';
import { AvatarGroup } from '../avatar-group';
import { AvatarBadge } from '../avatar-badge';

const getFallbackInitials = (name: string): string => {
  const [firstName, lastName] = name.split(' ');
  return `${firstName ? firstName.charAt(0).toUpperCase() : ''}${
    lastName ? lastName.charAt(0).toUpperCase() : ''
  }`;
};

const FALLBACK_TEXT = 'Adam Smith';
const FALLBACK_INITIALS = getFallbackInitials(FALLBACK_TEXT);
const IMAGE_ALT_TEXT = 'Fake Avatar';
const DELAY = 300;

describe('Avatar', () => {
  it('renders without crashing', () => {
    render(
      <Avatar
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
        name="Pedro Duarte"
        fallbackDelay={DELAY}
      />
    );
  });
});

describe('given an Avatar with fallback and a working image', () => {
  let rendered: RenderResult;
  let image: HTMLElement | null = null;

  beforeEach(() => {
    rendered = render(
      <Avatar
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        name={IMAGE_ALT_TEXT}
      />
    );
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
      <Avatar
        src="https://invalid-image.png"
        name={FALLBACK_TEXT}
        fallbackDelay={DELAY}
      />
    );
  });

  it('should not render a fallback immediately', () => {
    fallback = rendered.queryByText(FALLBACK_TEXT);
    expect(fallback).not.toBeInTheDocument();
  });

  it('should render a fallback after the delay', async () => {
    fallback = rendered.queryByText(FALLBACK_INITIALS);
    expect(fallback).not.toBeInTheDocument();
    fallback = await rendered.findByText(FALLBACK_INITIALS);
    expect(fallback).toBeInTheDocument();
  });
});

describe('AvatarGroup', () => {
  it('renders without crashing', () => {
    render(
      <AvatarGroup>
        <Avatar
          src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
          name="Pedro Duarte"
          fallbackDelay={DELAY}
          key="my-avatar-1"
        />
        <Avatar
          src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
          name="Pedro Duarte"
          fallbackDelay={DELAY}
          key="my-avatar-2"
        />
      </AvatarGroup>
    );
  });

  it('renders properly when only one Avatar is passed', () => {
    render(
      <AvatarGroup>
        <Avatar
          src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
          name="Pedro Duarte"
          fallbackDelay={DELAY}
          key="my-avatar-1"
        />
      </AvatarGroup>
    );
  });
});

describe('Avatar with Badge', () => {
  it('renders without crashing', () => {
    render(
      <Avatar
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
        name="Pedro Duarte"
        fallbackDelay={DELAY}
      >
        <AvatarBadge />
      </Avatar>
    );
  });
});
