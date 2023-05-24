import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FormInput } from '../index';

describe('FormInput', () => {
  it('renders without crashing', () => {
    render(<FormInput />);
  });

  it('prints error message', () => {
    const error = 'Please enter invalid email';
    render(<FormInput error={error} />);
    const errorNode = screen.getByText(error);
    expect(errorNode).toBeInTheDocument();
  });

  it('prints input label', () => {
    const label = 'Enter your Email';
    render(<FormInput label={label} />);
    const labelNode = screen.getByText(label);
    expect(labelNode).toBeInTheDocument();
  });

  it('prints character count', () => {
    render(<FormInput maxLength={100} showCount defaultValue="Input" />);
    const charNode = screen.getByTestId('input-char-count');
    expect(charNode).toBeInTheDocument();
    const charText = screen.getByText('5/100');
    expect(charText).toBeInTheDocument();
  });
});
