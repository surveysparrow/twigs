"use client";

import React, { useState, useMemo } from 'react';
import * as Icons from '@sparrowengg/twigs-react-icons';
import { Button, toast ,Toastr} from '@sparrowengg/twigs-react';
import { ChevronDownIcon, ChevronRightIcon } from '@sparrowengg/twigs-react-icons';
import './styles.css';

export default function AllIcons() {
  const [search, setSearch] = useState('');
  
  // Icon prop controls
  const [iconSize, setIconSize] = useState(32);
  const [iconColor, setIconColor] = useState('currentColor');
  const [iconStrokeWidth, setIconStrokeWidth] = useState(2);
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
      await navigator.clipboard.writeText(`${name}`);
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
      <div className="w-full">
        {/* Search Input */}
      <div className="mb-4 flex items-center justify-between gap-2">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search icons..."
          className="w-full px-4 py-1 border border-fd-border rounded-lg bg-fd-card text-fd-card-foreground placeholder:text-fd-muted-foreground focus:outline-none focus:ring-1 focus:ring-fd-ring focus:border-transparent transition-colors"
        />
        <Button className="w-fit !border-1 !border-fd-border hover:!border-fd-primary/30 !text-fd-primary !bg-fd-secondary !font-normal" variant="outline" size="lg" leftIcon={showControls ? <ChevronDownIcon /> : <ChevronRightIcon />} onClick={() => setShowControls(!showControls)}>Customize</Button>
      </div>

      {/* Icon Controls */}
      <div className="mb-4">
        <div className={`bg-fd-card rounded-lg p-3 pt-0 space-y-3 border border-fd-border transition-all duration-300 ease-in-out overflow-hidden ${
          showControls 
            ? 'max-h-[1000px] opacity-100 transform translate-y-0' 
            : 'max-h-0 opacity-0 transform -translate-y-2'
        }`}>
            {/* Header with Reset Button */}
            <div className="flex justify-between items-center pb-1 border-b border-fd-border">
              <h3>
                Icon Properties
              </h3>
              <button
                onClick={() => {
                  setIconSize(32);
                  setIconColor('currentColor');
                  setIconStrokeWidth(1.5);
                }}
                className="px-4 py-2 text-sm bg-fd-primary text-fd-primary-foreground hover:opacity-90 rounded-md transition-all duration-200 font-medium cursor-pointer"
              >
                Reset to Defaults
              </button>
            </div>

            {/* Current Values Display */}
            <div className="text-sm text-fd-secondary-foreground bg-fd-secondary rounded-md p-3 border border-fd-border">
              <span className="text-fd-primary">size</span>={iconSize}{' '}
              <span className="text-fd-primary">color</span>=&ldquo;{iconColor}&rdquo;{' '}
              <span className="text-fd-primary">strokeWidth</span>={iconStrokeWidth.toFixed(1)}
            </div>
            {/* Size Control */}
            <div className="space-y-3">
              <p>
                Size: <span className="text-fd-primary">{iconSize}px</span>
              </p>
              <div className="flex items-center gap-2 mb-3">
                {[16, 24, 32, 48].map((size) => (
                  <button
                    key={size}
                    onClick={() => setIconSize(size)}
                    className={`px-3 py-2 text-sm rounded-md transition-all duration-200 font-medium cursor-pointer ${
                      iconSize === size
                        ? 'bg-fd-primary text-fd-primary-foreground shadow-sm border border-fd-primary'
                        : 'bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-primary hover:text-fd-primary-foreground border border-fd-border hover:border-fd-primary'
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
                className="w-full h-2 bg-fd-primary/10 rounded-lg appearance-none cursor-pointer slider-primary"
              />
            </div>

            {/* Color Control */}
            <div className="space-y-3">
              <p>
                Color: <span className="text-fd-primary">{iconColor}</span>
              </p>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {[
                  { name: 'Current', value: 'currentColor' },
                  { name: 'primary', value: '#2E666D' },
                  { name: 'Warning', value: '#F59E0B' },
                  { name: 'Negative', value: '#F65633' },
                  { name: 'highlight', value: '#E6CF00' },
                  { name: 'positive', value: '#5EA130' },
                ].map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setIconColor(color.value)}
                    className={`px-3 py-2 text-sm rounded-md transition-all duration-200 font-medium cursor-pointer ${
                      iconColor === color.value
                        ? 'bg-fd-primary text-fd-primary-foreground shadow-sm border border-fd-primary'
                        : 'bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-primary hover:text-fd-primary-foreground border border-fd-border hover:border-fd-primary'
                    }`}
                  >
                    {color.name}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3 bg-fd-secondary rounded-md p-3 border border-fd-border">
                <input
                  type="color"
                  value={iconColor === 'currentColor' ? '#e5e5e5' : iconColor}
                  onChange={(e) => setIconColor(e.target.value)}
                  className="w-10 h-10 rounded-md cursor-pointer"
                />
                <input
                  type="text"
                  value={iconColor}
                  onChange={(e) => setIconColor(e.target.value)}
                  placeholder="Color value (hex, rgb, hsl...)"
                  className="w-full px-2 py-1 border border-fd-border rounded-md bg-fd-card text-fd-card-foreground placeholder:text-fd-muted-foreground focus:outline-none focus:ring-1 focus:ring-fd-ring focus:border-transparent transition-colors"
                />
              </div>
            </div>

            {/* Stroke Width Control */}
            <div className="space-y-3">
              <p>
                Stroke Width: <span className="text-fd-primary">{iconStrokeWidth.toFixed(1)}</span>
              </p>
              <div className="flex items-center gap-2 mb-3">
                {[1, 1.5, 2, 2.5].map((width) => (
                  <button
                    key={width}
                    onClick={() => setIconStrokeWidth(width)}
                    className={`px-3 py-2 text-sm rounded-md transition-all duration-200 font-medium cursor-pointer ${
                      iconStrokeWidth === width
                        ? 'bg-fd-primary text-fd-primary-foreground shadow-sm border border-fd-primary'
                        : 'bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-primary hover:text-fd-primary-foreground border border-fd-border hover:border-fd-primary'
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
                className="w-full h-2 bg-fd-primary/10 rounded-lg appearance-none cursor-pointer slider-primary"
                
              />
            </div>
        </div>
      </div>

      {/* Icon Count */}
      <div className="mb-6">
        <p className="text-sm">
          {filteredIcons.length} of {iconEntries.length} icons
        </p>
      </div>

      {/* Icon Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
        {filteredIcons.map(({ name, component: IconComponent }) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center p-4 border border-fd-border rounded-lg hover:border-fd-primary/30 transition-all duration-200 hover:scale-105 hover:shadow-md"
          >
            {/* Icon */}
            <div className="mb-3 group-hover:text-fd-accent-foreground transition-colors duration-200 cursor-pointer">
              <IconComponent 
                size={iconSize} 
                color={iconColor} 
                strokeWidth={iconStrokeWidth}
                onClick={()=>handleCopy(name)}
              />
            </div>
            
            {/* Icon Name */}
            <p className="text-xs text-center text-fd-secondary-foreground leading-tight">
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