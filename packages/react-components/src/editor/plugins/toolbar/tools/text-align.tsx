import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  TextAlignCenterIcon,
  TextAlignJustifyIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon
} from '@sparrowengg/twigs-react-icons';
import { IconButton } from '@src/button';
import clsx from 'clsx';
import { FORMAT_ELEMENT_COMMAND } from 'lexical';
import React, { ReactNode } from 'react';
import { useToolbarStore } from '../../toolbar-context/store';
import { TextAlignments, textAlignments } from '../../toolbar-context/utils';
import { RenderButtonProps, ToolbarButtonProps } from './commons';

const IconMapping: Record<TextAlignments, ReactNode> = {
  left: <TextAlignLeftIcon />,
  center: <TextAlignCenterIcon />,
  right: <TextAlignRightIcon />,
  justify: <TextAlignJustifyIcon />
};

export const TextAlignTool = ({
  renderButton,
  buttonProps
}: Omit<ToolbarButtonProps, 'renderButton'> & {
  renderButton?: (
    props: Omit<RenderButtonProps, 'onChange' | 'active'> & {
      onChange: (alignment: TextAlignments) => void;
      active: TextAlignments;
    }
  ) => React.ReactNode;
}) => {
  const [editor] = useLexicalComposerContext();
  const alignment = useToolbarStore((state) => state.data.textAlign);

  const getNextAlignment = (currentAlign: TextAlignments) => {
    let activeIndex = textAlignments.indexOf(currentAlign);
    if (activeIndex === textAlignments.length - 1) {
      activeIndex = 0;
    } else {
      activeIndex++;
    }

    return textAlignments[activeIndex];
  };

  const handleClick = () => {
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, getNextAlignment(alignment));
  };

  if (renderButton) {
    return renderButton({ editor, active: alignment, onChange: handleClick });
  }

  const Icon = () => IconMapping[alignment];

  return (
    <IconButton
      icon={<Icon />}
      variant="ghost"
      color="default"
      className={clsx(
        'twigs-editor-tool-button',
        `twigs-editor-tool-button--${alignment}`
      )}
      onClick={handleClick}
      title={`Change text alignment from ${alignment} to ${getNextAlignment(
        alignment
      )}`}
      aria-label={`Change text alignment from ${alignment} to ${getNextAlignment(
        alignment
      )}`}
      {...buttonProps}
    />
  );
};
