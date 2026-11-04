---
name: Universal Relocations
description: Daylight corridors. A navy-tinted light ground, inset deep navy bands, and orange kept for actions, routes and live points.
colors:
  mist: "#f2f3f9"
  mist-2: "#e8eaf4"
  surface: "#f8f9fd"
  white: "#ffffff"
  ink: "#11143d"
  ink-2: "#2f3468"
  mute: "#555a88"
  navy: "#00056e"
  navy-2: "#0a118a"
  navy-3: "#1a23a8"
  navy-glow: "#2b3be0"
  on-navy: "#f5f6ff"
  on-navy-mute: "#bcc0f2"
  orange: "#fea70e"
  orange-2: "#fb8e28"
  orange-ink: "#a24f00"
  orange-wash: "rgba(254, 167, 14, 0.14)"
  line: "rgba(17, 20, 61, 0.1)"
  line-strong: "rgba(17, 20, 61, 0.18)"
  line-navy: "rgba(255, 255, 255, 0.13)"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.7rem, 5.1vw, 4.7rem)"
    fontWeight: 760
    lineHeight: 0.97
    letterSpacing: "-0.037em"
    fontVariation: "\"wdth\" 108"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.1rem, 4.4vw, 3.6rem)"
    fontWeight: 740
    lineHeight: 1.02
    letterSpacing: "-0.032em"
    fontVariation: "\"wdth\" 106"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.35rem, 2vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
    fontVariation: "\"wdth\" 104"
  lead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.06rem, 1.3vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "\"wdth\" 100"
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.86rem"
    fontWeight: 650
    lineHeight: 1.4
  data:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.74rem"
    fontWeight: 500
    letterSpacing: "0.02em"
rounded:
  band: "40px"
  band-mobile: "28px"
  panel: "28px"
  panel-mobile: "22px"
  inset: "20px"
  tile: "18px"
  field: "14px"
  ref: "12px"
  pill: "999px"
spacing:
  frame: "clamp(10px, 1.4vw, 20px)"
  pad: "clamp(20px, 3vw, 32px)"
  shell: "1240px"
  section: "clamp(84px, 10vw, 140px)"
  card: "clamp(24px, 3vw, 36px)"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "7px 7px 7px 26px"
    height: "54px"
  button-primary-hover:
    backgroundColor: "#ffb32e"
  button-primary-disabled:
    backgroundColor: "#f4c27a"
  button-chip:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.orange}"
    rounded: "{rounded.pill}"
    size: "40px"
  button-navy:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-navy}"
    rounded: "{rounded.pill}"
    padding: "7px 7px 7px 26px"
    height: "54px"
  button-navy-hover:
    backgroundColor: "{colors.navy-2}"
  button-ghost:
    backgroundColor: "rgba(255, 255, 255, 0.7)"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "54px"
  button-ghost-hover:
    backgroundColor: "{colors.white}"
  input-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "0 16px"
    height: "50px"
  chip-option:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "38px"
  chip-option-selected:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.panel}"
    padding: "{spacing.card}"
  band-navy:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-navy}"
    rounded: "{rounded.band}"
  nav-bar-solid:
    backgroundColor: "rgba(255, 255, 255, 0.92)"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "64px"
---

# Design System: Universal Relocations

## Overview

**Creative North Star: "Daylight Corridors"**

The page is a route you can see. A pale ground tinted toward the brand navy carries the reading. Deep navy bands, inset from the window edge with large rounded corners, carry the contrast, and inside them the world is drawn in dots: land as dot fields, hubs as pulsing points, routes as orange arcs. Orange is not a decoration colour. It marks the thing you can act on, the route you are on, or the point that is live.

Everything is soft geometry and one typeface. Archivo, pushed slightly wide on its width axis, sets every heading, label and paragraph; JetBrains Mono appears only where a value is live (hub clocks, route codes, references, licence numbers). White panels float over the navy edges on long soft shadows, and buttons are pills whose round chip carries the arrow. Density is generous on the page and tight inside the panels, which read like working product UI.

The world was chosen against a paperwork costume (forms, square boxes, typewriter type) and against the stock family-with-boxes photo hero. Demonstration UI (example route, sample volume estimate, sample tracking) is always labelled as an example.

**Key Characteristics:**
- Light navy-tinted ground, inset navy bands with soft blue radial glows.
- Orange reserved for action pills, route arcs, live pins, emphasis words on navy and the underline stroke on light.
- One family (Archivo across its width axis); mono only for live data.
- Dots as the material: one dotted globe on navy, a dot-field route map on light, pulsing points, arcs.
- Pill buttons with a round navy or orange chip carrying the arrow.
- Hairline borders on white panels; long, navy-tinted floating shadows.

## Colors

A navy-and-mist daylight palette with a single warm accent that always means "act here" or "this is live".

