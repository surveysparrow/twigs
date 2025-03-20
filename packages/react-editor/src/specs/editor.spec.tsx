import {
  describe, expect, it, afterEach
} from 'vitest';
import { render, cleanup } from 'vitest-browser-react';
import {
  DialogLinkEditor,
  EditorFloatingToolbar,
  EditorToolbar,
  RichEditor
} from '../components';
import { Editor } from '../editor';

describe('Editor', async () => {
  afterEach(() => {
    cleanup();
  });
  it('should render', async () => {
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
