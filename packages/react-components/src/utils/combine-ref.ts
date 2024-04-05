import React from 'react';

/**
 * Handles setting callback refs and MutableRefObjects.
 * @param ref The ref to use for the instance.
 * @param instance The instance being set.
 */
function setRef<TInstance>(ref: React.Ref<TInstance>, instance: TInstance) {
  if (ref instanceof Function) {
    ref(instance);
  } else if (ref != null) {
    (ref as React.MutableRefObject<TInstance>).current = instance;
  }
}

export function combinedRef<TInstance>(refs: React.Ref<TInstance>[]) {
  return (instance: TInstance | null) => refs.forEach((ref) => setRef(ref, instance));
}

// CREDIT https://github.com/radix-ui/primitives/blob/main/packages/react/compose-refs/src/composeRefs.tsx
/**
 * Create a ref that passes its instance to multiple refs.
 * @param refs The refs that should receive the instance.
 * @returns The combined ref.
 */
export function useMultipleRefs<TInstance>(...refs: React.Ref<TInstance>[]) {
  return React.useCallback(combinedRef(refs), refs);
}
