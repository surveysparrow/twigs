import "@/app/global.css";
import "@/app/(home)/styles.css";
import { RootProvider } from "fumadocs-ui/provider";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import StitchesRegistry from "./stitches-registry";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Twigs - Component Library",
  description:
    "Beautiful and customizable React UI for your applications by Surveysparrow",
  icons: {
    icon: "https://static.surveysparrow.com/site/twigs/twigs-favicon.png",
    shortcut: "https://static.surveysparrow.com/site/twigs/twigs-favicon.png",
    apple: "https://static.surveysparrow.com/site/twigs/twigs-favicon.png",
  },
  openGraph: {
    title: "Twigs - Component Library",
    description:
      "Beautiful and customizable React UI for your applications by Surveysparrow",
    images: [
      {
        url: "https://static.surveysparrow.com/public-api/surveysparrow-developer-documenation.jpg",
        width: 1200,
        height: 630,
        alt: "Twigs - Component Library",
      },
    ],
    type: "website",
  },
};

export default async function Layout({ children }: { children: ReactNode }) {
  let isHomePage = false;

  try {
    const headersList = await headers();
    const pathname = headersList.get("x-current-path") || "/";
    isHomePage = pathname === "/";
  } catch (error) {
    // Fallback: if headers() fails, default to false (not home page)
    // This ensures the app still works even if middleware fails
    console.error("Failed to read headers:", error);
    isHomePage = false;
  }

  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/qrc4pii.css" />
      </head>
      <body
        className="flex flex-col min-h-screen"
        style={{ fontFamily: "tenon, sans-serif" }}
      >
        <StitchesRegistry isHomePage={isHomePage}>
          <RootProvider
            theme={{
              enabled: false,
            }}
          >
            {children}
          </RootProvider>
        </StitchesRegistry>
      </body>
    </html>
  );
}
