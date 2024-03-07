import { MenuTextMatch } from '@lexical/react/LexicalTypeaheadMenuPlugin';
import {
  BaseLookupDropdown,
  BaseLookupDropdownProps,
  MenuData
} from '../base-dropdown';
import { $createKudosNode } from '../../nodes/kudos';

const PUNCTUATION = '\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%\'"~=<>_:;';
const NAME = `\\b[A-Z][^\\s${PUNCTUATION}]`;

const DocumentKudosRegex = {
  NAME,
  PUNCTUATION
};

const PUNC = DocumentKudosRegex.PUNCTUATION;

const TRIGGERS = ['+'].join('');

// Chars we expect to see in a mention (non-space, non-punctuation).
const VALID_CHARS = `[^${TRIGGERS}${PUNC}\\sa-zA-Z]`;

const LENGTH_LIMIT = 5;

const KudosRegex = new RegExp(
  '(^|\\s|\\()('
    + `[${TRIGGERS}]`
    + `((?:${VALID_CHARS}){0,${LENGTH_LIMIT}})`
    + ')$'
);

function checkForKudos(
  text: string,
  minMatchLength: number
): MenuTextMatch | null {
  const match = KudosRegex.exec(text);
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
  return checkForKudos(text, 0);
}

export const KudosPlugin = ({
  getResults,
  ...props
}: {
  getResults: (text: string | null) => MenuData[] | Promise<MenuData[]>;
} & Partial<BaseLookupDropdownProps>) => {
  return (
    <BaseLookupDropdown
      $createNode={({ data }) => $createKudosNode(`+${data.value}`)}
      getResults={getResults}
      triggerFunction={(text) => getPossibleQueryMatch(text)}
      {...props}
    />
  );
};
