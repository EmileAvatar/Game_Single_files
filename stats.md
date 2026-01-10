# Stats and Attributes

Comprehensive list of all stats used in game systems. Stats are divided into Primary (base/independent) and Secondary (derived/calculated) types.

---

## Character Stats

### Primary Stats

* **Strength (STR):** Physical power affecting melee damage, carrying capacity, and physical intimidation. Base value: 1-100
* **Intelligence (INT):** Mental capacity affecting spell power, mana pool, and learning speed. Base value: 1-100
* **Dexterity (DEX):** Agility and precision affecting accuracy, dodge chance, and attack speed. Base value: 1-100
* **Constitution (CON):** Health and endurance affecting HP pool, stamina, and poison resistance. Base value: 1-100
* **Wisdom (WIS):** Spiritual insight affecting mana regeneration, magical resistance, and perception. Base value: 1-100
* **Charisma (CHA):** Social influence affecting merchant prices, persuasion, and leadership. Base value: 1-100
* **Luck (LCK):** Fortune affecting critical chance, loot quality, and random event outcomes. Base value: 1-100
* **Perception (PER):** Awareness affecting trap detection, hidden item discovery, and ranged accuracy. Base value: 1-100

### Secondary Stats

* **Health Points (HP):** Total hit points before death. Formula: `(CON × 10) + (Level × 5) + Class Bonus`
* **Mana Points (MP):** Total magical energy for casting spells. Formula: `(INT × 8) + (WIS × 4) + (Level × 3)`
* **Stamina Points (SP):** Physical energy for special attacks and sprinting. Formula: `(CON × 6) + (STR × 4) + (Level × 2)`
* **Health Regeneration:** HP restored per second. Formula: `(CON × 0.1) + (WIS × 0.05) + Equipment Bonus`
* **Mana Regeneration:** MP restored per second. Formula: `(WIS × 0.2) + (INT × 0.05) + Equipment Bonus`
* **Stamina Regeneration:** SP restored per second. Formula: `(CON × 0.15) + Equipment Bonus`
* **Attack Power (Physical):** Base physical damage dealt. Formula: `(STR × 2) + Weapon Damage + Skill Bonus`
* **Spell Power (Magical):** Base magical damage dealt. Formula: `(INT × 2.5) + Focus Power + Spell Level`
* **Defense (Physical):** Damage reduction from physical attacks. Formula: `(CON × 0.5) + Armor Rating + Shield Bonus`
* **Defense (Magical):** Damage reduction from magical attacks. Formula: `(WIS × 0.5) + Magical Armor + Resistance Bonus`
* **Dodge Chance:** Percentage chance to completely avoid attacks. Formula: `(DEX × 0.3) + (Armor Weight Penalty) + Skill Bonus`
* **Block Chance:** Percentage chance to block attacks with shield. Formula: `(STR × 0.2) + Shield Block Rating + Skill Bonus`
* **Parry Chance:** Percentage chance to deflect attacks with weapon. Formula: `(DEX × 0.25) + Weapon Parry Rating + Skill Bonus`
* **Critical Hit Chance:** Percentage chance for critical strikes. Formula: `(DEX × 0.2) + (LCK × 0.3) + Weapon Crit Rating`
* **Critical Damage Multiplier:** Damage multiplier on critical hits. Formula: `1.5 + (DEX × 0.01) + Equipment Bonus`
* **Attack Speed:** Attacks per second. Formula: `Base Weapon Speed + (DEX × 0.02) - Armor Weight Penalty`
* **Casting Speed:** Spell cast time reduction percentage. Formula: `(DEX × 0.01) + (INT × 0.005) + Equipment Bonus`
* **Movement Speed:** Travel speed in units per second. Formula: `Base Speed + (DEX × 0.5) - (Total Armor Weight × 0.1)`
* **Carrying Capacity:** Maximum weight that can be carried. Formula: `(STR × 5) + (CON × 2) + Bag Upgrades`
* **Experience Gain Rate:** Multiplier for experience earned. Formula: `1.0 + (INT × 0.002) + Equipment Bonus`

---

## Combat Stats

### Primary Stats

* **Base Damage (Physical):** Raw physical damage before modifiers. Base value from weapon
* **Base Damage (Magical):** Raw magical damage before modifiers. Base value from spell
* **Armor Rating:** Physical damage reduction value. Base value from armor pieces
* **Armor Penetration:** Percentage of enemy armor ignored. Base value: 0-100%
* **Spell Penetration:** Percentage of enemy magical defense ignored. Base value: 0-100%

