import React, {
  ReactNode, ComponentProps, ReactElement, createContext, useContext
} from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Flex } from '../flex';
import { styled, keyframes } from '../stitches.config';

const ChevronRightIcon = () => {
  return (
    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.33325 8.33332L4.66658 4.99999L1.33325 1.66666" stroke="#6A6A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

type DropdownContextType = {
  size: 'md' | 'sm'
}

const DropdownContext = createContext<DropdownContextType>({
  size: 'md' // Default Value
});

const DropdownProvider = ({ children, size }: { children: ReactNode, size: 'md' | 'sm' }) => {
  return (
    <DropdownContext.Provider value={{ size }}>
      {children}
    </DropdownContext.Provider>
  );
};

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' }
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' }
});

const itemStyles = {
  all: 'unset',
  color: '$neutral900',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    background: '$white900',
    opacity: '0.4',
    color: '$neutral800',
    pointerEvents: 'none'
  },

  '&[data-highlighted]': {
    backgroundColorOpacity: ['$secondary500', 0.06],
    color: '$neutral900'
  }
};

const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });

const mediumItemStyles = {
  fontSize: '$md',
  lineHeight: '$md',
  padding: '$4 $6'
};

const smallItemStyles = {
  fontSize: '$sm',
  lineHeight: '$sm',
  padding: '$3 $6'
};

const StyledArrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: 'white'
});

const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, {
  ...itemStyles
});
const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem, {
  ...itemStyles
});
const StyledSubTrigger = styled(DropdownMenuPrimitive.SubTrigger, {
  '&[data-state="open"]': {
    backgroundColor: '$neutral50',
    color: '$neutral900'
  },
  ...itemStyles
});

const StyledSubTriggerIcon = styled(Flex, {
  alignItems: 'center',
  marginLeft: 'auto',
  paddingInlineStart: '$10',
  color: 'CurrentColor',
  '[data-disabled] &': { color: 'CurrentColor' }
});

type SubTriggerProps = ComponentProps<typeof StyledSubTrigger> & {
  children: ReactNode;
  icon?: ReactElement;
};

const SubTrigger = ({ children, icon }: SubTriggerProps) => {
  return (
    <StyledSubTrigger>
      {children}
      <StyledSubTriggerIcon>
        {icon ? React.cloneElement(icon) : <ChevronRightIcon />}
      </StyledSubTriggerIcon>
    </StyledSubTrigger>
  );
};

const StyledLabel = styled(DropdownMenuPrimitive.Label, {
  padding: '$4 $6',
  fontSize: '$xs',
  fontWeight: '$7',
  lineHeight: '$xs',
  color: '$accent700',
  textTransform: 'uppercase'
});

const StyledSeparator = styled(DropdownMenuPrimitive.Separator, {
  height: 1,
  backgroundColor: '$neutral100',
  margin: '$2 0'
});

const StyledItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const contentStyles = {
  minWidth: 234,
  backgroundColor: 'white',
  padding: '$6 0',
  borderRadius: '$lg',
  boxShadow: '$sm',
  border: '$borderWidths$xs solid $colors$neutral300',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade }
    }
  },
  variants: {
    size: {
      sm: {
        [`& ${StyledItem}`]: smallItemStyles,
        [`& ${StyledCheckboxItem}`]: smallItemStyles,
        [`& ${StyledRadioItem}`]: smallItemStyles,
        [`& ${StyledSubTrigger}`]: smallItemStyles
      },
      md: {
        [`& ${StyledItem}`]: mediumItemStyles,
        [`& ${StyledCheckboxItem}`]: mediumItemStyles,
        [`& ${StyledRadioItem}`]: mediumItemStyles,
        [`& ${StyledSubTrigger}`]: mediumItemStyles
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
};

const StyledSubContent = styled(DropdownMenuPrimitive.SubContent, {
  ...contentStyles
});

const SubContent = (props) => {
  const size = useContext(DropdownContext);
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledSubContent {...props} {...size} />
    </DropdownMenuPrimitive.Portal>
  );
};

const StyledContent = styled(DropdownMenuPrimitive.Content, {
  ...contentStyles
});

type ContentProps = ComponentProps<typeof StyledContent> & {
  children: ReactNode,
  showArrow?: boolean
}

const Content = ({ children, showArrow, ...props }: ContentProps) => {
  const size = useContext(DropdownContext);
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledContent {...props} {...size}>
        {children}
        {showArrow && <StyledArrow />}
      </StyledContent>
    </DropdownMenuPrimitive.Portal>
  );
};

type DropdownRootProps = {
  children : ReactNode,
  size: 'sm' | 'md'
}

const DropdownRoot = ({ children, ...props }:DropdownRootProps) => {
  return (
    <DropdownProvider size={props.size}>
      <DropdownMenuPrimitive.Root {...props}>
        {children}
      </DropdownMenuPrimitive.Root>
    </DropdownProvider>
  );
};

export const DropdownMenu = DropdownRoot;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = Content;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuCheckboxItem = StyledCheckboxItem;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuRadioItem = StyledRadioItem;
export const DropdownMenuItemIndicator = StyledItemIndicator;
export const DropdownMenuLabel = StyledLabel;
export const DropdownMenuSeparator = StyledSeparator;
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;
export const DropdownMenuSubTrigger = SubTrigger;
export const DropdownMenuSubContent = SubContent;
