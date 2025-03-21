import { userEvent } from '@vitest/browser/context';
import {
  describe, expect, it, afterEach
} from 'vitest';
import { render, cleanup } from 'vitest-browser-react';
import { sleep } from '@src/utils/_sleep';
import { EmojiNode, EmojiPlugin } from '..';
import {
  DialogLinkEditor,
  EditorFloatingToolbar,
  EditorToolbar,
  RichEditor
} from '../components';
import { Editor } from '../editor';

describe('Emoji', async () => {
  afterEach(() => {
    cleanup();
  });
  it('should render', async () => {
    const { getByText, getByRole, container } = render(
      <Editor nodes={[EmojiNode]}>
        <EditorToolbar />
        <DialogLinkEditor />
        <RichEditor placeholder="Start editing" />
        <EditorFloatingToolbar />
        <EmojiPlugin />
      </Editor>
    );
    const editor = container.querySelector('[contenteditable]')!;
    expect(editor).not.toBeNull();

    userEvent.type(editor, ':sweat_sm');

    await sleep(500);

    const listbox = getByRole('listbox');
    expect(listbox.element()).not.toBeNull();

    const item = listbox.element()!.querySelector('button')!;
    await userEvent.click(item);

    const insertedEmoji = getByText('😅');
    expect(insertedEmoji.element()).not.toBeNull();
  });
});
