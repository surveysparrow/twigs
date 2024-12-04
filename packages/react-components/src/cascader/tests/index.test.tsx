import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import 'jest';
import React from 'react';
import { Cascader } from '../index';
import { data } from './data';
import { buildTree } from '../cascader-utils';

describe('Cascader', () => {
  it('should render correctly', () => {
    render(<Cascader data={data} />);
  });

  it('creates tree correctly', () => {
    const tree = buildTree(data);
    expect(
      tree.getChildren()[1].getFirstChild().nextNode?.getLastChild()?.prevNode
        ?.value
    ).toBe('texas');
    expect(tree.findNode('ambalappuzha-north')?.getParent()?.value).toBe(
      'ambalappuzha'
    );
  });

  it('should render with value', () => {
    const { queryByText, container } = render(
      <Cascader data={data} value={{ label: 'Texas', value: 'texas' }} />
    );
    expect(queryByText('Texas')).toBeInTheDocument();
    const breadcrumb = container.querySelector('.twigs-cascader__breadcrumb');
    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb?.textContent).toBe('USA>South');
  });

  it('opens and closes popover on various events', async () => {
    const { queryByText, queryByRole, queryByPlaceholderText } = render(
      <>
        <div>Outside</div>
        <Cascader placeholder="Search" data={data} />
      </>
    );
    const input = queryByPlaceholderText('Search');
    expect(input).toBeInTheDocument();

    fireEvent.click(input!);
    expect(queryByRole('dialog')).toBeInTheDocument();
    fireEvent.click(queryByText('Outside')!);
    expect(queryByRole('dialog')).not.toBeInTheDocument();

    fireEvent.click(input!);
    expect(queryByRole('dialog')).toBeInTheDocument();
    const cancelButton = queryByText('Cancel');
    expect(cancelButton).toBeInTheDocument();
    fireEvent.click(cancelButton!);
    expect(queryByRole('dialog')).not.toBeInTheDocument();

    fireEvent.click(input!);
    expect(queryByRole('dialog')).toBeInTheDocument();
    const indiaListItem = queryByText('India');
    expect(indiaListItem).toBeInTheDocument();
    fireEvent.click(indiaListItem!);
    const chooseButton = queryByText('Choose');
    expect(chooseButton).toBeInTheDocument();
    fireEvent.click(chooseButton!);
    expect(queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('responds correctly to mouse navigation', () => {
    const {
      container, queryByText, queryByRole, queryByPlaceholderText
    } = render(
      <>
        <div>Outside</div>
        <Cascader placeholder="Search" data={data} />
      </>
    );
    const input = queryByPlaceholderText('Search');
    expect(input).toBeInTheDocument();

    fireEvent.click(input!);
    expect(queryByRole('dialog')).toBeInTheDocument();

    const indiaListItem = queryByText('India');
    expect(indiaListItem).toBeInTheDocument();
    fireEvent.click(indiaListItem!);

    const southListItem = queryByText('South');
    expect(southListItem).toBeInTheDocument();
    fireEvent.click(southListItem!);

    const keralaListItem = queryByText('Kerala');
    expect(keralaListItem).toBeInTheDocument();
    fireEvent.click(keralaListItem!);

    const chooseButton = queryByText('Choose');
    expect(chooseButton).toBeInTheDocument();
    fireEvent.click(chooseButton!);

    expect(queryByRole('dialog')).not.toBeInTheDocument();

    expect(queryByText('Kerala')).toBeInTheDocument();

    const breadcrumb = container.querySelector('.twigs-cascader__breadcrumb');
    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb?.textContent).toBe('India>South');
  });
});
