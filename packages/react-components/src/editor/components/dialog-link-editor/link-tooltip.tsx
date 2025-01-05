import React from 'react';
import {
  LinkIcon,
  PencilIcon,
  DeleteIcon
} from '@sparrowengg/twigs-react-icons';
import { Box } from '@src/box';
import { IconButton } from '@src/button';
import { Link } from '@src/link';
import { createPortal } from 'react-dom';

export const LinkTooltip = ({
  linkUrl,
  anchorElem,
  containerRef,
  handleEdit,
  handleDelete
}: {
  anchorElem: HTMLElement;
  containerRef: React.RefObject<HTMLDivElement>;
  linkUrl: string;
  handleEdit: () => void;
  handleDelete: () => void;
}) => {
  return createPortal(
    <Box
      ref={containerRef}
      className="link-tooltip"
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
        className="link-tooltip-icon"
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
        className="link-tooltip-link"
        css={{
          color: '$white900',
          textDecoration: 'underline',
          fontSize: '$sm',
          textOverflow: 'ellipsis',
          overflow: 'hidden'
        }}
        target="_blank"
        referrerPolicy="no-referrer"
        href={linkUrl}
      >
        {linkUrl}
      </Link>
      <Box
        className="link-tooltip-actions"
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
