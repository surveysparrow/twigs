import React, { ComponentProps } from 'react';
import { styled } from '../stitches.config';

const StyledText = styled('p', {
  fontWeight: '$4',
  color: '$text',
  variants: {
    size: {
      xxs: {
        fontSize: '$xxs',
        lineHeight: '$xxs'
      },
      xs: {
        fontSize: '$xs',
        lineHeight: '$xs'
      },
      sm: {
        fontSize: '$sm',
        lineHeight: '$sm'
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
        whiteSpace: 'nowrap'
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
    as?: React.ElementType;
  } & {
    showLines?: number;
  };

export const Text = React.forwardRef<
  React.ElementRef<typeof StyledText>,
  TextProps
>(({
  children, showLines, css, ...rest
}, ref) => {
  return (
    <StyledText
      data-testid="text"
      {...rest}
      ref={ref}
      css={{
        ...css,
        ...(showLines && {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          '-webkit-line-clamp': showLines,
          '-webkit-box-orient': 'vertical'
        })
      }}
    >
      {children}
    </StyledText>
  );
});
