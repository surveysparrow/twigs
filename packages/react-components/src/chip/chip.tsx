import React, { ComponentProps, FunctionComponent, ReactNode } from 'react';
import { styled } from '../../stitches.config';
import { Box, BoxProps } from '../box';
import { IconButton } from '../button';

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

const StyledCloseButton = styled(IconButton, {});

const StyledChip = styled(Box, {
  display: 'inline-flex',
  flexShrink: '0',
  alignItems: 'center',
  gap: '$2',
  outline: 'none',
  '&:focus-visible': {
    $$shadowColor: '$colors$primary300',
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
        lineHeight: '$xs',
        [`& ${StyledCloseButton}`]: {
          height: '$3',
          width: '$3'
        },
        [`& ${StyledCloseButton} svg`]: {
          height: '6px',
          width: '6px'
        }
      },
      sm: {
        height: '$5',
        padding: '$1 $3',
        fontSize: '$xs',
        fontWeight: '$4',
        lineHeight: '$xs',
        [`& ${StyledCloseButton}`]: {
          height: '$3',
          width: '$3'
        },
        [`& ${StyledCloseButton} svg`]: {
          height: '6px',
          width: '6px'
        }
      },
      xs: {
        height: '$4',
        padding: '$1 $3',
        fontSize: '$xxs',
        fontWeight: '$5',
        lineHeight: '$xxs',
        [`& ${StyledCloseButton}`]: {
          marginInlineStart: '$1',
          height: '$2',
          width: '$2'
        },
        [`& ${StyledCloseButton} svg`]: {
          height: '$1',
          width: '$1'
        }
      }
    },
    color: {
      default: {
        background: '$black100',
        color: '$neutral900',
        [`& ${StyledCloseButton}`]: {
          background: '$black400'
        }
      },
      primary: {
        background: '$primary200',
        color: '$primary900',
        [`& ${StyledCloseButton}`]: {
          background: '$primary900'
        }
      },
      error: {
        background: '$error200',
        color: '$error700',
        [`& ${StyledCloseButton}`]: {
          background: '$error700'
        }
      },
      warning: {
        background: '$warning100',
        color: '$warning900',
        [`& ${StyledCloseButton}`]: {
          background: '$warning900'
        }
      },
      success: {
        background: '$positive200',
        color: '$positive700',
        [`& ${StyledCloseButton}`]: {
          background: '$positive700'
        }
      }
    },
    rounded: {
      sm: {
        borderRadius: '$sm'
      },
      full: {
        borderRadius: '$pill'
      }
    },
    variant: {
      outline: {
        background: '$white900'
      },
      solid: {
        unset: 'none'
      }
    }
  },
  compoundVariants: [
    {
      color: 'default',
      variant: 'outline',
      css: {
        background: '$white900',
        border: '$borderWidths$xs solid $colors$black300'
      }
    }
  ],
  defaultVariants: {
    size: 'sm',
    color: 'default',
    variant: 'solid',
    rounded: 'sm'
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
          <StyledCloseButton
            size="xxs"
            css={{
              background: 'transparent',
              borderRadius: '$round',
              marginInlineStart: '$2'
            }}
            icon={<CloseIcon />}
            {...(onClose && { onClick: onClose })}
          />
        )}
      </StyledChip>
    );
  }
);
