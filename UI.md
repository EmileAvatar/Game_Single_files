# UI (User Interface)

## UI Screen Groups

* **Core Gameplay**: Primary screens used during active gameplay
* **Character Management**: Screens for character creation, progression, and stats
* **Inventory Management**: Storage, equipment, and item organization
* **Crafting Interfaces**: Workstations and creation systems
* **Building & Construction**: Base building and structure placement
* **Social & Trading**: NPC interaction and commerce
* **Map & Navigation**: World exploration and location information
* **Menus & Settings**: Game configuration and system screens

---

## Core Gameplay Screens

* **Main Game Screen**
    * Central 2D isometric/top-down map view showing game world
    * Player character and visible NPCs/creatures/objects
    * Terrain, buildings, and environmental features
    * Real-time or turn-based grid overlay (depending on game mode)
    * Visual effects for spells, attacks, and status effects
    * Day/night cycle and weather effects
    * Mouse cursor for interaction and selection
    * Hotkey bar showing equipped abilities and items (slots 1-0)
    * Active quest tracker in corner
    * Current target health/mana bar (when enemy selected)

* **Minimap**
    * Small corner display showing zoomed-out area view
    * Player position marker (arrow or dot)
    * Revealed fog of war (explored areas)
    * Points of interest (quest markers, NPCs, resources)
    * Enemy positions (if detected)
    * Party member positions (if applicable)
    * Click to center view on location
    * Toggle for full screen map overlay

* **HUD (Heads-Up Display)**
    * Player health bar (red)
    * Player mana/energy bar (blue)
    * Player stamina bar (green, if applicable)
    * Character portrait
    * Level and experience bar
    * Active buffs/debuffs with duration timers
    * Currency display (gold, silver, copper)
    * Time of day indicator
    * Compass or directional indicator
    * Quick access buttons (inventory, character sheet, map, journal)

* **Action Bar / Hotbar**
    * 10-20 slots for quick-access abilities and items
    * Drag-and-drop from inventory/spellbook
    * Cooldown timers on abilities
    * Mana/resource costs displayed
    * Keyboard shortcuts (1-0, F1-F12)
    * Multiple hotbar pages (switchable)
    * Context-sensitive actions (attack, interact, loot)

* **Combat Log / Message Feed**
    * Scrolling text feed of recent events
    * Combat damage numbers (hit, miss, critical)
    * Status effect notifications (poisoned, blessed, etc.)
    * Item pickup notifications
    * Quest updates
    * NPC dialogue snippets
    * System messages
    * Color-coded by message type
    * Timestamps (optional)
    * Filter options by category

---

## Character Management Screens

* **Character Creation Screen**
    * Race selection panel with portraits and descriptions
    * Racial trait bonuses displayed
    * Profession/Class selection with abilities preview
    * Attribute point allocation sliders
        * Strength, Dexterity, Constitution
        * Intelligence, Wisdom, Charisma
    * Skill point distribution
    * Appearance customization (if available)
        * Hair style and color
        * Skin tone
        * Facial features
        * Body type
    * Name input field
    * Background/Origin selection (optional)
    * Starting equipment preview
    * Randomize button
    * Confirm and Start button

* **Character Sheet**
    * Character portrait and name
    * Level and experience progress bar
    * Primary attributes with current values
    * Derived stats (HP, Mana, Stamina, Armor, Resistances)
    * Attack damage and accuracy
    * Movement speed
    * Skill list with current levels
    * Active perks and talents
    * Reputation with factions
    * Character weight/encumbrance
    * Currency totals
    * Playtime statistics
    * Attribute point allocation (on level up)

* **Skills Screen**
    * Skill tree visualization or list
    * Current skill levels (0-100 or tier-based)
    * Skill experience progress bars
    * Skill descriptions and effects
    * Prerequisites for advanced skills
    * Available skill points to spend
    * Recent skill gains notification
    * Skill categories (Combat, Magic, Crafting, Social, etc.)
    * Hover tooltips with detailed information

