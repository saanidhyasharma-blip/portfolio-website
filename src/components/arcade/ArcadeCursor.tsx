'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function ArcadeCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const checkHover = () => {
      const hoveredElement = document.querySelector(':hover')
      if (
        hoveredElement?.tagName === 'BUTTON' || 
        hoveredElement?.tagName === 'A' ||
        window.getComputedStyle(hoveredElement as Element).cursor === 'pointer'
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', checkHover)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', checkHover)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-neon-cyan z-[10000] rounded-none pointer-events-none mix-blend-difference"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -8,
          top: -8,
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          rotate: isHovering ? 45 : 0,
        }}
      />

      {/* Outer Ring / Trail Placeholder */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-neon-cyan z-[9999] pointer-events-none"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -16,
          top: -16,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.5 : 0.2,
        }}
      />
      
      {/* Pixel trail effect (simple) */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-neon-magenta z-[9998] pointer-events-none"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          left: -0.5,
          top: -0.5,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.5 }}
      />
    </>
  )
}
