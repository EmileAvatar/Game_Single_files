# Crafting

## Crafting System Overview

Crafting transforms raw materials into useful items through various stations and skills. Each craft requires:
- **Crafting Station**: Specialized equipment for specific item types
- **Skill Level**: Minimum proficiency to attempt craft
- **Materials**: Required components consumed during creation
- **Time**: Duration to complete craft
- **Success Chance**: Probability based on skill vs difficulty

**Quality Tiers**: Normal → Fine → Superior → Masterwork → Legendary (based on skill margin above requirement)

---

## Crafting Categories

* **Smithing**: Metal weapons, armor, and tools
* **Woodworking**: Bows, staffs, furniture, and wooden structures
* **Leatherworking**: Light armor, bags, and utility items
* **Tailoring**: Cloth armor, robes, and fabric goods
* **Alchemy**: Potions, elixirs, and chemical compounds
* **Enchanting**: Magical enhancements and spell scrolls
* **Jewelcrafting**: Rings, amulets, and gem setting
* **Engineering**: Mechanisms, traps, and siege equipment
* **Cooking**: Food, beverages, and consumable buffs
* **Masonry**: Stone structures, walls, and monuments
* **Carpentry**: Buildings, furniture, and large wooden structures
* **Bioforging**: Living creatures and organic constructs

---

## Crafting Stations

### Smithing Stations

* **Smithing: Basic**
    * Forge: Standard metalworking station for weapons and armor (Required Skill: 0)
        * Base Success: 90% at skill level 0
        * Craft Speed: 100% (baseline)
        * Max Item Tier: Uncommon
        * Fuel Required: Coal (1 per hour)
        * Durability: 1000 uses before repair needed
    * Anvil: Companion to forge for shaping metal (Required Skill: 0)
        * Functions: Repair damaged items, shape ingots, hammer details
        * Base Success: 95% at skill level 0
        * Craft Speed: 100%
        * Max Item Tier: Rare
        * Fuel Required: None
        * Durability: 5000 uses before repair

* **Smithing: Advanced**
    * Rune Forge: Magical metalwork inscribing enchantments during creation (Required Skill: 40)
        * Base Success: 70% at skill level 40, 95% at skill level 60
        * Craft Speed: 75% (slower due to precision)
        * Max Item Tier: Legendary
        * Fuel Required: Mana or Refined Mana (1 per craft) + Coal
        * Durability: 500 uses before repair
        * Special: Can create enchanted items without separate enchanting step
        * Bonus: +15% effectiveness on fire-element enchantments
        * Power Source: Can use Elemental Mana for aligned enchantments (+20% power)
    * Heavy Forge: Industrial-scale smithing for large equipment (Required Skill: 50)
        * Base Success: 80% at skill level 50, 95% at skill level 70
        * Craft Speed: 60% (very slow for massive items)
        * Max Item Tier: Legendary
        * Fuel Required: Coal (3 per hour)
        * Durability: 2000 uses before repair
        * Special: Only station able to craft plate armor, siege weapons, large gates
        * Size: Requires 3x3 tile space

---

### Woodworking Stations

* **Woodworking: Basic**
    * Woodworking Bench: Standard carpentry station (Required Skill: 0)
        * Base Success: 90% at skill level 0
        * Craft Speed: 100%
        * Max Item Tier: Rare
        * Fuel Required: None
        * Durability: 800 uses before repair
        * Crafts: Bows, staffs, arrows, furniture, wooden shields, tool handles

* **Woodworking: Advanced**
    * Master Carpenter's Workshop: Precision woodworking for complex items (Required Skill: 60)
        * Base Success: 75% at skill level 60, 95% at skill level 80
        * Craft Speed: 80%
        * Max Item Tier: Legendary
        * Fuel Required: None
        * Durability: 1500 uses before repair
        * Special: Required for intricate furniture, musical instruments, ship components
        * Bonus: +20% quality chance on furniture
    * Lumber Mill: Industrial wood processing (Required Skill: 25)
        * Base Success: 95% (simple cuts)
        * Craft Speed: 200% (very fast for bulk)
        * Max Item Tier: Common
        * Fuel Required: None (water wheel powered)
        * Durability: 3000 uses before repair
        * Special: Converts logs to planks at 3:1 ratio, bulk processing
        * Size: Requires 4x4 tile space, must be near water source

---

### Leatherworking Stations

* **Leatherworking: Processing**
    * Tanning Rack: Converts raw hides to usable leather (Required Skill: 0)
        * Base Success: 85% at skill level 0
        * Craft Speed: 50% (requires long curing time)
        * Max Item Tier: N/A (processing only)
        * Fuel Required: Tanning solution (various recipes)
        * Durability: 1200 uses before repair
        * Process Time: 2-8 hours depending on hide type
        * Output: 1 hide → 1-3 leather pieces (quality dependent)

* **Leatherworking: Crafting**
    * Leatherworker's Table: Crafting station for leather goods (Required Skill: 0)
        * Base Success: 90% at skill level 0
        * Craft Speed: 120% (faster than metal)
        * Max Item Tier: Rare
        * Fuel Required: None
        * Durability: 600 uses before repair
        * Crafts: Light armor, bags, belts, straps, gloves, boots
    * Master Leatherworker's Station: Advanced leather crafting (Required Skill: 55)
        * Base Success: 75% at skill level 55, 95% at skill level 75
        * Craft Speed: 100%
        * Max Item Tier: Legendary
        * Fuel Required: None
        * Durability: 1000 uses before repair
        * Special: Can work exotic hides (dragon scale, chimera hide, etc.)
        * Bonus: +25% durability on all leather armor crafted

---

### Tailoring Stations

* **Tailoring: Basic**
    * Loom: Weaves raw fiber into cloth and fabric (Required Skill: 0)
        * Base Success: 90% at skill level 0
        * Craft Speed: 80%
        * Max Item Tier: Common
        * Fuel Required: None
        * Durability: 1500 uses before repair
        * Process: Hemp/Flax → Cloth at 2:1 ratio
    * Sewing Table: Crafts cloth armor and garments (Required Skill: 0)
        * Base Success: 92% at skill level 0
        * Craft Speed: 110%
        * Max Item Tier: Rare
        * Fuel Required: None
        * Durability: 800 uses before repair
        * Crafts: Robes, cloth armor, bags, cloaks, banners

