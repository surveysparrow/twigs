import { FORMAT_TEXT_COMMAND, LexicalEditor } from 'lexical';
import { useCallback } from 'react';
import { TOGGLE_LINK_COMMAND } from '@lexical/link';
import {
  BoldIcon,
  ItalicsIcon,
  LinkIcon,
  MinusIcon
} from '@sparrowengg/twigs-react-icons';
import { Button, IconButton } from '../../../button';
import { useFloatingToolbarContext } from './utils';

export const Bold = ({ editor }: { editor: LexicalEditor }) => {
  const isBold = useFloatingToolbarContext((state) => state.isBold);

  return (
    <IconButton
      onClick={() => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
      }}
      size="md"
      icon={<BoldIcon />}
      variant="solid"
      color={isBold ? 'primary' : 'bright'}
      aria-label="Format text as bold"
    />
  );
};

export const Italic = ({ editor }: { editor: LexicalEditor }) => {
  const isItalic = useFloatingToolbarContext((state) => state.isItalic);

  return (
    <IconButton
      onClick={() => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
      }}
      size="md"
      icon={<ItalicsIcon />}
      variant="solid"
      color={isItalic ? 'primary' : 'bright'}
      aria-label="Format text as Italics"
    />
  );
};

export const Underline = ({ editor }: { editor: LexicalEditor }) => {
  const isUnderline = useFloatingToolbarContext((state) => state.isUnderline);

  return (
    <IconButton
      onClick={() => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
      }}
      size="md"
      icon={<MinusIcon />}
      variant="solid"
      color={isUnderline ? 'primary' : 'bright'}
      aria-label="Format text to underline"
    />
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

  return (
    <IconButton
      onClick={insertLink}
      size="md"
      icon={<LinkIcon />}
      variant="solid"
      color={isLink ? 'primary' : 'bright'}
      aria-label="Convert text to link"
    />
  );
};

export const Strikethrough = ({ editor }: { editor: LexicalEditor }) => {
  const isStrikethrough = useFloatingToolbarContext(
    (state) => state.isStrikethrough
  );

  return (
    <IconButton
      onClick={() => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
      }}
      size="md"
      icon={<MinusIcon />}
      variant="solid"
      color={isStrikethrough ? 'primary' : 'bright'}
      aria-label="Format text to strike"
    />
  );
};

export const Subscript = ({ editor }: { editor: LexicalEditor }) => {
  const isSubscript = useFloatingToolbarContext((state) => state.isSubscript);

  return (
    <Button
      type="button"
      onClick={() => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'subscript');
      }}
      className={`popup-item spaced ${isSubscript ? 'active' : ''}`}
      aria-label="Format text to subscript"
    >
      Subscript
    </Button>
  );
};

export const Superscript = ({ editor }: { editor: LexicalEditor }) => {
  const isSuperscript = useFloatingToolbarContext(
    (state) => state.isSuperscript
  );

  return (
    <Button
      type="button"
      onClick={() => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'superscript');
      }}
      className={`popup-item spaced ${isSuperscript ? 'active' : ''}`}
      aria-label="Format text to superscript"
    >
      Superscript
    </Button>
  );
};
