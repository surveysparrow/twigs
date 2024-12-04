import { useMemo, useState } from 'react';
import { CascaderContent } from './cascader-content';
import {
  CascaderContextType,
  CascaderProvider,
  SelectionPath
} from './cascader-provider';
import { recursiveFind } from './cascader-utils';

export interface CascaderOption {
  label: string;
  value: string;
  options?: CascaderOption[];
}

type ComponentProps = CascaderContextType['componentProps'];

export type CascaderProps = {
  data: CascaderOption[];
  value?: string | { label: string; value: string };
  defaultValue?: string | { label: string; value: string };
  onChange?: (value: CascaderOption, selectionPath: SelectionPath[]) => void;
} & ComponentProps;

export const Cascader = ({
  css,
  data,
  value,
  label,
  placeholder,
  defaultValue,
  popoverPortal,
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

  const componentProps: ComponentProps = useMemo(
    () => ({
      css,
      label,
      placeholder,
      popoverPortal,
      ariaLiveContent,
      inputAriaDescription
    }),
    [
      css,
      label,
      placeholder,
      popoverPortal,
      ariaLiveContent,
      inputAriaDescription
    ]
  );

  return (
    <CascaderProvider
      data={data}
      componentProps={componentProps}
      value={selectedValue}
      handleChange={(val, selectionPath) => {
        setLocalValue(val.value);
        if (onChange) {
          onChange(val, selectionPath);
        }
      }}
    >
      <CascaderContent />
    </CascaderProvider>
  );
};
