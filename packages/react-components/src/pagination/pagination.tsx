import { ChevronLeftIcon, ChevronRightIcon } from '@sparrowengg/twigs-react-icons';
import React, { SyntheticEvent, useState } from 'react';
import { styled } from "../../stitches.config";
import { Button } from '../button';

const StyledContainer = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4'
});

const StyledPage = styled(Button, {
  fontWeight: '$7',
  fontSize: '$sm',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  height: '$8',
  width: '$7',
  outline: 'none',
  border: 'none',
  borderRadius: '$md',
  backgroundColor: 'transparent',
  '&:focus': {
    border: '1px',
    borderStyle: 'solid',
    borderColor: '$neutral100'
  },
  variants: {
    active: {
      true: {
        backgroundColor: '$neutral100'
      }
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        color: '$neutral300',
      }
    },

  }
});

export type IProps = {
  total: number,
  itemsPerPage: number,
  activePage: number,
  onChange?: (event, page: number) => void
}

const calcPaginationRange = ({ total, itemsPerPage, maxItems, activePage }) => {
  const items = Math.floor(total / itemsPerPage);

  const hasEllipsis = total > maxItems;

  const startEllipsis = hasEllipsis && !!(maxItems - activePage < 4) && activePage > 3;
  const endEllipsis = hasEllipsis && !!(activePage < total - maxItems + 4) && items - activePage > 2

  const sliceStart = startEllipsis ? activePage - 2 : 1;
  const sliceEnd = endEllipsis ? activePage + 1 : items - 1;

  return {
    items, startEllipsis, endEllipsis, sliceStart, sliceEnd
  }
}

/**
 * @param total total items inside pagination
 * @param itemsPerPage number of items in each age
 * @param activePage currently focused page
 * @param onChange returns click event and active page number
 */
export const Pagination = React.forwardRef(
  ({
    total, itemsPerPage, activePage, onChange
  }: IProps, ref) => {

    const [page, setPage] = useState(activePage);
    const maxItems = 5;
    const { items, startEllipsis, endEllipsis, sliceStart, sliceEnd } = calcPaginationRange({ total, itemsPerPage, maxItems, activePage: page });

    const changeActivePage = (event: SyntheticEvent, page: number) => {
      setPage(page);
      if (onChange) {
        onChange(event, page);
      }
    }

    return (
      <StyledContainer
        aria-label='pagination'
      >
        <StyledPage
          disabled={page === 1}
          aria-disabled={page === 1}
        >
          <ChevronLeftIcon
            aria-label='Previous'
            onClick={(event: SyntheticEvent) => changeActivePage(event, page - 1)}
          />
        </StyledPage>

        <StyledPage
          active={page === 1}
          onClick={(event: SyntheticEvent) => changeActivePage(event, page - 1)}
          aria-label={page === 1 ? 'page' : ''}
        > 1 </StyledPage>

        {
          startEllipsis ?
            '...'
            :
            null
        }

        {
          [...Array(items).keys()].slice(sliceStart, sliceEnd).map(item => {
            const pageNo = item + 1;
            return (
              <StyledPage
                onClick={(event: SyntheticEvent) => changeActivePage(event, pageNo)}
                active={page === pageNo}
                aria-label={page === pageNo ? 'page' : ''}
              > {pageNo} </StyledPage>
            )
          })
        }
        {
          endEllipsis ?
            '...'
            :
            null
        }
        {
          items > 1 ?
            <StyledPage
              active={page === items}
              onClick={(event: SyntheticEvent) => changeActivePage(event, items)}
              aria-label={page === items ? 'page' : ''}
            > {items} </StyledPage>
            :
            null
        }
        <StyledPage
          disabled={page === items}
          aria-disabled={page === items}
          onClick={(event: SyntheticEvent) => changeActivePage(event, page + 1)}
        >
          <ChevronRightIcon
            aria-label='Next'
          />
        </StyledPage>
      </StyledContainer>
    )
  }
)