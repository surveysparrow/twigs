import { config } from '../stitches.config';

export const prefixClassName = (className: string) => {
  return `${config.prefix}-${className}`;
};
