import {
  dataTypes,
  optionTypes,
  CascaderDropdownItemType,
  CascaderDropdownFolderType,
  CascaderDropdownPropertyType,
  CascaderDropdownOperatorType,
  CascaderDropdownItemWithoutOperatorType
} from '../helpers/cascader-dropdown-constants';

export const selectedFilters = [];

export const properties = [
  {
    label: 'Contact Properties',
    value: 'contactProperties',
    type: optionTypes.FOLDER,
    options: [
      {
        label: 'Full Name',
        value: 'fullName',
        type: optionTypes.ITEM,
        subLabel: '5',
        operators: [
          {
            label: 'equals',
            value: 'equals',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'does not equal',
            value: 'does-not-equal',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'contains',
            value: 'contains',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'does not contain',
            value: 'does-not-contain',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'starts with',
            value: 'starts-with',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'ends with',
            value: 'ends-with',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'regex',
            value: 'regex',
            dataType: dataTypes.SINGLE_LINE_TEXT
          }
        ] as CascaderDropdownOperatorType[]
      } as CascaderDropdownItemType,
      {
        label: 'First Name',
        value: 'firstName',
        type: optionTypes.ITEM,
        operators: [
          {
            label: 'equals',
            value: 'equals',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'does not equal',
            value: 'does-not-equal',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'contains',
            value: 'contains',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'does not contain',
            value: 'does-not-contain',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'starts with',
            value: 'starts-with',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'ends with',
            value: 'ends-with',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'regex',
            value: 'regex',
            dataType: dataTypes.SINGLE_LINE_TEXT
          }
        ] as CascaderDropdownOperatorType[]
      } as CascaderDropdownItemType,
      {
        label: 'Last Name',
        value: 'lastName',
        type: optionTypes.ITEM,
        operators: [
          {
            label: 'equals',
            value: 'equals',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'does not equal',
            value: 'does-not-equal',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'contains',
            value: 'contains',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'does not contain',
            value: 'does-not-contain',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'starts with',
            value: 'starts-with',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'ends with',
            value: 'ends-with',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'regex',
            value: 'regex',
            dataType: dataTypes.SINGLE_LINE_TEXT
          }
        ] as CascaderDropdownOperatorType[]
      } as CascaderDropdownItemType,
      {
        label: 'Email',
        value: 'email',
        type: optionTypes.ITEM,
        operators: [
          {
            label: 'equals',
            value: 'equals',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            regex: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
          },
          {
            label: 'does not equal',
            value: 'does-not-equal',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            regex: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
          },
          {
            label: 'contains',
            value: 'contains',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'does not contain',
            value: 'does-not-contain',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'starts with',
            value: 'starts-with',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'ends with',
            value: 'ends-with',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'regex',
            value: 'regex',
            dataType: dataTypes.SINGLE_LINE_TEXT
          }
        ] as CascaderDropdownOperatorType[]
      } as CascaderDropdownItemType,
      {
        label: 'Phone',
        value: 'phone',
        type: optionTypes.ITEM,
        subLabel: '7',
        operators: [
          {
            label: 'equals',
            value: 'equals',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            regex: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
          },
          {
            label: 'does not equal',
            value: 'does-not-equal',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            regex: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
          },
          {
            label: 'contains',
            value: 'contains',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'does not contain',
            value: 'does-not-contain',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'starts with',
            value: 'starts-with',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'ends with',
            value: 'ends-with',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'regex',
            value: 'regex',
            dataType: dataTypes.SINGLE_LINE_TEXT
          }
        ] as CascaderDropdownOperatorType[]
      } as CascaderDropdownItemType,
      {
        label: 'Mobile',
        value: 'mobile',
        type: optionTypes.ITEM,
        operators: [
          {
            label: 'equals',
            value: 'equals',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            regex: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
          },
          {
            label: 'does not equal',
            value: 'does-not-equal',
            dataType: dataTypes.SINGLE_LINE_TEXT,
            regex: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
          },
          {
            label: 'contains',
            value: 'contains',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'does not contain',
            value: 'does-not-contain',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'starts with',
            value: 'starts-with',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'ends with',
            value: 'ends-with',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'regex',
            value: 'regex',
            dataType: dataTypes.SINGLE_LINE_TEXT
          }
        ] as CascaderDropdownOperatorType[]
      } as CascaderDropdownItemType,
      {
        label: 'Language',
        value: 'language',
        type: optionTypes.ITEM,
        operators: [
          {
            label: 'includes',
            value: 'includes',
            dataType: dataTypes.MULTI_SELECT,
            valuesKey: 'language'
          },
          {
            label: 'does not include',
            value: 'does-not-include',
            dataType: dataTypes.MULTI_SELECT,
            valuesKey: 'language'
          }
        ],
        values: {
          language: [
            {
              label: 'English',
              id: 'en',
              value: 'en'
            },
            {
              label: 'French',
              id: 'fr',
              value: 'fr'
            },
            {
              label: 'Spanish',
              id: 'es',
              value: 'es'
            }
          ]
        }
      },
      {
        label: 'Date',
        value: 'date',
        type: optionTypes.ITEM,
        operators: [
          {
            label: 'is',
            value: 'is',
            dataType: dataTypes.DATE
          },
          {
            label: 'is not',
            value: 'is-not',
            dataType: dataTypes.DATE
          },
          {
            label: 'is before',
            value: 'is-before',
            dataType: dataTypes.DATE
          },
          {
            label: 'is after',
            value: 'is-after',
            dataType: dataTypes.DATE
          },
          {
            label: 'is on or before',
            value: 'is-on-or-before',
            dataType: dataTypes.DATE
          },
          {
            label: 'is on or after',
            value: 'is-on-or-after',
            dataType: dataTypes.DATE
          },
          {
            label: 'is between',
            value: 'is-between',
            dataType: dataTypes.DATE_RANGE
          }
        ]
      },
      {
        label: 'Created At',
        value: 'createdAt',
        type: optionTypes.ITEM,
        operators: [
          {
            label: 'is',
            value: 'is',
            dataType: dataTypes.DATE
          },
          {
            label: 'is not',
            value: 'is-not',
            dataType: dataTypes.DATE
          },
          {
            label: 'is before',
            value: 'is-before',
            dataType: dataTypes.DATE
          },
          {
            label: 'is after',
            value: 'is-after',
            dataType: dataTypes.DATE
          },
          {
            label: 'is on or before',
            value: 'is-on-or-before',
            dataType: dataTypes.DATE
          },
          {
            label: 'is on or after',
            value: 'is-on-or-after',
            dataType: dataTypes.DATE
          },
          {
            label: 'is between',
            value: 'is-between',
            dataType: dataTypes.DATE_RANGE
          }
        ]
      }
    ]
  } as CascaderDropdownFolderType,
  {
    label: 'Custom events',
    value: 'customEvents',
    type: optionTypes.FOLDER,
    options: []
  } as CascaderDropdownFolderType,
  {
    label: 'Visitors Properties',
    value: 'visitorsProperties',
    type: optionTypes.FOLDER,
    options: [
      {
        label: 'Auto captured',
        value: 'autoCaptured',
        type: optionTypes.FOLDER,
        options: [
          {
            label: 'Location',
            value: 'location',
            type: optionTypes.ITEM,
            subLabel: '5',
            operators: [
              {
                label: 'is',
                value: 'is',
                dataType: dataTypes.MULTI_SELECT,
                valuesKey: 'location'
              },
              {
                label: 'is not',
                value: 'is-not',
                dataType: dataTypes.MULTI_SELECT,
                valuesKey: 'location'
              }
            ],
            values: {
              location: [
                {
                  label: 'New York',
                  id: 'new-york',
                  value: 'new-york'
                },
                {
                  label: 'Los Angeles',
                  id: 'los-angeles',
                  value: 'los-angeles'
                }
              ]
            }
          },
          {
            label: 'IP address',
            value: 'ipAddress',
            type: optionTypes.ITEM,
            subLabel: 'IPv4',
            operators: [
              {
                label: 'equals',
                value: 'equals',
                dataType: dataTypes.SINGLE_LINE_TEXT
              },
              {
                label: 'does not equal',
                value: 'does-not-equal',
                dataType: dataTypes.SINGLE_LINE_TEXT
              },
              {
                label: 'contains',
                value: 'contains',
                dataType: dataTypes.SINGLE_LINE_TEXT
              },
              {
                label: 'does not contain',
                value: 'does-not-contain',
                dataType: dataTypes.SINGLE_LINE_TEXT
              },
              {
                label: 'starts with',
                value: 'starts-with',
                dataType: dataTypes.SINGLE_LINE_TEXT
              },
              {
                label: 'ends with',
                value: 'ends-with',
                dataType: dataTypes.SINGLE_LINE_TEXT
              },
              {
                label: 'in cidr range',
                value: 'in-cidr-range',
                dataType: dataTypes.SINGLE_LINE_TEXT
              },
              {
                label: 'not in cidr range',
                value: 'not-in-cidr-range',
                dataType: dataTypes.SINGLE_LINE_TEXT
              },
              {
                label: 'regex',
                value: 'regex',
                dataType: dataTypes.SINGLE_LINE_TEXT
              }
            ]
          },
          {
            label: 'Operating System',
            value: 'operatingSystem',
            type: optionTypes.ITEM,
            operators: [
              {
                label: 'includes',
                value: 'includes',
                dataType: dataTypes.MULTI_SELECT,
                valuesKey: 'operatingSystem'
              },
              {
                label: 'does not include',
                value: 'does-not-include',
                dataType: dataTypes.MULTI_SELECT,
                valuesKey: 'operatingSystem'
              }
            ],
            values: {
              operatingSystem: [
                {
                  label: 'Windows',
                  id: 'windows',
                  value: 'windows'
                },
                {
                  label: 'Mac OS',
                  id: 'mac-os',
                  value: 'mac-os'
                },
                {
                  label: 'Linux',
                  id: 'linux',
                  value: 'linux'
                }
              ]
            }
          },
          {
            label: 'Screen resolution',
            value: 'screenResolution',
            type: optionTypes.ITEM_WITH_OPTIONS,
            options: [
              {
                label: 'Width',
                value: 'width',
                type: optionTypes.ITEM,
                subLabel: 'px',
                operators: [
                  {
                    label: 'equals',
                    value: 'equals',
                    dataType: dataTypes.NUMBER
                  },
                  {
                    label: 'does not equal',
                    value: 'does-not-equal',
                    dataType: dataTypes.NUMBER
                  },
                  {
                    label: 'is greater than',
                    value: 'is-greater-than',
                    dataType: dataTypes.NUMBER
                  },
                  {
                    label: 'is less than',
                    value: 'is-less-than',
                    dataType: dataTypes.NUMBER
                  },
                  {
                    label: 'is greater than or equal to',
                    value: 'is-greater-than-or-equal-to',
                    dataType: dataTypes.NUMBER
                  },
                  {
                    label: 'is less than or equal to',
                    value: 'is-less-than-or-equal-to',
                    dataType: dataTypes.NUMBER
                  }
                ]
              },
              {
                label: 'Height',
                value: 'height',
                type: optionTypes.ITEM,
                subLabel: 'px',
                operators: [
                  {
                    label: 'equals',
                    value: 'equals',
                    dataType: dataTypes.NUMBER
                  },
                  {
                    label: 'does not equal',
                    value: 'does-not-equal',
                    dataType: dataTypes.NUMBER
                  },
                  {
                    label: 'is greater than',
                    value: 'is-greater-than',
                    dataType: dataTypes.NUMBER
                  },
                  {
                    label: 'is less than',
                    value: 'is-less-than',
                    dataType: dataTypes.NUMBER
                  },
                  {
                    label: 'is greater than or equal to',
                    value: 'is-greater-than-or-equal-to',
                    dataType: dataTypes.NUMBER
                  },
                  {
                    label: 'is less than or equal to',
                    value: 'is-less-than-or-equal-to',
                    dataType: dataTypes.NUMBER
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: 'Custom Properties',
        value: 'customProperties',
        type: optionTypes.FOLDER,
        options: []
      }
    ]
  } as CascaderDropdownFolderType,
  {
    label: 'Variables',
    value: 'variables',
    type: optionTypes.FOLDER,
    options: [
      {
        label: '$var1',
        value: '$var1',
        type: optionTypes.ITEM,
        operators: [
          {
            label: 'equals',
            value: 'equals',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'does not equal',
            value: 'does-not-equal',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'contains',
            value: 'contains',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'does not contain',
            value: 'does-not-contain',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'starts with',
            value: 'starts-with',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'ends with',
            value: 'ends-with',
            dataType: dataTypes.SINGLE_LINE_TEXT
          },
          {
            label: 'regex',
            value: 'regex',
            dataType: dataTypes.SINGLE_LINE_TEXT
          }
        ]
      }
    ]
  } as CascaderDropdownFolderType,
  {
    label: 'Smartlists',
    value: 'smartlists',
    type: optionTypes.ITEM,
    operators: [
      {
        label: 'belongs to',
        value: 'belongs',
        dataType: dataTypes.MULTI_SELECT,
        valuesKey: 'smartlists'
      } as CascaderDropdownOperatorType
    ],
    values: {
      smartlists: [
        {
          label: 'All Contacts',
          value: 10000121
        },
        {
          label: 'Gmail mails',
          value: 10000123
        }
      ]
    }
  } as CascaderDropdownItemType,
  {
    label: 'Smartlist Without Operator',
    value: 'smartlistWithoutOperator',
    type: optionTypes.ITEM_WITHOUT_OPERATOR,
    operator: {
      valuesKey: 'smartlists',
      dataType: dataTypes.MULTI_SELECT
    },
    values: {
      smartlists: [
        {
          label: 'All Contacts',
          value: 10000121
        },
        {
          label: 'Gmail mails',
          value: 10000123
        }
      ]
    }
  } as CascaderDropdownItemWithoutOperatorType,
  {
    label: 'Date and time',
    value: 'dateAndTime',
    type: optionTypes.FOLDER,
    options: [
      {
        label: 'Date',
        value: 'date',
        type: optionTypes.ITEM,
        operators: [
          {
            label: 'is',
            value: 'is',
            dataType: dataTypes.DATE
          },
          {
            label: 'is not',
            value: 'is-not',
            dataType: dataTypes.DATE
          },
          {
            label: 'is before',
            value: 'is-before',
            dataType: dataTypes.DATE
          },
          {
            label: 'is after',
            value: 'is-after',
            dataType: dataTypes.DATE
          },
          {
            label: 'is on or before',
            value: 'is-on-or-before',
            dataType: dataTypes.DATE
          },
          {
            label: 'is on or after',
            value: 'is-on-or-after',
            dataType: dataTypes.DATE
          },
          {
            label: 'is between',
            value: 'is-between',
            dataType: dataTypes.DATE_RANGE
          }
        ] as CascaderDropdownOperatorType[]
      } as CascaderDropdownItemType
    ]
  } as CascaderDropdownFolderType,
  {
    label: 'Surveys',
    value: 'surveys',
    type: optionTypes.FOLDER,
    options: [
      {
        label: 'Survey 1',
        value: 'survey1',
        type: optionTypes.ITEM_WITHOUT_OPERATOR,
        operator: {
          valuesKey: 'respondedState',
          dataType: dataTypes.SINGLE_SELECT
        },
        values: {
          respondedState: [
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
          ]
        }
      }
    ]
  } as CascaderDropdownFolderType
] as CascaderDropdownPropertyType[];
