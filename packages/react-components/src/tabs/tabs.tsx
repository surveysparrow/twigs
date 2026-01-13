import * as TabsPrimitive from '@radix-ui/react-tabs';
import { styled } from '../stitches.config';

const StyledTabs = styled(TabsPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  width: 'auto'
});

const StyledList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: 'flex'
});

const StyledTrigger = styled(TabsPrimitive.Trigger, {
  all: 'unset',
  cursor: 'pointer',
  fontFamily: 'inherit',
  backgroundColor: '$white900',
  paddingInlineStart: '$8',
  paddingInlineEnd: '$8',
  paddingTop: '$4',
  paddingBottom: '$4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$md',
  fontWeight: '$7',
  lineHeight: '$md',
  color: '$neutral800',
  userSelect: 'none',
  borderBottom: '3px solid transparent',
  '&:hover': { color: '$neutral900' },
  '&[data-state="active"]': {
    color: '$primary500',
    borderBottom: '3px solid currentColor'
  },
  '&:disabled': {
    color: '$neutral700',
    cursor: 'not-allowed'
  },
  '&:focus': {
    position: 'relative',
    $$shadowColor: '$colors$primary300',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
  }
});

const StyledContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  backgroundColor: '$white900',
  outline: 'none',
  padding: '$8'
});

export const Tabs = StyledTabs;
export const TabsList = StyledList;
export const TabsTrigger = StyledTrigger;
export const TabsContent = StyledContent;
