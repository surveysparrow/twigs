import { Flex } from '@src/flex';
import React, {
  RefAttributes, useState
} from 'react';
import {
  Dialog, DialogClose, DialogBody, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger
} from '@src/dialog';
import { Button, IconButton } from '@src/button';
import { Box } from '@src/box';
import {
  ChevronDownIcon, CloseIcon, DeleteIcon, PlusIcon
} from '@sparrowengg/twigs-react-icons';
import { Text } from '@src/text';
import { properties } from '@src/cascader-dropdown/tests/data';
import { CascaderDropdown } from '@src/cascader-dropdown';
import {
  CascaderDropdownDataValueType, CascaderDropdownOperatorType, CascaderDropdownItemType, CascaderDropdownValueSelectorType, initialFilterValueSelectorValue
} from '@src/cascader-dropdown/helpers/cascader-dropdown-constants';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from '@src/dropdown';
import { PopoverContentProps } from '@radix-ui/react-popover';
import { prefixClassName } from '@src/utils/prefix-class-name';
import { Tooltip, TooltipProvider } from '@src/tooltip';
import { FilterPill, FilterPillWithoutOperator } from '../index';

export default {
  component: FilterPill,
  title: 'Form/FilterPill'
};

const SurveyIcon = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        // eslint-disable-next-line max-len
        d="M7.5 3.75H5.625C4.58947 3.75 3.75 4.58947 3.75 5.625V15.625C3.75 16.6605 4.58947 17.5 5.625 17.5H14.375C15.4105 17.5 16.25 16.6605 16.25 15.625V5.625C16.25 4.58947 15.4105 3.75 14.375 3.75H12.5M7.5 3.75C7.5 4.44036 8.05964 5 8.75 5H11.25C11.9404 5 12.5 4.44036 12.5 3.75M7.5 3.75C7.5 3.05964 8.05964 2.5 8.75 2.5H11.25C11.9404 2.5 12.5 3.05964 12.5 3.75M9.36498 8.80859L7.91023 10.1926L6.87164 9.25765M9.36498 12.5586L7.91023 13.9426L6.87164 13.0077M11.875 9.375H13.125M11.875 13.125H13.125"
        stroke="#6A6A6A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

type ComparatorType = 'AND' | 'OR';
type GlobalConnectorType = 'ALL' | 'ANY';

export type FilterType = {
  comparator: ComparatorType;
  connector?: CascaderDropdownOperatorType;
  property: CascaderDropdownItemType;
  value: CascaderDropdownValueSelectorType;
}

type FilterGroupType = {
  filters: FilterType[];
}

type ConditionsDataType = {
  globalConnector: GlobalConnectorType;
  filterGroups: FilterGroupType[];
}

const connectorOptionsMap = {
  AND: 'and',
  OR: 'or'
};

const connectorOptions = Object.keys(connectorOptionsMap).map((key) => ({
  label: connectorOptionsMap[key],
  value: key
}));

const allAnyOptionsMap = {
  ALL: 'all',
  ANY: 'any'
};

const allAnyOptions = Object.keys(allAnyOptionsMap).map((key) => ({
  label: allAnyOptionsMap[key],
  value: key
}));

