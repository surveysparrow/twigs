import { ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon } from '@sparrowengg/twigs-react-icons';
import React, {
  ComponentProps,
  FunctionComponent, SyntheticEvent, useEffect, useId, useState
} from 'react';
import { styled } from '../../stitches.config';
import { Box } from '../box';
import { Button, IconButton } from '../button';
import { usePagination } from '../hooks';

const StyledList = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2'
});

type ButtonSizeType = Pick<ComponentProps<typeof Button>, 'size'>

export type PaginationProps = {
  total: number,
  itemsPerPage: number,
  activePage: number,
  siblingCount?: number,
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: SyntheticEvent, page: number) => void
} & ButtonSizeType

const DOTS = 'DOTS';

/**
 * @param total total items inside pagination
 * @param itemsPerPage number of items in each age
 * @param activePage currently focused page
 * @param onChange returns click event and active page number
 */
export const Pagination: FunctionComponent<PaginationProps> = ({
  total, itemsPerPage, activePage, siblingCount, onChange, size, ...rest
}: PaginationProps) => {
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

  useEffect(() => {
    setPage(activePage);
  }, [activePage]);

  const isPrevDisabled = page === 1;
  const isNextDisabled = page === paginationRange?.[paginationRange?.length - 1];

  return (
    <Box
      as="nav"
      aria-label="pagination"
      {...rest}
    >
      <StyledList>
        <li>
          <IconButton
            icon={<ChevronLeftIcon />}
            aria-disabled={isPrevDisabled}
            aria-label="Previous"
            color="bright"
            size={size}
            disabled={isPrevDisabled}
            onClick={(event: SyntheticEvent) => changeActivePage(event, page - 1)}
          />
        </li>
        {
          paginationRange?.map((pageNumber, index) => {
            if (pageNumber === DOTS) {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <li key={`pagination-dots-${keyId}-${index}`}>
                  <IconButton
                    as="a"
                    icon={<EllipsisHorizontalIcon />}
                    role="presentation"
                    color="bright"
                    size={size}
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
                  color={page === pageNumber ? 'default' : 'bright'}
                  aria-current={page === pageNumber}
                  role="link"
                  size={size}
                >
                  {pageNumber}
                </Button>
              </li>
            );
          })
        }
        <li>
          <IconButton
            icon={<ChevronRightIcon />}
            aria-label="Next"
            color="bright"
            size={size}
            disabled={isNextDisabled}
            aria-disabled={isNextDisabled}
            onClick={(event: SyntheticEvent) => changeActivePage(event, page + 1)}
          />
        </li>
      </StyledList>
    </Box>
  );
};
