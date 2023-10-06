import { styled } from '../stitches.config';

export const Table = styled('table', {});

export const Tbody = styled('tbody', {});

export const Thead = styled('thead', {
  padding: '$6',
  background: '$neutral100',
  '& > tr': {
    '&:hover': {
      background: '$neutral100'
    }
  }
});

export const Th = styled('th', {
  padding: '$6',
  margin: '0',
  borderRight: '$borderWidths$xs solid $colors$neutral200',
  fontWeight: '$5',
  fontSize: '$sm',
  '&:last-child': {
    borderRight: 'none'
  }
});

export const Tr = styled('tr', {
  '&:hover': {
    backgroundColorOpacity: ['$primary500', 0.04]
  }
});

export const Td = styled('td', {
  padding: '$6',
  margin: '0',
  borderRight: '$borderWidths$xs solid $colors$neutral200',
  fontWeight: '$4',
  color: '$neutral800',
  fontSize: '$sm',
  verticalAlign: 'middle',
  '&:last-child': {
    borderRight: 'none'
  }
});
