import {
  Table, Tbody, Td, Th, Thead, Tr
} from '../table';

export default {
  component: Table,
  title: 'Data Display/Table',
  argTypes: {
    border: {
      control: 'select',
      options: ['horizontal', 'vertical', 'both']
    },
    size: {
      control: 'select',
      options: ['medium', 'small']
    },
    sticky: {
      control: 'boolean'
    },
  }
};

const Template = (args) => (
  <Table {...args}>
    <Thead sticky>
      <Tr>
        <Th>Name</Th>
        <Th>Company</Th>
        <Th>Department</Th>
        <Th>Joined on</Th>
      </Tr>
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
