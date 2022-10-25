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
        borderRadius: '$3xl'
      },
      '2xl': {
        width: '$18',
        height: '$18',
        borderRadius: '$2xl'
      },
      xl: {
        width: '$12',
        height: '$12',
        borderRadius: '$xl'
      },
      lg: {
        width: '$10',
        height: '$10',
        borderRadius: '$lg'
      },
      md: {
        width: '$8',
        height: '$8',
        borderRadius: '$md'
      },
      sm: {
        width: '$6',
        height: '$6',
        borderRadius: '$md'
      },
      xs: {
        width: '$5',
        height: '$5',
        borderRadius: '$lg'
      },
      xxs: {
        width: '$4',
        height: '$4',
        borderRadius: '$xl'
      }
    },
    isAnonymous: {
      true: {
        border: '$borderWidths$sm dashed $colors$neutral500',
        background: '$neutral50'
      }
    }
  },
  defaultVariants: {
    size: 'sm'
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
  fontSize: '$md',
  lineHeight: '$xs',
  fontWeight: '$7'
});

const getFallbackInitials = (name: string): string => {
  const [firstName, lastName] = name.split(' ');
  return `${firstName ? firstName.charAt(0).toUpperCase() : ''}${lastName ? lastName.charAt(0).toUpperCase() : ''}`;
};

export interface AvatarBaseProps {
  src: string,
  fallbackDelay: number,
  name: string
}

type AvatarProps = AvatarBaseProps & ComponentProps<typeof StyledAvatar>

export const Avatar: FunctionComponent<AvatarProps> = React.forwardRef(
  ({
    src, fallbackDelay, name, ...rest
  }: AvatarProps) => {
    return (
      <StyledAvatar {...rest}>
        <StyledImage src={src} alt={name} />
        <StyledFallback delayMs={fallbackDelay}>
          {name ? getFallbackInitials(name) : null}
        </StyledFallback>
      </StyledAvatar>
    );
  }
);
