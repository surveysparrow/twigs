import {
  ReactNode, useEffect, useId, useMemo, useState, useCallback
} from 'react';
import { FilterValueDropdownContext, FilterValueDropdownContextType } from './use-value';
import { FilterValueItemType, FilterValueOperatorType } from './helpers/filter-value-dropdown-constants';

export type FilterValueDropdownProviderProps = {
  children: ReactNode;
  data: FilterValueItemType;
  onChange: (operator: FilterValueOperatorType, newValue: Record<string, any>) => void;
  hasOperator: boolean;
};

export const FilterValueDropdownProvider = ({
  children,
  data,
  onChange,
  hasOperator
}: FilterValueDropdownProviderProps) => {
  const id = useId();

  const [selectedOperator, setSelectedOperator] = useState<FilterValueOperatorType | null>(null);

  const [popoverOpen, setPopoverOpen] = useState(false);

  useEffect(() => {
    if (!hasOperator) {
      setSelectedOperator(data.operators[0]);
    }
  }, [data, hasOperator]);

  const onCancel = useCallback(() => {
    if (!hasOperator) {
      setPopoverOpen(false);
    } else {
      setSelectedOperator(null);
    }
  }, [hasOperator, setPopoverOpen, setSelectedOperator]);

  const onApply = useCallback((value: any) => {
    if (selectedOperator && value) {
      onChange(selectedOperator, {
        [selectedOperator.dataType]: value
      });
      setPopoverOpen(false);
    }
  }, [onChange, selectedOperator]);

  const providerValue = useMemo<FilterValueDropdownContextType>(() => ({
    id,
    popoverOpen,
    setPopoverOpen,
    data,
    selectedOperator,
    setSelectedOperator,
    onChange,
    onCancel,
    onApply,
    hasOperator
  }), [id, popoverOpen, setPopoverOpen, data, selectedOperator, setSelectedOperator, onChange, onCancel, onApply, hasOperator]);

  return (
    <FilterValueDropdownContext.Provider value={providerValue}>
      {children}
    </FilterValueDropdownContext.Provider>
  );
};
