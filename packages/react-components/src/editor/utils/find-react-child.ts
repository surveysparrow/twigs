import React, { ReactNode } from 'react';

export function findReactChildByType(
  parent: ReactNode,
  type: React.FC<{ children: ReactNode }>
): ReactNode | null {
  // Handle null and undefined cases
  if (!parent) return null;

  // Recursively traverse the children
  return React.Children.toArray(parent).find((child) => {
    // Check if current child matches the specified type
    if (React.isValidElement(child) && child.type === type) {
      return child;
    }

    // Recursively search within nested children
    return (
      React.isValidElement(child)
      && findReactChildByType(
        (child.props as { children: ReactNode })?.children,
        type
      )
    );
  });
}

export function findReactChildrenByType(
  parent: ReactNode,
  type: React.FC<{ children: ReactNode }>
) {
  const result: ReactNode[] = [];

  const traverseAndFind = (
    tParent: ReactNode,
    tType: React.FC<{ children: ReactNode }>
  ) => {
    if (!parent) return;

    // Recursively traverse the children
    React.Children.toArray(tParent).forEach((child) => {
      // Check if current child matches the specified type
      if (React.isValidElement(child) && child.type === tType) {
        result.push(child);
      }

      // Recursively search within nested children
      if (React.isValidElement(child)) {
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
