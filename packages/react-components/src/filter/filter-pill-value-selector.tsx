import { Popover, PopoverContent, PopoverTrigger } from '@src/popover';
import { prefixClassName } from '@src/utils';
import { ReactNode, useId } from 'react';
import CascaderDropdownValueSelector from '@src/cascader-dropdown/cascader-dropdown-value-selector';
import { CascaderDropdownNode } from '@src/cascader-dropdown/cascader-dropdown-node';
import { dataTypes, optionTypes, CascaderDropdownDataValueType } from '@src/cascader-dropdown/helpers/cascader-dropdown-constants';

const FilterPillValueSelector = ({ children, dataType, choices }: { children: ReactNode; dataType: keyof typeof dataTypes; choices?: CascaderDropdownDataValueType[] }) => {
  const id = useId();

  return (
    <Popover>
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
          onApply={() => {}}
          onCancel={() => {}}
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
