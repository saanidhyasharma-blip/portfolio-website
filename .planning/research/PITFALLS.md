# Pitfalls Research

**Domain:** Immersive Personal Portfolio (Arcade/Cyberpunk)
**Researched:** 2026-05-14
**Confidence:** HIGH

## Critical Pitfalls

### Pitfall 1: Next.js Hydration Errors with Three.js

**What goes wrong:**
The site crashes or shows a "Hydration failed" error because Three.js tries to access the `window` or `document` during server-side rendering.

**Why it happens:**
Standard React imports in Next.js execute on the server. Three.js is a client-only library.

**How to avoid:**
Use `next/dynamic` with `ssr: false` for all Canvas-related components.

**Warning signs:**
White screen on first load; console errors about "window is not defined."

**Phase to address:**
Phase 1: Foundation & Boot Experience.

---

### Pitfall 2: Mobile Performance (FPS Drop)

**What goes wrong:**
The site is buttery smooth on a Macbook Pro but runs at 5 FPS on a mid-range Android phone.

**Why it happens:**
Post-processing shaders (bloom, scanlines) and high-poly 3D models are extremely GPU-intensive.

**How to avoid:**
Implement a `PerformanceManager` that downgrades quality (reduces shader passes, disables bloom) if the FPS drops below 40.

**Warning signs:**
Fan noise on mobile; laggy scrolling; touch interactions feel delayed.

**Phase to address:**
Phase 1 (Global effects) and Phase 6 (Optimization).

---

### Pitfall 3: Accessibility of "Creative" Navigation

**What goes wrong:**
Screen readers cannot navigate the "Arcade Menu," and keyboard users are trapped.

**Why it happens:**
Focus is placed on "game feel" over standard HTML elements. Custom cursors often hide the system cursor entirely.

**How to avoid:**
Maintain a hidden semantic nav menu for screen readers. Ensure all custom buttons are actual `<button>` or `<a>` tags with proper ARIA labels.

**Warning signs:**
Lighthouse Accessibility score < 90; Tab key does nothing on the menu.

**Phase to address:**
Phase 2: Hero & Cinematic Home.

---

## Technical Debt Patterns

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| Static JSON for projects | Fast setup. | Hard to update without code changes. | v1 MVP (acceptable). |
| Global CSS for neon | Easy to write. | Hard to manage theme-wide changes. | Never (use Tailwind variables). |
| Uncompressed Models | No extra build steps. | High bandwidth cost; slow "Boot." | Never. |

## Integration Gotchas

| Integration | Common Mistake | Correct Approach |
|-------------|----------------|------------------|
| GitHub API | Rate limiting (60 req/hr for unauth). | Use a Next.js API route + personal access token in ENV. |
| Google Fonts | Flash of Unstyled Text (FOUT). | Use `next/font` for automatic optimization. |
| Audio | Autoplay blocked by browsers. | Only trigger after "Press Start" interaction. |

## UX Pitfalls

| Pitfall | User Impact | Better Approach |
|---------|-------------|-----------------|
| Long Loading Times | Users leave before "Boot." | Show a low-fidelity "Terminal" instantly while heavy assets load. |
| Confusing Navigation | Users can't find the resume/contact. | Always keep a "Standard" nav link visible in the corner. |
| Scroll Hijacking | Feelings of motion sickness. | Use `Lenis` which preserves native feel while smoothing. |

## "Looks Done But Isn't" Checklist

- [ ] **Custom Cursor:** Often missing `pointer-events: none` — verify it doesn't block clicks.
- [ ] **Post-processing:** Often causes layout shifts — verify on multiple screen sizes.
- [ ] **Boot Sequence:** Often breaks on refresh — verify persistence/skip logic.

---
*Pitfalls research for: Immersive Arcade Portfolio*
*Researched: 2026-05-14*
