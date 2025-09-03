import React from 'react';
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
  return (
    <DropdownMenu {...args}>
      <DropdownMenuTrigger asChild>
        <Button size="lg" color="primary" aria-label="Customise options">
          More Options
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent showArrow={false} align="end" sideOffset={5}>
        <DropdownMenuItem>New Tab</DropdownMenuItem>
        <DropdownMenuItem>New Window</DropdownMenuItem>
        <DropdownMenuItem disabled>New Private Window</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>More Tools</DropdownMenuSubTrigger>
          <DropdownMenuSubContent sideOffset={2} alignOffset={-5}>
            <DropdownMenuItem>Save Page As…</DropdownMenuItem>
            <DropdownMenuItem>Create Shortcut…</DropdownMenuItem>
            <DropdownMenuItem>Name Window…</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Developer Tools</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked onCheckedChange={() => {}}>
          Show Bookmarks
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked onCheckedChange={() => {}}>
          Show Full URLs
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>People</DropdownMenuLabel>
        <DropdownMenuRadioGroup value="pedro" onValueChange={() => {}}>
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
