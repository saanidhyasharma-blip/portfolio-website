'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { SKILLS, SkillRarity } from '@/data/skills'
import { useArcadeStore } from '@/lib/store/useArcadeStore'
import { Shield, Target, Zap, Clock, Info } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const RARITY_LABELS: Record<SkillRarity, string> = {
  COMMON: 'S-CLASS_CORE',
  RARE: 'A-CLASS_ADVANCED',
  EPIC: 'ELITE_SPEC_MOD',
  LEGENDARY: 'OMEGA_LEVEL_TECH'
}

export default function InventoryStats() {
  const { selectedSkillId } = useArcadeStore()
  const skill = SKILLS.find(s => s.id === selectedSkillId)

  if (!skill) {
    return (
      <div className="h-full flex flex-col items-center justify-center border border-dashed border-white/10 p-8 text-center bg-black/40">
        <Info className="text-white/10 mb-4" size={48} />
        <p className="text-[10px] font-arcade text-white/20 uppercase tracking-widest">
          Select_Item_To_Analyze_Capability
        </p>
      </div>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={skill.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="h-full flex flex-col border border-white/10 bg-black/60 backdrop-blur-md"
      >
        {/* Header HUD */}
        <div className="p-6 border-b border-white/10 space-y-2">
          <div className="flex items-center justify-between">
            <span className={cn(
              "text-[10px] font-arcade px-2 py-0.5 border",
              skill.rarity === 'LEGENDARY' ? 'border-amber-500/50 text-amber-500' :
              skill.rarity === 'EPIC' ? 'border-purple-500/50 text-purple-500' :
              skill.rarity === 'RARE' ? 'border-blue-500/50 text-blue-500' : 'border-white/20 text-white/40'
            )}>
              {RARITY_LABELS[skill.rarity]}
            </span>
            <span className="text-[8px] font-mono text-white/20">UUID: {skill.id.toUpperCase()}</span>
          </div>
          <h3 className="text-3xl font-heading font-bold text-white uppercase tracking-tight">
            {skill.name}
          </h3>
        </div>

        {/* Lore Section */}
        <div className="p-6 space-y-4 flex-1 overflow-y-auto">
          <div className="space-y-1">
            <h4 className="text-[10px] font-arcade text-neon-cyan uppercase">Internal_Lore</h4>
            <p className="text-xs font-sans text-white/60 leading-relaxed italic">
              "{skill.lore}"
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="text-[10px] font-arcade text-neon-magenta uppercase">System_Description</h4>
            <p className="text-xs font-sans text-white/50 leading-relaxed">
              {skill.description}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[9px] font-mono text-white/30 uppercase">
                <Target size={12} /> Mastery_Level
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden relative">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.mastery}%` }}
                  className={cn(
                    "h-full rounded-full",
                    skill.rarity === 'LEGENDARY' ? 'bg-amber-500' :
                    skill.rarity === 'EPIC' ? 'bg-purple-500' :
                    skill.rarity === 'RARE' ? 'bg-blue-500' : 'bg-neon-cyan'
                  )}
                />
              </div>
              <div className="flex justify-between text-[9px] font-mono">
                <span className="text-white/20">INITIATE</span>
                <span className="text-white">{skill.mastery}%</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[9px] font-mono text-white/30 uppercase">
                <Clock size={12} /> Active_Runtime
              </div>
              <div className="flex items-end gap-1">
                <span className="text-2xl font-arcade text-white">{skill.yearsOfExperience}</span>
                <span className="text-[10px] font-mono text-white/40 mb-1">CYCLES</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer HUD */}
        <div className="p-6 border-t border-white/10 bg-white/5">
          <button className="w-full py-3 bg-white text-black font-arcade text-[10px] uppercase tracking-widest hover:bg-neon-cyan transition-colors active:scale-95">
            INITIATE_TRAINING_MODULE()
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
