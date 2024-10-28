import { Slot } from '@radix-ui/react-slot';
import { CSS } from '@stitches/react';
import React, {
  ComponentProps, ForwardedRef, ReactNode, Ref
} from 'react';
import { config, styled } from '../stitches.config';

const defaultStyle: CSS<typeof config> = {
  color: '$neutral800',
  fontWeight: 'inherit',
  textDecoration: 'none',
  display: 'inline-block',
  '&:focus, &:active': {
    outline: 'none'
  }
};

const StyledSlot = styled(Slot, {
  ...defaultStyle
});

const StyledAnchor = styled('a', defaultStyle);

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
  const RootComp = asChild ? StyledSlot : StyledAnchor;
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
