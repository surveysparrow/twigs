import React from 'react';
import { AddColumnIcon, AdjustHorizontalIcon,ClapIcon,CodeBlockIcon, CopyIcon, DeleteIcon, EmailIcon, GiftWithHeartIcon } from "@sparrowengg/twigs-react-icons";
import { Box, Text } from '@sparrowengg/twigs-react';

export default function IconsBasic() {
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$6" }}>
      <Text size="lg">colored icons</Text>
      <Box css={{ display: "flex", flexDirection: "row", gap: "$6" }}>
      <AddColumnIcon color="green" />
      <AdjustHorizontalIcon color="red" />
      <ClapIcon color="violet" />
      <CodeBlockIcon color="blue" />
      <CopyIcon color="green" />
      <DeleteIcon color="red" />
      <EmailIcon color="blue" />
      <GiftWithHeartIcon color="green" />
      </Box>
      <Text size="lg">different stroke widths</Text>
      <Box css={{ display: "flex", flexDirection: "row", gap: "$6" }}>
        <AddColumnIcon strokeWidth={1} />
        <AdjustHorizontalIcon strokeWidth={1.5} />
        <ClapIcon strokeWidth={2} />
        <CodeBlockIcon strokeWidth={2.2} />
        <CopyIcon strokeWidth={2.5} />
        <DeleteIcon strokeWidth={2.6} />
        <EmailIcon strokeWidth={2.7} />
        <GiftWithHeartIcon strokeWidth={2.8} />
      </Box>
      <Text size="lg">different sizes</Text>
      <Box css={{ display: "flex", flexDirection: "row", gap: "$6", alignItems: "center" }}>
        <AddColumnIcon size={32} />
        <AdjustHorizontalIcon size={34} />
        <ClapIcon size={36} />
        <CodeBlockIcon size={38} />
        <CopyIcon size={40} />
        <DeleteIcon size={42} />
        <EmailIcon size={44} />
        <GiftWithHeartIcon size={46} />
      </Box>
    </Box>
  );
}; 