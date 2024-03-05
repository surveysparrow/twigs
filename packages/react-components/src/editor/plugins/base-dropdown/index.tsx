import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  LexicalTypeaheadMenuPlugin,
  MenuOption,
  MenuTextMatch
} from '@lexical/react/LexicalTypeaheadMenuPlugin';
import { LexicalNode, TextNode } from 'lexical';
import React, {
  ReactNode,
  ReactPortal,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import { createPortal } from 'react-dom';
import { Box } from '@src/box';
import { Button } from '../../../button';
import { Popover, PopoverContent, PopoverTrigger } from '../../../popover';

export type MenuData = {
  value: string;
  label: string;
  [x: string]: unknown;
};

type RenderMenuItemContentProps = {
  index: number;
  isSelected: boolean;
  option: MentionTypeaheadOption;
};

class MentionTypeaheadOption extends MenuOption {
  data: MenuData;

  constructor(data: MenuData) {
    super(data.value);
    this.data = data;
  }
}

const MentionsTypeaheadMenuItem = ({
  index,
  isSelected,
  onClick,
  onMouseEnter,
  option,
  renderMenuItemContent
}: {
  index: number;
  isSelected: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  option: MentionTypeaheadOption;
  renderMenuItemContent?: (props: RenderMenuItemContentProps) => ReactNode;
}) => {
  return (
    <Button
      key={option.key}
      ref={option.setRefElement}
      role="option"
      color={isSelected ? 'default' : 'bright'}
      aria-selected={isSelected}
      id={`typeahead-item-${index}`}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      {renderMenuItemContent ? (
        renderMenuItemContent({
          index,
          isSelected,
          option
        })
      ) : (
        <span className="text">{option.data.label}</span>
      )}
    </Button>
  );
};

export type BaseLookupDropdownProps = {
  triggerFunction: (text: string) => MenuTextMatch | null;
  getResults: (text: string | null) => Promise<MenuData[]> | MenuData[];
  $createNode: (data: MentionTypeaheadOption) => LexicalNode;
  suggestionsListLength?: number;
  renderMenu?: (args: {
    anchorElementRef: React.MutableRefObject<HTMLElement | null>;
    selectedIndex: number | null;
    selectOptionAndCleanUp: (option: MentionTypeaheadOption) => void;
    setHighlightedIndex: (index: number) => void;
    menuOptions: MentionTypeaheadOption[];
  }) => ReactPortal | React.JSX.Element | null;
  renderMenuItemContent?: (props: RenderMenuItemContentProps) => ReactNode;
};

export const BaseLookupDropdown = ({
  triggerFunction,
  getResults,
  $createNode,
  renderMenu,
  renderMenuItemContent,
  suggestionsListLength = 5
}: BaseLookupDropdownProps) => {
  const [editor] = useLexicalComposerContext();

  const [queryString, setQueryString] = useState<string | null>(null);

  const [results, setResults] = useState<MenuData[]>([]);

  useEffect(() => {
    (async () => {
      const res = await getResults(queryString);
      setResults(res || []);
    })();
  }, [queryString, getResults]);

  const menuOptions = useMemo(
    () => results
      .map((result) => new MentionTypeaheadOption(result))
      .slice(0, suggestionsListLength),
    [results, suggestionsListLength]
  );

  const onSelectOption = useCallback(
    (
      selectedOption: MentionTypeaheadOption,
      nodeToReplace: TextNode | null,
      closeMenu: () => void
    ) => {
      editor.update(() => {
        const node = $createNode(selectedOption);
        if (nodeToReplace) {
          nodeToReplace.replace(node);
        }
        node.select();
        closeMenu();
      });
    },
    [editor, $createNode]
  );

  const defaultMenuRender = ({
    anchorElementRef,
    selectOptionAndCleanUp,
    setHighlightedIndex,
    selectedIndex
  }: {
    anchorElementRef: React.MutableRefObject<HTMLElement | null>;
    selectOptionAndCleanUp: (option: MentionTypeaheadOption) => void;
    setHighlightedIndex: (index: number) => void;
    selectedIndex: number | null;
  }) => {
    if (anchorElementRef.current && menuOptions.length) {
      return createPortal(
        <div className="typeahead-popover mentions-menu">
          <Popover open>
            <PopoverTrigger asChild>
              <Box
                as="span"
                css={{
                  visibility: 'hidden'
                }}
              >
                -
              </Box>
            </PopoverTrigger>
            <PopoverContent
              autoFocus={false}
              sideOffset={10}
              align="start"
              onOpenAutoFocus={() => {
                editor.focus();
                return false;
              }}
            >
              {menuOptions.map((option, i: number) => (
                <MentionsTypeaheadMenuItem
                  index={i}
                  isSelected={selectedIndex === i}
                  onClick={() => {
                    setHighlightedIndex(i);
                    selectOptionAndCleanUp(option);
                  }}
                  onMouseEnter={() => {
                    setHighlightedIndex(i);
                  }}
                  key={option.key}
                  option={option}
                  renderMenuItemContent={renderMenuItemContent}
                />
              ))}
            </PopoverContent>
          </Popover>
        </div>,
        anchorElementRef.current
      );
    }

    return null;
  };

  return (
    <LexicalTypeaheadMenuPlugin<MentionTypeaheadOption>
      onQueryChange={setQueryString}
      onSelectOption={onSelectOption}
      triggerFn={triggerFunction}
      options={menuOptions}
      menuRenderFn={(
        anchorElementRef,
        { selectedIndex, selectOptionAndCleanUp, setHighlightedIndex }
      ) => {
        if (renderMenu) {
          return renderMenu({
            anchorElementRef,
            selectedIndex,
            selectOptionAndCleanUp,
            setHighlightedIndex,
            menuOptions
          });
        }

        return defaultMenuRender({
          anchorElementRef,
          selectedIndex,
          selectOptionAndCleanUp,
          setHighlightedIndex
        });
      }}
    />
  );
};
