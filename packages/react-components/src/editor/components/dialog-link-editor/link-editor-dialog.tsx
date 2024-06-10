import { CloseIcon, DeleteIcon } from '@sparrowengg/twigs-react-icons';
import { Box } from '@src/box';
import { Button, IconButton } from '@src/button';
import { Dialog, DialogContent, DialogTitle } from '@src/dialog';
import { Flex } from '@src/flex';
import { FormInput } from '@src/input';
import { Text } from '@src/text';
import React, { useState } from 'react';

export const LinkEditorDialog = ({
  open,
  title,
  errors,
  linkUrl,
  linkText,
  urlLabel,
  isUpdate,
  textLabel,
  saveLabel = 'Save',
  cancelLabel = 'Cancel',
  updateLabel = 'Update',
  errorLabels,
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
  isUpdate?: boolean;
  textLabel: string;
  saveLabel?: string;
  cancelLabel?: string;
  updateLabel?: string;
  errorLabels?: {
    text?: string;
    url?: string;
  };
  closeModal: () => void;
  removeLink: () => void;
  handleLinkSubmission: ({ text, url }: { text: string; url: string }) => void;
  setIsLinkEditMode: (isEditMode: boolean) => void;
  errors: {
    text: boolean;
    url: boolean;
  };
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
          <Text weight="bold" size="lg">
            {title}
          </Text>
          <IconButton
            onClick={closeModal}
            css={{
              color: '$neutral800'
            }}
            icon={<CloseIcon />}
            color="bright"
            size="lg"
          />
        </DialogTitle>
        <Box
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
            error={
              errors.text
                ? errorLabels?.text ?? 'Please enter a valid text'
                : undefined
            }
          />
          <Box
            css={{
              marginTop: '$10'
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
              error={
                errors.url
                  ? errorLabels?.url ?? 'Please enter a valid URL'
                  : undefined
              }
            />
          </Box>
        </Box>
        <Flex
          justifyContent="space-between"
          css={{
            padding: '$8 $12'
          }}
        >
          <IconButton
            icon={<DeleteIcon />}
            color="bright"
            size="lg"
            onClick={removeLink}
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
              disabled={
                editedLinkText === linkText && editedLinkUrl === linkUrl
              }
              onClick={() => handleLinkSubmission({
                text: editedLinkText,
                url: editedLinkUrl
              })}
            >
              {isUpdate ? updateLabel : saveLabel}
            </Button>
          </Flex>
        </Flex>
      </DialogContent>
    </Dialog>
  );
};
