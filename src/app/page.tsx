'use client'

import { useArcadeStore } from '@/lib/store/useArcadeStore'
import BootSequence from '@/components/arcade/BootSequence'
import Hero from '@/components/arcade/Hero'
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
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
