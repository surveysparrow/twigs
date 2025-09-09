import React from "react";
import { Button, Box, Toastr, ToastAction, Text } from "@sparrowengg/twigs-react";
import { toast } from "@sparrowengg/twigs-react";

export default function ToastWithActions() {
  const ResolvePromise = () => new Promise<{ title: string; description: string }>((resolve) => {
    setTimeout(() => {
      resolve({
        title: "Success!",
        description: "Record created successfully"
      });
    }, 2000);
  });

  const RejectPromise = () => new Promise<{ data: string }>((resolve, reject) => {
    setTimeout(() => {
      reject({
        data: "Something went wrong"
      });
    }, 2000);
  });

  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$8" }}>
      <Toastr duration={10000}/>
      {/* With Actions */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Text weight="bold">With Actions</Text>
        
        <Box>
          <Button
            variant="solid"
            onClick={() => {
              toast({
                variant: "success",
                title: "File uploaded",
                description: "Your file has been uploaded successfully.",
                action: (
                  <ToastAction altText="View file" asChild>
                    <Button color="light" size="sm">View</Button>
                  </ToastAction>
                )
              });
            }}
            css={{ marginBottom: "$4" }}
          >
            Toast with Action
          </Button>
          
          <Button
            variant="solid"
            onClick={() => {
              toast({
                variant: "error",
                title: "Delete failed",
                description: "Unable to delete the item.",
                action: (
                  <ToastAction altText="Try again" asChild>
                    <Button color="light" size="sm">Retry</Button>
                  </ToastAction>
                )
              });
            }}
            css={{ marginBottom: "$4" }}
          >
            Toast with Retry Action
          </Button>
        </Box>
      </Box>
      {/* Promise Handling */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Text weight="bold">Promise Handling</Text>
        
        <Box>
          <Button
            variant="solid"
            onClick={() => {
              toast.promise(ResolvePromise(), {
                loading: {
                  title: "Creating, please wait...",
                  variant: "loading"
                },
                success: (p) => ({
                  title: `${p.title}`,
                  variant: "success",
                  description: `${p.description}`,
                  action: (
                    <ToastAction altText="Close" asChild>
                      <Button color="light" size="sm">Close</Button>
                    </ToastAction>
                  )
                }),
                error: (p) => ({
                  title: `Error: ${p.title}`,
                  variant: "error"
                })
              });
            }}
            css={{ marginBottom: "$4" }}
          >
            Promise Success
          </Button>
          
          <Button
            variant="solid"
            onClick={() => {
              toast.promise(RejectPromise(), {
                loading: {
                  title: "Processing, please wait...",
                  variant: "loading"
                },
                success: (p) => ({
                  title: `${p.data} saved successfully`,
                  variant: "success"
                }),
                error: ({ data }) => ({
                  title: `Error: ${data}`,
                  variant: "error",
                  action: (
                    <ToastAction altText="Try again" asChild>
                      <Button color="light" size="sm">Retry</Button>
                    </ToastAction>
                  )
                })
              });
            }}
            css={{ marginBottom: "$4" }}
          >
            Promise Error
          </Button>
        </Box>
      </Box>
    </Box>
  );
}