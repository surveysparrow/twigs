import {
  dataTypes,
  // optionTypes,
  CascaderDropdownItemType,
  // CascaderDropdownItemType,
  // CascaderDropdownPropertyType,
  CascaderDropdownOperatorType
  // CascaderDropdownItemWithoutOperatorType
} from '../helpers/cascader-dropdown-constants';

export const selectedFilters = [];

export const properties = [
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
  } as CascaderDropdownItemType,
  {
    label: 'Custom events',
    value: 'customEvents',
    options: []
  } as CascaderDropdownItemType,
  {
    label: 'Visitors Properties',
    value: 'visitorsProperties',
    options: [
      {
        label: 'Auto captured',
        value: 'autoCaptured',
        options: [
          {
            label: 'Location',
            value: 'location',
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
            options: [
              {
                label: 'Width',
                value: 'width',
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
        options: []
      }
    ]
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
  } as CascaderDropdownItemType,
  {
    label: 'Smartlists',
    value: 'smartlists',
    operators: [
      {
        label: 'belongs to',
        value: 'belongs',
        dataType: dataTypes.MULTI_SELECT,
        choices: [
          {
            label: 'All Contacts',
            value: 10000121
          },
          {
            label: 'Gmail mails',
            value: 10000123
          }
        ]
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
  } as CascaderDropdownItemType,
  {
    label: 'Date and time',
    value: 'dateAndTime',
    options: [
      {
        label: 'Date',
        value: 'date',
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
  } as CascaderDropdownItemType,
  {
    label: 'Surveys',
    value: 'surveys',
    options: [
      {
        label: 'Survey 1',
        value: 'survey1',
        operators: [
          {
            label: 'Responded',
            value: 'responded',
            dataType: dataTypes.SINGLE_SELECT,
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
            ]
          }
        ]
      }
    ]
  } as CascaderDropdownItemType
] as CascaderDropdownItemType[];
