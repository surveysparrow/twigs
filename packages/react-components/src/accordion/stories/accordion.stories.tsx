import React from 'react';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from '../accordion';

export default {
  component: Accordion,
  title: 'Data Display/Accordion',
  args: {
    size: 'sm',
    type: 'single'
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md']
    },
    type: {
      control: 'radio',
      options: ['single', 'multiple']
    }
  }
};

const Template = (args) => (
  <Accordion
    {...args}
    type="single"
    defaultValue='item-2'
    onValueChange={(value) => console.log(value)}
  >
    <AccordionItem value="item-1">
      <AccordionTrigger>Page settings</AccordionTrigger>
      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>Profile Information</AccordionTrigger>
      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </AccordionItem>
  </Accordion>
);
export const Default = Template.bind({});
