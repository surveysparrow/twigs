import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import {
  DialogLinkEditor,
  EditorFloatingToolbar,
  EditorToolbar,
  RichEditor
} from '../components';
import { Editor } from '../editor';

describe('Editor', async () => {
  it.concurrent('should render', async () => {
    const { getByText } = render(
      <Editor>
        <EditorToolbar />
        <DialogLinkEditor />
        <RichEditor placeholder="Start editing" />
        <EditorFloatingToolbar />
      </Editor>
    );
    const placeholder = getByText('Start editing');
    expect(placeholder.element()).not.toBeNull();
  });
});
