import { Box, Chip, toast, Toastr } from "@sparrowengg/twigs-react";
import {
  ChevronDownIcon,
  TickCircleFillIcon,
} from "@sparrowengg/twigs-react-icons";

export default function ChipBasic() {
  return (
    <Box css={{ display: "flex", gap: "$4", flexWrap: "wrap" }}>
      <Toastr duration={3000} />
      <Chip size="2xs" variant="outline" leftElement={<TickCircleFillIcon />}>
        Default
      </Chip>
      <Chip size="xs" color="primary" rightElement={<ChevronDownIcon />}>
        Active
      </Chip>
      <Chip
        size="sm"
        closable
        onClose={() =>
          toast({
            variant: "error",
            title: "Chip closed",
          })
        }
        color="error"
      >
        Urgent
      </Chip>
      <Chip size="md" color="accent" variant="outline">
        Beta
      </Chip>
      <Chip size="lg" color="warning">
        Pending
      </Chip>
      <Chip
        size="xl"
        color="success"
        rounded="full"
        leftElement={<TickCircleFillIcon />}
      >
        Verified
      </Chip>
    </Box>
  );
}
