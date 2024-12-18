import React, { useRef, useState } from 'react';
import { Flex } from '@src/flex';
import { Text } from '@src/text';
import { Cascader } from '../cascader';
import { data } from '../tests/data';
import { recursiveFind } from '../cascader-utils';

export default {
  component: Cascader,
  title: 'Form/Cascader'
};

const Template = (args) => <Cascader {...args} data={data} />;

const CustomValue = (args) => {
  const [value, setValue] = useState({
    value: 'ambalappuzha',
    label: 'Ambalappuzha'
  });
  return (
    <Cascader
      {...args}
      data={data}
      value={value}
      onChange={(val) => setValue(val)}
      renderBreadCrumb={() => null}
      renderValueText={(val, selectionPath) => (
        <Flex>
          {selectionPath.map((item, index) => (
            <Text
              css={{
                color:
                  val?.value === item.value ? '$neutral900' : '$neutral500',
                paddingLeft: index === 0 ? 0 : '$2'
              }}
            >
              {item.label}
              {index < selectionPath.length - 1 && ' > '}
            </Text>
          ))}
        </Flex>
      )}
    />
  );
};

const DynamicData = (args) => {
  const [value, setValue] = useState({
    value: 'india',
    label: 'India'
  });

  const dataSet = JSON.parse(JSON.stringify(data));
  dataSet[0].options[1].options[1].options = [];
  dataSet[0].options[1].options[1].shouldFetchOptions = true;

  const [options, setOptions] = useState([
    ...dataSet,
    {
      label: 'Sri Lanka',
      value: 'sri-lanka',
      shouldFetchOptions: true
    }
  ]);

  return (
    <Cascader
      {...args}
      data={options}
      fetchOptions={(val) => {
        return new Promise((resolve) => {
          if (val.value === 'sri-lanka') {
            setTimeout(() => {
              const obj = recursiveFind(options, val);
              if (obj) {
                obj.options = [
                  {
                    label: 'Colombo',
                    value: 'colombo'
                  },
                  {
                    label: 'Kandy',
                    value: 'kandy'
                  }
                ];
              }
              setOptions([...options]);
              resolve(true);
            }, 2000);
          } else if (val.value === 'kerala') {
            setTimeout(() => {
              const obj = recursiveFind(options, val);
              if (obj) {
                obj.options = data[0].options[1].options[1].options;
                setOptions([...options]);
                resolve(true);
              }
            }, 2000);
          }
        });
      }}
      value={value}
      onChange={(val) => setValue(val)}
    />
  );
};

const DisabledOptions = (args) => {
  const [value, setValue] = useState({
    value: 'usa',
    label: 'USA'
  });

  const dataSet = JSON.parse(JSON.stringify(data));
  dataSet[0].options[1].options[1].disabled = true;
  dataSet[0].options[1].options.push({
    label: 'Tamil Nadu',
    value: 'tamil-nadu'
  });

  return (
    <Cascader
      {...args}
      data={dataSet}
      value={value}
      onChange={(val) => setValue(val)}
    />
  );
};

const DynamicSearch = (args) => {
  const [value, setValue] = useState({
    value: 'india',
    label: 'India'
  });

  const searchResultsAdded = useRef(false);

  const dataSet = JSON.parse(JSON.stringify(data));
  dataSet[0].options[1].options[1].options = [];
  dataSet[0].options[1].options[1].shouldFetchOptions = true;

  const [options, setOptions] = useState([
    ...dataSet,
    {
      label: 'Sri Lanka',
      value: 'sri-lanka',
      shouldFetchOptions: true
    }
  ]);

  const newOptions = [
    {
      label: 'Colombo',
      value: 'colombo',
      parentValue: 'sri-lanka'
    },
    {
      label: 'Kandy',
      value: 'kandy',
      parentValue: 'sri-lanka'
    }
  ];

  return (
    <Cascader
      {...args}
      data={options}
      fetchOptions={(val) => {
        return new Promise((resolve) => {
          if (val.value === 'sri-lanka') {
            setTimeout(() => {
              const obj = recursiveFind(options, val);
              if (obj) {
                obj.options = newOptions;
              }
              setOptions([...options]);
              resolve(true);
            }, 2000);
          }
        });
      }}
      fetchSearchOptions={(search) => {
        return new Promise((resolve) => {
          if (searchResultsAdded.current) {
            resolve(true);
            return;
          }
          setTimeout(() => {
            const found = newOptions.filter((option) => option.label.toLowerCase().includes(search.toLowerCase()));
            if (found.length) {
              found.forEach((option) => {
                const obj = recursiveFind(options, {
                  value: option.parentValue
                });
                obj!.options = [...(obj?.options || []), option];
              });
              setOptions([...options]);
              resolve(true);
              searchResultsAdded.current = true;
            }
          }, 2000);
        });
      }}
      value={value}
      onChange={(val) => setValue(val)}
    />
  );
};

export const Default = Template.bind({});

export const WithCustomValueRenderer = CustomValue.bind({});

export const WithDynamicData = DynamicData.bind({});

export const WithDynamicSearch = DynamicSearch.bind({});

export const WithDisabledOptions = DisabledOptions.bind({});
