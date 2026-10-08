import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Button } from '../../button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuItemIndicator,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSubContent
} from '../dropdown';

const TickIcon = () => {
  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1.25L3.5 6.75L1 4.25"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ChevronIcon = () => {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.66675 1.33334L5.00008 4.66668L8.33342 1.33334"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

describe('Dropdown', () => {
  it('renders without crashing', () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            css={{ marginTop: '$8' }}
            size="lg"
            color="primary"
            rightIcon={<ChevronIcon />}
            aria-label="Customise options"
          >
            More Options
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent showArrow={false} align="end" sideOffset={5}>
          <DropdownMenuItem>New Tab</DropdownMenuItem>
          <DropdownMenuItem>New Window</DropdownMenuItem>
          <DropdownMenuItem disabled>New Private Window</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>More Tools</DropdownMenuSubTrigger>
            <DropdownMenuSubContent sideOffset={2} alignOffset={-5}>
              <DropdownMenuItem>Save Page As…</DropdownMenuItem>
              <DropdownMenuItem>Create Shortcut…</DropdownMenuItem>
              <DropdownMenuItem>Name Window…</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Developer Tools</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked onCheckedChange={() => {}}>
            <DropdownMenuItemIndicator>
              <TickIcon />
            </DropdownMenuItemIndicator>
            Show Bookmarks
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked onCheckedChange={() => {}}>
            <DropdownMenuItemIndicator>
              <TickIcon />
            </DropdownMenuItemIndicator>
            Show Full URLs
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>People</DropdownMenuLabel>
          <DropdownMenuRadioGroup value="Maneesh" onValueChange={() => {}}>
            <DropdownMenuRadioItem value="pedro">
              <DropdownMenuItemIndicator>
                <TickIcon />
              </DropdownMenuItemIndicator>
              Pedro Duarte
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="colm">
              <DropdownMenuItemIndicator>
                <TickIcon />
              </DropdownMenuItemIndicator>
              Colm Tuite
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  });
});

describe('DropdownMenuItemIndicator', () => {
  const renderMenu = () => render(
    <DropdownMenu open>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem checked onCheckedChange={() => {}}>
          <DropdownMenuItemIndicator data-testid="checked-indicator">
            <TickIcon />
          </DropdownMenuItemIndicator>
          Checked
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={false} onCheckedChange={() => {}}>
          <DropdownMenuItemIndicator data-testid="unchecked-indicator">
            <TickIcon />
          </DropdownMenuItemIndicator>
          Unchecked
        </DropdownMenuCheckboxItem>
        <DropdownMenuRadioGroup value="pedro">
          <DropdownMenuRadioItem value="pedro">
            <DropdownMenuItemIndicator data-testid="selected-radio-indicator">
              <TickIcon />
            </DropdownMenuItemIndicator>
            Pedro
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="colm">
            <DropdownMenuItemIndicator data-testid="unselected-radio-indicator">
              <TickIcon />
            </DropdownMenuItemIndicator>
            Colm
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  it('keeps the indicator mounted for unchecked items so the text does not shift', () => {
    const { getByTestId } = renderMenu();
    expect(getByTestId('checked-indicator')).toHaveAttribute('data-state', 'checked');
    expect(getByTestId('unchecked-indicator')).toHaveAttribute('data-state', 'unchecked');
    expect(getByTestId('selected-radio-indicator')).toHaveAttribute('data-state', 'checked');
    expect(getByTestId('unselected-radio-indicator')).toHaveAttribute('data-state', 'unchecked');
  });

  it('renders the indicator before the item text', () => {
    const { getByTestId } = renderMenu();
    const indicator = getByTestId('checked-indicator');
    expect(indicator.parentElement?.firstElementChild).toBe(indicator);
    expect(indicator.parentElement).toHaveTextContent('Checked');
  });
});

describe('Dropdown inset', () => {
  it('accepts the inset prop on items, sub triggers and labels', () => {
    const { getByText } = render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel inset>Label</DropdownMenuLabel>
          <DropdownMenuItem inset>Item</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger inset>Sub</DropdownMenuSubTrigger>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(getByText('Label').className).toMatch(/inset-true/);
    expect(getByText('Item').className).toMatch(/inset-true/);
    expect(getByText('Sub').className).toMatch(/inset-true/);
  });
});
