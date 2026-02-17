import React from "react";
import { IconButton, Box } from "@sparrowengg/twigs-react";
import { CloseIcon, AttachmentIcon, DeleteIcon, GiftWithHeartIcon, AsteriskIcon } from "@sparrowengg/twigs-react-icons";

export default function IconButtonBasic() {
  return (
    <Box css={{ display: "flex", flexDirection: "row", gap: "$6", alignItems: "center" }}>
        <IconButton
          icon={<CloseIcon />}
          aria-label="Close"
          size="sm"
          color="default"
          variant="ghost"
        />
        <IconButton
          icon={<AttachmentIcon />}
          aria-label="Edit"
          size="md"
          color="primary"
          variant="solid"
        />
        <IconButton
          icon={<DeleteIcon />}
          aria-label="Delete"
          size="lg"
          color="error"
          variant="outline"
        />
        <IconButton
          icon={<GiftWithHeartIcon />}
          aria-label="Like"
          size="xl"
          color="secondary"
          variant="ghost"
          shape="round"
        />
        <IconButton
          icon={<AsteriskIcon />}
          aria-label="Favorite"
          size="md"
          color="default"
          variant="solid"
          shape="round"
        />
        <IconButton
          icon={<AttachmentIcon />}
          aria-label="Edit disabled"
          size="2xl"
          color="primary"
          variant="solid"
          disabled
        />
        <IconButton
          icon={<DeleteIcon />}
          aria-label="Delete loading"
          size="xl"
          color="error"
          variant="outline"
          loading
        />
    </Box>
  );
} 