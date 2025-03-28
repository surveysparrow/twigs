import {
  CascaderDropdownOperatorType, CascaderDropdownItemType, dataTypes, optionTypes
} from '../../cascader-dropdown/helpers/cascader-dropdown-constants';

export const itemOperators = [
  {
    label: 'equals',
    value: 'equals',
    dataType: dataTypes.SINGLE_LINE_TEXT,
    type: optionTypes.VALUE_SELECTOR
  },
  {
    label: 'multi line text',
    value: 'multi-line-text',
    dataType: dataTypes.MULTI_LINE_TEXT,
    type: optionTypes.VALUE_SELECTOR
  },
  {
    label: 'number',
    value: 'number',
    dataType: dataTypes.NUMBER,
    type: optionTypes.VALUE_SELECTOR
  },
  {
    label: 'date',
    value: 'date',
    dataType: dataTypes.DATE,
    type: optionTypes.VALUE_SELECTOR
  },
  {
    label: 'date range',
    value: 'date-range',
    dataType: dataTypes.DATE_RANGE,
    type: optionTypes.VALUE_SELECTOR
  },
  {
    label: 'date and time',
    value: 'date-and-time',
    dataType: dataTypes.DATE_TIME_TIMEZONE,
    type: optionTypes.VALUE_SELECTOR
  },
  {
    label: 'multi select',
    value: 'multi-select',
    dataType: dataTypes.MULTI_SELECT,
    type: optionTypes.VALUE_SELECTOR,
    choices: [
      {
        label: 'Option 1',
        value: 'option-1'
      },
      {
        label: 'Option 2',
        value: 'option-2'
      }
    ]
  },
  {
    label: 'languages',
    value: 'languages',
    dataType: dataTypes.SINGLE_SELECT,
    type: optionTypes.VALUE_SELECTOR,
    choices: [
      {
        label: 'Option 1',
        value: 'option-1'
      },
      {
        label: 'Option 2',
        value: 'option-2'
      }
    ]
  },
  {
    label: 'email',
    value: 'email',
    dataType: dataTypes.SINGLE_LINE_TEXT,
    regex: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
    type: optionTypes.VALUE_SELECTOR
  },
  {
    label: 'url',
    value: 'url',
    dataType: dataTypes.SINGLE_LINE_TEXT,
    regex: '^https?://(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,4}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$',
    type: optionTypes.VALUE_SELECTOR
  }
] as CascaderDropdownOperatorType[];

export const itemWithOperators = [{
  label: 'Last Name',
  value: 'lastName',
  options: itemOperators
}] as CascaderDropdownItemType[];

export const itemWithOptionsAndOperators = [{
  label: 'Full Name',
  value: 'fullName',
  options: itemWithOperators
}] as CascaderDropdownItemType[];

export const itemWithoutOperators = {
  label: 'equals',
  value: 'equals',
  dataType: dataTypes.DATE_RANGE,
  type: optionTypes.VALUE_SELECTOR
} as CascaderDropdownOperatorType;
