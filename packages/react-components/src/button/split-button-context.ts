import { createContext } from 'react';

type SplitButtonContextType = {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  color?: 'primary' | 'secondary';
  disabled?: boolean;
};

const defaultProps: SplitButtonContextType = {
  size: 'md',
  color: 'primary',
  disabled: false
};

export const SplitButtonContext = createContext<SplitButtonContextType>(defaultProps);
