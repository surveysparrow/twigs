"use client";

import React, { useRef } from "react";
import { useServerInsertedHTML } from "next/navigation";
import {
  getCssText,
  createTheme,
  defaultTheme,
} from "@sparrowengg/twigs-react";
import type { ReactNode } from "react";

// Merge themes function (same logic as ThemeProvider)
const mergeThemes = (
  outerTheme: typeof defaultTheme,
  theme: Partial<typeof defaultTheme>
) => {
  return { ...outerTheme, ...theme };
};

const homePageTheme = mergeThemes(defaultTheme, {
  fonts: {
    body: "tenon, sans-serif",
    heading: "tenon, sans-serif",
  },
});

interface StitchesRegistryProps {
  children: ReactNode;
  isHomePage?: boolean;
}

export default function StitchesRegistry({
  children,
  isHomePage = false,
}: StitchesRegistryProps) {
  const styleInsertedRef = useRef<boolean>(false);
  const themeCreatedRef = useRef<boolean>(false);
  const themeClassNameRef = useRef<string | null>(null);

  useServerInsertedHTML(() => {
    // Only inject styles on the home page
    if (!isHomePage) {
      return null;
    }

    if (styleInsertedRef.current) {
      return null;
    }
    styleInsertedRef.current = true;

    try {
      // CRITICAL: Call globalStyles() FIRST, then create theme, then getCssText()
      // This ensures globalStyles and theme CSS are included in getCssText() output
      // if (isHomePage) {
      //   globalStyles();
      // }

      if (!themeCreatedRef.current) {
        const themeClassName = createTheme(homePageTheme);
        themeClassNameRef.current = themeClassName;
        themeCreatedRef.current = true;
      }

      const cssText = getCssText();

      if (!cssText || cssText.trim().length === 0) {
        // Reset refs on error to allow retry
        styleInsertedRef.current = false;
        return null;
      }

      // Apply theme class to HTML via inline script
      const themeClassName = themeClassNameRef.current;

      return (
        <>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: cssText }}
            suppressHydrationWarning
          />
          {themeClassName && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function() {
                    const html = document.documentElement;
                    const themeClass = '${themeClassName}';
                    if (!html.classList.contains(themeClass)) {
                      html.classList.add(themeClass);
                    }
                  })();
                `,
              }}
              suppressHydrationWarning
            />
          )}
        </>
      );
    } catch (error) {
      console.error("Failed to inject Stitches styles:", error);
      // Reset refs on error to allow retry
      styleInsertedRef.current = false;
      return null;
    }
  });

  // Apply theme class on client-side as well (backup) - only on home page
  React.useEffect(() => {
    if (!isHomePage) {
      return;
    }

    if (typeof window !== "undefined" && themeClassNameRef.current) {
      const html = document.documentElement;
      const themeClassName = themeClassNameRef.current;
      if (!html.classList.contains(themeClassName)) {
        html.classList.add(themeClassName);
      }
    }

    return () => {
      styleInsertedRef.current = false;
    };
  }, [isHomePage]);

  return <>{children}</>;
}
