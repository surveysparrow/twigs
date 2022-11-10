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
        borderRadius: '$3xl',
        fontSize: '$4xl'
      },
      '2xl': {
        width: '$18',
        height: '$18',
        borderRadius: '$2xl',
        fontSize: '$xl'
      },
      xl: {
        width: '$12',
        height: '$12',
        borderRadius: '$xl',
        fontSize: '$lg'
      },
      lg: {
        width: '$10',
        height: '$10',
        borderRadius: '$lg',
        fontSize: '$md'
      },
      md: {
        width: '$8',
        height: '$8',
        borderRadius: '$md',
        fontSize: '$sm'
      },
      sm: {
        width: '$6',
        height: '$6',
        borderRadius: '$md',
        fontSize: '$xs'
      },
      xs: {
        width: '$5',
        height: '$5',
        borderRadius: '$lg',
        fontSize: '$xxs'
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
  lineHeight: '$xs',
  fontWeight: '$7'
});

const getFallbackInitials = (name: string): string => {
  const [firstName, lastName] = name.split(' ');
  return `${firstName ? firstName.charAt(0).toUpperCase() : ''}${lastName ? lastName.charAt(0).toUpperCase() : ''}`;
};

export interface AvatarBaseProps {
  src: string,
  fallbackDelay?: number,
  name?: string
}

type AvatarProps = AvatarBaseProps & ComponentProps<typeof StyledAvatar>

export const Avatar: FunctionComponent<AvatarProps> = React.forwardRef(
  ({
    fallbackDelay = 3000, name, src, ...rest
  }: AvatarProps, ref) => {
    return (
      <StyledAvatar {...rest} ref={ref}>
        <StyledImage src={src} alt={name} />
        <StyledFallback delayMs={fallbackDelay}>
          {name ? getFallbackInitials(name) : null}
        </StyledFallback>
      </StyledAvatar>
    );
  }
);
