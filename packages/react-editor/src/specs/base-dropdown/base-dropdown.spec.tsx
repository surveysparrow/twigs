import { userEvent } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import {
  DialogLinkEditor,
  EditorFloatingToolbar,
  EditorToolbar,
  RichEditor
} from '../../components';
import { Editor } from '../../editor';
import { SlashesPlugin } from './Plugin';

describe('Editor Dropdown Base', async () => {
  it.concurrent('should show options on slash command', async () => {
    const { getByText, container } = render(
      <Editor>
        <EditorToolbar />
        <DialogLinkEditor />
        <RichEditor placeholder="Start editing" />
        <EditorFloatingToolbar />
        <SlashesPlugin />
      </Editor>
    );

    const placeholder = getByText('Start editing');
    expect(placeholder).not.toBeNull();

    const editorElem = container.querySelector("[contenteditable='true']");
    expect(editorElem).not.toBeNull();

    await userEvent.type(editorElem!, '/sho');

    expect(getByText('Show alert')).not.toBeNull();
    expect(getByText('Show prompt')).not.toBeNull();
    expect(getByText('Show confirm')).not.toBeNull();

    await userEvent.click(getByText('Show prompt'));
    expect(editorElem?.textContent).toContain('User prompt');
  });
});
