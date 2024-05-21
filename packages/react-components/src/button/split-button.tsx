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

const StyledPrimaryButton = styled(Box, {
  'button,a': {
    borderEndEndRadius: 0,
    borderStartEndRadius: 0
  }
});

const StyledSecondaryButton = styled(Box, {
  'button,a': {
    borderEndStartRadius: 0,
    borderStartStartRadius: 0
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
      }
    }
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
          <StyledSecondaryButton color={color}>
            <ButtonContainer>{SecondaryAction}</ButtonContainer>
          </StyledSecondaryButton>
        </SplitButtonContainer>
      </SplitButtonContext.Provider>
    );
  }
);
