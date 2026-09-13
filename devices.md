# Devices

## Overview

Devices are physical contraptions a party can find, loot, reverse-engineer,
or build (via Engineering) — the mechanical/steam-and-rune half of the
world's power systems, as opposed to `crafting.md`'s **Magical Essence Power
Stations** section, which covers the pure-magic reservoir/essence network
(Mana Batteries, Essence Generators, ley-line collectors). The two systems
share some vocabulary — crystal shards, ley lines — but carry different
"current": a Power Station moves Mana; a device here moves raw mechanical
**Charge**, **Pressure**, or **Torque**. A single lair can run both side by
side, and a device can substitute for a Power Station wherever a crafting
station just needs *some* power source rather than Mana specifically.

This system exists to bring some **automation / factory-style building** into
the world — steam-and-rock-punk machinery (boilers, gear trains, rail carts)
alongside the rune/crystal side of the same idea, rather than a purely
hand-crafted, one-item-at-a-time game.

## Device Groups

* **Power Source**
    * What it does: The raw origin point power is drawn from before anything
      else in this file stores, generates further from, or transmits it —
      every device ultimately traces back to one of these.
    * Example devices: Power Crystal (graded F-S rank by magic quality),
      Elemental Tap (lava heat, sunlight, wind, etc.)
    * Fragility: Power Crystals are as fragile as any crystal — the higher
      the rank, the more violently it fails when cracked; Elemental Taps are
      fixed installations, immune to conventional damage but uselessly
      inert if physically cut off from their source.
    * Explosiveness: A high-rank Power Crystal releases its stored magic
      violently if shattered; a low-rank crystal just goes inert.
    * Creation: Power Crystals are found or mined, not crafted, then graded
      by an Enchanter or Jeweler; Elemental Taps are built on-site at the
      Engineer's Workshop, anchored to the natural source.

* **Power Storage**
    * What it does: Banks power (Charge) drawn from a source so a device can
      keep running after the source itself stops or is disconnected.
    * Example devices: Crystal Capacitor, Etched Stone Battery
    * Fragility: Crystal-based storage is brittle — a hard hit or an
      overcharge can shatter it outright; stone-based storage is nearly
      indestructible but slow to recharge.
    * Explosiveness: Crystal Capacitor can rupture violently if overcharged;
      Etched Stone Battery does not explode, it just stops holding charge.
    * Creation: Built at the Engineer's Workshop; Etched Stone Battery
      additionally needs a Masonry pass at the Master Stonemason's Yard
      before etching.

* **Power Generation**
    * What it does: Produces raw power (Pressure/Charge) on demand by
      burning fuel or a volatile mixture, rather than drawing from a
      standing Power Source.
    * Example devices: Steam Boiler, Reaction Engine
    * Fragility: Moderate — boilers and engines are built to take heat and
      pressure, but neglect (rust, unclean fuel) degrades them like any
      crafting station.
    * Explosiveness: High — both devices are the main explosion risk in this
      file (overpressure, misfire).
    * Creation: Engineer's Workshop; Reaction Engine additionally needs a
      Crystal Capacitor as an ignition cell.

* **Power Transmission**
    * What it does: Moves power from a source/storage/generation device to
      whatever needs it, over distance or wirelessly.
    * Example devices: Power Conduit (with Copper/Gold/Mana-Crystal Line
      Inlay), Gear Train, Crystal Beacon
    * Fragility: Conduits and gear trains are durable but locational — sever
      a pipe or snap a gear and the whole line downstream stops; a Crystal
      Beacon is fragile to line-of-sight obstruction rather than physical
      damage.
    * Explosiveness: Not applicable — transmission devices fail passively
      (stop conducting) rather than exploding.
    * Creation: Engineer's Workshop for conduits and gears; a Line Inlay is
      a Smithing job (Copper/Gold) or a Jewelcrafting job (Mana-Infused
      Crystal) depending on material.

