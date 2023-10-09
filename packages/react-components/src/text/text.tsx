import React, { FunctionComponent, ComponentProps } from 'react';
import { styled } from '../stitches.config';

const StyledText = styled('p', {
  fontWeight: '$4',
  color: '$text',
  variants: {
    size: {
      xxs: {
        fontSize: '$xxs',
        ineHeight: '$xxs'
      },
      xs: {
        fontSize: '$xs',
        ineHeight: '$xs'
      },
      sm: {
        fontSize: '$sm',
        ineHeight: '$sm'
      },
      md: {
        fontSize: '$md',
        lineHeight: '$md'
      },
      lg: {
        fontSize: '$lg',
        lineHeight: '$lg'
      }
    },
    weight: {
      regular: {
        fontWeight: '$4'
      },
      medium: {
        fontWeight: '$5'
      },
      bold: {
        fontWeight: '$7'
      }
    },
    truncate: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }
    }
  },
  defaultVariants: {
    size: 'sm',
    weight: 'regular'
  }
});

export type TextProps = ComponentProps<typeof StyledText> &
  React.HTMLAttributes<HTMLParagraphElement> & {
    as?: React.ElementType
  } & {
    showLines?: number
  };

export const Text: FunctionComponent<TextProps> = ({
  children,
  showLines,
  css,
  ...rest
}: TextProps) => {
  return (
    <StyledText data-testid="text" {...rest} css={{
      ...css,
      ...(showLines && {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        '-webkit-line-clamp': showLines,
        '-webkit-box-orient': 'vertical'
      })
    }}>
      {children}
    </StyledText>
  );
};
