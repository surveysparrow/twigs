import { MenuTextMatch } from '@lexical/react/LexicalTypeaheadMenuPlugin';

import { useNodeFocusListener } from '@src/utils/use-node-focus';
import {
  EditorLookupDropdownBase,
  EditorLookupDropdownBaseProps,
  TypeaheadMenuData
} from '../../components';
import { $createMentionNode, MentionNode } from '../../nodes/mention';

const PUNCTUATION = '\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%\'"~=<>_:;';
const NAME = `\\b[A-Z][^\\s${PUNCTUATION}]`;

const DocumentMentionsRegex = {
  NAME,
  PUNCTUATION
};

const PUNC = DocumentMentionsRegex.PUNCTUATION;

const TRIGGERS = ['@'].join('');

// Chars we expect to see in a mention (non-space, non-punctuation).
const VALID_CHARS = `[^${TRIGGERS}${PUNC}\\s]`;

// Non-standard series of chars. Each series must be preceded and followed by
// a valid char.
const VALID_JOINS = '(?:'
  + '\\.[ |$]|' // E.g. "r. " in "Mr. Smith"
  + ' |' // E.g. " " in "Josh Duck"
  + `[${PUNC}]|` // E.g. "-' in "Salier-Hellendag"
  + ')';

const LENGTH_LIMIT = 75;

const AtSignMentionsRegex = new RegExp(
  '(^|\\s|\\()('
    + `[${TRIGGERS}]`
    + `((?:${VALID_CHARS}${VALID_JOINS}){0,${LENGTH_LIMIT}})`
    + ')$'
);

// 50 is the longest alias length limit.
const ALIAS_LENGTH_LIMIT = 50;

// Regex used to match alias.
const AtSignMentionsRegexAliasRegex = new RegExp(
  '(^|\\s|\\()('
    + `[${TRIGGERS}]`
    + `((?:${VALID_CHARS}){0,${ALIAS_LENGTH_LIMIT}})`
    + ')$'
);

function checkForAtSignMentions(
  text: string,
  minMatchLength: number
): MenuTextMatch | null {
  let match = AtSignMentionsRegex.exec(text);

  if (match === null) {
    match = AtSignMentionsRegexAliasRegex.exec(text);
  }
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
  return checkForAtSignMentions(text, len);
}

export const MentionsPlugin = ({
  getResults,
  triggerStringLength,
  ...props
}: Partial<EditorLookupDropdownBaseProps> & {
  getResults: (
    text: string | null
  ) => TypeaheadMenuData[] | Promise<TypeaheadMenuData[]>;
  triggerStringLength?: number;
}) => {
  useNodeFocusListener(MentionNode);

  return (
    <EditorLookupDropdownBase
      $createNode={({ data }) => $createMentionNode(`@${data.value}`)}
      getResults={getResults}
      triggerFunction={(text) => getPossibleQueryMatch(text, triggerStringLength)}
      {...props}
    />
  );
};
