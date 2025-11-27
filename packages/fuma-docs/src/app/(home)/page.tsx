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
  // ThemeProvider,
  // defaultTheme,
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
  const [activeTab, setActiveTab] = useState("components");
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
              Accessible, themeable, and production-tested React components for
              creating scalable design systems and delightful user interfaces.
            </p>
          </div>
          <div className="flex gap-4 flex-col sm:flex-row justify-center items-center">
            <button
              className="!px-4 !py-2.5 rounded-md flex gap-3 items-center text-md w-fit cursor-pointer bg-fd-primary shadow-sm text-white font-medium group transition-all duration-200 hover:shadow-md hover:bg-[#017480]"
              onClick={() => {
                window.location.href = "/docs/getting-started";
              }}
              aria-label="Getting Started Button"
            >
              Getting Started
              <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-0.5">
                <ForwardArrowIcon size={18} color="currentColor" />
              </span>
            </button>
            <Box
              className="text-fd-muted-foreground px-4 py-2.5 rounded-md inline-flex gap-2 items-center text-sm w-fit cursor-pointer bg-fd-background shadow-sm group transition-all duration-200"
              onClick={handleCopy}
            >
              <code className="flex items-center gap-2 text-nowrap text-xs md:text-sm">
                npm install @sparrowengg/twigs-react{" "}
                {copied ? (
                  <TickIcon size={18} className="text-fd-primary" />
                ) : (
                  <CopyIcon
                    size={18}
                    color="currentColor"
                    className="group-hover:scale-105 transition-all duration-200"
                  />
                )}
              </code>
            </Box>
          </div>
        </div>
        <div className="lg:w-full flex items-center justify-center w-fit">
          {/* <ThemeProvider
            theme={{
              ...defaultTheme,
              fonts: {
                body: "DM Sans, sans-serif",
                heading: "DM Sans, sans-serif",
              },
            }}
          > */}
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
                    value="components"
                    className="!text-sm !font-normal tabs !rounded-md"
                  >
                    {" "}
                    <div>Components</div>
                  </TabsTrigger>
                  <TabsTrigger
                    value="conversation"
                    className="!text-sm !font-normal tabs !rounded-md"
                  >
                    <div>Conversation</div>
                  </TabsTrigger>
                  <TabsTrigger
                    value="dashboard"
                    className="!text-sm !font-normal tabs !rounded-md"
                  >
                    <div>Dashboard</div>
                  </TabsTrigger>
                  <TabsTrigger
                    value="users"
                    className="!text-sm !font-normal tabs !rounded-md"
                  >
                    <div>Users</div>
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
              value="components"
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
              value="users"
              forceMount
              className="mt-2 components-tab w-full flex justify-center items-center !bg-transparent !p-0"
            >
              <div className="lg:max-w-6xl mx-3 w-full border-2 border-fd-background rounded-2xl p-4 bg-fd-muted tabs-grid accounts-div">
                <Accounts />
              </div>
            </TabsContent>
            <TabsContent
              value="conversation"
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
          {/* </ThemeProvider> */}
        </div>
        {/* Testimonials Section */}
        <section className="relative lg:py-24 lg:pb-34 py-10 px-6 overflow-hidden w-full">
          {/* Gradient Background with Blur */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-96 h-96 bg-[#00828D]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-15 right-10 w-96 h-96 bg-[#00828D]/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00828D]/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header */}
            <div className="text-center lg:mb-16 mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00828D]/10 border border-[#00828D]/20 mb-6">
                <svg
                  className="w-4 h-4 text-[#00828D]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 9.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 10-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z" />
                </svg>
                <span className="text-[#00828D]">Testimonials</span>
              </div>
              <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
                Built for teams who demand excellence
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Trusted by industry leaders who value quality and innovation
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 - SurveySparrow */}
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm transition-all duration-300 border border-gray-100 hover:border-[#00828D]/30 hover:-translate-y-0.5">
                {/* Quote decoration */}
                <div className="absolute top-4 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg
                    className="w-13 h-13 text-[#00828D]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 9.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 10-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z" />
                  </svg>
                </div>

                {/* Company Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00828D]/20 to-[#00828D]/10 flex items-center justify-center shadow-sm p-2">
                    <Image
                      src={surveysparrow.src}
                      alt="SurveySparrow"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-medium">SurveySparrow</h3>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 leading-relaxed mb-8 relative z-10">
                  &quot;Twigs eliminates repetition, speeds up development, and
                  ensures consistent, accessible UI across all our SurveySparrow
                  products. It’s a game-changer for multi-product
                  engineering.&quot;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#00828D]/20">
                    <Image
                      src="https://ca.slack-edge.com/T3RDEGA00-U55LXJ8J1-1653390fc97a-512"
                      alt="Balaji CM"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Text
                      size="md"
                      weight="normal"
                      css={{ color: "$neutral900" }}
                    >
                      Balaji CM
                    </Text>
                    <Text
                      size="sm"
                      weight="normal"
                      css={{ color: "$neutral500" }}
                    >
                      CTO, SurveySparrow
                    </Text>
                  </div>
                </div>

                {/* Accent gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00828D]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
              </div>

              {/* Testimonial 2 - ThriveSparrow */}
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm transition-all duration-300 border border-gray-100 hover:border-[#00828D]/30 hover:-translate-y-0.5">
                {/* Quote decoration */}
                <div className="absolute top-4 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg
                    className="w-13 h-13 text-[#00828D]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 9.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 10-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z" />
                  </svg>
                </div>

                {/* Company Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00828D]/20 to-[#00828D]/10 flex items-center justify-center shadow-sm">
                    <Image
                      src={thrivesparrow.src}
                      alt="ThriveSparrow"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-medium">ThriveSparrow</h3>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 leading-relaxed mb-8 relative z-10">
                  &quot;When we are working on new features, I enjoy checking
                  out how Twigs approached the solution to that problem. It
                  helps in my search for the best possible approaches.&quot;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#00828D]/20">
                    <Image
                      src="https://ca.slack-edge.com/T3RDEGA00-US379KADC-6328985145bb-512"
                      alt="Nikhil Ponduri"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Text
                      size="md"
                      weight="normal"
                      css={{ color: "$neutral900" }}
                    >
                      Nikhil Ponduri
                    </Text>
                    <Text
                      size="sm"
                      weight="normal"
                      css={{ color: "$neutral500" }}
                    >
                      Engineering Manager, ThriveSparrow
                    </Text>
                  </div>
                </div>

                {/* Accent gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00828D]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
              </div>

              {/* Testimonial 3 - SparrowDesk */}
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm transition-all duration-300 border border-gray-100 hover:border-[#00828D]/30 hover:-translate-y-0.5">
                {/* Quote decoration */}
                <div className="absolute top-4 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg
                    className="w-13 h-13 text-[#00828D]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 9.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 10-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z" />
                  </svg>
                </div>

                {/* Company Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00828D]/20 to-[#00828D]/10 flex items-center justify-center shadow-sm p-2">
                    <Image
                      src={sparrowdesk.src}
                      alt="SparrowDesk"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-medium">SparrowDesk</h3>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 leading-relaxed mb-8 relative z-10">
                  &quot;Twigs is a fantastic React component library that helped
                  us build SparrowDesk real fast. Very well documented and works
                  great out of the box.&quot;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#00828D]/20">
                    <Image
                      src="https://ca.slack-edge.com/T3RDEGA00-U019T7DRSF7-9d3017c90281-512"
                      alt="Justin"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Text
                      size="md"
                      weight="normal"
                      css={{ color: "$neutral900" }}
                    >
                      Justin
                    </Text>
                    <Text
                      size="sm"
                      weight="normal"
                      css={{ color: "$neutral500" }}
                    >
                      Product Owner, SparrowDesk
                    </Text>
                  </div>
                </div>

                {/* Accent gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00828D]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
              </div>
            </div>
          </div>
        </section>
        <div className="relative w-full flex flex-col justify-center items-center gap-20 pt-10 lg:pt-15  overflow-hidden features-background">
          {/* Single blur background - top center, below title */}
          <div className="absolute inset-0 -z-10">
            {/* Large wide blur at top center creating subtle gradient effect */}
            <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[1400px] h-[300px] bg-[#00828D]/11 rounded-full blur-3xl"></div>
          </div>
          <Features />
        </div>
        <div className="w-full lg:px-35 md:px-10 px-5 lg:mt-25 mt-10 border-t border-fd-muted py-10 flex justify-between lg:flex-row flex-col gap-5 lg:gap-0 footer">
          <div className="flex flex-col gap-2 lg:w-1/3 w-full">
            <Image src={logo.src} alt="Twigs" className="w-20 h-fit" />
            <Text size="md" weight="normal" css={{ color: "$neutral600" }}>
              Build consistent, scalable UIs with components designed for
              flexibility, speed, and long-term reliability.
            </Text>
          </div>
          <div className="flex gap-10 md:gap-5 lg:gap-20 flex-wrap">
            <div className="flex flex-col gap-2">
              <Text size="md" weight="bold" css={{ color: "$neutral900" }}>
                Documentation
              </Text>
              <Link href="/docs/getting-started">
                <Text
                  size="md"
                  css={{
                    color: "$neutral800",
                    "&:hover": { color: "$primary600" },
                  }}
                >
                  Getting Started
                </Text>
              </Link>
              <Link href="/docs/getting-started/theming">
                <Text
                  size="md"
                  css={{
                    color: "$neutral800",
                    "&:hover": { color: "$primary600" },
                  }}
                >
                  Theming
                </Text>
              </Link>
              <Link href="/docs/getting-started/nextjs">
                <Text
                  size="md"
                  css={{
                    color: "$neutral800",
                    "&:hover": { color: "$primary600" },
                  }}
                >
                  Frameworks
                </Text>
              </Link>
              <Link href="/docs/icons">
                <Text
                  size="md"
                  css={{
                    color: "$neutral800",
                    "&:hover": { color: "$primary600" },
                  }}
                >
                  Icons
                </Text>
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Text size="md" weight="bold" css={{ color: "$neutral900" }}>
                Components
              </Text>
              <Link href="/docs/components/accordion">
                <Text
                  size="md"
                  css={{
                    color: "$neutral800",
                    "&:hover": { color: "$primary600" },
                  }}
                >
                  Accordion
                </Text>
              </Link>
              <Link href="/docs/components/hover-card">
                <Text
                  size="md"
                  css={{
                    color: "$neutral800",
                    "&:hover": { color: "$primary600" },
                  }}
                >
                  Hover Card
                </Text>
              </Link>
              <Link href="/docs/components/calendar">
                <Text
                  size="md"
                  css={{
                    color: "$neutral800",
                    "&:hover": { color: "$primary600" },
                  }}
                >
                  Calendar
                </Text>
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Text size="md" weight="bold" css={{ color: "$neutral900" }}>
                Others
              </Text>
              <Link href="/docs/editor">
                <Text
                  size="md"
                  css={{
                    color: "$neutral800",
                    "&:hover": { color: "$primary600" },
                  }}
                >
                  Editor
                </Text>
              </Link>
              <Link href="/docs/tools">
                <Text
                  size="md"
                  css={{
                    color: "$neutral800",
                    "&:hover": { color: "$primary600" },
                  }}
                >
                  Extensions
                </Text>
              </Link>
              <Link href="/docs/tools/upgrade-guide">
                <Text
                  size="md"
                  css={{
                    color: "$neutral800",
                    "&:hover": { color: "$primary600" },
                  }}
                >
                  Upgrade Guide
                </Text>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:px-35 md:px-10 px-5 flex justify-between sm:flex-row flex-col pb-5">
          <Text size="md" weight="medium" css={{ color: "$neutral600" }}>
            Built with ❤️ at{" "}
            <span
              className="text-fd-secondary-foreground"
              onClick={() => window.open("https://surveysparrow.com", "_blank")}
              style={{ cursor: "pointer" }}
            >
              SurveySparrow
            </span>
          </Text>
          <Text size="md" weight="medium" css={{ color: "$neutral600" }}>
            Copyright © {new Date().getFullYear()} SurveySparrow
          </Text>
        </div>
      </div>
    </main>
  );
}
