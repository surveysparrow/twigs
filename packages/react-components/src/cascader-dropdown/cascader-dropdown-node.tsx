import { CascaderDropdownDataValueType, dataTypes } from './helpers/cascader-dropdown-constants';

export interface CascaderDropdownNodeOptions {
  disabled?: boolean;
  shouldFetchOptions?: boolean;
  dataType?: keyof typeof dataTypes;
  choices?: CascaderDropdownDataValueType[];
  regex?: string;
}

export class CascaderDropdownNode {
  value: string;

  label: string;

  children: CascaderDropdownNode[];

  parent: CascaderDropdownNode | null = null;

  prevNode: CascaderDropdownNode | null = null;

  nextNode: CascaderDropdownNode | null = null;

  isRoot = false;

  disabled = false;

  shouldFetchOptions = false;

  dataFetched = false;

  loading = false;

  options: Record<string, any> = {};

  level: number = 0;

  labelPath: string = '';

  valuePath: string = '';

  type: string = '';

  constructor(
    value: string,
    label: string,
    options: CascaderDropdownNodeOptions,
    children: CascaderDropdownNode[],
    level: number,
    labelPath: string,
    valuePath: string,
    type: string
  ) {
    this.value = value;
    this.label = label;
    this.children = children;

    const { disabled, shouldFetchOptions, ...otherOptions } = options;
    this.disabled = disabled ?? false;
    this.shouldFetchOptions = shouldFetchOptions ?? false;
    this.level = level;
    this.labelPath = labelPath;
    this.valuePath = valuePath;
    this.type = type;
    this.options = otherOptions;
  }

  setParent(node: CascaderDropdownNode | null) {
    this.parent = node;
  }

  getParent() {
    return this.parent;
  }

  setPrevNode(node: CascaderDropdownNode | null) {
    this.prevNode = node;
  }

  setNextNode(node: CascaderDropdownNode | null) {
    this.nextNode = node;
  }

  getFirstChild() {
    return this.children[0] || null;
  }

  getLastChild() {
    return this.children[this.children.length - 1];
  }

  appendChild(node: CascaderDropdownNode) {
    this.children.push(node);
  }

  getLabelPath() {
    return this.labelPath;
  }

  getValuePath() {
    return this.valuePath;
  }

  getType() {
    return this.type;
  }

  getChildren() {
    return this.children;
  }
}
