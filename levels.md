# Level Progression

## Progression System Overview

Character and skill progression uses experience points (EXP) to advance through levels. Different progression curves determine how quickly characters grow in power. The system supports:

- **Character Levels**: Overall power and capability (Max Level: 100)
- **Skill Levels**: Individual ability proficiency (Max Level: 100)
- **Base EXP**: 100 EXP as baseline unit
- **Modifiers**: Race, class, traits can add/subtract to progression rates

---

## Progression Types

* **Fast**: Rapid early gains, moderate later (Gaming/Tutorial skills)
* **Linear**: Consistent EXP per level (Combat skills, crafting)
* **Gradual**: Slow steady increase (Magic schools, social skills)
* **Exponential**: Increasingly difficult (Master skills, legendary abilities)
* **Frontloaded**: Easy start, brutal late game (Character levels)
* **Curved**: Moderate start, peaks mid-game, eases late (Weapon proficiency)

---

## Character Level Progression

### Fast Progression (Frontloaded)
Easy early levels, becomes challenging mid-game, moderate late game.

**Formula**: `exp_required = int(100 * (level ** 1.8))`

**Python Code**:
```python
# Fast character progression
exp_required = int(100 * (level ** 1.8))
# With modifier: exp_required = int(100 * (level ** 1.8) * (1 + modifier))
# Example modifier: -0.15 for gifted trait (15% less EXP needed)
```

| Level | EXP Required | Total EXP | Notes |
|-------|--------------|-----------|-------|
| 1 | 100 | 0 | Starting level |
| 2 | 348 | 100 | Very fast early |
| 3 | 746 | 448 | |
| 4 | 1,308 | 1,194 | |
| 5 | 2,043 | 2,502 | |
| 10 | 6,309 | 20,589 | Early game complete |
| 15 | 13,289 | 64,878 | |
| 20 | 22,627 | 146,535 | Mid-game |
| 25 | 34,182 | 275,726 | |
| 30 | 47,871 | 457,308 | |
| 40 | 81,449 | 1,030,167 | Late game |
| 50 | 124,572 | 1,962,592 | |
| 60 | 177,064 | 3,335,124 | Veteran |
| 70 | 238,843 | 5,228,033 | |
| 80 | 309,867 | 7,722,095 | Elite |
| 90 | 390,123 | 10,898,707 | Master |
| 100 | 479,628 | 14,838,648 | Maximum level |

---

### Linear Progression (Consistent)
Same EXP increment each level. Simple and predictable.

**Formula**: `exp_required = 200 * level`

**Python Code**:
```python
# Linear progression - 200 per level
exp_required = 200 * level
# With modifier: exp_required = int(200 * level * (1 + modifier))
# Example: Dwarf gets -10% smithing progression (modifier = -0.10)
```

| Level | EXP Required | Total EXP | Notes |
|-------|--------------|-----------|-------|
| 1 | 200 | 0 | Starting level |
| 5 | 1,000 | 3,000 | |
| 10 | 2,000 | 11,000 | |
| 20 | 4,000 | 42,000 | |
| 30 | 6,000 | 93,000 | |
| 40 | 8,000 | 164,000 | |
| 50 | 10,000 | 255,000 | |
| 60 | 12,000 | 366,000 | |
| 70 | 14,000 | 497,000 | |
| 80 | 16,000 | 648,000 | |
| 90 | 18,000 | 819,000 | |
| 100 | 20,000 | 1,010,000 | Maximum level |

---

### Gradual Progression (Slow & Steady)
Gentle curve, takes time but never overwhelming.

**Formula**: `exp_required = int(100 * (level ** 1.3))`

**Python Code**:
```python
# Gradual progression - slow but steady
exp_required = int(100 * (level ** 1.3))
# With modifier: exp_required = int(100 * (level ** 1.3) * (1 + modifier))
# Example: Human bonus to all skills (modifier = -0.05)
```

| Level | EXP Required | Total EXP | Notes |
|-------|--------------|-----------|-------|
| 1 | 100 | 0 | Starting level |
| 5 | 877 | 2,449 | |
| 10 | 1,995 | 10,963 | |
| 20 | 4,758 | 47,580 | |
| 30 | 8,155 | 124,735 | |
| 40 | 12,126 | 248,517 | |
| 50 | 16,631 | 425,893 | |
| 60 | 21,643 | 663,730 | |
| 70 | 27,142 | 968,899 | |
| 80 | 33,112 | 1,348,281 | |
| 90 | 39,541 | 1,808,761 | |
| 100 | 46,415 | 2,357,228 | Maximum level |

