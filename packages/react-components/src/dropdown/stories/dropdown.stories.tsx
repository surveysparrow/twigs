import React, { useState } from 'react';
import { TickIcon } from '@sparrowengg/twigs-react-icons';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuItemIndicator,
  DropdownMenuSeparator,
  DropdownMenuSubContent
} from '../dropdown';
import { Button } from '../../button';

export default {
  component: DropdownMenu,
  title: 'Overlay/Dropdown',
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md']
    }
  }
};

const Template = (args) => {
  const [bookmarks, setBookmarks] = useState(true);
  const [urls, setUrls] = useState(false);
  const [person, setPerson] = useState('pedro');
  return (
    <DropdownMenu {...args}>
      <DropdownMenuTrigger asChild>
        <Button size="lg" color="primary" aria-label="Customise options">
          More Options
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent showArrow={false} align="end" sideOffset={5}>
        <DropdownMenuItem inset>New Tab</DropdownMenuItem>
        <DropdownMenuItem inset>New Window</DropdownMenuItem>
        <DropdownMenuItem inset disabled>
          New Private Window
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger inset>More Tools</DropdownMenuSubTrigger>
          <DropdownMenuSubContent sideOffset={2} alignOffset={-5}>
            <DropdownMenuItem>Save Page As…</DropdownMenuItem>
            <DropdownMenuItem>Create Shortcut…</DropdownMenuItem>
            <DropdownMenuItem>Name Window…</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Developer Tools</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={bookmarks}
          onCheckedChange={setBookmarks}
        >
          <DropdownMenuItemIndicator>
            <TickIcon size={16} />
          </DropdownMenuItemIndicator>
          Show Bookmarks
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={urls} onCheckedChange={setUrls}>
          <DropdownMenuItemIndicator>
            <TickIcon size={16} />
          </DropdownMenuItemIndicator>
          Show Full URLs
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel inset>People</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
          <DropdownMenuRadioItem value="pedro">
            <DropdownMenuItemIndicator>
              <TickIcon size={16} />
            </DropdownMenuItemIndicator>
            Pedro Duarte
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="colm">
            <DropdownMenuItemIndicator>
              <TickIcon size={16} />
            </DropdownMenuItemIndicator>
            Colm Tuite
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export const Default = Template.bind({});
