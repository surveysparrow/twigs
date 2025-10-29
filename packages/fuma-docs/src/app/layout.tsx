import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { DM_Sans } from "next/font/google";
import type { ReactNode } from "react";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.className} light`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
        theme={{
          enabled: false,
        }}
        >{children}</RootProvider>
      </body>
    </html>
  );
}