---

### Exponential Progression (Increasingly Difficult)
Gets dramatically harder at higher levels. For elite/legendary skills.

**Formula**: `exp_required = int(100 * (1.15 ** level))`

**Python Code**:
```python
# Exponential progression - increasingly difficult
exp_required = int(100 * (1.15 ** level))
# With modifier: exp_required = int(100 * (1.15 ** level) * (1 + modifier))
# Example: Master craftsman trait (modifier = -0.20)
```

| Level | EXP Required | Total EXP | Notes |
|-------|--------------|-----------|-------|
| 1 | 115 | 0 | Starting level |
| 5 | 201 | 653 | |
| 10 | 404 | 2,313 | Still manageable |
| 15 | 813 | 6,451 | |
| 20 | 1,636 | 16,366 | Getting harder |
| 25 | 3,291 | 39,828 | |
| 30 | 6,621 | 93,811 | Significant grind |
| 35 | 13,317 | 215,407 | |
| 40 | 26,786 | 486,851 | Very difficult |
| 45 | 53,878 | 1,084,147 | |
| 50 | 108,366 | 2,391,996 | Extreme dedication |
| 60 | 438,390 | 10,253,488 | Nearly impossible |
| 70 | 1,773,490 | 43,909,279 | Legendary |
| 80 | 7,177,015 | 188,084,394 | Mythical |
| 90 | 29,044,993 | 805,929,830 | Godlike |
| 100 | 117,590,819 | 3,454,502,631 | Absolute maximum |

---

### Curved Progression (Mid-Peak)
Moderate start, peaks in middle levels, eases toward max. Good for weapon skills.

**Formula**: `exp_required = int(100 + (level * 15) + ((level - 50) ** 2) * 0.5)`

**Python Code**:
```python
# Curved progression - peaks mid-game
exp_required = int(100 + (level * 15) + ((level - 50) ** 2) * 0.5)
# With modifier: exp_required = int((100 + (level * 15) + ((level - 50) ** 2) * 0.5) * (1 + modifier))
# Example: Elf with bows (modifier = -0.15)
```

| Level | EXP Required | Total EXP | Notes |
|-------|--------------|-----------|-------|
| 1 | 1,315 | 0 | Starting level |
| 5 | 1,487 | 6,999 | |
| 10 | 1,900 | 19,424 | |
| 20 | 2,750 | 67,674 | |
| 30 | 3,650 | 148,424 | |
| 40 | 4,600 | 267,674 | |
| 50 | 5,600 | 431,424 | Mid-peak (hardest) |
| 60 | 4,650 | 582,674 | Easing off |
| 70 | 3,750 | 717,924 | |
| 80 | 2,900 | 830,174 | |
| 90 | 2,100 | 912,424 | |
| 100 | 1,350 | 957,674 | Maximum level |

---

## Skill Level Progression

Skills use the same formulas as character levels but with different contexts and modifiers.

### Combat Skills
**Progression Type**: Linear (Consistent practice = consistent growth)
**Formula**: `exp_required = 200 * level`

* **Combat Skills: Melee**
    * One-Handed Weapons: Base formula, +15% faster for humans
    * Two-Handed Weapons: Base formula, +10% faster for orcs
    * Dual Wielding: Base formula, +20% faster for elves
    * Polearms: Base formula
    * Unarmed Combat: Base formula, +25% faster for monks

* **Combat Skills: Ranged**
    * Bows: Curved formula, +15% faster for elves
    * Crossbows: Linear formula, +10% faster for dwarves
    * Thrown Weapons: Linear formula
    * Firearms: Linear formula (if setting appropriate)

---

### Magic Skills
**Progression Type**: Gradual (Magical knowledge accumulates slowly)
**Formula**: `exp_required = int(100 * (level ** 1.3))`

* **Magic Skills: Schools**
    * Evocation: Base formula, +10% faster for high intelligence
    * Necromancy: Base formula, +15% slower for good-aligned
    * Divination: Base formula, +10% faster for high wisdom
    * Transmutation: Base formula
    * Enchantment: Base formula, +10% faster for charisma 16+
    * Conjuration: Base formula
    * Illusion: Base formula, +15% faster for elves
    * Abjuration: Base formula

---

### Crafting Skills
**Progression Type**: Linear (Practice makes perfect)
**Formula**: `exp_required = 200 * level`

