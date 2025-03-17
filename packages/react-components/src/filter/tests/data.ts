import {
  dataTypes, FilterValueItemType, FilterValueOperatorType
} from '../filter-value-dropdown/helpers/filter-value-dropdown-constants';

export const pillData = {
  label: 'Full Name',
  value: 'fullName',
  operators: [
    {
      label: 'single line text',
      value: 'single-line-text',
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
// export const pillData = {
//   label: 'Full Name',
//   value: 'fullName',
//   type: optionTypes.ITEM,
//   subLabel: '5',
//   operators: [
//     {
//       label: 'equals',
//       value: 'equals',
//       dataType: dataTypes.SINGLE_LINE_TEXT
//     },
//     {
//       label: 'does not equal',
//       value: 'does-not-equal',
//       dataType: dataTypes.SINGLE_LINE_TEXT
//     },
//     {
//       label: 'contains',
//       value: 'contains',
//       dataType: dataTypes.SINGLE_LINE_TEXT
//     },
//     {
//       label: 'does not contain',
//       value: 'does-not-contain',
//       dataType: dataTypes.SINGLE_LINE_TEXT
//     },
//     {
//       label: 'starts with',
//       value: 'starts-with',
//       dataType: dataTypes.SINGLE_LINE_TEXT
//     },
//     {
//       label: 'ends with',
//       value: 'ends-with',
//       dataType: dataTypes.SINGLE_LINE_TEXT
//     },
//     {
//       label: 'regex',
//       value: 'regex',
//       dataType: dataTypes.SINGLE_LINE_TEXT
//     }
//   ] as CascaderDropdownOperatorType[]
// } as CascaderDropdownItemType;
