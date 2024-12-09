import { CascaderNode, CascaderNodeOptions } from './cascader-node';

export class CascaderRootNode extends CascaderNode {
  nodeMapping: Record<string, CascaderNode> = {};

  isRoot = true;

  constructor() {
    super('', '', {}, []);
  }

  createNode(value: string, label: string, options: CascaderNodeOptions = {}) {
    const node = new CascaderNode(value, label, options, []);
    this.nodeMapping[value] = node;
    return node;
  }

  resetNodeWithProperties(node: CascaderNode, {
    parent
  }: {
    parent: CascaderNode | null;
  }) {
    node.resetWithProperties({ parent });
    this.nodeMapping[node.value] = node;
    return node;
  }

  findNode(value?: string) {
    if (!value) return null;
    return this.nodeMapping[value] ?? null;
  }

  getFlattenedNodes() {
    return Object.values(this.nodeMapping);
  }
}
