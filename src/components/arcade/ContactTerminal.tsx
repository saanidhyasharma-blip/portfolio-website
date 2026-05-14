'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Send, Mail, Briefcase } from 'lucide-react'

interface LogEntry {
  type: 'info' | 'error' | 'success' | 'input'
  content: string
}

export default function ContactTerminal() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<LogEntry[]>([
    { type: 'info', content: '>>> REMOTE_TERMINAL_INITIALIZED' },
    { type: 'info', content: '>>> TYPE "HELP" TO VIEW AVAILABLE COMMANDS' }
  ])
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const newHistory = [...history, { type: 'input', content: input }]
    const parts = input.trim().split(' ')
    const cmd = parts[0].toLowerCase()
    const args = parts.slice(1).join(' ')

    switch (cmd) {
      case 'help':
        newHistory.push({ type: 'info', content: 'AVAILABLE COMMANDS:' })
        newHistory.push({ type: 'info', content: '  NAME <str>    - Set your identification' })
        newHistory.push({ type: 'info', content: '  EMAIL <str>   - Set your communication node' })
        newHistory.push({ type: 'info', content: '  MSG <str>     - Compose your message' })
        newHistory.push({ type: 'info', content: '  STATUS        - Check transmission readiness' })
        newHistory.push({ type: 'info', content: '  SUBMIT        - Initiate data transfer' })
        newHistory.push({ type: 'info', content: '  CLEAR         - Flush buffer' })
        break
      case 'name':
        if (!args) {
          newHistory.push({ type: 'error', content: 'ERR: IDENTIFICATION_REQUIRED. USAGE: NAME <YOUR_NAME>' })
        } else {
          setFormData(prev => ({ ...prev, name: args }))
          newHistory.push({ type: 'success', content: `ID_SET: ${args}` })
        }
        break
      case 'email':
        if (!args) {
          newHistory.push({ type: 'error', content: 'ERR: NODE_ADDRESS_REQUIRED. USAGE: EMAIL <YOUR_EMAIL>' })
        } else {
          setFormData(prev => ({ ...prev, email: args }))
          newHistory.push({ type: 'success', content: `NODE_ESTABLISHED: ${args}` })
        }
        break
      case 'msg':
      case 'message':
        if (!args) {
          newHistory.push({ type: 'error', content: 'ERR: CONTENT_EMPTY. USAGE: MSG <YOUR_MESSAGE>' })
        } else {
          setFormData(prev => ({ ...prev, message: args }))
          newHistory.push({ type: 'success', content: 'MESSAGE_BUFFERED' })
        }
        break
      case 'status':
        newHistory.push({ type: 'info', content: 'CURRENT_BUFFER_STATE:' })
        newHistory.push({ type: 'info', content: `  NAME: ${formData.name || '---'}` })
        newHistory.push({ type: 'info', content: `  NODE: ${formData.email || '---'}` })
        newHistory.push({ type: 'info', content: `  MSG:  ${formData.message ? '[DATA_LOCKED]' : '---'}` })
        const ready = formData.name && formData.email && formData.message
        newHistory.push({ type: ready ? 'success' : 'error', content: ready ? '>>> READY_FOR_SUBMISSION' : '>>> DATA_INCOMPLETE' })
        break
      case 'submit':
        if (formData.name && formData.email && formData.message) {
          newHistory.push({ type: 'info', content: 'INITIATING_ENCRYPTED_TRANSFER...' })
          setTimeout(() => {
            setHistory(prev => [...prev, { type: 'success', content: '>>> DATA_TRANSMITTED_SUCCESSFULLY' }])
            newHistory.push({ type: 'info', content: 'THANK YOU, OPERATOR. WE WILL CONNECT SOON.' })
            setFormData({ name: '', email: '', message: '' })
          }, 1500)
        } else {
          newHistory.push({ type: 'error', content: 'ERR: SUBMISSION_DENIED. MISSING_DATA_NODES.' })
        }
        break
      case 'clear':
        setHistory([{ type: 'info', content: '>>> BUFFER_FLUSHED' }])
        setInput('')
        return
      default:
        newHistory.push({ type: 'error', content: `ERR: UNKNOWN_COMMAND "${cmd.toUpperCase()}"` })
    }

    setHistory(newHistory)
    setInput('')
  }

  return (
    <section id="contact" className="w-full py-24 md:pl-28 bg-[#080808] border-t border-white/5 relative overflow-hidden">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-magenta animate-pulse" />
              <span className="text-neon-magenta font-arcade text-[10px] tracking-[0.4em] uppercase">System.Contact(Terminal)</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">Command <span className="text-neon-magenta">Center</span></h2>
            <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Establish_Encrypted_Communication_Link</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Terminal Box */}
          <div className="bg-black border border-white/10 rounded-sm overflow-hidden shadow-2xl shadow-neon-magenta/5">
            {/* Terminal Header */}
            <div className="bg-white/5 border-b border-white/10 px-4 py-2 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
              <div className="text-[8px] font-mono text-white/20 uppercase tracking-widest">User_Session: guest@saanidhya_os</div>
            </div>

            {/* Terminal History */}
            <div 
              ref={scrollRef}
              className="h-[400px] overflow-y-auto p-6 font-mono text-sm space-y-2 custom-scrollbar"
            >
              <AnimatePresence>
                {history.map((log, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`flex gap-3 ${
                      log.type === 'error' ? 'text-red-400' :
                      log.type === 'success' ? 'text-neon-cyan' :
                      log.type === 'input' ? 'text-white' : 'text-white/50'
                    }`}
                  >
                    <span className="shrink-0 opacity-30">{log.type === 'input' ? '>' : '#'}</span>
                    <span className="whitespace-pre-wrap">{log.content}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Terminal Input */}
            <form onSubmit={handleCommand} className="p-4 bg-white/5 border-t border-white/10 flex items-center gap-3">
              <span className="text-neon-magenta animate-pulse">{'>'}</span>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="TYPE HELP FOR COMMANDS..."
                className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-white/10"
                autoFocus
              />
              <button type="submit" className="text-white/20 hover:text-neon-magenta transition-colors">
                <Send size={18} />
              </button>
            </form>
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
             <div className="p-4 border border-white/5 bg-white/2 bg-opacity-50 group hover:border-neon-magenta/30 transition-colors">
                <p className="text-[10px] font-mono text-white/20 mb-1">PROTOCOL_01</p>
                <p className="text-xs font-mono text-neon-magenta">NAME [STR]</p>
             </div>
             <div className="p-4 border border-white/5 bg-white/2 group hover:border-neon-magenta/30 transition-colors">
                <p className="text-[10px] font-mono text-white/20 mb-1">PROTOCOL_02</p>
                <p className="text-xs font-mono text-neon-magenta">EMAIL [STR]</p>
             </div>
             <div className="p-4 border border-white/5 bg-white/2 group hover:border-neon-magenta/30 transition-colors">
                <p className="text-[10px] font-mono text-white/20 mb-1">PROTOCOL_03</p>
                <p className="text-xs font-mono text-neon-magenta">MSG [STR]</p>
             </div>
             <div className="p-4 border border-white/5 bg-white/2 group hover:border-neon-magenta/30 transition-colors">
                <p className="text-[10px] font-mono text-white/20 mb-1">FINAL_STEP</p>
                <p className="text-xs font-mono text-neon-magenta">SUBMIT</p>
             </div>
          </div>

          {/* Social Fallback Hub */}
          <div className="mt-12 flex flex-col items-center gap-6">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="flex flex-wrap justify-center gap-8">
              <a href="mailto:saanidhyasharma.10f.33@gmail.com" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group">
                <div className="p-2 border border-white/10 group-hover:border-white/30 rounded-sm">
                  <Mail size={16} />
                </div>
                <span className="text-[10px] font-arcade tracking-widest">DIRECT_MAIL</span>
              </a>
              <a href="https://www.linkedin.com/in/saanidhya-sharma-9ab279409/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group">
                <div className="p-2 border border-white/10 group-hover:border-white/30 rounded-sm">
                  <Briefcase size={16} />
                </div>
                <span className="text-[10px] font-arcade tracking-widest">LINKEDIN_NODE</span>
              </a>
              <a href="https://github.com/saanidhyasharma-blip" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group">
                <div className="p-2 border border-white/10 group-hover:border-white/30 rounded-sm">
                  <Terminal size={16} />
                </div>
                <span className="text-[10px] font-arcade tracking-widest">GITHUB_SOURCE</span>
              </a>
            </div>
            <p className="text-[8px] font-mono text-white/10 uppercase tracking-[0.5em]">
              © 2024 SAANIDHYA SHARMA // ALL_SYSTEMS_OPERATIONAL
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
