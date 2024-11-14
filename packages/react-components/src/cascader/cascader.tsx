import { ChevronDownIcon } from '@sparrowengg/twigs-react-icons';
import { useMemo, useRef, useState } from 'react';
import { Box } from '../box';
import { FormInput } from '../input';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import { styled } from '../stitches.config';
import { Text } from '../text';
import { CascaderFooter } from './cascader-footer';
import { CascaderList } from './cascader-list';
import { CascaderProvider } from './cascader-provider';
import { recursiveFind } from './cascader-utils';
import { CascaderSearchList } from './cascader-searchlist';

const StyledPopoverTrigger = styled(PopoverTrigger, {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  opacity: 0,
  pointerEvents: 'none',
  cursor: 'pointer'
});

export interface CascaderOption {
  label: string;
  value: string;
  options?: CascaderOption[];
}

export interface CascaderProps {
  data: CascaderOption[];
  value?: string | { label: string; value: string };
  defaultValue?: string | { label: string; value: string };
  onChange?: (value: CascaderOption) => void;
}

export const Cascader = ({
  data,
  value,
  defaultValue,
  onChange
}: CascaderProps) => {
  const [localValue, setLocalValue] = useState(defaultValue ?? '');
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const selectedValue = useMemo(() => {
    if (value && typeof value === 'object') return value;
    if (value) {
      return recursiveFind(data, { value }) ?? { value: '', label: '' };
    }
    if (localValue && typeof localValue === 'object') return localValue;
    if (localValue) {
      return (
        recursiveFind(data, { value: localValue }) ?? { value: '', label: '' }
      );
    }

    return { value: '', label: '' };
  }, [data, localValue, value]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <CascaderProvider data={data}>
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
            onFocus={() => {
              setPopoverOpen(true);
              setInputFocused(true);
            }}
            onBlur={() => {
              setInputFocused(false);
            }}
            leftElement={
              !inputFocused ? (
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
                    {selectedValue?.label}
                  </Text>
                </Box>
              ) : undefined
            }
          />
          <Popover open={popoverOpen} onOpenChange={setPopoverOpen} modal>
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
                <CascaderSearchList searchValue={searchValue} />
              ) : (
                <>
                  <CascaderList />
                  <CascaderFooter
                    handleChange={(val) => {
                      if (onChange) {
                        onChange(val);
                      }
                      setLocalValue(val);
                    }}
                  />
                </>
              )}
            </PopoverContent>
          </Popover>
        </Box>
      </Box>
    </CascaderProvider>
  );
};
