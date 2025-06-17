import React, { useEffect } from 'react';
import { useCascaderDropdownContext } from './use-value';
import { Input } from '../input';
import { CascaderDropdownNode } from './cascader-dropdown-node';
import { optionTypes } from './helpers/cascader-dropdown-constants';

export const CascaderDropdownSearchInput = ({
  searchQuery,
  setSearchQuery,
  searchFocusedNode,
  setSearchFocusedNode,
  resultCache
}: {
  searchQuery: string,
  setSearchQuery: (query: string) => void,
  searchFocusedNode: CascaderDropdownNode | null,
  setSearchFocusedNode: (node: CascaderDropdownNode | null) => void,
  resultCache: Record<string, CascaderDropdownNode[]>
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
    switch (e.key) {
      case 'Enter': {
        e.preventDefault();
        if (!searchFocusedNode) return;
        if (searchFocusedNode.children.length === 0 && searchFocusedNode.getType() !== optionTypes.VALUE_SELECTOR) {
          handleChange(searchFocusedNode);
          setSearchQuery('');
          setSearchFocusedNode(null);
          return;
        }
        setSelectedNode(searchFocusedNode);
        setFocusedNode(searchFocusedNode.children.at(0) ?? null);
        setSearchQuery('');
        setSearchFocusedNode(null);
        break;
      }
      case 'ArrowDown': {
        e.preventDefault();
        const results = resultCache[searchQuery] || [];
        if (results.length === 0) return;
        const currentIndex = searchFocusedNode ? results.findIndex((node) => node.value === searchFocusedNode.value) : -1;
        const nextIndex = currentIndex < results.length - 1 ? currentIndex + 1 : 0;
        setSearchFocusedNode(results[nextIndex]);
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        const results = resultCache[searchQuery] || [];
        if (results.length === 0) return;
        const currentIndex = searchFocusedNode ? results.findIndex((node) => node.value === searchFocusedNode.value) : -1;
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : results.length - 1;
        setSearchFocusedNode(results[prevIndex]);
        break;
      }
      default: {
        break;
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
