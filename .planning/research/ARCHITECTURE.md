# Architecture Research

**Domain:** Immersive Personal Portfolio (Arcade/Cyberpunk)
**Researched:** 2026-05-14
**Confidence:** HIGH

## Standard Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        Next.js Layer (RSC/Layouts)           │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │ View    │  │ Metadata│  │ API     │  │ SEO     │        │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘        │
│       │            │            │            │              │
├───────┴────────────┴────────────┴────────────┴──────────────┤
│                        Client Experience Layer               │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────┐    │
│  │          Canvas Engine (Three.js / R3F)              │    │
│  │  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐ │    │
│  │  │ Scene Graph │   │ Shaders/CRT │   │ Animations  │ │    │
│  │  └─────────────┘   └─────────────┘   └─────────────┘ │    │
│  └─────────────────────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────────┤
│                        State & Logic Layer                   │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                   │
│  │ Arcade   │  │ Github   │  │ Sound    │                   │
│  │ Store    │  │ Store    │  │ Manager  │                   │
│  └──────────┘  └──────────┘  └──────────┘                   │
└─────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| `ArcadeCanvas` | Root 3D container; post-processing effects. | `@react-three/fiber` + `EffectComposer`. |
| `BootSequence` | Loading logic and initial terminal animation. | GSAP timeline + Zustand state. |
| `ProjectGallery` | 3D/2D hybrid project display and expansion. | Framer Motion `layout` transitions. |
| `GithubCommand` | Live data fetching and chart rendering. | Next.js API Route + Recharts/D3. |

## Recommended Project Structure

```
src/
├── app/                # Next.js App Router pages
├── components/
│   ├── 3d/             # Three.js scenes and components
│   ├── ui/             # Shadcn + Base UI components
│   └── arcade/         # Arcade-specific elements (terminal, buttons)
├── hooks/              # Custom animation and state hooks
├── lib/
│   ├── store/          # Zustand stores
│   ├── utils/          # Formatting, API helpers
│   └── animations/     # Reusable GSAP/Motion timelines
├── styles/             # Global CSS and Tailwind configs
└── assets/             # GLB models, sounds, textures
```

### Structure Rationale

- **components/3d/:** Isolated from standard UI to manage `ssr: false` imports and canvas context.
- **lib/animations/:** Centralizing GSAP timelines ensures cinematic sequences can be coordinated across pages.

## Architectural Patterns

### Pattern 1: Post-Processing Wrapper

**What:** Wrapping the entire application (or main view) in a shader-based post-processing effect.
**When to use:** To achieve the CRT/Scanline look globally without per-component shaders.
**Trade-offs:** Can be performance-intensive on mobile; needs easy toggle for accessibility.

### Pattern 2: Dynamic Scene Swapping

**What:** Using Next.js routing to change the 3D scene environment while keeping the Canvas mounted.
**When to use:** To allow seamless transitions between Home, About, and Projects.
**Trade-offs:** Complexity in managing scene state transitions; ensures no "flash" between pages.

## Data Flow

### Request Flow

```
[User Navigate]
    ↓
[Next.js Page] → [Zustand Store Transition] → [3D Scene Update]
    ↓                   ↓                       ↓
[Metadata Update]  [Sound Play]            [Camera Animate]
```

### State Management

```
[Arcade Store]
    ↓ (subscribe)
[3D Objects] ←→ [User Interaction] → [Store Update] → [Shader Parameters]
```

## Scaling Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| 0-10k views | Standard Vercel deployment; optimized assets. |
| 10k+ views | CDN-hosted 3D models; aggressive image optimization. |

### Scaling Priorities

1. **Model Loading:** Large GLB files will block the "Boot Sequence." Use Draco compression and lazy loading.
2. **Animation Frame Rate:** Complex scenes can lag on mobile. Implement quality settings (High/Medium/Low) based on device capabilities.

## Anti-Patterns

### Anti-Pattern 1: Heavy CPU Animation

**What people do:** Animating everything via React state changes (causing re-renders).
**Why it's wrong:** Lowers FPS; janky experience.
**Do this instead:** Use `useFrame` for 3D and GSAP/Framer Motion for 2D (external to React's render loop).

---
*Architecture research for: Immersive Arcade Portfolio*
*Researched: 2026-05-14*
