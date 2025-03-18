import { Popover } from '@radix-ui/react-popover';
import { PopoverContent, PopoverTrigger } from '@src/popover';
import { TooltipProvider } from '@src/tooltip';
import { ReactNode } from 'react';
import { prefixClassName } from '@src/utils';
import { useFilterValueDropdownContext } from './use-value';
import FilterValueDropdownValueSelector, { SearchableList } from './filter-value-dropdown-value-selector';
import { FilterValueOperatorType } from './helpers/filter-value-dropdown-constants';

export const FilterValueDropdownContent = ({ children }: { children: ReactNode }) => {
  const {
    popoverOpen, setPopoverOpen, id, selectedOperator, data, setSelectedOperator, onChange
  } = useFilterValueDropdownContext();

  const handleOperatorClick = (operator: string, choice: { label: string; value: string }) => {
    setSelectedOperator(choice as FilterValueOperatorType);
    onChange(choice as FilterValueOperatorType, {});
  };

  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger asChild className={prefixClassName('filterValue-dropdown__trigger')}>
        {children}
      </PopoverTrigger>
      <PopoverContent
        data-filter-popover-content={id}
        className={prefixClassName('filterValue-dropdown')}
        css={{
          padding: 0, border: '0.5px solid $black300', borderRadius: '$xl', minWidth: '260px', maxWidth: '260px'
        }}
      >
        <TooltipProvider delayDuration={0}>
          {/* <FilterValueDropdownBreadcrumb /> */}
          {!selectedOperator && <SearchableList choices={data.operators ?? []} isMultiSelect={false} onClick={handleOperatorClick} hasArrow />}
          {selectedOperator && <FilterValueDropdownValueSelector />}
        </TooltipProvider>
      </PopoverContent>
    </Popover>
  );
};
