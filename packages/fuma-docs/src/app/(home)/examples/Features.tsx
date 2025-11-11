import {
  Heading,
  Text,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  IconButton,
} from "@sparrowengg/twigs-react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@sparrowengg/twigs-react-icons";
import playground from "@/assets/images/Play2.png";
import autocomplete from "@/assets/images/autocomplete-e.png";
import colorpreview from "@/assets/images/color-swatch-e.png";
import docsimage from "@/assets/images/twigs-ui-docs-e.png";
import { useState, useRef, useEffect } from "react";

export default function Features() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("tab1");
  const [indicatorStyle, setIndicatorStyle] = useState({
    top: 0,
    height: 0,
    opacity: 0,
  });
  const tabsListRef = useRef<HTMLDivElement>(null);
  
  const images = [
    { src: autocomplete, alt: "Twigs Intelligence" },
    { src: colorpreview, alt: "Color Preview" },
    { src: docsimage, alt: "Documentation" }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const updateIndicator = () => {
    const list = tabsListRef.current;
    if (!list) {
      setIndicatorStyle({ top: 0, height: 0, opacity: 0 });
      return;
    }

    // Find the TabsList element
    const tabsListElement = list.querySelector('[role="tablist"]') as HTMLElement;
    if (!tabsListElement) {
      setIndicatorStyle({ top: 0, height: 0, opacity: 0 });
      return;
    }

    // Find the active tab button using data-state attribute
    const activeButton = tabsListElement.querySelector(
      `button[data-state="active"], [role="tab"][aria-selected="true"]`
    ) as HTMLElement;

    if (!activeButton) {
      setIndicatorStyle({ top: 0, height: 0, opacity: 0 });
      return;
    }

    // For vertical tabs, calculate position using offsetTop
    // offsetTop gives position relative to offsetParent (TabsList in this case)
    const top = activeButton.offsetTop;
    const height = activeButton.offsetHeight;

    setIndicatorStyle({ top, height, opacity: 1 });
  };

  useEffect(() => {
    // Use requestAnimationFrame to ensure DOM is updated
    const update = () => {
      requestAnimationFrame(() => {
        updateIndicator();
      });
    };

    // Initial update
    update();

    // Also update after a short delay to catch DOM updates
    const timer = setTimeout(update, 50);

    const handleResize = () => {
      update();
    };

    // Also update when container scrolls (though vertical tabs usually don't scroll)
    const handleScroll = () => {
      update();
    };

    window.addEventListener("resize", handleResize);
    const currentList = tabsListRef.current;
    if (currentList) {
      currentList.addEventListener("scroll", handleScroll, { passive: true });
    }
    
    return () => {
      window.removeEventListener("resize", handleResize);
      if (currentList) {
        currentList.removeEventListener("scroll", handleScroll);
      }
      clearTimeout(timer);
    };
  }, [activeTab]);

  return (
    <>
      <div className="flex flex-col gap-4 lg:w-1/2 mx-6">
        <div>
          <Heading size="h1" weight="bold" className="text-center"
          css={{
            fontFamily: "DM Sans, sans-serif !important",
          }}
          >
            Your complete UI{" "}
            <span className="text-fd-primary border-l-2 !border-fd-primary bg-fd-primary/10 px-2 rounded-r-md">
              toolkit
            </span>
          </Heading>
        </div>
        <div>
          <Text size="lg" className="text-center">
            Twigs gives you a with production-ready components, comprehensive
            documentation, and seamless integration across your favorite tools.
          </Text>
        </div>
      </div>
      <div className="mx-6">
        <Tabs
          defaultValue="tab1"
          value={activeTab}
          onValueChange={setActiveTab}
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
              className="flex flex-col p-1 gap-2 rounded-lg lg:w-110 h-fit tabs-list Features-tabs-list"
              css={{
                backgroundColor: "#F4F5F8",
                position: "relative",
              }}
            >
              <TabsTrigger value="tab1" className="Features-tab">
                {/* <Image src={sparrowgenie.src} alt="Twigs Intelligence" className="w-10 h-10 rounded-lg"/> */}
                <div>
                  <Text size="md" weight="bold" css={{ color: "$neutral900" }}>
                    Twigs IntelliSense
                  </Text>
                  <Text size="sm" css={{ color: "$neutral600" }}>
                    This enhances the Twigs development experience for Visual
                    Studio Code users with advanced features
                  </Text>
                </div>
              </TabsTrigger>
              <TabsTrigger value="tab2" className="Features-tab">
                  {/* <Image src={sparrowgenie.src} alt="Twigs Intelligence" className="w-10 h-10 rounded-lg"/> */}
                <div>
                  <Text size="md" weight="bold" css={{ color: "$neutral900" }}>
                    Twigs Playground
                  </Text>
                  <Text size="sm" weight="regular" css={{ color: "$neutral600", }}>
                    Playground designed for the Twigs development with a live
                    preview and a code editor
                  </Text>
                </div>
              </TabsTrigger>
              <div
                className="Features-tabs-indicator"
                style={{
                  position: "absolute",
                  top: `${indicatorStyle.top}px`,
                  height: `${indicatorStyle.height}px`,
                  opacity: indicatorStyle.opacity,
                  left: "4px",
                  right: "4px",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 3px 4px",
                  transition:
                    "top 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955), height 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955), opacity 0.2s ease",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
            </TabsList>
          </div>
          <TabsContent
            value="tab1"
            className="rounded-lg !p-0 relative w-fit"
          >
            <div className="relative">
              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="rounded-lg"
                style={{
                  height: "auto",
                  width: "620px",
                }}
              />
              
              {/* Left Arrow */}
              <IconButton
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 transition-all duration-200 !border-fd-border"
                variant="outline"
                css={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </IconButton>
              
              {/* Right Arrow */}
              <IconButton
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 transition-all duration-200 !border-fd-border"
                variant="outline"
                css={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <ChevronRightIcon className="w-5 h-5" />
              </IconButton>
              
              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentImageIndex 
                        ? "bg-white" 
                        : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab2"
          className="rounded-lg !p-0 w-fit"
          >
            <Image
              src={playground}
              alt="Twigs Playground"
              className="rounded-lg"
              style={{
                height:"auto",
                width: "620px",
              }}
            />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
