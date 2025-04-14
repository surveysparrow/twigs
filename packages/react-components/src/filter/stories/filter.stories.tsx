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
import { data } from '@src/cascader-dropdown/tests/data';
import { CascaderDropdown, OnChangeReturnType } from '@src/cascader-dropdown';
import {
  CascaderDropdownOperatorType, CascaderDropdownItemType, CascaderDropdownValueSelectorType, initialFilterValueSelectorValue
} from '@src/cascader-dropdown/helpers/cascader-dropdown-constants';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from '@src/dropdown';
import { PopoverContentProps } from '@radix-ui/react-popover';
import { prefixClassName } from '@src/utils/prefix-class-name';
import { Tooltip, TooltipProps, TooltipProvider } from '@src/tooltip';
import { FilterPill, FilterPillWithoutOperator } from '../index';

export default {
  component: FilterPill,
  title: 'Form/FilterPill'
};

const FilterPillTemplate = () => {
  const filterPillData: FilterType = {
    comparator: 'AND' as ComparatorType,
    property: {
      label: 'Date',
      value: 'date',
      operators: [
        {
          label: 'is',
          value: 'is',
          dataType: 'DATE',
          type: 'VALUE_SELECTOR'
        },
        {
          label: 'is not',
          value: 'is-not',
          dataType: 'DATE',
          type: 'VALUE_SELECTOR'
        },
        {
          label: 'is before',
          value: 'is-before',
          dataType: 'DATE',
          type: 'VALUE_SELECTOR'
        },
        {
          label: 'is after',
          value: 'is-after',
          dataType: 'DATE',
          type: 'VALUE_SELECTOR'
        },
        {
          label: 'is on or before',
          value: 'is-on-or-before',
          dataType: 'DATE',
          type: 'VALUE_SELECTOR'
        },
        {
          label: 'is on or after',
          value: 'is-on-or-after',
          dataType: 'DATE',
          type: 'VALUE_SELECTOR'
        },
        {
          label: 'is between',
          value: 'is-between',
          dataType: 'DATE_RANGE',
          type: 'VALUE_SELECTOR'
        }
      ],
      selectionPath: [{
        label: 'Contact Property',
        value: 'contactProperty'
      }]
    },
    value: {
      NUMBER: null,
      DATE: '2025-04-14',
      DATE_RANGE: null,
      DATE_TIME_TIMEZONE: null,
      SINGLE_LINE_TEXT: null,
      MULTI_LINE_TEXT: null,
      SINGLE_SELECT: null,
      MULTI_SELECT: null
    },
    connector: {
      dataType: 'DATE',
      label: 'is',
      value: 'is',
      type: 'VALUE_SELECTOR'
    }
  };
  return (
    <FilterPill
      cascaderDropdownData={filterPillData.property.operators ?? []}
      filterPillData={filterPillData}
      setFilterPillData={() => {}}
      onDelete={() => {}}
      variant="outline"
      showError={false}
    />
  );
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

const ContactPropertyIcon = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* eslint-disable-next-line max-len */}
      <path d="M12.4379 13.5662C11.9487 12.074 10.6519 10.6642 9.32857 10.6644H6.69988C5.87888 10.6643 5.08868 11.0437 4.49002 11.7256C4.14406 12.1194 3.87379 12.6009 3.69843 13.1357L3.55654 13.5662M4.66293 13.9976H11.3318C12.804 13.9976 13.9974 12.8042 13.9974 11.332V4.66311C13.9974 3.19097 12.804 1.99756 11.3318 1.99756H4.66293C3.19079 1.99756 1.99738 3.19097 1.99738 4.66311V11.332C1.99738 12.8041 3.19078 13.9976 4.66293 13.9976ZM7.99738 8.61347C7.15264 8.61347 6.46784 7.92867 6.46784 7.08393V6.82017C6.46784 5.97543 7.15264 5.29063 7.99738 5.29063C8.84212 5.29063 9.52691 5.97543 9.52691 6.82017V7.08393C9.52691 7.92867 8.84212 8.61347 7.99738 8.61347Z" stroke="#575757" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const VariablesIcon = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* eslint-disable-next-line max-len */}
      <path d="M8 3V1.5M8 12.3633V13.8633M5.39767 11.0591C5.58659 11.3837 5.85679 11.6536 6.18171 11.8422C6.50663 12.0308 6.87508 12.1317 7.25084 12.1349H8.89487C9.40877 12.1345 9.90479 11.9464 10.2896 11.606C10.6744 11.2657 10.9214 10.7965 10.9842 10.2869C11.047 9.77721 10.9212 9.2622 10.6305 8.83876C10.3398 8.41533 9.90419 8.11266 9.40573 7.98774L6.59427 7.282C6.09581 7.15707 5.66024 6.85441 5.36952 6.43097C5.07881 6.00754 4.953 5.49253 5.01579 4.98287C5.07857 4.47322 5.32561 4.00407 5.71041 3.66372C6.09521 3.32336 6.59123 3.13528 7.10513 3.13487H8.74916C9.1242 3.13747 9.49211 3.23754 9.81672 3.42525C10.1413 3.61296 10.4115 3.88184 10.6006 4.20547" stroke="#575757" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
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

