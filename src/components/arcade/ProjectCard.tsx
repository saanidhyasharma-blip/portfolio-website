'use client'

import { motion } from 'framer-motion'
import { ExternalLink, GitBranch, Layers, Activity } from 'lucide-react'
import { Project } from '@/data/projects'
import { useArcadeStore } from '@/lib/store/useArcadeStore'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const setSelectedProjectId = useArcadeStore((state) => state.setSelectedProjectId)

  const handleMouseEnter = () => {
    // Prefetch image
    const img = new Image()
    img.src = project.media.url
  }

  return (
    <motion.div
      layoutId={`project-container-${project.id}`}
      onClick={() => setSelectedProjectId(project.id)}
      onMouseEnter={handleMouseEnter}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative bg-black/40 border border-white/10 p-6 rounded-none overflow-hidden cursor-pointer hover:border-neon-cyan/50 transition-colors"
    >
      {/* Level Badge */}
      <div className="absolute top-0 right-0 px-3 py-1 bg-neon-cyan text-black font-arcade text-[8px] tracking-tighter">
        LVL {project.level}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-neon-cyan/60">
            <Layers size={14} />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Mission Data</span>
          </div>
          <div className="flex items-center gap-1.5 text-[8px] font-mono text-neon-magenta/80">
            <Activity size={10} className="animate-pulse" />
            <span>STATUS: {project.status}</span>
          </div>
        </div>

        <motion.h3 
          layoutId={`project-title-${project.id}`}
          className="text-xl font-heading font-bold text-white group-hover:text-neon-cyan transition-colors uppercase tracking-tight"
        >
          {project.title}
        </motion.h3>

        <p className="text-sm text-white/50 font-sans line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((t) => (
            <span key={t} className="text-[9px] font-mono px-2 py-0.5 border border-white/10 text-white/40">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 opacity-40 group-hover:opacity-100 transition-opacity">
          <div className="flex gap-4">
            {project.github && <GitBranch size={16} className="text-white hover:text-neon-magenta" />}
            {project.link && <ExternalLink size={16} className="text-white hover:text-neon-magenta" />}
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[8px] font-arcade text-neon-cyan">Initialize_Mission()</span>
            <span className="text-[6px] font-mono text-white/20">THREAT: {project.threatLevel}</span>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-neon-cyan/5 blur-[50px] group-hover:bg-neon-cyan/10 transition-colors" />
    </motion.div>
  )
}
