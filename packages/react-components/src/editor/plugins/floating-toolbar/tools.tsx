import { TOGGLE_LINK_COMMAND } from '@lexical/link';
import {
  BoldIcon,
  ItalicsIcon,
  LinkIcon,
  MinusIcon,
  UnderlineIcon
} from '@sparrowengg/twigs-react-icons';
import { FORMAT_TEXT_COMMAND, LexicalEditor } from 'lexical';
import { useCallback } from 'react';
import { Button, IconButton } from '../../../button';
import { useFloatingToolbarContext } from './utils';

export const Bold = ({ editor }: { editor: LexicalEditor }) => {
  const isBold = useFloatingToolbarContext((state) => state.isBold);

  return (
    <IconButton
      onClick={() => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
      }}
      size="sm"
      icon={<BoldIcon />}
      variant="solid"
      color={isBold ? 'light' : 'default'}
      css={{
        color: '$white900'
      }}
      title="Format text as bold"
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
      size="sm"
      icon={<ItalicsIcon />}
      variant="solid"
      color={isItalic ? 'light' : 'default'}
      css={{
        color: '$white900'
      }}
      title="Format text as Italics"
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
      size="sm"
      icon={<UnderlineIcon />}
      variant="solid"
      color={isUnderline ? 'light' : 'default'}
      css={{
        color: '$white900'
      }}
      title="Format text to underline"
      aria-label="Format text to underline"
    />
  );
};

export const Link = ({ editor }: { editor: LexicalEditor }) => {
  const isLink = useFloatingToolbarContext((state) => state.isLink);

  const insertLink = useCallback(() => {
    if (!isLink) {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, { url: 'https://' });
    } else {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    }
  }, [editor, isLink]);

  return (
    <IconButton
      onClick={insertLink}
      size="sm"
      icon={<LinkIcon />}
      variant="solid"
      color={isLink ? 'light' : 'default'}
      css={{
        color: '$white900'
      }}
      title="Convert text to link"
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
      size="sm"
      icon={<MinusIcon />}
      variant="solid"
      color={isStrikethrough ? 'light' : 'default'}
      css={{
        color: '$white900'
      }}
      title="Format text to strike"
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
      title="Format text to subscript"
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
      title="Format text to superscript"
    >
      Superscript
    </Button>
  );
};
