import { prefixClassName } from '@src/utils';
import clsx from 'clsx';
import { ComponentProps } from 'react';
import { styled } from '../stitches.config';

const StyledImage = styled('img');

type StyledImageProps = ComponentProps<typeof StyledImage>;

export type ImageProps = Omit<StyledImageProps, 'alt'> & {
  alt: string;
};

export const Image = (props: ImageProps) => {
  return (
    <StyledImage
      {...props}
      className={clsx(prefixClassName('image'), props.className)}
    />
  );
};
