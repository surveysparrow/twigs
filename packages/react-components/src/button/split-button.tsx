import React, {
  ComponentProps,
  FunctionComponent,
  ReactNode,
  useContext,
  cloneElement,
  forwardRef,
  Children
} from 'react';
import { styled } from '../stitches.config';
import { Box } from '../box';
import { Button } from './button';
import { IconButton } from './icon-button';
import { SplitButtonContext } from './split-button-context';

export interface SplitButtonBaseProps {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  color?: 'primary' | 'secondary';
  disabled?: boolean;
}

type SplitButtonProps = SplitButtonBaseProps &
  ComponentProps<typeof Box> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

interface SplitButtonContainerProps {
  children?: ReactNode;
}

const StyledSplitButtonContainer = styled(Box, {
  display: 'inline-flex',
  position: 'relative',
  alignItems: 'center',
  whiteSpace: 'nowrap'
});

const StyledSecondaryButton = styled(Box, {
  'button,a': {
    borderEndStartRadius: 0,
    borderStartStartRadius: 0,

    '&:not(:disabled):hover, &:active, &:focus': {
      borderLeftColor: 'transparent'
    }
  },
  variants: {
    color: {
      primary: {
        'button,a': {
          borderLeft: '1.5px solid $primary500'
        }
      },
      secondary: {
        'button,a': {
          borderLeft: '1.5px solid $secondary600'
        }
      },
      default: {
        'button,a': {
          borderLeft: '1.5px solid $secondary500',
          borderColorOpacity: ['$secondary500', 0.15]
        }
      },
      light: {
        'button,a': {
          borderLeft: '1.5px solid $white300'
        }
      },
      error: {
        'button,a': {
          borderLeft: '1.5px solid $negative200'
        }
      }
    },
    size: {
      xxs: {
        'button,a': {
          borderLeftWidth: '.8px'
        }
      },
      xs: {
        'button,a': {
          borderLeftWidth: '.8px'
        }
      },
      sm: {
        'button,a': {
          borderLeftWidth: '1px'
        }
      },
      md: {
        'button,a': {
          borderLeftWidth: '1px'
        }
      },
      lg: {
        'button,a': {
          borderLeftWidth: '1.2px'
        }
      },
      xl: {
        'button,a': {
          borderLeftWidth: '1.5px'
        }
      },
      '2xl': {
        'button,a': {
          borderLeftWidth: '1.5px'
        }
      }
    }
  }
});

const StyledPrimaryButton = styled(Box, {
  'button,a': {
    borderEndEndRadius: 0,
    borderStartEndRadius: 0
  },
  [`&:has(button:not(:disabled):hover, button:active, button:focus) + ${StyledSecondaryButton} button,
    &:has(a:not(:disabled):hover, a:active, a:focus) + ${StyledSecondaryButton} a`]: {
    borderLeftColor: 'transparent'
  }
});

const ButtonContainer = ({ children }: { children: ReactNode }) => {
  const { color, disabled, size } = useContext(SplitButtonContext);

  // Check if the child is a Button component
  if (
    React.isValidElement(children)
    && (children.type === Button || children.type === IconButton)
  ) {
    return cloneElement(children, {
      color,
      disabled,
      size
    } as SplitButtonBaseProps);
  }

  // If not, return the child as is
  return <>{children}</>;
};

export const SplitButtonContainer = forwardRef<
  HTMLDivElement,
  SplitButtonContainerProps
>(({ children }, ref) => (
  <StyledSplitButtonContainer ref={ref}>{children}</StyledSplitButtonContainer>
));

export const SplitButton: FunctionComponent<SplitButtonProps> = forwardRef<HTMLDivElement>(
  (
    {
      children,
      disabled = false,
      color = 'primary',
      size = 'md'
    }: SplitButtonProps,
    ref
  ) => {
    if (Children.count(children) !== 2) {
      throw new Error('SplitButton component requires exactly two children');
    }

    const [PrimaryAction, SecondaryAction] = Children.toArray(children);

    return (
      <SplitButtonContext.Provider value={{ color, disabled, size }}>
        <SplitButtonContainer ref={ref}>
          <StyledPrimaryButton>
            <ButtonContainer>{PrimaryAction}</ButtonContainer>
          </StyledPrimaryButton>
          <StyledSecondaryButton color={color} size={size}>
            <ButtonContainer>{SecondaryAction}</ButtonContainer>
          </StyledSecondaryButton>
        </SplitButtonContainer>
      </SplitButtonContext.Provider>
    );
  }
);
