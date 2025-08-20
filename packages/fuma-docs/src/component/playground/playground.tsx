"use client";
import { TypescriptIcon } from "@/icons/typescript";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { SquareArrowOutUpRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import "./playground.css";

const SNIPPETS_WITH_EXTERNAL_DEPENDENCIES: Record<
  string,
  { name: string; version: string }[]
> = {
  "heatmap-derive-fill-color": [
    {
      name: "color",
      version: "5.0.0",
    },
  ],
};

export const Playground = ({
  snippetName,
  defaultPlayground,
}: {
  snippetName: string;
  defaultPlayground?: boolean;
}) => {
  return (
    <Tabs
      items={
        defaultPlayground ? ["Playground", "Code"] : ["Code", "Playground"]
      }
      className="playground-tabs"
    >
      <Tab value="Code" className="playground-tab playground-tab--code">
        <div>
          <Code snippetName={snippetName} />
        </div>
      </Tab>
      <Tab value="Playground" className="playground-tab">
        <div className="relative group playground-tab--playground">
          <iframe
            src={buildUrl(snippetName)}
            className="rounded-md w-full h-[800px]"
            loading="lazy"
          />
          <a
            href={buildUrl(snippetName, true)}
            className="absolute w-8 h-8 flex items-center justify-center top-[-32px] right-0 lg:top-0 lg:right-[-32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg bg-fd-accent"
            aria-label="Open Playground in New Tab"
            title="Open Playground in New Tab"
            target="_blank"
          >
            <SquareArrowOutUpRightIcon size={16} />
          </a>
        </div>
      </Tab>
    </Tabs>
  );
};

const Code = ({ snippetName }: { snippetName: string }) => {
  const [files, setFiles] = useState<Record<string, string>>({});
  const [activeFile, setActiveFile] = useState<string>();
  const [status, setStatus] = useState<"loading" | "error" | "success">(
    "loading"
  );

  const fetchCode = async () => {
    setStatus("loading");
    const response = await fetch(`/api/snippets/${snippetName}`);
    if (!response.ok) {
      setStatus("error");
      return;
    }
    const data = await response.json();
    const files = data.files;
    const meta = JSON.parse(files["meta.json"]);
    const { ["meta.json"]: _meta, ["theme.json"]: _theme, ...rest } = files;

    setFiles(rest);
    setActiveFile(`${meta.main}.tsx`);
    setStatus("success");
  };

  useEffect(() => {
    fetchCode();
  }, [snippetName]);

  const code = files[activeFile ?? Object.keys(files)[0]];

  return (
    <div
      className={`code-wrapper relative status-${status}`}
      style={{
        height: status !== "success" ? "200px" : "auto",
      }}
    >
      {status === "success" && Object.keys(files).length > 0 && (
        <div className="flex items-center absolute top-0 left-0 gap-2 z-10 overflow-hidden border-b border-gray-200 dark:border-gray-700 w-full py-2 px-4">
          {Object.keys(files).map((file) => (
            <button
              key={file}
              className={`flex items-center gap-1 text-sm px-2 py-1 rounded-md cursor-pointer code-file-tab ${
                activeFile === file ? "bg-gray-300 dark:bg-gray-800" : ""
              }`}
              onClick={() => {
                setActiveFile(file);
              }}
            >
              <TypescriptIcon size={16} />
              {file}
            </button>
          ))}
        </div>
      )}
      <DynamicCodeBlock lang="tsx" code={status === "success" ? code : ""} />
      {status === "loading" && (
        <div className="h-full">
          <div className="h-full w-full animate-pulse space-y-4 p-4 absolute top-0 left-0">
            <div className="flex items-center space-x-2">
              <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-4 w-16 rounded bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div className="space-y-3">
              <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-4 w-2/3 rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-4 w-4/5 rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
            </div>
          </div>
        </div>
      )}
      {status === "error" && (
        <div className="h-full">
          <div className="flex items-center justify-center h-full w-full space-y-4 p-4 absolute top-0 left-0">
            <div className="flex flex-col items-center space-x-2">
              <span className="text-md text-red-500">An error occurred</span>
              <button
                className="text-sm border border-gray-700 dark:border-gray-300 rounded-md px-4 py-1 cursor-pointer disabled:opacity-30"
                onClick={fetchCode}
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const buildUrl = (snippetName: string, excludeParams = false) => {
  const PLAYGROUND_URL = process.env.NEXT_PUBLIC_PLAYGROUND_URL;
  if (!PLAYGROUND_URL) {
    throw new Error("PLAYGROUND_URL is not set");
  }

  const urlParams = new URLSearchParams();
  if (!excludeParams) {
    urlParams.set("layout", "row_reverse");
    urlParams.set("showHeader", "false");
    urlParams.set("activeFile", "chart.tsx");
  }

  if (SNIPPETS_WITH_EXTERNAL_DEPENDENCIES[snippetName]) {
    const pkgDependencies: Record<string, string> = {};
    SNIPPETS_WITH_EXTERNAL_DEPENDENCIES[snippetName].forEach((dependency) => {
      pkgDependencies[dependency.name] = `^${dependency.version}`;
    });
    urlParams.set("dependencies", JSON.stringify(pkgDependencies));
  }

  const searchParams = excludeParams ? "" : `?${urlParams.toString()}`;
  return `${PLAYGROUND_URL}/snippets/${snippetName}${searchParams}`;
};