### Secondary Stats

* **Effective Physical Damage:** Final physical damage after all modifiers. Formula: `(Base Damage + Attack Power) × (1 + Crit Multiplier if Crit) × Skill Multipliers`
* **Effective Magical Damage:** Final magical damage after all modifiers. Formula: `(Base Damage + Spell Power) × (1 + Element Bonus) × (1 - Enemy Resistance)`
* **Damage Reduction (Physical):** Percentage damage reduced from physical attacks. Formula: `(Armor Rating) / (Armor Rating + 100) × 100`
* **Damage Reduction (Magical):** Percentage damage reduced from magical attacks. Formula: `(Magical Defense) / (Magical Defense + 100) × 100`
* **Total DPS (Physical):** Damage per second output for physical attacks. Formula: `Effective Physical Damage × Attack Speed`
* **Total DPS (Magical):** Damage per second output for spells. Formula: `Effective Magical Damage × (1 / Cast Time)`
* **Threat Generation:** Aggro generated per hit for tank roles. Formula: `Damage Dealt × Threat Multiplier + Taunt Bonus`
* **Lifesteal:** Percentage of damage converted to healing. Formula: `Equipment Bonus + Skill Bonus` (typical: 0-50%)
* **Damage Reflection:** Percentage of damage reflected back to attacker. Formula: `Equipment Bonus + Skill Bonus` (typical: 0-30%)

---

## Resistance Stats

### Primary Resistances

* **Fire Resistance:** Reduces fire damage taken. Base value: 0-100% (can exceed 100% for absorption)
* **Ice Resistance:** Reduces ice/cold damage taken. Base value: 0-100%
* **Lightning Resistance:** Reduces electrical damage taken. Base value: 0-100%
* **Poison Resistance:** Reduces poison damage and duration. Base value: 0-100%
* **Holy Resistance:** Reduces holy/divine damage taken. Base value: 0-100%
* **Shadow Resistance:** Reduces dark/shadow damage taken. Base value: 0-100%
* **Nature Resistance:** Reduces nature/earth damage taken. Base value: 0-100%
* **Arcane Resistance:** Reduces pure magical damage taken. Base value: 0-100%
* **Physical Resistance:** Additional physical damage reduction. Base value: 0-100%

### Secondary Resistances

* **Total Elemental Resistance:** Average of all elemental resistances. Formula: `(Fire + Ice + Lightning + Nature) / 4`
* **Total Magical Resistance:** Average of all magical resistances. Formula: `(Holy + Shadow + Arcane) / 3`
* **Status Effect Resistance:** Chance to resist status effects (stun, sleep, charm, etc.). Formula: `(WIS × 0.3) + (CON × 0.2) + Resistance Equipment`
* **Curse Resistance:** Chance to resist curses and hexes. Formula: `(WIS × 0.4) + Holy Resistance × 0.5`
* **Mind Control Resistance:** Chance to resist charm and domination effects. Formula: `(WIS × 0.5) + (INT × 0.2) + Equipment Bonus`

---

## Item Stats

### Primary Stats

* **Item Level:** Required level to use item. Base value: 1-100+
* **Item Quality:** Tier of item rarity. Values: Common, Uncommon, Rare, Epic, Legendary, Mythic
* **Weapon Damage:** Base damage range for weapons. Format: Min-Max (e.g., 15-25)
* **Weapon Speed:** Attack speed of weapon. Base value: 0.5-3.0 seconds per attack
* **Armor Value:** Defense provided by armor piece. Base value: 1-1000+
* **Durability (Current):** Current condition of item. Base value: 0-Max Durability
* **Durability (Max):** Maximum condition before item breaks. Base value: 10-1000+
* **Item Weight:** Encumbrance value of item. Base value: 0.1-100+ lbs
* **Item Value:** Base selling price in gold. Base value: 1-1000000+ gold
* **Stack Size:** Maximum number of items per inventory slot. Base value: 1-999

### Secondary Stats

* **Damage Per Second (DPS):** Average damage output. Formula: `((Min Damage + Max Damage) / 2) / Weapon Speed`
* **Durability Percentage:** Current condition as percentage. Formula: `(Current Durability / Max Durability) × 100`
* **Sell Value:** Actual gold received when selling. Formula: `Item Value × (CHA Modifier) × (Faction Reputation) × (Durability %)`
* **Repair Cost:** Gold required to repair item. Formula: `(Max Durability - Current Durability) × Item Quality Multiplier × Material Cost`
* **Effective Armor Rating:** Total armor from all equipped pieces. Formula: `Sum of all equipped armor values + Set Bonuses`
* **Weight Penalty:** Movement speed reduction from heavy equipment. Formula: `Total Equipped Weight - (STR × 2)` (if positive, applies penalty)

