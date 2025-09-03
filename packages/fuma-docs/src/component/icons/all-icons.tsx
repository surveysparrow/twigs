"use client";

import React, { useState, useMemo } from 'react';
import * as Icons from '@sparrowengg/twigs-react-icons';
import { toast ,Toastr} from '@sparrowengg/twigs-react';

export default function AllIcons() {
  const [search, setSearch] = useState('');
  
  // Icon prop controls
  const [iconSize, setIconSize] = useState(32);
  const [iconColor, setIconColor] = useState('currentColor');
  const [iconStrokeWidth, setIconStrokeWidth] = useState(1.5);
  const [showControls, setShowControls] = useState(false);

  // Convert icons object to array for easier filtering
  const iconEntries = useMemo(() => {
    return Object.entries(Icons).map(([name, component]) => ({
      name,
      component: component as React.ComponentType<Record<string, unknown>>
    }));
  }, []);

  // Filter icons based on search term
  const filteredIcons = useMemo(() => {
    if (!search.trim()) return iconEntries;
    
    return iconEntries.filter(({ name }) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  }, [iconEntries, search]);

  const handleCopy = async (name: string) => {
    try {
      await navigator.clipboard.writeText(`import { ${name} } from '@sparrowengg/twigs-react-icons';`);
      toast({
        variant: "default",
        title: `Copied to clipboard`,
        css:{
            boxShadow: "none"
        }
      });
    } catch (err) {
      console.error('Failed to copy:', err);
      toast({
        variant: "error",
        title: "Copy failed",
        description: "Could not copy to clipboard"
      });
    }
  };

  return (
    <>
      <Toastr duration={3000} />
      <style jsx>{`
        .slider-primary::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: hsl(226, 55%, 45%);
          border: 2px solid hsl(0, 0%, 100%);
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
        
        .slider-primary::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: hsl(226, 55%, 45%);
          border: 2px solid hsl(0, 0%, 100%);
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
        
        .dark .slider-primary::-webkit-slider-thumb {
          background: hsl(234, 100%, 83%);
        }
        
        .dark .slider-primary::-moz-range-thumb {
          background: hsl(234, 100%, 83%);
        }
      `}</style>
      <div className="w-full">
        {/* Search Input */}
      <div className="mb-4">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search icons..."
          className="w-full px-4 py-3 border border-fd-border rounded-lg bg-fd-card text-fd-card-foreground placeholder:text-fd-muted-foreground focus:outline-none focus:ring-2 focus:ring-fd-primary focus:border-transparent transition-colors"
        />
      </div>

      {/* Icon Controls */}
      <div className="mb-6">
        <button
          onClick={() => setShowControls(!showControls)}
          className="flex items-center gap-2 text-sm font-medium text-fd-muted-foreground hover:text-fd-accent-foreground transition-colors mb-3 cursor-pointer"
        >
          <svg
            className={`w-4 h-4 transition-transform ${showControls ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Customize Icon Properties
        </button>

        {showControls && (
          <div className="bg-fd-card rounded-lg p-6 space-y-6 border border-fd-border">
            {/* Header with Reset Button */}
            <div className="flex justify-between items-center pb-3 border-b border-fd-border">
              <h3 className="text-base font-semibold text-fd-foreground">
                Icon Properties
              </h3>
              <button
                onClick={() => {
                  setIconSize(32);
                  setIconColor('currentColor');
                  setIconStrokeWidth(1.5);
                }}
                className="px-4 py-2 text-sm bg-fd-primary text-fd-primary-foreground hover:opacity-90 rounded-md transition-all duration-200 font-medium"
              >
                Reset to Defaults
              </button>
            </div>

            {/* Current Values Display */}
            <div className="text-sm text-fd-foreground bg-fd-muted rounded-md p-3 font-mono border border-fd-border">
              <span className="text-fd-primary">size</span>={iconSize}{' '}
              <span className="text-fd-primary">color</span>=&ldquo;{iconColor}&rdquo;{' '}
              <span className="text-fd-primary">strokeWidth</span>={iconStrokeWidth.toFixed(1)}
            </div>
            {/* Size Control */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-fd-foreground">
                Size: <span className="text-fd-primary font-mono">{iconSize}px</span>
              </label>
              <div className="flex items-center gap-2 mb-3">
                {[16, 24, 32, 48].map((size) => (
                  <button
                    key={size}
                    onClick={() => setIconSize(size)}
                    className={`px-3 py-2 text-sm rounded-md transition-all duration-200 font-medium ${
                      iconSize === size
                        ? 'bg-fd-primary text-fd-primary-foreground shadow-sm'
                        : 'bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-primary hover:text-fd-primary-foreground'
                    }`}
                  >
                    {size}px
                  </button>
                ))}
              </div>
              <input
                type="range"
                min="12"
                max="64"
                value={iconSize}
                onChange={(e) => setIconSize(Number(e.target.value))}
                className="w-full h-2 bg-fd-muted rounded-lg appearance-none cursor-pointer slider-primary"
              />
            </div>

            {/* Color Control */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-fd-foreground">
                Color: <span className="text-fd-primary font-mono">{iconColor}</span>
              </label>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {[
                  { name: 'Current', value: 'currentColor' },
                  { name: 'VitePress', value: '#4F46E5' },
                  { name: 'Success', value: '#10b981' },
                  { name: 'Warning', value: '#f99c00' },
                  { name: 'Error', value: '#fb2c36' },
                  { name: 'Gray', value: '#6b7280' }
                ].map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setIconColor(color.value)}
                    className={`px-3 py-2 text-sm rounded-md transition-all duration-200 font-medium ${
                      iconColor === color.value
                        ? 'bg-fd-primary text-fd-primary-foreground shadow-sm'
                        : 'bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-primary hover:text-fd-primary-foreground'
                    }`}
                  >
                    {color.name}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3 bg-fd-muted rounded-md p-3 border border-fd-border">
                <input
                  type="color"
                  value={iconColor === 'currentColor' ? '#4F46E5' : iconColor}
                  onChange={(e) => setIconColor(e.target.value)}
                  className="w-10 h-10 rounded-md cursor-pointer border border-fd-border shadow-sm"
                />
                <input
                  type="text"
                  value={iconColor}
                  onChange={(e) => setIconColor(e.target.value)}
                  placeholder="Color value (hex, rgb, hsl...)"
                  className="flex-1 px-3 py-2 text-sm border border-fd-border rounded-md bg-fd-card text-fd-card-foreground placeholder:text-fd-muted-foreground focus:ring-2 focus:ring-fd-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Stroke Width Control */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-fd-foreground">
                Stroke Width: <span className="text-fd-primary font-mono">{iconStrokeWidth.toFixed(1)}</span>
              </label>
              <div className="flex items-center gap-2 mb-3">
                {[1, 1.5, 2, 2.5].map((width) => (
                  <button
                    key={width}
                    onClick={() => setIconStrokeWidth(width)}
                    className={`px-3 py-2 text-sm rounded-md transition-all duration-200 font-medium ${
                      iconStrokeWidth === width
                        ? 'bg-fd-primary text-fd-primary-foreground shadow-sm'
                        : 'bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-primary hover:text-fd-primary-foreground'
                    }`}
                  >
                    {width}
                  </button>
                ))}
              </div>
              <input
                type="range"
                min="0.5"
                max="3"
                step="0.1"
                value={iconStrokeWidth}
                onChange={(e) => setIconStrokeWidth(Number(e.target.value))}
                className="w-full h-2 bg-fd-muted rounded-lg appearance-none cursor-pointer slider-primary"
              />
            </div>
          </div>
        )}
      </div>

      {/* Icon Count */}
      <div className="mb-6">
        <p className="text-sm text-fd-muted-foreground">
          {filteredIcons.length} of {iconEntries.length} icons
        </p>
      </div>

      {/* Icon Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filteredIcons.map(({ name, component: IconComponent }) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center p-4 border border-fd-border rounded-lg hover:border-fd-accent hover:bg-fd-accent/50 transition-all duration-200 group"
          >
            {/* Icon */}
            <div className="mb-3 text-fd-muted-foreground group-hover:text-fd-accent-foreground transition-colors duration-200 cursor-pointer">
              <IconComponent 
                size={iconSize} 
                color={iconColor} 
                strokeWidth={iconStrokeWidth}
                onClick={()=>handleCopy(name)}
              />
            </div>
            
            {/* Icon Name */}
            <p className="text-xs text-center text-fd-muted-foreground font-mono leading-tight break-all">
              {name}
            </p>
          </div>
        ))}
      </div>

        {/* No Results */}
        {filteredIcons.length === 0 && search.trim() && (
          <div className="text-center py-12">
            <p className="text-fd-muted-foreground">
              No icons found matching &ldquo;{search}&rdquo;
            </p>
          </div>
        )}
      </div>
    </>
  );
}