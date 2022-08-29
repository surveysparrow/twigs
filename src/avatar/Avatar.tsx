import React from 'react';
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
  backgroundColor: 'black',
  variants: {
    size: {
      xxxl: {
        width: 120,
        height: 120,
        borderRadius: 30,
      },
      xxl: {
        width: 72,
        height: 72,
        borderRadius: 20,
      },
      xl: {
        width: 48,
        height: 48,
        borderRadius: 15,
      },
      lg: {
        width: 40,
        height: 40,
        borderRadius: 10,
      },
      md: {
        width: 32,
        height: 32,
        borderRadius: 8,
      },
      sm: {
        width: 24,
        height: 24,
        borderRadius: 8,
      },
      xs: {
        width: 20,
        height: 20,
        borderRadius: 10,
      },
      xxs: {
        width: 16,
        height: 16,
        borderRadius: 15,
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: '$purple500',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

export const Avatar = StyledAvatar;
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;
