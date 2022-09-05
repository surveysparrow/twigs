import React from 'react';
import { createRoot } from 'react-dom/client';
import 'jest';
import renderer, { act } from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../index';

const RightArrow = () => (
  <svg width="12" height="12" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 9L5 5L1 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div!);
    act(() => {
      root.render(<Button>Button</Button>);
      root.unmount();
    });
  });

  it('renders button correctly', () => {
    const { getByTestId } = render(
      <Button variant="primary">Primary Button</Button>,
    );
    const button = getByTestId('button');

    expect(button).toHaveTextContent('Primary Button');
  });

  it('matches snapshot: primary with icon on left', () => {
    const tree = renderer.create(
      <Button
        variant="primary"
        iconLeft={<RightArrow />}
      >
        Primary Button
      </Button>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot: secondary with icon on right', () => {
    const tree = renderer.create(
      <Button
        variant="secondary"
        iconRight={<RightArrow />}
      >
        Secondary Button
      </Button>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot: text with icon on both sides', () => {
    const tree = renderer.create(
      <Button
        variant="text"
        iconRight={<RightArrow />}
        iconLeft={<RightArrow />}
      >
        Text Button
      </Button>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot: text - disabled and loading', () => {
    const tree = renderer.create(
      <Button
        variant="text"
        disabled
        loading
      >
        Text only Button
      </Button>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot: text and custom styles', () => {
    const tree = renderer.create(
      <Button
        variant="text"
        css={{
          padding: '10px',
        }}
      >
        Link text
      </Button>,
    );
    expect(tree).toMatchSnapshot();
  });
});
