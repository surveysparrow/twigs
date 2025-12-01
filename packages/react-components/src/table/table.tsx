import {
  ComponentProps, createContext, forwardRef, useContext
} from 'react';
import { styled } from '../stitches.config';

export const StyledTable = styled('table', {});

export const Tbody = styled('tbody', {});

export const Tr = styled('tr', {
  variants: {
    active: {
      true: {
        backgroundColorOpacity: ['$primary500', 0.06]
      }
    },
    hover: {
      true: {
        '&:hover': {
          backgroundColorOpacity: ['$secondary500', 0.04]
        }
      }
    }
  },
  defaultVariants: {
    hover: true
  }
});

export const Thead = styled('thead', {
  padding: '$6',
  background: '$white900',

  [`& ${Tr}`]: {
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  variants: {
    sticky: {
      true: {
        position: 'sticky',
        top: 0,
        background: '$white900',
        zIndex: 2
      }
    }
  },
  defaultVariants: {
    sticky: false
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
    border: {
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
    border: 'horizontal'
  }
});

export const StyledTd = styled('td', {
  margin: '0',
  fontWeight: '$4',
  color: '$neutral800',
  fontSize: '$sm',
  verticalAlign: 'middle',
  '&:last-child': {
    borderRight: 'none'
  },
  variants: {
    border: {
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
    },
    size: {
      medium: {
        padding: '$6'
      },
      small: {
        padding: '$4 $6'
      }
    }
  },
  defaultVariants: {
    border: 'horizontal',
    size: 'medium'
  }
});

export type TdProps = ComponentProps<typeof StyledTd>;
export type ThProps = ComponentProps<typeof StyledTh>;

const TableContext = createContext<{
  border?: TdProps['border'],
  size?: TdProps['size']
}>({});

export const Td = forwardRef<
  HTMLTableCellElement,
  ComponentProps<typeof StyledTd>
>(({ children, ...props }, ref) => {
  const context = useContext(TableContext);

  return (
    <StyledTd border={context.border} size={context.size} {...props} ref={ref}>
      {children}
    </StyledTd>
  );
});

export const Th = forwardRef<
  HTMLTableCellElement,
  ComponentProps<typeof StyledTh>
>(({ children, ...props }, ref) => {
  const context = useContext(TableContext);

  let { border } = props;
  if (!border) {
    if (context.border === 'vertical') {
      border = 'both';
    } else {
      border = context.border;
    }
  }

  return (
    <StyledTh border={border} {...props} ref={ref}>
      {children}
    </StyledTh>
  );
});

export type TableProps = Omit<ComponentProps<typeof StyledTable>, 'border'> & {
  border?: TdProps['border'];
  size?: TdProps['size']
};

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({
    children, border, size, ...props
  }, ref) => {
    return (
      <TableContext.Provider value={{ border, size }}>
        <StyledTable {...props} ref={ref}>
          {children}
        </StyledTable>
      </TableContext.Provider>
    );
  }
);
