import {
  DialogLinkEditor,
  EditorFloatingToolbar,
  EditorToolbar,
  RichEditor
} from '@src/components';
import { Editor } from '@src/editor';
import { sleep } from '@src/utils/_sleep';
import { userEvent } from '@vitest/browser/context';
import {
  describe, expect, it, afterEach
} from 'vitest';
import { render, cleanup } from 'vitest-browser-react';
import { HeadingTool } from './heading-tool';

const renderComponent = (
  <Editor>
    <EditorToolbar />
    <DialogLinkEditor />
    <RichEditor placeholder="Start editing" />
    <EditorFloatingToolbar />
  </Editor>
);

const withCustomTools = (
  <Editor>
    <EditorToolbar />
    <DialogLinkEditor />
    <RichEditor placeholder="Start editing" />
    <EditorFloatingToolbar
      tools={[
        'bold',
        'underline',
        'italic',
        'link',
        {
          renderComponent: HeadingTool
        }
      ]}
    />
  </Editor>
);

describe('Floating Toolbar', async () => {
  afterEach(() => {
    cleanup();
  });
  it('should show floating toolbar', async () => {
    const { container, getByText } = render(renderComponent);
    const editor = container.querySelector('[contenteditable]')!;
    expect(editor).not.toBeNull();
    await userEvent.type(editor, 'HelloWorld');

    const text = getByText('HelloWorld');
    expect(text.element()).not.toBeNull();
    await userEvent.dblClick(text.element());

    await sleep(50);

    const body = container.ownerDocument!.body!;

    const floatingToolbar = body.querySelector('.twigs-floating-toolbar')!;
    expect(floatingToolbar).not.toBeNull();
  });

  it('should have working tools', async () => {
    const { container, getByText, getByRole } = render(renderComponent);
    const editor = container.querySelector('[contenteditable]')!;
    expect(editor).not.toBeNull();
    await userEvent.type(editor, 'HelloWorld');

    const text = getByText('HelloWorld');
    expect(text.element()).not.toBeNull();
    await userEvent.dblClick(text.element());

    await sleep(50);

    const body = container.ownerDocument!.body!;

    const floatingToolbar = body.querySelector('.twigs-floating-toolbar')!;
    expect(floatingToolbar).not.toBeNull();

    const buttons = floatingToolbar.querySelectorAll('button');
    expect(buttons).toHaveLength(4);

    await userEvent.click(buttons[0]);
    await userEvent.click(buttons[1]);
    await userEvent.click(buttons[2]);
    await userEvent.click(buttons[3]);

    await sleep(50);

    const dialog = getByRole('dialog');
    expect(dialog.element()).not.toBeNull();

    const [inputText, url] = dialog.element().querySelectorAll('input');
    await userEvent.clear(inputText);
    await userEvent.type(inputText, 'Example');
    await userEvent.type(url, 'https://www.example.com');

    const addButton = getByText('Save').element();
    await userEvent.click(addButton);

    await sleep(50);
    const updatedElement = getByText('Example');
    expect(updatedElement.element()).not.toBeNull();
    expect(updatedElement.element().closest('a')).toHaveAttribute(
      'href',
      'https://www.example.com'
    );
    expect(updatedElement.element()?.classList).toContain('text-bold');
    expect(updatedElement.element()?.classList).toContain('text-italic');
    expect(updatedElement.element()?.classList).toContain('text-underline');
  });
  it('should support custom tools', async () => {
    const { container, getByText } = render(withCustomTools);
    const editor = container.querySelector('[contenteditable]')!;
    expect(editor).not.toBeNull();
    await userEvent.type(editor, 'HelloWorld');

    const text = getByText('HelloWorld');
    expect(text.element()).not.toBeNull();
    await userEvent.dblClick(text.element());

    await sleep(50);

    const body = container.ownerDocument!.body!;

    const floatingToolbar = body.querySelector('.twigs-floating-toolbar')!;
    expect(floatingToolbar).not.toBeNull();

    const buttons = floatingToolbar.querySelectorAll('button');
    expect(buttons).toHaveLength(5);

    expect(buttons[1].dataset.tool).toBe('underline');

    await userEvent.click(buttons[4]);

    await sleep(50);

    const updatedText = getByText('HelloWorld');
    expect(updatedText.element()).not.toBeNull();
    expect(updatedText.element().closest('h2')).not.toBeNull();
  });
});
