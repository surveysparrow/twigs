import React from "react";
import { Text, Box, Stack } from "@sparrowengg/twigs-react";

export default function TextTruncate() {
  const longText = "This is a very long text that demonstrates the truncation functionality. It contains multiple sentences and will be truncated when the truncate prop is enabled or when showLines is set to limit the number of visible lines.";

  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$8" }}>
      {/* Truncation Examples */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Text css={{ fontSize: "$lg", fontWeight: "$6", marginBottom: "$2" }}>Text Truncation</Text>
        
        <Stack gap="$4">
          <Box>
            <Text css={{ fontSize: "$sm", fontWeight: "$5", marginBottom: "$2" }}>Normal Text (No Truncation)</Text>
            <Box css={{ 
              width: "300px", 
              border: "1px solid $neutral300", 
              padding: "$3", 
              borderRadius: "$sm" 
            }}>
              <Text>{longText}</Text>
            </Box>
          </Box>
          
          <Box>
            <Text css={{ fontSize: "$sm", fontWeight: "$5", marginBottom: "$2" }}>Single Line Truncation</Text>
            <Box css={{ 
              width: "300px", 
              border: "1px solid $neutral300", 
              padding: "$3", 
              borderRadius: "$sm" 
            }}>
              <Text truncate>{longText}</Text>
            </Box>
          </Box>
          
          <Box>
            <Text css={{ fontSize: "$sm", fontWeight: "$5", marginBottom: "$2" }}>Multi-line Truncation (2 lines)</Text>
            <Box css={{ 
              width: "300px", 
              border: "1px solid $neutral300", 
              padding: "$3", 
              borderRadius: "$sm" 
            }}>
              <Text showLines={2}>{longText}</Text>
            </Box>
          </Box>
          
          <Box>
            <Text css={{ fontSize: "$sm", fontWeight: "$5", marginBottom: "$2" }}>Multi-line Truncation (3 lines)</Text>
            <Box css={{ 
              width: "300px", 
              border: "1px solid $neutral300", 
              padding: "$3", 
              borderRadius: "$sm" 
            }}>
              <Text showLines={3}>{longText}</Text>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
} 