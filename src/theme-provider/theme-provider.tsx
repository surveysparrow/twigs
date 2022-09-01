import React, { useMemo } from 'react';
import {
  theme as stichesTheme, defaultTheme, createTheme,
} from '../../stitches.config';

export const ThemeContext = React.createContext<any>(null);
const html = document.documentElement;

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
    [defaultTheme, theme],
  );

  const customTheme = createTheme(mergedTheme);
  html.classList.add(customTheme);

  if (!children) {
    return null;
  }

  return (
    <ThemeContext.Provider value={customTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
