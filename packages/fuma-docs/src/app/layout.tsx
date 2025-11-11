import "@/app/global.css";
import "@/app/(home)/styles.css";
import { RootProvider } from "fumadocs-ui/provider";
import { DM_Sans } from "next/font/google";
import type { ReactNode } from "react";
import StitchesRegistry from "./stitches-registry";
import { headers } from "next/headers";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

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
    <html lang="en" className={`${dmSans.className} light`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
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