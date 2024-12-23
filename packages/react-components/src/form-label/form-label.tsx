import * as LabelPrimitive from '@radix-ui/react-label';
import { InfoIcon } from '@sparrowengg/twigs-react-icons';
import { ComponentProps } from '@stitches/react';
import React, {
  ReactElement,
  ReactNode,
  forwardRef,
  isValidElement
} from 'react';
import { Flex } from '../flex';
import { styled } from '../stitches.config';
import { Text } from '../text';
import { Tooltip, TooltipProvider } from '../tooltip';

export type FormLabelProps = React.HTMLAttributes<HTMLLabelElement> & {
  as?: React.ElementType;
  requiredIndicator?: ReactElement | boolean;
  info?: string | ReactNode;
  rightAddon?: ReactNode;
  containerRef?: React.Ref<HTMLDivElement>;
};

const StyledFormLabel = styled(LabelPrimitive.Root, {
  display: 'block',
  color: '$neutral800',
  fontWeight: '$4',
  userSelect: 'none',
  variants: {
    size: {
      xs: {
        fontSize: '$xs',
        lineHeight: '$xs'
      },
      sm: {
        fontSize: '$sm',
        lineHeight: '$sm'
      }
    }
  },
  defaultVariants: {
    size: 'sm'
  }
});

const StyledText = styled(Text, {
  color: '$negative600',
  paddingTop: '$1'
});

const IconContainer = styled('span', {
  svg: {
    width: '14px',
    height: '14px',
    color: '$neutral800',
    display: 'block',

    '& path:first-child': {
      fill: 'rgba(0, 0, 0, 0.08)',
      stroke: 'none'
    }
  }
});

// FormLabelProps & ComponentProps<typeof StyledFormLabel>
export const FormLabel = forwardRef<
  HTMLLabelElement,
  FormLabelProps & ComponentProps<typeof StyledFormLabel>
>(({
  children, requiredIndicator = false, info, as, rightAddon, containerRef, ...rest
}, ref) => {
  if (
    !isValidElement(requiredIndicator)
    && typeof requiredIndicator !== 'boolean'
  ) {
    throw Error('requiredIndicator is not a valid component');
  }
  return (
    <Flex
      justifyContent="space-between"
      css={{
        flex: '1 1 auto'
      }}
      ref={containerRef}
    >
      <Flex gap="$1" alignItems="center">
        <StyledFormLabel as={as} {...rest} ref={ref}>
          {children}
        </StyledFormLabel>
        {requiredIndicator === true ? (
          <StyledText data-testid="label-required-indicator">*</StyledText>
        ) : null}
        {typeof requiredIndicator !== 'boolean'
          ? React.cloneElement(requiredIndicator)
          : null}
        {info && (
          <>
            {typeof info === 'string' ? (
              <TooltipProvider>
                <Tooltip content={info}>
                  <IconContainer>
                    <InfoIcon />
                  </IconContainer>
                </Tooltip>
              </TooltipProvider>
            ) : (
              info
            )}
          </>
        )}
      </Flex>
      {rightAddon}
    </Flex>
  );
});
