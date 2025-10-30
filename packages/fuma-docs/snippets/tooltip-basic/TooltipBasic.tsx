import React from "react";
import { Button, Box, Tooltip, TooltipProvider, Text } from "@sparrowengg/twigs-react";

export default function TooltipBasic() {
  return (
    <TooltipProvider delayDuration={0}>
      <Box css={{ display: "flex", flexDirection: "column", gap: "$6" }}>
        
        <Box>
          <Text weight="bold" css={{ marginBottom: "$4" }}>Basic Tooltip</Text>
          
          <Tooltip content="This is a basic tooltip">
            <Button variant="solid">Hover me</Button>
          </Tooltip>
        </Box>

        <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
          <Text weight="bold">Different Positions</Text>
          
          <Box css={{ display: "flex", gap: "$4", flexWrap: "wrap" }}>
            <Tooltip content="Tooltip on top" side="top">
              <Button variant="solid">Top</Button>
            </Tooltip>
            
            <Tooltip content="Tooltip on bottom" side="bottom">
              <Button variant="solid">Bottom</Button>
            </Tooltip>
            
            <Tooltip content="Tooltip on left" side="left">
              <Button variant="solid">Left</Button>
            </Tooltip>
            
            <Tooltip content="Tooltip on right" side="right">
              <Button variant="solid">Right</Button>
            </Tooltip>
          </Box>
        </Box>

        <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
          <Text weight="bold">Different Sizes</Text>
          
          <Box css={{ display: "flex", gap: "$4", flexWrap: "wrap" }}>
            <Tooltip content="Small tooltip" size="sm">
              <Button variant="solid">Small</Button>
            </Tooltip>
            
            <Tooltip content="Medium tooltip with more content" size="md">
              <Button variant="solid">Medium</Button>
            </Tooltip>
          </Box>
        </Box>

        <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
          <Text weight="bold">Different Alignments</Text>
          
          <Box css={{ display: "flex", gap: "$4", flexWrap: "wrap" }}>
            <Tooltip content="Aligned to start" align="start">
              <Button variant="solid">Start</Button>
            </Tooltip>
            
            <Tooltip content="Aligned to center" align="center">
              <Button variant="solid">Center</Button>
            </Tooltip>
            
            <Tooltip content="Aligned to end" align="end">
              <Button variant="solid">End</Button>
            </Tooltip>
          </Box>
        </Box>

      </Box>
    </TooltipProvider>
  );
}