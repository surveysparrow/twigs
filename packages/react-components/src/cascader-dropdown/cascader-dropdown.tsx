import { ReactNode, useMemo, useState } from 'react';
import { CascaderDropdownPropertyType, CascaderDropdownValueType } from './helpers/cascader-dropdown-constants';
import { CascaderDropdownProvider } from './cascader-dropdown-provider';
import { CascaderDropdownContent } from './cascader-dropdown-content';
import { recursiveFind } from './helpers/cascader-dropdown-utils';

export type CascaderDropdownProps = {
  children: ReactNode;
  data: CascaderDropdownPropertyType[];
  value?: CascaderDropdownValueType | string | null;
  defaultValue?: CascaderDropdownValueType | string | null;
  onChange?: (value: CascaderDropdownValueType, selectionPath: CascaderDropdownValueType[]) => void;
} & CascaderDropdownComponentProps;

export type CascaderDropdownComponentProps = {
  // fetchOptions?: (
  //   data: {
  //     value: string;
  //     label: string;
  //   } & Record<string, any>
  // ) => Promise<void | any>;
  // fetchSearchOptions?: (searchString: string) => Promise<void | any>;
  // searchLoadingIndicator?: ReactNode;
};

export const CascaderDropdown = ({
  children,
  data = [],
  value = null,
  defaultValue = null,
  onChange
  // fetchOptions,
  // fetchSearchOptions,
  // searchLoadingIndicator
}: CascaderDropdownProps) => {
  const [localValue, setLocalValue] = useState<CascaderDropdownValueType>(
    (
      typeof defaultValue === 'object'
        ? defaultValue
        : recursiveFind(data, { value: defaultValue, label: '' })
    ) ?? { value: '', label: '' }
  );

  const selectedValue = useMemo<CascaderDropdownValueType>(() => {
    if (value && typeof value === 'object') {
      return value;
    }

    if (value) {
      return recursiveFind(data, { value, label: '' }) ?? { value: '', label: '' };
    }

    if (localValue && typeof localValue === 'object') {
      return localValue;
    }

    // if (localValue) {
    //   return recursiveFind(data, localValue) ?? { value: '', label: '' };
    // }

    return { value: '', label: '' };
  }, [data, localValue, value]);

  // const componentProps: CascaderDropdownComponentProps = useMemo(
  //   () => ({
  //     fetchOptions,
  //     fetchSearchOptions,
  //     searchLoadingIndicator
  //   }),
  //   [
  //     fetchOptions,
  //     fetchSearchOptions,
  //     searchLoadingIndicator
  //   ]
  // );

  return (
    <CascaderDropdownProvider
      data={data}
      value={selectedValue}
      onChange={(updatedValue, selectionPath) => {
        setLocalValue(updatedValue);
        if (onChange) {
          onChange(updatedValue, selectionPath);
        }
      }}
    >
      <CascaderDropdownContent>
        {children}
      </CascaderDropdownContent>
    </CascaderDropdownProvider>
  );
};
