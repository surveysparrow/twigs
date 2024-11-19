import { ChevronDownIcon } from '@sparrowengg/twigs-react-icons';
import { useEffect, useRef, useState } from 'react';
import { Box } from '../box';
import { FormInput } from '../input';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import { styled } from '../stitches.config';
import { Text } from '../text';
import { CascaderBreadCrumb } from './cascader-breadcrumb';
import { CascaderFooter } from './cascader-footer';
import { CascaderList, CascaderListRef } from './cascader-list';
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
  const [inputFocused, setInputFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const {
    data,
    popoverOpen,
    currentValue,
    handleChange,
    setPopoverOpen,
    setSelectionPath
  } = useCascaderValue();

  const cascaderListRef = useRef<CascaderListRef | null>(null);
  const cascaderSearchListRef = useRef<CascaderSearchListRef | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (popoverOpen && currentValue.value) {
      const path = buildSelectionPath(data, currentValue.value);
      setSelectionPath(path);
    } else if (!popoverOpen) {
      setSelectionPath([]);
      setSearchValue('');
    }
  }, [popoverOpen]);

  return (
    <Box>
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
          onChange={(e) => setSearchValue(e.target.value)}
          autoComplete="off"
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault();
              if (cascaderListRef.current) {
                cascaderListRef.current.focusFirstItem();
              } else if (cascaderSearchListRef.current) {
                cascaderSearchListRef.current.focusFirstItem();
              }
            }
          }}
          onFocus={() => {
            setPopoverOpen(true);
            setInputFocused(true);
          }}
          onBlur={() => {
            setInputFocused(false);
          }}
          leftElement={
            !(inputFocused || popoverOpen) ? (
              <Box
                css={{
                  marginLeft: '$5'
                }}
              >
                <Text
                  css={{
                    color: '$neutral900'
                  }}
                >
                  {currentValue?.label}
                </Text>
              </Box>
            ) : undefined
          }
        />
        {!(inputFocused || popoverOpen) && <CascaderBreadCrumb />}
        <Popover
          open={popoverOpen}
          onOpenChange={(open) => {
            setPopoverOpen(open);
          }}
          modal
        >
          <StyledPopoverTrigger tabIndex={-1}>
            Open options
          </StyledPopoverTrigger>
          <PopoverContent
            onOpenAutoFocus={(e) => {
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
                  setPopoverOpen(false);
                  setSearchValue('');
                }}
              />
            ) : (
              <>
                <CascaderList ref={cascaderListRef} />
                <CascaderFooter
                  handleChange={(val) => {
                    handleChange(val);
                    setPopoverOpen(false);
                  }}
                />
              </>
            )}
          </PopoverContent>
        </Popover>
      </Box>
    </Box>
  );
};
