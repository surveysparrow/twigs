import React from 'react';
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
  DropdownMenuSeparator,
  DropdownMenuSubContent
} from '../dropdown';
import { Button } from '../../button';

export default {
  component: DropdownMenuItem,
  title: 'Overlay/Dropdown',
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md']
    }
  }
};

const Template = (args) => {
  const { size } = args;
  return (
    <DropdownMenu {...args}>
      <DropdownMenuTrigger asChild>
        <Button
          size="lg"
          color="primary"
          aria-label="Customise options"
        >
          More Options
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        showArrow={false}
        align="end"
        sideOffset={5}
      >
        <DropdownMenuItem size={size}>New Tab</DropdownMenuItem>
        <DropdownMenuItem size={size}>New Window</DropdownMenuItem>
        <DropdownMenuItem disabled size={size}>
          New Private Window
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger size={size}>
            More Tools
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent sideOffset={2} alignOffset={-5}>
            <DropdownMenuItem size={size}>Save Page As…</DropdownMenuItem>
            <DropdownMenuItem size={size}>Create Shortcut…</DropdownMenuItem>
            <DropdownMenuItem size={size}>Name Window…</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem size={size}>Developer Tools</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked
          onCheckedChange={() => { }}
          size={size}
        >
          Show Bookmarks
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked
          onCheckedChange={() => { }}
          size={size}
        >
          Show Full URLs
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>People</DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value="Maneesh"
          onValueChange={() => { }}
        >
          <DropdownMenuRadioItem value="pedro" size={size}>
            Pedro Duarte
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="colm" size={size}>
            Colm Tuite
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export const Default = Template.bind({});
