import React from 'react';
import { styled } from '../../stitches.config';

export const StyledTable = styled('table', {});

export const StyledTableBody = styled('tbody', {});

export const StyledTableHeader = styled('thead', {
  padding: '$6',
  background: '$neutral100',
  '& > tr': {
    '&:hover': {
      background: '$neutral100',
    },
  },
});

export const StyledTableHeaderCell = styled('th', {
  padding: '$6',
  margin: '0',
  borderRight: '$borderWidths$xs solid $colors$neutral200',
  fontWeight: '$5',
  fontSize: '$sm',
  '&:last-child': {
    borderRight: 'none',
  },
});

export const StyledTableRow = styled('tr', {
  '&:hover': {
    background: '$neutral50',
  },
});

export const StyledTableRowCell = styled('td', {
  padding: '$6',
  margin: '0',
  borderRight: '$borderWidths$xs solid $colors$neutral200',
  fontWeight: '$4',
  color: '$neutral800',
  fontSize: '$sm',
  verticalAlign: 'middle',
  '&:last-child': {
    borderRight: 'none',
  },
});
