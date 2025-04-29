import {
  type DOMConversionMap,
  type DOMConversionOutput,
  type DOMExportOutput,
  type EditorConfig,
  type LexicalNode,
  type NodeKey,
  type SerializedTextNode,
  type Spread,
  $applyNodeReplacement,
  TextNode
} from 'lexical';

export type SerializedVariableNode = Spread<
  {
    variableName: string;
  },
  SerializedTextNode
>;

function convertVariableElement(
  domNode: HTMLElement
): DOMConversionOutput | null {
  const { textContent } = domNode;

  if (textContent !== null) {
    const node = $createVariableNode(textContent);
    return {
      node
    };
  }

  return null;
}

export class VariableNode extends TextNode {
  __variable: string;

  static getType(): string {
    return 'variable';
  }

  static clone(node: VariableNode): VariableNode {
    return new VariableNode(node.__variable, node.__text, node.__key);
  }

  static importJSON(serializedNode: SerializedVariableNode): VariableNode {
    const node = $createVariableNode(serializedNode.variableName);
    node.setTextContent(serializedNode.text);
    node.setFormat(serializedNode.format);
    node.setDetail(serializedNode.detail);
    node.setMode(serializedNode.mode);
    node.setStyle(serializedNode.style);
    return node;
  }

  constructor(variableName: string, text?: string, key?: NodeKey) {
    super(text ?? variableName, key);
    this.__variable = variableName;
  }

  exportJSON(): SerializedVariableNode {
    return {
      ...super.exportJSON(),
      variableName: this.__variable,
      type: 'variable',
      version: 1
    };
  }

  createDOM(config: EditorConfig): HTMLElement {
    const dom = super.createDOM(config);
    dom.className = 'twigs-variable';
    return dom;
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement('span');
    element.setAttribute('data-twigs-variable', 'true');
    element.textContent = this.__text;
    return { element };
  }

  static importDOM(): DOMConversionMap | null {
    return {
      span: (domNode: HTMLElement) => {
        if (!domNode.hasAttribute('data-twigs-variable')) {
          return null;
        }
        return {
          conversion: convertVariableElement,
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

export function $createVariableNode(variableName: string): VariableNode {
  const variableNode = new VariableNode(variableName);
  variableNode.setMode('token').toggleDirectionless();
  return $applyNodeReplacement(variableNode);
}

export function $isVariableNode(
  node: LexicalNode | null | undefined
): node is VariableNode {
  return node instanceof VariableNode;
}
