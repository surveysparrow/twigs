export class CascaderNode {
  value: string;

  label: string;

  children: CascaderNode[] = [];

  parent?: CascaderNode;

  prevNode: CascaderNode | null = null;

  nextNode: CascaderNode | null = null;

  isRoot = false;

  constructor(value: string, label: string, children: CascaderNode[]) {
    this.value = value;
    this.label = label;
    this.children = children;
  }

  setParent(parent: CascaderNode) {
    this.parent = parent;
  }

  getParent() {
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

  appendChild(child: CascaderNode) {
    child.setParent(this);
    this.children.push(child);
  }
}
