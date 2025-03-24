import { Flex } from '@src/flex';
import { useState } from 'react';
import { FilterPill, FilterPillValueType, FilterPillWithoutOperator } from '../index';
import {
  // pillData,
  // singleLineTextInputData,
  // multiLineTextInputData,
  // dateRangeData,
  // dateData,
  // dateTimeTimezoneData,
  // numberData,
  // singleSelectData,
  // multiSelectData,
  itemWithOptionsAndOperators,
  itemWithoutOperators
} from '../tests/data';

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

const initialValue = {
  operator: null,
  label: 'Property Name',
  value: null
};

const Template = () => {
  const [value, setValue] = useState<FilterPillValueType>(initialValue);

  // const [singleLineTextInputValue, setSingleLineTextInputValue] = useState<FilterPillValueType>(initialValue);
  // const [multiLineTextInputValue, setMultiLineTextInputValue] = useState<FilterPillValueType>(initialValue);
  // const [dateRangeValue, setDateRangeValue] = useState<FilterPillValueType>(initialValue);
  // const [dateValue, setDateValue] = useState<FilterPillValueType>(initialValue);
  // const [dateTimeTimezoneValue, setDateTimeTimezoneValue] = useState<FilterPillValueType>(initialValue);
  // const [numberValue, setNumberValue] = useState<FilterPillValueType>(initialValue);
  // const [singleSelectValue, setSingleSelectValue] = useState<FilterPillValueType>(initialValue);
  // const [multiSelectValue, setMultiSelectValue] = useState<FilterPillValueType>(initialValue);

  return (
    <Flex css={{ flexWrap: 'wrap' }} gap="$2">
      <FilterPill
        cascaderDropdownData={itemWithOptionsAndOperators}
        value={value}
        icon={<SurveyIcon />}
        setValue={setValue}
      />
      <FilterPillWithoutOperator
        data={itemWithoutOperators}
        value={value}
        icon={<SurveyIcon />}
        setValue={setValue}
      />
      {/* <FilterPill

        operator="is"
        hasOperator={false}
        value={singleLineTextInputValue}
        icon={<SurveyIcon />}
        conditionData={singleLineTextInputData}
        setValue={setSingleLineTextInputValue}
      />
      <FilterPill

        operator="is"
        hasOperator={false}
        value={multiLineTextInputValue}
        icon={<SurveyIcon />}
        conditionData={multiLineTextInputData}
        setValue={setMultiLineTextInputValue}
      />
      <FilterPill

        operator="is"
        hasOperator={false}
        value={dateRangeValue}
        icon={<SurveyIcon />}
        conditionData={dateRangeData}
        setValue={setDateRangeValue}
      />
      <FilterPill

        operator="is"
        hasOperator={false}
        value={dateValue}
        icon={<SurveyIcon />}
        conditionData={dateData}
        setValue={setDateValue}
      />
      <FilterPill

        operator="is"
        hasOperator={false}
        value={dateTimeTimezoneValue}
        icon={<SurveyIcon />}
        conditionData={dateTimeTimezoneData}
        setValue={setDateTimeTimezoneValue}
      />
      <FilterPill

        operator="is"
        hasOperator={false}
        value={numberValue}
        icon={<SurveyIcon />}
        conditionData={numberData}
        setValue={setNumberValue}
      />
      <FilterPill

        operator="is"
        hasOperator={false}
        value={singleSelectValue}
        icon={<SurveyIcon />}
        conditionData={singleSelectData}
        setValue={setSingleSelectValue}
      />
      <FilterPill

        operator="is"
        hasOperator={false}
        value={multiSelectValue}
        icon={<SurveyIcon />}
        conditionData={multiSelectData}
        setValue={setMultiSelectValue}
      /> */}
      {/* <FilterPill  conditionData={pillData} value={value} setValue={setValue} hasOperator propertyName="Property Namesdfasdfasdfasdfasdfasdfasdf" icon={<SurveyIcon />} /> */}
      {/* <FilterPill  conditionData={pillDataWithoutOperator} operator="is" value="value" propertyName="Property Name" icon={<SurveyIcon />} />
      <FilterPill  conditionData={pillDataWithoutOperator} operator="is" value="value" propertyName="Property Name" icon={<SurveyIcon />} variant="filled" />
      <FilterPill  conditionData={pillDataWithoutOperator} operator="is" value="value" propertyName="Property Name" variant="filled" /> */}
    </Flex>
  );
};

export const Default = Template.bind({});