* **Tailoring: Advanced**
    * Enchanter's Loom: Creates magically infused fabrics (Required Skill: 50)
        * Base Success: 70% at skill level 50, 90% at skill level 70
        * Craft Speed: 70%
        * Max Item Tier: Legendary
        * Fuel Required: Mana or Pure Mana (1 per craft)
        * Durability: 600 uses before repair
        * Special: Weaves magical threads into cloth during creation
        * Bonus: Robes crafted have +10% spell power inherently
        * Power Source: Can use Elemental Mana for elemental-attuned robes

---

### Alchemy Stations

* **Alchemy: Basic**
    * Alchemy Table: Standard potion brewing station (Required Skill: 0)
        * Base Success: 85% at skill level 0 (volatile reactions)
        * Craft Speed: 100%
        * Max Item Tier: Rare
        * Fuel Required: Heat source (fire, magical)
        * Durability: 1000 uses before repair
        * Crafts: Healing potions, mana elixirs, antidotes, buff potions
        * Risk: 5% chance of explosive failure at low skill

* **Alchemy: Advanced**
    * Master Alchemist's Laboratory: Advanced chemical processing (Required Skill: 60)
        * Base Success: 80% at skill level 60, 95% at skill level 80
        * Craft Speed: 90%
        * Max Item Tier: Legendary
        * Fuel Required: Controlled heat (magical flames preferred)
        * Durability: 1500 uses before repair
        * Special: Can create transmutation potions, permanent stat elixirs
        * Bonus: +50% duration on all buff potions
        * Risk: 2% explosion chance (reduced safety)
    * Distillery: Purifies and concentrates alchemical substances (Required Skill: 35)
        * Base Success: 90% at skill level 35
        * Craft Speed: 60% (slow, precise work)
        * Max Item Tier: Rare
        * Fuel Required: Sustained heat
        * Durability: 2000 uses before repair
        * Special: Extracts essences from plants, increases potion potency by 25%
        * Process: 3 basic potions → 1 concentrated potion

* **Alchemy: Essence Processing**
    * Alchemical Essence Extractor: Extracts base essences from raw materials (Required Skill: 20)
        * Base Success: 85% at skill level 20, 95% at skill level 40
        * Craft Speed: 70% (extraction takes time)
        * Max Item Tier: Uncommon (raw essences)
        * Fuel Required: Sustained low heat
        * Durability: 1800 uses before repair
        * Special: Converts herbs, creature parts, and minerals into base essences
        * Process: Raw materials → Base extracts (10:1 ratio typically)
        * Output: Herbal extracts, organ fluids, mineral powders
        * Size: 2x2 space
    * Alchemical Combiner: Synthesizes complex essences from reagents (Required Skill: 40)
        * Base Success: 75% at skill level 40, 92% at skill level 60
        * Craft Speed: 80%
        * Max Item Tier: Rare (Alchemical Essences)
        * Fuel Required: Moderate heat, Mana (1 per synthesis)
        * Durability: 1200 uses before repair
        * Special: Combines extracts, creature parts, and Magical Essences into Alchemical Essences
        * Process: Multiple reagents → Single Alchemical Essence (recipes vary)
        * Risk: 5% chance of reagent loss on failure
        * Requires: Proper storage containers for volatile essences
        * Size: 3x3 space
    * Essence Refinery: Purifies and concentrates alchemical essences (Required Skill: 55)
        * Base Success: 80% at skill level 55, 96% at skill level 75
        * Craft Speed: 50% (very slow, careful refinement)
        * Max Item Tier: Legendary
        * Fuel Required: Precise controlled heat, Pure Mana (2 per refinement)
        * Durability: 1000 uses before repair
        * Special: Increases potency of Alchemical Essences by 50%
        * Process: 3 Standard Essences → 1 Refined Essence (more powerful)
        * Benefit: Refined essences create superior potions and stronger enchantments
        * Requirement: Must use Rune-Etched Vials or better for storage
        * Size: 2x3 space

---

### Enchanting Stations

* **Enchanting: Basic**
    * Enchanting Altar: Imbues items with magical properties (Required Skill: 0)
        * Base Success: 80% at skill level 0
        * Craft Speed: 100%
        * Max Item Tier: Rare
        * Fuel Required: Mana, Crystal Shards
        * Durability: Permanent (stone construction)
        * Process: Item + Mana + Crystal → Enchanted Item
        * Risk: 10% chance to destroy item on failure at low skill
        * Power Options: Use Elemental Mana for specific element enchantments

* **Enchanting: Advanced**
    * Arcane Nexus: Ultimate enchanting station with ley line connection (Required Skill: 70)
        * Base Success: 85% at skill level 70, 98% at skill level 90
        * Craft Speed: 120% (ley energy accelerates)
        * Max Item Tier: Legendary
        * Fuel Required: Ley line connection (passive), rare crystals
        * Durability: Permanent (magical construction)
        * Special: Can apply multiple enchantments simultaneously
        * Bonus: 50% reduced essence cost for enchanting
        * Risk: Only 3% item destruction chance
        * Requirement: Must be built on ley line intersection
    * Spell Scribe Desk: Creates magical scrolls (Required Skill: 25)
        * Base Success: 85% at skill level 25
        * Craft Speed: 90%
        * Max Item Tier: Uncommon (scrolls)
        * Fuel Required: Magical ink (Mana-infused), parchment
        * Durability: 1000 uses before repair
        * Special: Converts known spells into single-use scrolls
        * Cost: Mana equal to spell level × 10 consumed during inscription
        * Higher-tier scrolls require Refined Mana or Pure Mana

---

### Jewelcrafting Stations

* **Jewelcrafting: Basic**
    * Jeweler's Workbench: Cuts gems and crafts jewelry (Required Skill: 0)
        * Base Success: 88% at skill level 0
        * Craft Speed: 80% (precise, delicate work)
        * Max Item Tier: Rare
        * Fuel Required: None
        * Durability: 1200 uses before repair
        * Crafts: Rings, amulets, necklaces, gem cutting
        * Risk: 15% chance to shatter gem on failed cut (skill 0-20)

* **Jewelcrafting: Advanced**
    * Master Gem Cutter's Station: Precision gemwork (Required Skill: 65)
        * Base Success: 90% at skill level 65, 99% at skill level 85
        * Craft Speed: 90%
        * Max Item Tier: Legendary
        * Fuel Required: None
        * Durability: 2000 uses before repair
        * Special: Can cut prismatic shards, voidstones, star sapphires
        * Bonus: +2 enchantment slots on jewelry crafted here
        * Risk: Only 2% gem shatter chance

---

### Engineering Stations

