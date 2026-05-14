# Phase 4 Plan: Arcade Inventory (Skills & Experience)

## Objectives
1. Build a futuristic, game-inspired skills inventory system.
2. Implement an interactive career timeline as a "Mission Log".
3. Ensure high visual polish with scanning effects, rarity tiers, and smooth transitions.

## Proposed Changes

### 1. Data Layer
- **[NEW]** `src/data/skills.ts`: Define skill categories, rarity levels, mastery percentages, and icons.
- **[NEW]** `src/data/experience.ts`: Define career milestones as "Missions" with dates, roles, and "Mission Objectives" (achievements).

### 2. State Management
- **[MODIFY]** `src/lib/store/useArcadeStore.ts`: Add state for inventory filtering (category) and selected skill/mission.

### 3. Components
- **[NEW]** `src/components/arcade/InventoryItem.tsx`: Individual skill slot with rarity styling and hover animations.
- **[NEW]** `src/components/arcade/InventoryGrid.tsx`: Filterable grid layout for all skills.
- **[NEW]** `src/components/arcade/InventoryStats.tsx`: Detail panel showing mastery bars and "Item Lore" (description).
- **[NEW]** `src/components/arcade/MissionLog.tsx`: Timeline component styled as a tactical mission journal.

### 4. Integration
- **[MODIFY]** `src/app/page.tsx`: Add the Inventory and Mission sections below the Project Arena.

## Execution Steps

### 4.1: Inventory & Skills (The Loadout)
1. Define the skills data structure with rarity and categories.
2. Build the `InventoryGrid` with category tabs (Languages, AI, Web, etc.).
3. Implement `InventoryItem` with "glitch" hover effects and rarity glow.
4. Build the `InventoryStats` panel for detailed skill analysis.

### 4.2: Mission Log (The Journey)
1. Define experience data as a sequence of missions.
2. Create the `MissionLog` vertical timeline with "Mission Active" and "Mission Complete" states.
3. Add animated connectors and holographic timestamps.

## Verification Plan
- [ ] Verify category filtering works seamlessly.
- [ ] Check rarity-based styling (colors and glow).
- [ ] Ensure the "Mission Log" scrolls smoothly and animations trigger on scroll.
- [ ] Final UI/UX audit for consistency with the Arcade/Cyberpunk theme.
