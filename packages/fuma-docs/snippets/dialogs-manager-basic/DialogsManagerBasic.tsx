import React from "react";
import {
  DialogsManager,
  Flex,
  Button,
  dialogs,
  Box,
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
                <Box css={{ padding: "$4" }}>
                  <h3>This is a custom modal</h3>
                  <Button
                    css={{
                      marginTop: "$3",
                    }}
                    size="lg"
                    color="error"
                    onClick={() => close()}
                  >
                    Close
                  </Button>
                </Box>
              ),
            });
          }}
        >
          Open Modal Dialog
        </Button>
      </Box>
      <DialogsManager />
    </Flex>
  );
} 