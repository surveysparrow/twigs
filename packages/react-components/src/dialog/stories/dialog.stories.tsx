import React from 'react';
import { CloseIcon } from '@sparrowengg/twigs-react-icons';
import {
  Dialog,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter
} from '../dialog';
import { Box } from '../../box';
import { Button, IconButton } from '../../button';
import { FormLabel } from '../../form-label';
import { Input } from '../../input';
import { Flex } from '../../flex';

export default {
  component: Dialog,
  title: 'Overlay/Dialog',
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full']
    },
    scrollBehavior: {
      control: 'select',
      options: ['auto', 'scroll', 'hidden']
    },
    isDismissable: { control: 'boolean', defaultValue: true },
    isKeyboardDismissDisabled: { control: 'boolean', defaultValue: false }
  },
  args: {
    size: 'md',
    scrollBehavior: 'auto',
    isDismissable: true,
    isKeyboardDismissDisabled: false
  }
};

const Template = (args) => {
  const size = args?.size;
  const scrollBehavior = args?.scrollBehavior;
  return (
    <Dialog {...args} scrollBehavior={scrollBehavior} size={size}>
      <DialogTrigger asChild>
        <Button size="lg">Edit profile</Button>
      </DialogTrigger>
      <DialogContent {...args}>
        <DialogHeader
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center'
          }}
        >
          <DialogTitle size="md">Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when done.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <Flex flexDirection="column" gap="$2" css={{ marginBottom: '$8' }}>
            <FormLabel>Name</FormLabel>
            <Input size="md" id="name" defaultValue="Pedro Duarte" />
          </Flex>
          <Flex flexDirection="column" gap="$2">
            <FormLabel>Username</FormLabel>
            <Input size="md" id="username" defaultValue="@peduarte" />
          </Flex>
        </DialogBody>
        <DialogFooter>
          <Flex justifyContent="flex-end" css={{ justifyContent: 'flex-end' }}>
            <DialogClose asChild>
              <Button size="lg" color="primary">
                Save changes
              </Button>
            </DialogClose>
          </Flex>
        </DialogFooter>
        <Box css={{ position: 'absolute', top: '$8', right: '$8' }}>
          <DialogClose asChild>
            <IconButton
              size="lg"
              icon={<CloseIcon />}
              variant="ghost"
              aria-label="Close"
              color="default"
            />
          </DialogClose>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
export const Default = Template.bind({});
