"use client";
import React from "react";
import { defaultTheme as theme, toast, Toastr } from "@sparrowengg/twigs-react";

interface ColorSwatchProps {
  colorName: string;
  colorValue: string;
  token: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ colorName, colorValue, token }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`$${token}`);
      toast({
        variant: "success",
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
        description: "Could not copy to clipboard",
        css:{
          boxShadow: "none"
        }
      });
    }
  };

  return (
    <div className="relative">
      <div
        className="h-17 w-full rounded-md border border-fd-border cursor-pointer transition-all hover:scale-105"
        style={{ backgroundColor: colorValue }}
        onClick={handleCopy}
      />
      <div className="mt-2 text-center">
        <div className="text-xs font-medium text-fd-foreground">{colorName}</div>
        <div className="text-xs text-fd-muted-foreground font-mono">{colorValue}</div>
      </div>
    </div>
  );
};

interface ColorGroupProps {
  groupName: string;
  colors: Array<{ name: string; value: string; token: string }>;
}

const ColorGroup: React.FC<ColorGroupProps> = ({ groupName, colors }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-fd-foreground mb-4 capitalize">{groupName}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-4">
        {colors.map((color) => (
          <ColorSwatch
            key={color.token}
            colorName={color.name}
            colorValue={color.value}
            token={color.token}
          />
        ))}
      </div>
    </div>
  );
};

export function TwigsColorPalette() {
  const organizeColors = () => {
    const colorGroups: Record<string, Array<{ name: string; value: string; token: string }>> = {};
    
    // Get all colors from theme
    const colors = theme.colors;
    
    // Group colors by their prefix
    Object.entries(colors).forEach(([key, value]) => {
      const match = key.match(/^([a-zA-Z]+)(\d+)?$/);
      if (match) {
        const [, colorName, shade] = match;
        const groupName = colorName;
        
        if (!colorGroups[groupName]) {
          colorGroups[groupName] = [];
        }
        
        colorGroups[groupName].push({
          name: shade || 'base',
          value: value as string,
          token: key
        });
      }
    });
    
    // Sort each group by shade number
    Object.keys(colorGroups).forEach(groupName => {
      colorGroups[groupName].sort((a, b) => {
        const aNum = parseInt(a.name) || 0;
        const bNum = parseInt(b.name) || 0;
        if (a.name === 'base') return -1;
        if (b.name === 'base') return 1;
        return aNum - bNum;
      });
    });
    
    Object.keys(colorGroups).forEach(groupName => {
      if (groupName === 'primary' || groupName === 'secondary') {
        colorGroups[groupName] = colorGroups[groupName].filter(color => color.name !== 'base');
      }
    });
    
    return colorGroups;
  };

  const colorGroups = organizeColors();

  return (
    <>
      <Toastr duration={3000} />
      <div className="space-y-6">
        {Object.entries(colorGroups).map(([groupName, colors]) => (
          <ColorGroup key={groupName} groupName={groupName} colors={colors} />
        ))}
      </div>
    </>
  );
}