---

## Spell Focus Stats

### Primary Stats

* **Spell Capacity:** Number of spells that can be stored. Base value: 1-100+ (varies by focus type)
* **Focus Power:** Bonus to spell damage/healing. Base value: 0-500+
* **Mana Efficiency:** Percentage reduction in spell mana cost. Base value: 0-50%
* **Cast Speed Bonus:** Percentage reduction in cast time. Base value: 0-40%
* **Spell Amplification:** Multiplier to specific spell schools. Base value: 1.0-2.0×

### Secondary Stats

* **Effective Spell Power:** Total spell power with focus equipped. Formula: `Base Spell Power + Focus Power + (INT × Focus Multiplier)`
* **Effective Mana Cost:** Actual mana cost of spells. Formula: `Base Spell Cost × (1 - Mana Efficiency - INT Bonus)`
* **Total Spell Capacity:** Maximum spells storable with all focuses. Formula: `Sum of all equipped focus capacities`
* **Focus Durability:** Condition of spell focus (for crystal balls, staves). Formula: `Uses Remaining / Max Uses × 100`

---

## Creature Stats

### Primary Stats

* **Creature Level:** Power level of creature. Base value: 1-100+
* **Size Category:** Physical size classification. Values: Tiny, Small, Medium, Large, Huge, Colossal
* **Creature Type:** Species classification. Values: Beast, Humanoid, Undead, Demon, Dragon, Elemental, etc.
* **Loyalty:** Obedience level for tamed creatures. Base value: 0-100
* **Morale:** Combat willingness and effectiveness. Base value: 0-100
* **Aggression:** Hostility level and attack frequency. Base value: 0-100
* **Intelligence (Creature):** Problem-solving ability and trainability. Base value: 1-100

### Secondary Stats

* **Combat Rating:** Overall combat effectiveness score. Formula: `(Total Stats / 6) × Level × Size Multiplier`
* **Evolution Points:** Progress toward next evolution. Formula: `XP Gained / XP Required × 100`
* **Training Progress:** Learning speed for new abilities. Formula: `(Intelligence × 0.5) + (Loyalty × 0.3) + Trainer Skill`
* **Mutation Stability:** Likelihood of successful mutation. Formula: `100 - (Number of Mutations × 5) + Lab Quality`
* **Upkeep Cost:** Daily food/mana required to maintain creature. Formula: `Size Multiplier × (Level / 10) × Creature Type Modifier`
* **Taming Difficulty:** Challenge rating for taming wild creature. Formula: `Creature Level + (100 - Intelligence) + Aggression`
* **Breeding Compatibility:** Chance of successful breeding. Formula: `(Species Match %) × (Level Difference Penalty) × (Morale / 100)`

---

## Settlement/Lair Stats

### Primary Stats

* **Population:** Total number of inhabitants (NPCs + Creatures). Base value: 0-10000+
* **Territory Size:** Area controlled in square units. Base value: 100-100000+
* **Wealth:** Total gold and valuable resources. Base value: 0-1000000+
* **Food Supply:** Total food available. Base value: 0-10000+
* **Building Count:** Total number of structures. Base value: 0-1000+
* **Defense Rating:** Fortification strength. Base value: 0-1000+

### Secondary Stats

* **Happiness:** Average morale of all inhabitants. Formula: `Sum(Individual Morale) / Population`
* **Production Rate (Food):** Food generated per day. Formula: `(Farm Count × Farm Efficiency) + (Farmers × Farming Skill)`
* **Production Rate (Materials):** Resources gathered per day. Formula: `(Gatherers × Gathering Speed) × Resource Availability`
* **Production Rate (Gold):** Income generated per day. Formula: `(Shops × Shop Revenue) + (Trade Routes × Trade Value) - Expenses`
* **Consumption Rate (Food):** Food consumed per day. Formula: `Population × Food Consumption Per Capita`
* **Consumption Rate (Materials):** Materials used per day. Formula: `(Active Construction × Material Cost) + (Crafting × Material Cost)`
* **Net Food:** Food surplus or deficit per day. Formula: `Production Rate (Food) - Consumption Rate (Food)`
* **Net Income:** Gold profit or loss per day. Formula: `Production Rate (Gold) - (Population × Upkeep Cost)`
* **Growth Rate:** Population increase per month. Formula: `(Happiness / 100) × (Net Food / 100) × (Housing Available / Population) × Base Growth Rate`
* **Security Rating:** Safety from external threats. Formula: `(Defense Rating + Guard Count × Guard Level) / (Threat Level + 1)`
* **Research Speed:** Rate of technology/spell research. Formula: `(Researcher Count × Intelligence) × Lab Quality × Research Bonus`
* **Expansion Potential:** Ability to grow territory. Formula: `(Available Land × 0.3) + (Military Strength × 0.7)`

