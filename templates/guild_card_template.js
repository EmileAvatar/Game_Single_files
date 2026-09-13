/**
 * guild_card_template.js
 *
 * buildGuildCardSVG(data) -> SVG markup string, parametrizing the same
 * layout as assets/Web/guild_card.svg (see guild.md's Guild Card section).
 * Requires template_utils.js to be loaded first (window.TemplateUtils).
 *
 * data fields (all optional, sensible defaults/placeholders used if omitted):
 *   name                 Adventurer name
 *   cardNumber           Registration ID, e.g. "AG-014522"
 *   rank                 One of S/A/B/C/D/E/F (see rank.md)
 *   primaryDesignation   Main role, e.g. "Mage" — can change over time
 *   specialDesignations  Array of earned titles/skills, e.g. ["Tracker", "Dragon Slayer"]
 *   partyAffiliation     Party name, shown top-right; omit for a solo adventurer
 *   registrationDate     e.g. "14th of Solmonth"
 *   issuingBranch        e.g. "Millbrook Branch"
 *   guildName            Header text, defaults to "ADVENTURERS' GUILD"
 *   emblemSvg            Optional raw inline SVG markup to replace the default shield icon
 *   portraitImageUrl     Optional image URL to replace the default portrait silhouette
 */
(function (global) {
  'use strict';

  const U = global.TemplateUtils;

  const DEFAULT_SHIELD_EMBLEM = `
    <path d="M14 0 L28 6 V22 C28 34 20 42 14 46 C8 42 0 34 0 22 V6 Z" fill="#5a3a1f" stroke="#3c260f" stroke-width="1.5"/>
    <path d="M14 6 L22 10 V22 C22 30 18 35 14 38 C10 35 6 30 6 22 V10 Z" fill="#e3cd9a"/>
    <path d="M14 12 L14 30 M8 18 L20 18" stroke="#5a3a1f" stroke-width="2.5" stroke-linecap="round"/>
  `;

  function buildGuildCardSVG(data) {
    data = data || {};
    const name = data.name || 'Unnamed Adventurer';
    const cardNumber = data.cardNumber || '—';
    const rankKey = String(data.rank || 'F').toUpperCase().trim();
    const rankColors = U.RANK_COLORS[rankKey] || U.RANK_COLORS.F;
    const primaryDesignation = data.primaryDesignation || '—';
    const specialDesignations = Array.isArray(data.specialDesignations)
      ? data.specialDesignations.filter((s) => String(s).trim())
      : [];
    const partyAffiliation = (data.partyAffiliation || '').trim();
    const registrationDate = data.registrationDate || '—';
    const issuingBranch = data.issuingBranch || '—';
    const guildName = data.guildName || "ADVENTURERS' GUILD";

    const scratch = U.createScratchSvg();

    // Special Designations flow as tag chips; if they wrap to a 2nd (or 3rd)
    // row the footer moves down to match instead of overlapping them.
    const chipsResult = U.layoutChips(scratch, specialDesignations, 168, 234, { maxRight: 390 });
    U.removeScratchSvg(scratch);

    const BASE_FOOTER_Y = 316;
    const chipsBottom = specialDesignations.length ? chipsResult.bottomY : 234;
    const footerY = Math.max(BASE_FOOTER_Y, chipsBottom + 24);
    const cardHeight = Math.max(340, footerY + 24);

    const chipsSvg = chipsResult.chips.map((c) => `
    <rect x="${c.x}" y="${c.y}" width="${c.width.toFixed(1)}" height="${c.height}" rx="${c.height / 2}" fill="#c9b183" stroke="#5a3a1f" stroke-width="1.2"/>
    <text x="${(c.x + c.width / 2).toFixed(1)}" y="${c.y + c.height / 2 + 3.5}" text-anchor="middle" font-size="10" font-weight="bold" fill="#3c2810">${U.escapeXml(c.label.toUpperCase())}</text>`).join('');

    const emblemMarkup = data.emblemSvg || DEFAULT_SHIELD_EMBLEM;

    const portraitMarkup = data.portraitImageUrl
      ? `<image href="${U.escapeXml(data.portraitImageUrl)}" x="38" y="100" width="112" height="140" preserveAspectRatio="xMidYMid slice" clip-path="url(#portraitClip)"/>`
      : `
    <circle cx="94" cy="144" r="24" fill="#8a6a45"/>
    <path d="M56 230 C56 194 132 194 132 230 Z" fill="#8a6a45"/>`;

    const partyBlock = partyAffiliation
      ? `
  <text x="505" y="32" text-anchor="end" font-size="9" fill="#7a5a35" letter-spacing="2">PARTY</text>
  <text x="505" y="49" text-anchor="end" font-size="11.5" font-weight="bold" fill="#4a2f16">${U.escapeXml(partyAffiliation)}</text>`
      : '';

    return `<svg xmlns="http://www.w3.org/2000/svg" width="540" height="${cardHeight}" viewBox="0 0 540 ${cardHeight}" font-family="Georgia, 'Times New Roman', serif">
  <defs>
    <linearGradient id="parchment" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f3e6c4"/>
      <stop offset="100%" stop-color="#e3cd9a"/>
    </linearGradient>
    <radialGradient id="seal" cx="35%" cy="35%" r="75%">
      <stop offset="0%" stop-color="#9a2c2c"/>
      <stop offset="100%" stop-color="#6e1c1c"/>
    </radialGradient>
    <clipPath id="portraitClip">
      <rect x="38" y="100" width="112" height="140" rx="6"/>
    </clipPath>
  </defs>

  <rect x="8" y="8" width="524" height="${cardHeight - 16}" rx="22" fill="url(#parchment)" stroke="#5a3a1f" stroke-width="4"/>
  <rect x="18" y="18" width="504" height="${cardHeight - 36}" rx="16" fill="none" stroke="#8a6a3f" stroke-width="1.5" stroke-dasharray="2 4"/>

  <g transform="translate(38,28)">${emblemMarkup}</g>
  <text x="245" y="46" text-anchor="middle" font-size="19" font-weight="bold" fill="#4a2f16" letter-spacing="0.5">${U.escapeXml(guildName)}</text>
  <text x="245" y="64" text-anchor="middle" font-size="10" fill="#7a5a35" letter-spacing="2.5">MEMBER IDENTIFICATION CARD</text>
${partyBlock}

  <line x1="30" y1="82" x2="510" y2="82" stroke="#8a6a3f" stroke-width="1.5"/>

  <rect x="38" y="100" width="112" height="140" rx="6" fill="#d9c79f" stroke="#5a3a1f" stroke-width="3"/>
  ${portraitMarkup}
  <text x="94" y="254" text-anchor="middle" font-size="10" fill="#6a4a25" letter-spacing="1">PORTRAIT</text>

  <g font-size="14" fill="#3c2810">
    <text x="168" y="122"><tspan font-weight="bold">NAME:</tspan> ${U.escapeXml(name)}</text>
    <text x="168" y="146"><tspan font-weight="bold">CARD NO:</tspan> ${U.escapeXml(cardNumber)}</text>
    <text x="168" y="170"><tspan font-weight="bold">REGISTERED:</tspan> ${U.escapeXml(registrationDate)}</text>
    <text x="168" y="194"><tspan font-weight="bold">BRANCH:</tspan> ${U.escapeXml(issuingBranch)}</text>
    <text x="168" y="218"><tspan font-weight="bold">DESIGNATION:</tspan> ${U.escapeXml(primaryDesignation)}</text>
  </g>

  <g font-family="Georgia, 'Times New Roman', serif">${chipsSvg}
  </g>

  <circle cx="465" cy="150" r="46" fill="${rankColors.fill}" stroke="${rankColors.stroke}" stroke-width="4"/>
  <circle cx="465" cy="150" r="38" fill="none" stroke="#e3cd9a" stroke-width="1.5"/>
  <text x="465" y="165" text-anchor="middle" font-size="46" font-weight="bold" fill="${rankColors.text}">${U.escapeXml(rankKey)}</text>
  <text x="465" y="206" text-anchor="middle" font-size="12" fill="#4a2f16" letter-spacing="2">RANK</text>

  <g transform="translate(465,272)">
    <circle r="30" fill="url(#seal)" stroke="#4a1414" stroke-width="2"/>
    <g fill="none" stroke="#d4af37" stroke-width="2" stroke-linejoin="round">
      <polygon points="0,-16 4.7,-5 16,-5 6.8,2 10,13 0,6 -10,13 -6.8,2 -16,-5 -4.7,-5"/>
    </g>
    <circle r="30" fill="none" stroke="#4a1414" stroke-width="1" stroke-dasharray="1.5 3"/>
  </g>
  <text x="465" y="313" text-anchor="middle" font-size="9" fill="#6a4a25" letter-spacing="1">GUILD SEAL</text>

  <text x="230" y="${footerY}" text-anchor="middle" font-size="9" font-style="italic" fill="#7a5a35">
    Property of the ${U.escapeXml(guildName)} — not transferable
  </text>
</svg>`;
  }

  global.buildGuildCardSVG = buildGuildCardSVG;
})(window);
