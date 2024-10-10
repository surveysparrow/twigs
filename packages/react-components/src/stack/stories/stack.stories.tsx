import { Separator } from '@src/separator';
import { Stack } from '../stack';
import { HStack } from '../h-stack';
import { VStack } from '../v-stack';
import { Box } from '../../box';

export default {
  component: Stack,
  title: 'Layout/Stack'
};

const Template = (args) => (
  <Stack {...args}>
    <Box
      css={{
        width: 100,
        height: 100,
        backgroundColor: 'yellow'
      }}
    >
      1
    </Box>
    <Box
      css={{
        width: 100,
        height: 100,
        backgroundColor: 'orange'
      }}
    >
      2
    </Box>
    <Box
      css={{
        width: 100,
        height: 100,
        backgroundColor: 'green'
      }}
    >
      3
    </Box>
  </Stack>
);

const VStackTemplate = (args) => (
  <VStack {...args} divider={<Separator orientation="horizontal" />}>
    <Box
      css={{
        width: 100,
        height: 100,
        backgroundColor: 'yellow'
      }}
    >
      1
    </Box>
    <Box
      css={{
        width: 100,
        height: 100,
        backgroundColor: 'orange'
      }}
    >
      2
    </Box>
    <Box
      css={{
        width: 100,
        height: 100,
        backgroundColor: 'green'
      }}
    >
      3
    </Box>
  </VStack>
);

const HStackTemplate = (args) => (
  <HStack {...args}>
    <Box
      css={{
        width: 100,
        height: 100,
        backgroundColor: 'yellow'
      }}
    >
      1
    </Box>
    <Box
      css={{
        width: 100,
        height: 100,
        backgroundColor: 'orange'
      }}
    >
      2
    </Box>
    <Box
      css={{
        width: 100,
        height: 100,
        backgroundColor: 'green'
      }}
    >
      3
    </Box>
  </HStack>
);

export const Default = Template.bind({});
export const VStackComponent = VStackTemplate.bind({});
export const HStackComponent = HStackTemplate.bind({});