---

## Economic Stats

### Primary Stats

* **Gold:** Primary currency amount. Base value: 0-999999999
* **Merchant Reputation:** Standing with traders. Base value: -100 to +100
* **Buy Price Modifier:** Multiplier on purchase prices. Base value: 0.5× to 2.0×
* **Sell Price Modifier:** Multiplier on selling prices. Base value: 0.3× to 1.0×
* **Barter Skill:** Ability to negotiate prices. Base value: 0-100

### Secondary Stats

* **Effective Buy Price:** Actual cost when purchasing items. Formula: `Base Item Value × Buy Price Modifier × (1 - Barter Skill × 0.003)`
* **Effective Sell Price:** Actual gold received when selling items. Formula: `Base Item Value × Sell Price Modifier × (1 + Barter Skill × 0.002) × (CHA × 0.005)`
* **Haggle Success Chance:** Chance to successfully negotiate better prices. Formula: `(CHA × 0.4) + (Barter Skill × 0.5) + (Merchant Reputation × 0.1)`
* **Trading Profit Margin:** Profit percentage on buy/sell transactions. Formula: `(Sell Price / Buy Price - 1) × 100`
* **Auction Bid Power:** Maximum effective bid in auctions. Formula: `Gold × (CHA / 100) × Reputation Multiplier`

---

## Crafting Stats

### Primary Stats

* **Crafting Level:** Overall crafting skill level. Base value: 1-100
* **Crafting Speed:** Base time to craft items. Base value: 0.5× to 2.0× normal time
* **Crafting Quality:** Base quality of crafted items. Base value: 0-100
* **Success Chance:** Base chance of successful craft. Base value: 0-100%
* **Critical Craft Chance:** Chance to create superior quality item. Base value: 0-50%

### Secondary Stats

* **Effective Crafting Time:** Actual time to complete crafting. Formula: `Base Craft Time × (1 / Crafting Speed) × (1 - DEX × 0.002)`
* **Item Quality Roll:** Final quality of crafted item. Formula: `Base Crafting Quality + (Critical Craft ? Bonus : 0) + Random(0, 20)`
* **Material Efficiency:** Chance to save materials during crafting. Formula: `INT × 0.2 + Crafting Level × 0.1`
* **Durability Bonus:** Extra durability on crafted items. Formula: `(Crafting Level × 2) + (Item Quality × 0.5)`
* **Enchantment Success:** Chance to successfully enchant items. Formula: `(INT × 0.3) + (WIS × 0.2) + (Crafting Level × 0.5)`
* **Research Discovery Rate:** Speed of learning new recipes. Formula: `(INT × 0.4) + (PER × 0.3) + Research Equipment Bonus`

---

## Status Effect Stats

### Primary Stats

* **Effect Potency:** Strength of buff or debuff. Base value: 1-100
* **Effect Duration:** Time effect lasts in seconds. Base value: 1-600+
* **Stack Count:** Number of times effect can stack. Base value: 1-10
* **Dispel Resistance:** Difficulty to remove effect. Base value: 0-100

### Secondary Stats

* **Effective Duration:** Actual time considering resistances. Formula: `Base Duration × (1 - Target Resistance) × (1 + Caster WIS × 0.01)`
* **Total Effect Strength:** Combined potency of stacked effects. Formula: `Effect Potency × Stack Count × (1 + Stack Multiplier)`
* **Cleanse Difficulty:** Challenge to remove status effect. Formula: `Dispel Resistance + (Caster Level - Cleanser Level) × 5`
* **Tick Damage/Healing:** Damage or healing per second for DoT/HoT effects. Formula: `Effect Potency × Stack Count / Duration`

---

## Notes

- All percentage-based stats cap at 100% unless specified otherwise (e.g., resistances can exceed 100% for absorption effects)
- Formulas provided are baseline examples and can be adjusted per game requirements
- Stats marked with "Equipment Bonus" derive from equipped items and enchantments
- "Skill Bonus" comes from learned abilities and character progression
- Negative resistances (below 0%) indicate vulnerability, increasing damage taken

