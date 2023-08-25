import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@sparrowengg/twigs-react-icons';
import { keyframes, styled } from '../../stitches.config';

const StyledChevron = styled(ChevronDownIcon, {
  color: '$neutral800',
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)'
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: 'unset',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '$neutral900',
  backgroundColor: 'white',
  fontWeight: '$7',
  [`[data-state=open] & ${StyledChevron}`]: {
    transform: 'rotate(180deg)'
  }
});

const Accordion = styled(AccordionPrimitive.Root, {
  variants: {
    size: {
      sm: {
        [`& ${StyledTrigger}`]: {
          height: '$10',
          fontSize: '$sm',
          lineHeight: '$md'
        }
      },
      md: {
        [`& ${StyledTrigger}`]: {
          height: '$18',
          fontSize: '$lg',
          lineHeight: '$lg'
        }
      }
    }
  },
  defaultVariants: {
    size: 'sm'
  }
});

const AccordionItem = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',
  marginTop: '$1',
  borderBottom: '$borderWidths$xs solid $black200',
  '&:first-child': {
    marginTop: 0
  },
  '&:focus-within': {
    position: 'relative',
    zIndex: 1
  }
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: 'unset',
  display: 'flex',
  paddingInlineStart: '$4',
  paddingInlineEnd: '$4',
});

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
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
  paddingInlineStart: '$4',
  paddingInlineEnd: '$4',
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
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ children, ...props }, ref) => (
  <StyledContent {...props} ref={ref}>
    <StyledContentText>{children}</StyledContentText>
  </StyledContent>
));

export {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent
};
