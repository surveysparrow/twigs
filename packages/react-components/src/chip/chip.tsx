import React, { ComponentProps, FunctionComponent, ReactNode } from 'react';
import { styled } from '../../stitches.config';
import { Box, BoxProps } from '../box';
import { Button } from '../button';

const CloseIcon = () => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L9 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 1L1 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const StyledChip = styled(Box, {
  display: 'inline-flex',
  flexShrink: '0',
  alignItems: 'center',
  borderRadius: '$sm',
  gap: '$2',
  outline: 'none',
  '&:focus-visible': {
    $$shadowColor: '$colors$system300',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
  },
  variants: {
    size: {
      lg: {
        height: '$8',
        padding: '$3 $4',
        fontSize: '$sm',
        fontWeight: '$4',
        lineHeight: '$sm'
      },
      md: {
        height: '$6',
        padding: '$2 $4',
        fontSize: '$xs',
        fontWeight: '$4',
        lineHeight: '$xs'
      },
      sm: {
        height: '$5',
        padding: '$1 $3',
        fontSize: '$xs',
        fontWeight: '$4',
        lineHeight: '$xs'
      },
      xs: {
        height: '$4',
        padding: '$1 $3',
        fontSize: '$xxs',
        fontWeight: '$5',
        lineHeight: '$xxs',
        '& .icon': {
          display: 'none'
        }
      }
    },
    color: {
      primary: {
        background: '$primary',
        color: '$white900',
        border: '$borderWidths$xs solid $colors$black300'
      },
      info: {
        background: '$info500',
        color: '$white900',
        border: '$borderWidths$xs solid $colors$black300'
      }
    },
    isRounded: {
      true: {
        borderRadius: '$pill'
      }
    }
  }
});

export interface ChipBaseProps {
  closable?: boolean;
  children?: ReactNode;
  onClose?: () => void
}

export type ChipProps = ChipBaseProps & ComponentProps<typeof StyledChip> & BoxProps

export const Chip: FunctionComponent<ChipProps> = React.forwardRef(
  ({
    color, closable, children, onClose, ...props
  }: ChipProps, ref) => {
    return (
      <StyledChip
        ref={ref}
        data-testid="chip"
        tabIndex={0}
        color={color}
        {...props}
      >
        {children}
        {closable && (
          <Button
            className="icon"
            size="xxs"
            isTransparent
            isIcon
            icon={<CloseIcon />}
            css={{
              color: '$white900',
              background: '$white200',
              borderRadius: '$round',
              marginInlineStart: '$2',
              '&:hover, &:focus': {
                background: '$white300'
              },
              '&:active': {
                background: '$white200'
              }
            }}
            {...(onClose && { onClick: onClose })}
          />
        )}
      </StyledChip>
    );
  }
);