const PillIconMap = {
  contactProperties: ContactPropertyIcon,
  variables: VariablesIcon,
  surveys: SurveyIcon
};

const Template = () => {
  const [conditionsData, setConditionsData] = useState<ConditionsDataType>({
    globalConnector: 'ALL',
    filterGroups: []
  });

  const [showError, setShowError] = useState(new Set<string>());

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
    setShowError((prev) => {
      prev.delete(`${filterPillValue.property.value}-${groupIndex}-${filterIndex}`);
      return prev;
    });
    setConditionsData((prev) => ({
      ...prev,
      filterGroups: prev.filterGroups.map((loopGroup, loopGroupIndex) => {
        if (loopGroupIndex !== groupIndex) return loopGroup;
        return updateFilters(loopGroup, filterPillValue, filterIndex);
      })
    }));
  };

  const addCondition = (selectedProperty: CascaderDropdownItemType | null) => {
    setShowError(new Set<string>());
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
    setShowError(new Set<string>());
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
    setShowError(new Set<string>());
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
    setShowError(new Set<string>());
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

  const updateFilterInGroup = (group: FilterGroupType, filterIndex: number, newComparator: ComparatorType) => {
    return {
      ...group,
      filters: group.filters.map((filter, loopFilterIndex) => {
        if (loopFilterIndex !== filterIndex) return filter;
        return {
          ...filter,
          comparator: newComparator
        };
      })
    };
  };

  const onComparatorChange = (value: string, groupIndex: number, filterIndex: number) => {
    setConditionsData((prev) => ({
      ...prev,
      filterGroups: prev.filterGroups.map((group, loopGroupIndex) => {
        if (loopGroupIndex !== groupIndex) return group;
        return updateFilterInGroup(group, filterIndex, value as ComparatorType);
      })
    }));
  };

  const handleSave = () => {
    const errorSet = new Set<string>();

    conditionsData.filterGroups.forEach((group, groupIndex) => {
      group.filters.forEach((filter, filterIndex) => {
        if (!filter.connector || !filter.value[filter.connector.dataType]) {
          errorSet.add(`${filter.property.value}-${groupIndex}-${filterIndex}`);
        }
      });
    });

    setShowError(errorSet);
  };

  return (
    <Flex css={{ flexWrap: 'wrap' }} gap="$2">
      <Dialog open>
        <DialogTrigger asChild>
          <Button size="lg">Add Filter Conditions</Button>
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
                      const selectedRootProperty = filter.property.selectionPath?.[0]?.value;
                      const Icon = PillIconMap[selectedRootProperty];
                      const key = `${filter.property.operators?.[0]?.value}-${groupIndex}-${filterIndex}`;
                      return (
                        <Flex
                          key={filter.property.value}
                          alignItems="center"
                          gap="$1"
                          css={{
                            '&:hover, &:focus, &:active, &:focus-visible': {
                              [`.${prefixClassName('add-condition-in-group-button')}`]: {
                                opacity: '1'
                              }
                            }
                          }}
                        >
                          {filterIndex > 0 && (
                            <ComparatorDropdown filter={filter} onComparatorChange={(value) => onComparatorChange(value, groupIndex, filterIndex)} />
                          )}
                          {filter.property.operators?.length === 1
                            ? (
                              <FilterPillWithoutOperator
                                key={key}
                                data={filter.property.operators[0]}
                                filterPillData={conditionsData.filterGroups[groupIndex].filters[filterIndex]}
                                setFilterPillData={(filterPillValue: FilterType) => replaceFilterPillData(filterPillValue, groupIndex, filterIndex)}
                                icon={Icon && <Icon />}
                                onDelete={() => deleteCondition(groupIndex, filterIndex)}
                                variant="outline"
                                showError={showError.has(`${filter.property.value}-${groupIndex}-${filterIndex}`)}
                              />
                            )
                            : (
                              <FilterPill
                                key={key}
                                cascaderDropdownData={filter.property.operators ?? []}
                                filterPillData={conditionsData.filterGroups[groupIndex].filters[filterIndex]}
                                setFilterPillData={(filterPillValue: FilterType) => replaceFilterPillData(filterPillValue, groupIndex, filterIndex)}
                                onDelete={() => deleteCondition(groupIndex, filterIndex)}
                                variant="outline"
                                icon={Icon && <Icon />}
                                showError={showError.has(`${filter.property.value}-${groupIndex}-${filterIndex}`)}
                              />
                            )}
                          <AddConditionInGroupButton insertCondition={(selectedProperty) => insertCondition(selectedProperty, groupIndex, filterIndex)} />
                        </Flex>
                      );
                    })}
                  </Group>
                ))}
                <Flex alignItems="center" gap="$4">
                  <AddConditionButton
                    onAdd={(selectedProperty: CascaderDropdownItemType | null) => {
                      addCondition(selectedProperty);
                    }}
                  >
                    <Button leftIcon={<PlusIcon />} color="secondary" variant="ghost" css={{ height: 'auto', padding: '0' }}>Condition</Button>
                  </AddConditionButton>
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
                  <Button size="lg" color="primary" onClick={handleSave}>
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

