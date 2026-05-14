# Stack Research

**Domain:** Immersive Personal Portfolio (Arcade/Cyberpunk)
**Researched:** 2026-05-14
**Confidence:** HIGH

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| Next.js | 15.x | Core Framework | App Router provides the best performance and routing for complex transitions. |
| React | 19.x | UI Library | Required for Next.js 15; improved concurrent rendering supports heavy UI. |
| Three.js | latest | 3D Engine | Industry standard for WebGL and complex 3D scenes. |
| React Three Fiber | latest | 3D Renderer | Declarative approach to Three.js; easier to manage in React. |
| GSAP | 3.x | Advanced Animation | Superior for timeline-based orchestration and high-perf scroll effects. |
| Motion | latest | Interaction/Transitions | (Formerly Framer Motion) Best for state-driven UI and layout transitions. |
| Tailwind CSS | 4.x | Styling | Utility-first; fast prototyping and consistent design tokens. |

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| @react-three/drei | latest | 3D Helpers | Essential for `useGLTF`, `Float`, `Text`, and `Html` in R3F. |
| @react-three/postprocessing | latest | Visual Effects | Required for CRT scanlines, noise, and pixelation shaders. |
| Lenis | latest | Smooth Scroll | Provides that "Apple-level" smoothness for long-scroll immersive pages. |
| Shadcn UI | latest | UI Components | High-quality, accessible base components for glassmorphism panels. |
| Zustand | latest | State Management | Lightweight; ideal for global arcade state (sound on/off, boot status). |
| Lucide React | latest | Icons | Clean, futuristic icon set. |

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| r3f-perf | 3D Performance Monitoring | Use during development to monitor FPS and draw calls. |
| Bundle Analyzer | Optimize build size | Critical for managing the overhead of Three.js and GSAP. |
| Leva | Real-time Shader GUI | Essential for tweaking CRT parameters in the browser. |

## Installation

```bash
# Core
npx create-next-app@latest ./ --typescript --tailwind --eslint

# Supporting
npm install three @types/three @react-three/fiber @react-three/drei @react-three/postprocessing gsap framer-motion lenis zustand lucide-react clsx tailwind-merge

# Dev dependencies
npm install -D r3f-perf leva @types/node @types/react @types/react-dom
```

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| Next.js 15 | Vite | If the site is a pure SPA and doesn't need SSR/Metadata/SEO. |
| R3F | Vanilla Three.js | If you need extreme fine-grained control over every render loop cycle. |
| GSAP | Framer Motion alone | For simpler projects without complex sequential timelines. |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| Pages Router | Less performant for transitions and modern RSC patterns. | App Router |
| Ad-hoc CSS | Hard to maintain consistent neon/glow tokens. | Tailwind CSS + CSS Variables |
| Heavy 3D Models | Will kill mobile performance and loading times. | Compressed GLB + Draco compression |

## Version Compatibility

| Package A | Compatible With | Notes |
|-----------|-----------------|-------|
| Next.js@15 | React@19 | Next.js 15 requires React 19. |
| GSAP@3 | ScrollTrigger | Core part of the GSAP ecosystem for scroll animations. |

## Sources

- [Next.js 15 Docs](https://nextjs.org/docs) — SSR/Hydration patterns verified.
- [R3F Best Practices](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) — Performance tips for React.
- [GSAP + React Guide](https://gsap.com/resources/react-advanced/) — Context-safe animations.

---
*Stack research for: Immersive Arcade Portfolio*
*Researched: 2026-05-14*
