'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, ExternalLink, Activity, 
  Cpu, Zap, Users, ShieldAlert,
  Terminal, Layers, ChevronLeft, ChevronRight
} from 'lucide-react'
import { Project, PROJECTS } from '@/data/projects'
import { useArcadeStore } from '@/lib/store/useArcadeStore'

export default function ProjectModal() {
  const { selectedProjectId, setSelectedProjectId, isModalOpen } = useArcadeStore()
  const [isLoading, setIsLoading] = useState(true)
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  useEffect(() => {
    if (selectedProjectId) {
      const project = PROJECTS.find(p => p.id === selectedProjectId)
      setActiveProject(project || null)
      setIsLoading(true)
      const timer = setTimeout(() => setIsLoading(false), 1200) // Cinematic delay
      return () => clearTimeout(timer)
    } else {
      setActiveProject(null)
    }
  }, [selectedProjectId])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProjectId(null)
      if (e.key === 'ArrowRight') navigateProject(1)
      if (e.key === 'ArrowLeft') navigateProject(-1)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedProjectId])

  const navigateProject = (direction: number) => {
    if (!selectedProjectId) return
    const currentIndex = PROJECTS.findIndex(p => p.id === selectedProjectId)
    const nextIndex = (currentIndex + direction + PROJECTS.length) % PROJECTS.length
    setSelectedProjectId(PROJECTS[nextIndex].id)
  }

  if (!isModalOpen || !activeProject) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedProjectId(null)}
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        layoutId={`project-container-${activeProject.id}`}
        className="relative w-full max-w-6xl h-full max-h-[800px] bg-black border border-white/10 overflow-hidden flex flex-col md:flex-row"
      >
        {/* Close Button */}
        <button 
          onClick={() => setSelectedProjectId(null)}
          className="absolute top-4 right-4 z-50 p-2 text-white/40 hover:text-neon-magenta hover:bg-neon-magenta/10 transition-colors"
        >
          <div className="flex items-center gap-2 font-arcade text-[10px] tracking-tighter">
            ABORT_MISSION <X size={16} />
          </div>
        </button>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div 
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black font-mono text-neon-cyan"
            >
              <Terminal className="w-12 h-12 mb-4 animate-pulse" />
              <div className="space-y-1 text-center">
                <p className="text-xs uppercase tracking-[0.4em] animate-pulse">Initializing Mission Data...</p>
                <p className="text-[10px] text-white/20">CONNECTING_TO_CORE_GRID...</p>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full h-full flex flex-col md:flex-row overflow-y-auto md:overflow-hidden"
            >
              {/* Left Panel: Media & Telemetry */}
              <div className="w-full md:w-1/2 h-[300px] md:h-full border-b md:border-b-0 md:border-r border-white/5 relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                
                {/* Visual */}
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    src={activeProject.media.url} 
                    alt={activeProject.title}
                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                {/* Telemetry Overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-20 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-neon-magenta/10 border border-neon-magenta/20">
                      <ShieldAlert className="text-neon-magenta" size={24} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-arcade text-neon-magenta uppercase">Threat Level: {activeProject.threatLevel}</h4>
                      <p className="text-[8px] font-mono text-white/40 uppercase">Sector_Security_Status: Compromised</p>
                    </div>
                  </div>

                  <div className="bg-black/60 backdrop-blur-sm border border-white/5 p-4 space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span className="text-white/40 uppercase">System Load</span>
                      <span className="text-neon-cyan">{activeProject.systemLoad}%</span>
                    </div>
                    <div className="h-1 bg-white/5 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${activeProject.systemLoad}%` }}
                        className="h-full bg-neon-cyan" 
                      />
                    </div>
                    <div className="flex justify-between items-center text-[8px] font-mono text-white/20">
                      <span>CORE_01: ACTIVE</span>
                      <span>BUFFER: STABLE</span>
                    </div>
                  </div>
                </div>

                {/* Scanline Effect */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-30" />
              </div>

              {/* Right Panel: Content & HUD */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between overflow-y-auto">
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="px-2 py-0.5 border border-neon-cyan text-neon-cyan font-arcade text-[8px]">
                        LVL {activeProject.level}
                      </div>
                      <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                        v{activeProject.version}
                      </div>
                    </div>
                    <Activity className="text-neon-cyan/40 animate-pulse" size={20} />
                  </div>

                  <div className="space-y-4">
                    <motion.h2 
                      layoutId={`project-title-${activeProject.id}`}
                      className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight"
                    >
                      {activeProject.title}
                    </motion.h2>
                    <p className="text-white/60 font-sans leading-relaxed text-lg">
                      {activeProject.fullDescription}
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {activeProject.features.map((feature, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <Zap size={14} className="text-neon-magenta shrink-0 mt-1" />
                        <span className="text-xs font-mono text-white/40 uppercase leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-white/60 font-mono text-[10px] uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer HUD */}
                <div className="mt-12 space-y-6 pt-8 border-t border-white/5">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-white/20 font-mono text-[8px] uppercase">
                        <Cpu size={12} /> Processor
                      </div>
                      <div className="text-xs font-arcade text-white uppercase">{activeProject.aiConfidence}% AI</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-white/20 font-mono text-[8px] uppercase">
                        <Users size={12} /> Active Nodes
                      </div>
                      <div className="text-xs font-arcade text-white uppercase">{activeProject.activeUsers}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-white/20 font-mono text-[8px] uppercase">
                        <Layers size={12} /> Type
                      </div>
                      <div className="text-xs font-arcade text-white uppercase">S-CLASS</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a 
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white text-black py-4 font-arcade text-xs text-center hover:bg-neon-cyan transition-colors"
                    >
                      SOURCE_CODE()
                    </a>
                    <a 
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-white/20 text-white py-4 font-arcade text-xs text-center hover:bg-white/10 transition-colors"
                    >
                      LIVE_DEMO()
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
