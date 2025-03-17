import { ReactNode } from 'react';
import { FilterValueDropdownProvider } from './filter-value-dropdown-provider';
import { FilterValueDropdownContent } from './filter-value-dropdown-content';
import { FilterValueItemType } from './helpers/filter-value-dropdown-constants';

export type FilterValueDropdownProps = {
  children: ReactNode;
  data: FilterValueItemType;
} & FilterValueDropdownComponentProps;

export type FilterValueDropdownComponentProps = {};

export const FilterValueDropdown = ({
  children,
  data
}: FilterValueDropdownProps) => {
  return (
    <FilterValueDropdownProvider data={data}>
      <FilterValueDropdownContent>
        {children}
      </FilterValueDropdownContent>
    </FilterValueDropdownProvider>
  );
};