const Template = () => {
  const [conditionsData, setConditionsData] = useState<ConditionsDataType>({
    globalConnector: 'ALL',
    filterGroups: []
  });
  const updateFilters = (group: FilterGroupType, filterPillValue: FilterType, filterIndex: number) => {
    const newFilters = group.filters.map((loopFilter, loopFilterIndex) => {
      if (loopFilterIndex === filterIndex) return filterPillValue;
      return loopFilter;
    });
    return {
      ...group,
      filters: newFilters
    };
  };

  const replaceFilterPillData = (filterPillValue: FilterType, groupIndex: number, filterIndex: number) => {
    setConditionsData((prev) => ({
      ...prev,
      filterGroups: prev.filterGroups.map((loopGroup, loopGroupIndex) => {
        if (loopGroupIndex !== groupIndex) return loopGroup;
        return updateFilters(loopGroup, filterPillValue, filterIndex);
      })
    }));
  };

  const addCondition = (selectedProperty: CascaderDropdownItemType | null) => {
    if (!selectedProperty) return;
    setConditionsData((prev) => ({
      ...prev,
      filterGroups: [
        ...prev.filterGroups,
        {
          filters: [
            {
              comparator: 'AND' as ComparatorType,
              property: selectedProperty,
              value: initialFilterValueSelectorValue
            }
          ]
        }]
    }));
  };

  const insertCondition = (selectedProperty: CascaderDropdownItemType, groupIndex: number, filterIndex: number) => {
    setConditionsData((prev) => ({
      ...prev,
      filterGroups: [
        ...prev.filterGroups.slice(0, groupIndex),
        {
          filters: [
            ...prev.filterGroups[groupIndex].filters.slice(0, filterIndex + 1),
            {
              comparator: 'AND' as ComparatorType,
              property: selectedProperty,
              value: initialFilterValueSelectorValue
            },
            ...prev.filterGroups[groupIndex].filters.slice(filterIndex + 1)
          ]
        },
        ...prev.filterGroups.slice(groupIndex + 1)
      ]
    }));
  };
  const filterConditions = (group: FilterGroupType, filterIndex: number) => {
    return {
      ...group,
      filters: group.filters.filter((_, loopFilterIndex) => loopFilterIndex !== filterIndex)
    };
  };

  const deleteCondition = (groupIndex: number, filterIndex: number) => {
    setConditionsData((prev) => {
      const updatedGroup = filterConditions(prev.filterGroups[groupIndex], filterIndex);

      if (updatedGroup.filters.length === 0) {
        // Remove the group if it has no filters
        return {
          ...prev,
          filterGroups: prev.filterGroups.filter((_, loopGroupIndex) => loopGroupIndex !== groupIndex)
        };
      }

      return {
        ...prev,
        filterGroups: prev.filterGroups.map((group, loopGroupIndex) => {
          if (loopGroupIndex !== groupIndex) return group;
          return updatedGroup;
        })
      };
    });
  };

  const deleteGroup = (groupIndex: number) => {
    setConditionsData((prev) => ({
      ...prev,
      filterGroups: prev.filterGroups.filter((_, loopGroupIndex) => loopGroupIndex !== groupIndex)
    }));
  };

  const onGlobalConnectorChange = (value: string) => {
    setConditionsData((prev) => ({
      ...prev,
      globalConnector: value as GlobalConnectorType
    }));
  };

  const onComparatorChange = (value: string, groupIndex: number, filterIndex: number) => {
    setConditionsData((prev) => ({
      ...prev,
      filterGroups: prev.filterGroups.map((group, loopGroupIndex) => {
        if (loopGroupIndex !== groupIndex) return group;
        return {
          ...group,
          filters: group.filters.map((filter, loopFilterIndex) => {
            if (loopFilterIndex !== filterIndex) return filter;
            return {
              ...filter,
              comparator: value as ComparatorType
            };
          })
        };
      })
    }));
  };

  return (
    <Flex css={{ flexWrap: 'wrap' }} gap="$2">
      <Dialog open>
        <DialogTrigger asChild>
          <Button size="lg">Edit profile</Button>
        </DialogTrigger>
        <DialogContent css={{ overflow: 'visible' }}>
          <TooltipProvider delayDuration={0}>
            <DialogHeader
              css={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center'
              }}
            >
              <DialogTitle size="lg">Exclude conditions</DialogTitle>
            </DialogHeader>
            <DialogBody css={{ padding: '$12' }}>
              <Flex css={{ margin: '0 0 $6 0' }}>
                <Text size="md" css={{ color: '$neutral900' }}>
                  Exclude recipients who meet
                  <Box as="span" css={{ display: 'inline-block', margin: '0 $2' }}>
                    <DropdownMenu size="sm">
                      <DropdownMenuTrigger asChild>
                        <Button
                          rightIcon={<ChevronDownIcon />}
                          size="sm"
                          variant="ghost"
                          color="default"
                          css={{
                            height: '$7', paddingRight: '0', fontWeight: '$7'
                          }}
                        >
                          {allAnyOptionsMap[conditionsData.globalConnector]}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" css={{ zIndex: '1000', minWidth: '100px' }}>
                        {allAnyOptions.map((option) => (
                          <DropdownMenuItem
                            onClick={() => onGlobalConnectorChange(option.value)}
                            key={option.value}
                            css={{
                              cursor: 'pointer',
                              ...(conditionsData.globalConnector === option.value && {
                                '&, &:hover': {
                                  backgroundColorOpacity: ['$primary200', 0.08]
                                }
                              })
                            }}
                          >
                            {option.label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </Box>
                  of these conditions:
                </Text>
              </Flex>
              <Flex flexDirection="column" gap="$1">
                {conditionsData.filterGroups.map((group, groupIndex) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Group key={groupIndex}>
                    <GroupTitle onDelete={() => deleteGroup(groupIndex)}>When</GroupTitle>
                    {group.filters.map((filter, filterIndex) => {
                      return (
                        <Flex key={filter.property.value} alignItems="center" gap="$1" css={{ [`&:hover .${prefixClassName('add-condition-in-group-button')}`]: { opacity: '1' } }}>
                          {filterIndex > 0 && (
                            <ComparatorDropdown filter={filter} onComparatorChange={(value) => onComparatorChange(value, groupIndex, filterIndex)} />
                          )}
                          {filter.property.operators?.length === 1
                            ? (
                              <FilterPillWithoutOperator
                                key={filter.property.operators[0].value}
                                data={filter.property.operators[0]}
                                filterPillData={conditionsData.filterGroups[groupIndex].filters[filterIndex]}
                                setFilterPillData={(filterPillValue: FilterType) => replaceFilterPillData(filterPillValue, groupIndex, filterIndex)}
                                icon={<SurveyIcon />}
                                onDelete={() => deleteCondition(groupIndex, filterIndex)}
                              />
                            )
                            : (
                              <FilterPill
                                cascaderDropdownData={filter.property.operators ?? []}
                                filterPillData={conditionsData.filterGroups[groupIndex].filters[filterIndex]}
                                setFilterPillData={(filterPillValue: FilterType) => replaceFilterPillData(filterPillValue, groupIndex, filterIndex)}
                                onDelete={() => deleteCondition(groupIndex, filterIndex)}
                              />
                            )}
                          <AddConditionInGroupButton insertCondition={(selectedProperty) => insertCondition(selectedProperty, groupIndex, filterIndex)} />
                        </Flex>
                      );
                    })}
                  </Group>
                ))}
                <Flex alignItems="center" gap="$4">
                  <Tooltip content="Add Filter" side="right">
                    <AddConditionButton
                      onAdd={({ selectedProperty }: { selectedProperty: CascaderDropdownItemType | null }) => {
                        addCondition(selectedProperty);
                      }}
                    >
                      <Button leftIcon={<PlusIcon />} color="secondary" variant="ghost" css={{ height: 'auto', padding: '0' }}>Condition</Button>
                    </AddConditionButton>
                  </Tooltip>
                  <Box css={{ width: '100%', borderBottom: '2px dashed $secondary100' }} />
                </Flex>
              </Flex>
            </DialogBody>
            <DialogFooter>
              <Flex justifyContent="flex-end" css={{ justifyContent: 'flex-end' }} gap="$4">
                <DialogClose asChild>
                  <Button size="lg" color="default">
                    Cancel
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button size="lg" color="primary">
                    Save
                  </Button>
                </DialogClose>
              </Flex>
            </DialogFooter>
            <Box css={{ position: 'absolute', top: '$8', right: '$8' }}>
              <DialogClose asChild>
                <IconButton
                  size="lg"
                  icon={<CloseIcon />}
                  variant="ghost"
                  aria-label="Close"
                  color="default"
                />
              </DialogClose>
            </Box>
          </TooltipProvider>
        </DialogContent>
      </Dialog>
    </Flex>
  );
};

export const Default = Template.bind({});

const Group = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex css={{ padding: '$4 0' }} flexDirection="column" gap="$2">
      {children}
    </Flex>
  );
};

