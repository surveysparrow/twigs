import { createContext, useContext, useMemo } from 'react';
import { ToolbarProperties } from './toolbar';

export const ToolbarContext = createContext<ToolbarProperties>({
  isBold: false,
  isItalic: false,
  isUnderline: false,
  isOrderedList: false,
  isUnOrderedList: false,
  isLink: false,
  format: 'paragraph'
});

export const useToolbarContext = <T>(fn: (state: ToolbarProperties) => T) => {
  const context = useContext(ToolbarContext);
  const returnValue = fn(context);
  return useMemo(() => returnValue, [returnValue]);
};
