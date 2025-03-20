import { sleep } from '@src/utils/_sleep';
import { userEvent } from '@vitest/browser/context';
import {
  describe, expect, it
} from 'vitest';
import { cleanup, render } from 'vitest-browser-react';
import {
  DialogLinkEditor,
  EditorFloatingToolbar,
  EditorToolbar,
  RichEditor
} from '../components';
import { Editor } from '../editor';

const renderComponent = (
  <Editor>
    <EditorToolbar />
    <DialogLinkEditor />
    <RichEditor placeholder="Start editing" />
    <EditorFloatingToolbar />
  </Editor>
);

describe('Dialog Link Editor', async () => {
  it('should show dialog box', async () => {
    const { getByText, getByLabelText } = render(renderComponent);
    const placeholder = getByText('Start editing');
    expect(placeholder.element()).not.toBeNull();
    const linkButton = getByLabelText('Convert to link').element();
    await userEvent.click(linkButton);

    await sleep(50);
    const dialogBox = getByText('Add Link');
    expect(dialogBox.element()).not.toBeNull();
    cleanup();
  });

  it('should add link', async () => {
    const {
      getByText, getByRole, getByLabelText
    } = render(renderComponent);
    const placeholder = getByText('Start editing');
    expect(placeholder.element()).not.toBeNull();
    const linkButton = getByLabelText('Convert to link').element();
    await userEvent.click(linkButton);

    await sleep(50);
    const dialog = getByRole('dialog');
    expect(dialog.element()).not.toBeNull();

    const [text, url] = dialog.element().querySelectorAll('input');
    await userEvent.type(text, 'Example');
    await userEvent.type(url, 'https://www.example.com');

    const addButton = getByText('Save').element();
    await userEvent.click(addButton);

    await sleep(50);
    const link = getByText('Example');
    expect(link.element()).not.toBeNull();
    expect(link.element().closest('a')).toHaveAttribute('href', 'https://www.example.com');
  });

  it('should validate link', async () => {
    const {
      getByText, getByRole, getByLabelText
    } = render(renderComponent);
    const placeholder = getByText('Start editing');
    expect(placeholder.element()).not.toBeNull();
    const linkButton = getByLabelText('Convert to link').element();
    await userEvent.click(linkButton);

    await sleep(50);
    const dialog = getByRole('dialog');
    expect(dialog.element()).not.toBeNull();

    const [text, url] = dialog.element().querySelectorAll('input');
    await userEvent.type(text, 'Example');
    await userEvent.type(url, 'https://www');

    const addButton = getByText('Save').element();
    await userEvent.click(addButton);

    const error = getByText('Please enter a valid URL');
    expect(error.element()).not.toBeNull();
  });

  it('should edit link', async () => {
    const {
      getByText, getByRole, getByLabelText, container
    } = render(renderComponent);
    const placeholder = getByText('Start editing');
    expect(placeholder.element()).not.toBeNull();
    const linkButton = getByLabelText('Convert to link').element();
    await userEvent.click(linkButton);

    await sleep(50);
    const dialog = getByRole('dialog');
    expect(dialog.element()).not.toBeNull();

    const [text, url] = dialog.element().querySelectorAll('input');
    await userEvent.type(text, 'Example');
    await userEvent.type(url, 'https://www.example.com');

    const addButton = getByText('Save').element();
    await userEvent.click(addButton);

    await sleep(50);
    const link = getByText('Example');
    expect(link.element()).not.toBeNull();
    expect(link.element().closest('a')).toHaveAttribute('href', 'https://www.example.com');

    await userEvent.click(link);

    const { body } = container.ownerDocument;
    const tooltipContainer = body.querySelector('.twigs-link-tooltip')!;
    expect(tooltipContainer).not.toBeNull();

    const linkUrlElement = tooltipContainer.querySelector('a');
    expect(linkUrlElement).not.toBeNull();

    const editButton = body.querySelector('.twigs-link-tooltip__actions button');
    expect(editButton).not.toBeNull();

    await userEvent.click(editButton!);

    await sleep(50);

    const editDialog = getByRole('dialog');
    expect(editDialog.element()).not.toBeNull();

    const [editText, editUrl] = editDialog.element().querySelectorAll('input');
    await userEvent.clear(editText);
    await userEvent.clear(editUrl);
    await userEvent.type(editText, 'Edited Example');
    await userEvent.type(editUrl, 'https://www.edited-example.com');

    const updateButton = getByText('Update').element();
    await userEvent.click(updateButton);

    await sleep(50);

    const editedLink = getByText('Edited Example');
    expect(editedLink.element()).not.toBeNull();
    expect(editedLink.element().closest('a')).toHaveAttribute('href', 'https://www.edited-example.com');
  });

  it('should delete link', async () => {
    const {
      getByText, getByRole, getByLabelText, container
    } = render(renderComponent);
    const placeholder = getByText('Start editing');
    expect(placeholder.element()).not.toBeNull();
    const linkButton = getByLabelText('Convert to link').element();
    await userEvent.click(linkButton);

    await sleep(50);
    const dialog = getByRole('dialog');
    expect(dialog.element()).not.toBeNull();

    const [text, url] = dialog.element().querySelectorAll('input');
    await userEvent.type(text, 'Example');
    await userEvent.type(url, 'https://www.example.com');

    const addButton = getByText('Save').element();
    await userEvent.click(addButton);

    await sleep(50);
    const link = getByText('Example');
    expect(link.element()).not.toBeNull();
    expect(link.element().closest('a')).toHaveAttribute('href', 'https://www.example.com');

    await userEvent.click(link);

    const { body } = container.ownerDocument;
    const tooltipContainer = body.querySelector('.twigs-link-tooltip')!;
    expect(tooltipContainer).not.toBeNull();

    const linkUrlElement = tooltipContainer.querySelector('a');
    expect(linkUrlElement).not.toBeNull();

    const deleteButton = body.querySelector('.twigs-link-tooltip__actions button:nth-child(2)');
    expect(deleteButton).not.toBeNull();

    await userEvent.click(deleteButton!);

    await sleep(50);

    const deletedLink = getByText('Example');
    expect(deletedLink.element().closest('a')).toBeNull();
  });
});