* **Engineering: Basic**
    * Engineer's Workshop: Crafts mechanisms and devices (Required Skill: 0)
        * Base Success: 87% at skill level 0
        * Craft Speed: 85%
        * Max Item Tier: Uncommon
        * Fuel Required: None
        * Durability: 1000 uses before repair
        * Crafts: Traps, lockpicks, basic mechanisms, tools

* **Engineering: Advanced**
    * Master Engineer's Laboratory: Complex mechanical constructs (Required Skill: 65)
        * Base Success: 80% at skill level 65, 95% at skill level 85
        * Craft Speed: 70% (complex assembly)
        * Max Item Tier: Legendary
        * Fuel Required: None
        * Durability: 1500 uses before repair
        * Special: Creates golems, automated defenses, siege weapons
        * Bonus: Devices have +50% durability
        * Size: Requires 3x3 tile space
    * Siege Workshop: Builds large-scale war machines (Required Skill: 55)
        * Base Success: 85% at skill level 55
        * Craft Speed: 40% (massive constructions)
        * Max Item Tier: Rare
        * Fuel Required: None
        * Durability: 800 uses before repair
        * Special: Only station for ballistas, catapults, siege towers
        * Size: Requires 5x5 outdoor space

---

### Cooking Stations

* **Cooking: Basic**
    * Campfire: Simple cooking over open flame (Required Skill: 0)
        * Base Success: 95% at skill level 0 (simple recipes)
        * Craft Speed: 120%
        * Max Item Tier: Common
        * Fuel Required: Wood (1 per hour)
        * Durability: N/A (basic fire)
        * Crafts: Cooked meat, basic meals, trail rations
        * Limitation: Cannot create complex recipes
    * Kitchen Hearth: Full cooking station (Required Skill: 0)
        * Base Success: 92% at skill level 0
        * Craft Speed: 100%
        * Max Item Tier: Rare
        * Fuel Required: Wood or Coal
        * Durability: Permanent (stone construction)
        * Crafts: All food types, beverages, buff meals

* **Cooking: Advanced**
    * Master Chef's Kitchen: Gourmet cooking facility (Required Skill: 60)
        * Base Success: 88% at skill level 60, 98% at skill level 80
        * Craft Speed: 90%
        * Max Item Tier: Legendary
        * Fuel Required: Controlled heat
        * Durability: Permanent
        * Special: Can create stat-boosting feasts, magical cuisine
        * Bonus: Food buffs last +100% longer
        * Includes: Oven, stove, prep stations, cold storage

---

### Masonry Stations

* **Masonry: Basic**
    * Mason's Workshop: Stone cutting and shaping (Required Skill: 0)
        * Base Success: 90% at skill level 0
        * Craft Speed: 70% (heavy, slow work)
        * Max Item Tier: Uncommon
        * Fuel Required: None
        * Durability: 2000 uses before repair
        * Crafts: Stone blocks, bricks, tiles, simple statues
        * Process: Raw stone → Shaped stone

* **Masonry: Advanced**
    * Master Stonemason's Yard: Precision stonework (Required Skill: 55)
        * Base Success: 85% at skill level 55, 96% at skill level 75
        * Craft Speed: 80%
        * Max Item Tier: Legendary
        * Fuel Required: None
        * Durability: 3500 uses before repair
        * Special: Creates intricate carvings, statues, monuments
        * Bonus: Stone structures have +25% durability
        * Size: Requires 4x4 outdoor space
    * Kiln: Fires clay and bricks (Required Skill: 15)
        * Base Success: 92% at skill level 15
        * Craft Speed: 60% (long firing time)
        * Max Item Tier: Common
        * Fuel Required: Coal or Wood (high heat)
        * Durability: 2500 uses before repair
        * Process: Clay → Bricks/Pottery (8 hour firing cycle)
        * Capacity: 100 bricks per firing

---

### Carpentry Stations

* **Carpentry: Construction**
    * Builder's Workshop: Large-scale construction crafting (Required Skill: 20)
        * Base Success: 88% at skill level 20
        * Craft Speed: 75%
        * Max Item Tier: Rare
        * Fuel Required: None
        * Durability: 1200 uses before repair
        * Crafts: Doors, window frames, roof sections, structural beams
        * Special: Required for building construction components
        * Size: Requires 3x3 space

---

### Bioforging Stations

* **Bioforging: Creation**
    * Creation Vat: Combines organic parts into living creatures (Required Skill: 0)
        * Base Success: 75% at skill level 0 (unstable biology)
        * Craft Speed: 20% (days to weeks for growth)
        * Max Item Tier: Uncommon
        * Fuel Required: Nutrients, Life Essence or Blood of Creature
        * Durability: 500 uses before repair
        * Process: Organic parts + Essence + template → Living creature
        * Risk: 25% mutation chance at low skill
        * Growth Time: 1-7 days depending on creature complexity
        * Power Source: Using specific Blood types grants inherited traits
    * Vitae Incubator: Temperature-controlled growth chamber (Required Skill: 30)
        * Base Success: 85% at skill level 30
        * Craft Speed: 30% (faster than vat)
        * Max Item Tier: Rare
        * Fuel Required: Life Essence, Soul Essence, nutrients
        * Durability: 800 uses before repair
        * Special: Reduces mutation chance to 10%
        * Bonus: +15% creature health and stats
        * Size: Requires 2x2 space
        * Power Station: Can be powered by Mana reservoirs for continuous operation

* **Bioforging: Enhancement**
    * Gene Splicing Table: Combines traits from multiple organisms (Required Skill: 50)
        * Base Success: 70% at skill level 50, 90% at skill level 70
        * Craft Speed: 40%
        * Max Item Tier: Legendary
        * Fuel Required: Essence (Creation Force), Chaos Essence for mutations, stabilizers
        * Durability: 600 uses before repair
        * Special: Creates chimeras and hybrid creatures
        * Risk: 20% critical mutation (creates hostile/deformed creature)
        * Process Time: 3-10 days
        * Power Options: Order Essence reduces mutation risk, Chaos Essence enables intentional mutations
    * Evolution Accelerator: Rapidly advances creature development (Required Skill: 60)
        * Base Success: 80% at skill level 60
        * Craft Speed: 500% (drastically accelerates growth)
        * Max Item Tier: Rare
        * Fuel Required: High Life Essence and Mana consumption
        * Durability: 400 uses before repair
        * Special: Reduces growth time from days to hours
        * Risk: 15% over-evolution (random extra mutations)
        * Cost: 5× normal essence requirement
        * Power Station Compatible: Can connect to Mana reservoir for batch operations

