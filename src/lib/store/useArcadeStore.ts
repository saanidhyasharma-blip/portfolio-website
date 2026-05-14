import { create } from 'zustand'
import { SkillCategory } from '@/data/skills'

interface ArcadeState {
  isBooted: boolean
  isInitializing: boolean
  selectedProjectId: string | null
  isModalOpen: boolean
  activeInventoryCategory: SkillCategory | 'ALL'
  selectedSkillId: string | null
  selectedMissionId: string | null
  githubData: {
    stats: any | null
    repos: any[]
  }
  isGithubLoading: boolean
  githubError: string | null
  
  setBooted: (val: boolean) => void
  setInitializing: (val: boolean) => void
  setSelectedProjectId: (id: string | null) => void
  setModalOpen: (open: boolean) => void
  setInventoryCategory: (category: SkillCategory | 'ALL') => void
  setSelectedSkillId: (id: string | null) => void
  setSelectedMissionId: (id: string | null) => void
  setGithubData: (data: any) => void
  setGithubLoading: (val: boolean) => void
  setGithubError: (err: string | null) => void
}

export const useArcadeStore = create<ArcadeState>((set) => ({
  isBooted: false,
  isInitializing: false,
  selectedProjectId: null,
  isModalOpen: false,
  activeInventoryCategory: 'ALL',
  selectedSkillId: null,
  selectedMissionId: null,
  githubData: {
    stats: null,
    repos: []
  },
  isGithubLoading: false,
  githubError: null,
 
  setBooted: (val) => set({ isBooted: val }),
  setInitializing: (val) => set({ isInitializing: val }),
  setSelectedProjectId: (id) => set({ selectedProjectId: id, isModalOpen: !!id }),
  setModalOpen: (open) => set({ isModalOpen: open, selectedProjectId: open ? useArcadeStore.getState().selectedProjectId : null }),
  setInventoryCategory: (category) => set({ activeInventoryCategory: category }),
  setSelectedSkillId: (id) => set({ selectedSkillId: id }),
  setSelectedMissionId: (id) => set({ selectedMissionId: id }),
  setGithubData: (data) => set({ githubData: data }),
  setGithubLoading: (val) => set({ isGithubLoading: val }),
  setGithubError: (err) => set({ githubError: err }),
}))
