'use client'

import { useArcadeStore } from '@/lib/store/useArcadeStore'
import BootSequence from '@/components/arcade/BootSequence'
import Hero from '@/components/arcade/Hero'
import ProjectGrid from '@/components/arcade/ProjectGrid'
import InventoryGrid from '@/components/arcade/InventoryGrid'
import InventoryStats from '@/components/arcade/InventoryStats'
import MissionLog from '@/components/arcade/MissionLog'
import GitHubArena from '@/components/arcade/GitHubArena'
import ContactTerminal from '@/components/arcade/ContactTerminal'
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
            className="w-full"
          >
            <Hero />
            <ProjectGrid />
            
            {/* Inventory & Mission Log Sections */}
            <section id="inventory" className="w-full py-24 md:pl-28 border-t border-white/5 bg-black/20">
              <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-12">
                  {/* Skills Inventory (2/3 width) */}
                  <div className="lg:col-span-2 space-y-8">
                    <div className="space-y-2">
                      <span className="text-neon-cyan font-arcade text-[10px] tracking-[0.4em] uppercase">System.Inventory()</span>
                      <h2 className="text-4xl font-heading font-bold text-white uppercase">Tactical <span className="text-neon-cyan">Loadout</span></h2>
                    </div>
                    <InventoryGrid />
                  </div>

                  {/* Item Details (1/3 width) */}
                  <div className="lg:col-span-1 h-fit lg:sticky lg:top-24">
                    <div className="space-y-2 mb-8">
                      <span className="text-neon-magenta font-arcade text-[10px] tracking-[0.4em] uppercase">Module.Analysis()</span>
                      <h2 className="text-xl font-heading font-bold text-white uppercase">Capability <span className="text-neon-magenta">Intel</span></h2>
                    </div>
                    <InventoryStats />
                  </div>
                </div>

                {/* Experience Timeline */}
                <div className="mt-32 space-y-12">
                  <div className="text-center space-y-2">
                    <span className="text-neon-cyan font-arcade text-[10px] tracking-[0.4em] uppercase">System.Journal()</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">Mission <span className="text-neon-cyan">Log</span></h2>
                    <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Tracking_Career_Progression_Timeline</p>
                  </div>
                  <MissionLog />
                </div>
              </div>
            </section>

            {/* GitHub Arena Section */}
            <GitHubArena />

            {/* Contact Terminal Section */}
            <ContactTerminal />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
