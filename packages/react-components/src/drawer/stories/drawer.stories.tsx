'use client';

import React from 'react';
import {
  Drawer, DrawerHeader, DrawerFooter, DrawerBody
} from '../drawer';
import { Button } from '../../button';
import { Heading } from '../../heading';
import { Input } from '../../input';
import { Flex } from '../../flex';
import { FormLabel } from '../../form-label';
import { Box } from '../../box';

export default {
  component: Drawer,
  title: 'Overlay/Drawer',
  argTypes: {
    size: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      defaultValue: '3xl'
    },
    isAnonymous: {
      control: 'boolean'
    },
    src: {
      control: 'text'
    }
  }
};

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
          <Heading size="h4">Edit Profile</Heading>
        </DrawerHeader>
        <DrawerBody>
          <Flex flexDirection="column" gap="18px">
            <Box>
              <FormLabel> First name </FormLabel>
              <Input size="xl" css={{ mt: 4 }} />
            </Box>

            <Box>
              <FormLabel> Email address </FormLabel>
              <Input size="xl" css={{ mt: 4 }} />
            </Box>
          </Flex>
        </DrawerBody>
        <DrawerFooter>
          <Flex justifyContent="flex-end" gap="10px" css={{ width: '100%' }}>
            <Button size="xl" color="default"> Cancel </Button>
            <Button size="xl"> Save </Button>
          </Flex>
        </DrawerFooter>
      </Drawer>
      <Button
        ref={paneButtonRef}
        onClick={() => setIsDrawerOpen(true)}
      >
        Open Drawer
      </Button>
    </>
  );
};
