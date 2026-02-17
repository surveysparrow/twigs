import React, { useState } from "react";
import {
  Slider,
  Box,
  Text,
  SliderTrack,
  SliderThumb,
  SliderRange,
} from "@sparrowengg/twigs-react";

export default function SliderComprehensive() {
  const [rangeValue, setRangeValue] = useState([20, 80]);
  const [stepValue, setStepValue] = useState([50]);
  const [customValue, setCustomValue] = useState([30]);

  const RenderedThumb = () => {
    return (
      <SliderThumb
        css={{
          backgroundColor: "$white900",
          border: "1px solid $primary",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "$white900 !important",
          },
        }}
      />
    );
  };

  const RenderedRange = () => {
    return <SliderRange css={{ background: "$primary500" }} />;
  };

  const RenderedTrack = ({ children }: { children: React.ReactNode }) => {
    return (
      <SliderTrack
        css={{
          backgroundColor: "$primary50",
        }}
      >
        {children}
      </SliderTrack>
    );
  };

  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$8" }}>
      <Box
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$20",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        {/* Range Slider */}
        <Box css={{ display: "flex", flexDirection: "column", gap: "$3" }}>
          <Text css={{ fontSize: "$md", fontWeight: "$6" }}>Range Slider</Text>
          <Slider
            value={rangeValue}
            onValueChange={setRangeValue}
            min={0}
            max={100}
            step={1}
            size="sm"
            labels={{
              left: "0",
              right: "100",
            }}
            labelPlacement="top"
          />
          <Text css={{ fontSize: "$sm", color: "$neutral700" }}>
            Range: {rangeValue[0]} - {rangeValue[1]}
          </Text>
        </Box>

        {/* Step Slider */}
        <Box css={{ display: "flex", flexDirection: "column", gap: "$3" }}>
          <Text css={{ fontSize: "$md", fontWeight: "$6" }}>
            Step Slider (Step: 10)
          </Text>
          <Slider
            value={stepValue}
            onValueChange={setStepValue}
            min={0}
            max={100}
            step={10}
            size="sm"
            labels={{
              left: "0",
              right: "100",
            }}
            labelPlacement="top"
          />
          <Text css={{ fontSize: "$sm", color: "$neutral700" }}>
            Value: {stepValue[0]} (Step: 10)
          </Text>
        </Box>

        {/* Custom Components */}
        <Box css={{ display: "flex", flexDirection: "column", gap: "$3" }}>
          <Text css={{ fontSize: "$md", fontWeight: "$6" }}>
            Custom Components
          </Text>
          <Slider
            components={{
              Thumb: RenderedThumb,
              Track: RenderedTrack,
              Range: RenderedRange,
            }}
            value={customValue}
            onValueChange={setCustomValue}
            min={0}
            max={100}
            step={1}
            size="md"
          />
        </Box>
      </Box>
    </Box>
  );
}
