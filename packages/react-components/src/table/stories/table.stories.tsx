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
    hover: {
      control: 'boolean'
    }
  },
  args: {
    border: 'horizontal',
    size: 'medium',
    sticky: false,
    hover: true
  }
};

const tableData = [
  {
    name: 'Justin',
    company: 'SurveySparrow',
    department: 'Engineering',
    joinedOn: 'Sep, 2020',
    active: true
  },
  {
    name: 'Maneesh',
    company: 'SurveySparrow',
    department: 'Engineering',
    joinedOn: 'Sep, 2020',
    active: false
  },
  {
    name: 'Balamurugan',
    company: 'SurveySparrow',
    department: 'Engineering',
    joinedOn: 'July, 2020',
    active: false
  }
];

const Template = (args: any) => {
  const { sticky, hover, ...rest } = args;
  return (
    <Table {...rest}>
      <Thead sticky={sticky}>
        <Tr>
          <Th>Name</Th>
          <Th>Company</Th>
          <Th>Department</Th>
          <Th>Joined on</Th>
        </Tr>
      </Thead>
      <Tbody>
        {tableData.map((data) => (
          <Tr key={data.name} hover={hover} active={data.active}>
            <Td>{data.name}</Td>
            <Td>{data.company}</Td>
            <Td>{data.department}</Td>
            <Td>{data.joinedOn}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export const Default = Template.bind({});