### Primary
- **Universal Navy** (navy): the brand ground of every band (hero, hubs, CTA), the chip inside orange pills, selected chips, completed steps, avatars and filled ticks.
- **Deep Navy Hover** (navy-2): navy button hover.
- **Signal Navy** (navy-3): focus outlines, field focus border, ghost-button hover border, field icons, gradient end of progress lines.
- **Navy Glow** (navy-glow): only inside radial-gradient glows within navy bands (at 35-60% alpha); never a flat fill.

### Secondary
- **Route Orange** (orange): primary action pills, the chip on navy pills, route arcs and pins, emphasis words on navy, the drawn underline stroke on light, the "now" tracking node, selection highlight.
- **Ember Orange** (orange-2): live dots, progress fills, star ratings on light, the dashed origin leg, gradient start of timeline lines.
- **Orange Ink** (orange-ink): the only orange allowed as text or icon on light grounds (error messages, phone icons on the solid nav, small icons in light panels).
- **Orange Wash** (orange-wash): halo rings around live dots and the "now"/done states.

### Neutral
- **Mist** (mist): page ground and theme colour.
- **Mist Deep** (mist-2): track backgrounds (progress, fit bar), tags, avatar fills, back-button hover.
- **Surface** (surface): inner panels within white cards (planner top strip, map field, viz blocks, why-list visuals).
- **White** (white): floating panels, cards, inputs, licence pills.
- **Ink** (ink): primary text, text on orange.
- **Ink Soft** (ink-2): form labels, secondary strong text.
- **Mute** (mute): lead paragraphs, captions, metadata. Clears 4.5:1 on mist.
- **On Navy** (on-navy) / **On Navy Mute** (on-navy-mute): primary and secondary text inside navy bands.
- **Hairline** (line), **Hairline Strong** (line-strong), **Hairline on Navy** (line-navy): all dividers and panel borders.

### Named Rules
**The Ink Over Orange Rule.** On light grounds orange is a fill or a stroke, never text; emphasis is an ink word with an orange stroke drawn under it. Orange words are allowed only on navy. Text sitting on an orange fill is always ink or navy.

**The Live Orange Rule.** If it is orange, it is an action, a route, or something live. Static decoration stays navy, mist or white.

## Typography

**Display Font:** Archivo (variable, width axis) with Helvetica Neue, Arial
**Body Font:** Archivo
**Label/Mono Font:** JetBrains Mono, for live data only

**Character:** A single grotesque that gets wider and heavier as it gets louder: headings run on the width axis at 104-108 with tight negative tracking, body sits at the normal width. The mono is a quiet technical voice for clocks and codes.

### Hierarchy
- **Display** (760, clamp(2.7rem, 5.1vw, 4.7rem), 0.97, wdth 108): the hero headline only, left-aligned at max 13ch on desktop (centred at max 14ch when stacked), words rising out of masks. The closing CTA band uses the same voice centred at clamp(2.6rem, 6vw, 5rem).
- **Headline** (740, clamp(2.1rem, 4.4vw, 3.6rem), 1.02, wdth 106): section headings, max 16-20ch.
- **Title** (700, clamp(1.35rem, 2vw, 1.75rem), 1.12, wdth 104): card headings. Sibling list titles (hub names, why-list items, service names) sit at 680-720 weight in the 1.15-1.9rem band at wdth 104-106.
- **Lead** (400, clamp(1.06rem, 1.3vw, 1.2rem), 1.6): section intros in mute, max 58ch.
- **Body** (400, 17px, 1.6): running text; panel copy steps down to 0.84-0.95rem.
- **Label** (650, 0.86rem): form labels, step labels, rail labels, sentence case, never uppercase.
- **Data** (JetBrains Mono 500, 0.74rem, 0.02em): hub clocks, route codes, licence values, references. Big numbers in Archivo (scores, totals) use 760 at wdth 108 with tabular figures.

### Named Rules
**The One Family Rule.** Archivo sets everything; louder means wider and heavier on the same family, not a second display face.

**The Live Mono Rule.** JetBrains Mono appears only on values that are live or coded (times, IATA-style codes, licence and reference numbers). Phone numbers and counts in Archivo use tabular figures instead.

## Layout

A centred shell (1240px, side padding `pad`) inside a page whose navy bands break out to the window, inset only by `frame` (10-20px) so the mist ground shows as a thin rim around them. Sections breathe on `section` vertical padding (84-140px). The hero is a full-width navy banner split into two columns (about 1.05fr / 0.95fr, 24px gap, content width shell + 40px): left-aligned copy (headline, lede at max 46ch, pills, a one-line ratings row) and an interactive dotted globe on the right at up to 560px. Below 1080px it stacks to centred copy over the globe (460px; 340px on phones). The planner panel overlaps the banner's lower edge by about 232px (212px stacked, 120px on mobile). Content sections alternate: centred heads over two-up cards, a sticky left column beside a long right list (services, reviews, why-list with a sticky visual panel), and navy bands. The hubs band is two columns (equal halves, clamp(32px, 5vw, 72px) gap): heading, lede and the hub list on the left, the dotted globe on the right; below 900px the globe moves above the copy. The CTA band is centred copy with a globe rising behind it from the bottom edge.

