import {
  ReactNode, RefAttributes, useMemo, useState
} from 'react';
import { PopoverProps, PopoverContentProps } from '@radix-ui/react-popover';
import { TooltipProps } from '@src/tooltip';
import {
  CascaderDropdownItemType, CascaderDropdownDataValueType, CascaderDropdownValueSelectorType, CascaderDropdownOperatorType
} from './helpers/cascader-dropdown-constants';
import { CascaderDropdownProvider } from './cascader-dropdown-provider';
import { CascaderDropdownContent } from './cascader-dropdown-content';
import { recursiveFind } from './helpers/cascader-dropdown-utils';

export type DropdownContentProps = PopoverContentProps & RefAttributes<HTMLDivElement>;

export type CascaderDropdownProps = {
  children: ReactNode;
  data: CascaderDropdownItemType[];
  value?: CascaderDropdownDataValueType | string | null;
  defaultValue?: CascaderDropdownDataValueType | string | null;
  onChange?: ({
    value,
    selectionPath,
    selectedProperty,
    selectorValue
  } : {
    value: CascaderDropdownDataValueType | CascaderDropdownOperatorType,
    selectionPath: CascaderDropdownDataValueType[],
    selectedProperty: CascaderDropdownItemType | null,
    selectorValue?: CascaderDropdownValueSelectorType
  }) => void;
  dropdownProps?: PopoverProps;
  dropdownContentProps?: DropdownContentProps;
  tooltipProps?: TooltipProps;
} & CascaderDropdownComponentProps;

export type CascaderDropdownComponentProps = {
};

export const CascaderDropdown = ({
  children,
  data = [],
  value = null,
  defaultValue = null,
  onChange,
  dropdownProps = {},
  dropdownContentProps = {},
  tooltipProps = {
    content: ''
  }
}: CascaderDropdownProps) => {
  const [localValue, setLocalValue] = useState<CascaderDropdownDataValueType>(
    (
      typeof defaultValue === 'object'
        ? defaultValue
        : recursiveFind(data, { value: defaultValue, label: '' })
    ) ?? { value: '', label: '' }
  );

  const selectedValue = useMemo<CascaderDropdownDataValueType>(() => {
    if (value && typeof value === 'object') {
      return value;
    }

    if (value) {
      return recursiveFind(data, { value, label: '' }) ?? { value: '', label: '' };
    }

    if (localValue && typeof localValue === 'object') {
      return localValue;
    }

    return { value: '', label: '' };
  }, [data, localValue, value]);

  return (
    <CascaderDropdownProvider
      data={data}
      value={selectedValue}
      onChange={({
        value: selectedDataValue,
        selectionPath,
        selectorValue
      }: {
        value: CascaderDropdownDataValueType | CascaderDropdownOperatorType,
        selectionPath: CascaderDropdownDataValueType[],
        selectorValue?: CascaderDropdownValueSelectorType
      }) => {
        setLocalValue(selectedDataValue);
        if (onChange) {
          onChange({
            value: selectedDataValue,
            selectionPath,
            selectedProperty: recursiveFind(data, { value: selectedDataValue.value, label: '' }),
            selectorValue
          });
        }
      }}
    >
      <CascaderDropdownContent {...dropdownProps} dropdownContentProps={dropdownContentProps} tooltipProps={tooltipProps}>
        {children}
      </CascaderDropdownContent>
    </CascaderDropdownProvider>
  );
};
