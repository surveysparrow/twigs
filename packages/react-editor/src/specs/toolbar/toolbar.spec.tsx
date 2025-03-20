import { DialogLinkEditor, EditorToolbar, RichEditor } from '@src/components';
import { Editor } from '@src/editor';
import { sleep } from '@src/utils/_sleep';
import { userEvent } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';

const renderComponent = (
  <Editor>
    <EditorToolbar />
    <DialogLinkEditor />
    <RichEditor placeholder="Start editing" />
  </Editor>
);

describe('Toolbar', async () => {
  it('should show toolbar', async () => {
    const { container } = render(renderComponent);
    const toolbar = container.querySelector('.twigs-editor-toolbar')!;
    expect(toolbar).not.toBeNull();
  });

  it('has working buttons', async () => {
    const { container, getByText } = render(renderComponent);
    const editor = container.querySelector('[contenteditable]')!;
    expect(editor).not.toBeNull();
    await userEvent.type(editor, 'HelloWorld');

    const toolbar = container.querySelector('.twigs-editor-toolbar')!;
    expect(toolbar).not.toBeNull();

    const toolbarButtons = toolbar.querySelectorAll('button');
    // Clik format button
    await userEvent.click(toolbarButtons[0]);

    await sleep(50);

    const h2 = getByText('Heading 2').element();
    expect(h2).not.toBeNull();
    await userEvent.click(h2);

    const h2UpdatedText = getByText('HelloWorld');
    expect(h2UpdatedText.element()).not.toBeNull();
    expect(h2UpdatedText.element().closest('h2')).not.toBeNull();

    await userEvent.click(toolbarButtons[0]);

    await sleep(50);

    const paragraph = getByText('Paragraph').element();
    expect(paragraph).not.toBeNull();
    await userEvent.click(paragraph);

    const pUpdatedText = getByText('HelloWorld');
    expect(pUpdatedText.element()).not.toBeNull();
    expect(pUpdatedText.element().closest('p')).not.toBeNull();

    const editorText = getByText('HelloWorld');
    await userEvent.dblClick(editorText.element());
    await userEvent.click(toolbarButtons[1]);
    await userEvent.click(toolbarButtons[2]);
    await userEvent.click(toolbarButtons[3]);

    await sleep(50);

    const formattedText = getByText('HelloWorld');
    expect(formattedText.element()).not.toBeNull();
    expect(formattedText.element()?.classList).toContain('text-bold');
    expect(formattedText.element()?.classList).toContain('text-italic');
    expect(formattedText.element()?.classList).toContain('text-underline');

    await userEvent.click(toolbarButtons[4]);
    const ulText = getByText('HelloWorld');
    expect(ulText.element()).not.toBeNull();
    expect(ulText.element().closest('li')).not.toBeNull();
    expect(ulText.element().closest('ul')).not.toBeNull();

    await userEvent.click(toolbarButtons[5]);
    const olText = getByText('HelloWorld');
    expect(olText.element()).not.toBeNull();
    expect(olText.element().closest('li')).not.toBeNull();
    expect(olText.element().closest('ol')).not.toBeNull();

    // Ignoring toolbarButtons[6] as it is link button, which is tested in dialog-link-editor.spec.tsx

    await userEvent.click(toolbarButtons[7]);
    const codeText = getByText('HelloWorld');
    expect(codeText.element()).not.toBeNull();
    expect(codeText.element().closest('code')).not.toBeNull();
    await userEvent.click(toolbarButtons[7]);

    const codeTextUpdated = getByText('HelloWorld');
    expect(codeTextUpdated.element()).not.toBeNull();
    await userEvent.dblClick(codeTextUpdated.element());

    await userEvent.click(toolbarButtons[8]);
    const inlineCodeText = getByText('HelloWorld');
    expect(inlineCodeText.element()).not.toBeNull();
    expect(inlineCodeText.element().closest('code')).not.toBeNull();

    await userEvent.click(toolbarButtons[9]);
    const alignedText = getByText('HelloWorld');
    expect(alignedText.element()).not.toBeNull();
    expect(alignedText.element().closest('p')?.style.textAlign).toBe('center');
    await userEvent.click(toolbarButtons[9]);
    expect(alignedText.element().closest('p')?.style.textAlign).toBe('right');
    await userEvent.click(toolbarButtons[9]);
    expect(alignedText.element().closest('p')?.style.textAlign).toBe('justify');
    await userEvent.click(toolbarButtons[9]);
    expect(alignedText.element().closest('p')?.style.textAlign).toBe('left');
  });
});
