import { createContext, useContext } from 'react';
import { FilterValueItemType, FilterValueOperatorType } from './helpers/filter-value-dropdown-constants';

export type FilterValueDropdownContextType = {
  id: string;
  popoverOpen: boolean;
  setPopoverOpen: (open: boolean) => void;
  data: FilterValueItemType;
  selectedOperator: FilterValueOperatorType | null;
  setSelectedOperator: (operator: FilterValueOperatorType | null) => void;
};

export const FilterValueDropdownContext = createContext<FilterValueDropdownContextType>({
  id: '',
  popoverOpen: false,
  setPopoverOpen: () => {},
  data: {
    operators: []
  },
  selectedOperator: null,
  setSelectedOperator: () => {}
});

export const useFilterValueDropdownContext = () => {
  return useContext(FilterValueDropdownContext);
};
