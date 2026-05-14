'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { ChevronRight, Cpu, Terminal } from 'lucide-react'

const Hologram = dynamic(() => import('./Hologram'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex items-center justify-center">
      <div className="text-neon-cyan animate-pulse font-mono tracking-widest uppercase">
        Generating Hologram...
      </div>
    </div>
  )
})

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 md:pl-28">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-28 opacity-20 hidden lg:block">
        <div className="flex items-center gap-2 text-neon-cyan font-mono text-xs mb-1">
          <Cpu size={14} />
          <span>CPU_LOAD: 24%</span>
        </div>
        <div className="w-32 h-1 bg-neon-cyan/20 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-neon-cyan"
            animate={{ width: ["20%", "60%", "40%", "80%"] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center z-10">
        {/* Text Content */}
        <div className="order-2 lg:order-1 space-y-8 text-center lg:text-left">
          <div className="space-y-2">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-neon-magenta font-arcade text-xs md:text-sm tracking-[0.3em] uppercase"
            >
              System Administrator Identified
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-heading font-bold tracking-tighter text-white"
            >
              SAANIDHYA <span className="text-neon-cyan">SHARMA</span>
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4"
            >
              {["Full Stack", "AI Engineer", "Creative Tech"].map((tag, i) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 text-[10px] font-mono border border-neon-cyan/30 text-neon-cyan rounded-sm bg-neon-cyan/5"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-white/60 font-sans max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            Crafting high-fidelity digital experiences at the intersection of 
            artificial intelligence and immersive design. Building the future, one byte at a time.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <a href="#contact" className="group relative px-8 py-4 bg-neon-cyan text-black font-bold uppercase tracking-widest flex items-center gap-2 overflow-hidden hover:scale-105 transition-transform active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                Connect Terminal <ChevronRight size={18} />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </a>
            
            <a href="#projects" className="px-8 py-4 border border-white/20 text-white/60 font-bold uppercase tracking-widest flex items-center gap-2 hover:border-neon-magenta hover:text-neon-magenta transition-colors">
              <Terminal size={18} /> View Projects
            </a>
          </motion.div>
        </div>

        {/* 3D Hologram Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-1 lg:order-2 relative"
        >
          <Hologram />
          
          {/* Circular accents */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-[1px] border-dashed border-neon-cyan/20 rounded-full scale-[0.8]" 
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-[1px] border-dashed border-neon-magenta/20 rounded-full scale-[0.6]" 
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Status Bar Decoration */}
      <div className="absolute bottom-10 left-0 w-full pl-28 pr-10 flex justify-between items-end pointer-events-none">
        <div className="space-y-1">
          <div className="h-[1px] w-24 bg-neon-cyan/50" />
          <div className="text-[8px] font-mono text-neon-cyan/50 uppercase tracking-[0.5em]">
            Location: NCR_INDIA // 28.6139 N, 77.2090 E
          </div>
        </div>
        <div className="space-y-1 text-right">
          <div className="h-[1px] w-24 bg-neon-magenta/50 ml-auto" />
          <div className="text-[8px] font-mono text-neon-magenta/50 uppercase tracking-[0.5em]">
            Status: STABLE // SYS_CLOCK_OK
          </div>
        </div>
      </div>
    </section>
  )
}
