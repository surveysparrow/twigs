export type TextFormats =
  | 'paragraph'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'code';

export const textAlignments = ['left', 'center', 'right', 'justify'] as const;
export type TextAlignments = typeof textAlignments[number];

export type ToolbarProperties = {
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  isOrderedList: boolean;
  isUnOrderedList: boolean;
  isLink: boolean;
  isStrikethrough: boolean;
  isSubscript: boolean;
  isSuperscript: boolean;
  isCode: boolean;
  format: TextFormats;
  textAlign: TextAlignments;
};
