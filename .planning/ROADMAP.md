# Roadmap: Saanidhya Sharma's Arcade Portfolio

## Overview

Building an immersive, award-worthy portfolio that functions like a futuristic arcade game. We start with the core engine and "Boot Sequence" experience, then build out the cinematic pages (Home, Projects, GitHub Arena), and finish with a high-polish "Command Center" for contact and skills.

## Phases

- [x] **Phase 1: Foundation & Boot Experience** - Tech stack setup and the iconic "Initialization" sequence.
- [x] **Phase 2: Hero & Cinematic Home** - Building the 3D hologram hero and the "Game Menu" navigation.
- [ ] **Phase 3: Arcade Projects Arena** - Creating the "playable level" project gallery and expansion effects.
- [ ] **Phase 4: Developer Command Center (GitHub)** - Integrating live data into a futuristic dashboard.
- [ ] **Phase 5: Arcade Inventory (Skills & Experience)** - Turning resume data into an interactive game inventory.
- [ ] **Phase 6: Contact Terminal & Final Polish** - The terminal contact experience, easter eggs, and deployment.

## Phase Details

### Phase 1: Foundation & Boot Experience
**Goal**: Establish the tech stack and create the first impression (Loading + CRT effects).
**Depends on**: Nothing
**Requirements**: EXPR-01, EXPR-02, EXPR-05, DSGN-01, DSGN-02
**Success Criteria**:
  1. Next.js project is scaffolded with TS, Tailwind, Framer Motion, and GSAP.
  2. User sees an animated "Boot Terminal" sequence upon first entry.
  3. CRT distortion and scanline overlays are active across the app.
  4. Smooth scrolling (Lenis) is functional.
**Plans**: 3 plans

Plans:
- [x] 01-01: Scaffold Next.js project and install dependencies (GSAP, Framer, Three, Lenis).
- [x] 01-02: Implement "Boot Sequence" and "Press Start" entry logic.
- [x] 01-03: Create the "CRT Overlay" global component and base typography system.

### Phase 2: Hero & Cinematic Home
**Goal**: Build the primary landing experience with 3D elements.
**Depends on**: Phase 1
**Requirements**: HOME-01, HOME-02, HOME-03, HOME-04, EXPR-04
**Success Criteria**:
  1. Hero section features a 3D hologram effect.
  2. Interactive custom cursor is active with motion trails.
  3. "Game Menu" navigation allows seamless page transitions.
**Plans**: 2 plans

Plans:
- [x] 02-01: Build Hero section with Three.js hologram and typing animations.
- [x] 02-02: Implement custom arcade cursor and global navigation menu.

### Phase 3: Arcade Projects Arena
**Goal**: Create the "playable" project gallery.
**Depends on**: Phase 2
**Requirements**: PROJ-01, PROJ-02, PROJ-03, PROJ-04
**Success Criteria**:
  1. Projects are displayed as interactive arcade "cards".
  2. Clicking a project triggers a cinematic expansion animation.
  3. Category filtering (AI/ML, etc.) is functional.
**Plans**: 2 plans

Plans:
- [ ] 03-01: Build the Project Gallery grid with arcade aesthetics.
- [ ] 03-02: Implement the cinematic project expansion modal/view with GSAP.

### Phase 4: Developer Command Center (GitHub)
**Goal**: Dynamic data integration and visualization.
**Depends on**: Phase 3
**Requirements**: GITA-01, GITA-02, GITA-03, GITA-04
**Success Criteria**:
  1. Live repo data is fetched from GitHub API.
  2. User sees a contribution heatmap and tech stack charts.
**Plans**: 2 plans

Plans:
- [ ] 04-01: Setup GitHub API integration and repo card components.
- [ ] 04-02: Build the contribution heatmap and repo analytics dashboard.

### Phase 5: Arcade Inventory (Skills & Experience)
**Goal**: Narrative-driven about and skills system.
**Depends on**: Phase 4
**Requirements**: SKEX-01, SKEX-02, SKEX-03, SKEX-04
**Success Criteria**:
  1. Skills are presented as a game inventory with unlock effects.
  2. Timeline journey shows Saanidhya's story with animations.
**Plans**: 2 plans

Plans:
- [ ] 05-01: Build the "Arcade Inventory" skills system.
- [ ] 05-02: Implement the interactive career timeline journey.

### Phase 6: Contact Terminal & Final Polish
**Goal**: Terminal-based contact and easter eggs.
**Depends on**: Phase 5
**Requirements**: CONT-01, CONT-02, CONT-03, DSGN-03, DSGN-04
**Success Criteria**:
  1. Terminal contact form is functional.
  2. Konami code and other easter eggs are active.
  3. Site is optimized for performance and SEO.
**Plans**: 3 plans

Plans:
- [ ] 06-01: Build the interactive terminal contact form.
- [ ] 06-02: Add easter eggs and final audio/visual polish.
- [ ] 06-03: SEO optimization, mobile audit, and Vercel deployment preparation.

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation & Boot | 3/3 | Complete | 2026-05-14 |
| 2. Hero & Cinematic | 2/2 | Complete | 2026-05-14 |
| 3. Arcade Projects | 0/2 | Not started | - |
| 4. GitHub Arena | 0/2 | Not started | - |
| 5. Arcade Inventory | 0/2 | Not started | - |
| 6. Contact & Polish | 0/3 | Not started | - |
