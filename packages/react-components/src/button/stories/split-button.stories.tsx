import { useState } from 'react';
import { ChevronDownIcon, PencilIcon } from '@sparrowengg/twigs-react-icons';
import { Flex } from '../../flex';
import { SplitButton } from '../split-button';
import { Button } from '../button';
import { Box } from '../../box';
import { IconButton } from '../icon-button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuSeparator
} from '../../dropdown';

export default {
  component: SplitButton,
  title: 'Form/Split Button',
  argTypes: {
    size: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl']
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'default', 'light', 'error']
    },
    disabled: {
      control: 'boolean'
    }
  },
  args: {
    size: 'md',
    color: 'primary',
    disabled: false
  }
};

const Template = (args) => (
  <Flex flexDirection="row" gap="20px">
    <SplitButton {...args}>
      <Button leftIcon={<PencilIcon />}>Link Issue</Button>
      <IconButton icon={<ChevronDownIcon />} />
    </SplitButton>
  </Flex>
);

const Secondary = (args) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Flex flexDirection="row" gap="20px">
      <SplitButton {...args}>
        <Button leftIcon={<PencilIcon />}>Link Issue</Button>
        <DropdownMenu
          onOpenChange={() => {
            setIsActive(!isActive);
          }}
        >
          <DropdownMenuTrigger asChild {...args}>
            <Box>
              <IconButton
                icon={<ChevronDownIcon />}
                {...args}
                css={{
                  // eslint-disable-next-line no-nested-ternary
                  backgroundColor: isActive
                    ? args.color === 'primary'
                      ? '$primary800'
                      : '$secondary800'
                    : args.color === 'primary'
                      ? '$primary400'
                      : '$secondary500'
                }}
              />
            </Box>
          </DropdownMenuTrigger>

          <DropdownMenuContent css={{
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
    </Flex>
  );
};
export const Primary = Template.bind({});
export const WithDropdown = Secondary.bind({});
