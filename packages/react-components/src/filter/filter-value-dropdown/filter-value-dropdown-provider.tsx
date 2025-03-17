import {
  ReactNode, useId, useMemo, useState
} from 'react';
import { FilterValueDropdownContext, FilterValueDropdownContextType } from './use-value';
import { FilterValueItemType, FilterValueOperatorType } from './helpers/filter-value-dropdown-constants';

export type FilterValueDropdownProviderProps = {
  children: ReactNode;
  data: FilterValueItemType;
};

export const FilterValueDropdownProvider = ({
  children,
  data
}: FilterValueDropdownProviderProps) => {
  const id = useId();

  const [selectedOperator, setSelectedOperator] = useState<FilterValueOperatorType | null>(null);

  // const inputRef = useRef<HTMLInputElement>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  // useEffect(() => {
  //   if (inputRef.current && document.activeElement !== inputRef.current) inputRef.current.focus();
  // });

  const providerValue = useMemo<FilterValueDropdownContextType>(() => ({
    id,
    popoverOpen,
    setPopoverOpen,
    data,
    selectedOperator,
    setSelectedOperator
  }), [id, popoverOpen, setPopoverOpen, data, selectedOperator, setSelectedOperator]);

  return (
    <FilterValueDropdownContext.Provider value={providerValue}>
      {children}
    </FilterValueDropdownContext.Provider>
  );
};
