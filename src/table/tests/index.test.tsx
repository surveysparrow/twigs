import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-test-renderer';
import { useTable } from 'react-table';
import {
  StyledTable,
  StyledTableBody,
  StyledTableHeader,
  StyledTableHeaderCell,
  StyledTableRow,
  StyledTableRowCell,
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

describe('Input', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div!);
    act(() => {
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
      root.render(
        <StyledTable {...getTableProps()} css={{ marginTop: '$16' }}>
          <StyledTableHeader>
            {headerGroups.map((headerGroup) => (
              <StyledTableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <StyledTableHeaderCell {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </StyledTableHeaderCell>
                ))}
              </StyledTableRow>
            ))}
          </StyledTableHeader>
          <StyledTableBody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <StyledTableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <StyledTableRowCell {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </StyledTableRowCell>
                    );
                  })}
                </StyledTableRow>
              );
            })}
          </StyledTableBody>
        </StyledTable>,
      );
      root.unmount();
    });
  });
});
