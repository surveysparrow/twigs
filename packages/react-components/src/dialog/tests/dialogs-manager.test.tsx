import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';
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
    const dialogElements = getAllByRole('alertdialog', {
      hidden: true
    });
    expect(dialogElements).toHaveLength(1);
  });

  it('opens alert dialog', () => {
    const { getByText, getByRole } = render(
      <div>
        <button
          type="button"
          onClick={() => {
            dialogs.open('alert', {
              title: 'Alert',
              content: 'Content',
              labels: {
                action: 'Okay'
              }
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
    expect(getByText('Content')).toBeInTheDocument();
    expect(getByText('Okay')).toBeInTheDocument();
  });

  it('opens confirm dialog', () => {
    const { getByText, getByRole } = render(
      <div>
        <button
          type="button"
          onClick={() => {
            dialogs.open('confirm', {
              title: 'Title',
              content: 'Content',
              labels: {
                confirm: 'Okay',
                cancel: 'Cancel'
              }
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
    expect(getByText('Title')).toBeInTheDocument();
    expect(getByText('Content')).toBeInTheDocument();
    expect(getByText('Okay')).toBeInTheDocument();
    expect(getByText('Cancel')).toBeInTheDocument();
  });

  it('opens modal dialog', () => {
    const { getByText, getByRole } = render(
      <div>
        <button
          type="button"
          onClick={() => {
            dialogs.open('modal', {
              title: 'Title',
              content: 'Content',
              labels: {
                action: 'Action'
              }
            });
          }}
        >
          Trigger
        </button>
        <DialogsManager />
      </div>
    );
    fireEvent.click(getByText('Trigger'));
    const dialogElements = getByRole('dialog');
    expect(dialogElements).toBeInTheDocument();
    expect(getByText('Title')).toBeInTheDocument();
    expect(getByText('Content')).toBeInTheDocument();
    expect(getByText('Action')).toBeInTheDocument();
  });

  it('opens and closes alert dialog', () => {
    const { getByText, getByRole, queryByRole } = render(
      <div>
        <button
          type="button"
          onClick={() => {
            const { close: closeDialog } = dialogs.open('alert', {
              title: 'Alert',
              content: (
                <div>
                  <button type="button" onClick={() => closeDialog()}>
                    Close
                  </button>
                </div>
              ),
              labels: {
                action: 'Okay'
              }
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
    fireEvent.click(getByText('Close'));
    expect(queryByRole('alertdialog')).not.toBeInTheDocument();
  });

  it('opens multiple alert dialogs and closes them all', async () => {
    const {
      getByText, queryByRole, queryAllByRole
    } = render(
      <div>
        <button
          type="button"
          onClick={() => {
            dialogs.push('alert', {
              title: 'Alert',
              content: (
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      dialogs.push('alert', {
                        title: 'Second Alert',
                        content: (
                          <div>
                            <button
                              type="button"
                              onClick={() => dialogs.closeAll()}
                            >
                              Close All
                            </button>
                          </div>
                        ),
                        labels: {
                          action: 'Okay'
                        }
                      });
                    }}
                  >
                    Second Trigger
                  </button>
                </div>
              ),
              labels: {
                action: 'Okay'
              }
            });
          }}
        >
          Trigger
        </button>
        <DialogsManager />
      </div>
    );
    fireEvent.click(getByText('Trigger'));
    fireEvent.click(getByText('Second Trigger'));

    await waitFor(() => expect(getByText('Close All')).toBeInTheDocument());
    const dialogElements = queryAllByRole('alertdialog', {
      hidden: true
    });
    expect(dialogElements).toHaveLength(2);
    fireEvent.click(getByText('Close All'));
    expect(queryByRole('alertdialog')).not.toBeInTheDocument();
  });
});
