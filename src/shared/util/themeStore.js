import { create } from 'zustand'

export const useStore = create((set) => ({
    theme: false,
    themeState: () => set((state) => ({ theme: !state.theme })),
  }))
