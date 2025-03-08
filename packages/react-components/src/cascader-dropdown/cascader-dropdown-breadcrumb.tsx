import { Flex } from '@src/flex';
import { ChevronLeftIcon, ChevronRightIcon } from '@sparrowengg/twigs-react-icons';
import { Button, IconButton } from '@src/button';
import { Box } from '@src/box';
import { Fragment } from 'react';
import { Tooltip } from '@src/tooltip';
import { Text } from '@src/text';
import { useCascaderDropdownContext } from './use-value';

const textWidth = {
  1: 104,
  2: 48,
  3: 32
};

const letterCount = {
  1: 14,
  2: 6,
  3: 3
};

export const CascaderDropdownBreadcrumb = () => {
  const { foldersSelectionPath, focusNthColumn } = useCascaderDropdownContext();

  if (foldersSelectionPath.length === 0) return null;

  return (
    <Flex
      css={{
        width: '100%',
        backgroundColor: '$secondary50',
        padding: '9px',
        overflow: 'hidden',
        borderBottom: '1px solid $neutral100',
        borderTopLeftRadius: '$xl',
        borderTopRightRadius: '$xl'
      }}
      alignItems="center"
    >
      <BackButton />
      <Box
        css={{
          width: '1px',
          height: '$4',
          backgroundColor: '$secondary100',
          margin: '0 $4',
          minWidth: '1px'
        }}
      />
      {foldersSelectionPath.map(({ value, label }, index) => (
        <Fragment key={value}>
          <Tooltip
            content={`${label}`.length > letterCount[foldersSelectionPath.length] ? `${label}` : undefined}
            className="dm-sans"
            css={{
              maxWidth: '140px',
              overflowWrap: 'anywhere',
              whiteSpace: 'break-spaces',
              zIndex: 199
            }}
          >
            <Button
              css={{
                color: '$secondary500',
                marginBottom: 0,
                padding: '0',
                height: 'auto',
                '&, &:hover, &:focus, &:active': {
                  border: 'none !important', boxShadow: 'none !important', backgroundColor: 'transparent !important'
                },
                borderRadius: '0',
                fontWeight: '$4',
                overflow: 'hidden',
                '.twigs-button__content': {
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  maxWidth: textWidth[foldersSelectionPath.length]
                },
                '&:hover': {
                  color: '$secondary700'
                }
              }}
              onClick={() => focusNthColumn(index)}
            >
              {label}
            </Button>
          </Tooltip>
          <Box css={{ flexShrink: '0', lineHeight: 0, color: '$secondary500' }}>
            <ChevronRightIcon size={16} />
          </Box>
        </Fragment>
      ))}
      <Text css={{ color: '$secondary800', marginBottom: 0, flexShrink: 0 }} weight="medium" truncate>Choose</Text>
    </Flex>
  );
};

const BackButton = () => {
  const { focusPreviousColumn } = useCascaderDropdownContext();

  return (
    <Tooltip content="Previous Level" css={{ zIndex: 199 }}>
      <IconButton
        icon={<ChevronLeftIcon />}
        onClick={() => focusPreviousColumn()}
        css={{ height: '$5', width: '$5', minWidth: '$5' }}
        color="default"
      />
    </Tooltip>
  );
};
