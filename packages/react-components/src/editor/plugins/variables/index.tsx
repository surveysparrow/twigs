/* eslint-disable no-useless-concat */
import { MenuTextMatch } from '@lexical/react/LexicalTypeaheadMenuPlugin';

import {
  EditorLookupDropdownBase,
  EditorLookupDropdownBaseProps,
  MenuData
} from '../../components/base-dropdown';
import { $createVariableNode } from '../../nodes/variables';

const PUNCTUATION = '\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%\'"~=<>_:;';

const TRIGGERS = ['$'].join('');

const VALID_CHARS = `[^${TRIGGERS}${PUNCTUATION}\\s]`;

// Non-standard series of chars. Each series must be preceded and followed by
// a valid char.
const VALID_JOINS = '(?:' + '\\.[ |$]|' + ' |' + `[${PUNCTUATION}]|` + ')';

const LENGTH_LIMIT = 75;

const dollarVariablesRegex = new RegExp(
  '(^|\\s|\\()('
    + `[${TRIGGERS}]`
    + `((?:${VALID_CHARS}${VALID_JOINS}){0,${LENGTH_LIMIT}})`
    + ')$'
);

function checkForDollarVariables(
  text: string,
  minMatchLength: number
): MenuTextMatch | null {
  const match = dollarVariablesRegex.exec(text);

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
  return checkForDollarVariables(text, 1);
}

export const VariablesPlugin = ({
  getResults,
  ...props
}: Partial<EditorLookupDropdownBaseProps> & {
  getResults: (text: string | null) => MenuData[] | Promise<MenuData[]>;
}) => {
  return (
    <EditorLookupDropdownBase
      $createNode={({ data }) => $createVariableNode(`$${data.value}`)}
      getResults={getResults}
      triggerFunction={(text) => getPossibleQueryMatch(text)}
      {...props}
    />
  );
};
