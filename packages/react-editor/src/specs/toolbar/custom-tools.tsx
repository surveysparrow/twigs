import { Button } from '@sparrowengg/twigs-react';
import {
  BoldTool,
  CodeBlockTool,
  CodeTool,
  FormatTool,
  ItalicTool,
  LinkTool,
  OrderedListTool,
  TextAlignTool,
  UnderlineTool,
  UnorderedListTool
} from '@src/components';

export const CustomFormatTool = () => {
  return (
    <FormatTool
      renderButton={({ onChange, active }) => {
        return (
          <Button
            onClick={() => {
              if (onChange) {
                onChange(active === 'paragraph' ? 'h2' : 'paragraph');
              }
            }}
            color={active ? 'primary' : 'default'}
          >
            {active}
          </Button>
        );
      }}
    />
  );
};

export const CustomBoldTool = () => {
  return (
    <BoldTool
      renderButton={({ onChange, active }) => {
        return (
          <Button
            onClick={() => {
              onChange?.();
            }}
            color={active ? 'primary' : 'default'}
          >
            B
          </Button>
        );
      }}
    />
  );
};

export const CustomItalicTool = () => {
  return (
    <ItalicTool
      renderButton={({ onChange, active }) => {
        return (
          <Button
            onClick={() => {
              onChange?.();
            }}
            color={active ? 'primary' : 'default'}
          >
            I
          </Button>
        );
      }}
    />
  );
};

export const CustomUnderlineTool = () => {
  return (
    <UnderlineTool
      renderButton={({ onChange, active }) => {
        return (
          <Button
            onClick={() => {
              onChange?.();
            }}
            color={active ? 'primary' : 'default'}
          >
            U
          </Button>
        );
      }}
    />
  );
};

export const CustomUnorderedListTool = () => {
  return (
    <UnorderedListTool
      renderButton={({ onChange, active }) => {
        return (
          <Button
            onClick={() => {
              onChange?.();
            }}
            color={active ? 'primary' : 'default'}
          >
            UL
          </Button>
        );
      }}
    />
  );
};

export const CustomOrderedListTool = () => {
  return (
    <OrderedListTool
      renderButton={({ onChange, active }) => {
        return (
          <Button
            onClick={() => {
              onChange?.();
            }}
            color={active ? 'primary' : 'default'}
          >
            OL
          </Button>
        );
      }}
    />
  );
};

export const CustomLinkTool = () => {
  return (
    <LinkTool
      renderButton={({ onChange, active }) => {
        return (
          <Button
            onClick={() => {
              onChange?.();
            }}
            color={active ? 'primary' : 'default'}
          >
            Link
          </Button>
        );
      }}
    />
  );
};

export const CustomCodeBlockTool = () => {
  return (
    <CodeBlockTool
      renderButton={({ onChange, active }) => {
        return (
          <Button
            onClick={() => {
              onChange?.();
            }}
            color={active ? 'primary' : 'default'}
          >
            CodeBlock
          </Button>
        );
      }}
    />
  );
};

export const CustomInlineCodeTool = () => {
  return (
    <CodeTool
      renderButton={({ onChange, active }) => {
        return (
          <Button
            onClick={() => {
              onChange?.();
            }}
            color={active ? 'primary' : 'default'}
          >
            Code
          </Button>
        );
      }}
    />
  );
};

export const CustomAlignTool = () => {
  const alignments = ['left', 'center', 'right', 'justify'] as const;

  return (
    <TextAlignTool
      renderButton={({ onChange, active }) => {
        return (
          <Button
            onClick={() => {
              const currentIndex = alignments.indexOf(active);
              const nextIndex = (currentIndex + 1) % alignments.length;
              onChange?.(alignments[nextIndex]!);
            }}
            color={active ? 'primary' : 'default'}
            css={{
              textTransform: 'capitalize'
            }}
          >
            {active}
          </Button>
        );
      }}
    />
  );
};