export const Default = FilterPillTemplate.bind({});
export const Example = Template.bind({});

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
      <Tooltip content="Remove Group" css={{ zIndex: '99999' }}>
        <IconButton css={{ height: '$5', width: '$5' }} variant="ghost" color="default" icon={<DeleteIcon />} onClick={onDelete} />
      </Tooltip>
    </Flex>
  );
};

const AddConditionButton = ({
  children, onAdd, dropdownContentProps, tooltipProps
}: {
  children: React.ReactNode,
  onAdd: (selectedProperty: CascaderDropdownItemType | null) => void,
  dropdownContentProps?: PopoverContentProps & RefAttributes<HTMLDivElement>,
  tooltipProps?: TooltipProps
}) => {
  const onChange = ({
    selectedProperty,
    selectionPath
  } : OnChangeReturnType) => {
    if (!selectedProperty?.label || !selectedProperty?.value) return;
    onAdd({ ...selectedProperty, selectionPath });
  };

  return (
    <CascaderDropdown data={data} dropdownContentProps={{ align: 'start', ...dropdownContentProps }} onChange={onChange} tooltipProps={tooltipProps}>
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
  const handleAddCondition = (selectedProperty: CascaderDropdownItemType | null) => {
    if (!selectedProperty) return;
    insertCondition(selectedProperty);
  };

  return (
    <AddConditionButton onAdd={handleAddCondition} tooltipProps={{ content: 'Add condition', side: 'right', css: { zIndex: '99999' } }}>
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
          marginLeft: '$3',
          '&:hover, &:focus, &:active, &:focus-visible': {
            opacity: 1
          }
        }}
        icon={<PlusIcon />}
        color="default"
        variant="ghost"
      />
    </AddConditionButton>
  );
};
