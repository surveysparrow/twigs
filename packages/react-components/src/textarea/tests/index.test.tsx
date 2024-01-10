import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Textarea } from '../index';

describe('TextArea', () => {
  it('renders without crashing', () => {
    render(<Textarea />);
  });

  it('prints error message', () => {
    const error = 'Please enter invalid email';
    render(<Textarea error={error} />);
    const errorNode = screen.getByText(error);
    expect(errorNode).toBeInTheDocument();
  });

  it('prints textarea label', () => {
    const label = 'Enter your Email';
    render(<Textarea label={label} />);
    const labelNode = screen.getByText(label);
    expect(labelNode).toBeInTheDocument();
  });

  it('prints character count', () => {
    render(<Textarea maxLength={100} showCount defaultValue="Textarea" />);
    const charNode = screen.getByTestId('textarea-char-count');
    expect(charNode).toBeInTheDocument();
    const charText = screen.getByText('8/100');
    expect(charText).toBeInTheDocument();
  });
});
