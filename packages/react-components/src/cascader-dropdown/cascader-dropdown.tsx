import {
  ReactNode, RefAttributes, useMemo, useState
} from 'react';
import { PopoverProps, PopoverContentProps } from '@radix-ui/react-popover';
import { TooltipProps, TooltipProvider } from '@src/tooltip';
import {
  CascaderDropdownItemType, CascaderDropdownDataValueType, CascaderDropdownValueSelectorType, CascaderDropdownOperatorType,
  initialFilterValueSelectorValue
} from './helpers/cascader-dropdown-constants';
import { CascaderDropdownProvider } from './cascader-dropdown-provider';
import { CascaderDropdownContent } from './cascader-dropdown-content';
import { recursiveFind } from './helpers/cascader-dropdown-utils';

export type DropdownContentProps = PopoverContentProps & RefAttributes<HTMLDivElement>;

export type CascaderDropdownProps = {
  children?: ReactNode;
  data: (CascaderDropdownItemType | CascaderDropdownOperatorType)[];
  value?: CascaderDropdownDataValueType | string | null;
  defaultValue?: CascaderDropdownDataValueType | string | null;
  onChange?: ({
    value,
    selectionPath,
    selectedProperty,
    selectorValue
  } : OnChangeReturnType) => void;
  dropdownProps?: PopoverProps;
  dropdownContentProps?: DropdownContentProps;
  tooltipProps?: TooltipProps;
  selectorValue?: CascaderDropdownValueSelectorType;
} & CascaderDropdownComponentProps;

export type CascaderDropdownComponentProps = {
};

export type OnChangeReturnType = {
  value: CascaderDropdownDataValueType | CascaderDropdownOperatorType,
  selectionPath: CascaderDropdownDataValueType[],
  selectedProperty: CascaderDropdownDataValueType | null,
  selectorValue?: CascaderDropdownValueSelectorType
};

export const CascaderDropdown = ({
  children,
  data = [],
  value = null,
  defaultValue = null,
  onChange,
  dropdownProps = {},
  dropdownContentProps = {},
  tooltipProps,
  selectorValue = initialFilterValueSelectorValue
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
    <TooltipProvider delayDuration={0}>
      <CascaderDropdownProvider
        data={data}
        value={selectedValue}
        selectorValue={selectorValue}
        onChange={({
          value: selectedDataValue,
          selectionPath,
          selectorValue: selectedSelectorValue
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
              selectorValue: selectedSelectorValue
            });
          }
        }}
      >
        <CascaderDropdownContent {...dropdownProps} dropdownContentProps={dropdownContentProps} tooltipProps={tooltipProps}>
          {children}
        </CascaderDropdownContent>
      </CascaderDropdownProvider>
    </TooltipProvider>
  );
};
