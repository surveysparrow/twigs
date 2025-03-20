import { sleep } from '@src/utils/_sleep';
import { userEvent } from '@vitest/browser/context';
import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { HashTagNode, HashTagPlugin } from '..';
import {
  DialogLinkEditor,
  EditorFloatingToolbar,
  EditorToolbar,
  RichEditor
} from '../components';
import { Editor } from '../editor';

const Comp = () => {
  const [hashtags, setHashtags] = useState<
    {
      value: string;
      label: string;
      isNew?: boolean;
    }[]
  >([
    {
      value: 'react',
      label: 'React'
    },
    {
      value: 'javascript',
      label: 'JavaScript'
    },
    {
      value: 'typescript',
      label: 'TypeScript'
    },
    {
      value: 'html',
      label: 'HTML'
    },
    {
      value: 'css',
      label: 'CSS'
    }
  ]);

  return (
    <Editor nodes={[HashTagNode]}>
      <EditorToolbar />
      <DialogLinkEditor />
      <RichEditor placeholder="Start editing" />
      <EditorFloatingToolbar />
      <HashTagPlugin
        getResults={(searchString) => {
          /**
           * Find existing hashtags that match the search string
           */
          const searchResults = hashtags.filter((hashtag) => hashtag.value
            .toLowerCase()
            .includes((searchString || '').toLowerCase()));

          /**
           * If the search string is not found in the existing hashtags, add it as a new hashtag
           */
          if (
            !searchResults.find((hashtag) => hashtag.value === searchString)
          ) {
            searchResults.unshift({
              value: searchString!,
              label: searchString!,
              isNew: true
            });
          }
          return searchResults;
        }}
        onMenuItemSelect={(item) => {
          /**
           * If the selected item is a new hashtag, add it to the list of hashtags
           */
          if (item.data.isNew) {
            setHashtags((prev) => [
              ...prev,
              {
                value: item.data.value,
                label: item.data.value
              }
            ]);
          }
        }}
      />
    </Editor>
  );
};

describe('Hashtag', async () => {
  it.concurrent('should render', async () => {
    const { getByText, getByRole, container } = render(<Comp />);
    const editor = container.querySelector('[contenteditable]')!;
    expect(editor).not.toBeNull();

    userEvent.type(editor, '#R');

    await sleep(500);

    const listbox = getByRole('listbox');
    expect(listbox.element()).not.toBeNull();

    const item = listbox.element()!.querySelector('button:nth-child(2)')!;
    await userEvent.click(item);

    const insertedEmoji = getByText('#react');
    expect(insertedEmoji.element()).not.toBeNull();

    await userEvent.clear(editor);

    userEvent.type(editor, '#Custom');

    await sleep(500);

    const listbox2 = getByRole('listbox');
    expect(listbox2.element()).not.toBeNull();

    const item2 = listbox2.element()!.querySelector('button')!;
    await userEvent.click(item2);

    const insertedEmoji2 = getByText('#Custom');
    expect(insertedEmoji2.element()).not.toBeNull();
  });
});
