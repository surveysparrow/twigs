import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  Button,
  Box,
} from "@sparrowengg/twigs-react";

export default function DropdownBasic() {
  return (
    <DropdownMenu size="sm">
      <DropdownMenuTrigger asChild>
        <Button variant="solid" size="sm" css={{width: "$30"}}>
          <Box css={{ marginLeft: "$2" }}>Open Menu</Box>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={5}>
        <DropdownMenuItem>New Tab</DropdownMenuItem>
        <DropdownMenuItem>New Window</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>More Tools</DropdownMenuSubTrigger>
          <DropdownMenuSubContent sideOffset={2} alignOffset={-5}>
            <DropdownMenuItem>Save Page As…</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
