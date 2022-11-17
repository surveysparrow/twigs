import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  Table, Tbody, Td, Th, Thead, Tr
} from '../table';

export default {
  component: Table,
  title: 'Table'
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => (
  <Table {...args}>
    <Thead>
      <Th>Name</Th>
      <Th>Company</Th>
      <Th>Department</Th>
      <Th>Joined on</Th>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Justin</Td>
        <Td>SurveySparrow</Td>
        <Td>Engineering</Td>
        <Td>Sep, 2020</Td>
      </Tr>
      <Tr>
        <Td>Maneesh</Td>
        <Td>SurveySparrow</Td>
        <Td>Engineering</Td>
        <Td>Sep, 2020</Td>
      </Tr>
    </Tbody>
  </Table>
);
export const Default = Template.bind({});
