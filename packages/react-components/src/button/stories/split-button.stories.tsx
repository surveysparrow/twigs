import { ChevronDownIcon } from '@sparrowengg/twigs-react-icons';
import { Flex } from '../../flex';
import { SplitButton } from '../split-button';

export default {
  component: SplitButton,
  title: 'Form/Split Button',
  argTypes: {
    size: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl']
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary']
    },
    disabled: {
      control: 'boolean'
    }
  }
};

const Template = (args) => (
  <Flex flexDirection="row" gap="20px">
    <SplitButton {...args} icon={<ChevronDownIcon />}>Label</SplitButton>
  </Flex>
);
export const Primary = Template.bind({});
