import { useMemo } from "react";

const DOTS = 'DOTS';

/**
 * Create an array, from start to end
 * @param start 
 * @param end 
 * @returns 
 */
const range = (start: number, end: number) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
}

export const usePagination = ({
  totalItems,
  itemsPerPage,
  siblingCount = 1, // minimum number of buttons to be in pagination component
  activePage
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalItems / itemsPerPage);

    const totalButtonCount = 5; // firstPage + lastPage + activePage + 2 DOTS
    const totalPageNumbers = siblingCount + totalButtonCount;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    /*
      Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */
    const leftSiblingIndex = Math.max(activePage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      activePage + siblingCount,
      totalPageCount
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    /*
      Only right side dots
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    /*
      Only left side dots
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    /*
      Show both left and right dots
    */
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalItems, itemsPerPage, siblingCount, activePage]);
  return paginationRange;
}