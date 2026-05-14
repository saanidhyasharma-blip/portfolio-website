'use client'

import { useEffect } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { useArcadeStore } from '@/lib/store/useArcadeStore'

export function useProjectRouting() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const { selectedProjectId, setSelectedProjectId } = useArcadeStore()

  // Sync store to URL on mount and query change
  useEffect(() => {
    const projectQuery = searchParams.get('project')
    if (projectQuery && projectQuery !== selectedProjectId) {
      setSelectedProjectId(projectQuery)
    } else if (!projectQuery && selectedProjectId) {
      // If no query but store has selection, it might be a manual close or back button
      // We handle back button by clearing store
      setSelectedProjectId(null)
    }
  }, [searchParams])

  // Sync URL to store changes
  useEffect(() => {
    const currentProject = searchParams.get('project')
    if (selectedProjectId && selectedProjectId !== currentProject) {
      const params = new URLSearchParams(searchParams.toString())
      params.set('project', selectedProjectId)
      router.push(`${pathname}?${params.toString()}`, { scroll: false })
    } else if (!selectedProjectId && currentProject) {
      const params = new URLSearchParams(searchParams.toString())
      params.delete('project')
      router.push(`${pathname}`, { scroll: false })
    }
  }, [selectedProjectId])
}