* **Bioforging: Research**
    * Genetic Archive: Preserves creature blueprints (Required Skill: 40)
        * Base Success: 95% (preservation)
        * Craft Speed: N/A
        * Max Item Tier: N/A (storage)
        * Fuel Required: Preservation fluids
        * Durability: Permanent
        * Special: Stores creature templates for later replication
        * Capacity: 50 unique creature templates
        * Bonus: Creatures crafted from stored templates have +20% success

---

## Skill Level Requirements by Item Type

### Smithing Skill Progression

* **Smithing: Weapons (Skill 0-100)**
    * Skill 0-10: Iron Dagger, Iron Sword, basic tools
    * Skill 11-25: Steel Sword, Iron Mace, basic armor repairs
    * Skill 26-40: Steel Longsword, War Hammer, Chainmail
    * Skill 41-55: Silver weapons, Enchanted blade (at Rune Forge)
    * Skill 56-70: Masterwork weapons, Plate Mail (Heavy Forge required)
    * Skill 71-85: Mithril weapons, Adamantite weapons
    * Skill 86-100: Legendary blades, Dragon-forged equipment

* **Smithing: Quality Thresholds**
    * Normal: Minimum skill requirement met
    * Fine: Skill 10 above requirement (+10% stats)
    * Superior: Skill 20 above requirement (+20% stats, +10% durability)
    * Masterwork: Skill 35 above requirement (+35% stats, +25% durability)
    * Legendary: Skill 50+ above requirement (+50% stats, +50% durability, special property)

---

### Woodworking Skill Progression

* **Woodworking: Items (Skill 0-100)**
    * Skill 0-10: Wooden club, basic arrows (×10), simple furniture
    * Skill 11-25: Wooden bow, quarterstaff, improved arrows (×20)
    * Skill 26-40: Composite bow, magical staff base, quality furniture
    * Skill 41-55: Longbow, enchanted staff, masterwork furniture
    * Skill 56-70: Elven bow, living wood staff, intricate carvings
    * Skill 71-85: Legendary bow, ancient wood artifacts
    * Skill 86-100: Heartwood bow (never breaks), mythical staffs

* **Woodworking: Bulk Production**
    * Arrows: Craft amount scales with skill (10 at skill 0, up to 50 at skill 100)
    * Planks: Processing efficiency increases 1% per skill level
    * Furniture: Quality chance increases with skill

---

### Leatherworking Skill Progression

* **Leatherworking: Armor (Skill 0-100)**
    * Skill 0-10: Leather scraps, basic straps, crude leather armor
    * Skill 11-25: Leather armor, gloves, boots, bags
    * Skill 26-40: Studded leather, reinforced boots, quality bags
    * Skill 41-55: Hardened leather armor, dragon scale gloves
    * Skill 56-70: Exotic hide armor, chimera scale armor
    * Skill 71-85: Legendary leather armor, magical hide items
    * Skill 86-100: Living leather armor (self-repairs slowly)

* **Leatherworking: Hide Processing**
    * Skill 0-30: Basic hides (deer, wolf, bear)
    * Skill 31-50: Exotic hides (giant spider, wyvern)
    * Skill 51-70: Dragon scales, basilisk hide
    * Skill 71-100: Mythical creature hides, phoenix feathers

---

### Tailoring Skill Progression

* **Tailoring: Garments (Skill 0-100)**
    * Skill 0-10: Basic cloth, simple robes, bandages
    * Skill 11-25: Cloth armor, mage robes, cloaks
    * Skill 26-40: Quality robes, enchanted cloth, banners
    * Skill 41-55: Battle robes, silk garments, magical cloaks
    * Skill 56-70: Archmage robes, elemental-resistant fabrics
    * Skill 71-85: Legendary robes, spider silk armor
    * Skill 86-100: Weightless robes, phase-cloth garments

---

### Alchemy Skill Progression

* **Alchemy: Potions (Skill 0-100)**
    * Skill 0-10: Minor healing potion (restores 25 HP), basic antidote
    * Skill 11-25: Healing potion (50 HP), mana elixir (30 MP), stamina tonic
    * Skill 26-40: Greater healing (100 HP), buff potions (+15% stat)
    * Skill 41-55: Superior healing (200 HP), resistance potions, poisons
    * Skill 56-70: Regeneration salve, transmutation potions
    * Skill 71-85: Full restore potions, permanent stat elixirs (+1 stat)
    * Skill 86-100: Elixir of life (resurrection), invulnerability potion (10 sec)

* **Alchemy: Failure Consequences**
    * Skill 0-20: 10% explosion chance (20 damage to crafter)
    * Skill 21-40: 5% explosion chance (10 damage)
    * Skill 41-60: 2% explosion chance (5 damage)
    * Skill 61-80: 1% explosion chance
    * Skill 81-100: 0.5% explosion chance

---

### Enchanting Skill Progression

* **Enchanting: Enchantments (Skill 0-100)**
    * Skill 0-10: Minor enchantments (+5% to single stat)
    * Skill 11-25: Basic enchantments (+10% stat, +5 damage type)
    * Skill 26-40: Moderate enchantments (+15% stat, +10 damage, resistance 10%)
    * Skill 41-55: Greater enchantments (+25% stat, +15 damage, special effect)
    * Skill 56-70: Superior enchantments (+35% stat, dual properties)
    * Skill 71-85: Master enchantments (+50% stat, powerful special effects)
    * Skill 86-100: Legendary enchantments (multiple powerful effects, unique properties)

* **Enchanting: Item Destruction Risk**
    * Skill 0-20: 15% item destruction on failure
    * Skill 21-40: 10% item destruction
    * Skill 41-60: 5% item destruction
    * Skill 61-80: 2% item destruction
    * Skill 81-100: 1% item destruction (at basic altar)
    * At Arcane Nexus: Reduces risk by 67%

---

### Jewelcrafting Skill Progression

* **Jewelcrafting: Jewelry (Skill 0-100)**
    * Skill 0-10: Copper ring, basic gem cutting (common gems)
    * Skill 11-25: Silver ring/necklace, semi-precious gem cutting
    * Skill 26-40: Gold jewelry, precious gem cutting (ruby, sapphire)
    * Skill 41-55: Platinum jewelry, flawless gem cutting
    * Skill 56-70: Mithril jewelry, multiple gem setting
    * Skill 71-85: Adamantite jewelry, rare gem cutting (prismatic shard)
    * Skill 86-100: Legendary jewelry with perfect gem arrays

