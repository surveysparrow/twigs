import { $setBlocksType } from '@lexical/selection';
import { IconButtonProps } from '@src/button';
import {
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
  LexicalEditor
} from 'lexical';
import { ReactNode } from 'react';

export type RenderButtonProps = {
  editor: LexicalEditor;
  active: boolean;
  onChange?: () => void;
};

export type ToolbarButtonProps = {
  renderButton?: (props: RenderButtonProps) => ReactNode;
  buttonProps?: IconButtonProps;
};

export const formatParagraph = (editor: LexicalEditor) => {
  editor.update(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      $setBlocksType(selection, () => $createParagraphNode());
    }
  });
};
