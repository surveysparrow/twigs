import { get } from 'lodash-es';
import { useMemo } from 'react';
import { Box } from '../box';
import { makeBreadcrumbFromValue } from './cascader-utils';
import { useCascaderValue } from './use-value';

export const CascaderAriaLive = ({ searchValue }: { searchValue: string }) => {
  const {
    id, data, popoverOpen, focusedItem, componentProps
  } = useCascaderValue();

  const focusedItemInfo = useMemo(() => {
    if (focusedItem) {
      const arrPath = makeBreadcrumbFromValue(focusedItem.value, data);
      const breadcrumb = arrPath.map((item) => item.label).join(' > ');
      const parentObject = focusedItem.objectPath
        ? get(data, focusedItem.objectPath)
        : data;
      const totalItems = parentObject!.length;
      const itemPosition = focusedItem.itemIndex + 1;

      const hasOptions = parentObject?.[focusedItem.itemIndex]?.options?.length! > 0;

      const hasParent = focusedItem.objectPath.length > 0;

      return {
        breadcrumb,
        label: arrPath.at(-1)!.label,
        totalItems,
        itemPosition,
        hasOptions,
        hasParent
      };
    }

    return null;
  }, [focusedItem?.value]);

  return (
    <Box
      as="span"
      css={{
        width: 1,
        height: 1,
        position: 'absolute',
        opacity: 0,
        overflow: 'hidden',
        pointerEvents: 'none'
      }}
      aria-live="polite"
      aria-relevant="additions text"
      aria-atomic="true"
      role="log"
      id={`cascader-${id}-live-region`}
    >
      {popoverOpen && focusedItemInfo && !searchValue && (
        <>
          {componentProps.ariaLiveContent ? (
            componentProps.ariaLiveContent(focusedItemInfo)
          ) : (
            <>
              {focusedItemInfo.hasParent && (
                <span>{focusedItemInfo.breadcrumb}</span>
              )}
              <span>
                {`${focusedItemInfo.label}, ${focusedItemInfo.itemPosition} of ${focusedItemInfo.totalItems}`}
              </span>
              <span>
                {`
                Press Up and Down arrow keys to navigate up an down
                ${
                  focusedItemInfo.hasOptions
                    ? ', Right Arrow key to open sub options'
                    : ''
                }
                ${
                  focusedItemInfo.hasParent
                    ? ', Left arrow key to go back to parent item'
                    : ''
                }
                . Press Space or Enter to select option and close list. Press Escape to close list without selecting`}
              </span>
            </>
          )}
        </>
      )}
    </Box>
  );
};
