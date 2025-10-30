import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuItemIndicator,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  Button,
  Box,
} from "@sparrowengg/twigs-react";
import { TickIcon } from '@sparrowengg/twigs-react-icons';
import { UserCircleIcon } from '@sparrowengg/twigs-react-icons';

export default function DropdownAdvanced() {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <DropdownMenu size="sm">
      <DropdownMenuTrigger asChild>
        <Button variant="solid" size="sm" css={{width: "$30"}}>
          <Box css={{ marginLeft: "$2" }}>Open Menu</Box>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={5}>
        <DropdownMenuItem>
          <Box css={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
            New Tab
            <Box css={{ marginLeft: "auto", color: "$neutral600", fontSize: "$xs" }}>⌘+T</Box>
          </Box>
        </DropdownMenuItem>
        
        <DropdownMenuItem>
          <Box css={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
            New Window
            <Box css={{ marginLeft: "auto", color: "$neutral600", fontSize: "$xs" }}>⌘+N</Box>
          </Box>
        </DropdownMenuItem>
        
        <DropdownMenuItem disabled>
          <Box css={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
            New Private Window
            <Box css={{ marginLeft: "auto", color: "$neutral600", fontSize: "$xs" }}>⇧+⌘+N</Box>
          </Box>
        </DropdownMenuItem>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Box css={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
              More Tools
              <Box css={{ marginLeft: "auto" }}>
              </Box>
            </Box>
          </DropdownMenuSubTrigger>
          
          <DropdownMenuSubContent sideOffset={2} alignOffset={-5}>
            <DropdownMenuItem>
              <Box css={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                Save Page As…
                <Box css={{ marginLeft: "auto", color: "$neutral600", fontSize: "$xs" }}>⌘+S</Box>
              </Box>
            </DropdownMenuItem>
            
            <DropdownMenuItem>Create Shortcut…</DropdownMenuItem>
            <DropdownMenuItem>Name Window…</DropdownMenuItem>
            
            <DropdownMenuSeparator />
            
            <DropdownMenuItem>Developer Tools</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuSeparator />

        <DropdownMenuCheckboxItem
          checked={bookmarksChecked}
          onCheckedChange={setBookmarksChecked}
        >
          <DropdownMenuItemIndicator>
            <TickIcon size={16} />
          </DropdownMenuItemIndicator>
          <Box css={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
            Show Bookmarks
            <Box css={{ marginLeft: "auto", color: "$neutral600", fontSize: "$xs" }}>⌘+B</Box>
          </Box>
        </DropdownMenuCheckboxItem>
        
        <DropdownMenuCheckboxItem
          checked={urlsChecked}
          onCheckedChange={setUrlsChecked}
        >
          <DropdownMenuItemIndicator>
            <TickIcon size={16} />
          </DropdownMenuItemIndicator>
          Show Full URLs
        </DropdownMenuCheckboxItem>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>People</DropdownMenuLabel>
        
        <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
          <DropdownMenuRadioItem value="pedro">
            <DropdownMenuItemIndicator>
              <UserCircleIcon size={16} />
            </DropdownMenuItemIndicator>
            Pedro Duarte
          </DropdownMenuRadioItem>
          
          <DropdownMenuRadioItem value="colm">
            <DropdownMenuItemIndicator>
              <UserCircleIcon size={16} />
            </DropdownMenuItemIndicator>
            Colm Tuite
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 