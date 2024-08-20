import { MenuTextMatch } from '@lexical/react/LexicalTypeaheadMenuPlugin';
import { $createEmojiNode, EmojiNode } from '@src/editor/nodes';
import { useEffect, useState } from 'react';
import { useNodeFocusListener } from '@src/editor/utils/use-node-focus';
import {
  EditorLookupDropdownBase,
  EditorLookupDropdownBaseProps,
  TypeaheadMenuData
} from '../../components';

type Emoji = {
  emoji: string;
  description: string;
  category: string;
  aliases: string[];
  tags: string[];
  unicode_version: string;
  ios_version: string;
  skin_tones?: boolean;
};

const PUNCTUATION = '\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%\'"~=<>:;';

const TRIGGERS = [':'].join('');

const VALID_CHARS = `[^${TRIGGERS}${PUNCTUATION}\\s]`;

const LENGTH_LIMIT = 75;

// eslint-disable-next-line no-useless-concat
const emojiRegex = new RegExp(
  '(^|\\s|\\()('
    + `[${TRIGGERS}]`
    + `((?:${VALID_CHARS}){0,${LENGTH_LIMIT}})`
    + ')$'
);

function checkForHashTags(
  text: string,
  minMatchLength: number
): MenuTextMatch | null {
  const match = emojiRegex.exec(text);

  if (match !== null) {
    const maybeLeadingWhitespace = match[1];

    const matchingString = match[3];
    if (matchingString.length >= minMatchLength) {
      return {
        leadOffset: match.index + maybeLeadingWhitespace.length,
        matchingString,
        replaceableString: match[2]
      };
    }
  }
  return null;
}

function getPossibleQueryMatch(text: string, len = 0): MenuTextMatch | null {
  return checkForHashTags(text, len);
}

const snakeCaseToTitleCase = (str: string) => {
  return str
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const EmojiPlugin = ({
  getResults,
  triggerStringLength,
  suggestionsListLength = 10,
  ...props
}: Partial<EditorLookupDropdownBaseProps> & {
  getResults?: (
    text: string | null,
    defaultEmojis?: Emoji[]
  ) => TypeaheadMenuData[] | Promise<TypeaheadMenuData[]>;
  triggerStringLength?: number;
}) => {
  const [emojis, setEmojis] = useState<Emoji[]>([]);

  useEffect(() => {
    import('./emoji-list').then((file) => setEmojis(file.default));
  }, []);

  useNodeFocusListener(EmojiNode);

  return (
    <EditorLookupDropdownBase
      $createNode={({ data }) => $createEmojiNode('emoji', data.value)}
      getResults={(text) => {
        if (getResults) {
          return getResults(text, emojis);
        }
        if (text === null) return [];

        if (!text) {
          return emojis.slice(0, suggestionsListLength).map((item) => ({
            label: `${item.emoji}  ${snakeCaseToTitleCase(item.aliases[0])}`,
            value: item.emoji
          }));
        }
        const results = emojis
          .filter((emoji) => {
            return emoji.aliases.join(' ').includes(text);
          })
          .sort((a, b) => {
            return a.aliases.join(' ').length - b.aliases.join(' ').length;
          });

        return results.map((item) => ({
          label: `${item.emoji}  ${snakeCaseToTitleCase(item.aliases[0])}`,
          value: item.emoji
        }));
      }}
      triggerFunction={(text) => getPossibleQueryMatch(text, triggerStringLength)}
      suggestionsListLength={suggestionsListLength}
      {...props}
    />
  );
};
