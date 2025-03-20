import { sleep } from '@src/utils/_sleep';
import { userEvent } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { MentionNode, MentionsPlugin } from '..';
import {
  DialogLinkEditor,
  EditorFloatingToolbar,
  EditorToolbar,
  RichEditor
} from '../components';
import { Editor } from '../editor';

const users = [
  {
    id: '1',
    name: 'John Doe',
    username: 'johndoe'
  },
  {
    id: '2',
    name: 'Jane Doe',
    username: 'janedoe'
  },
  {
    id: '3',
    name: 'John Smith',
    username: 'johnsmith'
  },
  {
    id: '4',
    name: 'Jane Smith',
    username: 'janesmith'
  }
];

describe('Mentions', async () => {
  it.concurrent('should render', async () => {
    const { getByText, getByRole, container } = render(
      <Editor nodes={[MentionNode]}>
        <EditorToolbar />
        <DialogLinkEditor />
        <RichEditor placeholder="Start editing" />
        <EditorFloatingToolbar />
        <MentionsPlugin
          getResults={(searchString) => {
            return users
              .filter((user) => user.name
                .toLowerCase()
                .includes((searchString || '').toLowerCase()))
              .map((user) => ({
                value: user.username,
                label: user.name
              }));
          }}
        />
      </Editor>
    );
    const editor = container.querySelector('[contenteditable]')!;
    expect(editor).not.toBeNull();

    userEvent.type(editor, '@j');

    await sleep(500);

    const listbox = getByRole('listbox');
    expect(listbox.element()).not.toBeNull();

    const item = listbox.element()!.querySelector('button')!;
    await userEvent.click(item);

    const insertedEmoji = getByText('@johndoe');
    expect(insertedEmoji.element()).not.toBeNull();
  });
});
