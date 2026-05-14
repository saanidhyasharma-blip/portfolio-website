# Phase 1: Foundation & Boot Experience - Context

**Gathered:** 2026-05-14
**Status:** Ready for planning
**Source:** PRD Express Path

<domain>
## Phase Boundary

Establishing the core Next.js engine, styling system, and the iconic "Initialization" boot sequence. This phase delivers the foundation upon which the rest of the immersive arcade experience is built.

</domain>

<decisions>
## Implementation Decisions

### Tech Stack (Locked)
- Next.js 15+ with App Router.
- TypeScript for type safety.
- Tailwind CSS for styling.
- Framer Motion + GSAP for animations.
- Three.js (React Three Fiber + Drei) for 3D elements.
- Lenis for smooth scrolling.
- Shadcn UI for base components.

### Core Experience (Locked)
- **Boot Sequence**: Animated loading with terminal initialization effects.
- **CRT Effects**: Global scanline and CRT distortion overlays.
- **Navigation**: "Game Menu" feel with interactive custom cursor.
- **Theme**: Dark mode only, neon/glow effects, pixel-mixed glassmorphism.

### the agent's Discretion
- Selection of specific "Arcade" fonts (Orbitron, Press Start 2P, etc. were suggested).
- Implementation details of the scanline shader.
- Folder structure for 3D components and GSAP timelines.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Core
- `.planning/PROJECT.md` — Project mission and value.
- `.planning/REQUIREMENTS.md` — Feature traceability.
- `.planning/research/STACK.md` — Specific library versions and installation.
- `.planning/research/ARCHITECTURE.md` — Recommended project structure.

### Phase 1 Specifics
- `.planning/research/PITFALLS.md` — Hydration errors and performance traps.

</canonical_refs>

<specifics>
## Specific Ideas

- "Press Start" screen before entering the main site.
- Keyboard sound effects on terminal boot.
- Motion trails for the interactive cursor.

</specifics>

<deferred>
## Deferred Ideas

- GitHub API integration (Phase 4).
- 3D Hologram Hero (Phase 2).
- Arcade Inventory (Phase 5).

</deferred>

---

*Phase: 01-foundation-boot-experience*
*Context gathered: 2026-05-14 via PRD Express Path*
