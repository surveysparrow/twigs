import React from 'react';
import { ComponentMeta } from '@storybook/react';
import {
  Dialog, DialogTitle, DialogDescription, DialogClose, DialogTrigger, DialogContent,
} from '../dialog';
import { Box } from '../../box';
import { Button } from '../../button';
import { FormLabel } from '../../form-label';
import { Flex } from '../../flex';
import { Input } from '../../input';

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
  title: 'Dialog',
} as ComponentMeta<typeof Dialog>;

const Template = (args) => (
  <Dialog {...args}>
    <DialogTrigger asChild>
      <Button size="lg">Edit profile</Button>
    </DialogTrigger>
    <DialogContent>
      <>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription
          css={{ color: '$neutral600', fontSize: '$sm' }}
        >
          Make changes to your profile here. Click save when done.
        </DialogDescription>
        <Box css={{ marginBottom: '$12' }}>
          <FormLabel css={{ marginBottom: '$8' }}>
            Name
          </FormLabel>
          <Input
            size="md"
            id="name"
            defaultValue="Pedro Duarte"
            css={{
              boxSizing: 'border-box',
            }}
          />
        </Box>
        <Box css={{ marginBottom: '$12' }}>
          <FormLabel css={{ marginBottom: '$8' }}>
            Username
          </FormLabel>
          <Input
            size="md"
            id="username"
            defaultValue="@peduarte"
            css={{
              boxSizing: 'border-box',
            }}
          />
        </Box>
        <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
          <DialogClose asChild>
            <Button size="lg" variant="default">
              Save changes
            </Button>
          </DialogClose>
        </Flex>
        <Box
          css={{ position: 'absolute', top: '10px', right: '10px' }}
        >
          <DialogClose asChild>
            <Button
              isIcon
              icon={<CloseIcon />}
              isTransparent
              aria-label="Close"
            />
          </DialogClose>
        </Box>
      </>
    </DialogContent>
  </Dialog>
);
export const Default = Template.bind({});
