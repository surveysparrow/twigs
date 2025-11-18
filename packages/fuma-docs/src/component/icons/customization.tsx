"use client";
import React, { useMemo, useState } from "react";
import * as Icons from "@sparrowengg/twigs-react-icons";
import { CopyIcon, ResetIcon } from "@sparrowengg/twigs-react-icons";
import {
  Input,
  Slider,
  SliderRange,
  SliderThumb,
  SliderTrack,
  Text,
  Tooltip,
  TooltipProvider,
  toast,
  Toastr,
} from "@sparrowengg/twigs-react";

export function Customization() {
  const [search, setSearch] = useState("");
  const [iconSize, setIconSize] = useState(32);
  const [iconColor, setIconColor] = useState("currentColor");
  const [iconStrokeWidth, setIconStrokeWidth] = useState(1.5);
  // Convert icons object to array for easier filtering
  const iconEntries = useMemo(() => {
    return Object.entries(Icons).map(([name, component]) => ({
      name,
      component: component as React.ComponentType<Record<string, unknown>>,
    }));
  }, []);

  // Filter icons based on search term
  const filteredIcons = useMemo(() => {
    if (!search.trim()) return iconEntries;

    return iconEntries.filter(({ name }) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  }, [iconEntries, search]);

  const handleCopyStyles = async () => {
    try {
      await navigator.clipboard.writeText(`size:{${iconSize}} color:"${iconColor}" strokeWidth:{${iconStrokeWidth}}`);
      toast({
        variant: "default",
        title: `Copied to clipboard`,
        css: {
          boxShadow: "none"
        }
      });
    } catch (err) {
      console.error('Failed to copy:', err);
      toast({
        variant: "error",
        title: "Copy failed",
        description: "Could not copy to clipboard",
        css: {
          boxShadow: "none"
        }
      });
    }
  };

  const handleCopyIcon = async (name: string) => {
    try {
      await navigator.clipboard.writeText(name);
      toast({
        variant: "default",
        title: `Copied to clipboard`,
        css: {
          boxShadow: "none"
        }
      });
    } catch (err) {
      console.error('Failed to copy:', err);
      toast({
        variant: "error",
        title: "Copy failed",
        description: "Could not copy to clipboard",
        css: {
          boxShadow: "none"
        }
      });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <Toastr duration={3000}/>
      <div className="lg:!w-2/4 bg-fd-card h-fit p-2 border border-fd-border rounded-lg mb-4 lg:mr-4 sticky top-30 shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <Text size="md" className="!p-2 !m-0" weight="medium">
            Properties
          </Text>
          <ResetIcon
            color="currentColor"
            strokeWidth={1}
            className="cursor-pointer"
            onClick={() => {
              setIconSize(32);
              setIconColor("currentColor");
              setIconStrokeWidth(1.5);
            }}
          />
        </div>
        <div className="flex flex-row justify-between pl-2 pr-2">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-fd-muted-foreground">Color</p>
          </div>
          <div className="flex flex-row gap-2 items-center border border-fd-border rounded-lg p-1 h-fit">
            <Input
              type="color"
              value={iconColor === "currentColor" ? "#e5e5e5" : iconColor}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setIconColor(e.target.value)
              }
              className="!w-7 !h-8 !rounded-md cursor-pointer !bg-fd-card !m-0 !border-none !shadow-none !p-0"
            />
            <Input
              type="text"
              value={iconColor}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setIconColor(e.target.value)
              }
              placeholder="Color value (hex, rgb, hsl...)"
              className="!w-20 lg:!w-21 !bg-fd-card !text-fd-muted-foreground !border-none !shadow-none !p-0"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between pl-2 pr-2">
          <div>
            <p className="text-sm text-fd-muted-foreground !m-0">
              Stroke Width
            </p>
          </div>
          <div>
            <p className="text-sm text-fd-secondary-foreground !m-0">
              {iconStrokeWidth}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between p-2">
          <Slider
            value={[iconStrokeWidth]}
            className="w-full cursor-pointer"
            onValueChange={(value: number[]) => setIconStrokeWidth(value[0])}
            min={0.5}
            max={2}
            step={0.1}
            size={10}
            components={{
              Thumb: () => <SliderThumb className="!bg-fd-primary !w-3 !h-3" />,
              Range: () => <SliderRange className="!bg-fd-primary" />,
              Track: ({ children }: { children: React.ReactNode }) => (
                <SliderTrack className="!w-full !bg-fd-muted !absolute !rounded-full">
                  {children}
                </SliderTrack>
              ),
            }}
          />
        </div>
        <div className="flex flex-row justify-between pl-2 pr-2">
          <div>
            <p className="text-sm text-fd-muted-foreground !m-0">Size</p>
          </div>
          <div>
            <p className="text-sm text-fd-secondary-foreground !m-0">
              {iconSize}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between p-2">
          <Slider
            value={[iconSize]}
            className="w-full cursor-pointer"
            onValueChange={(value: number[]) => setIconSize(value[0])}
            min={8}
            max={40}
            step={1}
            size={10}
            components={{
              Thumb: () => <SliderThumb className="!bg-fd-primary !w-3 !h-3" />,
              Range: () => <SliderRange className="!bg-fd-primary" />,
              Track: ({ children }: { children: React.ReactNode }) => (
                <SliderTrack className="!w-full !bg-fd-muted !absolute !rounded-full">
                  {children}
                </SliderTrack>
              ),
            }}
          />
        </div>
        <div className="flex flex-row justify-between p-2">
          <button
            className="!w-full !bg-fd-primary !text-fd-primary-foreground !font-normal flex items-center justify-center gap-2 cursor-pointer rounded-lg"
            onClick={handleCopyStyles}
          >
            Copy Styles
            <CopyIcon size={16} />
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <div>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search icons..."
            className="!w-full px-4 py-1 border border-fd-border rounded-lg bg-fd-card text-fd-card-foreground placeholder:text-fd-muted-foreground focus:outline-none focus:ring-1 focus:ring-fd-ring focus:border-transparent transition-colors"
          />
        </div>
        {/* Icon Count */}
        <div>
          <p className="text-sm !m-0">
            {filteredIcons.length} of {iconEntries.length} icons
          </p>
        </div>
        <div 
        className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-9 xl:grid-cols-9 gap-3"
        >
          {filteredIcons.map(({ name, component: IconComponent }) => (
            <TooltipProvider delayDuration={0} key={name}>
              {/* Icon */}
              <div className="flex items-center justify-center w-fit h-fit p-2 pb-1 border border-fd-border rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md group">
                <Tooltip
                  content={name}
                  className="mb-3 group-hover:text-fd-accent-foreground transition-colors duration-200 cursor-pointer"
                >
                  <IconComponent
                    color={iconColor}
                    strokeWidth={iconStrokeWidth}
                    size={iconSize}
                    onClick={() => handleCopyIcon(name)}
                    className="cursor-pointer"
                  />
                </Tooltip>
              </div>
            </TooltipProvider>
          ))}
        </div>
        {filteredIcons.length === 0 && search.trim() && (
          <div className="text-center py-12">
            <p className="text-fd-muted-foreground">
              No icons found matching &ldquo;{search}&rdquo;
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
