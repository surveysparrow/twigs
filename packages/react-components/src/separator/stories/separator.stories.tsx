import { Separator as SeparatorRoot, SeparatorProps } from '../separator';
import { Box } from '../../box';
import { Text } from '../../text';
import { Flex } from '../../flex';

export default {
  component: SeparatorRoot,
  title: 'Form/Separator'
};

const Template = ({ orientation = 'vertical', ...args }: SeparatorProps) => (
  <Box css={{ width: '100%', maxWidth: 300, margin: '0 15px' }}>
    <Flex css={{ height: 20, alignItems: 'center' }}>
      <Text>Blog</Text>
      <SeparatorRoot
        orientation={orientation}
        {...args}
        css={{
          margin: '0 10px'
        }}
      />
      <Text>Docs</Text>
      <SeparatorRoot
        orientation={orientation}
        {...args}
        css={{
          margin: '0 10px'
        }}
      />
      <Text>Source</Text>
    </Flex>
  </Box>
);

export const Default = Template.bind({});
