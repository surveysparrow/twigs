import { ButtonProgress } from '../../button/button-loader';
import { Flex } from '../../flex';
import { Spinner } from '../spinner';

export default {
  component: Spinner,
  title: 'Loaders/Spinner',
  args: {
    size: 'sm'
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md']
    },
  }
};

const Template = (args) => (
  <Flex
    alignItems={'center'}
    justifyContent={'center'}
    flexDirection='column'
    css={{
      height: 100,
      width: '100%',
      backgroundColor: '$secondary900',
    }}
  >
    <Spinner {...args} />
    <ButtonProgress size={args.size} />
  </Flex>
);
export const Default = Template.bind({});
