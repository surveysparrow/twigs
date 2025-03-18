import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  LexicalTypeaheadMenuPlugin,
  MenuOption,
  MenuTextMatch
} from '@lexical/react/LexicalTypeaheadMenuPlugin';
import {
  Box, Button, Popover, PopoverContent, PopoverTrigger, config
} from '@sparrowengg/twigs-react';
import { CSS } from '@stitches/react';
import { LexicalEditor, TextNode } from 'lexical';
import React, {
  ReactNode,
  ReactPortal,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import { createPortal } from 'react-dom';

export type TypeaheadMenuData = {
  value: string;
  label: string;
  [x: string]: unknown;
};

type RenderMenuItemContentProps = {
  index: number;
  isSelected: boolean;
  option: TypeaheadOption;
};

class TypeaheadOption extends MenuOption {
  data: TypeaheadMenuData;

  constructor(data: TypeaheadMenuData) {
    super(data.value);
    this.data = data;
  }
}

const TypeaheadMenuItem = ({
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
  option: TypeaheadOption;
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
      size="md"
      css={{
        width: '100%',
        justifyContent: 'flex-start'
      }}
    >
      {renderMenuItemContent ? (
        renderMenuItemContent({
          index,
          isSelected,
          option
        })
      ) : (
        <Box as="span" className="text">
          {option.data.label}
        </Box>
      )}
    </Button>
  );
};

export type EditorLookupDropdownBaseProps = {
  triggerFunction: (text: string) => MenuTextMatch | null;
  getResults: (
    text: string | null
  ) => Promise<TypeaheadMenuData[]> | TypeaheadMenuData[];
  $createNode?: (data: TypeaheadOption) => TextNode;
  suggestionsListLength?: number;
  renderMenu?: (args: {
    anchorElementRef: React.MutableRefObject<HTMLElement | null>;
    selectedIndex: number | null;
    selectOptionAndCleanUp: (option: TypeaheadOption) => void;
    setHighlightedIndex: (index: number) => void;
    menuOptions: TypeaheadOption[];
  }) => ReactPortal | React.JSX.Element | null;
  renderMenuItemContent?: (props: RenderMenuItemContentProps) => ReactNode;
  onMenuItemSelect?: (
    option: TypeaheadOption,
    closeMenu?: () => void
  ) => void | boolean;
  css?: CSS<typeof config>;
};

const defaultMenuRender = ({
  selectOptionAndCleanUp,
  setHighlightedIndex,
  renderMenuItemContent,
  anchorElementRef,
  menuOptions,
  selectedIndex,
  editor,
  css
}: {
  anchorElementRef: React.MutableRefObject<HTMLElement | null>;
  selectOptionAndCleanUp: (option: TypeaheadOption) => void;
  setHighlightedIndex: (index: number) => void;
  selectedIndex: number | null;
  menuOptions: TypeaheadOption[];
  editor: LexicalEditor;
  renderMenuItemContent?: EditorLookupDropdownBaseProps['renderMenuItemContent'];
  css?: CSS<typeof config>;
}) => {
  if (anchorElementRef.current && menuOptions.length) {
    return createPortal(
      <div className="typeahead-popover dropdown-menu">
        <Popover open>
          <PopoverTrigger asChild>
            <Box
              as="span"
              css={{
                visibility: 'hidden',
                display: 'block',
                height: '0px'
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
            css={css}
          >
            {menuOptions.map((option, i: number) => (
              <TypeaheadMenuItem
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

export const EditorLookupDropdownBase = ({
  triggerFunction,
  getResults,
  $createNode,
  renderMenu,
  onMenuItemSelect,
  renderMenuItemContent,
  suggestionsListLength = 5,
  css
}: EditorLookupDropdownBaseProps) => {
  const [editor] = useLexicalComposerContext();

  const [queryString, setQueryString] = useState<string | null>(null);

  const [results, setResults] = useState<TypeaheadMenuData[]>([]);

  useEffect(() => {
    (async () => {
      const res = await getResults(queryString);
      setResults(res || []);
    })();
  }, [queryString, getResults]);

  const menuOptions = useMemo(
    () => results
      .map((result) => new TypeaheadOption(result))
      .slice(0, suggestionsListLength),
    [results, suggestionsListLength]
  );

  const onSelectOption = useCallback(
    (
      selectedOption: TypeaheadOption,
      nodeToReplace: TextNode | null,
      closeMenu: () => void
    ) => {
      editor.update(() => {
        if (onMenuItemSelect) {
          const result = onMenuItemSelect(selectedOption, closeMenu);
          if (result) {
            return;
          }
        }

        if (!$createNode) return;

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

  return (
    <LexicalTypeaheadMenuPlugin<TypeaheadOption>
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
            menuOptions,
            selectedIndex,
            anchorElementRef,
            setHighlightedIndex,
            selectOptionAndCleanUp
          });
        }

        return defaultMenuRender({
          editor,
          menuOptions,
          selectedIndex,
          anchorElementRef,
          setHighlightedIndex,
          renderMenuItemContent,
          selectOptionAndCleanUp,
          css
        });
      }}
    />
  );
};
