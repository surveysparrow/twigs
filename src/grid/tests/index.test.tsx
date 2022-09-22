import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { createRoot } from 'react-dom/client';
import renderer, { act } from 'react-test-renderer';
import { Grid } from '../index';

describe('Grid', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div!);
    act(() => {
      root.render(<Grid templateColumns="1fr 1fr 1fr" />);
      root.unmount();
    });
  });

  it('renders with width prop', () => {
    const div = document.createElement('div');
    const root = createRoot(div!);
    act(() => {
      root.render(<Grid width={350} templateColumns="1fr 1fr 1fr" />);
      root.unmount();
    });
  });

  it('matches snapshot: renders with templatearea props', () => {
    const tree = renderer.create(
      <Grid
        templateAreas={`"navbar navbar"
                        "sidebar main"`}
      />,
    );
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot: renders with templatearea and templateColumns props', () => {
    const tree = renderer.create(<Grid
      templateAreas={`"navbar navbar"
                        "sidebar main"`}
      templateColumns="342px 1fr"
    />);
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot: renders with templatearea and templateRows props', () => {
    const tree = renderer.create(<Grid
      templateAreas={`"navbar navbar"
        "sidebar main"`}
      templateRows="64px 1fr"
    />);
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot: renders with templatearea, templateRows and templateColumns props', () => {
    const tree = renderer.create(<Grid
      templateAreas={`"navbar navbar"
          "sidebar main"`}
      templateRows="64px 1fr"
      templateColumns="342px 1fr"
    />);
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot: renders with templatearea, templateColumns props and repeat props', () => {
    const tree = renderer.create(<Grid
      templateAreas={`"navbar navbar"
                        "sidebar main"`}
      templateColumns="342px 1fr"
      repeat="fit"
    />);
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot: renders with templatearea, templateRows, templateColumns, gap and custom styles', () => {
    const tree = renderer.create(
      <Grid
        templateAreas={`"navbar navbar"
                         "sidebar main"`}
        templateRows="64px 1fr"
        templateColumns="342px 1fr"
        gap={[0, 0]}
        css={{
          height: '100vh',
          width: '100vw',
        }}
      />,
    );
    expect(tree).toMatchSnapshot();
  });
});
