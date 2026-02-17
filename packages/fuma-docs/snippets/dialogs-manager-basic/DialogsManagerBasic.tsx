import React from "react";
import {
  DialogsManager,
  Flex,
  Button,
  dialogs,
  Box,
  Heading,
  Text,
} from "@sparrowengg/twigs-react";

export default function DialogsManagerBasic() {
  return (
    <Flex gap="$4" flexDirection="column">
      {/* Confirm Dialog */}
      <Box>
        <Button
          onClick={() => {
            dialogs.open("confirm", {
              title: "Are you sure you want to perform this action",
              content: "You can perform this action again.",
              labels: {
                confirm: "Yes, I am sure",
                cancel: "Cancel",
              },
              confirmButtonProps: {
                color: "error",
              },
            });
          }}
        >
          Open Confirm Dialog
        </Button>
      </Box>
      {/* Alert Dialog */}
      <Box>
        <Button
          onClick={() => {
            dialogs.open("alert", {
              title: "This is an alert",
              content: "It will have a single button to close the dialog.",
              labels: {
                action: "Close Alert",
              },
            });
          }}
        >
          Open Alert Dialog
        </Button>
      </Box>
      {/* Modal Dialog */}
      <Box>
        <Button
          onClick={() => {
            const { close } = dialogs.open("modal", {
              size: "sm",
              children: (
                <Box
                  css={{
                    padding: "$10",
                  }}
                >
                  <Heading
                    size="h5"
                    weight="semibold"
                    css={{ marginBottom: "$5" , borderBottom: "1px solid $neutral200", paddingBottom: "$5" }}
                  >
                    Create New Project
                  </Heading>
                  <Text
                    size="sm"
                    css={{
                      color: "$neutral700",
                      marginBottom: "$8",
                      lineHeight: "1.6",
                    }}
                  >
                    Start a new project to organize your work. You can invite
                    team members and configure settings later.
                  </Text>
                  <Flex gap="$3" justifyContent="flex-end">
                    <Button
                      color="default"
                      onClick={() => close()}
                      size="lg"
                    >
                      Cancel
                    </Button>
                    <Button color="primary" onClick={() => close()} size="lg">
                      Create Project
                    </Button>
                  </Flex>
                </Box>
              ),
            });
          }}
        >
          Open Custom Dialog
        </Button>
      </Box>
      <DialogsManager />
    </Flex>
  );
} 