import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ReactNode, RefObject, isValidElement } from 'react';
import { Box, BoxProps } from '../../box';

export const EditorArea = ({
  containerRef,
  placeholder,
  editorContainerProps
}: {
  containerRef?:
    | ((instance: HTMLDivElement | null) => void)
    | RefObject<HTMLDivElement>;
  placeholder?: ReactNode | string;
  editorContainerProps?: BoxProps;
}) => {
  return (
    <Box
      css={{
        position: 'relative',
        ...editorContainerProps?.css
      }}
      {...editorContainerProps}
    >
      <RichTextPlugin
        contentEditable={(
          <Box className="editor-container">
            <Box
              className="editor"
              css={{
                position: 'relative',
                borderRadius: '$md',
                border: '1px solid $neutral200',
                textAlign: 'left',

                '& .text-bold': {
                  fontWeight: 'bold'
                },
                '& .text-italic': {
                  fontStyle: 'italic'
                },
                '& .text-underline': {
                  textDecoration: 'underline'
                },
                p: {
                  margin: '$1 0'
                },
                ul: {
                  listStyle: 'disc',
                  marginLeft: '$7',

                  ul: {
                    listStyle: 'circle'
                  }
                },
                ol: {
                  listStyle: 'decimal',
                  marginLeft: '$7',

                  ol: {
                    listStyle: 'lower-alpha'
                  }
                },
                '.text-code': {
                  color: '#F97316',
                  padding: '0 $2',
                  backgroundColor: '$neutral100',
                  border: '1px solid $neutral200',
                  borderRadius: '$md',

                  '&, & *': {
                    fontFamily: 'monospace'
                  }
                },
                '.block-code': {
                  padding: '$4',
                  display: 'block',
                  color: '$neutral900',
                  backgroundColor: '$neutral100',
                  border: '1px solid $neutral200',
                  borderRadius: '$md',

                  '&, & *': {
                    fontFamily: 'monospace'
                  }
                },
                '.block-h1': {
                  fontSize: '$xl'
                },
                '.block-h2': {
                  fontSize: '$lg'
                },
                '.block-h3, .block-h4, .block-h5, .block-h6': {
                  fontSize: '$md'
                }
              }}
              ref={containerRef}
            >
              <ContentEditable
                style={{
                  minHeight: '120px',
                  padding: '12px'
                }}
              />
            </Box>
          </Box>
        )}
        ErrorBoundary={LexicalErrorBoundary}
        placeholder={
          !isValidElement(placeholder) ? (
            <Box
              css={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                color: '$black500'
              }}
            >
              {placeholder}
            </Box>
          ) : (
            placeholder
          )
        }
      />
    </Box>
  );
};
