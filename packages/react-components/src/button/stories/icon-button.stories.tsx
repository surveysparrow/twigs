import { ComponentStory } from '@storybook/react';
import { Flex } from '../../flex';
import { IconButton } from '../icon-button';

const PencilIcon = () => (
  <svg width="26" height="26" color="currentColor" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.33467 25H1V20.6653C1 20.312 1.14 19.972 1.39067 19.7227L19.1693 1.94267C19.6907 1.42133 20.5347 1.42133 21.0547 1.94267L24.056 4.944C24.5773 5.46533 24.5773 6.30933 24.056 6.82933L6.27733 24.6093C6.028 24.86 5.688 25 5.33467 25V25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const PlusIcon = () => (
  <svg viewBox="0 0 32 32" color='currentColor' fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path d="M24 16H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 8V24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
);

export default {
  component: IconButton,
  title: 'Icon Button',
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'accent', 'secondary'],
      defaultValue: 'primary'
    },
    isDisabled: {
      control: 'boolean'
    },
    size: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'xl'
    },
    isTransparent: {
      control: 'boolean'
    }
  }
};

const Template: ComponentStory<typeof IconButton> = (args) => (
  <Flex css={{
    gap: "20px",
    flexDirection: "row"
  }}>
    <IconButton {...args} icon={<PencilIcon />} />
    <IconButton {...args} icon={<PlusIcon />} />
  </Flex>
);
export const Primary = Template.bind({});