* **Activation & Control**
    * What it does: Triggers a device's stored or incoming power on a
      specific condition — the switch, not the power itself.
    * Example devices: Activation Rune, Lever
    * Fragility: Levers are nearly unbreakable (pure mechanism); runes can
      be scratched or defaced, permanently disabling them.
    * Explosiveness: Not applicable.
    * Creation: Activation Rune needs an Engineer's Workshop or Enchanting
      Altar pass; Lever is a basic Engineering/Smithing build.

* **Powered Traps**
    * What it does: Wires an Activation device to a power source to build an
      automated hazard that fires without anyone present.
    * Example devices: Rune-Triggered Dart Trap, Steam Slam Trap
    * Fragility: Low — traps are built to survive one or more triggers, but
      repeated firing wears the mechanism down like any crafting station.
    * Explosiveness: Inherited from whatever powers it — a Steam Boiler-fed
      trap carries boiler overpressure risk, a Capacitor-fed trap carries
      shatter risk.
    * Creation: Engineer's Workshop, combining one Activation device with
      one power-source/storage/generation device from this file.

* **Processing Vats**
    * What it does: Bulk-mixes or bulk-grows something — chemicals or a
      living creature — rather than powering anything itself.
    * Example devices: Chemical Vat, Creature Vat
    * Fragility: Vats are large, sturdy fixed installations; the risk is in
      what's inside them, not the housing.
    * Explosiveness: Chemical Vat can suffer a runaway reaction; Creature
      Vat does not explode (failure there is mutation, not detonation — see
      `crafting.md`'s Bioforging rules).
    * Creation: Engineer's Workshop for Chemical Vat; Creature Vat is built
      exactly as `crafting.md`'s Creation Vat/Vitae Incubator.

* **Transportation**
    * What it does: Moves items, materials, or people between places rather
      than moving power — the logistics layer of this system.
    * Example devices: Mine Rail Cart, Boat, Horse Cart
    * Fragility: Varies with build quality and material like any crafted
      vehicle; wear scales with cargo weight and terrain.
    * Explosiveness: Not applicable, unless the vehicle is itself hauling an
      explosive-risk device (e.g. a rail cart carrying a Steam Boiler).
    * Creation: Carpentry (Builder's Workshop) for boats and carts;
      Engineering for rail cart mechanisms and rail-line construction.

---

## Device List

*Note: the entries below are examples only, meant to illustrate the shape
each device group takes — not an exhaustive or final catalog.*

### Power Source

* **Power Crystal**: A raw or refined crystal carrying ambient magic that
  other devices draw from; graded like any other magic item, F (poor,
  barely enchanted) through S (supreme, near-legendary potency)
    * Build Cost: Not crafted — mined or looted, then graded by an Enchanter
      or Jeweler (rank determined by testing at an Enchanting Altar)
    * Output: F Rank trickles a charge only enough for a single
      Lever-triggered device; S Rank can single-handedly run an entire Gear
      Train plus several Activation Runes
    * Special: Rank follows `rank.md`'s S-F scale directly — treat a Power
      Crystal exactly like graded loot when judging its output
* **Elemental Tap**: A fixed installation anchored to a natural power
  source — lava heat, direct sunlight, a permanent updraft — feeding
  continuous power instead of a stored charge
    * Build Cost: 100 iron ingots, 20 crystal shards, Engineer's Workshop;
      must be built on or adjacent to the natural source
    * Output: Continuous while the source is active (lava never cools;
      sunlight stops at night; a wind tap stops in still air)
    * Special: Output scales with the intensity of the natural source at
      that specific location — a tap at a volcano's rim outputs far more
      than one at a cooling lava flow's edge

### Power Storage

* **Crystal Capacitor**: Stores raw kinetic/steam power in a crystal lattice for later release (Capacity: 500 Charge)
    * Build Cost: 20 crystal shards, 10 iron ingots (Engineer's Workshop)
    * Charge Rate: 5 Charge/hour passive, 50 Charge/hour connected to a generator
    * Output: Powers 1-2 mechanical devices simultaneously
    * Special: Can overcharge for a single burst discharge (+200% output, 10% shatter chance)
* **Etched Stone Battery**: A quarried block with power channels etched into its surface, storing ambient power slowly (Capacity: 2000 Charge)
    * Build Cost: Masonry (Master Stonemason's Yard) + 50 crystal dust, then a rune-etching pass at the Engineer's Workshop
    * Charge Rate: 2 Charge/hour ambient (no generator needed), 20 Charge/hour if built near a ley line
    * Output: Passive trickle-feed to every device within etched-line range
    * Special: Etching quality (Engineering skill at time of etching) sets max capacity — a sloppy etch caps low even if the stone is huge

### Power Generation

* **Steam Boiler**: Burns fuel to build steam pressure, driving mechanical devices directly (Capacity: 300 Pressure)
    * Build Cost: 40 iron ingots, 10 copper pipes (Engineer's Workshop)
    * Fuel: Coal (2/hour) or Wood (4/hour)
    * Output: Drives connected gear trains and pistons directly; pressure bleeds off 10%/hour if unused rather than storing well
    * Special: Overpressure risk — 5% explosion chance per hour spent above 90% capacity
* **Reaction Engine**: Burns a volatile chemical mix from a Processing Vat for a short, powerful surge (Capacity: N/A, burst-only)
    * Build Cost: 60 iron ingots, 1 Crystal Capacitor (as an ignition cell)
    * Fuel: 1 dose of Volatile Mixture (see Processing Vats) per activation
    * Output: 500 Charge in a single 10-second burst
    * Special: Misfire chance 15% at low Engineering skill — vents the charge harmlessly instead of delivering it

### Power Transmission

* **Power Conduit (mechanical)**: Pipe or shaft carrying Pressure/Torque/Charge between devices, the physical counterpart to `crafting.md`'s Essence Conduits
    * Build Cost: 5 gold + 1 iron pipe per tile, plus the chosen Line Inlay (below)
    * Range: Loses 1% output per 10 tiles from source; needs a booster gear past 100 tiles
    * Benefit: Centralizes a workshop's power the same way Essence Conduits do for a Mana network
* **Line Inlay**: The material inlaid into a Power Conduit's channel — same
  conduit shell, different inlay, and it can be swapped without rebuilding
  the line
    * Copper Inlay: Carries weak electricity and weak magic flow — cheap, the default choice (Build Cost: 2 gold/tile)
    * Gold Inlay: Carries electricity efficiently and passes magic flow better than copper (Build Cost: 15 gold/tile)
    * Mana-Infused Crystal Inlay: Carries only weak electricity but excellent magic flow — the choice for a purely magical power line (Build Cost: 30 gold/tile + 5 crystal shards/tile)
* **Gear Train**: A chain of gears transferring Torque from a generator to one or more stations
    * Build Cost: 10-30 gears depending on chain length, gold cost scales with gear tier (bronze/steel/mithril)
    * Output: 1:1 Torque transfer per matched gear pair; mismatched gear tiers lose 20% to friction
    * Special: Can gear up (more speed, less force) or gear down (more force, less speed) by pairing different-sized gears
* **Crystal Beacon**: Beams stored Charge wirelessly to any Crystal Capacitor within line of sight
    * Build Cost: 100 crystal shards, 20 Refined Mana (the beam itself is stabilized magically even though the payload is mechanical Charge)
    * Range: 30 tiles, unobstructed line of sight required
    * Output: Transfers up to 50 Charge/hour per paired capacitor; efficiency drops 25% in rain/storms
    * Special: The only transmission method that needs no physical conduit — useful for powering a device across a gap or a wall a pipe can't cross

### Activation & Control

* **Activation Rune**: An inscribed rune that fires a specific, fixed effect the instant it receives Charge/Pressure — the switch, not the power source
    * Build Cost: 10 crystal shards, 1 Mana per rune (Engineer's Workshop or Enchanting Altar)
    * Function: Each rune is carved for exactly one effect (open door, fire dart, ring bell, etc.) — swapping behavior means carving a new rune
    * Special: Higher Engineering skill reduces the Charge cost to trigger the same rune
* **Lever**: A manual mechanical switch — no skill or power cost, just physical input
    * Build Cost: 5 iron ingots, 1 wood plank
    * Function: Opens/closes a gear train or conduit, or manually discharges a capacitor
    * Special: The only Activation method with zero failure chance and zero power cost, at the price of needing someone physically present to pull it

### Powered Traps

Combines one Activation device with a power source to build a triggered
hazard. Basic (unpowered) traps — spike traps, bear traps, tripwires — stay
in `crafting.md`'s Engineering section; the entries below are what an
Engineering trap looks like once you wire a power source into it.

* **Rune-Triggered Dart Trap**: Lever or pressure plate wired to an Activation Rune that fires a Crystal Capacitor's charge through a dart launcher (Required Skill: 25)
    * Build Cost: 1 Activation Rune, 1 Crystal Capacitor, 30 iron ingots
    * Output: 1 dart volley per discharge (damage scales with Capacitor charge at time of trigger)
    * Special: Resets automatically once the Capacitor recharges — no manual rearming needed
* **Steam Slam Trap**: Pressure-plate-triggered Steam Boiler vent that slams a wall section or drops a portcullis (Required Skill: 40)
    * Build Cost: 1 Steam Boiler (dedicated, not shared with a workshop), 50 iron ingots, gear-train linkage
    * Output: One high-force mechanical strike per full pressure build (2-5 minute recharge depending on boiler size)
    * Special: Audible — the boiler hiss gives alert players a few seconds' warning

### Processing Vats

Large mixing/growth tanks. Not power sources themselves, but the batch
processors the rest of this system feeds and draws from.

* **Chemical Vat**: Mixes reagents in bulk to produce a Volatile Mixture (Reaction Engine fuel) or industrial-grade alchemical bases (Required Skill: 30)
    * Build Cost: 80 iron ingots, glass lining, Engineer's Workshop or Alchemy Lab access
    * Process: Bulk reagents → Volatile Mixture (10:1) or → raw Alchemical Essence stock feeding `alchemy.md`'s Essence Processing stations
    * Risk: 8% chance of a runaway reaction (vents the vat's contents, minor area damage) if mismatched reagents are mixed
* **Creature Vat**: The same device as `crafting.md`'s Bioforging **Creation Vat**/**Vitae Incubator** — grows a living creature from organic parts and Life Essence
    * Cross-link: See `crafting.md`'s Bioforging Stations section for the full process, growth times, and mutation rules
    * Note for this file: a Creature Vat wired into this power system (via Power Conduit + Activation Rune, instead of drawing Mana directly) can run its incubation cycle even in a lair with no Mana reservoir at all — trading a slower growth rate for independence from the magic power grid

### Transportation

* **Mine Rail Cart**: A track-bound cart for hauling ore and materials between a mine and a stockpile or workshop
    * Build Cost: 40 iron ingots, 10 wood planks per cart; rail line costs separately, 5 gold per tile of track
    * Output: Hauls up to 500kg per cart; multiple carts can be linked into a train
    * Special: Can be Gear Train-powered for automatic back-and-forth runs instead of needing to be pushed by hand
* **Boat**: Water-borne transport for people and cargo along rivers and coastlines
    * Build Cost: Carpentry (Builder's Workshop), 60 wood planks, 10 leather (sail/rigging) for a sailboat; add a Steam Boiler plus a paddlewheel Gear Train for a steamboat
    * Output: Cargo capacity and speed scale with hull size and, if present, engine power
    * Special: A steam-powered boat is the clearest overlap point between this file's power systems and everyday transport
* **Horse Cart**: A draft-animal-pulled cart for overland cargo and passengers
    * Build Cost: Carpentry (Builder's Workshop), 30 wood planks, 10 iron ingots (axle/wheels), plus a draft animal
    * Output: Cargo capacity scales with cart size and animal strength/count
    * Special: Needs no power system at all — the standard, always-available baseline transport that the powered options are upgrades over

---

## Device List — Simple (Example)

*Note: below is example only, to illustrate a compact catalog format for a
device with many graded variants — not exhaustive.*

### Power Source

* Simple Power Crystal - F Rank - Trash-tier shard; no meaningful charge, salvage for crystal shards only.
* Rough Power Crystal - E Rank - Barely functional; enough for one low-draw Activation Rune, nothing more.
* Cut Power Crystal - D Rank - Suboptimal but usable; powers a single Lever-triggered device or a slow trickle-charge.
* Common Power Crystal - C Rank - Standard Engineer's Workshop stock; keeps one device running steadily.
* Refined Power Crystal - B Rank - Solid and dependable; runs a Crystal Capacitor at full charge rate.
* High-Grade Power Crystal - A Rank - Near-flawless; runs a full workshop's Gear Train plus several Activation Runes.
* Supreme Power Crystal - S Rank - Vanishingly rare, effectively an artifact; can power a small lair's entire mechanical network alone.

---

## Device Power Types

What ultimately drives a device, independent of which functional group
(storage/generation/transmission/etc.) it belongs to. A single device can be
fed by more than one power type — a Water Wheel produces Force directly, or
Force run through a generator becomes Electricity.

* **Force**: Physical movement converted directly into mechanical work.
    * Human-Powered — e.g. a rowboat, a hand-cranked winch
    * Animal — e.g. a horse cart, an ox-driven mill wheel
    * Water Wheel — flowing water turning a wheel to drive a Gear Train
      directly, or a generator to produce Electricity
* **Heat**: Combustion or geothermal energy, built up as Pressure.
    * Fuel-Burning — coal or wood feeding a Steam Boiler
    * Geothermal — an Elemental Tap anchored at a lava flow or volcanic vent
    * Solar — an Elemental Tap exposed to direct sunlight, output dropping
      to zero at night
* **Wind**: Moving air converted into mechanical work, most efficient
  outdoors and at height.
    * Windmill — a fixed installation converting Wind into Force for a Gear
      Train
    * Storm Surge — a rare, temporary high-output burst during severe
      weather, too unreliable to build around
* **Electricity**: A converted, transmittable form of Force/Heat/Wind,
  carried through a Power Conduit's Line Inlay rather than sourced directly.
    * Requires a generator (e.g. a Water Wheel with a coil) to convert
      another power type into Electricity first
    * Carried efficiently through Gold Inlay, cheaply but poorly through
      Copper Inlay
* **Magic Ambience**: Weak, passive magic present in the environment that a
  Power Crystal or Etched Stone Battery can slowly draw on without an
  active source.
    * Strength ranges from barely detectable (most locations) to strong
      (near a ley line), mirroring the Power Crystal F-S rank scale
* **Magic Source**: A rare, intense burst or reservoir of raw magic, strong
  enough to charge a Power Crystal to its rank ceiling in a single exposure.
    * Volcanic eruption, a direct lightning strike, a shattered ley line
      node — one-time or unpredictable events rather than a stable feed

## Cross-links

* **`crafting.md` (Magical Essence Power Stations)** — the pure-magic
  counterpart to this whole file. A lair can mix both: a Grand Mana
  Reservoir powering enchanting stations, and a Steam Boiler + Gear Train
  powering an adjacent Forge, with a Crystal Beacon bridging the two systems
  where a conduit can't reach.
* **`crafting.md` (Engineering Stations, Bioforging Stations)** — devices
  here are built at the Engineer's Workshop/Laboratory; Creature Vat is the
  same object as Bioforging's Creation Vat/Vitae Incubator.
* **`alchemy.md`** — Chemical Vat output can feed Essence Processing as a
  bulk alternative to hand-processing reagents one batch at a time.
* **`rank.md`** — Power Crystal grading uses the S-F scale directly; see
  `rank.md` for the full tier definitions each grade implies.
