import {
  ChevronDownIcon,
  TickCircleFillIcon
} from '@sparrowengg/twigs-react-icons';
import { FlexiPill } from '../flexi-pill';

export default {
  component: FlexiPill,
  title: 'Form/FlexiPill',
  args: {
    color: 'primary',
    variant: 'solid',
    size: 'md',
    loading: false,
    weight: 'regular'
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    weight: {
      control: 'select',
      options: ['regular', 'bold']
    },
    variant: {
      control: 'select',
      options: ['solid', 'ghost', 'outline']
    },
    loading: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    }
  }
};

const Template = (args) => <FlexiPill leftIcon={<TickCircleFillIcon />} {...args}>Submit</FlexiPill>;
export const FlexiPills = Template.bind({});

const TemplateFlexiPillWithRightIcon = (args) => (
  <FlexiPill {...args} rightIcon={<TickCircleFillIcon />}>
    Submit
  </FlexiPill>
);
export const FlexiPillWithRightIcon = TemplateFlexiPillWithRightIcon.bind({});

const TemplateFlexiPillWithLeftIcon = (args) => (
  <FlexiPill {...args} leftIcon={<TickCircleFillIcon />}>
    Submit
  </FlexiPill>
);

export const FlexiPillWithLeftIcon = TemplateFlexiPillWithLeftIcon.bind({});

const TemplateFlexiPillWithLeftAndRightIcon = (args) => (
  <FlexiPill
    {...args}
    leftIcon={<TickCircleFillIcon />}
    rightIcon={<ChevronDownIcon />}
  >
    Submit
  </FlexiPill>
);

export const FlexiPillWithLeftAndRightIcon = TemplateFlexiPillWithLeftAndRightIcon.bind({});
