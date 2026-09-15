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

  it('keeps the page scroll locked until every nested drawer has closed', () => {
    const Nested = ({
      parentOpen,
      childOpen
    }: {
      parentOpen: boolean;
      childOpen: boolean;
    }) => (
      <Drawer isOpen={parentOpen}>
        <DrawerBody>
          <Drawer isOpen={childOpen}>
            <DrawerBody>Child</DrawerBody>
          </Drawer>
        </DrawerBody>
      </Drawer>
    );

    const { rerender } = render(<Nested parentOpen childOpen={false} />);
    expect(document.body.style.overflow).toBe('hidden');

    rerender(<Nested parentOpen childOpen />);
    expect(document.body.style.overflow).toBe('hidden');

    // Closing only the child must not release the parent's lock.
    rerender(<Nested parentOpen childOpen={false} />);
    expect(document.body.style.overflow).toBe('hidden');

    rerender(<Nested parentOpen={false} childOpen={false} />);
    expect(document.body.style.overflow).toBe('');
  });

  it('flags a drawer while another is stacked on top of it', () => {
    const Nested = ({ childOpen }: { childOpen: boolean }) => (
      <Drawer isOpen>
        <DrawerBody>
          <Drawer isOpen={childOpen}>
            <DrawerBody>Child</DrawerBody>
          </Drawer>
        </DrawerBody>
      </Drawer>
    );

    const { rerender, getAllByTestId } = render(<Nested childOpen={false} />);
    expect(getAllByTestId('drawer')[0]).not.toHaveAttribute(
      'data-nested-drawer-open'
    );

    rerender(<Nested childOpen />);
    const panels = getAllByTestId('drawer');
    expect(panels).toHaveLength(2);
    // The parent is flagged; the frontmost drawer never is.
    expect(panels[0]).toHaveAttribute('data-nested-drawer-open');
    expect(panels[1]).not.toHaveAttribute('data-nested-drawer-open');
    // The parent adopted a size, so measurement ran here — jsdom has no
    // getAnimations, which the measure guard has to tolerate.
    expect(panels[0].getAttribute('style')).toContain('--stack-size');
  });
});
