'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useArcadeStore } from '@/lib/store/useArcadeStore'
import { Terminal } from 'lucide-react'

const BOOT_LINES = [
  "SYSTEM_INITIALIZE: Portfolio OS v1.0.0",
  "LOADING_CORE_MODULES...",
  "VERIFYING_NEON_BUFFERS: [OK]",
  "MOUNTING_ARCADE_DRIVE: [OK]",
  "SYNCING_GITHUB_MANIFEST: [PENDING]",
  "READY_FOR_INPUT..."
]

export default function BootSequence() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [lines, setLines] = useState<string[]>([])
  const [showStart, setShowStart] = useState(false)
  const setBooted = useArcadeStore((state) => state.setBooted)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setShowStart(true)
    })

    BOOT_LINES.forEach((line, index) => {
      tl.to({}, {
        duration: 0.4 + Math.random() * 0.4,
        onStart: () => {
          setLines(prev => [...prev, line])
        }
      })
    })

    return () => {
      tl.kill()
    }
  }, [])

  const handleStart = () => {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.8,
      onComplete: () => setBooted(true)
    })
  }

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-[#050505] z-[100] flex flex-col items-center justify-center font-mono p-4"
    >
      <div className="max-w-2xl w-full">
        <div className="flex items-center gap-2 mb-6 text-neon-cyan">
          <Terminal size={24} />
          <span className="text-sm font-bold tracking-widest uppercase">System Initialization</span>
        </div>
        
        <div className="space-y-2 mb-12">
          {lines.map((line, i) => (
            <div key={i} className="text-neon-cyan/80 text-sm md:text-base flex gap-2">
              <span className="text-neon-cyan/40">[{new Date().toLocaleTimeString()}]</span>
              <span>{line}</span>
            </div>
          ))}
          <div className="w-2 h-5 bg-neon-cyan animate-pulse inline-block align-middle ml-1" />
        </div>

        {showStart && (
          <button
            onClick={handleStart}
            className="group relative px-8 py-3 border border-neon-cyan text-neon-cyan font-bold tracking-[0.2em] uppercase hover:bg-neon-cyan hover:text-black transition-all duration-300"
          >
            <span className="relative z-10">Press Start to Enter</span>
            <div className="absolute inset-0 bg-neon-cyan/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        )}
      </div>
      
      {/* Background Grid for depth */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#00f3ff_1px,transparent_1px),linear-gradient(to_bottom,#00f3ff_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    </div>
  )
}
