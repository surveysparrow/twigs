import { ChevronDownIcon } from '@sparrowengg/twigs-react-icons';
import { prefixClassName } from '@src/utils';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { Box } from '../box';
import { FormInput } from '../input';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import { styled } from '../stitches.config';
import { CascaderAriaLive } from './cascader-aria-live';
import {
  CascaderBreadCrumb,
  CascaderClearButton,
  CascaderInputValue,
  PopoverContentWrapper
} from './cascader-atomics';
import { CascaderFooter } from './cascader-footer';
import { CascaderList } from './cascader-list';
import {
  CascaderSearchList,
  CascaderSearchListRef
} from './cascader-searchlist';
import { buildSelectionPath } from './cascader-utils';
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
    value,
    rootNode,
    popoverOpen,
    focusedItem,
    componentProps,
    clearFocus,
    handleChange,
    focusNextRow,
    focusNextColumn,
    focusPreviousRow,
    focusPreviousColumn,
    setSelectedNode,
    setPopoverOpen,
    setFocusedItem,
    closePopover,
    setInputRef
  } = useCascaderValue();

  const cascaderSearchListRef = useRef<CascaderSearchListRef | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (popoverOpen && value?.value) {
      const node = rootNode?.findNode(value.value);
      if (node) {
        setSelectedNode(node);
        setFocusedItem({
          node,
          isMouseClick: true
        });
      }
    } else if (!popoverOpen) {
      clearFocus();
      setSelectedNode(null);
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
        if (focusedItem.node) {
          handleChange(
            {
              label: focusedItem.node.label,
              value: focusedItem.node.value
            },
            buildSelectionPath(rootNode?.findNode(focusedItem.node.value))
          );

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
      if (
        !(
          target.closest(`[data-cascader-id="${id}"]`)
          || target.closest(`[data-cascader-popovercontent="${id}"]`)
        )
      ) {
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
    <Box
      data-cascader-id={id}
      className={prefixClassName('cascader')}
      css={componentProps.css}
    >
      <Box
        css={{
          position: 'relative',

          '.twigs-input__addon--left': {
            pointerEvents: 'none'
          }
        }}
        className={prefixClassName('cascader__container')}
      >
        <CascaderAriaLive searchValue={searchValue} />
        <FormInput
          ref={inputRef}
          label={componentProps.label || 'Select an option'}
          placeholder={
            value?.value ? '' : componentProps.placeholder || 'Search'
          }
          rightIcon={<ChevronDownIcon />}
          value={searchValue}
          onChange={(e) => {
            e.currentTarget.classList.remove('cursor-hidden');
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
            !searchValue ? (
              <CascaderInputValue textVariant={popoverOpen ? 'light' : 'dark'}>
                {value?.label}
              </CascaderInputValue>
            ) : undefined
          }
          rightElement={
            popoverOpen && value?.value ? (
              <CascaderClearButton
                onClick={() => {
                  inputRef.current?.focus();
                  requestAnimationFrame(() => {
                    handleChange({ value: '', label: '' }, []);
                  });
                }}
              />
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
          onFocus={(e) => {
            e.currentTarget.classList.remove('cursor-hidden');
          }}
          css={{
            '.cursor-hidden': {
              color: 'transparent'
            }
          }}
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
            {componentProps.inputAriaDescription
              ?? 'Cascader is focused, type to search. Press Down Arrow to open list.'}
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
          <PopoverContentWrapper portalTarget={componentProps.popoverPortal}>
            <PopoverContent
              data-cascader-popovercontent={id}
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
                paddingTop: 0,
                borderRadius: '$xl',
                marginTop: '$2',
                backgroundColor: '$white900',
                border: '1px solid $colors$black300'
              }}
              className={prefixClassName('cascader__popover-content')}
            >
              {searchValue ? (
                <CascaderSearchList
                  ref={cascaderSearchListRef}
                  searchValue={searchValue}
                  handleChange={(val, selPath) => {
                    handleChange(val, selPath);
                    closePopover();
                    setSearchValue('');
                    setTimeout(() => {
                      inputRef.current?.classList.add('cursor-hidden');
                    }, 50);
                  }}
                />
              ) : (
                <>
                  <CascaderList />
                  <CascaderFooter
                    handleChange={(val, selPath) => {
                      handleChange(val, selPath);
                      closePopover();
                      setTimeout(() => {
                        inputRef.current?.classList.add('cursor-hidden');
                      }, 50);
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
