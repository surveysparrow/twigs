import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogTrigger,
  DialogContent
} from '../dialog';
import { Box } from '../../box';
import { Button, IconButton } from '../../button';
import { FormLabel } from '../../form-label';
import { Input } from '../../input';
import { Flex } from '../../flex';

const CloseIcon = () => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L9 9"
        stroke="#6C6C6C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 1L1 9"
        stroke="#6C6C6C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

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
    }
  },
  args: {
    size: 'md',
    scrollBehavior: 'auto'
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
      <DialogContent css={{ paddingBottom: '$20' }} {...args}>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription css={{ color: '$neutral600', fontSize: '$sm' }}>
          Make changes to your profile here. Click save when done.
        </DialogDescription>
        <Box css={{ marginBottom: '$12' }}>
          <FormLabel css={{ marginBottom: '$8' }}>Name</FormLabel>
          <Input size="md" id="name" defaultValue="Pedro Duarte" />
        </Box>
        <Box css={{ marginBottom: '$25' }}>
          <FormLabel css={{ marginBottom: '$8' }}>Username</FormLabel>
          <Input size="md" id="username" defaultValue="@peduarte" />
        </Box>
        <Flex justifyContent="flex-end" css={{ justifyContent: 'flex-end' }}>
          <DialogClose asChild>
            <Button size="lg" color="primary">
              Save changes
            </Button>
          </DialogClose>
        </Flex>
        <Box css={{ position: 'absolute', top: '10px', right: '10px' }}>
          <DialogClose asChild>
            <IconButton
              icon={<CloseIcon />}
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
