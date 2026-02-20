"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@sparrowengg/twigs-react";
import { ForwardArrowIcon } from "@sparrowengg/twigs-react-icons";
import Image, { StaticImageData } from "next/image";
import autocomplete from "@/assets/images/autocomplete-new.png";
import docs from "@/assets/images/docs-new.png";
import color from "@/assets/images/color-swatch-new.png";
import { useTabIndicator } from "../hooks";
import externalLink from "@/assets/images/arrow-icon.png";

const INTELLISENSE_URL = "https://marketplace.visualstudio.com/items?itemName=SurveySparrow.twigs-intellisense";

interface HoverImageProps {
  src: StaticImageData;
  alt: string;
}

const HoverImage = ({ src, alt }: HoverImageProps) => {
  return (
    <a
      href={INTELLISENSE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block group cursor-pointer rounded-t-2xl"
    >
      <Image
        src={src}
        alt={alt}
        className="rounded-b-2xl md:rounded-b-none rounded-t-2xl h-[250px] lg:h-[455px] transition-transform duration-300 object-cover p-3 md:p-0 bg-[#D6F2FF]" 
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 group-focus-visible:bg-black/50 transition-all duration-300 flex items-center justify-center md:rounded-t-2xl">
        <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
          <span className="text-white text-xl font-semibold tracking-tight">
            Go to Intellisense
          </span>
          <span className="text-white transition-transform duration-300 rotate-[-45deg]">
            <ForwardArrowIcon size={28} color="currentColor" />
          </span>
        </div>
      </div>
    </a>
  );
};

const TAB_ORDER = ["autocomplete", "docs", "color"] as const;

const Intellisense = () => {
  const [activeTab, setActiveTab] = useState("autocomplete");
  const tabsListRef = useRef<HTMLDivElement>(null);
  const prevTabRef = useRef<string>("autocomplete");

  // Use the shared hook with mobile width adjustment of 5px
  useTabIndicator({
    containerRef: tabsListRef,
    activeTab,
    mobileWidthAdjustment: 5,
  });

  // Smart auto-scroll: hints at adjacent tabs based on navigation direction
  useEffect(() => {
    const list = tabsListRef.current;
    if (!list) return;

    const isScrollable = list.scrollWidth > list.clientWidth;
    if (!isScrollable) {
      prevTabRef.current = activeTab;
      return;
    }

    const prevTab = prevTabRef.current;
    const prevIndex = TAB_ORDER.indexOf(prevTab as typeof TAB_ORDER[number]);
    const currentIndex = TAB_ORDER.indexOf(activeTab as typeof TAB_ORDER[number]);

    const tabsListElement = list.querySelector('[role="tablist"]') as HTMLElement;
    if (!tabsListElement) {
      prevTabRef.current = activeTab;
      return;
    }

    const allButtons = Array.from(tabsListElement.querySelectorAll('[role="tab"]')) as HTMLElement[];
    if (allButtons.length !== 3) {
      prevTabRef.current = activeTab;
      return;
    }

    const getButtonPosition = (btn: HTMLElement) => {
      return btn.offsetLeft + (tabsListElement.offsetLeft || 0);
    };

    const maxScroll = list.scrollWidth - list.clientWidth;

    // Middle tab (docs) - scroll based on navigation direction
    if (currentIndex === 1) {
      if (prevIndex === 0) {
        // Coming from first tab → scroll left to peek at third tab
        const thirdButton = allButtons[2];
        const thirdButtonRight = getButtonPosition(thirdButton) + thirdButton.offsetWidth;
        // Scroll to show part of the third tab
        const targetScroll = Math.min(maxScroll, thirdButtonRight - list.clientWidth + 20);
        list.scrollTo({
          left: Math.max(0, targetScroll),
          behavior: "smooth",
        });
      } else if (prevIndex === 2) {
        // Coming from third tab → scroll right to peek at first tab
        const firstButton = allButtons[0];
        const firstButtonLeft = getButtonPosition(firstButton);
        // Scroll to show part of the first tab
        list.scrollTo({
          left: Math.max(0, firstButtonLeft - 20),
          behavior: "smooth",
        });
      }
    }
    // First tab - scroll to start to ensure it's fully visible
    else if (currentIndex === 0) {
      list.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
    // Third tab - scroll to end to ensure it's fully visible
    else if (currentIndex === 2) {
      list.scrollTo({
        left: maxScroll,
        behavior: "smooth",
      });
    }

    prevTabRef.current = activeTab;
  }, [activeTab]);

  return (
    <div className="bg-[#D6F2FF] mx-6 lg:mx-20 2xl:mx-0 rounded-2xl pt-10">
      <div className="flex flex-col gap-4 max-w-[550px] md:mx-auto mx-6 mb-10">
        <h2 className="text-[30px] lg:text-[48px]/[56px] font-[800] text-center text-neutral-900 tracking-[-1.2px]">
          Twigs IntelliSense
        </h2>
        <p className="text-center text-base md:text-[20px]/[28px] text-slate-500 break-words tracking-[-0.08px] font-[300]">
          Twigs IntelliSense boosts VS Code productivity with autocomplete, docs
          access, and color swatches.
          <span className="cursor-pointer underline block lg:hidden flex items-center justify-center" onClick={() => window.open(INTELLISENSE_URL, "_blank")}>{" "}Explore the Extension<Image src={externalLink} alt="external link" width={18} height={16} /> </span>
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <Tabs
          defaultValue="autocomplete"
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex flex-col gap-6 items-center justify-center lg:mx-0"
        >
        <div className="w-full flex items-center justify-center">
            <div
              ref={tabsListRef}
              className="flex overflow-scroll md:overflow-visible rounded-[999px] w-[80vw] md:w-fit !px-1.5 py-1 intellisense-tabs-list-container border border-slate-300"
              style={{
                scrollbarWidth: "none",
                position: "relative",
              }}
            >
              <TabsList
                aria-label="intellisense tabs"
                className="flex"
                style={{ position: "relative", width: "100%" }}
              >
                <TabsTrigger
                  value="autocomplete"
                  className="!text-sm intellisense-tabs !rounded-lg"
                  css={{
                    '&:focus-visible': {
                      borderRadius: '999px !important',
                    },
                  }}
                >
                  {" "}
                  <div className="mr-1 md:mr-0">Autocomplete</div>
                </TabsTrigger>
                <TabsTrigger
                  value="docs"
                  className="!text-sm intellisense-tabs !rounded-md"
                  css={{
                    '&:focus-visible': {
                      borderRadius: '999px !important',
                    },
                  }}
                >
                  <div className="text-nowrap">Access Twigs Docs</div>
                </TabsTrigger>
                <TabsTrigger
                  value="color"
                  className="!text-sm intellisense-tabs !rounded-md"
                  css={{
                    '&:focus-visible': {
                      borderRadius: '999px !important',
                    },
                  }}
                >
                  <div className="text-nowrap">Color Preview</div>
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
          <TabsContent
            value="autocomplete"
            className="!p-0 rounded-t-2xl max-w-[733px]"
            tabIndex={-1}
          >
            <HoverImage src={autocomplete} alt="autocomplete" />
          </TabsContent>
          <TabsContent
            value="docs"
            className="!p-0 rounded-t-2xl max-w-[733px]"
            tabIndex={-1}
          >
            <HoverImage src={docs} alt="docs" />
          </TabsContent>
          <TabsContent
            value="color"
            className="!p-0 rounded-t-2xl max-w-[733px]"
            tabIndex={-1}
          >
            <HoverImage src={color} alt="color" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Intellisense;
