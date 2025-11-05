'use client';

import React, { useRef } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { getCssText } from '@sparrowengg/twigs-react';
import type { ReactNode } from 'react';

export default function StitchesRegistry({ children }: { children: ReactNode }) {

  const styleInsertedRef = useRef<boolean>(false);

  useServerInsertedHTML(() => {

    if (styleInsertedRef.current) {
      return null;
    }
    styleInsertedRef.current = true;

    try {
      const cssText = getCssText();

      if (!cssText || cssText.trim().length === 0) {
        styleInsertedRef.current = false;
        return null;
      }

      return (
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: cssText }}
          suppressHydrationWarning
        />
      );
    } catch (error) {
      console.error('Failed to inject Stitches styles:', error);
      styleInsertedRef.current = false;
      return null;
    }
  });

  React.useEffect(() => {
    return () => {
      styleInsertedRef.current = false;
    };
  
  }, []);

  return <>{children}</>;
}

