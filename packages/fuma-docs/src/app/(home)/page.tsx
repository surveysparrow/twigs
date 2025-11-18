"use client";
import {
  Box,
  TabsList,
  Tabs,
  TabsTrigger,
  TabsContent,
  Image,
  Link,
  Text,
  Avatar,
  ThemeProvider,
  defaultTheme,
} from "@sparrowengg/twigs-react";

import {
  ForwardArrowIcon,
  CopyIcon,
  TickIcon,
} from "@sparrowengg/twigs-react-icons";
import TravelCard from "./examples/travelCard";
import MusicPlayer from "./examples/musicPlayer";
import TabsComponent from "./examples/tabsComponent";
import MiniForm from "./examples/miniForm";
import { useState, useRef, useEffect } from "react";
import SmallCards from "./examples/smallCards";
import MeetingCard from "./examples/meetingCard";
import BusinessCard from "./examples/cookieCard";
import LoginForm from "./examples/loginForm";
import Settings from "./examples/settings";
import Accounts from "./examples/accounts";
import Chat from "./examples/chat";
import Features from "./examples/Features";
import logo from "@/assets/images/logo-w-text-lightmode.svg";
import surveysparrow from "@/assets/images/surveysparrow.svg";
import sparrowdesk from "@/assets/images/sparrowDesk.svg";
import thrivesparrow from "@/assets/images/thrivesparrow.svg";
import Dashboard from "./examples/dashboard";

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("examples");
  const tabsListRef = useRef<HTMLDivElement>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `npm install @sparrowengg/twigs-react`
      );
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (err) {
      console.error("Failed to copy:", err);
      setCopied(false);
    }
  };

  const updateIndicator = () => {
    const container = tabsListRef.current;
    if (!container) return;

    const activeButton = container.querySelector(
      `button[data-state="active"], [role="tab"][aria-selected="true"]`
    ) as HTMLElement;

    if (!activeButton) {
      container.style.setProperty("--tab-selection-x", "0");
      container.style.setProperty("--tab-selection-width", "0");
      return;
    }

    const tabsListElement = activeButton.closest(
      '[role="tablist"]'
    ) as HTMLElement;
    if (!tabsListElement) return;

    const x = activeButton.offsetLeft + (tabsListElement.offsetLeft || 0);
    const width = activeButton.offsetWidth;
    container.style.setProperty("--tab-selection-x", `${x}`);
    container.style.setProperty("--tab-selection-width", `${width}`);
  };

  useEffect(() => {
    const timer = setTimeout(updateIndicator, 10);
    return () => clearTimeout(timer);
  }, [activeTab]);

  useEffect(() => {
    const handleResize = () => {
      setTimeout(updateIndicator, 100);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const list = tabsListRef.current;
    if (!list) return;

    const isScrollable = list.scrollWidth > list.clientWidth;
    if (!isScrollable) return;

    const activeButton = list.querySelector(
      `button[data-state="active"], [role="tab"][aria-selected="true"]`
    ) as HTMLElement;
    if (!activeButton) return;

    const tabsListElement = activeButton.closest(
      '[role="tablist"]'
    ) as HTMLElement;
    if (!tabsListElement) return;

    const buttonLeft =
      activeButton.offsetLeft + (tabsListElement.offsetLeft || 0);
    const buttonRight = buttonLeft + activeButton.offsetWidth;
    const scrollLeft = list.scrollLeft;
    const clientWidth = list.clientWidth;

    if (buttonLeft < scrollLeft || buttonRight > scrollLeft + clientWidth) {
      list.scrollTo({
        left: Math.max(0, buttonLeft - 12),
        behavior: "smooth",
      });
    }
  }, [activeTab]);

  return (
    <main className="w-full full-page">
      <div className="flex flex-col items-center">
        <div className="main w-full flex flex-col gap-4 sm:gap-5 justify-center items-center h-120 px-5">
          <div className="lg:w-6/12 w-full flex flex-col gap-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 break-words leading-tight text-center">
            Twigs is a{" "}
              <span className="text-fd-primary border-l-2 !border-fd-primary bg-fd-primary/10 px-2 rounded-r-md">
              composable{" "}
              </span>
              component system for building modern web apps faster
            </h1>
            <p className="text-base sm:text-lg text-fd-muted-foreground break-words text-center">
            Accessible, themeable, and production-tested React components for creating scalable design systems and delightful user interfaces.
            </p>
          </div>
          <div className="flex gap-4 flex-col sm:flex-row justify-center items-center">
            <button
              className="!px-4 !py-2.5 rounded-md flex gap-3 items-center text-md w-fit cursor-pointer bg-fd-primary shadow-sm text-white font-medium"
              onClick={() => {
                window.location.href = "/docs/getting-started";
              }}
              aria-label="Getting Started Button"
            >
              Getting Started
              <ForwardArrowIcon size={18} color="currentColor" />
            </button>
            <Box
              className="text-fd-muted-foreground px-4 py-2.5 rounded-md inline-flex gap-2 items-center text-sm w-fit cursor-pointer bg-fd-background shadow-sm"
              onClick={handleCopy}
            >
              <code className="flex items-center gap-2 text-nowrap text-xs md:text-sm">
                npm install @sparrowengg/twigs-react{" "}
                {copied ? (
                  <TickIcon size={18} className="text-fd-primary" />
                ) : (
                  <CopyIcon size={18} color="currentColor" />
                )}
              </code>
            </Box>
          </div>
        </div>
        <div className="lg:w-full flex items-center justify-center w-fit">
          <ThemeProvider
            theme={{
              ...defaultTheme,
              fonts: {
                body: "DM Sans, sans-serif",
                heading: "DM Sans, sans-serif",
              },
            }}
          >
            <Tabs
              defaultValue="examples"
              value={activeTab}
              onValueChange={setActiveTab}
            >
              <div className="w-full flex items-center justify-center">
                <div
                  ref={tabsListRef}
                  className="flex overflow-scroll bg-fd-muted rounded-md w-[95vw] md:w-fit p-0.5 tabs-list-container"
                  style={{
                    scrollbarWidth: "none",
                    position: "relative",
                  }}
                >
                  <TabsList
                    aria-label="categories of examples"
                    className="flex"
                    style={{ position: "relative", width: "100%" }}
                  >
                    <TabsTrigger
                      value="examples"
                      className="!text-sm !font-normal tabs !rounded-md"
                    >
                      {" "}
                      <div>Examples</div>
                    </TabsTrigger>
                    <TabsTrigger
                      value="chat"
                      className="!text-sm !font-normal tabs !rounded-md"
                    >
                      <div>Chat</div>
                    </TabsTrigger>
                    <TabsTrigger
                      value="dashboard"
                      className="!text-sm !font-normal tabs !rounded-md"
                    >
                      <div>Dashboard</div>
                    </TabsTrigger>
                    <TabsTrigger
                      value="accounts"
                      className="!text-sm !font-normal tabs !rounded-md"
                    >
                      <div>Accounts</div>
                    </TabsTrigger>
                    <TabsTrigger
                      value="settings"
                      className="!text-sm !font-normal tabs !rounded-md"
                    >
                      <div>Settings</div>
                    </TabsTrigger>
                    <TabsTrigger
                      value="authentication"
                      className="!text-sm !font-normal tabs !rounded-md"
                    >
                      <div>Authentication</div>
                    </TabsTrigger>
                  </TabsList>
                </div>
              </div>
              <TabsContent
                value="examples"
                forceMount
                className="mt-2 components-tab w-full flex justify-center items-center !bg-transparent !p-0"
              >
                <div className="lg:max-w-6xl mx-3 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 border-2 border-fd-background rounded-2xl p-3 bg-fd-muted tabs-grid">
                  <div className="row-span-2">
                    <TravelCard />
                  </div>
                  <div className="">
                    <MusicPlayer />
                  </div>
                  <div className="">
                    <MeetingCard />
                  </div>
                  <div className="row-span-2">
                    <MiniForm />
                  </div>
                  <div className="">
                    <SmallCards />
                  </div>
                  <div className="">
                    <TabsComponent />
                  </div>
                  <div className="">
                    <BusinessCard />
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="authentication"
                forceMount
                className="mt-2 components-tab w-full flex justify-center items-center !bg-transparent !p-0"
              >
                <div className="lg:max-w-6xl mx-3 w-full border-2 border-fd-background rounded-2xl p-4 bg-fd-muted tabs-grid">
                  <LoginForm />
                </div>
              </TabsContent>
              <TabsContent
                value="settings"
                forceMount
                className="mt-2 components-tab w-full flex justify-center items-center !bg-transparent !p-0"
              >
                <div className="lg:w-6xl mx-3 w-full border-2 border-fd-background rounded-2xl p-4 bg-fd-muted tabs-grid">
                  <Settings />
                </div>
              </TabsContent>
              <TabsContent
                value="accounts"
                forceMount
                className="mt-2 components-tab w-full flex justify-center items-center !bg-transparent !p-0"
              >
                <div className="lg:max-w-6xl mx-3 w-full border-2 border-fd-background rounded-2xl p-4 bg-fd-muted tabs-grid accounts-div">
                  <Accounts />
                </div>
              </TabsContent>
              <TabsContent
                value="chat"
                forceMount
                className="mt-2 components-tab w-full flex justify-center items-center !bg-transparent !p-0"
              >
                <div className="lg:max-w-6xl md:max-w-4xl w-full border-2 border-fd-background rounded-2xl p-4 bg-fd-muted tabs-grid chat-div">
                  <Chat />
                </div>
              </TabsContent>
              <TabsContent
                value="dashboard"
                forceMount
                className="mt-2 components-tab w-full flex justify-center items-center !bg-transparent !p-0"
              >
                <div className="lg:max-w-6xl md:max-w-4xl max-w-fit mx-3 w-full border-2 border-fd-background rounded-2xl p-4 bg-fd-muted tabs-grid">
                  <Dashboard />
                </div>
              </TabsContent>
            </Tabs>
          </ThemeProvider>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-10 pt-25">
          <h3 className="text-center text-xl lg:text-2xl font-medium mb-2 break-words leading-tight">
              Built for teams who demand excellence
          </h3>
          <div className="flex gap-7 lg:gap-25 flex-wrap justify-center items-center px-2">
            <div className="flex gap-3 items-center">
              <div className="p-2 border-1 border-fd-border rounded-lg">
                <Image
                  src={surveysparrow.src}
                  alt="Twigs"
                  className="w-[25px] h-[25px]"
                />
              </div>
              <Text
                size="md"
                weight="normal"
                css={{
                  color: "$neutral800",
                  "@media (max-width: 768px)": { fontSize: "16px" },
                }}
              >
                SurveySparrow
              </Text>
            </div>
            <div className="flex gap-3 items-center">
              <div>
                <Image
                  src={thrivesparrow.src}
                  alt="Twigs"
                  className="w-10 h-10 rounded-lg"
                />
              </div>
              <Text
                size="md"
                weight="normal"
                css={{
                  color: "$neutral800",
                  "@media (max-width: 768px)": { fontSize: "16px" },
                }}
              >
                ThriveSparrow
              </Text>
            </div>
            <div className="flex gap-3 items-center">
              <div className="p-2 border-1 border-fd-border rounded-lg">
                <Image
                  src={sparrowdesk.src}
                  alt="Twigs"
                  className="w-[25px] h-[25px]"
                />
              </div>
              <Text
                size="md"
                weight="normal"
                css={{
                  color: "$neutral800",
                  "@media (max-width: 768px)": { fontSize: "16px" },
                }}
              >
                SparrowDesk
              </Text>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-10 lg:gap-5 lg:py-10 pb-5 pt-10 justify-center sm:flex-row flex-col px-4">
          <div className="flex flex-col gap-5 lg:w-100 lg:border-r lg:pr-5 border-fd-border">
            <p className="leading-6 text-justify ">
              Twigs is the gold standard of &quot;just enough design
              system&quot;, where they have figured out the minimal viable token
              architecture and an infinitely flexible base component kit. I
              constantly look to them for inspiration.
            </p>
            <div className="flex gap-2 items-center">
              <Avatar
                src="https://i.pravatar.cc/150?img=33"
                alt="Twigs"
                size="lg"
                name="John Doe"
              />
              <div>
                <Text size="md" weight="normal" css={{ color: "$neutral900" }}>
                  John Doe
                </Text>
                <Text size="sm" weight="normal" css={{ color: "$neutral700" }}>
                  CEO, Surveysparrow
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:w-100 lg:border-r lg:pr-5 border-fd-border">
            <p className="leading-6 text-justify">
              When we are working on new features, I enjoy checking out how
              Twigs approached the solution to that problem. It helps in my
              search for the best possible approaches.
            </p>
            <div className="flex gap-2 items-center">
              <Avatar
                src="https://i.pravatar.cc/150?img=38"
                alt="Twigs"
                size="lg"
                name="Hemant"
              />
              <div>
                <Text size="md" weight="normal" css={{ color: "$neutral900" }}>
                  Hemant
                </Text>
                <Text size="sm" weight="normal" css={{ color: "$neutral700" }}>
                  Developer, ThriveSparrow
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:w-100 lg:pr-5">
            <p className="leading-6 text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              ipsam fuga repellendus saepe beatae obcaecati amet modi
              praesentium doloribus cupiditate expedita tempore atque,
              doloremque dicta. Voluptatem cupiditate amet dicta id!
            </p>
            <div className="flex gap-2 items-center">
              <Avatar
                src="https://i.pravatar.cc/150?img=48"
                alt="Twigs"
                size="lg"
                name="Harry Potter"
              />
              <div>
                <Text size="md" weight="normal" css={{ color: "$neutral900" }}>
                  Harry Potter
                </Text>
                <Text size="sm" weight="normal" css={{ color: "$neutral700" }}>
                  Designer, SparrowGenie
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-10 mt-20 pt-10 border-t !border-fd-primary/20 features-background">
          <Features />
        </div>
        <div className="w-full lg:px-35 px-5 lg:mt-25 mt-10 border-t border-fd-border py-10 flex justify-between sm:flex-row flex-col gap-5 lg:gap-0 footer">
          <div className="flex flex-col gap-2 lg:w-1/3 w-full">
            <Image src={logo.src} alt="Twigs" className="w-20 h-fit" />
            <Text size="md" weight="normal" css={{ color: "$neutral600" }}>
              Build consistent, scalable UIs with components designed for
              flexibility, speed, and long-term reliability.
            </Text>
          </div>
          <div className="flex gap-10 lg:gap-30 flex-wrap">
            <div className="flex flex-col gap-2">
              <Text size="md" weight="bold" css={{ color: "$neutral900" }}>
                Documentation
              </Text>
              <Text size="md" weight="normal" css={{ color: "$neutral600" }}>
                <Link href="/docs/getting-started">Getting Started</Link>
              </Text>
              <Text size="md" weight="normal" css={{ color: "$neutral600" }}>
                <Link href="/docs/getting-started/theming">Theming</Link>
              </Text>
              <Text size="md" weight="normal" css={{ color: "$neutral600" }}>
                <Link href="/docs/getting-started/nextjs">Frameworks</Link>
              </Text>
              <Text size="md" weight="normal" css={{ color: "$neutral600" }}>
                <Link href="/docs/icons">Icons</Link>
              </Text>
            </div>
            <div className="flex flex-col gap-2">
              <Text size="md" weight="bold" css={{ color: "$neutral900" }}>
                Components
              </Text>
              <Text size="md" weight="normal" css={{ color: "$neutral600" }}>
                <Link href="/docs/components/accordion">Accordion</Link>
              </Text>
              <Text size="md" weight="normal" css={{ color: "$neutral600" }}>
                <Link href="/docs/components/hover-card">Hover Card</Link>
              </Text>
              <Text size="md" weight="normal" css={{ color: "$neutral600" }}>
                <Link href="/docs/components/calendar">Calendar</Link>
              </Text>
              <Text size="md" weight="normal" css={{ color: "$neutral600" }}>
                <Link href="/docs/components/button">Button</Link>
              </Text>
            </div>
            <div className="flex flex-col gap-2">
              <Text size="md" weight="bold" css={{ color: "$neutral900" }}>
                Others
              </Text>
              <Text size="md" weight="normal" css={{ color: "$neutral600" }}>
                <Link href="/docs/editor">Editor</Link>
              </Text>
              <Text size="md" weight="normal" css={{ color: "$neutral600" }}>
                <Link href="/docs/tools">Extensions</Link>
              </Text>
              <Text size="md" weight="normal" css={{ color: "$neutral600" }}>
                <Link href="/docs/tools/upgrade-guide">Upgrade Guide</Link>
              </Text>
            </div>
          </div>
        </div>
        <div className="w-full lg:px-35 px-5 flex justify-between sm:flex-row flex-col pb-5">
          <Text size="md" weight="medium" css={{ color: "$neutral600" }}>
            Built with ❤️ at{" "}
            <span
              className="text-fd-secondary-foreground"
              onClick={() => window.open("https://surveysparrow.com", "_blank")}
              style={{ cursor: "pointer" }}
            >
              Surveysparrow
            </span>
          </Text>
          <Text size="md" weight="medium" css={{ color: "$neutral600" }}>
            Copyright © {new Date().getFullYear()} Surveysparrow
          </Text>
        </div>
      </div>
    </main>
  );
}
