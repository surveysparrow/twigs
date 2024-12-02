import { ChevronDownIcon } from '@sparrowengg/twigs-react-icons';
import { prefixClassName } from '@src/utils';
import clsx from 'clsx';
import { get } from 'lodash-es';
import React, {
  useEffect,
  useMemo, useRef, useState
} from 'react';
import { Box } from '../box';
import { FormInput } from '../input';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import { styled } from '../stitches.config';
import { CascaderOption } from './cascader';
import {
  CascaderBreadCrumb,
  CascaderInputValue,
  PopoverContentWrapper
} from './cascader-atomics';
import { CascaderFooter } from './cascader-footer';
import { CascaderList } from './cascader-list';
import {
  CascaderSearchList,
  CascaderSearchListRef
} from './cascader-searchlist';
import {
  buildSelectionPath,
  convertSelectionPathToFocusedItem,
  makeBreadcrumbFromValue
} from './cascader-utils';
import { useCascaderValue } from './use-value';

const StyledPopoverTrigger = styled(PopoverTrigger, {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  opacity: 0,
  pointerEvents: 'none',
  cursor: 'pointer'
});

export const CascaderContent = () => {
  const [searchValue, setSearchValue] = useState('');

  const {
    id,
    data,
    popoverOpen,
    currentValue,
    focusedItem,
    clearFocus,
    handleChange,
    focusNextRow,
    focusNextColumn,
    focusPreviousRow,
    focusPreviousColumn,
    setSelectionPath,
    setPopoverOpen,
    setFocusedItem,
    closePopover,
    setInputRef
  } = useCascaderValue();

  const cascaderSearchListRef = useRef<CascaderSearchListRef | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (popoverOpen && currentValue.value) {
      const path = buildSelectionPath(data, currentValue.value);
      setSelectionPath(path);
      setFocusedItem(convertSelectionPathToFocusedItem(path));
    } else if (!popoverOpen) {
      clearFocus();
      setSelectionPath([]);
      setSearchValue('');
    }
  }, [popoverOpen]);

  const handleCascadedKeyboardNavigation = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        if (!popoverOpen) {
          setPopoverOpen(true);
        }
        focusNextRow();
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        focusPreviousRow();
        break;
      }
      case 'ArrowRight': {
        e.preventDefault();
        focusNextColumn();
        break;
      }
      case 'ArrowLeft': {
        e.preventDefault();
        focusPreviousColumn();
        break;
      }
      case ' ':
      case 'Enter': {
        e.preventDefault();
        if (!popoverOpen) {
          setPopoverOpen(true);
        }
        if (focusedItem) {
          const parentObj = focusedItem.objectPath
            ? get(data, focusedItem.objectPath)
            : (data as CascaderOption[]);
          const item = parentObj[focusedItem.itemIndex];

          handleChange({
            label: item.label,
            value: item.value
          });

          closePopover();
        }
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleSearchListKeyboardNavigation = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        cascaderSearchListRef.current?.focusNextItem();
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        cascaderSearchListRef.current?.focusPreviousItem();
        break;
      }
      case 'Enter': {
        e.preventDefault();
        cascaderSearchListRef.current?.handleSelect();
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchValue === '') {
      handleCascadedKeyboardNavigation(e);
    } else {
      handleSearchListKeyboardNavigation(e);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      setInputRef(inputRef.current);
    }

    const handleEscapeKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (e.key === 'Escape' && target.closest(`[data-cascader-id="${id}"]`)) {
        closePopover();
      }
    };

    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(`[data-cascader-id="${id}"]`)) {
        closePopover();
      }
    };

    window.addEventListener('keydown', handleEscapeKey);
    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const focusedItemInfo = useMemo(() => {
    if (focusedItem) {
      const arrPath = makeBreadcrumbFromValue(focusedItem.value, data);
      const breadcrumb = arrPath.map((item) => item.label).join(' > ');
      const totalItems = focusedItem.objectPath
        ? get(data, focusedItem.objectPath)!.length
        : data.length;
      const itemPosition = focusedItem.itemIndex + 1;
      const hasOptions = get(data, focusedItem.objectPath)?.[
        focusedItem.itemIndex
      ];
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
    <Box data-cascader-id={id} className={prefixClassName('cascader')}>
      <Box
        css={{
          position: 'relative'
        }}
        className={prefixClassName('cascader__container')}
      >
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
        </Box>
        <FormInput
          ref={inputRef}
          label="Label"
          rightIcon={<ChevronDownIcon />}
          value={searchValue}
          onChange={(e) => {
            if (!popoverOpen) {
              setPopoverOpen(true);
            } else if (e.target.value === '') {
              closePopover();
            }
            setSearchValue(e.target.value);
          }}
          autoComplete="off"
          onKeyDown={handleInputKeyDown}
          onClick={() => {
            if (!popoverOpen) {
              setPopoverOpen(true);
            }
          }}
          leftElement={
            !popoverOpen ? (
              <CascaderInputValue>{currentValue?.label}</CascaderInputValue>
            ) : undefined
          }
          role="combobox"
          aria-haspopup="true"
          aria-expanded={popoverOpen}
          autoCorrect="off"
          aria-autocomplete="list"
          className={clsx(prefixClassName('cascader__input'), {
            'focused-state': popoverOpen
          })}
          {...(!popoverOpen && {
            'aria-describedby': `cascader-${id}-input-description`
          })}
        />
        {!popoverOpen && (
          <Box
            as="span"
            css={{
              width: 0,
              height: 0,
              position: 'absolute',
              opacity: 0,
              pointerEvents: 'none'
            }}
            id={`cascader-${id}-input-description`}
          >
            Cascader is focused, type to search. Press Down Arrow to open list.
          </Box>
        )}
        {!popoverOpen && <CascaderBreadCrumb />}
        <Popover open={popoverOpen}>
          <StyledPopoverTrigger
            tabIndex={-1}
            aria-hidden="true"
            className={prefixClassName('cascader__popover-trigger')}
          >
            Open options
          </StyledPopoverTrigger>
          <PopoverContentWrapper>
            <PopoverContent
              onOpenAutoFocus={(e) => {
                e.preventDefault();
                if (inputRef.current) {
                  inputRef.current.focus();
                }
              }}
              onCloseAutoFocus={(e) => {
                e.preventDefault();
                if (inputRef.current) {
                  inputRef.current.focus();
                }
              }}
              css={{
                width: 'var(--radix-popover-trigger-width)',
                padding: '$5 0',
                borderRadius: '$xl',
                marginTop: '$2',
                backgroundColor: '$white900'
              }}
              className={prefixClassName('cascader__popover-content')}
            >
              {searchValue ? (
                <CascaderSearchList
                  ref={cascaderSearchListRef}
                  searchValue={searchValue}
                  handleChange={(val) => {
                    handleChange(val);
                    closePopover();
                    setSearchValue('');
                  }}
                />
              ) : (
                <>
                  <CascaderList />
                  <CascaderFooter
                    handleChange={(val) => {
                      handleChange(val);
                      closePopover();
                    }}
                  />
                </>
              )}
            </PopoverContent>
          </PopoverContentWrapper>
        </Popover>
      </Box>
    </Box>
  );
};
