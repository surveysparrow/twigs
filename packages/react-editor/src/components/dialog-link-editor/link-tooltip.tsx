import { Box, IconButton, Link } from '@sparrowengg/twigs-react';
import {
  DeleteIcon,
  LinkIcon,
  PencilIcon
} from '@sparrowengg/twigs-react-icons';
import { prefixClassName } from '@src/utils/prefix-class-name';
import React from 'react';
import { createPortal } from 'react-dom';

export const LinkTooltip = ({
  linkUrl,
  anchorElem,
  containerRef,
  handleEdit,
  handleDelete,
  https
}: {
  anchorElem: HTMLElement;
  containerRef: React.RefObject<HTMLDivElement>;
  linkUrl: string;
  handleEdit: () => void;
  handleDelete: () => void;
  https: boolean;
}) => {
  return createPortal(
    <Box
      ref={containerRef}
      className={prefixClassName('link-tooltip')}
      css={{
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0,
        backgroundColor: '$black900',
        maxWidth: 280,
        borderRadius: '$lg',
        display: 'flex',
        padding: '$2 $4',
        alignItems: 'center',
        gap: '$3'
      }}
    >
      <Box
        className={prefixClassName('link-tooltip__icon')}
        css={{
          flexShrink: 0,

          svg: {
            display: 'block'
          }
        }}
      >
        <LinkIcon color="#fff" size={16} />
      </Box>
      <Link
        className={prefixClassName('link-tooltip__link')}
        css={{
          color: '$white900',
          textDecoration: 'underline',
          fontSize: '$sm',
          textOverflow: 'ellipsis',
          overflow: 'hidden'
        }}
        target="_blank"
        referrerPolicy="no-referrer"
        href={
          https && !linkUrl.startsWith('https://')
            ? `https://${linkUrl}`
            : linkUrl
        }
      >
        {linkUrl}
      </Link>
      <Box
        className={prefixClassName('link-tooltip__actions')}
        css={{
          display: 'flex',
          borderLeft: '1px solid $white600',
          margin: '$2',
          paddingLeft: '$4',
          flexShrink: 0
        }}
      >
        <IconButton
          icon={<PencilIcon strokeWidth={2} />}
          size="xs"
          color="light"
          css={{
            backgroundColor: 'transparent'
          }}
          onClick={() => {
            handleEdit();
          }}
        />
        <IconButton
          icon={<DeleteIcon strokeWidth={2} />}
          size="xs"
          color="light"
          css={{
            backgroundColor: 'transparent'
          }}
          onClick={() => {
            handleDelete();
          }}
        />
      </Box>
    </Box>,
    anchorElem
  );
};