* **Perks / Talents Screen**
    * Available perk points
    * Perk tree branching paths
    * Unlocked vs locked perks
    * Perk requirements (level, skill, previous perks)
    * Perk descriptions and mechanical effects
    * Active perks list
    * Respec option (if available)
    * Search/filter by category

* **Spell Book / Abilities**
    * List of known spells organized by school
    * Spell level and mana cost
    * Casting time and cooldown
    * Area of effect visualization
    * Damage/effect values
    * Range indicator
    * Drag spells to hotbar
    * Learn new spells button
    * Spell upgrade options (if applicable)
    * Active spell effects and durations

---

## Inventory Management Screens

* **Inventory Screen**
    * Grid-based or list-based item storage
    * Item icons with stack sizes
    * Weight/capacity meter (current/max)
    * Item categories (All, Weapons, Armor, Consumables, Materials, Quest)
    * Filter and sorting options (name, type, value, weight)
    * Search bar
    * Item tooltips showing stats and descriptions
    * Right-click context menu (Use, Equip, Drop, Destroy)
    * Quick stack to storage containers
    * Currency display
    * Compare items feature (equipment side-by-side)

* **Equipment Screen (Paper Doll)**
    * Character model showing equipped items
    * Equipment slots:
        * Head, Neck, Shoulders
        * Chest, Back (cloak)
        * Hands, Waist (belt), Legs, Feet
        * Main Hand, Off Hand/Shield
        * Ring slots (2-4)
        * Accessory slots
    * Drag-and-drop to equip/unequip
    * Item stat comparison tooltips
    * Set bonuses displayed (if wearing matching sets)
    * Durability indicators on equipped items
    * Dye/transmog options (cosmetic)
    * Total armor and resistance values

* **Storage Container Interface**
    * Dual-panel view (player inventory + container)
    * Container capacity indicator
    * Transfer items between panels
    * Take All / Deposit All buttons
    * Filter by item type
    * Container name/label
    * Lockable containers with key requirements
    * Sorting options
    * Search functionality

* **Loot Window**
    * Items available for pickup
    * Auto-loot options (by rarity, type)
    * Take All button
    * Take individual items
    * Currency in corpse/container
    * Close when empty or manually

---

## Crafting Interfaces

* **Crafting Station Interface**
    * Station type indicator (Forge, Alchemy Table, etc.)
    * Available recipes list
    * Recipe categories/filters
    * Selected recipe details:
        * Required materials with have/need counts
        * Required skill level
        * Crafting time estimate
        * Success chance percentage
        * Possible quality outcomes
    * Material slots (drag items to fill)
    * Output preview slot
    * Craft button
    * Craft Multiple option (1x, 5x, 10x, All)
    * Fuel indicator (for stations requiring fuel)
    * Station durability/condition bar

* **Alchemy Interface**
    * Three-tier crafting display:
        * Tier 1: Raw Materials → Extraction
        * Tier 2: Reagents → Alchemical Essences
        * Tier 3: Essences → Final Products
    * Ingredient slots (multiple inputs)
    * Catalyst/essence slots
    * Output result slot
    * Recipe list organized by:
        * Potions, Elixirs, Transmutations
        * Elemental, Vital, Mental, Physical essences
        * Transformation, Necromantic, Divine essences
    * Container requirement indicator (vial type needed)
    * Process time countdown
    * Success chance and risk warnings
    * Experimentation mode (no recipe, discovery chance)
    * Essence storage overview

* **Enchanting Interface**
    * Item slot (item to enchant)
    * Enchantment selection menu
    * Required essences and crystals
    * Enchantment preview (stat changes)
    * Success rate display
    * Destruction risk warning
    * Item enhancement level (if applicable)
    * Multiple enchantment slots (for high-tier items)
    * Apply Enchantment button
    * Previously enchanted items list (for reference)

