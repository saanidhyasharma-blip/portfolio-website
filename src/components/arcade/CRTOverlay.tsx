'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useKonamiCode } from '@/hooks/useKonamiCode'

export default function CRTOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null)
  const isGlitched = useKonamiCode()

  useEffect(() => {
    // Subtle flicker animation to mimic old CRT monitors
    const flicker = gsap.to(overlayRef.current, {
      opacity: isGlitched ? 0.7 : 0.96,
      duration: isGlitched ? 0.05 : 0.1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      repeatRefresh: true
    })

    if (isGlitched) {
      gsap.to(overlayRef.current, {
        filter: "hue-rotate(90deg) contrast(200%)",
        duration: 0.1,
        repeat: 5,
        yoyo: true,
        onComplete: () => {
          gsap.to(overlayRef.current, { filter: "none", duration: 1 })
        }
      })
    }

    return () => { flicker.kill() }
  }, [isGlitched])

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
    >
      {/* Scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px]" />
      
      {/* Subtle Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
      
      {/* RGB Shift Layer (Static for now) */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-screen bg-[linear-gradient(90deg,rgba(255,0,0,0.8),rgba(0,255,0,0.4),rgba(0,0,255,0.8))] bg-[size:3px_100%]" />
      
      {/* Subtle Distortion Filter (using CSS) */}
      <div className="absolute inset-0 backdrop-grayscale-[0.1] contrast-[1.1] brightness-[1.1]" />
    </div>
  )
}
