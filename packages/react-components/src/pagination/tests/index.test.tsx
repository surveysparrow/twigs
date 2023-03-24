import React from 'react';
import { render, renderHook, screen } from '@testing-library/react';
import { Pagination } from '../index';
import 'jest';
import '@testing-library/jest-dom';
import { usePagination } from '../use-pagination';

describe('Pagination', () => {
  it('renders without crashing', () => {
    render(<Pagination
      activePage={4}
      itemsPerPage={10}
      total={100}
    />);
  });

  it('hook is working perfectly', () => {
    const { result } = renderHook(() => usePagination({
      totalItems: 10, itemsPerPage: 2, activePage: 1
    }));
    expect(result.current).toEqual([1, 2, 3, 4, 5]);
  });

  it('next and previous buttons are visible', async () => {
    render(<Pagination
      activePage={4}
      itemsPerPage={10}
      total={100}
    />);
    expect(await screen.getByLabelText('Previous')).toBeVisible();
    expect(await screen.getByLabelText('Next')).toBeVisible();
  });

  it('previous button is disabled', async () => {
    render(<Pagination
      activePage={1}
      itemsPerPage={10}
      total={100}
    />);
    expect(await screen.getByLabelText('Previous')).toBeDisabled();
  });
  it('previous button should not be disabled', async () => {
    render(<Pagination
      activePage={4}
      itemsPerPage={10}
      total={100}
    />);
    expect(await screen.getByLabelText('Previous')).toBeEnabled();
  });

  it('next button should be disabled', async () => {
    render(<Pagination
      activePage={10}
      itemsPerPage={10}
      total={100}
    />);
    expect(await screen.getByLabelText('Next')).toBeDisabled();
  });

  it('has correct number of page links', async () => {
    const { result } = renderHook(() => usePagination({
      totalItems: 10, itemsPerPage: 2, activePage: 1
    }));
    render(<Pagination
      activePage={1}
      itemsPerPage={2}
      total={10}
    />);
    const links = await screen.findAllByRole('link');
    expect(links).toHaveLength(result.current.length);
  });
});
