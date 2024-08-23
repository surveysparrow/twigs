import { ComponentProps, createContext, useContext } from 'react';
import { styled } from '../stitches.config';

export const StyledTable = styled('table', {});

export const Tbody = styled('tbody', {});

export const Tr = styled('tr', {
  '&:hover': {
    backgroundColorOpacity: ['$secondary500', 0.04]
  },
  variants: {
    active: {
      true: {
        backgroundColorOpacity: ['$primary500', 0.06]
      }
    }
  }
});

export const Thead = styled('thead', {
  padding: '$6',
  background: '$white900',

  [`& ${Tr}`]: {
    '&:hover': {
      backgroundColor: 'transparent'
    }
  }
});

export const StyledTh = styled('th', {
  padding: '$6',
  margin: '0',
  fontWeight: '$5',
  fontSize: '$sm',
  lineHeight: '$sm',
  textAlign: 'left',
  '&:last-child': {
    borderRight: 'none'
  },
  variants: {
    borderPlacement: {
      horizontal: {
        borderBottom: '$borderWidths$xs solid $colors$neutral200'
      },
      vertical: {
        borderRight: '$borderWidths$xs solid $colors$neutral100'
      },
      both: {
        borderBottom: '$borderWidths$xs solid $colors$neutral200',
        borderRight: '$borderWidths$xs solid $colors$neutral100'
      }
    }
  },
  defaultVariants: {
    borderPlacement: 'horizontal'
  }
});

export const StyledTd = styled('td', {
  padding: '$6',
  margin: '0',
  fontWeight: '$4',
  color: '$neutral800',
  fontSize: '$sm',
  verticalAlign: 'middle',
  cursor: 'pointer',
  '&:last-child': {
    borderRight: 'none'
  },
  variants: {
    borderPlacement: {
      horizontal: {
        borderBottom: '$borderWidths$xs solid $colors$neutral100'
      },
      vertical: {
        borderRight: '$borderWidths$xs solid $colors$neutral100'
      },
      both: {
        borderBottom: '$borderWidths$xs solid $colors$neutral100',
        borderRight: '$borderWidths$xs solid $colors$neutral100'
      }
    }
  },
  defaultVariants: {
    borderPlacement: 'horizontal'
  }
});

export type TdProps = ComponentProps<typeof StyledTd>;
export type ThProps = ComponentProps<typeof StyledTh>;

const TableContext = createContext<{
  borderPlacement?: TdProps['borderPlacement'];
}>({});

export const Td = ({ children, ...props }: ComponentProps<typeof StyledTd>) => {
  const context = useContext(TableContext);

  return (
    <StyledTd borderPlacement={context.borderPlacement} {...props}>
      {children}
    </StyledTd>
  );
};

export const Th = ({ children, ...props }: ComponentProps<typeof StyledTh>) => {
  const context = useContext(TableContext);

  let { borderPlacement } = props;
  if (!borderPlacement) {
    if (context.borderPlacement === 'vertical') {
      borderPlacement = 'both';
    } else {
      borderPlacement = context.borderPlacement;
    }
  }

  return (
    <StyledTh borderPlacement={borderPlacement} {...props}>
      {children}
    </StyledTh>
  );
};

export type TableProps = ComponentProps<typeof StyledTable> & {
  borderPlacement: TdProps['borderPlacement'];
};

export const Table = ({
  children,
  borderPlacement,
  ...props
}: TableProps) => {
  return (
    <TableContext.Provider value={{ borderPlacement }}>
      <StyledTable {...props}>{children}</StyledTable>
    </TableContext.Provider>
  );
};
