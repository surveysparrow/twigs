import { ComponentMeta } from '@storybook/react';
import { Radio, RadioGroup } from '../radio';

export default {
  component: Radio,
  title: 'Form/Radio',
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md']
    }
  }
} as ComponentMeta<typeof Radio>;

const Template = (args) => (
  <RadioGroup defaultValue="default" aria-label="View density" {...args}>
    <Radio size="sm" value="default" {...args}>Default</Radio>
    <Radio size="sm" value="comfortable" id="r2" {...args}>Comfortable</Radio>
  </RadioGroup>
);
export const Default = Template.bind({});
