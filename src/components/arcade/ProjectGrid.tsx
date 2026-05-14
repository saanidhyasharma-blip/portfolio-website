'use client'

import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { PROJECTS } from '@/data/projects'
import { useArcadeStore } from '@/lib/store/useArcadeStore'
import { useProjectRouting } from '@/hooks/useProjectRouting'

export default function ProjectGrid() {
  const isModalOpen = useArcadeStore((state) => state.isModalOpen)
  
  // Initialize URL-based routing
  useProjectRouting()

  return (
    <section id="projects" className="w-full py-24 md:pl-28 relative">
      <div className="container px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-white/5 pb-8">
          <div className="space-y-2">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-neon-magenta font-arcade text-[10px] tracking-[0.4em] uppercase"
            >
              System.Query(Repositories)
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-heading font-bold text-white uppercase"
            >
              Level <span className="text-neon-cyan">Select</span>
            </motion.h2>
          </div>
          
          <div className="flex items-center gap-4 text-white/30 font-mono text-xs">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
              MISSIONS_AVAILABLE: {PROJECTS.length}
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">RANK: S-CLASS</span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          animate={isModalOpen ? { opacity: 0.2, scale: 0.98, filter: 'blur(10px)' } : { opacity: 1, scale: 1, filter: 'blur(0px)' }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500"
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Cinematic Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && <ProjectModal />}
      </AnimatePresence>
    </section>
  )
}
