'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, Briefcase, User, Mail, Database, Terminal } from 'lucide-react'

const NAV_ITEMS = [
  { name: 'HOME', icon: Home, href: '/' },
  { name: 'PROJECTS', icon: Briefcase, href: '#projects' },
  { name: 'ARENA', icon: Database, href: '#arena' },
  { name: 'INVENTORY', icon: User, href: '#inventory' },
  { name: 'CONTACT', icon: Mail, href: '#contact' },
]

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed left-0 top-0 h-screen w-20 z-[5000] flex flex-col items-center py-8 border-r border-white/5 bg-black/40 backdrop-blur-md hidden md:flex"
    >
      <div className="mb-12">
        <div className="w-10 h-10 border-2 border-neon-cyan flex items-center justify-center text-neon-cyan font-bold rotate-45 group">
          <span className="rotate-[-45deg] group-hover:scale-110 transition-transform">S</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-8">
        {NAV_ITEMS.map((item) => (
          <Link 
            key={item.name} 
            href={item.href}
            className="group relative flex flex-col items-center gap-1"
          >
            <div className="relative p-2 text-white/40 group-hover:text-neon-cyan transition-colors">
              <item.icon size={20} />
              <div className="absolute inset-0 bg-neon-cyan/10 scale-0 group-hover:scale-100 rounded-full transition-transform" />
            </div>
            <span className="text-[8px] font-arcade tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap absolute left-14 bg-black px-2 py-1 border border-neon-cyan/30 text-neon-cyan">
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-auto space-y-4 text-white/20">
        <div className="flex flex-col items-center gap-2">
          <div className="w-[2px] h-12 bg-gradient-to-b from-transparent via-neon-cyan/50 to-transparent" />
          <Terminal size={14} className="animate-pulse" />
        </div>
      </div>
    </motion.nav>
  )
}
