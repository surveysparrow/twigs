import { IconButtonBaseProps } from '@src/button';
import { LexicalEditor } from 'lexical';
import { ReactNode } from 'react';

export type RenderButtonProps = {
  editor: LexicalEditor;
  active: boolean;
  onChange?: () => void;
};

export type ToolbarButtonProps = {
  renderButton?: (props: RenderButtonProps) => ReactNode;
  buttonProps?: IconButtonBaseProps;
};
