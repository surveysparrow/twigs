import { FORMAT_TEXT_COMMAND, LexicalEditor } from 'lexical';
import { useCallback } from 'react';
import { TOGGLE_LINK_COMMAND } from '@lexical/link';
import { Button } from '../../../button';
import { useFloatingToolbarContext } from './utils';

export const Bold = ({ editor }: { editor: LexicalEditor }) => {
  const isBold = useFloatingToolbarContext((state) => state.isBold);

  return (
    <Button
      onClick={() => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
      }}
      className={`popup-item spaced ${isBold ? 'active' : ''}`}
      aria-label="Format text as bold"
    >
      Bold
    </Button>
  );
};

export const Italic = ({ editor }: { editor: LexicalEditor }) => {
  const isItalic = useFloatingToolbarContext((state) => state.isItalic);

  return (
    <Button
      onClick={() => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
      }}
      className={`popup-item spaced ${isItalic ? 'active' : ''}`}
      aria-label="Format text as italics"
    >
      Italic
    </Button>
  );
};

export const Underline = ({ editor }: { editor: LexicalEditor }) => {
  const isUnderline = useFloatingToolbarContext((state) => state.isUnderline);

  return (
    <Button
      type="button"
      onClick={() => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
      }}
      className={`popup-item spaced ${isUnderline ? 'active' : ''}`}
      aria-label="Format text to underlined"
    >
      Underline
    </Button>
  );
};

export const Link = ({ editor }: { editor: LexicalEditor }) => {
  const isLink = useFloatingToolbarContext((state) => state.isLink);

  const insertLink = useCallback(() => {
    if (!isLink) {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, { url: 'https://sad.asd/' });
    } else {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    }
  }, [editor, isLink]);

  return <Button onClick={insertLink}>Link</Button>;
};

export const Strikethrough = ({ editor }: { editor: LexicalEditor }) => {
  const isStrikethrough = useFloatingToolbarContext((state) => state.isStrikethrough);

  return (
    <Button
      type="button"
      onClick={() => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
      }}
      className={`popup-item spaced ${isStrikethrough ? 'active' : ''}`}
      aria-label="Format text to strike"
    >
      Strike
    </Button>
  );
};

export const Subscript = ({ editor }: { editor: LexicalEditor }) => {
  const isSubscript = useFloatingToolbarContext((state) => state.isSubscript);

  return (
    <Button
      type="button"
      onClick={() => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
      }}
      className={`popup-item spaced ${isSubscript ? 'active' : ''}`}
      aria-label="Format text to strike"
    >
      Strike
    </Button>
  );
};

export const Superscript = ({ editor }: { editor: LexicalEditor }) => {
  const isSuperscript = useFloatingToolbarContext((state) => state.isSuperscript);

  return (
    <Button
      type="button"
      onClick={() => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
      }}
      className={`popup-item spaced ${isSuperscript ? 'active' : ''}`}
      aria-label="Format text to strike"
    >
      Strike
    </Button>
  );
};
