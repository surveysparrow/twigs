import React from "react";
import {
  Drawer,
  DrawerHeader,
  DrawerFooter,
  DrawerBody,
  Button,
  Heading,
} from "@sparrowengg/twigs-react";
import { Box } from "@sparrowengg/twigs-react";

export default function DrawerBasic() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        placement="right"
        size="sm"
      >
        <DrawerHeader>
          <Heading size="h4">Edit Profile</Heading>
        </DrawerHeader>
        <DrawerBody>
          <Box css={{ padding: "$4",lineHeight: "$md" }}>
            <p>Drawer content goes here. You can add forms, lists, or any other content.</p>
            <p>This drawer slides in from the right side and includes a backdrop overlay.</p>
          </Box>
        </DrawerBody>
        <DrawerFooter>
          <Box css={{ display: "flex", gap: "$3", justifyContent: "flex-end" }}>
            <Button
              color="default"
              onClick={() => setIsDrawerOpen(false)}
            >
              Cancel
            </Button>
            <Button
              color="primary"
              onClick={() => setIsDrawerOpen(false)}
            >
              Save Changes
            </Button>
          </Box>
        </DrawerFooter>
      </Drawer>
      <Button css={{width: "$30"}} onClick={() => setIsDrawerOpen(true)}>
        Open Drawer
      </Button>
    </>
  );
} 