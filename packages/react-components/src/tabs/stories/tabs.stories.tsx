import React from 'react';
import {
  Tabs, TabsContent, TabsList, TabsTrigger
} from '../tabs';

export default {
  component: Tabs,
  title: 'Navigation/Tabs',
  argTypes: {}
};

const Template = (args) => (
  <Tabs defaultValue="tab1" {...args}>
    <TabsList
      aria-label="tabs example"
      css={{ display: 'flex', alignItems: 'center', height: '$18' }}
    >
      <TabsTrigger value="tab1">One</TabsTrigger>
      <TabsTrigger value="tab2">Two</TabsTrigger>
      <TabsTrigger value="tab3" disabled>Three</TabsTrigger>
    </TabsList>
    <TabsContent css={{ padding: '$16 0' }} value="tab1">
      Tab 1
    </TabsContent>
    <TabsContent css={{ padding: '$16 0' }} value="tab2">
      Tab 2
    </TabsContent>
    <TabsContent css={{ padding: '$16 0' }} value="tab3">
      Tab 3
    </TabsContent>
  </Tabs>
);
export const Default = Template.bind({});
