import { CascaderDropdownItemType, CascaderDropdownOperatorType, optionTypes } from '@src/cascader-dropdown/helpers/cascader-dropdown-constants';
import {
  dataTypes, FilterValueItemType, FilterValueOperatorType
} from '../filter-value-dropdown/helpers/filter-value-dropdown-constants';

export const pillData = {
  label: 'Full Name',
  value: 'fullName',
  options: [
    {
      label: 'is',
      value: 'is',
      dataType: dataTypes.SINGLE_LINE_TEXT
    },
    {
      label: 'date range',
      value: 'date-range',
      dataType: dataTypes.DATE_RANGE
    },
    {
      label: 'date and time',
      value: 'date-and-time',
      dataType: dataTypes.DATE_TIME_TIMEZONE
    },
    {
      label: 'date',
      value: 'date',
      dataType: dataTypes.DATE
    },
    {
      label: 'multi line text',
      value: 'multi-line-text',
      dataType: dataTypes.MULTI_LINE_TEXT
    },
    {
      label: 'languages',
      value: 'languages',
      dataType: dataTypes.MULTI_SELECT,
      valuesKey: 'languages'
    },
    {
      label: 'number',
      value: 'number',
      dataType: dataTypes.NUMBER
    },
    {
      label: 'location',
      value: 'location',
      dataType: dataTypes.SINGLE_SELECT,
      valuesKey: 'location'
    }
  ] as FilterValueOperatorType[],
  values: {
    languages: [
      {
        label: 'English',
        value: 'english'
      },
      {
        label: 'French',
        value: 'french'
      }
    ],
    location: [
      {
        label: 'New York',
        value: 'new-york'
      },
      {
        label: 'Los Angeles',
        value: 'los-angeles'
      }
    ]
  }
} as FilterValueItemType;

export const singleLineTextInputData = {
  label: 'Full Name',
  value: 'fullName',
  options: [
    { dataType: dataTypes.SINGLE_LINE_TEXT }
  ] as FilterValueOperatorType[]
} as CascaderDropdownItemType;

export const multiLineTextInputData = {
  label: 'Full Name',
  value: 'fullName',
  options: [
    { dataType: dataTypes.MULTI_LINE_TEXT }
  ] as FilterValueOperatorType[]
} as CascaderDropdownItemType;

export const dateRangeData = {
  label: 'Full Name',
  value: 'fullName',
  options: [
    { dataType: dataTypes.DATE_RANGE }
  ] as FilterValueOperatorType[]
} as CascaderDropdownItemType;

export const dateData = {
  label: 'Full Name',
  value: 'fullName',
  options: [
    { dataType: dataTypes.DATE }
  ] as FilterValueOperatorType[]
} as CascaderDropdownItemType;

export const dateTimeTimezoneData = {
  label: 'Full Name',
  value: 'fullName',
  options: [
    { dataType: dataTypes.DATE_TIME_TIMEZONE }
  ] as FilterValueOperatorType[]
} as CascaderDropdownItemType;

export const numberData = {
  label: 'Full Name',
  value: 'fullName',
  options: [
    { dataType: dataTypes.NUMBER }
  ] as FilterValueOperatorType[]
} as CascaderDropdownItemType;

export const singleSelectData = {
  label: 'Location',
  value: 'location',
  options: [
    {
      dataType: dataTypes.SINGLE_SELECT,
      choices: [
        {
          label: 'New York',
          value: 'new-york'
        },
        {
          label: 'Los Angeles',
          value: 'los-angeles'
        }
      ]
    }
  ] as FilterValueOperatorType[]
} as CascaderDropdownItemType;

export const multiSelectData = {
  label: 'Languages',
  value: 'languages',
  options: [
    {
      dataType: dataTypes.MULTI_SELECT,
      choices: [
        {
          label: 'English',
          value: 'english'
        },
        {
          label: 'French',
          value: 'french'
        }
      ]
    }
  ] as FilterValueOperatorType[]
} as CascaderDropdownItemType;

const itemOperators = [
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
    dataType: dataTypes.EMAIL,
    type: optionTypes.VALUE_SELECTOR
  },
  {
    label: 'url',
    value: 'url',
    dataType: dataTypes.URL,
    type: optionTypes.VALUE_SELECTOR
  }
] as CascaderDropdownOperatorType[];

// export const pillData = [
//   {
//     label: 'equals',
//     value: 'equals',
//     dataType: dataTypes.SINGLE_LINE_TEXT,
//     options: [],
//     type: optionTypes.VALUE_SELECTOR

//   },
//   {
//     label: 'Date range',
//     value: 'date-range',
//     dataType: dataTypes.DATE_RANGE,
//     options: [],
//     type: optionTypes.VALUE_SELECTOR

//   },
//   {
//     label: 'Date and Time',
//     value: 'date-and-time',
//     dataType: dataTypes.DATE_TIME_TIMEZONE,
//     options: [],
//     type: optionTypes.VALUE_SELECTOR

//   },
//   {
//     label: 'does not equal',
//     value: 'does-not-equal',
//     dataType: dataTypes.DATE,
//     options: [],
//     type: optionTypes.VALUE_SELECTOR

//   },
//   {
//     label: 'contains',
//     value: 'contains',
//     dataType: dataTypes.DATE_RANGE,
//     options: [],
//     type: optionTypes.VALUE_SELECTOR

//   },
//   {
//     label: 'does not contain',
//     value: 'does-not-contain',
//     dataType: dataTypes.MULTI_LINE_TEXT,
//     options: [],
//     type: optionTypes.VALUE_SELECTOR

//   },
//   {
//     label: 'starts with',
//     value: 'starts-with',
//     dataType: dataTypes.MULTI_SELECT,
//     options: [],
//     type: optionTypes.VALUE_SELECTOR,
//     choices: [
//       {
//         label: 'Option 1',
//         value: 'option-1'
//       },
//       {
//         label: 'Option 2',
//         value: 'option-2'
//       }
//     ]

//   },
//   {
//     label: 'ends with',
//     value: 'ends-with',
//     dataType: dataTypes.NUMBER,
//     options: [],
//     type: optionTypes.VALUE_SELECTOR

//   },
//   {
//     label: 'regex',
//     value: 'regex',
//     dataType: dataTypes.SINGLE_SELECT,
//     options: [],
//     type: optionTypes.VALUE_SELECTOR,
//     choices: [
//       {
//         label: 'Option 1',
//         value: 'option-1'
//       },
//       {
//         label: 'Option 2',
//         value: 'option-2'
//       }
//     ]

//   }
// ] as CascaderDropdownOperatorType[];
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