* **Bioforging / Creature Creation Interface**
    * Creature template selection
    * Part slots for customization:
        * Brain (intelligence)
        * Eyes (perception, vision type)
        * Body core (HP, size)
        * Limbs (mobility, attack type)
        * Wings (flight capability)
        * Tail (balance, attacks)
        * Special organs (breath weapon, regeneration)
        * Hide/Scales (armor, resistances)
    * Available parts inventory filtered by type
    * Essence requirement display (Life, Soul, Chaos, Order)
    * Compatibility meter (part synergy)
    * Mutation risk percentage
    * Growth time estimate
    * Stat preview (HP, damage, speed, abilities)
    * Create button
    * Creature archive (saved templates)

* **Spell Construction Interface**
    * Spell framework selection (damage, heal, buff, summon, etc.)
    * Modular components:
        * Element type (fire, ice, lightning, etc.)
        * Delivery method (projectile, area, touch, self)
        * Area of effect size
        * Duration
        * Power/intensity
    * Mana cost calculator (updates as components added)
    * Spell level indicator
    * Required alchemical essences for inscription
    * Test Spell button (practice mode)
    * Save to Spellbook button
    * Existing spells library

---

## Building & Construction Screens

* **Building Mode Interface**
    * Build menu with categories:
        * Walls, Floors, Doors/Windows
        * Furniture, Decorations
        * Crafting Stations
        * Defensive Structures
        * Agricultural, Industrial
    * Item thumbnail grid
    * Resource cost display (materials needed)
    * Ghost preview (transparent placement guide)
    * Rotation controls
    * Snap-to-grid toggle
    * Height adjustment (for multi-level building)
    * Demolish/Remove mode
    * Blueprint saving (save/load building layouts)
    * Material requirements overview
    * Construction time (if applicable)

* **Structure Placement UI**
    * Valid placement indicator (green/red overlay)
    * Terrain requirement warnings
    * Clearance radius visualization
    * Preview of completed structure
    * Material requirement checklist
    * Confirm Placement button
    * Cancel button
    * Undo last placement

* **Territory Management**
    * Claimed land boundaries
    * Expansion options and costs
    * Building limit indicator
    * Power/utility coverage zones
    * Defensive perimeter view
    * Resource generation overview
    * Citizen/NPC count (if settlement-based)
    * Threat level indicator

---

## Social & Trading Screens

* **Dialogue Interface**
    * NPC portrait and name
    * Relationship status indicator (friendly, neutral, hostile)
    * Dialogue text box (NPC speech)
    * Response options (player choices)
        * [Standard] Normal dialogue
        * [Persuade] Charisma/speech check
        * [Intimidate] Strength/threat check
        * [Bribe] Gold cost option
        * [Quest] Special quest dialogue
    * Skill check difficulty indicators
    * Alignment/reputation impact icons
    * Conversation history log
    * Continue/Exit dialogue buttons

* **Trading / Merchant Interface**
    * Dual-panel (player inventory + merchant inventory)
    * Merchant gold available
    * Player gold available
    * Item prices (buy/sell with markups)
    * Reputation discount indicator
    * Bulk buy/sell options
    * Item comparison tooltips
    * Merchant stock refresh timer
    * Special merchant services:
        * Repair items
        * Identify unknown items
        * Buy back recently sold items
    * Transaction total preview
    * Confirm Trade button

* **Quest Journal**
    * Active quests list
    * Completed quests archive
    * Failed quests log
    * Quest details panel:
        * Quest name and giver
        * Objective checklist with progress
        * Quest rewards preview
        * Location markers
        * Time limit (if applicable)
        * Difficulty indicator
    * Track on HUD toggle
    * Abandon quest option
    * Quest categories (Main, Side, Faction, Repeatable)

* **Faction Reputation Screen**
    * List of known factions
    * Reputation bars (hated → neutral → revered)
    * Current reputation level names
    * Reputation rewards unlocked
    * Next reputation tier requirements
    * Faction relationships (allies/enemies)
    * Special faction bonuses active
    * Faction quest availability

---

## Map & Navigation Screens