const GroupTitle = ({ children, onDelete }: { children: React.ReactNode, onDelete: () => void }) => {
  return (
    <Flex alignItems="center" justifyContent="space-between" css={{ padding: '$1 0' }} gap="$2">
      <Text weight="bold" css={{ color: '$secondary900' }}>
        {children}
      </Text>
      <Box css={{
        height: '1px', width: '100%', backgroundColor: '$black100', flex: '1'
      }}
      />
      <IconButton css={{ height: '$5', width: '$5' }} variant="ghost" color="default" icon={<DeleteIcon />} onClick={onDelete} />
    </Flex>
  );
};

const AddConditionButton = ({ children, onAdd, dropdownContentProps }: {
  children: React.ReactNode,
  onAdd: ({ selectedProperty }: { selectedProperty: CascaderDropdownItemType | null }) => void,
  dropdownContentProps?: PopoverContentProps & RefAttributes<HTMLDivElement>
}) => {
  const onChange = ({
    selectedProperty
  } : {
    value: CascaderDropdownDataValueType | CascaderDropdownOperatorType,
    selectionPath: CascaderDropdownDataValueType[],
    selectedProperty: CascaderDropdownItemType | null,
    selectorValue?: CascaderDropdownValueSelectorType
  }) => {
    onAdd({ selectedProperty });
  };

  return (
    <CascaderDropdown data={properties} dropdownContentProps={{ align: 'start', ...dropdownContentProps }} onChange={onChange}>
      {children}
    </CascaderDropdown>
  );
};

