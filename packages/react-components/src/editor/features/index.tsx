import {
  InitialConfigType
} from '@lexical/react/LexicalComposer';
import { ReactNode } from 'react';

export const EditorFeatures = ({ children }: { children: ReactNode }) => {
  return children;
};

export type EditorFeatureProps = {
  children: ReactNode;
  node?: InitialConfigType['nodes'] | InitialConfigType['nodes'][];
}

EditorFeatures.Feature = ({
  children
}: EditorFeatureProps) => {
  return children;
};
