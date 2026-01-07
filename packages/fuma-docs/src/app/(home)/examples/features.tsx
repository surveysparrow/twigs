"use client";
import {
  Text,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Slider,
} from "@sparrowengg/twigs-react";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback, memo } from "react";
import accessibleImage from "@/assets/images/access-n.svg";
import extensibleImage from "@/assets/images/extend-n.svg";
import themableImage from "@/assets/images/theme-n.svg";
import { FeaturesSliderComponents } from "../shared";
import { FEATURES_CONFIG } from "../constants";

// Use constants from centralized config
const { CYCLE_DURATION, UPDATE_INTERVAL, FEATURES } = FEATURES_CONFIG;

// Memoized slider component to prevent unnecessary re-renders
const ProgressSlider = memo(function ProgressSlider({ progress }: { progress: number }) {
  return (
    <Slider
      components={FeaturesSliderComponents}
      className="!h-[4px]"
      value={[progress]}
      max={100}
      step={1}
      size="md"
    />
  );
});

// Empty spacer for inactive tabs
const SliderSpacer = memo(function SliderSpacer() {
  return <div className="!h-[4px]" />;
});


export default function Features() {
  const [activeTab, setActiveTab] = useState("accessible");
  const [sliderProgress, setSliderProgress] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({
    top: 0,
    height: 177,
    opacity: 1,
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "0px",
    borderTopRightRadius: "0px",
  });
  const tabsListRef = useRef<HTMLDivElement>(null);

  // Auto-cycle functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setSliderProgress((prev) => {
        const increment = (100 / CYCLE_DURATION) * UPDATE_INTERVAL;
        const newValue = prev + increment;

        if (newValue >= 100) {
          // Move to next tab
          const currentIndex = FEATURES.findIndex((f) => f.id === activeTab);
          const nextIndex = (currentIndex + 1) % FEATURES.length;
          setActiveTab(FEATURES[nextIndex].id);
          return 0; // Reset progress
        }

        return newValue;
      });
    }, UPDATE_INTERVAL);

    return () => clearInterval(interval);
  }, [activeTab]);

  // Handle manual tab change - resets progress
  const handleTabChange = useCallback((value: string) => {
    setActiveTab(value);
    setSliderProgress(0);
  }, []);

  const updateIndicator = useCallback(() => {
    const list = tabsListRef.current;
    if (!list) {
      setIndicatorStyle({ top: 0, height: 0, opacity: 0, borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px", borderTopRightRadius: "0px" });
      return;
    }

    const tabsListElement = list.querySelector(
      '[role="tablist"]'
    ) as HTMLElement;
    if (!tabsListElement) {
      setIndicatorStyle({ top: 0, height: 0, opacity: 0, borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px", borderTopRightRadius: "0px" });
      return;
    }

    const activeButton = tabsListElement.querySelector(
      `button[data-state="active"], [role="tab"][aria-selected="true"]`
    ) as HTMLElement;

    if (!activeButton) {
      setIndicatorStyle({ top: 0, height: 0, opacity: 0, borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px", borderTopRightRadius: "0px" });
      return;
    }

    const top = activeButton.offsetTop - 1;
    const height = activeButton.offsetHeight;

    // Set border radius based on active tab position
    const isFirstTab = activeTab === "accessible";
    const isThirdTab = activeTab === "themeable";
    const isMobile = window.innerWidth < 768;

    setIndicatorStyle({ 
      top, 
      height, 
      opacity: 1,
      borderTopLeftRadius: isFirstTab ? "8px" : "0px",
      borderBottomLeftRadius: isThirdTab ? "8px" : "0px",
      borderTopRightRadius: isMobile && isFirstTab ? "8px" : "0px",
    });
  }, [activeTab]);

  useEffect(() => {
    const update = () => {
      requestAnimationFrame(() => {
        updateIndicator();
      });
    };

    update();
    const timer = setTimeout(update, 50);

    const handleResize = () => {
      update();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, [activeTab, updateIndicator]);

  return (
    
    <>
      <div className="mx-6">
      <h2 className="text-slate-900 text-[30px] lg:text-[48px]/[56px] font-bold text-center mb-4 mt-10 lg:mt-25">Designed with purpose, 
        <span className="text-slate-900 text-[30px] lg:text-[46px] italic font-normal" style={{
          fontFamily: "libre baskerville",
        }}>{" "}built for scale</span>
        </h2>
        <p className="text-slate-500 text-[16px] lg:text-[20px]/[28px] w-full lg:w-[806px] mx-auto text-center font-[300] tracking-[-0.08px] mb-14">
        Every component is built with accessibility-first principles and complete customization in mind. Adapt styles, extend functionality, and scale your product effortlessly.
        </p>
      </div>

      <div className="w-full lg:w-[1044px] mx-auto px-6">
      <Tabs
          defaultValue="accessible"
          value={activeTab}
          onValueChange={handleTabChange}
          orientation="vertical"
          css={{
            flexDirection: "row",
            "@media (max-width: 1024px)": {
              flexDirection: "column",
              height: "900px !important",
            },
            "@media (max-width: 768px)": {
              height: "800px !important",
            },
            "@media (max-width: 480px)": {
              height: "700px !important",
            },
          }}
        >
          <div ref={tabsListRef} className="relative">
            <TabsList
              className="flex flex-col rounded-lg lg:w-120 h-fit"
              css={{
                position: "relative",
              }}
            >
              <TabsTrigger value="accessible" className="Features-tab flex !flex-col gap-2"
              css={{
                alignItems: "flex-start !important",
                  borderTop: "1px solid #E2E8F0",
                  borderLeft: "1px solid #E2E8F0",
                  borderBottom: "1px solid #E2E8F0 !important",
                  borderTopLeftRadius: "8px !important",
                  "&[data-state='active']": {
                    borderColor: "transparent !important",
                  },
                  transition: "border-color 0.3s ease-in-out",
                  "@media (max-width: 1024px)": {
                    borderRight: "1px solid #E2E8F0",
                    borderTopRightRadius: "8px !important",
                  },
              }}
              >
                <div className="flex flex-col gap-1 px-[16px] py-[20px] lg:px-[24px] lg:py-[20px]">
                  <Text size="lg" weight="bold" className="!text-slate-900 !text-[24px]/[32px]">
                    Accessible
                  </Text>
                  <Text size="sm" 
                  className="!text-slate-500 !text-[14px] lg:!text-[18px]/[28px] !font-normal">
                  Embrace inclusivity – Twigs&apos; components ensure every user can navigate seamlessly, better user experiences.
                  </Text>
                </div>
                {activeTab === "accessible" ? (
                    <ProgressSlider progress={sliderProgress} />
                  ): <SliderSpacer />}
              </TabsTrigger>
              <TabsTrigger value="extensible" className="Features-tab flex !flex-col gap-2"
              css={{
                alignItems: "flex-start !important",
                  borderLeft: "1px solid #E2E8F0",
                  borderBottom: "1px solid #E2E8F0 !important",
                  "&[data-state='active']": {
                    borderColor: "transparent !important",
                  },
                  transition: "border-color 0.3s ease-in-out",
                  "@media (max-width: 1024px)": {
                    borderRight: "1px solid #E2E8F0",
                  },
              }}
              >
                <div className="flex flex-col gap-1 px-[16px] py-[20px] lg:px-[24px] lg:py-[20px]">
                  <Text size="lg" weight="bold" className="!text-slate-900 !text-[24px]/[32px]">
                    Extensible
                  </Text>
                  <Text
                    size="sm"
                    className="!text-slate-500 !text-[14px] lg:!text-[18px]/[28px] !font-normal"
                  >
                    Unleash creativity – We empower you with unparalleled customization, enabling tailored designs and layouts.
                  </Text>
                  </div>
                  {activeTab === "extensible" ? (
                    <ProgressSlider progress={sliderProgress} />
                  ): <SliderSpacer />}
              </TabsTrigger>
              <TabsTrigger value="themeable" className="Features-tab flex !flex-col gap-2"
              css={{
                  alignItems: "flex-start !important",
                  borderLeft: "1px solid #E2E8F0",
                  borderBottom: "1px solid #E2E8F0 !important",
                  borderBottomLeftRadius: "8px !important",
                  "&[data-state='active']": {
                    borderColor: "transparent !important",
                  },
                  transition: "border-color 0.3s ease-in-out",
                  "@media (max-width: 1024px)": {
                    borderRight: "1px solid #E2E8F0",
                    borderBottomLeftRadius: "0px !important",
                  },
              }}
              >
                <div className="flex flex-col gap-1 px-[16px] py-[20px] lg:px-[24px] lg:py-[20px]">
                  <Text size="lg" weight="bold" className="!text-slate-900 !text-[24px]/[32px]">
                    Themeable
                  </Text>
                  <Text
                    size="sm"
                    className="!text-slate-500 !text-[14px] lg:!text-[18px]/[28px] !font-normal"
                  >
                    Elevate aesthetics – Twigs&apos; themeability empowers you to create visually stunning and consistent interfaces.
                  </Text>
                  </div>
                  {activeTab === "themeable" ? (
                    <ProgressSlider progress={sliderProgress} />
                  ): <SliderSpacer />}
              </TabsTrigger>
              <div
                className="Features-tabs-indicator"
                style={{
                  position: "absolute",
                  top: `${indicatorStyle.top}px`,
                  height: `${indicatorStyle.height}px`,
                  opacity: indicatorStyle.opacity,
                  borderTopLeftRadius: indicatorStyle.borderTopLeftRadius,
                  borderBottomLeftRadius: indicatorStyle.borderBottomLeftRadius,
                  borderTopRightRadius: indicatorStyle.borderTopRightRadius,
                  left: "0.5px",
                  right: "0px",
                  backgroundColor: "white",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 3px 4px",
                  transition:
                    "top 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955), height 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955), opacity 0.2s ease",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
            </TabsList>
          </div>
          <TabsContent value="accessible" className="Features-tab-content rounded-lg !p-0 relative w-fit">
          <div className="p-5 lg:p-10 rounded-tr-none lg:rounded-tr-lg rounded-b-lg lg:rounded-bl-none rounded-r-lg bg-linear-to-r from-[#86BFF5] to-[#27579B] w-full h-full">
              <div className="relative w-full h-full overflow-hidden rounded-lg flex items-center justify-center">
                <div className="image-slide-container">
                  <Image
                    src={accessibleImage}
                    alt="Accessible"
                    className="rounded-lg w-full lg:w-[620px] h-full "
                  />
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="extensible" className="Features-tab-content rounded-lg !p-0 w-fit">
            <div className="p-5 lg:p-10 rounded-tr-none lg:rounded-tr-lg rounded-b-lg lg:rounded-bl-none rounded-r-lg bg-linear-to-r from-[#E9CFAE] to-[#AC8859] w-full h-full">
              <div className="relative w-full h-full overflow-hidden rounded-lg flex items-center justify-center">
                <div className="image-slide-container">
                  <Image
                    src={extensibleImage}
                    alt="Extensible"
                    className="rounded-lg w-full lg:w-[620px] h-full"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="themeable" className="Features-tab-content rounded-lg !p-0 w-fit">
            <div className="p-5 lg:p-10 rounded-tr-none lg:rounded-tr-lg rounded-b-lg lg:rounded-bl-none rounded-r-lg bg-linear-to-r from-[#FFCB70] to-[#FB7D32] w-full h-full">
              <div className="relative w-full h-full overflow-hidden rounded-lg flex items-center justify-center">
                <div className="image-slide-container"> 
                  <Image
                    src={themableImage}
                    alt="Themeable"
                    className="rounded-lg w-full lg:w-[620px] h-full"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
