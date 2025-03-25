export const optionTypes = {
  VALUE_SELECTOR: 'VALUE_SELECTOR',
  ITEM: 'ITEM'
};

export const dataTypes = {
  SINGLE_LINE_TEXT: 'SINGLE_LINE_TEXT',
  MULTI_LINE_TEXT: 'MULTI_LINE_TEXT',
  NUMBER: 'NUMBER',
  DATE: 'DATE',
  DATE_RANGE: 'DATE_RANGE',
  SINGLE_SELECT: 'SINGLE_SELECT',
  MULTI_SELECT: 'MULTI_SELECT',
  DATE_TIME_TIMEZONE: 'DATE_TIME_TIMEZONE'
};

export type CascaderDropdownItemType = {
  label: string;
  value: string;
  subLabel?: string;
  operators?: CascaderDropdownOperatorType[];
  options?: CascaderDropdownItemType[];
  disabled?: boolean;
  shouldFetchOptions?: boolean;
};

export type CascaderDropdownOperatorType = {
  label: string;
  value: string;
  dataType: keyof typeof dataTypes;
  regex?: string;
  disabled?: boolean;
  shouldFetchOptions?: boolean;
  type: 'VALUE_SELECTOR';
  choices?: CascaderDropdownDataValueType[];
};

export type CascaderDropdownDataValueType = {
  label: string;
  value: string;
};

export type CascaderDropdownValueSelectorType = {
  'NUMBER': number | null;
  'DATE': string | null;
  'DATE_RANGE': {
    start: string | null;
    end: string | null;
  } | null;
  'DATE_TIME_TIMEZONE': string | null;
  'SINGLE_LINE_TEXT': string | null;
  'MULTI_LINE_TEXT': string | null;
  'SINGLE_SELECT': string | null;
  'MULTI_SELECT': string[] | null;
}

export const initialFilterValueSelectorValue: CascaderDropdownValueSelectorType = {
  NUMBER: null,
  DATE: null,
  DATE_RANGE: null,
  DATE_TIME_TIMEZONE: null,
  SINGLE_LINE_TEXT: null,
  MULTI_LINE_TEXT: null,
  SINGLE_SELECT: null,
  MULTI_SELECT: null
};
