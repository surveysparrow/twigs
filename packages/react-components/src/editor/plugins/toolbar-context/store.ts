import { create } from 'zustand';
import { ToolbarProperties } from './utils';

interface ToolbarStore {
  data: ToolbarProperties;
  updateData: (data: Partial<ToolbarProperties>) => void;
}

export const useToolbarStore = create<ToolbarStore>()((set) => ({
  data: {
    format: 'paragraph',
    isBold: false,
    isCode: false,
    isItalic: false,
    isLink: false,
    isOrderedList: false,
    isStrikethrough: false,
    isSubscript: false,
    isSuperscript: false,
    isUnderline: false,
    isUnOrderedList: false,
    textAlign: 'left'
  },
  updateData: (data) => set((state) => ({ data: { ...state.data, ...data } }))
}));
