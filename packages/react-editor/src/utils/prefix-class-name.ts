import { config } from '@sparrowengg/twigs-react';

export const prefixClassName = (className: string) => {
  return `${config.prefix}-${className}`;
};
