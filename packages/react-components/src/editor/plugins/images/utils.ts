import { LexicalCommand, createCommand } from 'lexical';
import { InsertImagePayload } from '.';

export const CAN_USE_DOM = typeof window !== 'undefined'
  && typeof window.document !== 'undefined'
  && typeof window.document.createElement !== 'undefined';

export const INSERT_IMAGE_COMMAND: LexicalCommand<InsertImagePayload> = createCommand('INSERT_IMAGE_COMMAND');
