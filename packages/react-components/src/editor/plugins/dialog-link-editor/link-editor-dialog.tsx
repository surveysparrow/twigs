import { CloseIcon, DeleteIcon } from '@sparrowengg/twigs-react-icons';
import { Box } from '@src/box';
import { Button, IconButton } from '@src/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle
} from '@src/dialog';
import { Flex } from '@src/flex';
import { FormInput } from '@src/input';
import React, { useState } from 'react';

export const LinkEditorDialog = ({
  open,
  title,
  linkUrl,
  linkText,
  urlLabel,
  textLabel,
  cancelLabel = 'Cancel',
  updateLabel = 'Update',
  closeModal,
  removeLink,
  setIsLinkEditMode,
  handleLinkSubmission
}: {
  open: boolean;
  title: string;
  linkUrl: string;
  linkText: string;
  urlLabel: string;
  textLabel: string;
  cancelLabel?: string;
  updateLabel?: string;
  closeModal: () => void;
  removeLink: () => void;
  handleLinkSubmission: ({ text, url }: { text: string; url: string }) => void;
  setIsLinkEditMode: (isLinkEditMode: boolean) => void;
}) => {
  const [editedLinkText, setEditedLinkText] = useState(linkText);
  const [editedLinkUrl, setEditedLinkUrl] = useState(linkUrl);

  const monitorInputInteraction = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleLinkSubmission({
        text: editedLinkText,
        url: editedLinkUrl
      });
    } else if (event.key === 'Escape') {
      event.preventDefault();
      setIsLinkEditMode(false);
    }
  };

  return (
    <Dialog
      open={open}
      size="sm"
      onOpenChange={(op) => {
        if (!op) {
          closeModal();
        }
      }}
    >
      <DialogContent
        css={{
          padding: '0'
        }}
      >
        <DialogTitle
          css={{
            padding: '$8 $12',
            borderBottom: '1px solid $neutral200',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <span>{title}</span>
          <IconButton
            onClick={closeModal}
            css={{
              color: '$neutral800'
            }}
            icon={<CloseIcon />}
            color="bright"
            size="md"
          />
        </DialogTitle>
        <DialogDescription
          css={{
            padding: '$8 $12'
          }}
        >
          <FormInput
            label={textLabel}
            onChange={(event) => {
              setEditedLinkText(event.target.value);
            }}
            onKeyDown={(event) => {
              monitorInputInteraction(event);
            }}
            value={editedLinkText}
            css={{
              boxSizing: 'border-box'
            }}
          />
          <Box
            css={{
              marginTop: '$12'
            }}
          >
            <FormInput
              label={urlLabel}
              onChange={(event) => {
                setEditedLinkUrl(event.target.value);
              }}
              onKeyDown={(event) => {
                monitorInputInteraction(event);
              }}
              value={editedLinkUrl}
              css={{
                boxSizing: 'border-box'
              }}
            />
          </Box>
          <Flex
            css={{
              marginTop: '$6',
              justifyContent: 'space-between'
            }}
          >
            <IconButton
              icon={<DeleteIcon />}
              color="bright"
              size="lg"
              onClick={removeLink}
              css={{}}
            />
            <Flex
              css={{
                gap: '$6'
              }}
            >
              <Button color="default" size="lg" onClick={closeModal}>
                {cancelLabel}
              </Button>
              <Button
                color="primary"
                size="lg"
                onClick={() => handleLinkSubmission({
                  text: editedLinkText,
                  url: editedLinkUrl
                })}
              >
                {updateLabel}
              </Button>
            </Flex>
          </Flex>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