* **Jewelcrafting: Gem Cutting**
    * Poor Cut: Minimum skill, gem retains 60% value
    * Fair Cut: Skill +10, gem retains 80% value
    * Good Cut: Skill +20, gem retains 100% value
    * Excellent Cut: Skill +30, gem gains 120% value, +1 enchant slot
    * Flawless Cut: Skill +50, gem gains 150% value, +2 enchant slots

---

### Engineering Skill Progression

* **Engineering: Devices (Skill 0-100)**
    * Skill 0-10: Lockpicks, basic traps (spike trap)
    * Skill 11-25: Bear trap, alarm bell, simple mechanisms
    * Skill 26-40: Complex traps, locks, crossbow mechanisms
    * Skill 41-55: Siege weapons (ballista, catapult), advanced traps
    * Skill 56-70: Automated defenses, mechanical golems
    * Skill 71-85: Self-reloading siege weapons, advanced golems
    * Skill 86-100: Legendary constructs, perpetual motion devices

---

### Cooking Skill Progression

* **Cooking: Meals (Skill 0-100)**
    * Skill 0-10: Cooked meat (+5 HP over 30 min), baked bread
    * Skill 11-25: Trail rations, vegetable stew (+10 HP, +5 stamina)
    * Skill 26-40: Hearty meals (+25 HP, +15% stat for 1 hour)
    * Skill 41-55: Gourmet meals (+20% to two stats for 2 hours)
    * Skill 56-70: Magical cuisine (+30% all stats, +50 HP, 3 hours)
    * Skill 71-85: Master's feast (+40% all stats, +100 HP, 5 hours)
    * Skill 86-100: Legendary banquet (+50% all stats, +200 HP, 8 hours, party-wide)

* **Cooking: Buff Duration Scaling**
    * Every 10 cooking skill adds +10% duration to food buffs
    * Master Chef's Kitchen doubles this bonus

---

### Bioforging Skill Progression

* **Bioforging: Creatures (Skill 0-100)**
    * Skill 0-10: Basic animal (wolf, bear) - 3 parts, 2 days growth
    * Skill 11-25: Enhanced animal (dire wolf, armored bear) - 4 parts, 3 days
    * Skill 26-40: Simple chimera (wolf-bat, bear-reptile) - 5 parts, 5 days
    * Skill 41-55: Complex hybrid (drake, griffon) - 7 parts, 7 days
    * Skill 56-70: Advanced chimera (manticore, owlbear) - 9 parts, 10 days
    * Skill 71-85: Legendary creature (hydra, chimera) - 12 parts, 14 days
    * Skill 86-100: Mythical being (dragon, phoenix) - 15+ parts, 21 days

* **Bioforging: Mutation Rates**
    * Skill 0-20: 35% minor mutation, 20% major mutation, 10% critical failure
    * Skill 21-40: 20% minor mutation, 10% major mutation, 5% critical failure
    * Skill 41-60: 10% minor mutation, 5% major mutation, 2% critical failure
    * Skill 61-80: 5% minor mutation, 2% major mutation, 1% critical failure
    * Skill 81-100: 2% minor mutation (often beneficial), 0.5% major mutation
    * Minor Mutation: Random stat ±10%, cosmetic changes
    * Major Mutation: Random ability added/removed, personality shift
    * Critical Failure: Hostile creature, deformed, dies within days

---

## Crafting Time & Speed Modifiers

### Base Crafting Times

* **Time: Simple Items (< 5 materials)**
    * Dagger, potion, arrows (×10): 5 minutes
    * Ring, simple trap, bread: 10 minutes
    * Leather gloves, cloth robe: 15 minutes

* **Time: Moderate Items (5-10 materials)**
    * Sword, bow, chainmail: 30 minutes
    * Healing potion (greater), enchanted ring: 45 minutes
    * Studded leather armor, quality furniture: 1 hour

* **Time: Complex Items (10-20 materials)**
    * Plate armor, legendary weapon, siege weapon: 2-4 hours
    * Master enchantment, complex golem: 3-6 hours
    * Building components (door, window frame): 2 hours

* **Time: Legendary Items (20+ materials)**
    * Legendary armor set: 8-12 hours
    * Mythical weapon: 10-15 hours
    * Legendary creature (bioforging): 14-21 days

---

### Speed Modifiers

* **Modifiers: Positive**
    * Helper NPC (+25% speed per skilled assistant, max 2)
    * Quality tools (+15% speed)
    * Well-rested bonus (+10% speed for 2 hours after sleep)
    * Inspiring music (+5% speed, bard performance)
    * Workshop upgrades (+10-30% speed depending on tier)
    * Bulk crafting same item (2nd item +10%, 3rd +15%, max +30%)

* **Modifiers: Negative**
    * Poor lighting (-15% speed)
    * Damaged station (-25% speed, -10% success)
    * Exhausted crafter (-30% speed, -15% success)
    * Subpar materials (-10% speed, quality reduced)
    * Rushed crafting (can pay -50% time for -25% success chance)

---

## Material Consumption & Efficiency

### Material Requirements

* **Requirements: Weapons**
    * Dagger: 1 metal ingot, 1 wood plank (handle)
    * Sword: 2 metal ingots, 1 wood plank, 1 leather (grip)
    * Longsword: 3 metal ingots, 1 wood plank, 2 leather
    * War Hammer: 4 metal ingots, 2 wood planks
    * Bow: 3 wood planks, 2 hemp fiber (string)

* **Requirements: Armor**
    * Leather Armor: 8 leather pieces, 2 hemp fiber
    * Chainmail: 12 metal rings (6 ingots), 3 leather
    * Plate Mail: 20 metal ingots, 5 leather padding

* **Requirements: Potions**
    * Minor Healing: 1 healing herb, 1 water
    * Healing Potion: 2 healing herbs, 1 crystal shard, 1 water
    * Greater Healing: 5 healing herbs, 2 crystal shards, 2 magical essence

* **Requirements: Enchanting**
    * Minor Enchantment: 1 Mana, 1 crystal shard
    * Moderate Enchantment: 3 Mana, 3 crystal shards
    * Greater Enchantment: 7 Refined Mana, 5 crystal shards, 1 gem
    * Legendary Enchantment: 15 Pure Mana, 10 crystal shards, 3 precious gems
    * Divine Enchantment: 5 Ichor, 20 crystal shards, 5 precious gems, 1 Divine Spark

---

### Crafting Efficiency by Skill

