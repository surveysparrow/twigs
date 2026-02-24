import { CSS } from '@stitches/react';
import { prefixClassName } from '@src/utils';
import { FlexiPillBaseProps, FlexiPillProps } from './flexi-pill';
import { CircleLoaderProps, LineLoaderProps } from '../loader';
import { config } from '../stitches.config';

const flexiPillSizeToLineLoaderSizeMapping: Record<
  Extract<FlexiPillProps['size'], string>,
  {
    size: LineLoaderProps['size'];
  } & CSS<typeof config>
> = {
  lg: {
    size: 'sm',
    width: '$5'
  },
  md: {
    size: 'sm',
    width: '$4'
  },
  sm: {
    size: 'sm',
    width: '$4'
  }
};

const flexiPillSizeToCircleLoaderSizeMapping: Record<
  Extract<FlexiPillProps, string>,
  {
    size: CircleLoaderProps['size'];
  } & CSS<typeof config>
> = {
  lg: {
    size: 'lg'
  },
  md: {
    size: 'md'
  },
  sm: {
    size: 'sm'
  }
};

export const getLoaderIconSizeFromFlexiPillProps = ({
  flexiPillSize,
  loaderType
}: {
  loaderType: FlexiPillBaseProps['loader'];
  flexiPillSize: FlexiPillProps['size'];
}) => {
  if (loaderType === 'circle') {
    return flexiPillSizeToCircleLoaderSizeMapping[
      typeof flexiPillSize === 'string' ? flexiPillSize : 'lg'
    ];
  }

  return flexiPillSizeToLineLoaderSizeMapping[
    typeof flexiPillSize === 'string' ? flexiPillSize : 'lg'
  ];
};

export const FLEXI_PILL_CLASSNAMES = {
  flexiPill: prefixClassName('flexiPill'),
  iconContainer: prefixClassName('flexiPill__icon-container'),
  iconBox: prefixClassName('flexiPill__icon-box'),
  loader: prefixClassName('flexiPill__loader'),
  content: prefixClassName('flexiPill__content'),
  loading: prefixClassName('flexiPill--loading'),
  disabled: prefixClassName('flexiPill--disabled'),
  sideElement: prefixClassName('flexiPill__side-element'),
  sideElementLoaderHidden: prefixClassName('flexiPill__side-element--loader-hidden'),
  sideElementIconHidden: prefixClassName('flexiPill__side-element--icon-hidden')
};
