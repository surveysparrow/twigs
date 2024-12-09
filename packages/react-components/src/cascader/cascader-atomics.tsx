import { prefixClassName } from '@src/utils';
import { ReactNode } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { PopoverPortal } from '../popover';
import { Text } from '../text';
import { useCascaderValue } from './use-value';

export const CascaderBreadCrumb = () => {
  const { value, valueSelectionPath, componentProps } = useCascaderValue();
  if (valueSelectionPath.length === 0) {
    return null;
  }

  if (componentProps.renderBreadCrumb) {
    return componentProps.renderBreadCrumb(value ?? null, valueSelectionPath);
  }

  return (
    <Flex className={prefixClassName('cascader__breadcrumb')}>
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

export const CascaderInputValue = ({ children }: { children?: ReactNode }) => {
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
            color: '$neutral900'
          }}
        >
          {children}
        </Text>
      )}
    </Box>
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