* **Efficiency: Material Savings**
    * Skill 0-20: 100% material cost (no savings)
    * Skill 21-40: 95% material cost (5% chance to save 1 material)
    * Skill 41-60: 90% material cost (10% chance to save 1 material)
    * Skill 61-80: 85% material cost (15% average savings)
    * Skill 81-100: 80% material cost (20% average savings)

* **Efficiency: Bulk Crafting**
    * Crafting 10+ identical items: Additional 5% material savings
    * Crafting 50+ identical items: Additional 10% material savings
    * Crafting 100+ identical items: Additional 15% material savings
    * Example: Skill 90 crafter making 100 arrows uses only 65% materials

---

## Quality Tiers & Benefits

### Quality System

* **Quality: Normal (Base)**
    * Stats: 100% of base item
    * Durability: 100%
    * Sell Value: 100%
    * Requirement: Meet minimum skill

* **Quality: Fine (+10 skill above requirement)**
    * Stats: +10% to all stats
    * Durability: +10%
    * Sell Value: +25%
    * Visual: Slightly improved appearance

* **Quality: Superior (+20 skill above requirement)**
    * Stats: +20% to all stats
    * Durability: +25%
    * Sell Value: +50%
    * Visual: Noticeably better craftsmanship
    * Bonus: +1 enchantment slot

* **Quality: Masterwork (+35 skill above requirement)**
    * Stats: +35% to all stats
    * Durability: +50%
    * Sell Value: +100%
    * Visual: Exceptional quality
    * Bonus: +2 enchantment slots, name becomes "[Crafter]'s [Item]"

* **Quality: Legendary (+50 skill above requirement)**
    * Stats: +50% to all stats
    * Durability: +100% (double durability)
    * Sell Value: +200%
    * Visual: Stunning masterpiece with unique flourishes
    * Bonus: +3 enchantment slots, special passive ability, item becomes unique
    * Name: "[Crafter]'s Legendary [Item]"
    * Rarity: Item gains glow effect, becomes famous

---

### Critical Success

* **Critical: Chance**
    * Base: 5% chance on any craft
    * +1% per 10 skill levels
    * +2% with quality tools
    * +3% at master-tier station

* **Critical: Benefits**
    * Automatically upgrades quality tier by one level
    * Refunds 50% of materials used
    * Crafting time reduced by 25%
    * Item gains unique cosmetic flourish
    * Grants bonus crafting EXP (+50%)

---

## Station Upgrades & Maintenance

### Upgrade System

* **Upgrades: Basic Station → Improved Station**
    * Cost: 500 gold, 20 materials, 2 hours labor
    * Benefits: +15% success rate, +10% crafting speed
    * Durability: +50% uses before repair needed

* **Upgrades: Improved Station → Advanced Station**
    * Cost: 2000 gold, 50 materials, 1 day labor
    * Benefits: +25% success rate, +20% crafting speed, +1 max item tier
    * Durability: +100% uses before repair needed
    * Requirement: Relevant skill 50+

* **Upgrades: Advanced Station → Master Station**
    * Cost: 10,000 gold, 200 materials, 3 days labor
    * Benefits: +40% success rate, +35% crafting speed, +2 max item tiers
    * Durability: +200% uses before repair needed
    * Requirement: Relevant skill 75+
    * Special: Can craft legendary-tier items

---

### Maintenance & Repair

* **Maintenance: Regular Upkeep**
    * Check every 100 uses (varies by station)
    * Minor repair: 50 gold, 5 materials, 15 minutes
    * Major repair: 200 gold, 20 materials, 1 hour
    * Full rebuild: 500 gold, 50 materials, 3 hours

* **Maintenance: Degradation Effects**
    * 0-25% wear: No penalty
    * 26-50% wear: -5% success rate, -5% speed
    * 51-75% wear: -15% success rate, -15% speed
    * 76-99% wear: -30% success rate, -30% speed
    * 100% wear: Station breaks, unusable until repaired

* **Maintenance: Prevention**
    * Protective coating: Doubles time between repairs (costs 100 gold)
    * Magical reinforcement: Triples durability (costs 500 gold, 5 essence)
    * Master craftsman upkeep: Permanent +25% durability (skill 80+ required)

---

## Crafting EXP Gain

### EXP Awards

* **EXP: Per Craft**
    * Item at skill minimum: 10 EXP
    * Item 10 levels below skill: 5 EXP
    * Item 20 levels below skill: 2 EXP
    * Item 30+ levels below skill: 1 EXP (minimal learning)
    * Item 10 levels above skill (risky): 25 EXP on success
    * Item 20+ levels above skill: 50 EXP on success

* **EXP: Quality Bonuses**
    * Fine quality: +5 EXP
    * Superior quality: +10 EXP
    * Masterwork quality: +20 EXP
    * Legendary quality: +50 EXP
    * Critical success: +50% EXP

* **EXP: Special Circumstances**
    * First time crafting item: +50 EXP (discovery bonus)
    * Crafting with rare materials: +25% EXP
    * Teaching NPC watching: +15% EXP (mentorship)
    * Failed craft: 2 EXP (learning from mistakes)

---

## Magical Essence Power Stations

### Lair Power Systems

* **Power Stations: Mana Reservoirs**
    * Mana Battery: Stores magical energy for powering crafting stations (Capacity: 1000 Mana)
        * Build Cost: 50 crystal shards, 20 Mana, stone construction materials
        * Recharge Rate: 10 Mana per hour (passive), 100 Mana per hour (with ley line)
        * Output: Powers 1-3 crafting stations simultaneously
        * Benefit: Stations don't consume Mana from player inventory
        * Size: 2x2 space
    * Grand Mana Reservoir: Industrial-scale magical power storage (Capacity: 10,000 Mana)
        * Build Cost: 500 crystal shards, 200 Refined Mana, 50 Mithril ingots
        * Recharge Rate: 50 Mana per hour (passive), 500 Mana per hour (ley line)
        * Output: Powers entire workshop complex (10+ stations)
        * Benefit: +15% success rate on all powered stations
        * Special: Can overclock stations for +50% speed at 2× Mana cost
        * Size: 4x4 space, requires underground chamber

* **Power Stations: Essence Generators**
    * Life Essence Cultivator: Converts organic matter into Life Essence
        * Input: Animal parts, plants, creature corpses
        * Output: 1-5 Life Essence per hour (based on input quality)
        * Build Cost: Creation vat components, 100 Mana, 20 Soul Essence
        * Special: Required for autonomous bioforging operations
        * Size: 3x3 space
    * Soul Harvester: Extracts Soul Essence from defeated creatures
        * Function: Passive collection from creatures killed within 50 tiles
        * Output: 0.1-1.0 Soul Essence per creature (based on intelligence)
        * Build Cost: 200 Voidstone shards, 50 Dark Mana, necromantic components
        * Warning: Considered evil by most factions, reputation penalty
        * Size: 2x2 space, requires ritual circle

