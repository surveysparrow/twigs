import type { Spread } from 'lexical';

import {
  type DOMConversionMap,
  type DOMConversionOutput,
  type DOMExportOutput,
  type EditorConfig,
  type LexicalNode,
  type NodeKey,
  type SerializedTextNode,
  $applyNodeReplacement,
  TextNode
} from 'lexical';

export type SerializedKudosNode = Spread<
  {
    kudos: string;
  },
  SerializedTextNode
>;

const nodeName = 'kudos';

function convertKudosElement(domNode: HTMLElement): DOMConversionOutput | null {
  const { textContent } = domNode;

  if (textContent !== null) {
    const node = $createKudosNode(textContent);
    return {
      node
    };
  }

  return null;
}

const kudosStyle = 'background-color: rgba(24, 119, 232, 0.2)';
export class KudosNode extends TextNode {
  __kudos: string;

  static getType(): string {
    return nodeName;
  }

  static clone(node: KudosNode): KudosNode {
    return new KudosNode(node.__kudos, node.__text, node.__key);
  }

  static importJSON(serializedNode: SerializedKudosNode): KudosNode {
    const node = $createKudosNode(serializedNode.kudos);
    node.setTextContent(serializedNode.text);
    node.setFormat(serializedNode.format);
    node.setDetail(serializedNode.detail);
    node.setMode(serializedNode.mode);
    node.setStyle(serializedNode.style);
    return node;
  }

  constructor(kudosName: string, text?: string, key?: NodeKey) {
    super(text ?? kudosName, key);
    this.__kudos = kudosName;
  }

  exportJSON(): SerializedKudosNode {
    return {
      ...super.exportJSON(),
      kudos: this.__kudos,
      type: nodeName,
      version: 1
    };
  }

  createDOM(config: EditorConfig): HTMLElement {
    const dom = super.createDOM(config);
    dom.style.cssText = kudosStyle;
    dom.className = nodeName;
    return dom;
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement('span');
    element.setAttribute('data-lexical-kudos', 'true');
    element.textContent = this.__text;
    return { element };
  }

  static importDOM(): DOMConversionMap | null {
    return {
      span: (domNode: HTMLElement) => {
        if (!domNode.hasAttribute('data-lexical-kudos')) {
          return null;
        }
        return {
          conversion: convertKudosElement,
          priority: 1
        };
      }
    };
  }

  isTextEntity(): true {
    return true;
  }

  canInsertTextBefore(): boolean {
    return false;
  }

  canInsertTextAfter(): boolean {
    return false;
  }
}

export function $createKudosNode(kudosName: string): KudosNode {
  const kudosNode = new KudosNode(kudosName);
  kudosNode.setMode('segmented').toggleDirectionless();
  return $applyNodeReplacement(kudosNode);
}

export function $isKudosNode(
  node: LexicalNode | null | undefined
): node is KudosNode {
  return node instanceof KudosNode;
}
