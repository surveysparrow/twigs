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

export type SerializedHashTagNode = Spread<
  {
    hashTagName: string;
  },
  SerializedTextNode
>;

function convertHashTagElement(
  domNode: HTMLElement
): DOMConversionOutput | null {
  const { textContent } = domNode;

  if (textContent !== null) {
    const node = $createHashTagNode(textContent);
    return {
      node
    };
  }

  return null;
}

const hashTagStyle = 'background-color: rgba(24, 119, 232, 0.2)';
export class HashTagNode extends TextNode {
  __hashTag: string;

  static getType(): string {
    return 'hashTag';
  }

  static clone(node: HashTagNode): HashTagNode {
    return new HashTagNode(node.__hashTag, node.__text, node.__key);
  }

  static importJSON(serializedNode: SerializedHashTagNode): HashTagNode {
    const node = $createHashTagNode(serializedNode.hashTagName);
    node.setTextContent(serializedNode.text);
    node.setFormat(serializedNode.format);
    node.setDetail(serializedNode.detail);
    node.setMode(serializedNode.mode);
    node.setStyle(serializedNode.style);
    return node;
  }

  constructor(hashTagName: string, text?: string, key?: NodeKey) {
    super(text ?? hashTagName, key);
    this.__hashTag = hashTagName;
  }

  exportJSON(): SerializedHashTagNode {
    return {
      ...super.exportJSON(),
      hashTagName: this.__hashTag,
      type: 'hashTag',
      version: 1
    };
  }

  createDOM(config: EditorConfig): HTMLElement {
    const dom = super.createDOM(config);
    dom.style.cssText = hashTagStyle;
    dom.className = 'hashTag';
    return dom;
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement('span');
    element.setAttribute('data-lexical-hashTag', 'true');
    element.textContent = this.__text;
    return { element };
  }

  static importDOM(): DOMConversionMap | null {
    return {
      span: (domNode: HTMLElement) => {
        if (!domNode.hasAttribute('data-lexical-hashTag')) {
          return null;
        }
        return {
          conversion: convertHashTagElement,
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

export function $createHashTagNode(hashTagName: string): HashTagNode {
  const hashTagNode = new HashTagNode(hashTagName);
  hashTagNode.setMode('segmented').toggleDirectionless();
  return $applyNodeReplacement(hashTagNode);
}

export function $isHashTagNode(
  node: LexicalNode | null | undefined
): node is HashTagNode {
  return node instanceof HashTagNode;
}
