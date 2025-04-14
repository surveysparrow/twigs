import { Flex } from '@src/flex';
import { Button } from '@src/button';
import { useState } from 'react';
import { CascaderDropdown } from '../index';
import { data } from '../tests/data';
import { CascaderDropdownDataValueType } from '../helpers/cascader-dropdown-constants';

export default {
  component: CascaderDropdown,
  title: 'Form/CascaderDropdown'
};

const Template = (args) => {
  const [value, setValue] = useState<CascaderDropdownDataValueType | null>(null);

  return (
    <Flex css={{ flexWrap: 'wrap' }} gap="$2">
      <CascaderDropdown {...args} data={data} value={value} onChange={setValue}>
        <Button>{value?.label ?? 'Select property'}</Button>
      </CascaderDropdown>
    </Flex>
  );
};

export const Default = Template.bind({});
