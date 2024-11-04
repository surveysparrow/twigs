import {
  ChevronDownIcon,
  TickCircleFillIcon
} from '@sparrowengg/twigs-react-icons';
import { Chip } from '../chip';

export default {
  component: Chip,
  title: 'Data Display/Chip',
  args: {
    variant: 'solid',
    color: 'primary',
    size: 'lg',
    rounded: 'sm'
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['3xs', '2xs', 'xs', 'sm', 'md', 'lg']
    },
    color: {
      control: 'select',
      options: [
        'primary',
        'default',
        'secondary',
        'error',
        'warning',
        'success',
        'accent'
      ]
    },
    active: {
      control: 'boolean'
    },
    selectable: {
      control: 'boolean'
    },
    rounded: {
      control: 'select',
      options: ['sm', 'full']
    },
    variant: {
      control: 'select',
      options: ['outline', 'solid']
    }
  }
};

const Template = (args) => <Chip {...args}>Template</Chip>;

export const Default = Template.bind({});

export const WithLeftElement = (args) => (
  <Chip {...args} leftElement={<TickCircleFillIcon />}>
    Template
  </Chip>
);

export const WithRightElement = (args) => (
  <Chip {...args} rightElement={<ChevronDownIcon />}>
    Template
  </Chip>
);

export const WithLeftAndRightElements = (args) => (
  <Chip
    {...args}
    leftElement={<TickCircleFillIcon />}
    rightElement={<ChevronDownIcon />}
  >
    Template
  </Chip>
);
