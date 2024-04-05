import React, { FunctionComponent } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { CSS } from '@stitches/react';
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

const StyledSlot = styled(Slot);

export const Link: FunctionComponent<LinkProps> = React.forwardRef(
  ({ children, css, asChild, ...rest }: LinkProps, ref) => {
    const RootComp = asChild ? StyledSlot : Box;
    return (
      <RootComp
        ref={ref}
        as="a"
        css={{
          ...defaultStyle,
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
