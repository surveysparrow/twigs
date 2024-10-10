import React, { useEffect, useMemo, useRef } from 'react';
import {
  theme as stichesTheme,
  defaultTheme,
  createTheme,
  globalStyles
} from '../stitches.config';

export const ThemeContext = React.createContext<any>(null);

type ThemeProviderProps = {
  theme: typeof stichesTheme | {};
  children: React.ReactNode;
};

const mergeThemes = (outerTheme: any, theme: any) => {
  return { ...outerTheme, ...theme };
};

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  const previousTheme = useRef<string | null>(null);
  const mergedTheme = useMemo(
    () => mergeThemes(defaultTheme, theme),
    [defaultTheme, theme]
  );

  const customTheme = useRef<string | null>(null);

  useEffect(() => {
    const html = document.documentElement;
    if (previousTheme?.current) {
      html.classList.remove(previousTheme.current);
    }

    customTheme.current = createTheme(mergedTheme);
    previousTheme.current = customTheme.current;
    html.classList.add(customTheme.current);
  }, [mergedTheme]);

  if (!children) {
    return null;
  }

  useEffect(() => {
    globalStyles();
  }, []);

  return (
    <ThemeContext.Provider value={customTheme.current}>
      {children}
    </ThemeContext.Provider>
  );
};
