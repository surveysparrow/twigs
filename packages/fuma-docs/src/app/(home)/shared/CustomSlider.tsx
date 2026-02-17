"use client";
import React, { memo } from "react";
import {
  SliderThumb,
  SliderRange,
  SliderTrack,
} from "@sparrowengg/twigs-react";

// Hidden thumb for progress-bar style sliders
export const HiddenThumb = memo(function HiddenThumb() {
  return <SliderThumb css={{ display: "none" }} />;
});

// Primary colored range
export const PrimaryRange = memo(function PrimaryRange() {
  return <SliderRange css={{ backgroundColor: "$primary400" }} />;
});

// Accent colored range for employee card
export const AccentStripedRange = memo(function AccentStripedRange() {
  return (
    <SliderRange
      css={{
        background: `repeating-linear-gradient(
          90deg,
          $accent400 0px,
          $accent400 3px,
          transparent 3px,
          transparent 6px
        )`,
        borderRadius: "999px",
      }}
    />
  );
});

// Features progress range (indigo)
export const FeaturesRange = memo(function FeaturesRange() {
  return (
    <SliderRange
      css={{
        backgroundColor: "#818CF8",
        borderTopLeftRadius: "0px",
        borderBottomLeftRadius: "0px",
        height: "4px !important",
      }}
    />
  );
});

// Standard track
interface TrackProps {
  children: React.ReactNode;
}

export const StandardTrack = memo(function StandardTrack({ children }: TrackProps) {
  return (
    <SliderTrack
      css={{
        width: "100%",
        backgroundColor: "$neutral100",
        position: "absolute",
        borderRadius: "$md",
      }}
    >
      {children}
    </SliderTrack>
  );
});

// Employee card track
export const SecondaryTrack = memo(function SecondaryTrack({ children }: TrackProps) {
  return (
    <SliderTrack
      css={{
        width: "100%",
        height: "8px",
        backgroundColor: "$secondary50",
        borderRadius: "999px",
      }}
    >
      {children}
    </SliderTrack>
  );
});

// Features track (transparent)
export const TransparentTrack = memo(function TransparentTrack({ children }: TrackProps) {
  return (
    <SliderTrack
      css={{
        width: "100%",
        backgroundColor: "transparent",
        position: "absolute",
        borderRadius: "0px",
        height: "4px",
      }}
    >
      {children}
    </SliderTrack>
  );
});

// Pre-configured slider component configs for easy reuse
export const DashboardSliderComponents = {
  Thumb: HiddenThumb,
  Range: PrimaryRange,
  Track: StandardTrack,
};

export const EmployeeSliderComponents = {
  Thumb: HiddenThumb,
  Range: AccentStripedRange,
  Track: SecondaryTrack,
};

export const FeaturesSliderComponents = {
  Thumb: HiddenThumb,
  Range: FeaturesRange,
  Track: TransparentTrack,
};

