import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Slider, SliderThumb } from '../slider';

describe('Slider', () => {
  it('renders without crashing', () => {
    render(<Slider defaultValue={[0, 100]} max={200} />);
  });

  it('accepts left and right label', () => {
    const { getByText } = render(
      <Slider
        defaultValue={[20]}
        labels={{
          left: 'Min',
          right: <p>Max</p>
        }}
      />
    );

    expect(getByText('Min')).toBeInTheDocument();
    expect(getByText('Max')).toBeInTheDocument();
  });

  it('accepts two custom thumbs', () => {
    const { getAllByText } = render(
      <Slider
        defaultValue={[10, 20]}
        components={{
          Thumb: () => <SliderThumb>(0)</SliderThumb>
        }}
      />
    );

    expect(getAllByText('(0)')).toHaveLength(2);
  });
});
