"use client";
import { Box } from "@sparrowengg/twigs-react";
// import { Metadata } from "next";
import Link from "next/link";
// export const metadata: Metadata = {
//   title: "Twigs - Component Library",
//   description:
//     "Beautiful and customizable React UI for your applications by surveysparrow",
// };

export default function HomePage() {
  return (
    <main className="main px-5 lg:px-6 bg-fd-primary-foreground">
      <div className="w-full max-w-fd-container mx-auto my-12 lg:my-15">
        <h1 className="text-5xl font-bold mb-2">Twigs</h1>
        <h2 className="text-2xl font-bold mb-2">React UI component library</h2>
        <p className="text-lg text-neutral-500 dark:text-neutral-400">
          Twigs is a flexible, customizable and accessible React component
          library for building UIs.
        </p>
        <div className="flex gap-2 flex-col sm:flex-row">
        <Box>
        <Link
          className="bg-fd-primary text-fd-primary-foreground px-4 py-2 rounded-md mt-3 inline-flex gap-2 items-center"
          href="/docs/getting-started"
        >
          Get Started
        </Link>
        </Box>
        <Box className="text-fd-muted-foreground px-4 py-2 rounded-md mt-3 inline-flex gap-2 items-center border border-fd-primary/50 text-sm w-fit">
          npm install @sparrowengg/twigs-react
        </Box>
        </div>
      </div>
    </main>
  );
}
