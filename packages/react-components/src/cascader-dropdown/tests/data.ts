import {
  dataTypes,
  CascaderDropdownItemType,
  CascaderDropdownOperatorType,
  optionTypes,
  CascaderDropdownDataValueType
} from '../helpers/cascader-dropdown-constants';

export const data = [
  {
    label: 'Contact Properties',
    value: 'contactProperties',
    options: [
      {
        label: 'Full Name',
        value: 'fullName',
        subLabel: '5',
        operators: [
          {
            label: 'equals',
            value: 'equals',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'does not equal',
            value: 'does-not-equal',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'contains',
            value: 'contains',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'does not contain',
            value: 'does-not-contain',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'starts with',
            value: 'starts-with',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'ends with',
            value: 'ends-with',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'regex',
            value: 'regex',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          }
        ] as CascaderDropdownOperatorType[]
      } as CascaderDropdownItemType,
      {
        label: 'First Name',
        value: 'firstName',
        operators: [
          {
            label: 'equals',
            value: 'equals',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'does not equal',
            value: 'does-not-equal',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'contains',
            value: 'contains',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'does not contain',
            value: 'does-not-contain',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'starts with',
            value: 'starts-with',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'ends with',
            value: 'ends-with',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'regex',
            value: 'regex',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          }
        ] as CascaderDropdownOperatorType[]
      } as CascaderDropdownItemType,
      {
        label: 'Last Name',
        value: 'lastName',
        operators: [
          {
            label: 'equals',
            value: 'equals',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'does not equal',
            value: 'does-not-equal',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'contains',
            value: 'contains',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'does not contain',
            value: 'does-not-contain',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'starts with',
            value: 'starts-with',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'ends with',
            value: 'ends-with',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'regex',
            value: 'regex',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          }
        ] as CascaderDropdownOperatorType[]
      } as CascaderDropdownItemType,
      {
        label: 'Email',
        value: 'email',
        operators: [
          {
            label: 'equals',
            value: 'equals',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR,
            regex: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
          },
          {
            label: 'does not equal',
            value: 'does-not-equal',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR,
            regex: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
          },
          {
            label: 'contains',
            value: 'contains',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'does not contain',
            value: 'does-not-contain',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'starts with',
            value: 'starts-with',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'ends with',
            value: 'ends-with',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'regex',
            value: 'regex',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          }
        ] as CascaderDropdownOperatorType[]
      } as CascaderDropdownItemType,
      {
        label: 'Phone',
        value: 'phone',
        subLabel: '7',
        operators: [
          {
            label: 'equals',
            value: 'equals',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR,
            regex: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
          },
          {
            label: 'does not equal',
            value: 'does-not-equal',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR,
            regex: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
          },
          {
            label: 'contains',
            value: 'contains',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'does not contain',
            value: 'does-not-contain',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'starts with',
            value: 'starts-with',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'ends with',
            value: 'ends-with',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'regex',
            value: 'regex',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          }
        ] as CascaderDropdownOperatorType[]
      } as CascaderDropdownItemType,
      {
        label: 'Mobile',
        value: 'mobile',
        operators: [
          {
            label: 'equals',
            value: 'equals',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR,
            regex: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
          },
          {
            label: 'does not equal',
            value: 'does-not-equal',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR,
            regex: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
          },
          {
            label: 'contains',
            value: 'contains',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'does not contain',
            value: 'does-not-contain',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'starts with',
            value: 'starts-with',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'ends with',
            value: 'ends-with',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'regex',
            value: 'regex',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          }
        ] as CascaderDropdownOperatorType[]
      } as CascaderDropdownItemType,
      {
        label: 'Language',
        value: 'language',
        operators: [
          {
            label: 'includes',
            value: 'includes',
            dataType: dataTypes.MULTI_SELECT,
            type: optionTypes.VALUE_SELECTOR,
            valuesKey: 'language',
            choices: [
              {
                label: 'English',
                value: 'en'
              },
              {
                label: 'French',
                value: 'fr'
              },
              {
                label: 'Spanish',
                value: 'es'
              },
              {
                label: 'German',
                value: 'de'
              },
              {
                label: 'Italian',
                value: 'it'
              },
              {
                label: 'Dutch',
                value: 'nl'
              },
              {
                label: 'Portuguese',
                value: 'pt'
              },
              {
                label: 'Russian',
                value: 'ru'
              },
              {
                label: 'Turkish',
                value: 'tr'
              },
              {
                label: 'Arabic',
                value: 'ar'
              },
              {
                label: 'Chinese',
                value: 'zh'
              },
              {
                label: 'Japanese',
                value: 'ja'
              },
              {
                label: 'Korean',
                value: 'ko'
              },
              {
                label: 'Polish',
                value: 'pl'
              },
              {
                label: 'Romanian',
                value: 'ro'
              },
              {
                label: 'Slovak',
                value: 'sk'
              },
              {
                label: 'Slovenian',
                value: 'sl'
              },
              {
                label: 'Swedish',
                value: 'sv'
              },
              {
                label: 'Ukrainian',
                value: 'uk'
              },
              {
                label: 'Vietnamese',
                value: 'vi'
              },
              {
                label: 'Other',
                value: 'other'
              }
            ] as CascaderDropdownDataValueType[]
          } as CascaderDropdownOperatorType,
          {
            label: 'does not include',
            value: 'does-not-include',
            dataType: dataTypes.MULTI_SELECT,
            type: optionTypes.VALUE_SELECTOR,
            valuesKey: 'language',
            choices: [
              {
                label: 'English',
                value: 'en'
              },
              {
                label: 'French',
                value: 'fr'
              },
              {
                label: 'Spanish',
                value: 'es'
              },
              {
                label: 'German',
                value: 'de'
              },
              {
                label: 'Italian',
                value: 'it'
              },
              {
                label: 'Dutch',
                value: 'nl'
              },
              {
                label: 'Portuguese',
                value: 'pt'
              },
              {
                label: 'Russian',
                value: 'ru'
              },
              {
                label: 'Turkish',
                value: 'tr'
              },
              {
                label: 'Arabic',
                value: 'ar'
              },
              {
                label: 'Chinese',
                value: 'zh'
              },
              {
                label: 'Japanese',
                value: 'ja'
              },
              {
                label: 'Korean',
                value: 'ko'
              },
              {
                label: 'Polish',
                value: 'pl'
              },
              {
                label: 'Romanian',
                value: 'ro'
              },
              {
                label: 'Slovak',
                value: 'sk'
              },
              {
                label: 'Slovenian',
                value: 'sl'
              },
              {
                label: 'Swedish',
                value: 'sv'
              },
              {
                label: 'Ukrainian',
                value: 'uk'
              },
              {
                label: 'Vietnamese',
                value: 'vi'
              },
              {
                label: 'Other',
                value: 'other'
              }
            ] as CascaderDropdownDataValueType[]
          } as CascaderDropdownOperatorType
        ]
      },
      {
        label: 'Date',
        value: 'date',
        operators: [
          {
            label: 'is',
            value: 'is',
            dataType: dataTypes.DATE,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'is not',
            value: 'is-not',
            dataType: dataTypes.DATE,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'is before',
            value: 'is-before',
            dataType: dataTypes.DATE,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'is after',
            value: 'is-after',
            dataType: dataTypes.DATE,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'is on or before',
            value: 'is-on-or-before',
            dataType: dataTypes.DATE,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'is on or after',
            value: 'is-on-or-after',
            dataType: dataTypes.DATE,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'is between',
            value: 'is-between',
            dataType: dataTypes.DATE_RANGE,
            type: optionTypes.VALUE_SELECTOR
          }
        ] as CascaderDropdownOperatorType[]
      } as CascaderDropdownItemType,
      {
        label: 'Created At',
        value: 'createdAt',
        operators: [
          {
            label: 'is',
            value: 'is',
            dataType: dataTypes.DATE,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'is not',
            value: 'is-not',
            dataType: dataTypes.DATE,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'is before',
            value: 'is-before',
            dataType: dataTypes.DATE,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'is after',
            value: 'is-after',
            dataType: dataTypes.DATE,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'is on or before',
            value: 'is-on-or-before',
            dataType: dataTypes.DATE,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'is on or after',
            value: 'is-on-or-after',
            dataType: dataTypes.DATE,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'is between',
            value: 'is-between',
            dataType: dataTypes.DATE_RANGE,
            type: optionTypes.VALUE_SELECTOR
          } as CascaderDropdownOperatorType
        ] as CascaderDropdownOperatorType[]
      } as CascaderDropdownItemType
    ] as CascaderDropdownItemType[]
  } as CascaderDropdownItemType,
  {
    label: 'Variables',
    value: 'variables',
    options: [
      {
        label: '$var1',
        value: '$var1',
        operators: [
          {
            label: 'equals',
            value: 'equals',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'does not equal',
            value: 'does-not-equal',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'contains',
            value: 'contains',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'does not contain',
            value: 'does-not-contain',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'starts with',
            value: 'starts-with',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'ends with',
            value: 'ends-with',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          },
          {
            label: 'regex',
            value: 'regex',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            type: optionTypes.VALUE_SELECTOR
          } as CascaderDropdownOperatorType
        ] as CascaderDropdownOperatorType[]
      } as CascaderDropdownItemType
    ] as CascaderDropdownItemType[]
  } as CascaderDropdownItemType,
  {
    label: 'Survey 1',
    value: 'survey1',
    operators: [
      {
        label: 'Responded',
        value: 'responded',
        dataType: dataTypes.SINGLE_SELECT,
        type: optionTypes.VALUE_SELECTOR,
        choices: [
          {
            label: 'Responded',
            value: 'responded'
          },
          {
            label: 'Partially Responded',
            value: 'partially-responded'
          },
          {
            label: 'Not Responded',
            value: 'not-responded'
          }
        ] as CascaderDropdownDataValueType[]
      } as CascaderDropdownOperatorType
    ] as CascaderDropdownOperatorType[]
  } as CascaderDropdownItemType
] as CascaderDropdownItemType[];
