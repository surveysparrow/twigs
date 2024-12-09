import { useMemo } from 'react';
import { Box } from '../box';
import { buildSelectionPath } from './cascader-utils';
import { useCascaderValue } from './use-value';

export const CascaderAriaLive = ({ searchValue }: { searchValue: string }) => {
  const {
    id, popoverOpen, focusedItem, componentProps
  } = useCascaderValue();

  const focusedItemInfo = useMemo(() => {
    const focusedNode = focusedItem?.node;
    if (focusedNode) {
      const arrPath = buildSelectionPath(focusedNode);
      const breadcrumb = arrPath.map((item) => item.label).join(' > ');
      const parentChildren = focusedNode.getParent()?.getChildren();
      const itemPosition = parentChildren?.findIndex((item) => item.value === focusedNode.value)!
        + 1;

      return {
        breadcrumb,
        label: arrPath.at(-1)!.label,
        totalItems: parentChildren?.length || 0,
        itemPosition,
        hasOptions: focusedNode.getChildren().length > 0 || focusedNode.shouldFetchOptions,
        hasParent:
          focusedNode.getParent() !== null
          && focusedNode.getParent()?.isRoot === false
      };
    }

    return null;
  }, [focusedItem?.node]);

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
