import { MenuTextMatch } from '@lexical/react/LexicalTypeaheadMenuPlugin';
import { useNodeFocusListener } from '@src/utils/use-node-focus';
import {
  EditorLookupDropdownBase,
  EditorLookupDropdownBaseProps,
  TypeaheadMenuData
} from '../../components';
import { $createHashTagNode, HashTagNode } from '../../nodes/hashtag';

const PUNCTUATION = '\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%\'"~=<>_:;';
const NAME = `\\b[A-Z][^\\s${PUNCTUATION}]`;

const DocumentHashTagRegex = {
  NAME,
  PUNCTUATION
};

const PUNC = DocumentHashTagRegex.PUNCTUATION;

const TRIGGERS = ['#'].join('');

// Chars we expect to see in a mention (non-space, non-punctuation).
const VALID_CHARS = `[^${TRIGGERS}${PUNC}\\s]`;

const LENGTH_LIMIT = 75;

// eslint-disable-next-line no-useless-concat
const HashTagRegex = new RegExp(
  '(^|\\s|\\()('
    + `[${TRIGGERS}]`
    + `((?:${VALID_CHARS}){0,${LENGTH_LIMIT}})`
    + ')$'
);

function checkForHashTags(
  text: string,
  minMatchLength: number
): MenuTextMatch | null {
  const match = HashTagRegex.exec(text);

  if (match !== null) {
    // The strategy ignores leading whitespace but we need to know it's
    // length to add it to the leadOffset
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

function getPossibleQueryMatch(
  text: string,
  len: number = 1
): MenuTextMatch | null {
  return checkForHashTags(text, len);
}

export const HashTagPlugin = ({
  getResults,
  triggerStringLength,
  ...props
}: Partial<EditorLookupDropdownBaseProps> & {
  getResults: (
    text: string | null
  ) => TypeaheadMenuData[] | Promise<TypeaheadMenuData[]>;
  triggerStringLength?: number;
}) => {
  useNodeFocusListener(HashTagNode);

  return (
    <EditorLookupDropdownBase
      $createNode={({ data }) => $createHashTagNode(`#${data.value}`)}
      getResults={getResults}
      triggerFunction={(text) => getPossibleQueryMatch(text, triggerStringLength)}
      {...props}
    />
  );
};
