import React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { styled } from '../../stitches.config';

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  boxSizing: 'border-box',
  width: '$10',
  height: '$5',
  backgroundColor: '$neutral400',
  borderRadius: '$pill',
  position: 'relative',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  transition: 'all $transitions$2',
  '&:focus-visible': {
    $$shadowColor: '$colors$system300',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
  },
  '&[data-disabled]': {
    background: '$neutral200',
    cursor: 'not-allowed',
  },
  '&[data-state="checked"]': { backgroundColor: '$secondary700' },
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: '18px',
  height: '18px',
  backgroundColor: '$white900',
  borderRadius: '$pill',
  transition: 'transform 150ms',
  transform: 'translateX(1px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(21px)' },
});

export const Switch = StyledSwitch;
export const SwitchThumb = StyledThumb;