* **World Map (Full Screen)**
    * Zoomed-out strategic view
    * Revealed areas (fog of war)
    * Location markers:
        * Cities, towns, settlements
        * Dungeons, caves, ruins
        * Quest objectives
        * Points of interest
        * Resource nodes
        * Player-placed markers
    * Fast travel points (if discovered)
    * Distance measurement tool
    * Legend/key for icons
    * Filter toggles (show/hide marker types)
    * Notes on locations (player annotations)
    * Zoom in/out controls

* **Local Area Map**
    * Detailed view of current region
    * Building interiors
    * NPC positions
    * Resource spawn points
    * Danger zones marked
    * Player waypoint marker
    * Party member positions
    * Recently visited locations highlighted

* **Compass / Directional HUD**
    * Cardinal directions (N, S, E, W)
    * Active quest direction indicator
    * Distance to objective
    * Tracked resources nearby
    * Enemy detection (if scouting)

---

## Menus & Settings Screens

* **Main Menu (Title Screen)**
    * Game title/logo
    * New Game button
    * Continue / Load Game button
    * Settings button
    * Credits button
    * Quit button
    * Version number
    * Background artwork/animation

* **Pause Menu (In-Game)**
    * Resume button
    * Save Game
    * Load Game
    * Settings
    * Controls
    * Return to Main Menu
    * Quit to Desktop

* **Settings Menu**
    * Graphics Settings:
        * Resolution
        * Fullscreen/Windowed
        * V-Sync
        * Texture Quality
        * Shadow Quality
        * Effects Quality
        * View Distance
    * Audio Settings:
        * Master Volume
        * Music Volume
        * SFX Volume
        * Voice Volume
        * Mute All
    * Gameplay Settings:
        * Difficulty
        * Auto-save frequency
        * Combat mode (real-time / turn-based)
        * Tutorial prompts
        * Quest markers
        * Damage numbers
    * Control Settings:
        * Keybindings
        * Mouse sensitivity
        * Camera speed
        * Gamepad configuration

* **Save/Load Screen**
    * Save slot list (with thumbnails)
    * Save file information:
        * Character name and level
        * Location
        * Playtime
        * Date/time saved
    * Save button (overwrite or new slot)
    * Load button
    * Delete save button
    * Auto-save indicator
    * Quick save/load hotkeys

* **Options Overlay**
    * Always-accessible radial menu or dropdown
    * Quick access to:
        * Inventory
        * Character sheet
        * Map
        * Journal
        * Spellbook
        * Crafting menu
        * Settings
        * Exit game

---

## Specialized Interface Screens

* **Research / Technology Tree**
    * Node-based tech tree
    * Unlocked vs locked technologies
    * Research requirements (resources, time, prerequisites)
    * Research queue
    * Active research progress bar
    * Research point accumulation rate
    * Technology categories
    * Benefits of each unlock listed

* **Creature Management (Summoned/Tamed)**
    * Active creatures panel
    * Creature portraits with health bars
    * Command options:
        * Attack target
        * Defend position
        * Follow player
        * Passive/Aggressive stance
        * Return/Dismiss
    * Creature stat summary
    * Creature inventory (if applicable)
    * Maximum creature limit indicator
    * Creature summoning menu

* **Lair / Base Overview Dashboard**
    * Resource generation rates
    * Storage capacity gauges
    * Power/mana supply levels
    * Creature population
    * Defensive strength
    * Research progress
    * Construction queue
    * NPCs/Citizens list
    * Threat assessment
    * Income/upkeep summary

* **Achievement / Codex Screen**
    * Achievement list with completion status
    * Lore entries discovered
    * Bestiary (creatures encountered)
    * Item encyclopedia
    * Location discoveries
    * Statistic tracking:
        * Enemies defeated
        * Items crafted
        * Quests completed
        * Distance traveled
        * Gold earned

---

## Context-Sensitive Overlays

* **Tooltip Windows**
    * Appear on mouse hover
    * Item stats and description
    * Spell/ability details
    * NPC information
    * Terrain features
    * Building requirements
    * Status effect explanations
    * Comparison data (current vs new item)

