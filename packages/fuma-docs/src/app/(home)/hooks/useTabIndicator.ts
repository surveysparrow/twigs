"use client";
import { useEffect, useCallback, RefObject } from "react";

interface TabIndicatorOptions {
  containerRef: RefObject<HTMLDivElement | null>;
  activeTab: string;
  cssVarPrefix?: string;
  mobileWidthAdjustment?: number;
}

/**
 * Custom hook for managing tab indicator position
 * Eliminates duplicate tab indicator logic across components
 */
export function useTabIndicator({
  containerRef,
  activeTab,
  cssVarPrefix = "tab-selection",
  mobileWidthAdjustment = 0,
}: TabIndicatorOptions) {
  const updateIndicator = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeButton = container.querySelector(
      `button[data-state="active"], [role="tab"][aria-selected="true"]`
    ) as HTMLElement;

    if (!activeButton) {
      container.style.setProperty(`--${cssVarPrefix}-x`, "0");
      container.style.setProperty(`--${cssVarPrefix}-width`, "0");
      return;
    }

    const tabsListElement = activeButton.closest(
      '[role="tablist"]'
    ) as HTMLElement;
    if (!tabsListElement) return;

    const x = activeButton.offsetLeft + (tabsListElement.offsetLeft || 0);
    
    // Apply mobile width adjustment if provided and on mobile viewport
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const widthAdjustment = isMobile ? mobileWidthAdjustment : 0;
    const width = activeButton.offsetWidth - widthAdjustment;
    
    container.style.setProperty(`--${cssVarPrefix}-x`, `${x}`);
    container.style.setProperty(`--${cssVarPrefix}-width`, `${width}`);
  }, [containerRef, cssVarPrefix, mobileWidthAdjustment]);

  useEffect(() => {
    const timer = setTimeout(updateIndicator, 10);
    return () => clearTimeout(timer);
  }, [activeTab, updateIndicator]);

  return { updateIndicator };
}

