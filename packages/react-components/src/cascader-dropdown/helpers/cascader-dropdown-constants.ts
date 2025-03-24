export const optionTypes = {
  VALUE_SELECTOR: 'VALUE_SELECTOR'
};

export const dataTypes = {
  SINGLE_LINE_TEXT: 'SINGLE_LINE_TEXT',
  MULTI_LINE_TEXT: 'MULTI_LINE_TEXT',
  NUMBER: 'NUMBER',
  DATE: 'DATE',
  DATE_RANGE: 'DATE_RANGE',
  SINGLE_SELECT: 'SINGLE_SELECT',
  MULTI_SELECT: 'MULTI_SELECT',
  EMAIL: 'EMAIL',
  URL: 'URL',
  DATE_TIME_TIMEZONE: 'DATE_TIME_TIMEZONE'
};

// type CascaderDropdownValueType = {
//   label: string | number;
//   value: string | number;
// }

// type CascaderDropdownFolderType = {
//   label: string | number;
//   value: string | number;
//   type: 'FOLDER';
//   subLabel?: string;
//   options: CascaderDropdownPropertyType[];
//   disabled?: boolean;
//   shouldFetchOptions?: boolean;
// };

// type CascaderDropdownItemWithoutOperatorType = {
//   label: string | number;
//   value: string | number;
//   type: 'ITEM_WITHOUT_OPERATOR';
//   subLabel?: string;
//   operator: {
//     dataType: keyof typeof dataTypes;
//     regex?: string;
//     // valuesKey?: string;
//   };
//   // values?: Record<string, CascaderDropdownDataValueType[]>;
//   disabled?: boolean;
//   shouldFetchOptions?: boolean;
// };

// type CascaderDropdownItemWithOptionsType = {
//   label: string | number;
//   value: string | number;
//   type: 'ITEM_WITH_OPTIONS';
//   subLabel?: string;
//   options: CascaderDropdownPropertyType[];
//   disabled?: boolean;
//   shouldFetchOptions?: boolean;
// };

export type CascaderDropdownItemType = {
  label: string | number;
  value: string | number;
  subLabel?: string;
  operators?: CascaderDropdownOperatorType[];
  options?: CascaderDropdownItemType[];
  disabled?: boolean;
  shouldFetchOptions?: boolean;
};

export type CascaderDropdownOperatorType = {
  label: string | number;
  value: string | number;
  dataType: keyof typeof dataTypes;
  regex?: string;
  disabled?: boolean;
  shouldFetchOptions?: boolean;
  type: 'VALUE_SELECTOR';
  choices?: CascaderDropdownDataValueType[];
  options?: [];
};

export type CascaderDropdownDataValueType = {
  label: string | number;
  value: string | number;
};

// export type CascaderDropdownPropertyType =
//   CascaderDropdownFolderType
//   | CascaderDropdownItemType
//   | CascaderDropdownItemWithoutOperatorType
//   | CascaderDropdownItemWithOptionsType
//   | CascaderDropdownOperatorType;
// export type CascaderDropdownPropertyType =
//   | CascaderDropdownItemType
//   | CascaderDropdownItemWithoutOperatorType
//   | CascaderDropdownItemWithOptionsType
//   | CascaderDropdownOperatorType;
