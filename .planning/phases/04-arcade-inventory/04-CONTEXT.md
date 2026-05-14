# Phase 4 Context: Arcade Inventory (Skills & Experience)

## Goal
Transform the traditional "Skills" and "Experience" sections into an immersive game inventory system. The user should feel like they are managing a character's loadout, with skills represented as "Items" or "Abilities" and experience as a "Mission Log" or "Quest Journal".

## Requirements
- **SKEX-01**: Skills presented as a grid of inventory items with rarity levels and animated progress meters (Mastery).
- **SKEX-02**: Categories for skills (e.g., Languages, Frameworks, AI/ML, Tools).
- **SKEX-03**: Hover/Selection state showing detailed "Item Stats" (description, years of usage, projects used in).
- **SKEX-04**: Interactive "Quest Journal" for experience/timeline, showing career milestones as completed missions.

## Design Aesthetic
- **Grid Layout**: 4xN or 5xN grid of square item slots.
- **Rarity Colors**:
  - `Common` (Gray): Basic knowledge.
  - `Rare` (Blue): Proficient.
  - `Epic` (Purple): Expert / Lead.
  - `Legendary` (Orange): Core Mastery / Specialized.
- **HUD Elements**: Scanning effects when hovering, glowing borders for high-rarity items.
- **Narrative**: "Saanidhya's Tactical Loadout" or "System Capabilities".

## Technical Approach
- **Data**: Centralized `skills.ts` and `experience.ts`.
- **State Management**: `zustand` for category filtering and selected item state.
- **Animations**: `framer-motion` for grid entry (staggered) and item expansion.
- **Components**: `InventoryGrid`, `InventoryItem`, `ItemDetails`, `MissionLog`.
