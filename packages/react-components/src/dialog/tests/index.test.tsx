import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import {
  Dialog,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogTrigger,
  DialogContent
} from '../dialog';
import { Button, IconButton } from '../../button';
import { Box } from '../../box';

const CloseIcon = () => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L9 9"
        stroke="#6C6C6C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 1L1 9"
        stroke="#6C6C6C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

describe('Dialog', () => {
  it('renders without crashing', () => {
    render(
      <Dialog size="full">
        <DialogTrigger asChild>
          <Button size="lg">Terms</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Agree Terms</DialogTitle>
          <DialogDescription>
            Please read all the terms and conditions given in this modal.
          </DialogDescription>
          <Box css={{ position: 'absolute', top: '10px', right: '10px' }}>
            <DialogClose asChild>
              <IconButton
                icon={<CloseIcon />}
                aria-label="Close"
                color="default"
              />
            </DialogClose>
          </Box>
        </DialogContent>
      </Dialog>
    );
  });
});
