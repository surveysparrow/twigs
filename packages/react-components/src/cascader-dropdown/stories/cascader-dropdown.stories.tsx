import { Flex } from '@src/flex';
import { Button } from '@src/button';
import { useState } from 'react';
import { CascaderDropdown } from '../index';
import { properties } from '../tests/data';
import { CascaderDropdownValueType } from '../helpers/cascader-dropdown-constants';

export default {
  component: CascaderDropdown,
  title: 'Form/CascaderDropdown'
};

const Template = (args) => {
  const [value, setValue] = useState<CascaderDropdownValueType | null>(null);

  return (
    <Flex css={{ flexWrap: 'wrap' }} gap="$2">
      <CascaderDropdown {...args} data={properties} value={value} onChange={setValue}>
        <Button>{value?.label ?? 'Click me'}</Button>
      </CascaderDropdown>
    </Flex>
  );
};

export const Default = Template.bind({});
