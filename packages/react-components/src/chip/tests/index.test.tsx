import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { Chip } from '../index';

describe('Chip', () => {
  it('renders without crashing', () => {
    render(
      <Chip color="default" size="md">
        Chip Content
      </Chip>
    );
  });
});

it('renders close button based on prop', () => {
  const { getByTestId } = render(
    <Chip color="success" size="md" closable>
      Chip with close button
    </Chip>
  );
  const button = getByTestId('close-button');
  const chip = getByTestId('chip');
  expect(chip).toContainElement(button);
});

it('renders left and right elements', () => {
  const { getByTestId } = render(
    <Chip
      color="success"
      size="md"
      closable
      leftElement={<span>Left Element</span>}
      rightElement={<span>Right Element</span>}
    >
      Chip with close button
    </Chip>
  );
  const leftElement = getByTestId('left-element');
  const rightElement = getByTestId('right-element');
  const chip = getByTestId('chip');
  expect(chip).toContainElement(leftElement);
  expect(chip).toContainElement(rightElement);
  expect(leftElement).toHaveTextContent('Left Element');
  expect(rightElement).toHaveTextContent('Right Element');
});

it('changes active for uncontrolled selectable chip', () => {
  const { getByTestId } = render(
    <Chip color="success" size="md" selectable>
      Chip
    </Chip>
  );
  const chip = getByTestId('chip');
  expect(chip).not.toHaveClass('active');
  fireEvent.click(chip);
  expect(chip).toHaveClass('active');
});

const ControlledChip = () => {
  const [active, setActive] = React.useState(false);

  return (
    <Chip
      selectable
      active={active}
      onActiveStateChange={(nextActive) => setActive(nextActive)}
    >
      Chip
    </Chip>
  );
};

it('changes active for controlled selectable chip', () => {
  const { getByTestId } = render(<ControlledChip />);
  const chip = getByTestId('chip');
  expect(chip).not.toHaveClass('active');
  fireEvent.click(chip);
  expect(chip).toHaveClass('active');
  fireEvent.click(chip);
  expect(chip).not.toHaveClass('active');
});
