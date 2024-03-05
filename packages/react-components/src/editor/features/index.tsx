import { Klass, LexicalNode } from 'lexical';
import { ReactNode } from 'react';

export const EditorFeatures = ({ children }: { children?: ReactNode }) => {
  return <>{children}</>;
};

export type EditorFeatureProps = {
  children?: ReactNode;
  // eslint-disable-next-line react/no-unused-prop-types
  node?:
    | ReadonlyArray<Klass<LexicalNode>>
    | ReadonlyArray<Klass<LexicalNode>>[];
};

EditorFeatures.Feature = ({ children }: EditorFeatureProps) => {
  return <>{children}</>;
};

EditorFeatures.Content = ({ children }: { children?: ReactNode }) => {
  return <>{children}</>;
};
