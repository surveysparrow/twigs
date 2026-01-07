"use client";
import React, { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react";
import logo from "@/assets/images/bg.svg";
import Image from "next/image";
import { CopyIcon, ForwardArrowIcon, TickIcon } from "@sparrowengg/twigs-react-icons";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@sparrowengg/twigs-react";
import EmailAgent from "./examples/emailAgent";
import ProductCard from "./examples/productCard";
import ScoreCard from "./examples/scoreCard";
import EmployeeCard from "./examples/employeeCard";
import SmallCards from "./examples/smallCards";
import Redeemers from "./examples/redeemers";
import BusinessCard from "./examples/cookieCard";
import Settings from "./examples/settings";
import Accounts from "./examples/accounts";
import Dashboard from "./examples/dashboard";
import Features from "./examples/features";
import Testimonials from "./examples/testimonials";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Conversation from "./examples/conversation";
import Intellisense from "./examples/intellisense";
import Playground from "./examples/playground";
import Footer from "./examples/footer";
import OnBoarding from "./examples/onBoarding";
import { useTabIndicator } from "./hooks";


// Constants moved outside component to prevent recreation
const CURTAIN_HEIGHT_OFFSET = 50;
const COPY_TIMEOUT_MS = 3000;
const PIN_SPACER_UPDATE_DELAY = 150;
const DESKTOP_BREAKPOINT = 1024;
const NPM_INSTALL_COMMAND = "npm install @sparrowengg/twigs-react";

export default function SamplePage() {
  const [activeTab, setActiveTab] = useState("components");
  const tabsListRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [curtainHeight, setCurtainHeight] = useState<number | null>(null);
  const copyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Use shared tab indicator hook
  useTabIndicator({
    containerRef: tabsListRef,
    activeTab,
    cssVarPrefix: "tab-selection",
  });

  // Handle copy with proper cleanup
  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(NPM_INSTALL_COMMAND);
      setCopied(true);
      
      // Clear any existing timeout to prevent memory leaks
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
      
      copyTimeoutRef.current = setTimeout(() => {
        setCopied(false);
        copyTimeoutRef.current = null;
      }, COPY_TIMEOUT_MS);
    } catch (err) {
      console.error("Failed to copy:", err);
      setCopied(false);
    }
  }, []);

  // Cleanup copy timeout on unmount
  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  // Temporarily disable scroll restoration, scroll to top, then immediately restore
  useLayoutEffect(() => {
    const originalScrollRestoration = history.scrollRestoration;

    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    // Restore immediately after scroll is applied (within next frame)
    // This ensures other pages aren't affected by our temporary change
    requestAnimationFrame(() => {
      history.scrollRestoration = originalScrollRestoration;
    });
  }, []);

  // Measure curtain title height once on mount
  useEffect(() => {
    const curtainTitle = document.querySelector(".curtain-title");
    if (curtainTitle instanceof HTMLElement) {
      setCurtainHeight(curtainTitle.offsetHeight + CURTAIN_HEIGHT_OFFSET);
    }
  }, []);

  // Scroll to the active tab when the tab changes (mobile)
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

  // Manually update pin-spacer height when tab content changes (mobile only)
  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth >= DESKTOP_BREAKPOINT) return;
  
    const timer = setTimeout(() => {
      const wrapper = document.querySelector('.reveal-wrapper') as HTMLElement;
      const content = document.querySelector('.reveal-content') as HTMLElement;
      const curtain = document.querySelector('.reveal-curtain') as HTMLElement;
      
      if (!wrapper || !content || !curtain) return;
      
      const pinSpacer = wrapper.parentElement;
      if (!pinSpacer?.classList.contains('pin-spacer')) return;
  
      const newHeight = content.offsetHeight;
      pinSpacer.style.height = `${newHeight + curtain.offsetHeight}px`;
      wrapper.style.height = `${newHeight}px`;
    }, PIN_SPACER_UPDATE_DELAY);
  
    return () => clearTimeout(timer);
  }, [activeTab]);
  
  // GSAP ScrollTrigger setup
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const ctx = gsap.context(() => {
      const overlay = document.querySelector(".reveal-curtain");
      const curtainTitle = document.querySelector(".curtain-title");
  
      if (!overlay) return;
  
      const curtainTitleHeight = (curtainTitle instanceof HTMLElement) ? curtainTitle.offsetHeight : 0;

      gsap.set(".reveal-content", {
        opacity: 0.3,
        filter: "blur(12px)",
      });

      gsap.to(".reveal-content", {
        opacity: 1,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: ".reveal-curtain",
          start: "top top",
          end: "bottom 30%",
          scrub: true,
        },
      });

      gsap.to(".reveal-curtain", {
        y: -(curtainTitleHeight + CURTAIN_HEIGHT_OFFSET),
        scrollTrigger: {
          trigger: ".reveal-wrapper",
          start: "top top",
          end: () => `${curtainTitleHeight + CURTAIN_HEIGHT_OFFSET}px`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);
  

  return (
    <>
      <div className="reveal-wrapper">
      <div className="reveal-curtain"
      style={{
        height: curtainHeight ? curtainHeight : "800px",
      }}
      >
      <div className="bg-[#F1F5F9] w-full flex-col justify-center items-center curtain-title"
      >
        <div className="flex justify-center items-center">
          <Image src={logo} alt="background image" priority className="w-full lg:w-[710px] h-auto lg:h-[480px] mt-14 md:mt-0" />
        </div>
        <div className="w-fit lg:w-[1044px] lg:mx-auto mx-6 my-5 lg:my-0">
          <h1 className="text-3xl sm:text-4xl lg:text-[48px]/[56px] font-[800] mb-4 break-words text-center text-neutral-900 tracking-[-1.2px]">
            Twigs is a composable component system that helps you build
            <span
              className="text-fd-primary font-[46px] italic"
              style={{
                fontFamily: "libre baskerville",
                fontWeight: 300,
              }}
            >
              {" "}
              modern web apps faster
            </span>
            .
          </h1>
          <p className="w-full lg:w-[806px] mx-auto text-base md:text-[24px]/[36px] text-[#575757] break-words text-center mb-6 tracking-[-0.5px] font-[300]">
            Accessible, themeable, and production-tested React components for
            creating scalable design systems and delightful user interfaces.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 lg:gap-4 justify-center items-center">
          <button
            className="!px-4 !py-2.5 rounded-xl flex gap-4 items-center text-sm lg:text-[19.2px]/[28px] w-fit cursor-pointer bg-fd-primary shadow-sm text-white font-medium group transition-all duration-200 hover:shadow-md hover:bg-[#017480] text-nowrap"
            onClick={() => {
              window.location.href = "/docs/getting-started";
            }}
            aria-label="Getting Started Button"
          >
            Start Building
            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-0.5">
              <ForwardArrowIcon size={18} color="currentColor" />
            </span>
          </button>
          <button
            className="px-4 py-3 rounded-xl inline-flex gap-4 items-center text-sm lg:text-[16px]/[24px] w-fit cursor-pointer bg-fd-background group transition-all duration-200 hover:bg-gray-50 text-nowrap border"
            onClick={handleCopy}
            aria-label="Copy to clipboard button"
          >
            npm install @sparrowengg/twigs-react
            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-0.5">
              {copied ? <TickIcon size={18} className="text-fd-primary" /> : <CopyIcon size={18} className="text-gray-500" />}
            </span>
          </button>
        </div>
        <div className="flex flex-wrap gap-2 justify-center items-center py-10 lg:py-23">
          <div className="flex flex-col gap-2 items-center lg:border-r-1 px-3  lg:px-20 !border-r-slate-300">
            <h2 className="text-slate-900 text-[40px]/[56px] font-medium">
              150+
            </h2>
            <p className="text-slate-600 lg:text-[18px]/[28px] text-sm w-40 lg:w-[200px] text-center">
              Developers using Twigs on a daily basis
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center lg:border-r-1 px-3 lg:px-20 !border-r-slate-300">
            <h2 className="text-slate-900 text-[40px]/[56px] font-medium">
              4+
            </h2>
            <p className="text-slate-600 lg:text-[18px]/[28px] text-sm w-40 lg:w-[200px] text-center">
              Digital SaaS B2B products launched
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center px-3 lg:px-20">
            <h2 className="text-slate-900 text-[40px]/[56px] font-medium">
              40+
            </h2>
            <p className="text-slate-600 lg:text-[18px]/[28px] text-sm w-40 lg:w-[200px] text-center">
              Reusable components updated timely
            </p>
          </div>
        </div>
      </div>
      <div
        className="fancy-border reveal-border"
      ></div>
        </div>
      <div
      className="reveal-content"
      >
        <Tabs
          defaultValue="examples"
          value={activeTab}
          onValueChange={setActiveTab}
          css={{fontFamily: "var(--font-dm-sans)"}}
        >
          <div className="w-full flex items-center justify-center">
            <div
              ref={tabsListRef}
              className="flex overflow-scroll bg-[#64748B0F] rounded-full w-[95vw] md:w-fit p-0.5 tabs-list-container"
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
                  className="!text-sm !font-normal tabs !rounded-lg"
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
                  value="onboarding"
                  className="!text-sm !font-normal tabs !rounded-md"
                >
                  <div>Onboarding</div>
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
          <TabsContent
            value="components"
            className="mt-4 components-tab w-full flex justify-center items-center !bg-transparent !p-0"
          >
            <div className="lg:max-w-6xl 2xl:max-w-7xl mx-3 w-full flex flex-col md:flex-row gap-2 border-2 border-fd-background rounded-3xl p-2 bg-fd-muted tabs-grid flex-wrap">
              {/* Column 1 */}
              <div className="flex flex-col gap-2 flex-1">
                <EmailAgent />
                <Redeemers />
              </div>
              {/* Column 2 */}
              <div className="flex flex-col gap-2 flex-1">
                <ProductCard />
                <EmployeeCard />
              </div>
              {/* Column 3 */}
              <div className="flex flex-col gap-2 flex-1">
                <ScoreCard />
                <SmallCards />
                <BusinessCard />
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="onboarding"
            className="mt-4 components-tab w-full flex justify-center items-center !bg-transparent !p-0"
          >
            <div className="lg:max-w-6xl 2xl:max-w-7xl mx-3 w-full border-2 border-fd-background rounded-3xl p-2 bg-fd-muted tabs-grid">
              <OnBoarding />
            </div>
          </TabsContent>
          <TabsContent
            value="settings"
            className="mt-4 components-tab w-full flex justify-center items-center !bg-transparent !p-0"
          >
            <div className="lg:w-6xl 2xl:w-7xl mx-3 w-full border-2 border-fd-background rounded-3xl p-2 bg-fd-muted tabs-grid">
              <Settings />
            </div>
          </TabsContent>
          <TabsContent
            value="users"
            className="mt-4 components-tab w-full flex justify-center items-center !bg-transparent !p-0"
          >
            <div className="lg:max-w-6xl 2xl:max-w-7xl mx-3 w-full border-2 border-fd-background rounded-3xl p-2 bg-fd-muted tabs-grid accounts-div">
              <Accounts />
            </div>
          </TabsContent>
          <TabsContent
            value="conversation"
            className="mt-4 components-tab w-full flex justify-center items-center !bg-transparent !p-0"
          >
            <div className="lg:max-w-6xl 2xl:max-w-7xl md:max-w-4xl mx-3 w-full border-2 border-fd-background rounded-3xl p-2 bg-fd-muted tabs-grid chat-div">
              <Conversation />
            </div>
          </TabsContent>
          <TabsContent
            value="dashboard"
            className="mt-4 components-tab w-full flex justify-center items-center !bg-transparent !p-0"
          >
            <div className="lg:max-w-6xl 2xl:max-w-7xl md:max-w-4xl max-w-fit mx-3 w-full border-2 border-fd-background rounded-3xl p-2 bg-fd-muted tabs-grid">
              <Dashboard />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      </div>


      <div className="bg-[#F1F5F9] w-full 2xl:max-w-7xl mx-auto rounded-none 2xl:rounded-2xl h-full pb-15 lg:pb-35 flex-col justify-center items-center feature-section">
        <Features />
      </div>
      <div className="bg-white w-full 2xl:max-w-7xl mx-auto h-full pb-0 lg:pb-15 flex-col justify-center items-center">
        <Testimonials />
      </div>
      <div className="bg-white w-full 2xl:max-w-7xl mx-auto h-full pb-15 lg:pb-20">
        <Intellisense />
      </div>
      <div className="bg-white w-full 2xl:max-w-7xl mx-auto h-full pb-3 lg:pb-15">
        <Playground />
      </div>
      <div className="bg-white w-full 2xl:max-w-7xl mx-auto h-full">
        <Footer />
      </div>
    </>
  );
}
