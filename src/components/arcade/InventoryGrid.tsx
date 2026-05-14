'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { SKILLS, SkillCategory } from '@/data/skills'
import InventoryItem from './InventoryItem'
import { useArcadeStore } from '@/lib/store/useArcadeStore'
import { Package, Terminal, Cpu, BrainCircuit, Toolbox } from 'lucide-react'

const CATEGORIES: { id: SkillCategory | 'ALL', label: string, icon: any }[] = [
  { id: 'ALL', label: 'All Items', icon: Package },
  { id: 'LANGUAGES', label: 'Scripts', icon: Terminal },
  { id: 'FRAMEWORKS', label: 'Engines', icon: Cpu },
  { id: 'AI_ML', label: 'Neural', icon: BrainCircuit },
  { id: 'TOOLS', label: 'Utils', icon: Toolbox },
]

export default function InventoryGrid() {
  const { activeInventoryCategory, setInventoryCategory } = useArcadeStore()
  
  const filteredSkills = SKILLS.filter(skill => 
    activeInventoryCategory === 'ALL' || skill.category === activeInventoryCategory
  )

  return (
    <div className="space-y-6">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon
          const isActive = activeInventoryCategory === cat.id
          
          return (
            <button
              key={cat.id}
              onClick={() => setInventoryCategory(cat.id)}
              className={`
                flex items-center gap-2 px-4 py-2 border transition-all duration-300
                ${isActive 
                  ? 'bg-neon-cyan/20 border-neon-cyan text-neon-cyan shadow-[0_0_10px_rgba(0,255,255,0.2)]' 
                  : 'bg-white/5 border-white/10 text-white/40 hover:border-white/30 hover:bg-white/10'
                }
              `}
            >
              <Icon size={14} />
              <span className="text-[10px] font-arcade uppercase tracking-tighter">
                {cat.label}
              </span>
            </button>
          )
        })}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <InventoryItem skill={skill} />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Empty Slots to fill the grid (optional aesthetic) */}
        {Array.from({ length: Math.max(0, 16 - filteredSkills.length) }).map((_, i) => (
          <div 
            key={`empty-${i}`}
            className="aspect-square border border-white/5 bg-black/20"
          />
        ))}
      </motion.div>

      {/* Footer Info */}
      <div className="flex items-center justify-between text-[8px] font-mono text-white/20 uppercase tracking-widest pt-2 border-t border-white/5">
        <span>Displaying_{filteredSkills.length}_Capabilities</span>
        <span>Storage_Status: Optimal</span>
      </div>
    </div>
  )
}
