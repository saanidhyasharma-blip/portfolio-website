import { create } from 'zustand'

interface ArcadeState {
  isBooted: boolean
  isInitializing: boolean
  setBooted: (val: boolean) => void
  setInitializing: (val: boolean) => void
}

export const useArcadeStore = create<ArcadeState>((set) => ({
  isBooted: false,
  isInitializing: false,
  setBooted: (val) => set({ isBooted: val }),
  setInitializing: (val) => set({ isInitializing: val }),
}))
