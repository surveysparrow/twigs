import * as RadixSlider from '@radix-ui/react-slider';
import {
  ComponentProps,
  ElementType,
  ReactNode,
  forwardRef,
  isValidElement,
  useCallback
} from 'react';
import { Box } from '../box';
import { Flex, FlexProps } from '../flex';
import { styled } from '../stitches.config';
import { Text } from '../text';

const StyledThumb = styled(RadixSlider.Thumb, {
  display: 'block',
  width: '20px',
  height: '20px',
  backgroundColor: '$primary800',
  borderRadius: '50%',
  boxShadow: '0 0 0px transparent',
  transition: 'all 0.25s ease',

  '&[data-disabled]': {
    cursor: 'not-allowed'
  },

  '&:hover:not([data-disabled])': {
    $$shadowColor: '$colors$primary300',
    boxShadow: '0 0 10px $$shadowColor',
    backgroundColor: '$primary900'
  },

  '&:focus': {
    $$shadowColor: '$colors$primary300',
    boxShadow: '0 0 0 2px $$shadowColor',
    outline: 'none'
  }
});

const StyledTrack = styled(RadixSlider.Track, {
  backgroundColor: '$accent100',
  position: 'relative',
  flexGrow: '1',
  borderRadius: '9999px',
  height: '$1'
});

const StyledRoot = styled(RadixSlider.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  width: '100%',
  height: '20px',

  '&[aria-disabled="true"]': {
    opacity: 0.4
  },

  variants: {
    size: {
      sm: {
        height: '$3',

        [`${StyledThumb}`]: {
          width: '$3',
          height: '$3'
        },

        [`${StyledTrack}`]: {
          height: '2px'
        }
      },
      md: {
        height: '$5',

        [`${StyledThumb}`]: {
          width: '$5',
          height: '$5'
        }
      },
      lg: {
        height: '$8',

        [`${StyledThumb}`]: {
          width: '$8',
          height: '$8'
        }
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

const StyledRange = styled(RadixSlider.Range, {
  position: 'absolute',
  backgroundColor: '$primary800',
  borderRadius: '9999px',
  height: '100%'
});

type SliderBaseProps = {
  components?: {
    Track?: ElementType;
    Range?: ElementType;
    Thumb?: ElementType;
    ThumbLeft?: ElementType;
    ThumbRight?: ElementType;
  };
  labels?: {
    left?: string | ReactNode;
    right?: string | ReactNode;
  };
  labelPlacement?: 'top' | 'bottom';
};

export type SliderProps = RadixSlider.SliderProps &
  ComponentProps<typeof StyledRoot> &
  SliderBaseProps;

export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  ({ labelPlacement = 'top', ...props }, ref) => {
    const TrackAndRange = useCallback(() => {
      const RangeComp = props.components?.Range ?? StyledRange;
      const TrackComp = props.components?.Track ?? StyledTrack;

      return (
        <TrackComp>
          <RangeComp />
        </TrackComp>
      );
    }, [props.components?.Range, props.components?.Track]);

    const RenderThumb = useCallback(() => {
      const val = props.value ?? props.defaultValue;
      if (Array.isArray(val) && val.length > 1) {
        const Left = props.components?.ThumbLeft ?? props.components?.Thumb ?? StyledThumb;
        const Right = props.components?.ThumbRight
          ?? props.components?.Thumb
          ?? StyledThumb;

        return (
          <>
            <Left />
            <Right />
          </>
        );
      }

      const Comp = props.components?.Thumb ?? StyledThumb;
      return <Comp />;
    }, [
      props.components?.ThumbLeft,
      props.components?.ThumbRight,
      props.components?.Thumb
    ]);

    const RenderLabel = useCallback(
      (labelProps: FlexProps) => {
        if (!props.labels?.left && !props.labels?.right) return null;

        return (
          <Flex justifyContent="space-between" {...labelProps}>
            <LabelText value={props.labels?.left} />
            <LabelText value={props.labels?.right} />
          </Flex>
        );
      },
      [props.labels?.left, props.labels?.right]
    );

    return (
      <Box
        css={{
          display: 'inline-flex',
          flexDirection: 'column',
          width: '100%'
        }}
        ref={ref}
      >
        {labelPlacement === 'top' && (
          <RenderLabel css={{ marginBottom: '$3' }} />
        )}
        <StyledRoot defaultValue={[0]} max={100} step={1} {...props}>
          <TrackAndRange />
          <RenderThumb />
        </StyledRoot>
        {labelPlacement === 'bottom' && (
          <RenderLabel css={{ marginTop: '$3' }} />
        )}
      </Box>
    );
  }
);

const LabelText = ({ value }: { value?: ReactNode | string }) => {
  if (!value) return null;

  if (isValidElement(value)) {
    return value;
  }

  return <Text size="sm">{value}</Text>;
};

export const SliderTrack = StyledTrack;
export const SliderRange = StyledRange;
export const SliderThumb = StyledThumb;
