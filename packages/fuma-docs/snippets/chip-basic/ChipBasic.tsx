import { Box, Chip, toast, Toastr } from "@sparrowengg/twigs-react";
import {
  ChevronDownIcon,
  TickCircleFillIcon,
} from "@sparrowengg/twigs-react-icons";

export default function ChipBasic() {
  return (
    <Box css={{ display: "flex", gap: "$4", flexWrap: "wrap" }}>
      <Toastr duration={3000} />
      <Chip size="xs" variant="outline" leftElement={<TickCircleFillIcon />}>
        Default
      </Chip>
      <Chip size="sm" color="primary" rightElement={<ChevronDownIcon />}>
        Primary
      </Chip>
      <Chip
        size="md"
        color="success"
        leftElement={<TickCircleFillIcon />}
        rightElement={<ChevronDownIcon />}
      >
        Success
      </Chip>
      <Chip
        size="lg"
        closable
        onClose={() =>
          toast({
            variant: "error",
            title: "Chip closed",
          })
        }
        color="error"
      >
        Error
      </Chip>
    </Box>
  );
}
