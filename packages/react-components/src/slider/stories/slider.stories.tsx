import { ComponentMeta } from '@storybook/react';
import { Slider } from '../slider';
import { Box } from '../../box';

export default {
  component: Slider,
  title: 'Form/Slider',
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    }
  }
} as ComponentMeta<typeof Slider>;

const Template = (args) => (
  <Box
    style={{
      width: '280px'
    }}
  >
    <Slider size="md" defaultValue={[20, 40]} {...args} />
  </Box>
);

export const Default = Template.bind({});

const CustomComponentsComp = (args) => (
  <Template
    components={{
      Thumb: () => (
        <Slider.Thumb asChild>
          <Box
            css={{
              backgroundColor: '$negative900',
              borderRadius: 0
            }}
          />
        </Slider.Thumb>
      ),
      Range: () => (
        <Slider.Range>
          <Box
            css={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to right, red, blue)'
            }}
          />
        </Slider.Range>
      )
    }}
    labels={{
      left: 'Left',
      right: 'Right'
    }}
    labelPlacement="bottom"
    {...args}
  />
);

export const CustomComponents = CustomComponentsComp.bind({});
