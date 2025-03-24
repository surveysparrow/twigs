import { Popover, PopoverProps } from '@radix-ui/react-popover';
import { PopoverContent, PopoverTrigger } from '@src/popover';
import { TooltipProvider } from '@src/tooltip';
import { ReactNode, useState } from 'react';
import { prefixClassName } from '@src/utils';
import { useCascaderDropdownContext } from './use-value';
import { CascaderDropdownNode } from './cascader-dropdown-node';
import { CascaderDropdownList } from './cascader-dropdown-list';
import { CascaderDropdownBreadcrumb } from './cascader-dropdown-breadcrumb';
import { CascaderDropdownSearchInput } from './cascader-dropdown-search-input';
import { CascaderDropdownSearchList } from './cascader-dropdown-search-list';
import { optionTypes } from './helpers/cascader-dropdown-constants';
import { DropdownContentProps } from './cascader-dropdown';

export type ResultCacheType = Record<string, CascaderDropdownNode[]>;

export const CascaderDropdownContent = ({ children, dropdownContentProps, ...props }: { children: ReactNode, dropdownContentProps?: DropdownContentProps } & PopoverProps) => {
  const {
    popoverOpen,
    setPopoverOpen,
    id,
    selectedNode,
    focusNthColumn,
    focusPreviousColumn,
    foldersSelectionPath
  } = useCascaderDropdownContext();

  const [searchQuery, setSearchQuery] = useState('');
  const [resultCache, setResultCache] = useState<ResultCacheType>({});

  const [searchFocusedNode, setSearchFocusedNode] = useState<CascaderDropdownNode | null>(null);

  const showValueSelector = selectedNode?.getType() === optionTypes.VALUE_SELECTOR;

  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen} {...props}>
      <PopoverTrigger asChild className={prefixClassName('cascader-dropdown__trigger')}>
        {children}
      </PopoverTrigger>
      <PopoverContent
        data-filter-popover-content={id}
        className={prefixClassName('cascader-dropdown')}
        css={{
          padding: 0, border: '0.5px solid $black300', borderRadius: '$xl', minWidth: '260px', maxWidth: '260px'
        }}
        {...dropdownContentProps}
      >
        <TooltipProvider delayDuration={0}>
          <CascaderDropdownBreadcrumb
            focusNthColumn={focusNthColumn}
            focusPreviousColumn={focusPreviousColumn}
            foldersSelectionPath={foldersSelectionPath as { value: string, label: string }[]}
          />
          {!showValueSelector && (
            <CascaderDropdownSearchInput
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              searchFocusedNode={searchFocusedNode}
              setSearchFocusedNode={setSearchFocusedNode}
            />
          )}
          {!searchQuery && <CascaderDropdownList />}
          {searchQuery && (
            <CascaderDropdownSearchList
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              resultCache={resultCache}
              setResultCache={setResultCache}
              searchFocusedNode={searchFocusedNode}
              setSearchFocusedNode={setSearchFocusedNode}
            />
          )}
        </TooltipProvider>
      </PopoverContent>
    </Popover>
  );
};
