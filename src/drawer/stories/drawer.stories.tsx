import React from 'react';
import { ComponentMeta } from '@storybook/react';
import {
  Drawer, DrawerHeader, DrawerFooter, DrawerBody,
} from '../drawer';
import { Button } from '../../button';
import { Heading } from '../../heading';

export default {
  component: Drawer,
  title: 'Drawer',
  argTypes: {
    size: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      defaultValue: '3xl',
    },
    isAnonymous: {
      control: 'boolean',
    },
    src: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Drawer>;

export const Default = () => {
  const paneButtonRef = React.useRef<HTMLButtonElement>(null);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <DrawerHeader>
          <Heading size="h4">Drawer Header</Heading>
        </DrawerHeader>
        <DrawerBody>
          <Heading size="h4">Drawer Body</Heading>
        </DrawerBody>
        <DrawerFooter>
          <Heading size="h4">Drawer Footer</Heading>
        </DrawerFooter>
      </Drawer>
      <Button
        ref={paneButtonRef}
        onClick={() => setIsDrawerOpen(true)}
        css={{ marginTop: '$8' }}
      >
        Open Drawer
      </Button>
    </>
  );
};
