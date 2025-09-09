import React from "react";
import { Button, Box, Toastr,Text } from "@sparrowengg/twigs-react";
import { toast } from "@sparrowengg/twigs-react";

export default function ToastBasic() {
  return (
    <Box>
      <Toastr duration={10000} />
      <Text weight="bold" >Basic Toast</Text>
        <Button
          variant="solid"
          onClick={() => {
            toast({
              variant: "default",
              title: "Default message",
              description: "This is a basic toast notification."
            });
          }}
        >
          Show Default Toast
        </Button>
    </Box>
  );
}