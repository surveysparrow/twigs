import { MenuTextMatch } from '@lexical/react/LexicalTypeaheadMenuPlugin';
import { BaseLookupDropdown } from '../base-dropdown';
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

const kudosLabels = [
  '+1 - Noteworthy',
  '+2 - Commendable',
  '+3 - Outstanding',
  '+4 - Exceptional',
  '+5 - Exemplary'
];
const kudosValues = kudosLabels.map((item, index) => ({
  listLabel: item,
  label: `${index + 1}`,
  value: `${index + 1}`
}));

const searchKudos = (string: string | null) => {
  if (!string) return kudosValues;
  const results = kudosValues.filter((kudos) => kudos.label === string);

  return results;
};

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

export const KudosPlugin = () => {
  return (
    <BaseLookupDropdown
      $createNode={({ data }) => $createKudosNode(`+${data.value}`)}
      getResults={(text) => searchKudos(text)}
      triggerFunction={(text) => getPossibleQueryMatch(text)}
      renderMenuItemContent={(props) => {
        return <span>{props.option?.data?.listLabel as string}</span>;
      }}
    />
  );
};
