import React, { useState } from "react";
import { Textarea, Box, Text } from "@sparrowengg/twigs-react";

export default function TextareaFeatures() {
  const [description, setDescription] = useState("");
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$8" }}>
      {/* Resize Options */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Text css={{ fontSize: "$lg", fontWeight: "$6", marginBottom: "$2" }}>Resize Options</Text>
        
          <Box>
            <Textarea
              label="Horizontal Resize"
              placeholder="This textarea can be resized horizontally..."
              resize="horizontal"
              value={description}
              onChange={setDescription}
              rows={3}
            />
          </Box>
          
          <Box>
            <Textarea
              label="Vertical Resize"
              placeholder="This textarea can be resized vertically..."
              resize="vertical"
              value={description}
              onChange={setDescription}
              rows={3}
            />
          </Box>
          
          <Box>
            <Textarea
              label="No Resize"
              placeholder="This textarea cannot be resized..."
              resize="none"
              value={description}
              onChange={setDescription}
              rows={3}
            />
          </Box>
      </Box>
      {/* Features */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Text css={{ fontSize: "$lg", fontWeight: "$6", marginBottom: "$2" }}>Other Features</Text>
          <Box>
            <Text css={{ fontSize: "$sm", fontWeight: "$5", marginBottom: "$3" }}>With Info Tooltip</Text>
            <Textarea
              label="with tooltip info"
              placeholder="Describe your project..."
              info="Provide a detailed description of your project goals and requirements"
              rows={4}
            />
          </Box>
          <Box>
            <Textarea
              label="Error Message"
              placeholder="Describe the error you encountered..."
              requiredIndicator
              error="Please provide a detailed description of the error"
              errorBorder
              rows={5}
            />
          </Box>
      </Box>
    </Box>
  );
}