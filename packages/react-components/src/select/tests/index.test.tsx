import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Select } from '../index';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

describe('Select', () => {
  it('renders without crashing', () => {
    render(
      <Select options={options} />
    );
  });

  it('renders label when label prop is provided', () => {
    const label = 'Please select an option';
    render(<Select label={label} />);
    const labelNode = screen.getByText(label);
    expect(labelNode).toBeInTheDocument();
  });

  it('separator is present', () => {
    const { container } = render(
      <Select options={options} showSeparator />
    );
    const separator = container.querySelector('.twigs-select__indicator-separator');
    expect(separator).toBeVisible();
  });
});
