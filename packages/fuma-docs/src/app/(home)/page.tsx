"use client";
import {
  Box,
  Button,
  TabsList,
  Tabs,
  TabsTrigger,
  TabsContent,
  ThemeProvider,
  defaultTheme,
  Image,
  Link,
  Text,
  Avatar,
} from "@sparrowengg/twigs-react";
// import { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "Twigs - Component Library",
//   description:
//     "Beautiful and customizable React UI for your applications by surveysparrow",
// };
import {
  ForwardArrowIcon,
  CopyIcon,
  TickIcon,
} from "@sparrowengg/twigs-react-icons";
import "./styles.css";
import TravelCard from "./examples/travelCard";
import MusicPlayer from "./examples/musicPlayer";
import TabsComponent from "./examples/tabsComponent";
import MiniForm from "./examples/miniForm";
import { useState } from "react";
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
import sparrowgenie from "@/assets/images/sparrowGenie.svg";
import thrivesparrow from "@/assets/images/thrivesparrow.svg";
import Dashboard from "./examples/dashboard";

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `npm install @sparrowengg/twigs-react`
      );
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy:", err);
      setCopied(false);
    }
  };

  return (
    <main className="w-full full-page">
      <div className="flex flex-col items-center">
        <div className="main w-full flex flex-col gap-4 sm:gap-5 justify-center items-center h-120 px-5">
          <div className="lg:w-6/12 w-full flex flex-col gap-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 break-words leading-tight text-center">
              Every component feels{" "}
              <span className="text-fd-primary border-l-2 !border-fd-primary bg-fd-primary/10 px-2 rounded-r-md">
                crafted
              </span>
              , every experience feels seamless.
            </h1>
            <p className="text-base sm:text-lg text-fd-muted-foreground break-words text-center">
              Build consistent, scalable UIs with components designed for
              flexibility, speed, and long-term reliability.
            </p>
          </div>
          <div className="flex gap-2 flex-col sm:flex-row justify-center items-center">
            <div>
              <Button
                onClick={() => {
                  window.location.href = "/docs/getting-started";
                }}
                size="lg"
                className="flex items-center gap-2"
                rightIcon={<ForwardArrowIcon size={18} color="currentColor" />}
              >
                Getting Started{" "}
              </Button>
            </div>
            <Box
              className="text-fd-muted-foreground px-4 py-2.5 rounded-md inline-flex gap-2 items-center text-sm w-fit cursor-pointer bg-fd-background shadow-sm"
              onClick={handleCopy}
            >
              <code className="flex items-center gap-2">
                npm install @sparrowengg/twigs-react{" "}
                {copied ? (
                  <TickIcon size={18} color="currentColor" />
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
            <Tabs defaultValue="examples">
              <div className="w-full flex items-center justify-center">
                <TabsList
                  aria-label="categories of examples"
                  className="flex overflow-scroll bg-fd-background rounded-md w-95 md:w-fit shadow-sm p-0.5"
                  style={{
                    scrollbarWidth: "none",
                  }}
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
              <TabsContent
                value="examples"
                className="mt-2 components-tab w-full flex justify-center items-center !bg-transparent !p-0"
              >
                <div className="lg:max-w-6xl mx-3 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border-2 border-fd-background rounded-2xl p-4 bg-fd-muted tabs-grid">
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
                className="mt-2 components-tab w-full flex justify-center items-center !bg-transparent !p-0"
              >
                <div className="lg:max-w-6xl mx-3 w-full border-2 border-fd-background rounded-2xl p-4 bg-fd-muted tabs-grid">
                  <LoginForm />
                </div>
              </TabsContent>
              <TabsContent
                value="settings"
                className="mt-2 components-tab w-full flex justify-center items-center !bg-transparent !p-0"
              >
                <div className="lg:w-6xl mx-3 w-full border-2 border-fd-background rounded-2xl p-4 bg-fd-muted tabs-grid">
                  <Settings />
                </div>
              </TabsContent>
              <TabsContent
                value="accounts"
                className="mt-2 components-tab w-full flex justify-center items-center !bg-transparent !p-0"
              >
                <div className="lg:max-w-6xl mx-3 w-full border-2 border-fd-background rounded-2xl p-4 bg-fd-muted tabs-grid">
                  <Accounts />
                </div>
              </TabsContent>
              <TabsContent
                value="chat"
                className="mt-2 components-tab w-full flex justify-center items-center !bg-transparent !p-0"
              >
                <div className="lg:max-w-6xl md:max-w-4xl max-w-99 w-full border-2 border-fd-background rounded-2xl p-4 bg-fd-muted tabs-grid">
                  <Chat />
                </div>
              </TabsContent>
              <TabsContent
                value="dashboard"
                className="mt-2 components-tab w-full flex justify-center items-center !bg-transparent !p-0"
              >
                <div className="lg:max-w-6xl md:max-w-4xl max-w-fit mx-3 w-full border-2 border-fd-background rounded-2xl p-4 bg-fd-muted tabs-grid">
                  <Dashboard />
                </div>
              </TabsContent>
            </Tabs>
          </ThemeProvider>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-10 pt-15">
          <Text size="lg" css={{ color: "$neutral900" }}>
            Built for teams who demand excellence
          </Text>
          <div className="flex gap-7 lg:gap-25 flex-wrap justify-center items-center px-2">
            <div className="flex gap-3 items-center">
              <div className="p-2 border-1 border-fd-border rounded-lg">
                <Image
                  src={surveysparrow.src}
                  alt="Twigs"
                  className="w-7 h-7"
                />
              </div>
              <Text size="lg" weight="normal" css={{ color: "$neutral700" }}>
                Surveysparrow
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
              <Text size="lg" weight="normal" css={{ color: "$neutral700" }}>
                ThriveSparrow
              </Text>
            </div>
            <div className="flex gap-3 items-center">
              <div>
                <Image
                  src={sparrowgenie.src}
                  alt="Twigs"
                  className="w-10 h-10 rounded-lg"
                />
              </div>
              <Text size="lg" weight="normal" css={{ color: "$neutral700" }}>
                SparrowGenie
              </Text>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-10 lg:gap-5 lg:py-10 pb-5 pt-10 justify-center sm:flex-row flex-col px-4">
          <div className="flex flex-col gap-5 lg:w-100 lg:border-r lg:pr-5 border-fd-border">
            <p className="leading-6 text-justify">
              Reshaped is the gold standard of &quot;just enough design system&quot;,
              where they have figured out the minimal viable token architecture
              and an infinitely flexible base component kit. I constantly look
              to them for inspiration.
            </p>
            <div className="flex gap-2 items-center">
              <Avatar
                src="https://i.pravatar.cc/150?img=33"
                alt="Twigs"
                size="lg"
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
              Reshaped approached the solution to that problem. It helps in my
              search for the best possible approaches.
            </p>
            <div className="flex gap-2 items-center">
              <Avatar
                src="https://i.pravatar.cc/150?img=38"
                alt="Twigs"
                size="lg"
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
        <div className="w-full flex flex-col justify-center items-center gap-10 mt-10 pt-10 border-t !border-fd-primary/20 features-background">
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
                <Link href="/docs/getting-started">Theming</Link>
              </Text>
              <Text size="md" weight="normal" css={{ color: "$neutral600" }}>
                <Link href="/docs/getting-started">Frameworks</Link>
              </Text>
              <Text size="md" weight="normal" css={{ color: "$neutral600" }}>
                <Link href="/docs/getting-started">Icons</Link>
              </Text>
            </div>
            <div className="flex flex-col gap-2">
              <Text size="md" weight="bold" css={{ color: "$neutral900" }}>
                Components
              </Text>
              <Text size="md" weight="normal" css={{ color: "$neutral600" }}>
                <Link href="/docs/getting-started">Accordion</Link>
              </Text>
              <Text size="md" weight="normal" css={{ color: "$neutral600" }}>
                <Link href="/docs/getting-started">Hover Card</Link>
              </Text>
              <Text size="md" weight="normal" css={{ color: "$neutral600" }}>
                <Link href="/docs/getting-started">Calendar</Link>
              </Text>
              <Text size="md" weight="normal" css={{ color: "$neutral600" }}>
                <Link href="/docs/getting-started">Button</Link>
              </Text>
            </div>
            <div className="flex flex-col gap-2">
              <Text size="md" weight="bold" css={{ color: "$neutral900" }}>
                Others
              </Text>
              <Text size="md" weight="normal" css={{ color: "$neutral600" }}>
                <Link href="/docs/getting-started">Editor</Link>
              </Text>
              <Text size="md" weight="normal" css={{ color: "$neutral600" }}>
                <Link href="/docs/getting-started">Extensions</Link>
              </Text>
              <Text size="md" weight="normal" css={{ color: "$neutral600" }}>
                <Link href="/docs/getting-started">Upgrade Guide</Link>
              </Text>
            </div>
          </div>
        </div>
        <div className="w-full lg:px-35 px-5 flex justify-between sm:flex-row flex-col pb-5">
          <Text size="md" weight="medium" css={{ color: "$neutral600" }}>
            Build with Radix and Stitches ❤️
          </Text>
          <Text size="md" weight="medium" css={{ color: "$neutral600" }}>
            <Link href="/docs/getting-started">
              Copyright © {new Date().getFullYear()} Surveysparrow
            </Link>
          </Text>
        </div>
      </div>
    </main>
  );
}
