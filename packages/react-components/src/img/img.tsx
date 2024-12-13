import { prefixClassName } from '@src/utils';
import clsx from 'clsx';
import { ComponentProps } from 'react';
import { styled } from '../stitches.config';

const StyledImage = styled('img');

type StyledImageProps = ComponentProps<typeof StyledImage>;

export type ImgProps = Omit<StyledImageProps, 'alt'> & {
  alt: string;
};

export const Img = (props: ImgProps) => {
  return (
    <StyledImage
      {...props}
      className={clsx(prefixClassName('img'), props.className)}
    />
  );
};
