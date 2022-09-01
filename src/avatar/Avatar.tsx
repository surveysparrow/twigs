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
  backgroundColor: '$black900',
  variants: {
    size: {
      xxxl: {
        width: '$30',
        height: '$30',
        borderRadius: '$3xl',
      },
      xxl: {
        width: '$18',
        height: '$18',
        borderRadius: '$2xl',
      },
      xl: {
        width: '$12',
        height: '$12',
        borderRadius: '$xl',
      },
      lg: {
        width: '$10',
        height: '$10',
        borderRadius: '$lg',
      },
      md: {
        width: '$8',
        height: '$8',
        borderRadius: '$md',
      },
      sm: {
        width: '$6',
        height: '$6',
        borderRadius: '$md',
      },
      xs: {
        width: '$5',
        height: '$5',
        borderRadius: '$lg',
      },
      xxs: {
        width: '$4',
        height: '$4',
        borderRadius: '$xl',
      },
    },
  },
  defaultVariants: {
    size: 'sm',
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
  backgroundColor: '$white900',
  color: '$violet700',
  fontSize: '$md',
  lineHeight: '$xs',
  fontWeight: '$5',
});

export const Avatar = StyledAvatar;
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;
