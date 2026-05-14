# Phase 2 Context: Hero & Cinematic Home

## Vision
The user enters the portfolio after the boot sequence and is met with a high-impact, 3D-accelerated landing page. This page should feel like the "Main Menu" of an arcade game.

## Key Features
- **Holographic Hero**: A 3D object (potentially a glitching bust or a rotating tech core) that reacts to mouse movement.
- **Glitch Typography**: Headings that occasionally glitch and flicker in neon cyan and magenta.
- **Arcade Cursor**: A custom cursor that leaves a trail of pixels or neon light.
- **Side Navigation**: A "Game Menu" style navigation sidebar that slides in or is persistently visible as a sleek terminal bezel.

## Technical Strategy
- **Three.js**: Use R3F for the hero object. Implement a custom shader or `MeshTransmissionMaterial` for the hologram effect.
- **Framer Motion**: Handle the custom cursor trail for performance and smoothness.
- **GSAP**: Orchestrate the entry animations for the page elements once the boot sequence is finished.

## Constraints
- **Performance**: Maintain 60 FPS even with 3D elements. Use `next/dynamic` with `ssr: false` for the Canvas.
- **Responsiveness**: The 3D hero must scale correctly for mobile devices.
