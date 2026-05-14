'use client'

import { useArcadeStore } from '@/lib/store/useArcadeStore'
import BootSequence from '@/components/arcade/BootSequence'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const isBooted = useArcadeStore((state) => state.isBooted)

  return (
    <main className="relative min-h-screen bg-[#050505]">
      <AnimatePresence mode="wait">
        {!isBooted ? (
          <BootSequence key="boot" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center justify-center min-h-screen p-8 text-center"
          >
            <h1 className="text-6xl font-bold tracking-tighter text-neon-cyan mb-4 uppercase">
              Saanidhya Sharma
            </h1>
            <p className="text-xl text-neon-magenta tracking-widest uppercase mb-8">
              System Ready // Creative Technologist
            </p>
            
            <div className="glass p-8 rounded-lg max-w-xl">
              <p className="text-neon-cyan/80 leading-relaxed">
                Welcome to the Arcade. This is a fully immersive, 3D-accelerated 
                portfolio experience. Explore the terminal, play the project levels, 
                and hack the status dashboard.
              </p>
            </div>
            
            {/* Placeholder for future 3D Hero */}
            <div className="mt-12 w-full h-64 border border-dashed border-neon-cyan/30 flex items-center justify-center rounded-lg">
              <span className="text-neon-cyan/30 animate-pulse uppercase tracking-widest">
                3D Hologram Core Initializing...
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
