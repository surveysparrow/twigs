import React, { useEffect, useMemo } from 'react';
import {
  theme as stichesTheme, defaultTheme, createTheme, globalStyles
} from '../../stitches.config';

export const ThemeContext = React.createContext<any>(null);
const html = typeof window !== 'undefined' && document.documentElement;

type ThemeProviderProps = {
  theme: typeof stichesTheme | {};
  children: React.ReactNode;
};

const mergeThemes = (outerTheme: any, theme: any) => {
  return { ...outerTheme, ...theme };
};

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  const mergedTheme = useMemo(
    () => mergeThemes(defaultTheme, theme),
    [defaultTheme, theme]
  );

  const customTheme = createTheme(mergedTheme);
  useEffect(() => {
    if (!html) {
      return;
    }
    html.classList.add(customTheme);
  }, [html]);

  if (!children) {
    return null;
  }

  useEffect(() => {
    globalStyles();
  }, []);

  return (
    <ThemeContext.Provider value={customTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
