'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useArcadeStore } from '@/lib/store/useArcadeStore'
import { getGitHubStats, getRecentRepos } from '@/lib/github'
import { GitHubCalendar } from 'react-github-calendar'
import { GitBranch, Star, Activity, Terminal, ExternalLink, RefreshCw } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default function GitHubArena() {
  const { 
    githubData, 
    isGithubLoading, 
    githubError, 
    setGithubData, 
    setGithubLoading, 
    setGithubError 
  } = useArcadeStore()

  useEffect(() => {
    async function fetchData() {
      setGithubLoading(true)
      try {
        const [stats, repos] = await Promise.all([
          getGitHubStats(),
          getRecentRepos(4)
        ])
        setGithubData({ stats, repos })
      } catch (err) {
        setGithubError('Link_Failed: Connection to GitHub server lost.')
      } finally {
        setGithubLoading(false)
      }
    }

    if (!githubData.stats) {
      fetchData()
    }
  }, [])

  return (
    <section id="arena" className="w-full py-24 md:pl-28 border-t border-white/5 bg-black/40 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#00f3ff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              <span className="text-neon-cyan font-arcade text-[10px] tracking-[0.4em] uppercase">System.Connect(GitHub)</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">Developer <span className="text-neon-cyan">Arena</span></h2>
            <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Real-Time_Activity_Monitor_&_Code_Stats</p>
          </div>

          <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-4 py-2 font-mono text-[10px]">
            <span className="text-white/40">LINK_STATUS:</span>
            <span className={cn(
              "uppercase font-bold",
              isGithubLoading ? "text-amber-500" : githubError ? "text-red-500" : "text-neon-cyan"
            )}>
              {isGithubLoading ? "SYNCING..." : githubError ? "OFFLINE" : "ESTABLISHED"}
            </span>
            {isGithubLoading && <RefreshCw size={12} className="animate-spin text-amber-500" />}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Stats HUD (Left) */}
          <div className="lg:col-span-1 space-y-4">
            <StatCard label="Public Repos" value={githubData.stats?.public_repos || 0} icon={<Terminal size={14} />} />
            <StatCard label="Followers" value={githubData.stats?.followers || 0} icon={<Activity size={14} />} />
            <StatCard label="Total Stars" value={githubData.stats?.total_stars || 0} icon={<Star size={14} />} />
            
            {/* System Info Panel */}
            <div className="bg-neon-cyan/5 border border-neon-cyan/20 p-4 space-y-3">
              <h4 className="text-[8px] font-arcade text-neon-cyan uppercase">System_Alerts</h4>
              <div className="space-y-2">
                <p className="text-[10px] font-mono text-neon-cyan/60 leading-tight uppercase">
                  {">"} Scanning_Repositories...
                </p>
                <p className="text-[10px] font-mono text-neon-cyan/60 leading-tight uppercase">
                  {">"} Syncing_Contribution_Matrix...
                </p>
                <p className="text-[10px] font-mono text-neon-cyan/40 leading-tight uppercase">
                  {">"} Link_Encrypted_SHA256
                </p>
              </div>
            </div>
          </div>

          {/* Repo Matrix (Middle/Right) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {isGithubLoading ? (
                Array(4).fill(0).map((_, i) => <div key={i} className="h-32 bg-white/5 animate-pulse border border-white/10" />)
              ) : (
                githubData.repos.map((repo) => (
                  <RepoCard key={repo.id} repo={repo} />
                ))
              )}
            </div>

            {/* Contribution Calendar */}
            <div className="w-full bg-black/60 border border-white/10 p-6 relative overflow-hidden group hover:border-neon-cyan/30 transition-colors">
               <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-arcade text-white/40 uppercase">Contribution_Matrix</span>
                  <span className="text-[8px] font-mono text-white/20">VIEWPORT_MODE: 365_DAYS</span>
               </div>
               <div className="github-calendar-wrapper flex justify-center overflow-x-auto pb-2">
                  <GitHubCalendar 
                    username="saanidhyasharma-blip"
                    blockSize={12}
                    blockMargin={4}
                    fontSize={12}
                    theme={{
                      light: ['#0e0e0e', '#004a4d', '#008386', '#00babc', '#00f3ff'],
                      dark: ['#0e0e0e', '#004a4d', '#008386', '#00babc', '#00f3ff'],
                    }}
                  />
               </div>
               
               {/* Decorative Scanning Line for the Matrix */}
               <div className="absolute inset-x-0 top-0 h-[1px] bg-neon-cyan/10 pointer-events-none group-hover:animate-scan" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ label, value, icon }: { label: string, value: number, icon: React.ReactNode }) {
  return (
    <div className="bg-black/60 border border-white/10 p-4 hover:border-neon-cyan/30 transition-colors group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">{label}</span>
        <div className="text-neon-cyan opacity-40 group-hover:opacity-100 transition-opacity">
          {icon}
        </div>
      </div>
      <div className="text-3xl font-arcade text-white">{value.toString().padStart(2, '0')}</div>
    </div>
  )
}

function RepoCard({ repo }: { repo: any }) {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5, borderColor: 'rgba(0, 243, 255, 0.4)' }}
      className="bg-black/40 border border-white/10 p-5 group transition-all"
    >
      <div className="flex items-start justify-between mb-3">
        <h4 className="text-lg font-heading font-bold text-white uppercase group-hover:text-neon-cyan transition-colors truncate pr-4">
          {repo.name}
        </h4>
        <ExternalLink size={14} className="text-white/20 group-hover:text-neon-cyan" />
      </div>
      
      <p className="text-xs text-white/40 font-sans line-clamp-2 mb-4 h-8">
        {repo.description || 'No description available for this mission module.'}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-[10px] font-mono text-white/60">
            <Star size={10} className="text-amber-500" /> {repo.stargazers_count}
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-white/60">
            <GitBranch size={10} className="text-neon-magenta" /> {repo.forks_count}
          </div>
        </div>
        <span className="text-[10px] font-mono text-neon-cyan uppercase">
          {repo.language || 'DATA'}
        </span>
      </div>
    </motion.a>
  )
}
