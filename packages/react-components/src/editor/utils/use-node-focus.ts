import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  $createTextNode,
  $getNodeByKey,
  $insertNodes,
  $isTextNode,
  KlassConstructor,
  LexicalNode
} from 'lexical';
import { useEffect } from 'react';

/**
 * Used to focus on the next sibling of a node when a node like mention / hashtag etc is created.
 * It will create an empty text node if the next sibling is not present.
 * @param node The node to be created
 */
export const useNodeFocusListener = <T extends typeof LexicalNode>(node: KlassConstructor<T>) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.registerMutationListener(
      node,
      (mutations) => {
        mutations.forEach((mutationType, mutationKey) => {
          if (mutationType === 'created') {
            editor.update(() => {
              const currentMentionNode = $getNodeByKey(mutationKey);
              const nextSibling = currentMentionNode?.getNextSibling();
              if ($isTextNode(nextSibling)) {
                if (!nextSibling.getTextContent().startsWith(' ')) {
                  const textNode = $createTextNode(' ');
                  $insertNodes([textNode]);
                } else {
                  currentMentionNode?.selectNext(1, 1);
                }
              } else if (nextSibling === null) {
                const textNode = $createTextNode(' ');
                $insertNodes([textNode]);
              }
            });
          }
        });
      }
    );
  }, []);
};
