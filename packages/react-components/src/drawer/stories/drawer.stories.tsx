import React from 'react';
import {
  Drawer, DrawerHeader, DrawerFooter, DrawerBody, DrawerProps
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
    placement: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left']
    },
    // `sm` is the only size the component defines today.
    size: {
      control: 'select',
      options: ['sm']
    }
  },
  args: {
    placement: 'right',
    size: 'sm'
  }
};

type StoryArgs = Pick<DrawerProps, 'placement' | 'size'>;

export const Default = ({ placement, size }: StoryArgs) => {
  const paneButtonRef = React.useRef<HTMLButtonElement>(null);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        placement={placement}
        size={size}
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
            <Button size="xl" color="default">
              {' '}
              Cancel
              {' '}
            </Button>
            <Button size="xl"> Save </Button>
          </Flex>
        </DrawerFooter>
      </Drawer>
      <Button ref={paneButtonRef} onClick={() => setIsDrawerOpen(true)}>
        Open Drawer
      </Button>
    </>
  );
};

// Only the edge facing into the screen — the anchored edge sits flush against
// the viewport, so rounding it would show a sliver of backdrop.
const leadingEdgeRadius = (placement: DrawerProps['placement']) => {
  const radius = '$2xl';
  switch (placement) {
    case 'left':
      return { borderTopRightRadius: radius, borderBottomRightRadius: radius };
    case 'top':
      return { borderBottomLeftRadius: radius, borderBottomRightRadius: radius };
    case 'bottom':
      return { borderTopLeftRadius: radius, borderTopRightRadius: radius };
    default:
      return { borderTopLeftRadius: radius, borderBottomLeftRadius: radius };
  }
};

type NestedLevelConfig = { title: string; maxWidth?: string };

const EQUAL_WIDTH_LEVELS: NestedLevelConfig[] = [
  { title: 'Settings' },
  { title: 'Billing' },
  { title: 'Payment method' },
  { title: 'Confirm' }
];

// Third drawer is wider, so closing it makes the stack resize as well as move.
const MIXED_WIDTH_LEVELS: NestedLevelConfig[] = [
  { title: 'Settings' },
  { title: 'Billing' },
  { title: 'Payment method', maxWidth: '800px' },
  { title: 'Confirm' }
];

const NestedLevel = ({
  levels,
  level,
  isOpen,
  onClose,
  placement,
  size
}: StoryArgs & {
  levels: NestedLevelConfig[];
  level: number;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [isChildOpen, setIsChildOpen] = React.useState(false);
  const isLast = level === levels.length - 1;
  const { title, maxWidth } = levels[level];

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement={placement}
      size={size}
      css={{
        maxWidth,
        // Rounded only once stacked behind another drawer, so each layer
        // reads as its own card. The frontmost one stays flush.
        '&[data-nested-drawer-open]': leadingEdgeRadius(placement)
      }}
    >
      <DrawerHeader>
        <Heading size="h4">{title}</Heading>
      </DrawerHeader>
      <DrawerBody>
        <Flex flexDirection="column" gap="18px">
          <Box>
            <FormLabel>
              {`Level ${level + 1} of ${levels.length} — ${maxWidth ?? '600px (default)'}`}
            </FormLabel>
            <Input size="xl" css={{ mt: 4 }} />
          </Box>
          {!isLast && (
            <Button size="xl" onClick={() => setIsChildOpen(true)}>
              {`Open ${levels[level + 1].title}`}
            </Button>
          )}
        </Flex>

        {!isLast && (
          <NestedLevel
            levels={levels}
            level={level + 1}
            isOpen={isChildOpen}
            onClose={() => setIsChildOpen(false)}
            placement={placement}
            size={size}
          />
        )}
      </DrawerBody>
      <DrawerFooter>
        <Flex justifyContent="flex-end" css={{ width: '100%' }}>
          <Button size="xl" color="default" onClick={onClose}>
            Back
          </Button>
        </Flex>
      </DrawerFooter>
    </Drawer>
  );
};

const NestedStack = ({
  levels,
  label,
  placement,
  size
}: StoryArgs & { levels: NestedLevelConfig[]; label: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <NestedLevel
        levels={levels}
        level={0}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        placement={placement}
        size={size}
      />
      <Button size="xl" onClick={() => setIsOpen(true)}>
        {label}
      </Button>
    </>
  );
};

export const Nested = ({ placement, size }: StoryArgs) => (
  <Flex gap="16px" alignItems="flex-start">
    <NestedStack
      levels={EQUAL_WIDTH_LEVELS}
      label="Equal widths"
      placement={placement}
      size={size}
    />
    <NestedStack
      levels={MIXED_WIDTH_LEVELS}
      label="Mixed widths (3rd is 800px)"
      placement={placement}
      size={size}
    />
  </Flex>
);
