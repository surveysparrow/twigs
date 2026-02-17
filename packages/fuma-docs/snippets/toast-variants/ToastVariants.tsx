import React from "react";
import { Button, Box, Toastr, Text } from "@sparrowengg/twigs-react";
import { toast } from "@sparrowengg/twigs-react";

export default function ToastVariants() {

  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$8" }}>
      <Toastr duration={10000}/>  
      {/* All Variants */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Text weight="bold">All Variants</Text>
        
        <Box>
          <Button
            variant="solid"
            onClick={() => {
              toast({
                variant: "default",
                title: "Default message",
                description: "This is a default toast notification."
              });
            }}
            css={{ marginBottom: "$4" }}
          >
            Default Toast
          </Button>
          
          <Button
            variant="solid"
            onClick={() => {
              toast({
                variant: "success",
                title: "Success!",
                description: "Your action was completed successfully."
              });
            }}
            css={{ marginBottom: "$4" }}
          >
            Success Toast
          </Button>
          
          <Button
            variant="solid"
            onClick={() => {
              toast({
                variant: "error",
                title: "Error occurred",
                description: "Something went wrong. Please try again."
              });
            }}
            css={{ marginBottom: "$4" }}
          >
            Error Toast
          </Button>
          
          <Button
            variant="solid"
            onClick={() => {
              toast({
                variant: "warning",
                title: "Warning",
                description: "Please review your input before proceeding."
              });
            }}
            css={{ marginBottom: "$4" }}
          >
            Warning Toast
          </Button>

          <Button
            variant="solid"
            onClick={() => {
              toast({
                variant: "loading",
                title: "Fetching..",
                description: "Please wait data is being processed"
              });
            }}
            css={{ marginBottom: "$4" }}
          >
            Loading Toast
          </Button>
        </Box>
      </Box>
    </Box>
  );
}