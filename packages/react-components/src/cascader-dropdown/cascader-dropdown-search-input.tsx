import React, { useEffect } from 'react';
import { useCascaderDropdownContext } from './use-value';
import { Input } from '../input';
import { CascaderDropdownNode } from './cascader-dropdown-node';
import { findNextFocusableRowNode, findPrevFocusableRowNode } from './helpers/cascader-dropdown-utils';
import { optionTypes } from './helpers/cascader-dropdown-constants';

export const CascaderDropdownSearchInput = ({
  searchQuery,
  setSearchQuery,
  searchFocusedNode,
  setSearchFocusedNode
}: {
  searchQuery: string,
  setSearchQuery: (query: string) => void,
  searchFocusedNode: CascaderDropdownNode | null,
  setSearchFocusedNode: (node: CascaderDropdownNode | null) => void
}) => {
  const {
    inputRef, focusNextRow, focusPreviousRow, focusNextColumn, focusPreviousColumn, setSelectedNode, setFocusedNode, handleChange, selectFocusedNode
  } = useCascaderDropdownContext();

  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchQuery === '') onCascadedKeyboardNavigation(e);
    else onSearchListKeyboardNavigation(e);
  };

  const onCascadedKeyboardNavigation = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        focusNextRow();
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        focusPreviousRow();
        break;
      }
      case 'ArrowRight': {
        e.preventDefault();
        focusNextColumn();
        break;
      }
      case 'ArrowLeft': {
        e.preventDefault();
        focusPreviousColumn();
        break;
      }
      case ' ':
      case 'Enter': {
        e.preventDefault();
        selectFocusedNode();
        break;
      }
      default: {
        break;
      }
    }
  };

  const onSearchListKeyboardNavigation = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (searchFocusedNode) {
        if (searchFocusedNode.children.length === 0 && searchFocusedNode.getType() !== optionTypes.VALUE_SELECTOR) {
          handleChange(searchFocusedNode);
        } else {
          setSelectedNode(searchFocusedNode);
          setFocusedNode(searchFocusedNode.children.at(0) ?? null);
        }
        setSearchQuery('');
        setSearchFocusedNode(null);
      }
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (searchFocusedNode) {
        const nextNode = findNextFocusableRowNode(searchFocusedNode);
        if (nextNode) setSearchFocusedNode(nextNode);
      }
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (searchFocusedNode) {
        const prevNode = findPrevFocusableRowNode(searchFocusedNode);
        if (prevNode) setSearchFocusedNode(prevNode);
      }
    }
  };

  return (
    <Input
      onChange={(e) => {
        setSearchQuery(e.target.value);
      }}
      value={searchQuery}
      ref={inputRef}
      css={{
        '&[data-testid="input"], &[data-testid="input"]:hover, &[data-testid="input"]:focus': {
          borderTopWidth: '0',
          borderLeftWidth: '0',
          borderRightWidth: '0',
          borderBottomWidth: '1px',
          borderBottomColor: '$neutral100',
          boxShadow: 'none',
          '&::placeholder': {
            color: '$neutral700'
          },
          '&::-ms-input-placeholder': {
            color: '$neutral700'
          }
        },
        borderRadius: '$xl $xl 0 0'
      }}
      placeholder="Search"
      size="lg"
      onKeyDown={onKeyDown}
    />
  );
};