* **Crafting Skills: Production**
    * Blacksmithing: Base formula, +20% faster for dwarves
    * Woodworking: Base formula, +10% faster for elves
    * Alchemy: Gradual formula, +10% faster for high intelligence
    * Cooking: Fast formula, accessible to all
    * Tailoring: Base formula
    * Leatherworking: Base formula
    * Jewelcrafting: Gradual formula, precision required
    * Engineering: Gradual formula, +15% faster for gnomes

---

### Social Skills
**Progression Type**: Gradual (Social mastery takes time)
**Formula**: `exp_required = int(100 * (level ** 1.3))`

* **Social Skills: Interaction**
    * Persuasion: Base formula, +10% faster for high charisma
    * Intimidation: Base formula, +15% faster for large races
    * Deception: Base formula, +10% faster for rogues
    * Bartering: Linear formula, practical skill
    * Leadership: Gradual formula, experience-based

---

### Survival Skills
**Progression Type**: Fast early, Gradual late
**Formula**: `exp_required = int(100 * (level ** 1.5))`

* **Survival Skills: Wilderness**
    * Tracking: Base formula, +10% faster for rangers
    * Foraging: Fast formula, basic survival
    * Hunting: Linear formula
    * Camping: Fast formula
    * Navigation: Gradual formula

---

## Modifier System

### Race Modifiers

* **Race: Combat Bonuses**
    * Human: -5% all weapon skills (versatile)
    * Elf: -15% bows, -10% one-handed swords
    * Dwarf: -20% axes, -15% crossbows, -15% smithing
    * Orc: -15% two-handed weapons, -10% intimidation
    * Halfling: -20% stealth, -15% thrown weapons
    * Gnome: -15% engineering, -10% illusion magic

* **Race: Magic Bonuses**
    * Elf: -15% all magic schools
    * Human: -5% all magic schools
    * Gnome: -20% illusion, -10% transmutation
    * Tiefling: -15% necromancy, -10% evocation
    * Aasimar: -15% holy magic, -10% healing

* **Race: Crafting Bonuses**
    * Dwarf: -20% smithing, -15% mining, -10% engineering
    * Elf: -15% woodworking, -10% alchemy
    * Gnome: -20% engineering, -15% jewelcrafting
    * Human: -5% all crafting skills

---

### Class Modifiers

* **Class: Warrior**
    * -10% all melee weapons
    * -15% heavy armor
    * -5% medium armor
    * +20% magic schools (slower)

* **Class: Rogue**
    * -15% stealth, lockpicking, pickpocketing
    * -10% light armor, daggers, bows
    * -5% dual wielding
    * +10% heavy armor (slower)

* **Class: Mage**
    * -20% all magic schools
    * -15% staff weapons
    * -10% alchemy
    * +25% heavy armor (slower)
    * +15% melee weapons (slower)

* **Class: Ranger**
    * -15% bows, tracking, survival
    * -10% medium armor
    * -10% nature magic
    * -5% beast companions

* **Class: Cleric**
    * -15% holy magic, healing
    * -10% maces, shields
    * -10% medium armor
    * +15% necromancy (slower)

* **Class: Paladin**
    * -10% holy magic, one-handed weapons
    * -15% heavy armor
    * -10% leadership
    * +20% stealth (slower - heavy armor)

---

### Trait Modifiers

* **Trait: Learning**
    * Gifted: -15% all skills (learns faster)
    * Quick Learner: -10% all skills
    * Specialized [Skill]: -25% one specific skill
    * Jack of All Trades: -5% all skills, +10% skill cap
    * Slow Learner: +20% all skills (learns slower)

* **Trait: Combat**
    * Weapon Master [Type]: -20% specific weapon type
    * Battle Hardened: -15% all combat skills
    * Frail: +15% melee combat skills (slower)
    * Berserker: -15% two-handed, +10% defense skills (slower)

* **Trait: Magic**
    * Arcane Prodigy: -20% all magic schools
    * School Specialist [School]: -30% one magic school, +10% others
    * Magically Inept: +30% all magic schools
    * Sorcerer Blood: -15% one random school

* **Trait: Crafting**
    * Master Craftsman: -25% all crafting skills
    * Artisan [Skill]: -30% one crafting skill
    * Clumsy: +20% all crafting skills

---

## Combined Modifier Examples

**Example 1: Elven Ranger with Bow Specialization**
```python
# Base: Curved progression for bows
base_exp = int(100 + (level * 15) + ((level - 50) ** 2) * 0.5)

# Modifiers:
# - Elf race: -0.15 (15% faster)
# - Ranger class: -0.15 (15% faster)
# - Weapon Master (Bows): -0.20 (20% faster)
# Total modifier: -0.50 (50% faster!)

exp_required = int(base_exp * (1 + (-0.50)))
exp_required = int(base_exp * 0.50)

# Level 50 bow skill:
# Base: 5,600 EXP
# With modifiers: 2,800 EXP (50% reduction)
```

