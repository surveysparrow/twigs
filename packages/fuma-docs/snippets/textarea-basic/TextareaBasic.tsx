import React, { useState } from "react";
import { Textarea, Box } from "@sparrowengg/twigs-react";

export default function TextareaBasic() {
  const [description, setDescription] = useState("");

  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$6" }}>
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Box css={{ fontSize: "$lg", fontWeight: "$6", marginBottom: "$2" }}>Basic Textarea</Box>
          <Textarea
            label="Description"
            placeholder="Describe your project..."
            value={description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
            rows={3}
            maxLength={100}
            showCount
            helperText="Provide a detailed description of your project"
          />
      </Box>
    </Box>
  );
}