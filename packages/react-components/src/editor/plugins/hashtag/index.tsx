import { MenuTextMatch } from '@lexical/react/LexicalTypeaheadMenuPlugin';
import {
  EditorLookupDropdownBase,
  EditorLookupDropdownBaseProps,
  MenuData
} from '../../components';
import { $createHashTagNode } from '../../nodes/hashtag';

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

function getPossibleQueryMatch(text: string): MenuTextMatch | null {
  return checkForHashTags(text, 1);
}

export const HashTagPlugin = ({
  getResults,
  ...props
}: Partial<EditorLookupDropdownBaseProps> & {
  getResults: (text: string | null) => MenuData[] | Promise<MenuData[]>;
}) => {
  return (
    <EditorLookupDropdownBase
      $createNode={({ data }) => $createHashTagNode(`#${data.value}`)}
      getResults={getResults}
      triggerFunction={(text) => getPossibleQueryMatch(text)}
      {...props}
    />
  );
};