The fixed nav floats inside the hero as a transparent pill, then becomes a solid white blurred pill on scroll. Breakpoints in use: 1120px (phone number hides), 1080px (hero stacks to centred copy over the globe; planner stacks map over form), 960px (nav links collapse to a sheet; two-up cards stack), 900px (sticky columns become single column; why-list visuals go inline; hubs band stacks with the globe on top), 640px (bands and panels drop radius, hero actions go full-width with the chip pushed right).

## Elevation & Depth

Hybrid: tonal layering (mist ground, surface insets, white panels, navy bands) does most of the work, and two soft navy-tinted shadows lift white panels. Navy bands are flat but lit from within by radial blue glows. Shadows are always long, negative-spread and tinted with ink or navy, with a 1px white inset highlight on top.

### Shadow Vocabulary
- **Card** (`box-shadow: 0 1px 0 rgba(255,255,255,0.8) inset, 0 1px 2px rgba(17,20,61,0.05), 0 12px 32px -16px rgba(17,20,61,0.18)`): resting cards, the why-list panel, the selected review tab.
- **Float** (`box-shadow: 0 1px 0 rgba(255,255,255,0.9) inset, 0 2px 4px rgba(17,20,61,0.05), 0 34px 70px -30px rgba(17,20,61,0.36), 0 80px 140px -70px rgba(0,5,110,0.45)`): panels that overlap a navy edge (the planner) and the mobile nav sheet.
- **Pill glow** (orange: `0 18px 40px -16px rgba(251,142,40,0.75), 0 0 0 4px rgba(254,167,14,0.22)`; navy: `0 18px 40px -16px rgba(0,5,110,0.6), 0 0 0 4px rgba(26,35,168,0.18)`): button hover only.

### Named Rules
**The Lit Band Rule.** Navy bands get depth from radial blue glows (navy-glow at 35-60% alpha) and dot-field canvases, never from shadows or borders.

## Shapes

Soft, large, nested radii that shrink as elements nest: band 40px (28px mobile), floating panel and card 28px (22px mobile), inset blocks 18-20px, fields 14px, reference chips 12px, and full pills for every button, chip, tag, tab, step marker and phone link. Circles carry icons and initials. Borders are 1px hairlines; dashed lines (repeating gradients) mark route legs and links between nodes. Dots, rings and arcs are the recurring figures; there are no sharp corners on interactive elements.

**The Nested Radius Rule.** A child's radius is always smaller than its container's: 40 band > 28 panel > 20 inset > 14 field.

## Components

