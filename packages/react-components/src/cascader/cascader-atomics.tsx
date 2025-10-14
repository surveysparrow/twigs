import { CloseIcon } from '@sparrowengg/twigs-react-icons';
import { prefixClassName } from '@src/utils';
import { ComponentProps, ReactNode } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { PopoverPortal } from '../popover';
import { styled } from '../stitches.config';
import { Text } from '../text';
import { useCascaderValue } from './use-value';

const StyledClearButton = styled('button', {
  color: '$neutral800',
  width: '$5',
  height: '$5',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  marginRight: '$12',
  justifyContent: 'center',
  backgroundColor: 'transparent'
});

export const CascaderBreadCrumb = () => {
  const { value, valueSelectionPath, componentProps } = useCascaderValue();
  if (valueSelectionPath.length === 0) {
    return null;
  }

  if (componentProps.renderBreadCrumb) {
    return componentProps.renderBreadCrumb(value ?? null, valueSelectionPath);
  }

  return (
    <Flex
      className={prefixClassName('cascader__breadcrumb')}
      css={{
        marginTop: '$2'
      }}
    >
      {valueSelectionPath.slice(0, -1).map((path, index) => {
        return (
          <Text
            size="sm"
            css={{
              color: '$neutral800'
            }}
            key={path.value}
            className={prefixClassName('cascader__breadcrumb-item')}
          >
            {path.label}
            {index < valueSelectionPath.length - 2 && (
              <Box
                as="span"
                css={{ padding: '0 $1' }}
                className={prefixClassName(
                  'cascader__breadcrumb-item-separator'
                )}
              >
                {'>'}
              </Box>
            )}
          </Text>
        );
      })}
    </Flex>
  );
};

export const CascaderInputValue = ({
  children,
  textVariant = 'dark'
}: {
  children?: ReactNode;
  textVariant?: 'light' | 'dark';
}) => {
  const { componentProps, value, valueSelectionPath } = useCascaderValue();

  if (componentProps.renderValue) {
    return componentProps.renderValue(value ?? null, valueSelectionPath);
  }

  return (
    <Box
      css={{
        marginLeft: '$5'
      }}
      className={prefixClassName('cascader__input-value')}
    >
      {componentProps.renderValueText ? (
        componentProps.renderValueText(value ?? null, valueSelectionPath)
      ) : (
        <Text
          css={{
            color: textVariant === 'dark' ? '$neutral900' : '$neutral500'
          }}
        >
          {children}
        </Text>
      )}
    </Box>
  );
};

export const CascaderClearButton = (
  props: ComponentProps<typeof StyledClearButton>
) => {
  return (
    <StyledClearButton type="button" {...props}>
      <CloseIcon />
    </StyledClearButton>
  );
};

export const PopoverContentWrapper = ({
  children,
  portalTarget
}: {
  children: ReactNode;
  portalTarget?: HTMLElement;
}) => {
  if (portalTarget) {
    return <PopoverPortal container={portalTarget}>{children}</PopoverPortal>;
  }

  return children;
};
