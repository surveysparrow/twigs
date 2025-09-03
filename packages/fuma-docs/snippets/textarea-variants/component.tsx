import React, { useState } from "react";
import { Textarea, Box, Text } from "@sparrowengg/twigs-react";

export default function Component() {
  const [description, setDescription] = useState("");
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$8" }}>
      
      {/* Variants */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Text css={{ fontSize: "$lg", fontWeight: "$6", marginBottom: "$2" }}>Variants</Text>
          <Box>
            <Textarea
              label="Default Style"
              placeholder="This is the default textarea variant..."
              variant="default"
              value={description}
              onChange={setDescription}
              rows={3}
            />
          </Box>
          
          <Box>
            <Textarea
              label="Filled Style"
              placeholder="This is the filled textarea variant..."
              variant="filled"
              value={description}
              onChange={setDescription}
              rows={3}
            />
          </Box>
      </Box>

      {/* Sizes */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Text css={{ fontSize: "$lg", fontWeight: "$6", marginBottom: "$2" }}>Sizes</Text>
          
          <Box>
            <Textarea
              label="Small Textarea"
              placeholder="Small size textarea..."
              size="sm"
              value={description}
              onChange={setDescription}
              rows={2}
            />
          </Box>
          
          <Box>
            <Textarea
              label="Medium Textarea"
              placeholder="Medium size textarea..."
              size="md"
              value={description}
              onChange={setDescription}
              rows={3}
            />
          </Box>
          
          <Box>
            <Textarea
              label="Large Textarea"
              placeholder="Large size textarea..."
              size="lg"
              value={description}
              onChange={setDescription}
              rows={4}
            />
          </Box>
          
          <Box>
            <Textarea
              label="Extra Large Textarea"
              placeholder="Extra large size textarea..."
              size="xl"
              value={description}
              onChange={setDescription}
              rows={4}
            />
          </Box>
      </Box>

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

      {/* Other Features */}
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