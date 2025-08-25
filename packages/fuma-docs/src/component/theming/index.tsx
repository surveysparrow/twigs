"use client";
import React from "react";
import { defaultTheme as theme } from "@sparrowengg/twigs-react";
import { Box, Button } from "@sparrowengg/twigs-react";

export const CustomizedButton = () => {
  return (
    <Button
      css={{
        backgroundColor: "$positive500",
        color: "$white900",
        borderRadius: "$pill",
        width: "200px",
        padding: "$6 $10",
        cursor: "pointer",
        fontSize: "$md",
        "&:hover": {
          backgroundColor: "$positive600",
        },
        "&:active": {
          backgroundColor: "$positive900",
        },
      }}
    >
      Submit
    </Button>
  );
};

export function DefaultThemeContainer() {
  return (
    <Box
      css={{
        maxHeight: 500,
        overflowY: "auto",
        border: "1px solid $black100",
        borderRadius: "$md",
        padding: "$6",
      }}
    >
      <pre>{JSON.stringify(theme, undefined, 2)}</pre>
    </Box>
  );
}
