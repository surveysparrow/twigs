import { LexicalEditor } from 'lexical';
import { ReactNode } from 'react';

export type RenderButtonProps = {
  editor: LexicalEditor;
  active: boolean;
  onChange?: () => void;
};

export type ToolbarButton = {
  editor?: LexicalEditor;
  renderButton?: (props: RenderButtonProps) => ReactNode;
};
