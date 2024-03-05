import { $generateHtmlFromNodes, $generateNodesFromDOM } from '@lexical/html';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getRoot, $insertNodes } from 'lexical';
import { forwardRef, useImperativeHandle } from 'react';

export interface DataManagementPluginHandle {
  getDataAsync: () => Promise<{ html: string; json: Object }>;
  insertHtml: (html: string) => void;
}

interface DataManagementPluginProps {}

export const DataManagementPlugin = forwardRef<
  DataManagementPluginHandle,
  DataManagementPluginProps
>((_props, ref) => {
  const [editor] = useLexicalComposerContext();

  useImperativeHandle(ref, () => ({
    getDataAsync,
    insertHtml
  }));

  function getDataAsync(): Promise<{ html: string; json: Object }> {
    return new Promise((resolve, reject) => {
      try {
        editor.update(() => {
          const html = $generateHtmlFromNodes(editor, null);
          const json = editor.getEditorState().toJSON();
          resolve({ html, json });
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  function insertHtml(html: string) {
    editor.update(() => {
      const parser = new DOMParser();
      const dom = parser.parseFromString(html, 'text/html');
      const nodes = $generateNodesFromDOM(editor, dom);
      $getRoot().clear();
      $insertNodes(nodes);
    });
  }

  return null;
});
