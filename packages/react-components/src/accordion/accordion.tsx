import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@sparrowengg/twigs-react-icons';
import { keyframes, styled } from '../stitches.config';

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
  '&:hover:not([data-disabled])': {
    backgroundColorOpacity: ['$primary500', 0.04]
  },
  '&:focus-visible': {
    outline: 'none',
    $$shadowColor: '$colors$primary300',
    outlineColor:
      'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
  },
  '&[data-disabled]': {
    cursor: 'not-allowed'
  }
});

const Accordion = styled(AccordionPrimitive.Root, {
  fontSize: '$sm',
  lineHeight: '$md',
  variants: {
    dir: {
      ltr: {
        direction: 'ltr'
      },
      rtl: {
        direction: 'rtl'
      }
    }
  }
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
    opacity: '0.4'
  }
});

const StyledHeader = styled(AccordionPrimitive.Header);

type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof StyledTrigger
> & {
  expandIcon?: React.ReactNode;
  animateExpandIcon?: boolean;
};

const IconWrapper = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  color: '$neutral800',
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',

  variants: {
    animate: {
      true: {
        [`${StyledTrigger}[data-state="open"] &`]: {
          transform: 'rotate(180deg)'
        }
      },
      false: {
        [`${StyledTrigger}[data-state="open"] &`]: {
          transform: 'none'
        }
      }
    }
  },

  defaultVariants: {
    animate: true
  }
});

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({
  children, expandIcon, animateExpandIcon, ...props
}, ref) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={ref}>
      {children}
      <IconWrapper animate={animateExpandIcon} aria-hidden="true">
        {expandIcon ?? <ChevronDownIcon />}
      </IconWrapper>
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
  React.ComponentPropsWithoutRef<typeof StyledContent> & {
    children: React.ReactNode;
  }
>(({ children, ...props }, ref) => (
  <StyledContent {...props} ref={ref}>
    <StyledContentText>{children}</StyledContentText>
  </StyledContent>
));

export {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent
};
