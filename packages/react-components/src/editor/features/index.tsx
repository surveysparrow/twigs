/* eslint-disable react/default-props-match-prop-types */
import { Klass, LexicalNode } from 'lexical';
import { ReactNode } from 'react';

export type EditorFeatureProps = {
  children?: ReactNode;
  // eslint-disable-next-line react/no-unused-prop-types
  node?:
    | ReadonlyArray<Klass<LexicalNode>>
    | ReadonlyArray<Klass<LexicalNode>>[];
};

export const EditorFeature = ({ children }: EditorFeatureProps) => {
  return <>{children}</>;
};

EditorFeature.defaultProps = {
  ___TYPE: 'EditorFeature'
};

export const EditorContent = ({ children }: { children?: ReactNode }) => {
  return <>{children}</>;
};

EditorContent.defaultProps = {
  ___TYPE: 'EditorContent'
};
