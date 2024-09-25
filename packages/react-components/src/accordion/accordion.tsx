import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@sparrowengg/twigs-react-icons';
import { keyframes, styled } from '../stitches.config';

const StyledChevron = styled(ChevronDownIcon, {
  color: '$neutral800',
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)'
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  border: 'none',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '$neutral900',
  backgroundColor: 'white',
  fontWeight: '$7',
  paddingInlineStart: '$8',
  paddingInlineEnd: '$8',
  paddingTop: '$2',
  paddingBottom: '$2',
  [`[data-state=open] > & ${StyledChevron}`]: {
    transform: 'rotate(180deg)'
  },
  '&:hover:not([data-disabled])': {
    backgroundColorOpacity: ['$primary500', 0.04]
  },
  '&:focus-visible': {
    outline: 'none',
    $$shadowColor: '$colors$primary300',
    outlineColor:
      'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
  }
});

const Accordion = styled(AccordionPrimitive.Root, {
  fontSize: '$sm',
  lineHeight: '$md'
});

const AccordionItem = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',
  borderBottom: '$borderWidths$xs solid $black200',
  '&:first-child': {
    marginTop: 0
  },
  '&:focus-within': {
    position: 'relative',
    zIndex: 1
  },
  '&[data-disabled]': {
    background: '$white900',
    opacity: '0.4',
    color: '$neutral800'
  }
});

const StyledHeader = styled(AccordionPrimitive.Header);

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof StyledTrigger>
>(({ children, ...props }, ref) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={ref}>
      {children}
      <StyledChevron aria-hidden />
    </StyledTrigger>
  </StyledHeader>
));

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' }
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 }
});

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  fontSize: 15,
  backgroundColor: 'white',
  paddingInlineStart: '$8',
  paddingInlineEnd: '$8',
  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`
  }
});

const StyledContentText = styled('div', {
  padding: '15px 0'
});

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof StyledContent>
>(({ children, ...props }, ref) => (
  <StyledContent {...props} ref={ref}>
    <StyledContentText>{children}</StyledContentText>
  </StyledContent>
));

export {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent
};