const ComparatorDropdown = ({ filter, onComparatorChange }: { filter: FilterType, onComparatorChange: (value: string) => void }) => {
  return (
    <DropdownMenu size="sm">
      <DropdownMenuTrigger asChild>
        <Button
          rightIcon={<ChevronDownIcon />}
          size="sm"
          variant="ghost"
          color="default"
          css={{
            height: '$7',
            fontWeight: '$4',
            color: '$neutral800',
            paddingRight: '$1',
            paddingLeft: '$2'
          }}
        >
          {connectorOptionsMap[filter.comparator]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" css={{ zIndex: '1000', minWidth: '100px' }}>
        {connectorOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onComparatorChange(option.value)}
            css={{
              cursor: 'pointer',
              ...(filter.comparator === option.value && {
                '&, &:hover': {
                  backgroundColorOpacity: ['$primary200', 0.08]
                }
              })
            }}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const AddConditionInGroupButton = ({
  insertCondition
}: {
  insertCondition: (selectedProperty: CascaderDropdownItemType) => void
}) => {
  const handleAddCondition = ({ selectedProperty }: { selectedProperty: CascaderDropdownItemType | null }) => {
    if (!selectedProperty) return;
    insertCondition(selectedProperty);
  };

  return (
    <AddConditionButton onAdd={handleAddCondition}>
      <IconButton
        className={prefixClassName('add-condition-in-group-button')}
        size="md"
        css={{
          height: '$6',
          width: '$6',
          borderRadius: '$sm',
          border: '1px dashed $black300',
          opacity: '0',
          transition: 'opacity 0.2s ease-in-out',
          marginLeft: '$3'
        }}
        icon={<PlusIcon />}
        color="default"
        variant="ghost"
      />
    </AddConditionButton>
  );
};
