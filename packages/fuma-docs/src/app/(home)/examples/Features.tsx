"use client";
import {
  Text,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Flex,
  Box,
} from "@sparrowengg/twigs-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import accessibleImage from "@/assets/images/sample.png";
import extensibleImage from "@/assets/images/sample2.png";
import themableImage from "@/assets/images/sample3.png";
import accessibleIcon from "@/assets/images/acess-violet.png";
import extensibleIcon from "@/assets/images/extensible-violet.png";
import themableIcon from "@/assets/images/theme-violet.png";

export default function Features() {
  const [activeTab, setActiveTab] = useState("accessible");
  const [indicatorStyle, setIndicatorStyle] = useState({
    top: 0,
    height: 0,
    opacity: 0,
  });
  const tabsListRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      id: "accessible",
      title: "Accessible",
      description:
        "Embrace inclusivity – Twigs' components ensure every user can navigate seamlessly, better user experiences.",
      image: accessibleImage,
      icon: accessibleIcon,
    },
    {
      id: "extensible",
      title: "Extensible",
      description:
        "Unleash creativity – We empower you with unparalleled customization, enabling tailored designs and layouts.",
      image: extensibleImage,
      icon: extensibleIcon,
    },
    {
      id: "themeable",
      title: "Themeable",
      description:
        "Elevate aesthetics – Twigs' themeability empowers you to create visually stunning and consistent interfaces.",
      image: themableImage,
      icon: themableIcon,
    },
  ];

  const updateIndicator = () => {
    const list = tabsListRef.current;
    if (!list) {
      setIndicatorStyle({ top: 0, height: 0, opacity: 0 });
      return;
    }

    const tabsListElement = list.querySelector(
      '[role="tablist"]'
    ) as HTMLElement;
    if (!tabsListElement) {
      setIndicatorStyle({ top: 0, height: 0, opacity: 0 });
      return;
    }

    const activeButton = tabsListElement.querySelector(
      `button[data-state="active"], [role="tab"][aria-selected="true"]`
    ) as HTMLElement;

    if (!activeButton) {
      setIndicatorStyle({ top: 0, height: 0, opacity: 0 });
      return;
    }

    const top = activeButton.offsetTop;
    const height = activeButton.offsetHeight;

    setIndicatorStyle({ top, height, opacity: 1 });
  };

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
  }, [activeTab]);

  return (
    <>
      <div className="flex flex-col gap-4 lg:w-1/2 md:w-2/4 mx-6">
        <h2 className="text-3xl md:text-4xl mb-4 text-neutral-900 font-medium text-center">
          Designed with{" "}
          <span className="text-fd-primary border-l-2 !border-fd-primary bg-fd-primary/10 px-2 rounded-r-md">
            Purpose
          </span>
          , built for scale
        </h2>
        <p className="text-gray-600 leading-relaxed text-center">
          Every component is built with accessibility-first principles and
          complete customization in mind. Adapt styles, extend functionality,
          and scale your product effortlessly.
        </p>
      </div>

      <div className="mx-6">
        <Tabs
          defaultValue="accessible"
          value={activeTab}
          onValueChange={(value: string) => {
            setActiveTab(value);
          }}
          orientation="vertical"
          css={{
            flexDirection: "row",
            "@media (max-width: 1024px)": {
              flexDirection: "column",
            },
          }}
          className="gap-7"
        >
          <div ref={tabsListRef} className="relative">
            <TabsList
              className="flex flex-col p-1 gap-1 rounded-lg h-fit max-w-155 lg:w-125"
              css={{
                backgroundColor: "#F4F5F8",
                position: "relative",
              }}
            >
              {features.map((feature) => (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className="Features-tab flex-col !p-4"
                  css={{
                    alignItems: "start",
                  }}
                >
                  <Flex gap="$3" css={{ marginBottom: "$2" }}>
                    <Box
                      css={{
                        width: "$13",
                        height: "$13",
                        borderRadius: "$lg",
                        padding: "$4",
                        // backgroundColor: "$accent100"
                      }}
                    >
                      <Image
                        src={feature.icon.src}
                        alt={feature.title}
                        width={64}
                        height={64}
                        unoptimized
                        className="w-full h-full object-contain"
                      />
                    </Box>
                  </Flex>
                  <Flex flexDirection="column" gap="$1">
                    <Text
                      size="md"
                      weight="bold"
                      css={{ color: "$neutral900" }}
                    >
                      {feature.title}
                    </Text>
                    <Text size="sm" css={{ color: "$neutral700" }}>
                      {feature.description}
                    </Text>
                  </Flex>
                </TabsTrigger>
              ))}
              <div
                className="Features-tabs-indicator"
                style={{
                  position: "absolute",
                  top: `${indicatorStyle.top}px`,
                  height: `${indicatorStyle.height}px`,
                  opacity: indicatorStyle.opacity,
                  left: "4px",
                  right: "4px",
                  // background: "linear-gradient(137deg, rgba(255, 255, 255, 1) 58%, rgb(242, 239, 255))",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 2px 2px",
                  transition:
                    "top 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955), height 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955), opacity 0.2s ease",
                  pointerEvents: "none",
                  zIndex: 0,
                  // borderRight: "2px solid var(--twigs-colors-accent300)",
                }}
              />
            </TabsList>
          </div>

          {features.map((feature) => (
            <TabsContent
              key={feature.id}
              value={feature.id}
              className="rounded-lg !p-0 relative w-fit"
            >
              <div className="relative p-0.5 rounded-lg bg-black/90 min-w-[342px]">
                <div className="p-2 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="size-2.5 rounded-full bg-red-500" />
                    <div className="size-2.5 rounded-full bg-yellow-500" />
                    <div className="size-2.5 rounded-full bg-green-500" />
                  </div>
                  <Text
                    size="xs"
                    className="px-3 py-0.5 rounded-lg w-50"
                    css={{
                      color: "$neutral500",
                      backgroundColor: "$secondary900",
                    }}
                  >
                    {feature.title}
                  </Text>
                </div>
                <div className="relative w-full lg:w-[620px] h-auto overflow-hidden rounded-lg min-h-[161px]">
                  <div key={feature.id} className="image-slide-container">
                    <Image
                      src={feature.image.src}
                      alt={feature.title}
                      width={620}
                      height={310}
                      unoptimized
                      className="rounded-lg w-full h-auto max-h-[310px]"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
}
