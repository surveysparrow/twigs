import { Box } from '@src/box';
import { prefixClassName } from '@src/utils';
import React, { useMemo } from 'react';
import { Text } from '@src/text';
import { Flex } from '@src/flex';
import { QuestionCircleIcon } from '@sparrowengg/twigs-react-icons';
import { useCascaderDropdownContext } from './use-value';
import { CascaderDropdownNode } from './cascader-dropdown-node';
import { ResultCacheType } from './cascader-dropdown-content';
import { buildSelectionPath, stringSearchFlattenedNodes } from './helpers/cascader-dropdown-utils';
import { StyledItem } from './styled/StyledItem';

export const CascaderDropdownSearchList = ({
  searchQuery,
  setSearchQuery,
  resultCache,
  setResultCache,
  searchFocusedNode,
  setSearchFocusedNode
} : {
  searchQuery: string,
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>,
  resultCache: ResultCacheType,
  setResultCache: React.Dispatch<React.SetStateAction<ResultCacheType>>,
  searchFocusedNode: CascaderDropdownNode | null,
  setSearchFocusedNode: React.Dispatch<React.SetStateAction<CascaderDropdownNode | null>>
}) => {
  const {
    selectedNode, rootNode, setSelectedNode, setFocusedNode, handleChange
  } = useCascaderDropdownContext();

  const { results, hasSpace } = useMemo<{ results: CascaderDropdownNode[], hasSpace: boolean }>(() => {
    const hasSpaceInQuery = searchQuery.includes(' ') && !selectedNode?.getParent();

    if (resultCache[searchQuery]) {
      setSearchFocusedNode(resultCache[searchQuery].at(0) ?? null);
      return { results: resultCache[searchQuery], hasSpace: hasSpaceInQuery };
    }

    const node = selectedNode ?? rootNode;
    const searchableNodes = node.getChildren();

    let filteredNodes: CascaderDropdownNode[] = [];

    if (!hasSpaceInQuery) {
      filteredNodes = searchableNodes.filter((searchableNode) => `${searchableNode.label}`.toLowerCase().includes(searchQuery.toLowerCase()));
    } else {
      filteredNodes = stringSearchFlattenedNodes(rootNode, searchQuery);
    }

    setSearchFocusedNode(filteredNodes.at(0) ?? null);

    setResultCache((prev) => ({ ...prev, [searchQuery]: filteredNodes }));
    return { results: filteredNodes, hasSpace: hasSpaceInQuery };
  }, [searchQuery]);

  const onClick = (node: CascaderDropdownNode) => {
    setSearchQuery('');
    if (node.getChildren().length === 0) {
      handleChange(node);
      return;
    }
    setSelectedNode(node);
    setFocusedNode(node.getChildren().at(0) ?? null);
  };

  const onMouseEnter = (node: CascaderDropdownNode) => {
    setSearchFocusedNode(node);
  };

  return (
    <Box
      as="ul"
      css={{ paddingTop: '$4', paddingBottom: '$4' }}
      tabIndex={-1}
      className={prefixClassName('cascader-dropdown__search-list')}
    >
      {results.length === 0 && (
        <Flex css={{ height: '112px', color: '$neutral600' }} alignItems="center" justifyContent="center" flexDirection="column" gap="$4">
          <QuestionCircleIcon size={20} />
          <Text css={{ color: '$neutral800', marginBottom: '0' }}>No results found!</Text>
        </Flex>
      )}
      {results.map((result) => {
        return (
          <CascaderDropdownSearchItem
            key={result.value}
            node={result}
            hovered={searchFocusedNode?.value === result.value}
            className={prefixClassName('cascader-dropdown__item')}
            onClick={() => onClick(result)}
            onMouseEnter={() => onMouseEnter(result)}
            hasSpace={hasSpace}
          />
        );
      })}
    </Box>
  );
};

const CascaderDropdownSearchItem = ({
  node,
  hovered,
  className,
  onClick,
  onMouseEnter,
  hasSpace
}: {
  node: CascaderDropdownNode,
  hovered: boolean,
  className: string,
  onClick: () => void,
  onMouseEnter: () => void,
  hasSpace: boolean
}) => {
  const { selectionPath } = buildSelectionPath(node);

  if (selectionPath.length === 0) return null;

  if (!hasSpace) {
    return (
      <StyledItem
        className={className}
        onClick={onClick}
        hovered={hovered}
        data-is-focused={hovered}
        onMouseEnter={onMouseEnter}
      >
        <Text css={{ color: '$neutral900' }} truncate>{selectionPath.at(-1)?.label}</Text>
      </StyledItem>
    );
  }

  if (selectionPath.length === 1) {
    return (
      <StyledItem
        className={className}
        onClick={onClick}
        hovered={hovered}
        data-is-focused={hovered}
        onMouseEnter={onMouseEnter}
      >
        <Text css={{ color: '$neutral900' }} truncate>{selectionPath[0]?.label}</Text>
      </StyledItem>
    );
  }

  if (selectionPath.length === 2) {
    return (
      <StyledItem
        className={className}
        onClick={onClick}
        hovered={hovered}
        data-is-focused={hovered}
        onMouseEnter={onMouseEnter}
      >
        <Text css={{ color: '$neutral700' }} truncate>
          {`${selectionPath[0]?.label}`}
        </Text>
        <SearchItemSeparator />
        <Text css={{ color: '$neutral900' }} truncate>{selectionPath[1]?.label}</Text>
      </StyledItem>
    );
  }

  return (
    <StyledItem
      className={className}
      onClick={onClick}
      hovered={hovered}
      data-is-focused={hovered}
      onMouseEnter={onMouseEnter}
    >
      <Text css={{ color: '$neutral700' }} truncate>{selectionPath[0]?.label}</Text>
      {node.level === 2 ? <SearchItemSeparator /> : <SearchItemSeparator separator=" > ... > " />}
      <Text css={{ color: '$neutral900' }} truncate>{selectionPath[node.level - 1]?.label}</Text>
      {node.level !== selectionPath.length && <SearchItemSeparator separator=" > ..." />}
    </StyledItem>
  );
};

const SearchItemSeparator = ({ separator = ' > ' } : { separator?: string }) => (
  <Text css={{ color: '$neutral700' }}>
    &nbsp;
    {separator}
    &nbsp;
  </Text>
);
