# Game_Single_files

A shared pool of RPG design-reference data — not the source for a single game.

Each `.md` file in this repo is an **independent, standalone reference** for
one system: creatures, items, spells, crafting, stats, and so on. A consuming
project pulls in whichever files it needs — one, a handful, or nearly all of
them — and adapts the contents to its own rules. Nothing here is wired
together into a working game or engine.

## How to use these files

- **Treat every file as separate.** Don't assume a file depends on another
  one being present, and don't assume a consuming project has (or wants) the
  whole set.
- **Shared vocabulary is kept consistent on purpose.** Element names, stat
  names, rank tiers, and similar terms are reused across files so that a
  project pulling in several files at once gets terminology that already
  lines up.
- **Cross-links are implicit, not hard dependencies.** Two files can enrich
  each other when you use them together (see below), but each still has to
  make sense read on its own. Only a handful of files add an explicit
  "(see X.md)" note, reserved for cases where a file genuinely can't be
  understood without another.

### Where the cross-links pay off

- **`professions.md` ↔ `guild.md`** — `guild.md` (the Adventurers' Guild and
  the four other guilds) reuses `professions.md`'s `Guild: Leadership` and
  `Exploration: Adventurers` groups instead of redefining those roles. Pull
  both if you want the guild layer to line up with the profession list it
  organizes; `professions.md` alone is still a complete profession catalog
  without it.
- **`rank.md` ↔ `guild.md`** — the S–F tier scale defined in `rank.md` is
  reused for adventurer rank, mission difficulty, and guild standing in
  `guild.md` (rank and standing are deliberately two separate axes: low rank
  ≠ bad standing). `rank.md` also underpins item quality and creature power
  tiers wherever those show up elsewhere.
- **`class templates/Class_Effect.md` / `Class_Items.md` ↔ everything else** —
  these two are property/schema trees (field names and their enum options),
  not flavor data. They define the taxonomy that other files' `Effect`/`Type`
  fields draw their values from.
- **`guild.md` ↔ `assets/Web/guild_card.svg`, `assets/Web/mission_howling_culling.svg`,
  `templates/`** — the Guild Card and Mission Entry Template sections in
  `guild.md` are illustrated by those static SVGs, with a reusable,
  data-driven version of the same two visuals in `templates/`. If you change
  a field in one, keep the others in sync (see `templates/` below).
- **`devices.md` ↔ `crafting.md`** — `devices.md` is the mechanical/steam-and-rune
  half of the world's power systems; `crafting.md`'s Magical Essence Power
  Stations section is the pure-magic half. Its Creature Vat is the same
  object as `crafting.md`'s Bioforging Creation Vat/Vitae Incubator — read
  that section for the actual creature-growing process.
- **`devices.md` ↔ `rank.md`** — Power Crystals (a Power Source device) are
  graded F through S using `rank.md`'s scale directly, same as any other
  item or creature in the repo.
- **The `class templates/Class_*.md` family ↔ their matching catalog
  files** — `Class_Terrain.md`/`Class_Monster.md`/`Class_Character.md` keep
  their `Type`/`Rank`/etc. enum fields lined up with `terrain.md`/`creatures.md`'s
  Groups, `rank.md`'s tiers, and `races.md`/`professions.md`. A consuming
  project can still take just one catalog file without any `Class_*.md`
  template — the templates are for whoever wants to store these as actual
  data records instead of flavor-text lists.

## File map

### Core catalogs ("Groups + List" format)

The default shape for most files: a short list of named **Groups**, then a
**List** of one-line `Name: description` entries under each group.

- `creatures.md` — monster/NPC species by category (Humanoid, Beast, Undead, Demon, …).
- `item.md` — item types (weapons, armor, etc.) by category.
- `plants.md` — flora used for alchemy, crafting, and world-building.
- `professions.md` — livelihoods/roles (Crafting, Commerce, Military, Governance, …); see cross-link with `guild.md` above.
- `races.md` — playable/NPC races (Standard, Exotic, Monstrous, Elemental).
- `research.md` — research/tech-tree unlock categories.
- `skills.md` — character skills (Attributes, Combat, Magic, Crafting).
- `terrain.md` — ground/wall/environmental tile types.
- `biomes.md` — climate/environment zones.
- `spells.md` — spells by school/effect.
- `recipes.md` — same Groups+List shape, but each leaf is a crafting formula: `Output: Ingredient + Ingredient (at Station)`.

### Taxonomy / schema definitions ("template data")

Pure nested-bullet property **templates** — the shape of a data record for
one kind of thing, not an actual item/monster/etc. Kept to a 2-3 level
hierarchy (field → enum, occasionally field → sub-object → field); `[x]`
marks a repeatable field, `[Type Name]` marks a field that's itself a record
of that type. Each one keeps its enum fields lined up with the matching
catalog file's Groups (see the file itself for which). All seven live under
`class templates/`.

