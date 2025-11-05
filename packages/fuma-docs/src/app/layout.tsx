import "@/app/global.css";
import "@/app/(home)/styles.css";
import { RootProvider } from "fumadocs-ui/provider";
import { DM_Sans } from "next/font/google";
import type { ReactNode } from "react";
import StitchesRegistry from "./stitches-registry";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.className} light`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <StitchesRegistry>
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