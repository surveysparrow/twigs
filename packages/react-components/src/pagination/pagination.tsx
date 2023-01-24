import { ChevronLeftIcon, ChevronRightIcon } from '@sparrowengg/twigs-react-icons';
import React, { SyntheticEvent, useState } from 'react';
import { styled } from "../../stitches.config";
import { Button, IconButton } from '../button';

const StyledContainer = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4'
});

const StyledPage = styled(Button, {
  backgroundColor: 'transparent !important',
  '&:focus': {
    border: '1px !important',
    borderStyle: 'solid !important',
    borderColor: '$neutral100 !important'
  },
  variants: {
    active: {
      true: {
        backgroundColor: '$neutral100 !important'
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

const calcPaginationRange = ({ total, itemsPerPage, activePage }) => {

  // maximum items we can show as pages
  const maxItems = 5;
  const items = Math.floor(total / itemsPerPage);

  const hasEllipsis = total > maxItems;

  // enable ellipsis after 1, if current page is further away from maxItems - 4, and active page should be greater than 3.
  // Ideally we want to avoid showing ellipsis when user is on page 1, 2
  const startEllipsis = hasEllipsis && !!(maxItems - 4 < activePage) && activePage > 3;

  // show end ellipsis if the current page is further than total - max + 4 from the last page and active page > 2
  const endEllipsis = hasEllipsis && !!(activePage < total - maxItems + 4) && items - activePage > 2;

  // after the ellipsis, where to start with the page number
  let sliceStart = startEllipsis ? activePage - 2 : 1;
  // where to end before the next ellipsis
  let sliceEnd = endEllipsis ? activePage + 1 : items - 1;
  // below logic is to keep min of 4 buttons in the UI, otherwise, pagination component becomes too small
  if (sliceEnd !== items - 1 && sliceEnd - sliceStart < 2) {
    sliceEnd++;
  }
  if (sliceStart > 1 && sliceEnd - sliceStart < 2) {
    sliceStart--;
  }
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
    const { items, startEllipsis, endEllipsis, sliceStart, sliceEnd } = calcPaginationRange({ total, itemsPerPage, activePage: page });

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
        <IconButton
          icon={<ChevronLeftIcon />}
          disabled={page === 1}
          aria-disabled={page === 1}
          aria-label='Previous'
          variant={'default'}
          onClick={(event: SyntheticEvent) => changeActivePage(event, page - 1)}
        />

        <StyledPage
          active={page === 1}
          onClick={(event: SyntheticEvent) => changeActivePage(event, page - 1)}
          aria-label={page === 1 ? 'page' : ''}
          variant={'default'}
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
                variant={'default'}
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
              variant={'default'}
            > {items} </StyledPage>
            :
            null
        }
        <IconButton
          icon={<ChevronRightIcon />}
          aria-label='Next'
          variant={'default'}
          disabled={page === items}
          aria-disabled={page === items}
          onClick={(event: SyntheticEvent) => changeActivePage(event, page + 1)}
        />
      </StyledContainer>
    )
  }
)