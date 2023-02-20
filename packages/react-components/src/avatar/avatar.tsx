import React, { FunctionComponent, ComponentProps } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { styled } from '../../stitches.config';
import { Box } from '../box';
import { AvatarBadge } from './avatar-badge';

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
});

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  position: 'relative',
  variants: {
    size: {
      '3xl': {
        width: '$30',
        height: '$30',
        fontSize: '$4xl',
        [`~ ${AvatarBadge}`]: {
          borderWidth: '$borderWidths$sm',
          height: '$5',
          width: '$5'
        }
      },
      '2xl': {
        width: '$18',
        height: '$18',
        fontSize: '$xl',
        [`~ ${AvatarBadge}`]: {
          borderWidth: '$borderWidths$sm',
          height: '$5',
          width: '$5'
        }
      },
      xl: {
        width: '$12',
        height: '$12',
        fontSize: '$lg',
        [`~ ${AvatarBadge}`]: {
          borderWidth: '$borderWidths$sm',
          height: '$4',
          width: '$4'
        }
      },
      lg: {
        width: '$10',
        height: '$10',
        fontSize: '$md',
        [`~ ${AvatarBadge}`]: {
          borderWidth: '$borderWidths$sm',
          height: '10px',
          width: '10px'
        }
      },
      md: {
        width: '$8',
        height: '$8',
        fontSize: '$sm',
        [`~ ${AvatarBadge}`]: {
          height: '10px',
          width: '10px'
        }
      },
      sm: {
        width: '$6',
        height: '$6',
        fontSize: '$xs',
        [`~ ${AvatarBadge}`]: {
          height: '6px',
          width: '6px'
        }
      },
      xs: {
        width: '$5',
        height: '$5',
        fontSize: '$xxs',
        [`~ ${AvatarBadge}`]: {
          height: '6px',
          width: '6px'
        }
      }
    },
    isAnonymous: {
      true: {
        border: '$borderWidths$sm dashed $colors$neutral500',
        background: '$neutral50'
      }
    },
    rounded: {
      full: {
        [`& ${StyledImage}`]: {
          borderRadius: '100%'
        }
      },
      '3xl': {
        [`& ${StyledImage}`]: {
          borderRadius: '$3xl'
        }
      },
      '2xl': {
        [`& ${StyledImage}`]: {
          borderRadius: '$2xl'
        }
      },
      xl: {
        [`& ${StyledImage}`]: {
          borderRadius: '$xl'
        }
      },
      lg: {
        [`& ${StyledImage}`]: {
          borderRadius: '$lg'
        }
      },
      md: {
        [`& ${StyledImage}`]: {
          borderRadius: '$md'
        }
      },
      sm: {
        [`& ${StyledImage}`]: {
          borderRadius: '$md'
        }
      },
      xs: {
        [`& ${StyledImage}`]: {
          borderRadius: '$lg'
        }
      }
    }
  },
  compoundVariants: [
    {
      size: '3xl',
      rounded: 'full',
      css: {
        [`~ ${AvatarBadge}`]: {
          transform: 'translate(-40%, -10%)'
        }
      }
    }
  ],
  defaultVariants: {
    size: 'sm',
    rounded: 'full'
  }
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$tertiary200',
  color: '$neutral600',
  lineHeight: '$xs',
  fontWeight: '$7'
});

const getFallbackInitials = (name: string): string => {
  const [firstName, lastName] = name.split(' ');
  return `${firstName ? firstName.charAt(0).toUpperCase() : ''}${lastName ? lastName.charAt(0).toUpperCase() : ''}`;
};

export interface AvatarBaseProps {
  src?: string,
  fallbackDelay?: number,
  name?: string
}

type AvatarProps = AvatarBaseProps & ComponentProps<typeof StyledAvatar>

export const Avatar: FunctionComponent<AvatarProps> = React.forwardRef(
  ({
    fallbackDelay = 3000, name, src, children, ...rest
  }: AvatarProps, ref) => {
    return (
      <Box
        css={{
          position: 'relative',
          height: 'fit-content',
          width: 'fit-content'
        }}
      >
        <StyledAvatar {...rest} ref={ref}>
          <StyledImage src={src} alt={name} />
          <StyledFallback delayMs={fallbackDelay}>
            {name ? getFallbackInitials(name) : null}
          </StyledFallback>
        </StyledAvatar>
        {children && children}
      </Box>
    );
  }
);
