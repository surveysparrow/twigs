import { MenuTextMatch } from '@lexical/react/LexicalTypeaheadMenuPlugin';
import { BaseLookupDropdown } from '../base-dropdown';
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

const HashTagRegex = new RegExp(
  '(^|\\s|\\()('
    + `[${
      TRIGGERS
    }]`
    + `((?:${
      VALID_CHARS
    }){0,${
      LENGTH_LIMIT
    }})`
    + ')$'
);

const dummyHashtagsData = ['passion', 'integrity', 'makeItWork'];

const dummyLookupService = {
  search(string: string | null) {
    if (!string) return [];
    return new Promise<{ label: string; value: string }[]>((resolve) => {
      setTimeout(() => {
        const results = dummyHashtagsData
          .filter((hashTag) => hashTag.toLowerCase().includes(string.toLowerCase()))
          .map((item) => ({ label: item, value: item }));
        resolve(results);
      }, 500);
    });
  }
};

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

export const HashTagPlugin = () => {
  return (
    <BaseLookupDropdown
      $createNode={({ data }) => $createHashTagNode(`#${data.value}`)}
      getResults={(text) => dummyLookupService.search(text)}
      triggerFunction={(text) => getPossibleQueryMatch(text)}
    />
  );
};
