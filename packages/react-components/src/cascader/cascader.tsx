import { useMemo, useState } from 'react';
import { CascaderContent } from './cascader-content';
import { CascaderContextType, CascaderProvider } from './cascader-provider';
import { recursiveFind } from './cascader-utils';

export interface CascaderOption {
  label: string;
  value: string;
  disabled?: boolean;
  options?: CascaderOption[];
}

export type CascaderProps = {
  data: CascaderOption[];
  value?: string | { label: string; value: string };
  defaultValue?: string | { label: string; value: string };
  onChange?: (value: CascaderOption) => void;
} & CascaderContextType['componentProps'];

export const Cascader = ({
  data,
  value,
  label,
  placeholder,
  defaultValue,
  inputAriaDescription,
  onChange,
  ariaLiveContent
}: CascaderProps) => {
  const [localValue, setLocalValue] = useState(defaultValue ?? '');

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

  const componentProps = useMemo(
    () => ({
      label, placeholder, inputAriaDescription, ariaLiveContent
    }),
    [label, placeholder, inputAriaDescription, ariaLiveContent]
  );

  return (
    <CascaderProvider
      data={data}
      componentProps={componentProps}
      currentValue={selectedValue}
      handleChange={(val) => {
        setLocalValue(val.value);
        if (onChange) {
          onChange(val);
        }
      }}
    >
      <CascaderContent />
    </CascaderProvider>
  );
};
