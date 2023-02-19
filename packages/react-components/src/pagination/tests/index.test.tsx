import React from 'react';
import { render } from '@testing-library/react';
import { Pagination } from '../index';
import 'jest';
import '@testing-library/jest-dom';

describe('Pagination', () => {
  it('renders without crashing', () => {
    render(<Pagination
      activePage={4}
      itemsPerPage={10}
      total={100}
    />);
  });
});
