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
      options: ['hover', 'never', 'always']
    }
  }
};

const Template = (args) => (
  <Link {...args} href="https://twigs.surveysparrow.com/" target="_blank"> Click here </Link>
);
export const Default = Template.bind({});
