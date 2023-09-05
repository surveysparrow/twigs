import { CSS } from '@stitches/react';
import { ButtonBaseProps, ButtonProps } from './button';
import { CircleLoaderProps, LineLoaderProps } from '../loader';
import { config } from '../../stitches.config';

const buttonSizeToLineLoaderSizeMapping: Record<
  Extract<ButtonProps['size'], string>,
  {
    size: LineLoaderProps['size'];
  } & CSS<typeof config>
> = {
  '2xl': {
    size: 'lg'
  },
  xl: {
    size: 'md',
    width: '20px'
  },
  lg: {
    size: 'sm',
    width: '20px'
  },
  md: {
    size: 'sm',
    width: '16px'
  },
  sm: {
    size: 'sm',
    width: '16px'
  },
  xs: {
    size: 'sm',
    width: '12px'
  },
  xxs: {
    size: 'sm',
    width: '12px'
  }
};

const buttonSizeToCircleLoaderSizeMapping: Record<
  Extract<ButtonProps, string>,
  {
    size: CircleLoaderProps['size'];
  } & CSS<typeof config>
> = {
  '2xl': {
    size: 'lg'
  },
  xl: {
    size: 'lg'
  },
  lg: {
    size: 'lg'
  },
  md: {
    size: 'md'
  },
  sm: {
    size: 'sm'
  },
  xs: {
    size: 'xs'
  },
  xxs: {
    size: 'xs'
  }
};

export const getLoaderIconSizeFromButtonProps = ({
  buttonSize,
  loaderType
}: {
  loaderType: ButtonBaseProps['loaderType'];
  buttonSize: ButtonProps['size'];
}) => {
  if (loaderType === 'circle') {
    return buttonSizeToCircleLoaderSizeMapping[
      typeof buttonSize === 'string' ? buttonSize : 'lg'
    ];
  }

  return buttonSizeToLineLoaderSizeMapping[
    typeof buttonSize === 'string' ? buttonSize : 'lg'
  ];
};
