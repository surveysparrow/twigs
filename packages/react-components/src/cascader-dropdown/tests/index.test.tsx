import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import 'jest';
import React from 'react';
import { CascaderDropdown } from '../index';
import { data } from './data';
import { buildTree } from '../helpers/cascader-dropdown-utils';

describe('Cascader', () => {
  it('should render correctly', () => {
    render(<CascaderDropdown data={data} />);
  });

  it('creates tree correctly', () => {
    const tree = buildTree(data);
    expect(
      tree.getChildren()[1].prevNode
        ?.value
    ).toBe('contactProperties');
    expect(tree.findNode('firstName')?.getParent()?.value).toBe(
      'contactProperties'
    );
  });
});