**Example 2: Dwarven Cleric with Smithing Hobby**
```python
# Base: Linear progression for smithing
base_exp = 200 * level

# Modifiers:
# - Dwarf race: -0.20 (20% faster smithing)
# - Cleric class: +0.0 (no modifier for crafting)
# - Master Craftsman trait: -0.25 (25% faster crafting)
# Total modifier: -0.45 (45% faster)

exp_required = int(base_exp * (1 + (-0.45)))
exp_required = int(base_exp * 0.55)

# Level 50 smithing:
# Base: 10,000 EXP
# With modifiers: 5,500 EXP (45% reduction)
```

**Example 3: Human Mage with Necromancy**
```python
# Base: Gradual progression for magic schools
base_exp = int(100 * (level ** 1.3))

# Modifiers:
# - Human race: -0.05 (5% faster magic)
# - Mage class: -0.20 (20% faster magic)
# - Necromancy has no special human bonus
# Total modifier: -0.25 (25% faster)

exp_required = int(base_exp * (1 + (-0.25)))
exp_required = int(base_exp * 0.75)

# Level 50 necromancy:
# Base: 16,631 EXP
# With modifiers: 12,473 EXP (25% reduction)
```

**Example 4: Orc Warrior with Slow Learner Trait**
```python
# Base: Linear progression for two-handed weapons
base_exp = 200 * level

# Modifiers:
# - Orc race: -0.15 (15% faster two-handed)
# - Warrior class: -0.10 (10% faster melee)
# - Slow Learner trait: +0.20 (20% slower all skills)
# Total modifier: -0.05 (5% faster overall)

exp_required = int(base_exp * (1 + (-0.05)))
exp_required = int(base_exp * 0.95)

# Level 50 two-handed:
# Base: 10,000 EXP
# With modifiers: 9,500 EXP (5% reduction)
# Note: Slow Learner almost cancels racial/class bonuses!
```

---

## Skill EXP Gain Rates

### Combat EXP Sources

* **Combat: Per Action**
    * Successful Hit: 5-15 EXP (based on enemy level)
    * Critical Hit: 15-30 EXP
    * Kill Enemy: 25-100 EXP (based on enemy level/difficulty)
    * Block Attack: 3-8 EXP
    * Parry Attack: 5-12 EXP
    * Perfect Dodge: 8-15 EXP

* **Combat: Multipliers**
    * Enemy Higher Level (+1-5): +10% per level difference
    * Enemy Lower Level (-1-5): -10% per level difference
    * Boss/Elite Enemy: +50% EXP
    * Legendary Enemy: +100% EXP
    * PvP Combat: +25% EXP

---

### Magic EXP Sources

* **Magic: Per Action**
    * Cast Spell Successfully: 10-25 EXP (based on spell level/cost)
    * Critical Cast: 20-40 EXP
    * Spell Kills Enemy: 30-80 EXP
    * Heal Ally: 8-20 EXP
    * Buff Ally: 5-15 EXP
    * Dispel/Counter Enemy Spell: 15-35 EXP

* **Magic: Multipliers**
    * Spell Tier (1-9): +10% per tier
    * Complex Spell (4+ runes): +25% EXP
    * Legendary Spell (6+ runes): +50% EXP
    * Research New Spell: +200 EXP flat bonus

---

### Crafting EXP Sources

* **Crafting: Per Action**
    * Craft Common Item: 5-10 EXP
    * Craft Uncommon Item: 15-25 EXP
    * Craft Rare Item: 30-50 EXP
    * Craft Legendary Item: 75-150 EXP
    * Failed Craft: 2-5 EXP (learning from mistakes)
    * Discover New Recipe: +100 EXP flat bonus

* **Crafting: Multipliers**
    * First Time Crafting: +50% EXP
    * High Quality Result: +25% EXP
    * Masterwork Result: +50% EXP
    * Using Rare Materials: +15% EXP
    * Bulk Crafting (10+ items): -25% EXP per item

---

### Social EXP Sources

* **Social: Per Action**
    * Successful Persuasion: 10-30 EXP
    * Win Intimidation Check: 10-30 EXP
    * Successful Deception: 15-35 EXP
    * Complete Trade Deal: 5-20 EXP
    * Lead Party Successfully: 8-15 EXP per hour
    * Recruit Companion: +50 EXP flat bonus

