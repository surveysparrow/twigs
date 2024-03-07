import { createContext, useContext, useMemo } from 'react';
import { FloatingToolbarProperties } from './floating-toolbar';

export const FloatingToolbarContext = createContext<FloatingToolbarProperties>({
  isBold: false,
  isItalic: false,
  isUnderline: false,
  isLink: false,
  isStrikethrough: false,
  isSubscript: false,
  isSuperscript: false
});

export const useFloatingToolbarContext = <T>(
  fn: (state: FloatingToolbarProperties) => T
) => {
  const context = useContext(FloatingToolbarContext);
  const returnValue = fn(context);
  return useMemo(() => returnValue, [returnValue]);
};
