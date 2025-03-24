import { Flex } from '@src/flex';
import React, { useState } from 'react';
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
  globalConnector: ComparatorType;
  filterGroups: FilterGroupType[];
}

const connectorOptionsMap = {
  AND: 'all',
  OR: 'any'
};

const connectorOptions = Object.keys(connectorOptionsMap).map((key) => ({
  label: connectorOptionsMap[key],
  value: key
}));

const Template = () => {
  const [conditionsData, setConditionsData] = useState<ConditionsDataType>({
    globalConnector: 'AND',
    filterGroups: []
  });

  return (
    <Flex css={{ flexWrap: 'wrap' }} gap="$2">
      <Dialog>
        <DialogTrigger asChild>
          <Button size="lg">Edit profile</Button>
        </DialogTrigger>
        <DialogContent css={{ overflow: 'visible' }}>
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
          <DialogBody>
            <Flex css={{ margin: '$12 0 $6 0' }}>
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
                        {connectorOptionsMap[conditionsData.globalConnector]}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" css={{ zIndex: '1000', minWidth: '100px' }}>
                      {connectorOptions.map((option) => (
                        <DropdownMenuItem
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
                  <GroupTitle>When</GroupTitle>
                  {group.filters.map((filter, filterIndex) => {
                    // console.log("🚀 ~ {group.filters.map ~ filter:", filter)
                    if (filter.property.operators?.length === 1) {
                      return (
                        <FilterPillWithoutOperator
                          key={filter.property.operators[0].value}
                          data={filter.property.operators[0]}
                          filterPillData={conditionsData.filterGroups[groupIndex].filters[filterIndex]}
                          setFilterPillData={(filterPillValue: FilterType) => setConditionsData({
                            ...conditionsData,
                            filterGroups: conditionsData.filterGroups.map((loopGroup, loopGroupIndex) => {
                              if (loopGroupIndex === groupIndex) {
                                return ({
                                  ...loopGroup,
                                  filters: loopGroup.filters.map((loopFilter, loopFilterIndex) => {
                                    if (loopFilterIndex === filterIndex) return filterPillValue;
                                    return loopFilter;
                                  })
                                });
                              }
                              return loopGroup;
                            })
                          })}
                          icon={<SurveyIcon />}
                        />
                      );
                    }
                    return (
                      <FilterPill
                        key={filter.property.value}
                        cascaderDropdownData={filter.property.operators ?? []}
                        filterPillData={conditionsData.filterGroups[groupIndex].filters[filterIndex]}
                        setFilterPillData={(filterPillValue: FilterType) => setConditionsData({
                          ...conditionsData,
                          filterGroups: conditionsData.filterGroups.map((loopGroup, loopGroupIndex) => {
                            if (loopGroupIndex === groupIndex) {
                              return ({
                                ...loopGroup,
                                filters: loopGroup.filters.map((loopFilter, loopFilterIndex) => {
                                  if (loopFilterIndex === filterIndex) return filterPillValue;
                                  return loopFilter;
                                })
                              });
                            }
                            return loopGroup;
                          })
                        })}
                      />
                    );
                  })}
                </Group>
              ))}
              <Flex alignItems="center" gap="$4">
                <AddConditionGroup
                  onAdd={({ selectedProperty }: { selectedProperty: CascaderDropdownItemType | null }) => {
                    if (selectedProperty) {
                      setConditionsData({
                        ...conditionsData,
                        filterGroups: [
                          ...conditionsData.filterGroups,
                          {
                            filters: [
                              {
                                comparator: 'AND' as ComparatorType,
                                // connector: ,
                                property: selectedProperty,
                                value: initialFilterValueSelectorValue
                              }
                            ]
                          }]
                      });
                    }
                  }}
                />
                <Box css={{ width: '100%', borderBottom: '2px dashed $secondary100' }} />
              </Flex>
            </Flex>
          </DialogBody>
          <DialogFooter>
            <Flex justifyContent="flex-end" css={{ justifyContent: 'flex-end' }}>
              <DialogClose asChild>
                <Button size="lg" color="primary">
                  Save changes
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
        </DialogContent>
      </Dialog>
    </Flex>
  );
};

export const Default = Template.bind({});

const Group = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box css={{ padding: '$4 0' }}>
      {children}
    </Box>
  );
};

const GroupTitle = ({ children, hasAddButton = true }: { children: React.ReactNode, hasAddButton?: boolean }) => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Text weight="bold" css={{ color: '$secondary900' }}>
        {children}
      </Text>
      <Flex gap="$2" alignItems="center">
        {hasAddButton && (
          <IconButton css={{ height: '$5', width: '$5' }} variant="ghost" color="default" icon={<PlusIcon />} />
        )}
        <IconButton css={{ height: '$5', width: '$5' }} variant="ghost" color="default" icon={<DeleteIcon />} />
      </Flex>
    </Flex>
  );
};

const AddConditionGroup = ({ onAdd }: { onAdd: ({ selectedProperty }: { selectedProperty: CascaderDropdownItemType | null }) => void }) => {
  const onChange = ({
    // value,
    // selectionPath,
    selectedProperty
    // selectorValue
  } : {
    value: CascaderDropdownDataValueType | CascaderDropdownOperatorType,
    selectionPath: CascaderDropdownDataValueType[],
    selectedProperty: CascaderDropdownItemType | null,
    selectorValue?: CascaderDropdownValueSelectorType
  }) => {
    onAdd({ selectedProperty });
  };

  return (
    <CascaderDropdown data={properties} dropdownContentProps={{ align: 'start' }} onChange={onChange}>
      <Button leftIcon={<PlusIcon />} color="default" variant="ghost" css={{ height: 'auto', padding: '0' }}>Condition</Button>
    </CascaderDropdown>
  );
};
