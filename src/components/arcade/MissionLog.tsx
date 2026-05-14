'use client'

import { motion } from 'framer-motion'
import { MISSIONS } from '@/data/experience'
import { CheckCircle2, Circle, MapPin, Calendar, Terminal } from 'lucide-react'

export default function MissionLog() {
  return (
    <div className="relative space-y-12">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-neon-cyan via-neon-magenta to-transparent md:-translate-x-1/2" />

      {MISSIONS.map((mission, index) => {
        const isEven = index % 2 === 0
        
        return (
          <motion.div
            key={mission.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
              <div className={`w-3 h-3 rounded-full border-2 ${mission.status === 'COMPLETED' ? 'bg-neon-cyan border-neon-cyan shadow-[0_0_10px_rgba(0,255,255,0.8)]' : 'bg-black border-white/40 shadow-[0_0_10px_rgba(255,255,255,0.2)] animate-pulse'}`} />
            </div>

            {/* Mission Card */}
            <div className="w-full md:w-[45%] ml-12 md:ml-0">
              <div className="bg-black/40 border border-white/10 p-6 space-y-4 hover:border-white/30 transition-colors group relative overflow-hidden">
                {/* Background Text */}
                <div className="absolute -top-4 -right-4 text-[40px] font-arcade text-white/[0.02] select-none pointer-events-none group-hover:text-white/[0.05] transition-colors">
                  0{MISSIONS.length - index}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-[8px] font-arcade px-2 py-0.5 ${mission.status === 'COMPLETED' ? 'bg-neon-cyan/20 text-neon-cyan' : 'bg-neon-magenta/20 text-neon-magenta'}`}>
                      {mission.status}
                    </span>
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                      {mission.missionName}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/40">
                    <Calendar size={12} /> {mission.duration}
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-heading font-bold text-white uppercase group-hover:text-neon-cyan transition-colors">
                    {mission.role}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-white/60">
                    <span className="text-neon-magenta">{mission.company}</span>
                    <span className="text-white/20">|</span>
                    <span className="flex items-center gap-1"><MapPin size={10} /> {mission.location}</span>
                  </div>
                </div>

                <p className="text-xs font-sans text-white/40 leading-relaxed italic">
                  "{mission.lore}"
                </p>

                {/* Objectives */}
                <div className="space-y-2 pt-4 border-t border-white/5">
                  <h4 className="text-[8px] font-arcade text-white/20 uppercase tracking-[0.2em]">Mission_Objectives:</h4>
                  <div className="space-y-2">
                    {mission.objectives.map((obj) => (
                      <div key={obj.id} className="flex items-start gap-3">
                        <Terminal size={12} className="text-neon-cyan mt-0.5 shrink-0" />
                        <span className="text-[10px] font-mono text-white/60 leading-tight uppercase">
                          {obj.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status Overlay */}
                <div className="absolute top-0 right-0 p-2 opacity-10">
                  {mission.status === 'COMPLETED' ? <CheckCircle2 size={48} /> : <Circle size={48} className="animate-pulse" />}
                </div>
              </div>
            </div>

            {/* Spacer for other side on desktop */}
            <div className="hidden md:block w-[45%]" />
          </motion.div>
        )
      })}
    </div>
  )
}
