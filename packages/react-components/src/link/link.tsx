import { Slot } from '@radix-ui/react-slot';
import { CSS } from '@stitches/react';
import React, {
  ComponentProps, ForwardedRef, ReactNode, Ref
} from 'react';
import { config, styled } from '../stitches.config';

const defaultStyle: CSS<typeof config> = {
  color: '$neutral800',
  fontWeight: 'inherit',
  display: 'inline-block',
  '&:focus, &:active': {
    outline: 'none'
  }
};

const StyledSlot = styled(Slot, {
  ...defaultStyle
});

const StyledAnchor = styled('a', {
  ...defaultStyle,
  transition: 'color 0.2s ease',
  variants: {
    underline: {
      always: {
        textDecoration: 'underline'
      },
      none: {
        textDecoration: 'none'
      },
      hover: {
        '&:hover': {
          textDecoration: 'underline'
        }
      }
    },
    color: {
      default: {
        color: '$neutral700',
        '&:hover': {
          color: '$neutral800'
        },
        '&:focus': {
          color: '$neutral800'
        },
        '&:active': {
          color: '$neutral900'
        },
        '&:visited': {
          color: '$neutral500'
        }
      },
      primary: {
        color: '$primary500',
        '&:hover': {
          color: '$primary600'
        },
        '&:focus': {
          color: '$primary500'
        },
        '&:active': {
          color: '$primary700'
        },
        '&:visited': {
          color: '$primary400'
        }
      },
      warning: {
        color: '$warning500',
        '&:hover': {
          color: '$warning600'
        },
        '&:focus': {
          color: '$warning600'
        },
        '&:active': {
          color: '$warning700'
        },
        '&:visited': {
          color: '$warning400'
        }
      },
      error: {
        color: '$negative500',
        '&:hover': {
          color: '$negative600'
        },
        '&:focus': {
          color: '$negative600'
        },
        '&:active': {
          color: '$negative700'
        },
        '&:visited': {
          color: '$negative400'
        }
      },
      success: {
        color: '$positive500',
        '&:hover': {
          color: '$positive600'
        },
        '&:focus': {
          color: '$positive600'
        },
        '&:active': {
          color: '$positive700'
        },
        '&:visited': {
          color: '$positive400'
        }
      }
    }
  },
  defaultVariants: {
    underline: 'none',
    color: 'default'
  }
});

type BaseLinkProps = ComponentProps<typeof StyledAnchor>;

type SlotLinkProps = {
  css?: BaseLinkProps['css'];
  asChild?: boolean;
  children?: ReactNode;
};

export type LinkProps = BaseLinkProps & {
  asChild?: boolean;
};

const LinkComponent = <TProps extends LinkProps, TRef extends HTMLElement>(
  props: TProps & SlotLinkProps,
  ref: ForwardedRef<TRef>
) => {
  const { asChild, children, ...rest } = props;
  const RootComp: React.ElementType = asChild ? StyledSlot : StyledAnchor;

  return (
    <RootComp ref={ref} data-testid="link" {...rest}>
      {children}
    </RootComp>
  );
};

export const Link = React.forwardRef(LinkComponent) as <
  TProps extends LinkProps,
  TRef extends HTMLElement
>(
  p: TProps & SlotLinkProps & { ref?: Ref<TRef> }
) => React.JSX.Element;
