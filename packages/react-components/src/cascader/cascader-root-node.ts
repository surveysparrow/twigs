import { CascaderNode } from './cascader-node';

export class CascaderRootNode extends CascaderNode {
  nodeMapping: Record<string, CascaderNode> = {};

  isRoot = true;

  constructor() {
    super('', '', []);
  }

  createNode(value: string, label: string) {
    const node = new CascaderNode(value, label, []);
    this.nodeMapping[value] = node;
    return node;
  }

  findNode(value?: string) {
    if (!value) return null;
    return this.nodeMapping[value] ?? null;
  }
}
