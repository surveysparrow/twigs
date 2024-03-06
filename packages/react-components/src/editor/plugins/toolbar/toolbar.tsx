import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { LexicalEditor } from 'lexical';
import { Flex } from '@src/flex';
import { Fragment, ReactNode } from 'react';
import {
  BoldTool,
  CodeBlockTool,
  CodeTool,
  FormatTool,
  ItalicTool,
  LinkTool,
  OrderedListTool,
  UnderlineTool,
  UnorderedListTool
} from './tools';

export type DefaultToolbarTools =
  | 'format'
  | 'bold'
  | 'italic'
  | 'underline'
  | 'ordered-list'
  | 'unordered-list'
  | 'link'
  | 'codeblock'
  | 'code';

type CustomTool = {
  renderComponent: (props: { editor: LexicalEditor }) => ReactNode;
};

export type ToolbarTools = DefaultToolbarTools[] | CustomTool[];

const defaultTools: DefaultToolbarTools[] = [
  'format',
  'bold',
  'italic',
  'underline',
  'unordered-list',
  'ordered-list',
  'link',
  'codeblock',
  'code'
];

const toolMapping = {
  format: FormatTool,
  bold: BoldTool,
  italic: ItalicTool,
  underline: UnderlineTool,
  'unordered-list': UnorderedListTool,
  'ordered-list': OrderedListTool,
  codeblock: CodeBlockTool,
  code: CodeTool,
  link: LinkTool
};

export const ToolbarPlugin = ({
  tools = defaultTools,
  children
}: {
  tools?: ToolbarTools;
  children?: ReactNode;
}) => {
  const [editor] = useLexicalComposerContext();

  return (
    <>
      {children ? (
        <>{children}</>
      ) : (
        <Flex>
          {tools.map((_item, i) => {
            if ((_item as CustomTool)?.renderComponent) {
              const item = _item as CustomTool;
              return (
                // eslint-disable-next-line react/no-array-index-key
                <Fragment key={i}>{item.renderComponent({ editor })}</Fragment>
              );
            }

            const item = _item as DefaultToolbarTools;
            const Tool = toolMapping[item];
            if (!Tool) return null;

            return (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={i}>
                <Tool />
              </Fragment>
            );
          })}
        </Flex>
      )}
    </>
  );
};
