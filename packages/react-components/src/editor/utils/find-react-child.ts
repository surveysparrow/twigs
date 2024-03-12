import React, { ReactNode } from 'react';

export function findReactChildByType(
  parent: ReactNode,
  type: React.FC<{ children: ReactNode }> | string
): ReactNode | null {
  // Handle null and undefined cases
  if (!parent) return null;

  // Recursively traverse the children
  const childrenArray = React.Children.toArray(parent);
  for (let i = 0; i < childrenArray.length; i++) {
    const child = childrenArray[i];
    // Check if current child matches the specified type
    if (
      typeof type === 'string'
      && React.isValidElement(child)
      && child.props.___TYPE === type
    ) {
      return child;
    }

    if (React.isValidElement(child) && child.type === type) {
      return child;
    }

    // Recursively search within nested children
    if (React.isValidElement(child)) {
      const found = findReactChildByType(
        (child.props as { children: ReactNode })?.children,
        type
      );
      if (found) return found;
    }
  }
  return null;
}

export function findReactChildrenByType(
  parent: ReactNode,
  type: React.FC<{ children: ReactNode }> | string
) {
  const result: ReactNode[] = [];

  const traverseAndFind = (
    tParent: ReactNode,
    tType: React.FC<{ children: ReactNode }> | string
  ) => {
    if (!parent) return;

    // Recursively traverse the children
    React.Children.toArray(tParent).forEach((child) => {
      // Check if current child matches the specified type
      if (
        typeof type === 'string'
        && React.isValidElement(child)
        && child.props.___TYPE === type
      ) {
        result.push(child);
      } else if (React.isValidElement(child) && child.type === tType) {
        result.push(child);
      } else if (React.isValidElement(child)) {
        traverseAndFind(
          (child.props as { children: ReactNode })?.children,
          type
        );
      }
    });
  };

  traverseAndFind(parent, type);

  return result;
}
