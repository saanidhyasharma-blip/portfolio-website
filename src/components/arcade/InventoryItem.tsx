'use client'

import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { Skill, SkillRarity } from '@/data/skills'
import { useArcadeStore } from '@/lib/store/useArcadeStore'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface InventoryItemProps {
  skill: Skill
}

const RARITY_COLORS: Record<SkillRarity, { border: string, bg: string, text: string, glow: string }> = {
  COMMON: {
    border: 'border-white/10',
    bg: 'bg-white/5',
    text: 'text-white/40',
    glow: 'group-hover:bg-white/10'
  },
  RARE: {
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/5',
    text: 'text-blue-400',
    glow: 'group-hover:bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]'
  },
  EPIC: {
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/5',
    text: 'text-purple-400',
    glow: 'group-hover:bg-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.2)]'
  },
  LEGENDARY: {
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/5',
    text: 'text-amber-400',
    glow: 'group-hover:bg-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.3)]'
  }
}

export default function InventoryItem({ skill }: InventoryItemProps) {
  const { selectedSkillId, setSelectedSkillId } = useArcadeStore()
  const isSelected = selectedSkillId === skill.id
  const rarity = RARITY_COLORS[skill.rarity]
  
  // @ts-ignore
  const Icon = LucideIcons[skill.iconName] || LucideIcons.HelpCircle

  return (
    <motion.div
      onClick={() => setSelectedSkillId(skill.id)}
      className={cn(
        "group relative aspect-square border cursor-pointer transition-all duration-300 overflow-hidden",
        rarity.border,
        rarity.bg,
        isSelected && "border-neon-cyan ring-1 ring-neon-cyan/50",
        !isSelected && "hover:border-white/30"
      )}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Rarity Indicator (Corner) */}
      <div className={cn(
        "absolute top-0 right-0 w-6 h-6 rotate-45 translate-x-3 -translate-y-3",
        skill.rarity === 'LEGENDARY' ? 'bg-amber-500' :
        skill.rarity === 'EPIC' ? 'bg-purple-500' :
        skill.rarity === 'RARE' ? 'bg-blue-500' : 'bg-white/20'
      )} />

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center">
        <div className={cn("mb-2 transition-transform duration-500 group-hover:scale-110", rarity.text)}>
          <Icon size={24} strokeWidth={1.5} />
        </div>
        <span className="text-[8px] font-mono uppercase tracking-tighter text-white/60 line-clamp-1">
          {skill.name}
        </span>
      </div>

      {/* Rarity Glow Overlay */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
        rarity.glow
      )} />

      {/* Scanline Effect (Animated) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
        <motion.div 
          className="w-full h-[1px] bg-white/20"
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Selection Border */}
      {isSelected && (
        <motion.div 
          layoutId="selection-border"
          className="absolute inset-0 border-2 border-neon-cyan pointer-events-none z-20"
        />
      )}
    </motion.div>
  )
}
