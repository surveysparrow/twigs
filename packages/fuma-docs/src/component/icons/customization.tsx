"use client";
import React, { useMemo, useState } from "react";
import * as Icons from "@sparrowengg/twigs-react-icons";
import {
  CopyIcon,
  ResetIcon,
  SearchIcon,
  ColorPaletteIcon,
} from "@sparrowengg/twigs-react-icons";
import { Toastr, toast } from "@sparrowengg/twigs-react";

export function Customization() {
  const [search, setSearch] = useState("");
  const [iconSize, setIconSize] = useState(37);
  const [iconColor, setIconColor] = useState("currentColor");
  const [iconStrokeWidth, setIconStrokeWidth] = useState(1.5);
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  const iconEntries = useMemo(() => {
    return Object.entries(Icons).map(([name, component]) => ({
      name,
      component: component as React.ComponentType<Record<string, unknown>>,
    }));
  }, []);

  const filteredIcons = useMemo(() => {
    if (!search.trim()) return iconEntries;

    return iconEntries.filter(({ name }) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  }, [iconEntries, search]);

  const handleCopyStyles = async () => {
    try {
      await navigator.clipboard.writeText(
        `size={${iconSize}} color="${iconColor}" strokeWidth={${iconStrokeWidth}}`
      );
      toast({
        variant: "success",
        title: "Styles copied to clipboard",
      });
    } catch (err) {
      console.error("Failed to copy:", err);
      toast({
        variant: "error",
        title: "Copy failed",
        description: "Could not copy to clipboard",
      });
    }
  };

  const handleCopyIcon = async (name: string) => {
    try {
      await navigator.clipboard.writeText(name);
      toast({
        variant: "success",
        title: `${name} copied to clipboard`,
      });
    } catch (err) {
      console.error("Failed to copy:", err);
      toast({
        variant: "error",
        title: "Copy failed",
        description: "Could not copy to clipboard",
      });
    }
  };

  const handleReset = () => {
    setIconSize(37);
    setIconColor("currentColor");
    setIconStrokeWidth(1.5);
    toast({
      variant: "success",
      title: "Settings reset",
    });
  };

  const getColorValue = () => {
    if (iconColor === "currentColor") return "#e5e5e5";
    if (iconColor.startsWith("#")) return iconColor;
    return "#e5e5e5";
  };

  return (
    <div className="w-full">
      <Toastr duration={3000} />
      <div className="mb-6 flex items-center gap-3">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon size={20} className="text-gray-400" strokeWidth={1.5} />
          </div>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search icons..."
            className="w-full pl-10 pr-4 py-3 text-sm border rounded-lg bg-white transition-all"
          />
        </div>
        <button
          onClick={() => setIsPanelOpen(!isPanelOpen)}
          className="flex items-center justify-center w-12 h-12 rounded-lg border transition-all duration-200 cursor-pointer group"
          title={isPanelOpen ? "Hide customization" : "Show customization"}
        >
          <ColorPaletteIcon
            size={25}
            color="currentColor"
            strokeWidth={1.5}
            className="group-hover:scale-110 transition-transform duration-200"
          />
        </button>
      </div>
      <div
        className="overflow-hidden transition-max-height duration-500 ease-in-out mb-6 sticky top-24"
        style={{
          maxHeight: isPanelOpen ? "500px" : "0px",
        }}
      >
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    Size
                  </label>
                  <span className="text-sm font-mono font-medium text-gray-900 bg-gray-100 px-2 py-0.5 rounded">
                    {iconSize}px
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="25"
                    max="70"
                    value={iconSize}
                    onChange={(e) => setIconSize(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right,rgb(135, 237, 247) 0%, #00828D ${
                        ((iconSize - 25) / (70 - 25)) * 100
                      }%, #e5e7eb ${
                        ((iconSize - 25) / (70 - 25)) * 100
                      }%, #e5e7eb 100%)`,
                    }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    Stroke
                  </label>
                  <span className="text-sm font-mono font-medium text-gray-900 bg-gray-100 px-2 py-0.5 rounded">
                    {iconStrokeWidth}
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="0.5"
                    max="3"
                    step="0.1"
                    value={iconStrokeWidth}
                    onChange={(e) => setIconStrokeWidth(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right,rgb(135, 237, 247) 0%, #00828D ${
                        ((iconStrokeWidth - 0.5) / (3 - 0.5)) * 100
                      }%, #e5e7eb ${
                        ((iconStrokeWidth - 0.5) / (3 - 0.5)) * 100
                      }%, #e5e7eb 100%)`,
                    }}
                  />
                </div>
              </div>
              <div className="space-y-2 mt-1">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    Color
                  </label>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="relative mt-1">
                    <input
                      type="color"
                      value={getColorValue()}
                      onChange={(e) => setIconColor(e.target.value)}
                      className="w-8 h-8 rounded-full cursor-pointer color-input"
                      style={{
                        backgroundColor: getColorValue(),
                      }}
                    />
                  </div>
                  <input
                    type="text"
                    value={iconColor}
                    onChange={(e) => setIconColor(e.target.value)}
                    placeholder="currentColor"
                    className="flex-1 w-full px-3 py-2.5 text-sm font-mono border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-fd-muted-foreground/50 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-end gap-2">
              <button
                onClick={handleReset}
                className="px-4 py-2.5 text-sm bg-white border border-gray-300 hover:bg-gray-50 rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer"
                title="Reset to defaults"
              >
                <ResetIcon size={18} strokeWidth={1.5} />
                <span className="hidden sm:inline">Reset</span>
              </button>
              <button
                onClick={handleCopyStyles}
                className="px-4 py-2.5 text-sm text-white bg-fd-primary rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer"
                title="Copy style props"
              >
                <CopyIcon size={18} color="white" strokeWidth={1.5} />
                <span className="hidden sm:inline">Copy</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Showing{" "}
          <span className="font-semibold text-gray-900">
            {filteredIcons.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900">
            {iconEntries.length}
          </span>{" "}
          icons
        </p>
      </div>
      {filteredIcons.length > 0 ? (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2">
          {filteredIcons.map(({ name, component: IconComponent }) => (
            <div
              role="button"
              tabIndex={0}
              key={name}
              onClick={() => handleCopyIcon(name)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCopyIcon(name);
                }
              }}
              className="bg-gradient-to-br from-gray-50 to-white border rounded-2xl p-4 hover:cursor-pointer group hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center justify-center mb-2">
                <IconComponent
                  color={iconColor}
                  strokeWidth={iconStrokeWidth}
                  size={iconSize}
                  className="transition-transform duration-200 group-hover:scale-110"
                />
              </div>
              <p className="text-xs text-center text-nowrap text-gray-600 line-clamp-2 break-all">
                {name}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
            <SearchIcon size={32} className="text-gray-400" strokeWidth={1.5} />
          </div>
          <p className="text-lg font-medium text-gray-900 mb-2">
            No icons found
          </p>
          <p className="text-sm text-gray-600">
            {search.trim()
              ? `No icons match "${search}"`
              : "Try searching for an icon"}
          </p>
        </div>
      )}
    </div>
  );
}
