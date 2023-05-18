import React from 'react';
import 'jest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogActions,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger
} from '../alert-dialog';
import { Button } from '../../button';

describe('AlertDialog', () => {
  it('renders without crashing', () => {
    render(
      <AlertDialog defaultOpen>
        <AlertDialogTrigger asChild>
          <Button>Delete account</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your
              data from our servers.
            </AlertDialogDescription>
            <AlertDialogActions>
              <AlertDialogCancel asChild>
                <Button color="default" size="lg">
                  Cancel
                </Button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button color="error" size="lg">Yes, delete account</Button>
              </AlertDialogAction>
            </AlertDialogActions>
          </>
        </AlertDialogContent>
      </AlertDialog>
    );
  });
});