* **Confirmation Prompts**
    * Yes/No dialogs for critical actions
    * Item deletion warnings
    * Quest abandonment confirmation
    * Purchase confirmations (expensive items)
    * Permanent choice warnings
    * Save before exit prompts

* **Loading Screens**
    * Loading bar or spinner
    * Game tips and lore
    * Artwork showcasing game content
    * "Press any key to continue" when loaded

* **Death / Defeat Screen**
    * "You Died" or equivalent message
    * Death statistics (cause, location)
    * Respawn options:
        * Respawn at checkpoint
        * Load last save
        * Main menu
    * Experience/gold penalty information (if applicable)

* **Level Up Notification**
    * Banner or popup announcing level gain
    * New abilities unlocked
    * Attribute/skill points available
    * Access to character sheet button
    * Celebratory visual effect

---

## Mobile/Touch UI Considerations (Optional)

* **Touch Controls Overlay**
    * Virtual joystick for movement
    * Action buttons for abilities
    * Tap-to-interact on objects
    * Pinch-to-zoom on maps
    * Swipe gestures for inventory
    * Simplified UI with larger buttons
    * Collapsible panels to maximize screen space

---

## Accessibility Features

* **UI Accessibility Options**
    * Text size scaling
    * High contrast mode
    * Colorblind-friendly palettes
    * Screen reader support
    * Subtitle options
    * Button prompts (keyboard/gamepad display)
    * Camera shake toggle
    * Flashing effects warning/disable
    * UI opacity adjustment
    * One-handed mode (if applicable)

---

## SVG Reference Mockups

Static SVG mockups illustrating specific screens/interfaces above, built for
visual reference rather than production art. Stored in `assets/UI Template/`,
one file per screen. Not every screen above has a mockup yet — this is the
current target set from design notes, and screens are illustrated
incrementally, so a screen missing here isn't a rejected one, just not
reached yet.

* **Main Screen** — not yet illustrated
    * Will illustrate the Main Game Screen (see Core Gameplay Screens above)

* **Mini-Game Screens** — all illustrated, one SVG per screen in `assets/UI Template/`
    * Item Crafting (`item_crafting.svg`) — illustrates the Crafting Station Interface (see Crafting Interfaces above)
    * Alchemy (`alchemy.svg`) — illustrates the Alchemy Interface (see Crafting Interfaces above)
    * Forge Work (`forge_work.svg`) — Smithing-specific variant of the Crafting Station Interface, keyed to `crafting.md`'s Smithing Stations (Forge/Anvil/Rune Forge/Heavy Forge)
    * Inventory Management (`inventory_management.svg`) — illustrates the Inventory Screen (see Inventory Management Screens above)
    * Magic Item Enchantment (`magic_item_enchantment.svg`) — illustrates the Enchanting Interface (see Crafting Interfaces above)
    * Magic Item Creation (`magic_item_creation.svg`) — creating a spell-focus item from scratch, distinct from Enchanting; keyed to `arcane_spell_focus.md`
    * Bio Creature Create: Simple Setup (`bio_creature_create_simple.svg`) — illustrates the Bioforging / Creature Creation Interface's baseline flow (see Crafting Interfaces above)
    * Bio Creature Create: Advanced with Vat (`bio_creature_create_advanced_vat.svg`) — adds the Creature Vat as a visible station, keyed to `crafting.md`'s Bioforging Stations and `devices.md`'s Processing Vats
    * Bio Creature Create: Advanced with Vat + Power Conduits (`bio_creature_create_advanced_vat_power.svg`) — further adds visible power routing into the vat, keyed to `devices.md`'s Power Transmission group (Power Conduit, Line Inlay, Gear Train)

---

## Notes

All UI screens should follow consistent design principles:
- Clear visual hierarchy
- Readable fonts and appropriate sizing
- Intuitive navigation and controls
- Responsive feedback (button highlights, sounds)
- Contextual help and tooltips
- Keyboard shortcuts and hotkeys
- Gamepad support where applicable
- Scalable for different resolutions
- Minimal clicks to access common functions
- Clear indication of selected/active elements
