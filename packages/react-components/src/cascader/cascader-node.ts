export interface CascaderNodeOptions {
  disabled?: boolean;
  shouldFetchOptions?: boolean;
}

export class CascaderNode {
  value: string;

  label: string;

  children: CascaderNode[] = [];

  parent: CascaderNode | null = null;

  prevNode: CascaderNode | null = null;

  nextNode: CascaderNode | null = null;

  isRoot = false;

  disabled = false;

  shouldFetchOptions = false;

  dataFetched = false;

  loading = false;

  options: Record<string, any> = {};

  constructor(
    value: string,
    label: string,
    options: CascaderNodeOptions,
    children: CascaderNode[]
  ) {
    this.value = value;
    this.label = label;
    this.children = children;

    const { disabled, shouldFetchOptions, ...otherOptions } = options;
    this.disabled = disabled ?? false;
    this.shouldFetchOptions = shouldFetchOptions ?? false;
    this.options = otherOptions;
  }

  getData() {
    return {
      label: this.label,
      value: this.value,
      ...this.options
    };
  }

  resetWithProperties({
    parent
  }: {
    parent: CascaderNode | null;
  }) {
    this.children = [];
    if (parent) {
      this.setParent(parent);
    }

    return this;
  }

  setParent(parent: CascaderNode) {
    this.parent = parent;
  }

  getParent() {
    if (this.parent?.isRoot) return null;
    return this.parent ?? null;
  }

  setPrevNode(prevNode: CascaderNode | null) {
    this.prevNode = prevNode;
  }

  setNextNode(nextNode: CascaderNode | null) {
    this.nextNode = nextNode;
  }

  getFirstChild() {
    return this.children[0] || null;
  }

  getLastChild() {
    return this.children.at(-1) || null;
  }

  getChildren() {
    return this.children;
  }

  getAncestors() {
    let ancestors: CascaderNode[] = [];
    let parent = this.getParent();

    while (parent) {
      ancestors = [parent, ...ancestors];
      parent = parent.getParent();
    }

    return ancestors;
  }

  appendChild(child: CascaderNode) {
    child.setParent(this);
    this.children.push(child);
  }

  setDataFetched(fetched = true) {
    this.dataFetched = fetched;
  }

  setLoading(loading = true) {
    this.loading = loading;
  }
}
