import React, { FunctionComponent } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { styled } from '@stitches/react';
import { Box, BoxProps } from '../box';

type LinkProps = BoxProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    asChild?: boolean;
  };

const defaultStyle = {
  color: '$link',
  fontWeight: 'inherit',
  textDecoration: 'none',
  display: 'inline-block',
  backgroundColor: '$colors$neutral800',
  '&:focus, &:active': {
    outline: 'none'
  }
};

const StyledSlot = styled(Slot, {
  ...defaultStyle
});

function getStyledComp(Comp: any) {
  return styled(Comp, {
    ...defaultStyle
  });
}

export const Link: FunctionComponent<LinkProps> = React.forwardRef(
  ({ children, css, asChild, ...rest }: LinkProps, ref) => {
    const StyledChildren = getStyledComp((children as any).type);
    const RootComp = asChild ? StyledChildren : Box;
    console.log({ StyledChildren, StyledSlot });
    return (
      <RootComp
        ref={ref}
        {...(!asChild && { as: 'a' })}
        css={{
          ...(!asChild && {
            ...defaultStyle
          }),
          ...css
        }}
        tabIndex={0}
        data-testid="link"
        {...rest}
        {...(asChild && (children as any).props)}
      >
        {!asChild ? children : (children as any).props.children}
      </RootComp>
    );
  }
);
