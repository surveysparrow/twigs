import { ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon } from '@sparrowengg/twigs-react-icons';
import React, { FunctionComponent, SyntheticEvent, useId, useState } from 'react';
import { styled } from "../../stitches.config";
import { Box, BoxProps } from '../box';
import { Button, IconButton } from '../button';
import { usePagination } from './use-pagination';

const StyledList = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2'
});

export type PaginationProps = {
  total: number,
  itemsPerPage: number,
  activePage: number,
  siblingCount?: number,
  onChange?: (event, page: number) => void
} & BoxProps;

const DOTS = 'DOTS';

/**
 * @param total total items inside pagination
 * @param itemsPerPage number of items in each age
 * @param activePage currently focused page
 * @param onChange returns click event and active page number
 */
export const Pagination: FunctionComponent<PaginationProps> = React.forwardRef(
  ({
    total, itemsPerPage, activePage, siblingCount, onChange, ...rest
  }: PaginationProps, ref) => {

    const keyId = useId();
    const [page, setPage] = useState<number>(activePage);

    const paginationRange = usePagination({
      totalItems: total, itemsPerPage, activePage: page, siblingCount
    });

    const changeActivePage = (event: SyntheticEvent, page: number) => {
      setPage(page);
      if (onChange) {
        onChange(event, page);
      }
    }

    return (
      <Box
        ref={ref}
        as={'nav'}
        aria-label='pagination'
        {...rest}
      >
        <StyledList>
          <li>
            <IconButton
              as='a'
              icon={<ChevronLeftIcon />}
              isDisabled={page === 1}
              aria-disabled={page === 1}
              aria-label='Previous'
              variant={'bright'}
              role='link'
              onClick={(event: SyntheticEvent) => changeActivePage(event, page - 1)}
            />
          </li>
          {
            paginationRange?.map((pageNumber, index) => {
              if (pageNumber === DOTS) {
                return (
                  <li key={`pagination-dots-${keyId}-${index}`}>
                    <IconButton
                      as={'a'}
                      icon={<EllipsisHorizontalIcon />}
                      role={'presentation'}
                      variant={'bright'}
                      css={{
                        cursor: 'default'
                      }}
                    />
                  </li>
                )
              }
              return (
                <li key={`pagination-${keyId}-page-${pageNumber}`}>
                  <Button
                    as={'a'}
                    onClick={(event: SyntheticEvent) => changeActivePage(event, Number(pageNumber))}
                    aria-label={`Page ${pageNumber}`}
                    variant={page === pageNumber ? 'default' : 'bright'}
                    aria-current={page === pageNumber}
                    role='link'
                  >
                    {pageNumber}
                  </Button>
                </li>
              )
            })
          }
          <li>
            <IconButton
              as='a'
              icon={<ChevronRightIcon />}
              aria-label='Next'
              variant={'bright'}
              role='link'
              isDisabled={page === paginationRange?.[paginationRange?.length - 1]}
              aria-disabled={page === paginationRange?.[paginationRange?.length - 1]}
              onClick={(event: SyntheticEvent) => changeActivePage(event, page + 1)}
            />
          </li>
        </StyledList>
      </Box>
    )
  }
)