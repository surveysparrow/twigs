import { ReactNode } from 'react';
import { FilterValueDropdownProvider } from './filter-value-dropdown-provider';
import { FilterValueDropdownContent } from './filter-value-dropdown-content';
import { FilterValueItemType, FilterValueOperatorType } from './helpers/filter-value-dropdown-constants';

export type FilterValueDropdownProps = {
  children: ReactNode;
  data: FilterValueItemType;
  onChange: (operator: FilterValueOperatorType, newValue: Record<string, any>) => void;
  hasOperator: boolean;
} & FilterValueDropdownComponentProps;

export type FilterValueDropdownComponentProps = {};

export const FilterValueDropdown = ({
  children,
  data,
  onChange,
  hasOperator
}: FilterValueDropdownProps) => {
  return (
    <FilterValueDropdownProvider data={data} onChange={onChange} hasOperator={hasOperator}>
      <FilterValueDropdownContent>
        {children}
      </FilterValueDropdownContent>
    </FilterValueDropdownProvider>
  );
};