### Buttons
Confident, warm pills that move on hover.
- **Shape:** full pill (999px), min height 54px (48px in the nav, 56px as the form submit).
- **Primary:** orange fill, ink label at 680, padding 7px 7px 7px 26px, ending in a 40px round navy chip with the orange arrow.
- **Hover / Focus:** lifts 2px, brightens to #ffb32e, gains the orange pill glow, the chip rotates the arrow -45deg, and a white light sweep crosses the pill. Focus is a 2px navy-3 outline at 3px offset (orange on navy).
- **Navy:** navy fill, on-navy label, orange chip with a navy arrow; used on light grounds.
- **Ghost:** translucent white pill with a strong hairline, no chip; on navy it turns 5% white with a 22% white border and an orange hover border.
- **Disabled:** desaturated orange (#f4c27a), progress cursor, no lift.
- **Arrow link:** bold text link whose arrow slides 4px right on hover.

### Chips
- **Style:** pill, 1px strong hairline, 0.88rem at 600 weight.
- **State:** selected chips fill navy with white text; hover shifts the border to navy-3. Status tags are smaller mist-2 pills in mute.

### Cards / Containers
- **Corner Style:** 28px (22px on mobile).
- **Background:** white, with surface-coloured insets for data blocks.
- **Shadow Strategy:** Card shadow at rest; Float shadow when overlapping a navy band.
- **Border:** 1px hairline.
- **Internal Padding:** clamp(24px, 3vw, 36px).

### Inputs / Fields
- **Style:** 50px tall, 14px radius, white, 1px strong hairline, optional navy-3 leading icon (padding-left 44px). Selects draw their own navy caret.
- **Focus:** border becomes navy-3 with a 4px rgba(26,35,168,0.12) ring.
- **Error:** border orange-ink, warm #fffaf2 fill, message in orange-ink at 600 led by a small round dot.

### Navigation
A floating pill (64px, 999px radius) sitting inside the hero: transparent with on-navy text and the reversed logo at the top, solid 92% white with a 14px backdrop blur, hairline border and soft shadow once scrolled, swapping to the ink logo. Links are 0.97rem at 600 with pill hover fills. Below 960px links collapse into a white 28px-radius sheet with the Float shadow.

### Planner (signature)
A white floating panel over the hero edge: a surface top strip (title with live dot, numbered pill steps, mono hub clocks), a dot-field route map on the left (about 58%) where typed origin and destination redraw an orange arc with a travelling pulse, a four-leg list with dashed connectors, and the two-step form on the right.

### Dotted globe (signature)
One shared cobe component is used three times; it is the system's way of showing the world on navy. Shading: partly dark (dark 0.62, diffuse 1.25, opacity 0.96), a lit royal-blue ocean (base rgb 0.27/0.34/1, about #4557ff), pale blue-white land dots (20,000 samples), a blue glow (rgb 0.33/0.42/1), and Universal offices as orange markers with orange hub corridors as arcs (both rgb 1/0.66/0.06, Route Orange). A blurred radial atmosphere (rgba(84,104,255,0.5) to rgba(43,59,224,0.2) to transparent, inset -7%, 16px blur) sits behind the sphere. The canvas fades in over 1.2s and the globe is decorative (aria-hidden).
- **Interactive:** rotates slowly by itself and turns on drag (grab and grabbing cursors; vertical touch still scrolls the page). The non-interactive version ignores the pointer.
- **Focus:** when given a hub, it eases round to face it (an instant jump under reduced motion) and its tilt is clamped so the hub stays in view.
- **Hub labels:** small navy pills (rgba(0,5,110,0.78) fill, 55% orange hairline, 0.72rem at 650) anchored above their marker, or below it where neighbours would collide (Chennai). They hide when the city turns away. Where CSS anchor positioning (`position-area`) is unsupported, they are omitted.
- **Hero:** right column, up to 560px (460px stacked, 340px on phones), all three corridors (New Jersey to Dubai, Dubai to Chennai, New Jersey to Chennai), all offices, hub labels.
- **Hubs band:** right column, up to 540px (380px and above the copy below 900px). It faces the selected hub, enlarges that hub's office markers and draws arcs from it to the other two hubs.
- **Closing CTA:** a large non-interactive globe (up to 1100px or 150% of the band; 170% on phones) rising from the band's bottom edge behind the content, rotating more slowly, with all corridors and no labels.

### Hub list (on navy)
Hub rows separated by navy hairlines, each led by an 8px dot (25% white at rest; orange with an 18% orange halo when active). Hub names are 720 at wdth 106 in on-navy-mute, turning on-navy when active or hovered, with a mono local clock aligned right. Only the active row opens, revealing its office cities and a translucent toll-free phone pill; the open and close animate grid-template-rows (0fr to 1fr, 0.45s ease-out).

### Dot-field route map (signature)
The planner's canvas map: land as dots in pale navy tints (#c9cde8 / #8c92c9) on the surface ground, the origin as a navy pin, the destination as an orange pin, and the route as a navy-to-ember arc with a travelling orange pulse and pulse rings.

### Navy band
Full-bleed sections inset by `frame` with 40px radius, navy fill, radial blue glows, on-navy type, orange emphasis words, and hairline-on-navy dividers. Used for the hero, the hubs band and the closing CTA; each carries the dotted globe.

## Do's and Don'ts

### Do:
- **Do** keep orange to actions, routes, live points, emphasis words on navy and the drawn underline stroke on light.
- **Do** put every primary action in a pill with a round chip carrying the arrow (navy chip on orange, orange chip on navy).
- **Do** draw geography in dots: dot-field land, pulsing orange hub points, orange arcs for routes.
- **Do** set every heading in Archivo on the width axis (104-108) with tight negative tracking, and reserve JetBrains Mono for live values.
- **Do** inset navy bands by the frame (10-20px) with a 40px radius so the mist ground rims them.
- **Do** nest radii downward (40 > 28 > 20 > 14) and keep borders to 1px hairlines.
- **Do** label demonstration UI as an example.
- **Do** honour reduced motion: entrances collapse to 1ms, strokes appear without drawing, the marquee stops and wraps.

### Don't:
- **Don't** set orange text on light grounds; use orange-ink for small text and icons there.
- **Don't** introduce a second display face, uppercase tracked labels, or typewriter type.
- **Don't** use square-cornered boxes or form-and-paperwork styling for containers.
- **Don't** use flat grey or black shadows; shadows are long, negative-spread and tinted with ink or navy.
- **Don't** use a stock family-with-boxes photo as a hero.
