import { Link } from '../link';

export default {
  component: Link,
  title: 'Navigation/Link',
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'lg', 'xl']
    },
    asChild: {
      control: 'boolean'
    },
    color: {
      control: 'select',
      options: ['primary', 'default', 'error', 'warning', 'success']
    },
    underline: {
      control: 'select',
      options: ['hover', 'none', 'always']
    }
  }
};

const Template = (args) => (
  <Link {...args} href="https://github.com/surveysparrow/twigs" target="_blank"> Click here </Link>
);
export const Default = Template.bind({});
