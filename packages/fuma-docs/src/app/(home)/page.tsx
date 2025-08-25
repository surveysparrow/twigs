import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Twigs - Component Library",
  description:
    "Beautiful and customizable React UI for your applications by surveysparrow",
};

export default function HomePage() {
  return (
    <main className="main px-5 lg:px-6">
      <div className="w-full max-w-fd-container mx-auto my-24">
        <h1 className="text-5xl font-bold mb-2">Twigs</h1>
        <p className="text-lg text-neutral-500 dark:text-neutral-400">
          Twigs is a flexible, customizable and accessible React component
          library for building UIs. Comes with 40+ components and room for you
          to bring your own components, styles and themes.
        </p>
        <Link
          className="bg-black text-white px-4 py-2 rounded-md dark:bg-white dark:text-black mt-3 inline-flex gap-2 items-center"
          href="/docs"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
}