* **Power Stations: Divine Energy**
    * Celestial Collector: Harvests Moon Light and Star Dust during night
        * Function: Collects celestial energy under open sky
        * Output: 1 Moon Light per clear night, 0.1 Star Dust per hour
        * Build Cost: 100 crystal shards, 50 Pure Mana, silver construction
        * Bonus: Double output during full moon
        * Requirement: Must be outdoors with clear view of sky
        * Size: 3x3 outdoor space
    * Divine Altar: Converts prayer and sacrifice into Ichor and Divine Spark
        * Function: Offerings to gods generate divine power
        * Output: 0.01 Ichor per 1000 gold in offerings (extremely rare)
        * Build Cost: 1000 precious gems, 500 Pure Mana, blessed materials
        * Special: Specific gods grant different divine essences
        * Requirement: Must have temple and religious followers
        * Size: 5x5 sacred space

* **Power Stations: Alchemical Processing**
    * Essence Distillery: Refines basic Mana into higher tiers
        * Process: 10 Mana → 1 Refined Mana (8 hours)
        * Process: 10 Refined Mana → 1 Pure Mana (24 hours)
        * Build Cost: Master alchemist laboratory, 200 crystal shards
        * Efficiency: Alchemy skill 80+ reduces time by 50%
        * Size: 3x3 space
    * Blood Synthesizer: Creates specific creature blood from Life Essence
        * Process: 5 Life Essence + creature template → 1 Blood of Creature
        * Quality: Synthesized blood is 75% as effective as harvested blood
        * Build Cost: 100 Life Essence, gene splicing table, complex alchemical setup
        * Special: Allows creation without killing rare creatures
        * Size: 2x2 space

### Power Network System

* **Network: Distribution**
    * Essence Conduits: Pipes distributing magical power from reservoirs to stations
        * Cost: 10 gold per tile, crystal shards for junctions
        * Range: Up to 50 tiles from reservoir
        * Benefit: Centralized power system for entire lair
        * Visual: Glowing lines showing power flow
    * Power Nodes: Junction points increasing distribution efficiency
        * Function: Allows branching to multiple stations
        * Benefit: -10% power consumption for connected stations
        * Cost: 50 crystal shards, 20 Mana per node

* **Network: Management**
    * Essence Monitor: Display showing power levels and consumption
        * Information: Real-time Mana levels, consumption rates, station status
        * Alerts: Warnings when power drops below 10%
        * Cost: 100 crystal shards, enchanted display
    * Automatic Shutoff: Prioritizes critical stations during low power
        * Function: Player sets priority levels for each station
        * Benefit: Prevents complete power failure
        * Cost: Integrated into Grand Mana Reservoir

### Spell Casting Power Sources

* **Spellcasting: Mana Consumption**
    * Cantrips (Level 0): 1 Mana
    * Level 1 Spells: 5 Mana
    * Level 2 Spells: 10 Mana
    * Level 3 Spells: 20 Mana
    * Level 4 Spells: 40 Mana
    * Level 5 Spells: 80 Mana (requires Refined Mana)
    * Level 6 Spells: 160 Mana (requires Pure Mana)
    * Level 7 Spells: 320 Pure Mana
    * Level 8 Spells: 640 Pure Mana + 1 Divine Spark
    * Level 9 Spells: 1000 Pure Mana + 5 Ichor (god-tier magic)

* **Spellcasting: Power Source Benefits**
    * Using Elemental Mana: Spell gains +25% power if element matches
    * Using Pure Mana on lower spells: +50% effectiveness
    * Using Ichor: Spell becomes legendary tier, permanent effects possible
    * Using Blood of Creature: Spell gains thematic abilities from creature type

---

## Advanced Crafting Mechanics

### Experimentation System

* **Experimentation: Unknown Recipes**
    * Can attempt to craft without recipe at -30% success chance
    * Costs full materials
    * On success: Learn recipe, gain +100 EXP bonus
    * On failure: Lose materials, but gain 5 EXP and hints toward correct recipe

* **Experimentation: Recipe Discovery**
    * Combine materials in logical ways to discover recipes
    * Intelligence stat increases discovery success chance
    * Research skill (if present) provides hints
    * Some recipes require specific station types
    * Example: Dragon Scale + Forge + High heat = Discover dragon scale armor recipe

---

### Salvaging System

* **Salvaging: Mechanics**
    * Disassemble items to reclaim materials
    * Success chance: 60% base + (skill × 0.5%)
    * Material return: 40-70% of original materials (skill dependent)
    * Higher quality items return more materials
    * Enchanted items return magical essence
    * Failed salvage destroys item with no return

* **Salvaging: Applications**
    * Learn from deconstructing items (+20 EXP if unknown recipe)
    * Reclaim rare materials from unwanted loot
    * Practice skill on cheap items, salvage for material recovery
    * Break down outdated equipment for upgrades

---

### Collaborative Crafting

* **Collaboration: Team Crafting**
    * Up to 3 crafters can work together on one item
    * Lead crafter: Uses their skill for success check
    * Assistants: Provide +25% speed bonus each (max +50%)
    * Assistants: Grant +5% success per assistant if their skill is 50+
    * EXP: Split evenly among all participants
    * Best for: Legendary items, large constructions, complex enchantments

---

### Rush Crafting

* **Rush: Mechanics**
    * Halve crafting time (-50%)
    * Success chance reduced by -25%
    * Quality tier cannot exceed "Fine"
    * Material efficiency reduced by -10%
    * Durability of crafted item reduced by -20%
    * Use case: Emergency crafting, wartime production

---

## Specialized Crafting Systems

### Rune Forging (Smithing + Enchanting)

* **Rune Forging: Process**
    * Requires Rune Forge station
    * Combines smithing and enchanting in single step
    * Materials: Metal + Runes + Magical Essence
    * Skill: Uses average of Smithing and Enchanting skills
    * Time: 150% normal smithing time
    * Benefit: 15% stronger enchantments than separate enchanting
    * Benefit: Can create runic weapons (glow with power)

---

### Living Crafting (Bioforging)

