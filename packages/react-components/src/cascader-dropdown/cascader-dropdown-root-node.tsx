import { CascaderDropdownNode, CascaderDropdownNodeOptions } from './cascader-dropdown-node';

export class CascaderDropdownRootNode extends CascaderDropdownNode {
  nodeMapping: Record<string, CascaderDropdownNode> = {};

  pathNodeMapping: Record<string, CascaderDropdownNode> = {};

  pathMapping: Map<string, string> = new Map();

  isRoot = true;

  level = 0;

  labelPath: string = '';

  valuePath: string = '';

  constructor() {
    super('', '', {}, [], 0, '', '', '');
  }

  createNode({
    value,
    label,
    options,
    level,
    labelPath,
    valuePath,
    type
  }: {
    value: string | number,
    label: string | number,
    options: CascaderDropdownNodeOptions,
    level: number,
    labelPath: string,
    valuePath: string,
    type: string,
  }) {
    const node = new CascaderDropdownNode(value, label, options, [], level, labelPath, valuePath, type);
    this.nodeMapping[value] = node;
    this.pathNodeMapping[valuePath] = node;
    this.pathMapping.set(valuePath, labelPath.toLowerCase());

    return node;
  }

  findNode(value?: string | number | null) {
    if (!value) return null;
    return this.nodeMapping[value];
  }

  findNodeByPath(path?: string | null) {
    if (!path) return null;
    return this.pathNodeMapping[path];
  }

  getFlattenedNodes() {
    return Object.values(this.pathNodeMapping);
  }

  getFlattenedPaths() {
    return Object.keys(this.pathNodeMapping);
  }
}
