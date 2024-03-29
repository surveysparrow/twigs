import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Heading } from '../../heading';
import { Flex } from '../../flex';
import { Input } from '../../input';
import {
  Drawer, DrawerBody, DrawerHeader, DrawerFooter
} from '../index';

describe('Drawer', () => {
  it('renders without crashing', () => {
    render(
      <Drawer isOpen>
        <DrawerHeader>
          <Heading size="h4">Drawer Header</Heading>
        </DrawerHeader>
        <DrawerBody>
          <Flex css={{ gap: '$4' }}>
            <Input size="lg" />
            <Input size="lg" />
          </Flex>
        </DrawerBody>
        <DrawerFooter>
          <Heading size="h4">Drawer Footer</Heading>
        </DrawerFooter>
      </Drawer>
    );
  });
});
