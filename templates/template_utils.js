/**
 * template_utils.js
 *
 * Shared helpers for the SVG card/poster template generators in this folder
 * (guild_card_template.js, mission_template.js). Plain browser JS, no build
 * step, no dependencies — loaded via a plain <script> tag, so everything is
 * attached to `window.TemplateUtils`.
 */
(function (global) {
  'use strict';

  const SVG_NS = 'http://www.w3.org/2000/svg';

  // Per-rank fill/stroke/text colors, approximating rank.md's Visual Color
  // list (S Gold/Rainbow, A Purple/Violet, B Blue, C Green, D Yellow,
  // E Orange, F Red/Gray). `text` is whichever of dark/cream reads clearly
  // against that fill.
  const RANK_COLORS = {
    S: { fill: '#d4af37', stroke: '#8a6a10', text: '#3c2810', name: 'Gold/Rainbow' },
    A: { fill: '#7a3fa0', stroke: '#4f2668', text: '#f3e6c4', name: 'Purple/Violet' },
    B: { fill: '#2f6fa8', stroke: '#1c4568', text: '#f3e6c4', name: 'Blue' },
    C: { fill: '#2f8f42', stroke: '#1f5c2c', text: '#f3e6c4', name: 'Green' },
    D: { fill: '#d4b016', stroke: '#8a7010', text: '#3c2810', name: 'Yellow' },
    E: { fill: '#c9701f', stroke: '#8a4a12', text: '#f3e6c4', name: 'Orange' },
    F: { fill: '#7a4646', stroke: '#4a2020', text: '#f3e6c4', name: 'Red/Gray' }
  };

  /** Escape text before dropping it into an SVG/XML string. */
  function escapeXml(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, (ch) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'
    }[ch]));
  }

  /** Lowercase, hyphenated, filesystem-safe filename stem. */
  function slugify(value, fallback) {
    const slug = String(value == null ? '' : value)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '');
    return slug || fallback || 'untitled';
  }

  /** A detached, invisible <svg> used only to measure text with getComputedTextLength(). */
  function createScratchSvg() {
    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('width', '0');
    svg.setAttribute('height', '0');
    svg.style.position = 'absolute';
    svg.style.visibility = 'hidden';
    svg.style.pointerEvents = 'none';
    document.body.appendChild(svg);
    return svg;
  }

  function removeScratchSvg(svg) {
    if (svg && svg.parentNode) svg.parentNode.removeChild(svg);
  }

  function measureTextWidth(scratchSvg, text, fontSize, fontFamily, fontWeight) {
    const t = document.createElementNS(SVG_NS, 'text');
    t.setAttribute('font-size', fontSize);
    t.setAttribute('font-family', fontFamily || "Georgia, 'Times New Roman', serif");
    if (fontWeight) t.setAttribute('font-weight', fontWeight);
    t.textContent = text;
    scratchSvg.appendChild(t);
    const width = t.getComputedTextLength();
    scratchSvg.removeChild(t);
    return width;
  }

  /**
   * Greedy word-wrap `text` to fit within `maxWidthPx`, measuring real
   * rendered width via the SVG DOM instead of guessing characters-per-line.
   * Returns an array of line strings (never empty — a blank input yields ['']).
   */
  function wrapText(scratchSvg, text, maxWidthPx, fontSize, fontFamily) {
    const words = String(text == null ? '' : text).split(/\s+/).filter(Boolean);
    if (words.length === 0) return [''];

    const lines = [];
    let current = words[0];
    for (let i = 1; i < words.length; i++) {
      const candidate = current + ' ' + words[i];
      const width = measureTextWidth(scratchSvg, candidate, fontSize, fontFamily);
      if (width <= maxWidthPx) {
        current = candidate;
      } else {
        lines.push(current);
        current = words[i];
      }
    }
    lines.push(current);
    return lines;
  }

  /**
   * Lay out `labels` as pill-shaped tag chips flowing left-to-right,
   * wrapping to a new row when a chip would cross `maxRight`. Chip width is
   * measured per-label (not guessed), so any label length works.
   * Returns { chips: [{label, x, y, width, height}], bottomY }.
   */
  function layoutChips(scratchSvg, labels, startX, startY, opts) {
    opts = opts || {};
    const fontSize = opts.fontSize || 10;
    const fontFamily = opts.fontFamily || "Georgia, 'Times New Roman', serif";
    const paddingX = opts.paddingX != null ? opts.paddingX : 12;
    const height = opts.height != null ? opts.height : 21;
    const gapX = opts.gapX != null ? opts.gapX : 8;
    const gapY = opts.gapY != null ? opts.gapY : 8;
    const maxRight = opts.maxRight != null ? opts.maxRight : 390;

    let x = startX;
    let y = startY;
    const chips = [];

    for (const rawLabel of labels) {
      const label = String(rawLabel).trim();
      if (!label) continue;
      const textWidth = measureTextWidth(scratchSvg, label.toUpperCase(), fontSize, fontFamily, 'bold');
      const chipWidth = textWidth + paddingX * 2;
      if (x !== startX && x + chipWidth > maxRight) {
        x = startX;
        y += height + gapY;
      }
      chips.push({ label, x, y, width: chipWidth, height });
      x += chipWidth + gapX;
    }

    const bottomY = chips.length ? chips[chips.length - 1].y + height : startY;
    return { chips, bottomY };
  }

  /** Trigger a browser download of `svgString` as a .svg file named `filename`. */
  function downloadSvg(svgString, filename) {
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename.toLowerCase().endsWith('.svg') ? filename : filename + '.svg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  global.TemplateUtils = {
    RANK_COLORS,
    escapeXml,
    slugify,
    createScratchSvg,
    removeScratchSvg,
    measureTextWidth,
    wrapText,
    layoutChips,
    downloadSvg
  };
})(window);
