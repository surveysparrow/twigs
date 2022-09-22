import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-test-renderer';
import { useTable } from 'react-table';
import {
  Table,
  Tbody,
  Thead,
  Th,
  Tr,
  Td,
} from '../index';
import 'jest';
import '@testing-library/jest-dom';

const columns = [
  {
    Header: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
  },
  {
    Header: 'Age',
    accessor: 'age',
  },
  {
    Header: 'Visits',
    accessor: 'visits',
  },
  {
    Header: 'Progress',
    accessor: 'progress',
  },
];

const data = [
  {
    firstName: 'jam',
    lastName: 'child',
    age: 11,
    visits: 47,
    progress: 66,
    status: 'relationship',
    subRows: undefined,
  },
  {
    firstName: 'jam',
    lastName: 'child',
    age: 11,
    visits: 47,
    progress: 66,
    status: 'relationship',
    subRows: undefined,
  },
  {
    firstName: 'jam',
    lastName: 'child',
    age: 11,
    visits: 47,
    progress: 66,
    status: 'relationship',
    subRows: undefined,
  },
  {
    firstName: 'jam',
    lastName: 'child',
    age: 11,
    visits: 47,
    progress: 66,
    status: 'relationship',
    subRows: undefined,
  },
  {
    firstName: 'jam',
    lastName: 'child',
    age: 11,
    visits: 47,
    progress: 66,
    status: 'relationship',
    subRows: undefined,
  },
];

const TableComponent = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });
  return (
    <Table {...getTableProps()} css={{ marginTop: '$16' }}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th {...column.getHeaderProps()}>
                {column.render('Header')}
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <Td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </Td>
                );
              })}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

describe('Input', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div!);
    act(() => {
      root.render(
        <TableComponent />,
      );
      root.unmount();
    });
  });
});
