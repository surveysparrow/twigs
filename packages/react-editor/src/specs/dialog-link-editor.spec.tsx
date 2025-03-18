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
});