* **Social: Multipliers**
    * High Stakes Negotiation: +50% EXP
    * Faction Leader Interaction: +35% EXP
    * Failed Check (learn from failure): +3 EXP minimum

---

### Survival EXP Sources

* **Survival: Per Action**
    * Track Animal/Enemy: 5-15 EXP
    * Forage Successfully: 3-8 EXP
    * Hunt Animal: 10-35 EXP
    * Set Camp: 5-10 EXP
    * Navigate Wilderness: 2 EXP per hour
    * Identify Plant/Herb: 8-12 EXP

* **Survival: Multipliers**
    * Dangerous Environment: +30% EXP
    * Harsh Weather: +20% EXP
    * Unknown Territory: +25% EXP

---

## Prestige & Mastery System

### Prestige Levels (Beyond Level 100)

Once a character or skill reaches level 100, they can continue gaining prestige levels.

**Formula**: `exp_required = int(1000000 * (prestige_level ** 2.5))`

**Python Code**:
```python
# Prestige progression - extreme difficulty
prestige_level = 1  # 1-10 prestige levels
exp_required = int(1000000 * (prestige_level ** 2.5))
# No modifiers apply to prestige levels - pure dedication
```

| Prestige | EXP Required | Total EXP | Benefit |
|----------|--------------|-----------|---------|
| 1 | 1,000,000 | 14,838,648 | +5% effectiveness, new title |
| 2 | 5,656,854 | 15,838,648 | +10% effectiveness, unique ability |
| 3 | 15,588,457 | 21,495,502 | +15% effectiveness, rare item unlock |
| 4 | 32,000,000 | 37,083,959 | +20% effectiveness, legendary status |
| 5 | 55,901,699 | 69,083,959 | +25% effectiveness, master craftables |
| 6 | 88,181,538 | 124,985,658 | +30% effectiveness, unique spell/ability |
| 7 | 129,961,742 | 213,167,196 | +35% effectiveness, faction recognition |
| 8 | 181,019,336 | 343,128,938 | +40% effectiveness, mythical status |
| 9 | 242,200,227 | 524,148,274 | +45% effectiveness, godlike power |
| 10 | 316,227,766 | 766,348,501 | +50% effectiveness, legendary legacy |

---

### Mastery Bonuses

* **Mastery: Level Milestones**
    * Level 25 (Apprentice): +5% effectiveness, unlock tier 2 abilities
    * Level 50 (Journeyman): +10% effectiveness, unlock tier 3 abilities
    * Level 75 (Expert): +15% effectiveness, unlock tier 4 abilities
    * Level 100 (Master): +20% effectiveness, unlock tier 5 abilities, prestige available

* **Mastery: Skill Synergies**
    * Two Related Skills at 50+: +5% both skills
    * Three Related Skills at 50+: +8% all three skills
    * All School Skills at 75+: +12% all skills, unlock ultimate ability
    * Example: All weapon skills at 100 = "Weapon Grandmaster" title, +15% all combat

---

## Dynamic EXP Events

* **Events: Bonus EXP**
    * Rested Bonus: +50% EXP for 2 hours after sleeping at inn/home
    * Well Fed: +15% EXP for 1 hour after quality meal
    * Training Montage: +25% EXP while training with NPC master
    * Faction Blessing: +20% EXP for specific skills (faction dependent)
    * Festival/Holiday: +100% EXP for limited time event

* **Events: EXP Penalties**
    * Exhausted: -25% EXP gain
    * Cursed: -50% EXP gain
    * Disease: -15% EXP gain
    * Death Penalty: -75% EXP gain for 30 minutes after resurrection
    * Negative Faction: -10% EXP in hostile territory

---

## Implementation Notes

* **Notes: Balance Considerations**
    * Character levels should feel impactful but achievable
    * Skills should progress faster than character levels
    * Modifiers should stack multiplicatively to prevent extreme combinations
    * Cap total modifier at -75% (minimum 25% of base EXP required)
    * Cap negative modifier at +200% (maximum 300% of base EXP required)

* **Notes: Player Experience**
    * Fast early progression keeps players engaged
    * Mid-game plateau provides mastery opportunity
    * Late game grind should feel optional, not mandatory
    * Prestige system for dedicated players
    * Multiple viable progression paths

* **Notes: Design Philosophy**
    * Reward specialization through modifiers
    * Allow generalist builds but make them slower
    * Racial/class bonuses create identity
    * Traits allow customization
    * EXP sources encourage varied gameplay
