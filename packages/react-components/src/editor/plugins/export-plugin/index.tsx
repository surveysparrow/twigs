import { $generateHtmlFromNodes, $generateNodesFromDOM } from '@lexical/html';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getRoot, $insertNodes } from 'lexical';
import { forwardRef, useImperativeHandle } from 'react';

export interface ExportPluginHandle {
  getHtmlAsync: () => Promise<{ html: string; json: Object }>;
  insertHtml: (html: string) => void;
}

interface ExportPluginProps {}

export const ExportPlugin = forwardRef<ExportPluginHandle, ExportPluginProps>(
  (_props, ref) => {
    const [editor] = useLexicalComposerContext();

    useImperativeHandle(ref, () => ({
      getHtmlAsync,
      insertHtml
    }));

    function getHtmlAsync(): Promise<{ html: string; json: Object }> {
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

        // Once you have the DOM instance it's easy to generate LexicalNodes.
        const nodes = $generateNodesFromDOM(editor, dom);

        // Select the root
        $getRoot().select();

        // Insert them at a selection.
        $insertNodes(nodes);
      });
    }

    return null;
  }
);
