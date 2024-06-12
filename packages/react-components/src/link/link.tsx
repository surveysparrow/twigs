import { Slot } from '@radix-ui/react-slot';
import { CSS } from '@stitches/react';
import React from 'react';
import { config, styled } from '..';
import { Box, BoxProps } from '../box';

type LinkProps = BoxProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    asChild?: boolean;
  };

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

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({
    children, css, asChild, ...rest
  }: LinkProps, ref) => {
    const RootComp = asChild ? StyledSlot : Box;
    return (
      <RootComp
        // @ts-ignore
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
      >
        {children}
      </RootComp>
    );
  }
);
