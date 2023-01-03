import React, { FunctionComponent, ComponentProps } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { styled } from '../../stitches.config';

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  borderRadius: '100%',
  variants: {
    size: {
      '3xl': {
        width: '$30',
        height: '$30',
        fontSize: '$4xl'
      },
      '2xl': {
        width: '$18',
        height: '$18',
        fontSize: '$xl'
      },
      xl: {
        width: '$12',
        height: '$12',
        fontSize: '$lg'
      },
      lg: {
        width: '$10',
        height: '$10',
        fontSize: '$md'
      },
      md: {
        width: '$8',
        height: '$8',
        fontSize: '$sm'
      },
      sm: {
        width: '$6',
        height: '$6',
        fontSize: '$xs'
      },
      xs: {
        width: '$5',
        height: '$5',
        fontSize: '$xxs'
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
        borderRadius: "100%"
      },
      '3xl': {
        borderRadius: '$3xl',
      },
      '2xl': {
        borderRadius: '$2xl',
      },
      xl: {
        borderRadius: '$xl',
      },
      lg: {
        borderRadius: '$lg',
      },
      md: {
        borderRadius: '$md',
      },
      sm: {
        borderRadius: '$md',
      },
      xs: {
        borderRadius: '$lg',
      }
    }
  },
  defaultVariants: {
    size: 'sm',
    rounded: 'full'
  }
});

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
      <StyledAvatar {...rest} ref={ref}>
        {children && children}
        <div>
          <StyledImage src={src} alt={name} />
          <StyledFallback delayMs={fallbackDelay}>
            {name ? getFallbackInitials(name) : null}
          </StyledFallback>
        </div>
      </StyledAvatar>
    );
  }
);
