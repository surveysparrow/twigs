import React, { ComponentProps } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { styled } from '../stitches.config';
import { Box } from '../box';
import { AvatarBadge } from './avatar-badge';

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$neutral100',
  color: '$neutral600',
  lineHeight: '$xs',
  fontWeight: '$7'
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
      '5xl': {
        width: '$30',
        height: '$30',
        fontSize: '$4xl',
        [`~ ${AvatarBadge}`]: {
          borderWidth: '$borderWidths$sm',
          height: '$5',
          width: '$5'
        }
      },
      '4xl': {
        width: '$18',
        height: '$18',
        fontSize: '$xl',
        [`~ ${AvatarBadge}`]: {
          borderWidth: '$borderWidths$sm',
          height: '$5',
          width: '$5'
        }
      },
      '3xl': {
        width: '$16',
        height: '$16',
        fontSize: '$lg',
        [`~ ${AvatarBadge}`]: {
          borderWidth: '$borderWidths$sm',
          height: '$4',
          width: '$4'
        }
      },
      '2xl': {
        width: '$14',
        height: '$14',
        fontSize: '$lg',
        [`~ ${AvatarBadge}`]: {
          borderWidth: '$borderWidths$sm',
          height: '$4',
          width: '$4'
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
        borderRadius: '100%',
        [`& ${StyledImage}, & ${StyledFallback}`]: {
          borderRadius: '$round'
        }
      },
      '3xl': {
        borderRadius: '$3xl',
        [`& ${StyledImage}, & ${StyledFallback}`]: {
          borderRadius: '$3xl'
        }
      },
      '2xl': {
        borderRadius: '$2xl',
        [`& ${StyledImage}, & ${StyledFallback}`]: {
          borderRadius: '$2xl'
        }
      },
      xl: {
        borderRadius: '$xl',
        [`& ${StyledImage}, & ${StyledFallback}`]: {
          borderRadius: '$xl'
        }
      },
      lg: {
        borderRadius: '$lg',
        [`& ${StyledImage}, & ${StyledFallback}`]: {
          borderRadius: '$lg'
        }
      },
      md: {
        borderRadius: '$md',
        [`& ${StyledImage}, & ${StyledFallback}`]: {
          borderRadius: '$md'
        }
      },
      sm: {
        borderRadius: '$md',
        [`& ${StyledImage}, & ${StyledFallback}`]: {
          borderRadius: '$md'
        }
      },
      xs: {
        borderRadius: '$lg',
        [`& ${StyledImage}, & ${StyledFallback}`]: {
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

const getFallbackInitials = (name: string): string => {
  const [firstName, lastName] = name.split(' ');
  return `${firstName ? firstName.charAt(0).toUpperCase() : ''}${
    lastName ? lastName.charAt(0).toUpperCase() : ''
  }`;
};

export interface AvatarBaseProps {
  src?: string;
  fallbackDelay?: number;
  name?: string;
}

export type AvatarProps = AvatarBaseProps & ComponentProps<typeof StyledAvatar>;

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      fallbackDelay = 0, name, src, children, ...rest
    },
    ref
  ) => {
    return (
      <Box
        css={{
          position: 'relative',
          height: 'fit-content',
          width: 'fit-content',
          display: 'inline-block'
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
