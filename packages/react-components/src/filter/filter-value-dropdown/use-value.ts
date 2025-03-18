import { createContext, useContext } from 'react';
import { FilterValueItemType, FilterValueOperatorType } from './helpers/filter-value-dropdown-constants';

export type FilterValueDropdownContextType = {
  id: string;
  popoverOpen: boolean;
  setPopoverOpen: (open: boolean) => void;
  data: FilterValueItemType;
  selectedOperator: FilterValueOperatorType | null;
  setSelectedOperator: (operator: FilterValueOperatorType | null) => void;
  onChange: (operator: FilterValueOperatorType, newValue: Record<string, any>) => void;
  onCancel: () => void;
  onApply: (value: any) => void;
  hasOperator: boolean;
};

export const FilterValueDropdownContext = createContext<FilterValueDropdownContextType>({
  id: '',
  popoverOpen: false,
  setPopoverOpen: () => {},
  data: {
    operators: []
  },
  selectedOperator: null,
  setSelectedOperator: () => {},
  onChange: () => {},
  onCancel: () => {},
  onApply: () => {},
  hasOperator: false
});

export const useFilterValueDropdownContext = () => {
  return useContext(FilterValueDropdownContext);
};
