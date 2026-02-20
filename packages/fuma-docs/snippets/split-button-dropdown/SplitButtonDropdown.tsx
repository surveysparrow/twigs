import React, { useState } from "react";
import { 
  SplitButton, 
  Button, 
  IconButton, 
  Box, 
  Text, 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent
} from "@sparrowengg/twigs-react";
import { 
  ChevronDownIcon, 
  PencilIcon,
} from "@sparrowengg/twigs-react-icons";

export default function SplitButtonDropdown() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Box>
        {/* Split Button with Dropdown */}
        <Box css={{ display: "flex", flexDirection: "column", gap: "$3" }}>
          <Text css={{ fontSize: "$md", fontWeight: "$6" }}>Split Button with Dropdown</Text>
          <SplitButton >
        <Button leftIcon={<PencilIcon />}>Link Issue</Button>
        <DropdownMenu
          onOpenChange={() => {
            setIsActive(!isActive);
          }}
        >
          <DropdownMenuTrigger asChild >
            <Box>
              <IconButton
                size="md"
                icon={<ChevronDownIcon />}
              />
            </Box>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            css={{
              zIndex: 1
            }}
          >
            <DropdownMenuItem>New Tab</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>More Tools</DropdownMenuSubTrigger>
              <DropdownMenuSubContent sideOffset={2} alignOffset={-5}>
                <DropdownMenuItem>Save Page As…</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Developer Tools</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      </SplitButton>
        </Box>
    </Box>
  );
} 