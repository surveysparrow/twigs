import React from 'react';
import { render } from '@testing-library/react';
import {
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverClose,
  PopoverContent
} from '../index';
import 'jest';
import '@testing-library/jest-dom';

describe('Popover', () => {
  it('renders without crashing', () => {
    render(
      <Popover>
        <PopoverTrigger asChild>Trigger the popover</PopoverTrigger>
        <PopoverContent>
          Popover Content
          <PopoverClose> Close</PopoverClose>
          <PopoverArrow />
        </PopoverContent>
      </Popover>
    );
  });
});
