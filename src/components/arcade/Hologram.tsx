'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial, Float, MeshWobbleMaterial } from '@react-three/drei'
import * as THREE from 'three'

function HologramCore() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 15]} />
        <MeshDistortMaterial
          color="#00f3ff"
          speed={3}
          distort={0.4}
          radius={1}
          emissive="#00f3ff"
          emissiveIntensity={2}
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
      
      {/* Inner Glow Core */}
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <MeshWobbleMaterial
          color="#ff00ff"
          speed={5}
          factor={0.6}
          emissive="#ff00ff"
          emissiveIntensity={3}
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>
  )
}

export default function Hologram() {
  return (
    <div className="w-full h-[500px] relative">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#00f3ff" intensity={2} />
        <pointLight position={[-10, -10, -10]} color="#ff00ff" intensity={2} />
        
        <HologramCore />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
        
        {/* Subtle grid floor in 3D */}
        <gridHelper 
          args={[20, 20, 0x00f3ff, 0x050505]} 
          position={[0, -4, 0]} 
        />
      </Canvas>
      
      {/* Glitch Overlay Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_50%,#050505_100%)]" />
    </div>
  )
}
