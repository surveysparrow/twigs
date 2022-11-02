import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Input } from '../index';

const RightArrow = () => (
  <svg width="12" height="12" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 9L5 5L1 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

describe('Input', () => {
  it('renders without crashing', () => {
    render(<Input />);
  });

  it('matches snapshot: primary with icon on left', () => {
    const tree = renderer.create(
      <Input
        iconLeft={<RightArrow />}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot: secondary with icon on right', () => {
    const tree = renderer.create(
      <Input
        iconRight={<RightArrow />}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot: text with icon on both sides', () => {
    const tree = renderer.create(
      <Input
        iconRight={<RightArrow />}
        iconLeft={<RightArrow />}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
