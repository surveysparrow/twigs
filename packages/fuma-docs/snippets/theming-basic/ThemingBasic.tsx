import React from "react";
import { Button } from "@sparrowengg/twigs-react";

export default function ThemingBasic() {
  return (
    <Button
      css={{
        backgroundColor: "$positive500",
        color: "$white900",
        borderRadius: "$md",
        width: "$25",
        padding: "$6 $10",
        cursor: "pointer",
        fontSize: "$md",
        "&:hover": {
          backgroundColor: "$positive600 !important",
        },
        "&:focus": {
          backgroundColor: "$positive900",
        },
      }}
    >
      Submit
    </Button>
  );
}
