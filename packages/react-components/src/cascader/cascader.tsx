import {
  ComponentProps, ReactNode, useMemo, useState
} from 'react';
import { Box } from '../box';
import { CascaderContent } from './cascader-content';
import { CascaderItem, CascaderProvider } from './cascader-provider';
import { recursiveFind } from './cascader-utils';

export type CascaderOption = {
  label: string;
  value: string;
  options?: CascaderOption[];
  shouldFetchOptions?: boolean;
  disabled?: boolean;
} & Record<string, any>;

export type CascaderComponentProps = {
  label?: string;
  placeholder?: string;
  inputAriaDescription?: string;
  popoverPortal?: HTMLElement;
  css?: ComponentProps<typeof Box>['css'];
  cancelButtonText?: string;
  chooseButtonText?: string;
  fetchOptions?: (
    data: {
      value: string;
      label: string;
    } & Record<string, any>
  ) => Promise<void | any>;
  fetchSearchOptions?: (searchString: string) => Promise<void | any>;
  renderValue?: (
    value: CascaderItem | null,
    selectionPath: CascaderItem[]
  ) => ReactNode;
  renderValueText?: (
    value: CascaderItem | null,
    selectionPath: CascaderItem[]
  ) => ReactNode;
  renderBreadCrumb?: (
    data: CascaderItem | null,
    selectionPath: CascaderItem[]
  ) => ReactNode;
  ariaLiveContent?: (
    data: {
      breadcrumb: string;
      label: string;
      totalItems: any;
      itemPosition: number;
      hasOptions: boolean;
      hasParent: boolean;
    } | null
  ) => ReactNode;
  searchLoadingIndicator?: ReactNode;
};

export type CascaderProps = {
  data: CascaderOption[];
  value?: string | { label: string; value: string };
  defaultValue?: string | { label: string; value: string };
  onChange?: (value: CascaderOption, selectionPath: CascaderItem[]) => void;
} & CascaderComponentProps;

export const Cascader = ({
  css,
  data,
  value,
  label,
  placeholder,
  defaultValue,
  popoverPortal,
  fetchOptions,
  renderValue,
  renderValueText,
  renderBreadCrumb,
  fetchSearchOptions,
  inputAriaDescription,
  cancelButtonText = 'Cancel',
  chooseButtonText = 'Choose',
  searchLoadingIndicator = 'Loading Results...',
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

  const componentProps: CascaderComponentProps = useMemo(
    () => ({
      css,
      label,
      placeholder,
      renderValue,
      fetchOptions,
      popoverPortal,
      renderValueText,
      ariaLiveContent,
      renderBreadCrumb,
      cancelButtonText,
      chooseButtonText,
      fetchSearchOptions,
      inputAriaDescription,
      searchLoadingIndicator
    }),
    [
      css,
      label,
      renderValue,
      placeholder,
      fetchOptions,
      popoverPortal,
      renderValueText,
      ariaLiveContent,
      renderBreadCrumb,
      cancelButtonText,
      chooseButtonText,
      fetchSearchOptions,
      inputAriaDescription,
      searchLoadingIndicator
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
