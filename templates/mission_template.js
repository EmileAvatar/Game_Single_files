/**
 * mission_template.js
 *
 * buildMissionSVG(data) -> SVG markup string, parametrizing the same layout
 * as assets/mission_howling_culling.svg (see guild.md's Mission Entry
 * Template section). Requires template_utils.js to be loaded first
 * (window.TemplateUtils).
 *
 * The Objective and Bonus Objective boxes word-wrap to fit whatever length
 * text is supplied and grow their height to match; everything below them
 * (failure penalty, footer, the card itself) cascades down so nothing
 * overlaps regardless of how long the text is.
 *
 * data fields (all optional, sensible defaults/placeholders used if omitted):
 *   missionName, client, rank (S–F, see rank.md), category, location,
 *   reward, timeLimit, partySize, objective, failurePenalty,
 *   bonusObjective (omit entirely to hide that box)
 */
(function (global) {
  'use strict';

  const U = global.TemplateUtils;

  function buildMissionSVG(data) {
    data = data || {};
    const missionName = data.missionName || 'Untitled Mission';
    const client = data.client || '—';
    const rankKey = String(data.rank || 'F').toUpperCase().trim();
    const rankColors = U.RANK_COLORS[rankKey] || U.RANK_COLORS.F;
    const category = (data.category || 'General').toUpperCase();
    const location = data.location || '—';
    const reward = data.reward || '—';
    const timeLimit = data.timeLimit || '—';
    const partySize = data.partySize || '—';
    const objective = data.objective || 'No objective specified.';
    const failurePenalty = (data.failurePenalty || '').trim();
    const bonusObjective = (data.bonusObjective || '').trim();

    const CARD_LEFT = 45, CARD_RIGHT = 375, BOX_WIDTH = CARD_RIGHT - CARD_LEFT;
    const TEXT_PAD = 15;
    const LINE_HEIGHT = 17;

    const scratch = U.createScratchSvg();
    const objLines = U.wrapText(scratch, objective, BOX_WIDTH - TEXT_PAD * 2, 12);
    const bonusLines = bonusObjective
      ? U.wrapText(scratch, bonusObjective, BOX_WIDTH - TEXT_PAD * 2, 12)
      : [];
    // category tag chip, auto-sized to the actual text
    const categoryChip = U.layoutChips(scratch, [category], 45, 122, {
      fontSize: 11, height: 27, paddingX: 16, maxRight: 300
    }).chips[0];
    U.removeScratchSvg(scratch);

    const objBoxHeight = Math.max(40, objLines.length * LINE_HEIGHT + 20);
    const objHeadingY = 352;
    const objBoxY = objHeadingY + 6;

    let bonusHeadingY = null, bonusBoxY = null, bonusBoxHeight = 0;
    let cursorY = objBoxY + objBoxHeight + 26;

    if (bonusObjective) {
      bonusBoxHeight = Math.max(40, bonusLines.length * LINE_HEIGHT + 20);
      bonusHeadingY = cursorY;
      bonusBoxY = bonusHeadingY + 6;
      cursorY = bonusBoxY + bonusBoxHeight + 26;
    }

    let failureY = null;
    if (failurePenalty) {
      failureY = cursorY;
      cursorY = failureY + 24;
    }

    const footerY = cursorY + 6;
    // Card geometry keeps the same margins as the original hand-authored
    // poster: the outer rect starts at y=25 with a 20px gap below it to the
    // viewBox edge, the dashed inner rect starts at y=35 with a 30px gap.
    // Deriving cardHeight this way (rather than a flat offset from footerY)
    // keeps those margins correct no matter how tall the content grows.
    const OUTER_RECT_TOP = 25, OUTER_RECT_BOTTOM_MARGIN = 20;
    const INNER_RECT_TOP = 35, INNER_RECT_BOTTOM_MARGIN = 30;
    const FOOTER_BOTTOM_PADDING = 20;
    const cardHeight = footerY + FOOTER_BOTTOM_PADDING + OUTER_RECT_BOTTOM_MARGIN;
    const outerRectHeight = cardHeight - OUTER_RECT_TOP - OUTER_RECT_BOTTOM_MARGIN;
    const innerRectHeight = cardHeight - INNER_RECT_TOP - INNER_RECT_BOTTOM_MARGIN;

    const objLinesSvg = objLines
      .map((line, i) => `<text x="${CARD_LEFT + TEXT_PAD}" y="${objBoxY + 21 + i * LINE_HEIGHT}" font-size="12" fill="#3c2810">${U.escapeXml(line)}</text>`)
      .join('\n  ');

    const bonusBlock = bonusObjective ? `
  <text x="${CARD_LEFT}" y="${bonusHeadingY}" font-size="11.5" font-weight="bold" fill="#4a2f16" letter-spacing="1.5">BONUS OBJECTIVE</text>
  <rect x="${CARD_LEFT}" y="${bonusBoxY}" width="${BOX_WIDTH}" height="${bonusBoxHeight}" rx="6" fill="none" stroke="#8a6a3f" stroke-width="1.5" stroke-dasharray="4 3"/>
  ${bonusLines.map((line, i) => `<text x="${CARD_LEFT + TEXT_PAD}" y="${bonusBoxY + 21 + i * LINE_HEIGHT}" font-size="12" fill="#3c2810">${U.escapeXml(line)}</text>`).join('\n  ')}` : '';

    const failureBlock = failurePenalty
      ? `\n  <text x="${CARD_LEFT}" y="${failureY}" font-size="11" font-style="italic" fill="#7a2f1f">Failure Penalty: ${U.escapeXml(failurePenalty)}</text>`
      : '';

    return `<svg xmlns="http://www.w3.org/2000/svg" width="420" height="${cardHeight}" viewBox="0 0 420 ${cardHeight}" font-family="Georgia, 'Times New Roman', serif">
  <defs>
    <linearGradient id="parchment2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f3e6c4"/>
      <stop offset="100%" stop-color="#e3cd9a"/>
    </linearGradient>
  </defs>

  <line x1="210" y1="14" x2="210" y2="30" stroke="#3c3c3c" stroke-width="2"/>
  <circle cx="210" cy="14" r="8" fill="#6b6b6b" stroke="#3c3c3c" stroke-width="1.5"/>

  <rect x="15" y="25" width="390" height="${outerRectHeight}" rx="14" fill="url(#parchment2)" stroke="#5a3a1f" stroke-width="4"/>
  <rect x="25" y="35" width="370" height="${innerRectHeight}" rx="10" fill="none" stroke="#8a6a3f" stroke-width="1.5" stroke-dasharray="2 4"/>

  <g transform="translate(42,44) scale(0.55)">
    <path d="M14 0 L28 6 V22 C28 34 20 42 14 46 C8 42 0 34 0 22 V6 Z" fill="#5a3a1f" stroke="#3c260f" stroke-width="1.5"/>
    <path d="M14 6 L22 10 V22 C22 30 18 35 14 38 C10 35 6 30 6 22 V10 Z" fill="#e3cd9a"/>
    <path d="M14 12 L14 30 M8 18 L20 18" stroke="#5a3a1f" stroke-width="2.5" stroke-linecap="round"/>
  </g>
  <text x="210" y="52" text-anchor="middle" font-size="9.5" fill="#7a5a35" letter-spacing="2.5">GUILD JOB BOARD POSTING</text>

  <text x="210" y="90" text-anchor="middle" font-size="27" font-weight="bold" fill="#4a2f16">${U.escapeXml(missionName)}</text>
  <line x1="45" y1="106" x2="375" y2="106" stroke="#8a6a3f" stroke-width="1.5"/>

  <rect x="${categoryChip.x}" y="${categoryChip.y}" width="${categoryChip.width.toFixed(1)}" height="${categoryChip.height}" rx="${categoryChip.height / 2}" fill="#c9b183" stroke="#5a3a1f" stroke-width="1.2"/>
  <text x="${(categoryChip.x + categoryChip.width / 2).toFixed(1)}" y="${categoryChip.y + categoryChip.height / 2 + 4}" text-anchor="middle" font-size="11" font-weight="bold" fill="#3c2810" letter-spacing="0.5">${U.escapeXml(category)}</text>

  <circle cx="345" cy="136" r="30" fill="${rankColors.fill}" stroke="${rankColors.stroke}" stroke-width="4"/>
  <circle cx="345" cy="136" r="24" fill="none" stroke="#e3cd9a" stroke-width="1.2"/>
  <text x="345" y="147" text-anchor="middle" font-size="28" font-weight="bold" fill="${rankColors.text}">${U.escapeXml(rankKey)}</text>
  <text x="345" y="176" text-anchor="middle" font-size="9" fill="#4a2f16" letter-spacing="1.5">RANK</text>

  <line x1="45" y1="196" x2="375" y2="196" stroke="#8a6a3f" stroke-width="1.5"/>

  <g font-size="12.5" fill="#3c2810">
    <text x="45" y="220"><tspan font-weight="bold">CLIENT:</tspan> ${U.escapeXml(client)}</text>
    <text x="45" y="244"><tspan font-weight="bold">LOCATION:</tspan> ${U.escapeXml(location)}</text>
    <text x="45" y="268"><tspan font-weight="bold">TIME LIMIT:</tspan> ${U.escapeXml(timeLimit)}</text>
    <text x="45" y="292"><tspan font-weight="bold">PARTY SIZE:</tspan> ${U.escapeXml(partySize)}</text>
    <text x="45" y="316"><tspan font-weight="bold">REWARD:</tspan> ${U.escapeXml(reward)}</text>
  </g>

  <line x1="45" y1="332" x2="375" y2="332" stroke="#8a6a3f" stroke-width="1.5"/>

  <text x="${CARD_LEFT}" y="${objHeadingY}" font-size="11.5" font-weight="bold" fill="#4a2f16" letter-spacing="1.5">OBJECTIVE</text>
  <rect x="${CARD_LEFT}" y="${objBoxY}" width="${BOX_WIDTH}" height="${objBoxHeight}" rx="6" fill="#efe0b8" stroke="#8a6a3f" stroke-width="1.5"/>
  ${objLinesSvg}
${bonusBlock}${failureBlock}

  <text x="210" y="${footerY}" text-anchor="middle" font-size="9" font-style="italic" fill="#7a5a35">Posted at the Adventurers' Guild Job Board</text>
</svg>`;
  }

  global.buildMissionSVG = buildMissionSVG;
})(window);