* **Living Crafting: Creature Templates**
    * Basic Template: 3-4 parts (head, body, limbs)
    * Complex Template: 5-7 parts (add wings, tail, special organs)
    * Legendary Template: 8-15 parts (multiple heads, hybrid features)

* **Living Crafting: Part Selection**
    * Each part contributes stats and abilities
    * Brain: Determines intelligence and trainability
    * Eyes: Perception, special vision (darkvision, truesight)
    * Body: HP, size, primary stats
    * Limbs: Speed, attack type
    * Wings: Flight capability
    * Tail: Balance, tail attack
    * Special Organs: Breath weapons, regeneration, venom
    * Hide/Scales: Armor rating, resistances

* **Living Crafting: Compatibility**
    * Compatible parts: No penalty (wolf + dire wolf = compatible)
    * Neutral parts: +10% mutation chance (wolf + bat)
    * Incompatible parts: +25% mutation chance, -15% success (wolf + fish)
    * Opposed parts: +50% mutation chance, -30% success (celestial + demonic)

---

## Crafting Costs & Economy

### Material Costs (Gold Values)

* **Costs: Common Materials**
    * Wood plank: 2 gold
    * Leather piece: 3 gold
    * Cloth: 2 gold
    * Iron ingot: 10 gold
    * Coal: 5 gold

* **Costs: Uncommon Materials**
    * Steel ingot: 25 gold
    * Silver ingot: 50 gold
    * Crystal shard: 30 gold
    * Magical essence: 40 gold

* **Costs: Rare Materials**
    * Gold ingot: 100 gold
    * Mithril ingot: 500 gold
    * Adamantite ingot: 1,000 gold
    * Dragon scale: 800 gold
    * Precious gem (ruby, sapphire): 300 gold

* **Costs: Legendary Materials**
    * Prismatic shard: 5,000 gold
    * Voidstone: 8,000 gold
    * Phoenix feather: 10,000 gold
    * Ancient dragon heart: 15,000 gold

---

### Crafted Item Values

* **Values: Sell Prices**
    * Crafted item base value = Sum of materials × 1.5
    * Normal quality: Base value
    * Fine quality: Base value × 1.25
    * Superior quality: Base value × 1.5
    * Masterwork quality: Base value × 2.0
    * Legendary quality: Base value × 3.0
    * NPC crafter signature: Additional +25% value
    * Famous crafter: Additional +50-100% value

---

## NPC Crafters & Training

### Hiring NPC Crafters

* **Hiring: Skill Levels**
    * Apprentice (Skill 10-30): 10 gold/day wages
    * Journeyman (Skill 31-50): 30 gold/day wages
    * Expert (Skill 51-70): 75 gold/day wages
    * Master (Skill 71-90): 200 gold/day wages
    * Grandmaster (Skill 91-100): 500 gold/day wages

* **Hiring: Benefits**
    * NPCs can craft items while player does other activities
    * NPCs provide assistance bonus when crafting together
    * Can assign bulk production tasks
    * Can maintain and repair stations automatically
    * Expert+ NPCs can teach player (+25% EXP gain for that craft)

---

### Training with Masters

* **Training: Mechanics**
    * Find Master NPC (skill 75+)
    * Pay training fee: 100-1000 gold depending on skill taught
    * Gain +25% EXP in that skill for 7 days
    * Learn 1-3 special recipes
    * Unlock advanced techniques (quality threshold -5 skill requirement)
    * Can train once per master per skill level range (e.g., 0-25, 26-50, etc.)

---

## Crafting Challenges & Achievements

### Challenges

* **Challenge: Speed Crafter**
    * Craft 10 items in under 1 hour: +500 EXP, unlock Rush Crafting
    * Craft 50 items in one day: +1000 EXP, permanent +10% speed

* **Challenge: Perfectionist**
    * Craft 10 Masterwork items: +800 EXP, unlock Perfect Crafting (guaranteed Superior+)
    * Craft 3 Legendary items: +2000 EXP, reputation as master crafter

* **Challenge: Mad Scientist**
    * Create 5 successful chimeras: +1500 bioforging EXP
    * Create legendary creature: Unlock unique bioforge template

* **Challenge: Enchanter Supreme**
    * Apply 50 enchantments: +1000 enchanting EXP
    * Create item with 5+ enchantments: Unlock multi-layered enchanting technique

---

## Crafting Station Locations & Placement

### Placement Requirements

* **Placement: Indoor Stations**
    * Forge: Requires 2x2 space, stone floor, chimney/vent
    * Alchemy Table: Requires 2x2 space, fire source nearby
    * Enchanting Altar: Requires 3x3 space, quiet room (no combat nearby)
    * Jeweler's Bench: Requires 2x2 space, good lighting
    * Most tables/benches: 2x2 space minimum

* **Placement: Outdoor Stations**
    * Heavy Forge: Requires 3x3 outdoor space, heat-resistant ground
    * Siege Workshop: Requires 5x5 outdoor space, flat terrain
    * Lumber Mill: Requires 4x4 space, must be within 10 tiles of water source
    * Kiln: Requires 3x3 outdoor space, fire-safe surroundings

* **Placement: Special Requirements**
    * Arcane Nexus: Must be on ley line intersection (rare locations)
    * Creation Vat: Requires sealed room, drainage, magical containment
    * Water Wheel: Must be in flowing water (river, stream)

---

## Crafting in Different Environments

### Environmental Effects

* **Environment: Cold (Arctic, Mountains)**
    * Alchemy: Potions freeze, -25% success unless heated workspace
    * Smithing: Forge cools faster, +50% fuel consumption
    * Bioforging: Growth slowed by 50%
    * Benefit: Ice/cold enchantments +15% effectiveness

* **Environment: Hot (Desert, Volcanic)**
    * Smithing: +15% speed, -25% fuel cost
    * Alchemy: Potions evaporate, must use sealed containers
    * Leatherworking: Hides dry faster, +20% processing speed
    * Benefit: Fire enchantments +15% effectiveness

* **Environment: Magical Zones (Ley Lines, Corrupted Areas)**
    * Enchanting: +25% success, can create more powerful enchantments
    * Bioforging: +35% mutation chance (can be good or bad)
    * Alchemy: Random potion effects possible
    * Benefit: Access to unique recipes only craftable in these zones

* **Environment: Underground (Caves, Dungeons)**
    * Limited light: -15% success unless torches/lanterns placed
    * Natural minerals: +10% yield when mining for materials
    * Echoing sounds: Smithing attracts enemies
    * Benefit: Earth/stone enchantments +15% effectiveness
