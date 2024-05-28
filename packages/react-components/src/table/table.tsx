import { styled } from '../stitches.config';

export const Table = styled('table', {});

export const Tbody = styled('tbody', {});

export const Thead = styled('thead', {
  padding: '$6',
  background: '$white900'
});

export const Th = styled('th', {
  padding: '$6',
  margin: '0',
  borderBottom: '$borderWidths$xs solid $colors$neutral200',
  fontWeight: '$5',
  fontSize: '$sm',
  '&:last-child': {
    borderRight: 'none'
  }
});

export const Tr = styled('tr', {
  '&:hover': {
    backgroundColorOpacity: ['$secondary500', 0.04]
  },
  '&:active': {
    backgroundColorOpacity: ['$primary500', 0.06]
  }
});

export const Td = styled('td', {
  padding: '$6',
  margin: '0',
  borderBottom: '$borderWidths$xs solid $colors$neutral200',
  fontWeight: '$4',
  color: '$neutral800',
  fontSize: '$sm',
  verticalAlign: 'middle',
  cursor: 'pointer',
  '&:last-child': {
    borderRight: 'none'
  }
});
