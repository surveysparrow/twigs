import { ChevronDownIcon } from '@sparrowengg/twigs-react-icons';
import { get } from 'lodash-es';
import React, {
  useEffect, useId, useRef, useState
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
  convertSelectionPathToFocusedItem
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
  const id = useId();

  const {
    data,
    popoverOpen,
    currentValue,
    focusedItem,
    getPopoverOpenOnFocusLocked,
    clearFocus,
    handleChange,
    focusNextRow,
    focusNextColumn,
    focusPreviousRow,
    focusPreviousColumn,
    setSelectionPath,
    setPopoverOpen,
    setFocusedItem,
    closePopover
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

  return (
    <Box data-cascader-id={id}>
      <Box
        css={{
          position: 'relative'
        }}
      >
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
          onFocus={() => {
            if (!getPopoverOpenOnFocusLocked()) {
              setPopoverOpen(true);
            }
          }}
          leftElement={
            !popoverOpen ? (
              <CascaderInputValue>{currentValue?.label}</CascaderInputValue>
            ) : undefined
          }
        />
        {!popoverOpen && <CascaderBreadCrumb />}
        <Popover open={popoverOpen}>
          <StyledPopoverTrigger tabIndex={-1} aria-hidden="true">
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