- `class templates/Class_Effect.md` — the property tree for "Effect" objects; defines vocabulary other files' Effect fields use.
- `class templates/Class_Items.md` — the same, for "Item" objects; `Type` mirrors `item.md`'s categories.
- `class templates/Class_Terrain.md` — template for a terrain tile record; `Type`/`Category` mirror `terrain.md`'s Groups.
- `class templates/Class_Monster.md` — template for a monster/creature record; `Type` mirrors `creatures.md`'s Groups, `Rank` uses `rank.md`'s S-F scale.
- `class templates/Class_Character.md` — template for a player/NPC character record; references `races.md`, `professions.md`, `stats.md`, `skills.md`, and `guild.md`.
- `class templates/Class_Alchemy.md` — template for an alchemy entry; fields cover both of `alchemy.md`'s Essence and Bioforging Application sub-patterns.
- `class templates/Class_Recipe.md` — template for a crafting recipe record; complements `recipes.md`'s formula-shorthand catalog and `crafting.md`'s Quality Tiers.

### Stat-block / labeled-field systems

Files whose entries need real fields, formulas, or worked examples instead
of a one-line description.

- `stats.md` — Primary/Secondary character stats with formulas; the most rigorous file, a good precedent for numeric stat design.
- `crafting.md` — crafting stations, Power Stations, and skill-progression tables (field set changes per section — match the section, not a single global template).
- `alchemy.md` — essence and Bioforging entries; ASCII-diagram overview near the top.
- `spellconstruction.md` — the rune system spells are built from, plus worked `Example:` spell blocks.
- `arcane_spell_focus.md` — reusable magic items that store and cast prepared spells.

### Tiered systems / mixed formats

- `rank.md` — the S–F rank scale used for item quality, creature power, quest difficulty, and (via `guild.md`) adventurer rank and guild standing.
- `element.md` — elemental damage types, resistances, and combinations (intentionally the least uniform file — several formats coexist by section).
- `levels.md` — EXP/level progression curves; the only file with Markdown tables and fenced code blocks.
- `guild.md` — the Adventurers' Guild job-board/mission system, plus the other four guilds; ties into `professions.md` and `rank.md` (see cross-links above) and the Guild Card/Mission assets.
- `devices.md` — steam/rune-powered mechanical contraptions across power source (rank-graded crystals, elemental taps), storage, generation, transmission (conduits with swappable line inlay, gear trains, wireless beacons), activation, powered traps, processing vats, and transportation (rail carts, boats, horse carts); the mechanical counterpart to `crafting.md`'s Magical Essence Power Stations.

### Narrative / mixed-prose docs

Design notes rather than strict data catalogs — don't hold these to the
catalog conventions above.

- `GameMechanics.md` — mechanic groups/notes across combat, character, exploration, crafting.
- `UI.md` — UI screens by category (core gameplay, character management, inventory, crafting); its "SVG Reference Mockups" section is the index for `assets/UI Template/`.
- `Craft System Overfiew with Roles.md` — crafting groups (weapon/armor/jewelry/potion/magic/harvest/furniture) and role notes.
- `gamesToCheck.md` — reference games (Geneforge, Baldur's Gate, RimWorld, etc.) to study for UI/crafting/systems inspiration — design research, not RPG data.

### Assets & templates

- `assets/` — reference images, organized by subfolder per type:
  - `assets/Web/` — original, one-off SVG renders referenced from the `.md` files (e.g. `guild_card.svg`, `mission_howling_culling.svg`). New original diagrams for a `.md` file belong here, linked with a relative Markdown image link.
  - `assets/UI Template/` — original SVG mockups for the specific game-UI screens listed in `UI.md`'s "SVG Reference Mockups" section (main screen, crafting/alchemy/forge/inventory/enchanting/creature-creation minigame screens, etc.).
  - Other subfolders (e.g. `Rune stone design/`) and loose files hold **third-party reference images** pulled from external sites for visual inspiration — see [Third-party assets & sources](#third-party-assets--sources) below before using any of these beyond internal reference.
- `templates/` — reusable, data-driven versions of the `assets/Web/` SVGs, meant to be copied into other projects rather than hand-edited per use:
  - `template_utils.js` — shared helpers (rank-color lookup, text wrapping/measuring, SVG export). No layout logic.
  - `guild_card_template.js` / `mission_template.js` — build an SVG string from a plain data object.
  - `guild_card.html` / `mission_template.html` — a live-preview form with a "Save as SVG" button; open directly in a browser, no build step.

### Reference / meta

- `sources.md` — attribution list and license/usage disclaimer for every third-party reference image in `assets/`. See [Third-party assets & sources](#third-party-assets--sources) below.

## Third-party assets & sources

Some images under `assets/` (currently the rune/rune-stone reference images
used alongside `spellconstruction.md` and `arcane_spell_focus.md`) were
pulled from external sites as visual reference, not created for this
project. **They're included for illustration and internal design-reference
purposes only** — rights remain with their original creators as credited,
and none of them are cleared for use in a shipped or commercial product. If
a project built from this repo intends to publish artwork based on or
resembling any of these, replace it with licensed or original art first.

Full source URLs, local file paths, and per-image usage notes are in
[`sources.md`](sources.md) — update that file (not just this note) whenever
a new third-party reference image is added.

## Not part of the data set

`CLAUDE.md` and `note.txt` are git-ignored — local working notes (repo
conventions for `CLAUDE.md`, scratch/TODO ideas for `note.txt`), not
published reference data.
