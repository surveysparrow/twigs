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

export type FilterValueOperatorType = {
  label: string;
  value: string;
  dataType: keyof typeof dataTypes;
  valuesKey?: string;
};

export type FilterValueItemType = {
  label?: string;
  value?: string;
  operators: FilterValueOperatorType[];
  values?: {
    [key: string]: {
      label: string;
      value: string;
    }[];
  };
};
