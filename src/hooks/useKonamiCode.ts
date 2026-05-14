'use client'

import { useEffect, useState } from 'react'

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 
  'ArrowDown', 'ArrowDown', 
  'ArrowLeft', 'ArrowRight', 
  'ArrowLeft', 'ArrowRight', 
  'b', 'a'
]

export function useKonamiCode() {
  const [isTriggered, setIsTriggered] = useState(false)
  const [input, setInput] = useState<string[]>([])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const newInput = [...input, e.key]
      
      // Keep only the last N keys
      if (newInput.length > KONAMI_CODE.length) {
        newInput.shift()
      }
      
      setInput(newInput)

      if (newInput.join(',') === KONAMI_CODE.join(',')) {
        setIsTriggered(true)
        // Reset after 5 seconds
        setTimeout(() => setIsTriggered(false), 5000)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [input])

  return isTriggered
}
