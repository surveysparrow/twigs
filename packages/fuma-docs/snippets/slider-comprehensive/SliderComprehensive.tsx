import React, { useState } from "react";
import { Slider, Box, Text, SliderTrack, SliderThumb } from "@sparrowengg/twigs-react";

export default function SliderComprehensive() {
  const [rangeValue, setRangeValue] = useState([20, 80]);
  const [stepValue, setStepValue] = useState([50]);

  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$8" }}>
      <Box css={{ display: "flex", flexDirection: "column", gap: "$6", width: "100%", maxWidth: "400px" }}>

        {/* Range Slider */}
        <Box css={{ display: "flex", flexDirection: "column", gap: "$3" }}>
          <Text css={{ fontSize: "$md", fontWeight: "$6" }}>Range Slider</Text>
          <Slider
            value={rangeValue}
            onValueChange={setRangeValue}
            min={0}
            max={100}
            step={1}
            size="md"
            labels={{
              left: "0",
              right: "100"
            }}
            labelPlacement="top"
          />
          <Text css={{ fontSize: "$sm", color: "$neutral700" }}>
            Range: {rangeValue[0]} - {rangeValue[1]}
          </Text>
        </Box>

        {/* Step Slider */}
        <Box css={{ display: "flex", flexDirection: "column", gap: "$3" }}>
          <Text css={{ fontSize: "$md", fontWeight: "$6" }}>Step Slider (Step: 10)</Text>
          <Slider
            value={stepValue}
            onValueChange={setStepValue}
            min={0}
            max={100}
            step={10}
            size="md"
            labels={{
              left: "0",
              right: "100"
            }}
            labelPlacement="top"
          />
          <Text css={{ fontSize: "$sm", color: "$neutral700" }}>
            Value: {stepValue[0]} (Step: 10)
          </Text>
        </Box>

        {/* Custom Components */}
        <Box css={{ display: "flex", flexDirection: "column", gap: "$3" }}>
          <Text css={{ fontSize: "$md", fontWeight: "$6" }}>Custom Components</Text>
          <Slider
        components={{
          Thumb: () => (
            <SliderThumb
              css={{
                backgroundColor: "$negative900",
                borderRadius: "$round",
              }}
            />
          ),
          Track: ({ children }: { children: React.ReactNode }) => (
            <SliderTrack>
              <Box
                css={{
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(to right, red, blue)",
                  position: "absolute",
                }}
              />
              {children}
            </SliderTrack>
          ),
        }}
        />
        </Box>
      </Box>
    </Box>
  );
} 