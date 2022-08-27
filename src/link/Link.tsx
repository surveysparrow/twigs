import React, { FunctionComponent } from 'react';
import { Box, BoxProps } from '../box';

type LinkProps = BoxProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link: FunctionComponent<LinkProps> = React.forwardRef(
  ({ children, css, ...rest }: LinkProps, ref) => {
    return (
      <Box
        ref={ref}
        as="a"
        css={{
          color: 'inherit',
          fontWeight: 'inherit',
          textDecoration: 'none',
          display: 'inline-block',
          '&:focus, &:active': {
            outline: 'none',
          },
          ...css,
        }}
        tabIndex={0}
        data-testid="link"
        {...rest}
      >
        {children}
      </Box>
    );
  },
);
