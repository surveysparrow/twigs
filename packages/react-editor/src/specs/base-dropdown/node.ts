import { MenuTextMatch } from '@lexical/react/LexicalTypeaheadMenuPlugin';

const PUNCTUATION = '\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%\'"~=<>_:;';

const TRIGGERS = ['/'].join('');

// Chars we expect to see in a slash command (non-space, non-punctuation).
const VALID_CHARS = `[^${TRIGGERS}${PUNCTUATION}\\s]`;

const LENGTH_LIMIT = 75;

const SlashRegex = new RegExp(
  '(^|\\s|\\()('
    + `[${TRIGGERS}]`
    + `((?:${VALID_CHARS}){0,${LENGTH_LIMIT}})`
    + ')$'
);

export function checkForSlashes(
  text: string,
  minMatchLength: number
): MenuTextMatch | null {
  const match = SlashRegex.exec(text);

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

export function getPossibleQueryMatch(text: string): MenuTextMatch | null {
  return checkForSlashes(text, 0);
}
