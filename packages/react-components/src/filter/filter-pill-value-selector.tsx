import { Popover, PopoverContent, PopoverTrigger } from '@src/popover';
import { prefixClassName } from '@src/utils';
import { ReactNode, useId, useState } from 'react';
import CascaderDropdownValueSelector from '@src/cascader-dropdown/cascader-dropdown-value-selector';
import { CascaderDropdownNode } from '@src/cascader-dropdown/cascader-dropdown-node';
import {
  dataTypes, optionTypes, CascaderDropdownDataValueType, CascaderDropdownValueSelectorType
} from '@src/cascader-dropdown/helpers/cascader-dropdown-constants';

const FilterPillValueSelector = ({
  children,
  dataType,
  choices,
  onApply,
  selectorValue
}: {
  children: ReactNode;
  dataType: keyof typeof dataTypes;
  choices?: CascaderDropdownDataValueType[];
  onApply: (value: CascaderDropdownValueSelectorType[keyof CascaderDropdownValueSelectorType]) => void;
  selectorValue: CascaderDropdownValueSelectorType;
}) => {
  const id = useId();

  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className={prefixClassName('cascader-dropdown__trigger')}>
        {children}
      </PopoverTrigger>
      <PopoverContent
        data-filter-popover-content={id}
        className={prefixClassName('cascader-dropdown')}
        css={{
          padding: 0, border: '0.5px solid $black300', borderRadius: '$xl', minWidth: '260px', maxWidth: '260px'
        }}
      >
        <CascaderDropdownValueSelector
          hasOperator={false}
          onApply={(value: CascaderDropdownValueSelectorType[keyof CascaderDropdownValueSelectorType]) => {
            setOpen(false);
            onApply(value);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          selectorValue={selectorValue}
          selectedNode={new CascaderDropdownNode('', '', {
            dataType,
            choices
          }, [], 0, '', '', optionTypes.VALUE_SELECTOR)}
        />
      </PopoverContent>
    </Popover>
  );
};

export default FilterPillValueSelector;
