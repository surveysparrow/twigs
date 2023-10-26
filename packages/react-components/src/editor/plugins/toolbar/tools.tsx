import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND
} from '@lexical/list';

import { TOGGLE_LINK_COMMAND } from '@lexical/link';
import { $createHeadingNode, HeadingTagType } from '@lexical/rich-text';
import { $setBlocksType } from '@lexical/selection';
import {
  AsteriskIcon,
  BoldIcon,
  BulletList,
  ImageIcon,
  ItalicsIcon,
  LinkIcon,
  MinusIcon
} from '@sparrowengg/twigs-react-icons';
import {
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  LexicalEditor
} from 'lexical';
import { useState } from 'react';
import { IconButton } from '../../../button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../../../dropdown';
import { FormInput } from '../../../input';
import {
  Popover,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverTrigger
} from '../../../popover';
import { INSERT_IMAGE_COMMAND } from '../images/utils';
import { useToolbarContext } from './utils';

type ToolbarButton = {
  editor: LexicalEditor;
};

export const Bold = ({ editor }: ToolbarButton) => {
  const active = useToolbarContext((state) => state.isBold);

  return (
    <IconButton
      icon={<BoldIcon />}
      variant={active ? 'solid' : 'ghost'}
      color="primary"
      onClick={() => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
      }}
    />
  );
};

export const Italic = ({ editor }: ToolbarButton) => {
  const active = useToolbarContext((state) => state.isItalic);

  return (
    <IconButton
      icon={<ItalicsIcon />}
      variant={active ? 'solid' : 'ghost'}
      color="primary"
      onClick={() => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
      }}
    />
  );
};

export const Underline = ({ editor }: ToolbarButton) => {
  const active = useToolbarContext((state) => state.isUnderline);

  return (
    <IconButton
      icon={<MinusIcon />}
      variant={active ? 'solid' : 'ghost'}
      color="primary"
      onClick={() => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
      }}
    />
  );
};

export const UnorderedList = ({ editor }: ToolbarButton) => {
  const active = useToolbarContext((state) => state.isUnOrderedList);

  return (
    <IconButton
      icon={<BulletList />}
      variant={active ? 'solid' : 'ghost'}
      color="primary"
      onClick={() => {
        if (!active) {
          editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
        } else {
          editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
        }
      }}
    />
  );
};

export const OrderedList = ({ editor }: ToolbarButton) => {
  const active = useToolbarContext((state) => state.isOrderedList);

  return (
    <IconButton
      icon={<AsteriskIcon />}
      variant={active ? 'solid' : 'ghost'}
      color="primary"
      onClick={() => {
        if (!active) {
          editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
        } else {
          editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
        }
      }}
    />
  );
};

export const Link = ({ editor }: ToolbarButton) => {
  const active = useToolbarContext((state) => state.isLink);

  return (
    <IconButton
      icon={<LinkIcon />}
      variant={active ? 'solid' : 'ghost'}
      color="primary"
      onClick={() => {
        if (!active) {
          editor.dispatchCommand(TOGGLE_LINK_COMMAND, 'https://asds.wew');
        } else {
          editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
        }
      }}
    />
  );
};

export const Image = ({ editor }: ToolbarButton) => {
  const [imageUrl, setImageUrl] = useState('');

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <IconButton icon={<ImageIcon />} variant="ghost" color="primary" />
        </PopoverTrigger>
        <PopoverContent
          css={{
            '*': {
              color: '#222'
            }
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
                src: imageUrl,
                altText: '',
                maxWidth: 300
              });
            }}
          >
            <FormInput
              label="url"
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </form>
          <PopoverClose> Close</PopoverClose>
          <PopoverArrow />
        </PopoverContent>
      </Popover>
    </>
  );
};

export const Format = ({ editor }: ToolbarButton) => {
  const activeFormat = useToolbarContext((state) => state.format);

  const formatMapping = {
    paragraph: 'Paragraph',
    h1: 'Heading 1',
    h2: 'Heading 2',
    h3: 'Heading 3',
    h4: 'Heading 4',
    h5: 'Heading 5',
    h6: 'Heading 6'
  } as const;

  const formatHeading = (headingSize: HeadingTagType) => {
    if (headingSize) {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => $createHeadingNode(headingSize));
        }
      });
    }

    setTimeout(() => {
      editor.focus();
    }, 100);
  };

  const formatParagraph = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createParagraphNode());
      }
    });
  };

  const { paragraph, ...headings } = formatMapping;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{formatMapping[activeFormat]}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={formatParagraph}>
          {paragraph}
        </DropdownMenuItem>
        {(Object.keys(headings) as unknown as (keyof typeof headings)[]).map(
          (item) => (
            <DropdownMenuItem onClick={() => formatHeading(item)} key={item}>
              {formatMapping[item]}
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
