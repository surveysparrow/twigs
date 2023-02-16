import { ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon } from '@sparrowengg/twigs-react-icons';
import React, {
  FunctionComponent, SyntheticEvent, useId, useState
} from 'react';
import { styled } from '../../stitches.config';
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
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: SyntheticEvent, page: number) => void
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

    const changeActivePage = (event: SyntheticEvent, newPage: number) => {
      setPage(newPage);
      if (onChange) {
        onChange(event, newPage);
      }
    };

    const isPrevDisabled = page === 1;
    const isNextDisabled = page === paginationRange?.[paginationRange?.length - 1];

    return (
      <Box
        ref={ref}
        as="nav"
        aria-label="pagination"
        {...rest}
      >
        <StyledList>
          <li>
            <IconButton
              as="a"
              icon={<ChevronLeftIcon />}
              css={{
                cursor: isPrevDisabled ? 'not-allowed' : 'pointer',
                opacity: isPrevDisabled ? 0.4 : 1
              }}
              aria-disabled={isPrevDisabled}
              aria-label="Previous"
              variant="bright"
              role="link"
              onClick={(event: SyntheticEvent) => changeActivePage(event, page - 1)}
            />
          </li>
          {
            paginationRange?.map((pageNumber) => {
              if (pageNumber === DOTS) {
                return (
                  <li key={`pagination-dots-${keyId}-${pageNumber}`}>
                    <IconButton
                      as="a"
                      icon={<EllipsisHorizontalIcon />}
                      role="presentation"
                      variant="bright"
                      css={{
                        cursor: 'default'
                      }}
                    />
                  </li>
                );
              }
              return (
                <li key={`pagination-${keyId}-page-${pageNumber}`}>
                  <Button
                    as="a"
                    onClick={(event: SyntheticEvent) => changeActivePage(event, Number(pageNumber))}
                    aria-label={`Page ${pageNumber}`}
                    variant={page === pageNumber ? 'default' : 'bright'}
                    aria-current={page === pageNumber}
                    role="link"
                  >
                    {pageNumber}
                  </Button>
                </li>
              );
            })
          }
          <li>
            <IconButton
              as="a"
              icon={<ChevronRightIcon />}
              aria-label="Next"
              variant="bright"
              role="link"
              css={{
                cursor: isNextDisabled ? 'not-allowed' : 'pointer',
                opacity: isNextDisabled ? 0.4 : 1
              }}
              aria-disabled={isNextDisabled}
              onClick={(event: SyntheticEvent) => changeActivePage(event, page + 1)}
            />
          </li>
        </StyledList>
      </Box>
    );
  }
);
