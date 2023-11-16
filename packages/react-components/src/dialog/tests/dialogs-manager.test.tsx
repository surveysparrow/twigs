import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { DialogsManager, dialogs } from '../dialogs-manager';

describe('Checkbox', () => {
  it('renders without crashing', () => {
    render(
      <DialogsManager
        customDialogs={{
          example: () => <div>Modal</div>
        }}
      />
    );
  });

  it('shows only one modal with multiple managers', () => {
    const { getByText, getAllByRole } = render(
      <div>
        <button
          type="button"
          onClick={() => {
            dialogs.open('alert', {
              title: 'Alert',
              content: 'Content'
            });
          }}
        >
          Trigger
        </button>
        <DialogsManager />
        <DialogsManager />
        <DialogsManager />
      </div>
    );
    fireEvent.click(getByText('Trigger'));
    const dialogElements = getAllByRole('alertdialog');
    expect(dialogElements.length).toBe(1);
  });

  it('opens alert dialog', () => {
    const { getByText, getByRole } = render(
      <div>
        <button
          type="button"
          onClick={() => {
            dialogs.open('alert', {
              title: 'Alert',
              content: 'Content'
            });
          }}
        >
          Trigger
        </button>
        <DialogsManager />
      </div>
    );
    fireEvent.click(getByText('Trigger'));
    const dialogElements = getByRole('alertdialog');
    expect(dialogElements).toBeInTheDocument();
    expect(getByText('Alert')).toBeInTheDocument();
  });
});
