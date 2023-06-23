import { ComponentProps } from "react";
import { keyframes, styled } from "../../stitches.config";

const moveRght = keyframes({
  '0%': {
    transform: 'translateX(-20px)'
  },
  '50%': {
    transform: 'translateX(20px)'
  },
  '60%': {
    transform: 'translateX(90px)'
  },
  '100%': {
    transform: 'translateX(100px)'
  }
});

const ProgressIndicator = styled("span", {
  display: 'block',
  position: 'relative',
  backgroundColor: '$white900',
  borderRadius: '$pill',
  animation: `${moveRght} 2s cubic-bezier(0.51, 0, 0, 1) 0s infinite normal none running`,
  // animationTimingFunction: 'cubic-bezier(0.445,  0.050, 0.550, 0.950)'
});

const StyledContainer = styled("span", {
  display: 'block',
  backgroundColor: '$white600',
  borderRadius: '$pill',
  overflow: 'hidden',
  variants: {
    size: {
      '2xl': {
        width: 24,
        height: 6,
        marginRight: '$4',
        [`& ${ProgressIndicator}`]: {
          width: 10,
          height: 6
        }
      },
      'xl': {
        width: 20,
        height: 5,
        marginRight: '$4',
        [`& ${ProgressIndicator}`]: {
          width: 10,
          height: 5
        }
      },
      'lg': {
        width: 20,
        height: 4,
        marginRight: '$4',
        [`& ${ProgressIndicator}`]: {
          width: 10,
          height: 4
        }
      },
      'md': {
        width: 16,
        height: 4,
        marginRight: '$4',
        [`& ${ProgressIndicator}`]: {
          width: 10,
          height: 4
        }
      },
      'sm': {
        width: 12,
        height: 3,
        marginRight: '$2',
        [`& ${ProgressIndicator}`]: {
          width: 8,
          height: 3
        }
      },
      'xs': {
        width: 10,
        height: 3,
        marginRight: '$2',
        [`& ${ProgressIndicator}`]: {
          width: 10,
          height: 3
        }
      },
      'xxs': {
        width: 8,
        height: 3,
        marginRight: '$2',
        [`& ${ProgressIndicator}`]: {
          width: 8,
          height: 3
        }
      }
    }
  },
  defaultVariants: {
    size: 'sm'
  }
});

type ButtonProgressProps = ComponentProps<typeof StyledContainer>;

export const ButtonProgress = ({
  size,
  ...rest
}: ButtonProgressProps) => {
  return (
    <StyledContainer size={size} {...rest}>
      <ProgressIndicator />
    </StyledContainer>
  )
}