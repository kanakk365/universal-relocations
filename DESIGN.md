---
name: Universal Relocations
description: The one-stop relocation service, printed as a bill of lading you fill in.
colors:
  navy: "#00056e"
  orange: "#fea70e"
  orange-deep: "#fb8e28"
  stamp: "#f58a0b"
  ribbon: "#14161c"
  paper: "#ffffff"
  desk: "#eceef7"
  tint: "#f2f3fa"
  hair: "rgba(0, 5, 110, 0.3)"
  hair-strong: "rgba(0, 5, 110, 0.62)"
  navy-soft: "#4a4e94"
  navy-faint: "#5d61a2"
  on-navy-soft: "#c3c6ee"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(42px, 6.1vw, 92px)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 118"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(30px, 3.9vw, 56px)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 116"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(26px, 2.6vw, 36px)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 112"
  action:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(20px, 1.8vw, 26px)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 112"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.1em"
    fontVariation: "'wdth' 87"
  column-head:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "11.5px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.12em"
    fontVariation: "'wdth' 87"
  typed-entry:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "21px"
    fontWeight: 400
    lineHeight: 1.3
  typed-value:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.02em"
rounded:
  none: "0px"
spacing:
  hairline: "1px"
  pad: "clamp(16px, 2.2vw, 28px)"
  box-y: "12px"
  row-y: "18px"
  sheet-max: "1320px"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.navy}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "18px clamp(16px, 2.2vw, 28px)"
  button-primary-hover:
    backgroundColor: "{colors.orange-deep}"
    textColor: "{colors.navy}"
  button-masthead:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.navy}"
    rounded: "{rounded.none}"
    height: "46px"
    padding: "0 20px"
  button-masthead-hover:
    backgroundColor: "{colors.orange-deep}"
  form-box:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px clamp(16px, 2.2vw, 28px) 14px"
  form-box-focus:
    backgroundColor: "{colors.tint}"
  input-typed:
    backgroundColor: "transparent"
    textColor: "{colors.ribbon}"
    typography: "{typography.typed-entry}"
    rounded: "{rounded.none}"
    padding: "4px 0 2px"
  box-number:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    padding: "1px 5px"
  part-bar:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    typography: "{typography.headline}"
    padding: "clamp(26px, 3.4vw, 44px) clamp(16px, 2.2vw, 28px) 18px"
  nav-link:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy}"
    padding: "0 20px"
  nav-link-hover:
    backgroundColor: "{colors.tint}"
  tick-box:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ribbon}"
    rounded: "{rounded.none}"
    size: "20px"
---

# Design System: Universal Relocations

## Overview

**Creative North Star: "The Bill of Lading"**

Every surface is a printed shipping document. A single white bond sheet lies on a pale navy desk and everything is printed on it: numbered boxes ruled in 1px navy hairlines, reversed navy title bars, columned tables with small-caps headers, and a perforated tear line at the foot. The visitor does not read about the service and then find a form. They fill in the document the company actually issues as an FMC-licensed NVOCC.

Three inks do all the work. Navy is the printing ink: type, rules and reversed bars. Orange is the rubber stamp and the action, and nothing else. A third ink, the typewriter ribbon, belongs to the shipper. Anything typed into or onto the form (field values, references, licence numbers, the handled-by entry) is set in Courier Prime in ribbon black. Printed type is Archivo, pushed wide for titles and condensed for labels along its width axis. The density is that of real paperwork: tight boxes, tabular figures, generous headline scale against small, tracked labels.

The page has one signature event. On submit, a distressed orange RECEIVED stamp thumps into an empty dashed stamp box, overprints the hairlines with multiply blending, and the sheet nudges 2px under the impact. Smaller circular seals land row by row in the stages table as it scrolls into view.

**Key Characteristics:**
- One bond sheet on a desk; all content printed on the sheet, square corners everywhere.
- Hairline boxes built from a 1px gap over a navy-tinted ground, not from borders.
- Numbered box labels: a reversed navy number tab plus a condensed small-caps name.
- Two printed inks (navy, orange) plus a typed ribbon ink, each with a fixed job.
- Archivo across its width axis for print; Courier Prime for anything typed.
- Orange stamps overprint with multiply blending and a turbulence grain, never as clean vectors.

## Colors

Two spot inks on bond paper and one typewriter ribbon. Every color names an ink or a paper, not a UI role.

### Primary
- **Form Navy** (navy): the printing ink. Body text, headlines, hairline rules, reversed title bars, the licence strip, box-number tabs, focus outlines, scrollbar thumb and text selection. Pinned brand color.

### Secondary
- **Stamp-Pad Orange** (orange): the action ink. Fills the primary action (the quote submit, the masthead quote button, the closing call to action, the skip link), always carrying navy text.
- **Pressed Orange** (orange-deep): the hover and pending state of every orange action. Pinned brand color.
- **Rubber-Stamp Orange** (stamp): the ink of the RECEIVED stamp and the circular UR seals only. It is slightly redder than the action orange so a stamp reads as ink pressed into paper rather than a button.

### Tertiary
- **Typewriter Ribbon** (ribbon): a non-printed ink for typed entries only: input values, the date and reference, licence numbers, proof values, the goods marks, the handled-by name, the X in a tick box.

### Neutral
- **Bond Paper** (paper): the sheet and every box on it.
- **Desk** (desk): the surface behind the sheet; also the page background and scrollbar track.
- **Shaded Cell** (tint): pre-printed shading for reference cells, table header rows, side panels, hover and focus-within on boxes.
- **Hairline** (hair): the 1px rule between boxes and rows, delivered as the ground showing through a 1px grid gap.
- **Heavy Hairline** (hair-strong): dotted entry underlines, the dashed stamp target, the dashed tear line.
- **Second Impression** (navy-soft): secondary printed text: column heads, form-part labels, ledes, descriptions (about 7:1 on paper).
- **Faded Print** (navy-faint): placeholders and sub-labels inside a box name (about 5.6:1 on paper).
- **Reversed Tint** (on-navy-soft): secondary text and captions printed reversed out of navy.

### Named Rules
**The Ink Has a Job Rule.** Navy prints, orange stamps or acts, ribbon is typed. A color appearing outside its job (orange body text, navy typed entries, ribbon headlines) is a mistake.

**The Stamp Is Not a Button Rule.** Action orange and stamp orange are distinct inks. Stamps use the stamp ink with multiply blending and grain; actions use the flat action ink with navy text.

## Typography

**Display Font:** Archivo, variable with the `wdth` axis (with ui-sans-serif, system-ui fallback)
**Body Font:** Archivo (same family)
**Label/Mono Font:** Courier Prime 400/700 for typed entries (with ui-monospace fallback)

**Character:** Archivo is the form's typesetting: expanded and heavy for titles, condensed and tracked for labels, plain at body size. Courier Prime is the shipper's typewriter, so the line between what the company printed and what was filled in is always visible.

### Hierarchy
- **Display** (800, clamp 42-92px, line-height 0.94, width 118%): the title block headline on the sheet, max about 13ch. The closing headline uses the same voice (clamp 40-84px, width 120%), and hub codes push it furthest (900, width 125%).
- **Headline** (800, clamp 30-56px, line-height 0.98, width 116%): reversed type in the navy part bars that open each section of the form, max about 20ch.
- **Title** (800, clamp 26-36px, line-height 1.05, width 112%): heads of form parts that sit on paper rather than a bar, and the stage status words (width 118%).
- **Action** (800, clamp 20-26px, width 112%): the text of the primary orange action.
- **Body** (400, 17px, line-height 1.55): running text; descriptions at 16px in second-impression navy, ledes up to 19.5px, measure 54-62ch.
- **Label** (700, 12px, 0.1em tracking, width 87%, uppercase): box names and form-part labels.
- **Column head** (700, 11.5px, 0.12em tracking, width 87%, uppercase): table header rows and the tear-line furniture, in second-impression navy on shaded cells.
- **Typed entry** (Courier Prime 400, 21px; 19px on phones): what a visitor types into a box.
- **Typed value** (Courier Prime 700, 15-18px): pre-filled typed values such as references, ratings and licence numbers.

### Named Rules
**The Printed or Typed Rule.** Every piece of text is either printed by the company (Archivo, navy) or typed onto the form (Courier Prime, ribbon). Choose by who would have put it there.

**The Width Axis Rule.** Hierarchy comes from the width axis as much as size: titles run expanded (112-125%), labels run condensed (87%). Labels never run at normal width.

**The Tabular Figures Rule.** Phone numbers, licence numbers, box numbers, times and stage numbers use tabular figures.

## Layout

The page is one sheet, max 1320px wide, centered on the desk with a top margin of clamp(0, 2.6vw, 36px) and a strong 1.5px navy border. Above it run a reversed navy licence strip and a sticky paper masthead whose content aligns to the sheet's inner padding. Below the sheet, the footer sits on the desk at the same max width.

Inside the sheet, structure is a box grid: a container with a 1px gap whose background is the hairline color, filled with paper cells, so every rule is exactly one gap wide. The quote form uses a 12-column box grid (boxes span 2, 3 or 4 columns); the title row splits 8:4 between headline and the reference and stamp column. Horizontal padding inside every box and row is one fluid step, clamp(16px, 2.2vw, 28px). Boxes use 12px/14px vertical padding; table rows and section heads use 18px. Sections follow one another as parts of the same form, each opened by a navy bar or a heavy rule, and the sheet closes with a dashed tear line and its revision line.

Responsive behavior keeps the document intact and re-flows the boxes. At 1180px form boxes re-span to 6/4/8/12 columns. At 1080px the nav collapses into a drawer. At 900px the title row, two-column parts and tables stack to one column, and table rows become stacked cards with their numbering kept in a ruled left column. At 620px every form box takes the full width, the sheet loses its side borders, and the RECEIVED stamp lands in the action box instead of the stamp box.

## Elevation & Depth

The system is flat: it is ink on paper. There is one shadow, under the sheet itself, so the bond reads as lying on the desk. Everything on the sheet is separated by hairlines, shaded cells and reversed bars, never by lift. The only overlap is ink: stamps and seals overprint rules and text with `mix-blend-mode: multiply`.

### Shadow Vocabulary
- **Sheet on desk** (`box-shadow: 0 2px 3px rgba(0, 5, 110, 0.06), 0 34px 70px -34px rgba(0, 5, 110, 0.4)`): the page sheet only.

### Named Rules
**The One Sheet Rule.** Only the sheet casts a shadow. Boxes, buttons and panels on it stay flat.

**The Overprint Rule.** Stamps sit on top of the form, not inside it: multiply blending, a slight rotation, grain from an SVG turbulence mask, allowed to cross rules and spill out of their box.

## Shapes

All UI geometry is square: 0 radius on boxes, buttons, inputs, tick boxes, tags and the sheet. Rules carry the form language: 1px hairline between boxes, 1.5px solid navy for the sheet edge, masthead base, section heads and signature lines, 1px dotted for typed-entry underlines, 1.5px dashed for the empty stamp target, and 2px dashed for the perforated tear line. List markers are 6px navy squares, and the error marker is a small navy triangle. Icons are one authored set on a 24px grid with a 1.6 stroke and square caps and miter joins, matching the ruled form. The only curves in the system belong to ink: the rounded double frame of the RECEIVED stamp and the circular UR seals.

## Components

### Buttons
Flat stamp-pad orange slabs with navy type: blunt, heavy and unmistakable.
- **Shape:** square (0px).
- **Primary (quote submit):** fills its form box edge to edge with the action label left and an arrow right, 18px by pad padding, min-height 96px. The closing CTA uses the same treatment at 64px min-height with 21px type.
- **Masthead quote:** 46px tall (42px on phones), 20px horizontal padding, 15.5px weight 800 with an 18px arrow.
- **Hover / Focus:** background shifts to pressed orange over 0.18s ease-out and the arrow slides 3-5px right. Focus is a navy outline: 3px inset at -6px offset on the submit, 2px at 3px offset elsewhere. Pending submit holds pressed orange with a progress cursor.
- **Text link:** weight 700 navy with a 1px underline at 0.25em offset and a trailing arrow that slides on hover.

### Inputs / Fields (Form Box)
The signature primitive: a numbered box on the sheet.
- **Style:** a paper cell in the hairline grid. The label row is a reversed navy number tab (01, 02, ...) followed by the condensed small-caps box name and an optional faded sub-label in document vocabulary (Place of receipt, Shipper). The input below is borderless and transparent, set in Courier Prime ribbon type over a 1px dotted heavy-hairline underline, with a navy caret.
- **Focus:** the box turns to a shaded cell and gains a 2px inset navy frame.
- **Error:** the box prints a hatched "complete this box" field (navy at 7% on 45 degree diagonals, 2px on 9px), and a 14px semibold navy message carries a small navy triangle marker. Errors stay in navy ink; they are never red.
- **Read-only:** the dotted underline drops away.
- **Select:** native appearance removed, with a small navy chevron drawn from two gradients.
- **Tick boxes:** 20px square, 1.5px navy border; choosing one types a Courier Prime X into the square. Hover shades the box; focus adds a 2px navy outline.

### Navigation
- **Masthead:** sticky, paper, 72px min-height, strong navy base rule. The logo cell and each nav link are separated by vertical hairlines; links are 15.5px weight 600 with 20px padding, and hover shades the cell. Below 1080px the links move to a drawer of full-width hairline-ruled rows with hub phone numbers.
- **Licence strip:** reversed navy band of 13px condensed text carrying the company name, licence numbers and the three toll-free hub numbers in tabular figures.

### Part Bar
The reversed navy title bar that opens a part of the form: a wide headline in paper white, bottom-aligned with a form-part caption at the right. The caption names the part in shipping-document vocabulary (Particulars of carriage, Description of goods), in 12px condensed small caps inside a 1px reversed-tint border. Below 720px the caption stacks under the headline.

### Tables (Particulars)
Ruled document tables: a shaded header row of column heads, hairline row dividers and column rules, a narrow left column for numbers or marks, and 18px row padding. Status words run in the expanded title style; handled-by entries are typed. On narrow screens rows restack into grid areas that keep the ruled number column.

### Reference Cells
Shaded cells listing form furniture (Form, Date of issue, Reference) as a small-caps term beside a value; dates and references are typed values.

### Received Stamp (signature)
A double-ruled rounded frame with RECEIVED in Archivo 800 and the date and reference in Courier Prime, in stamp orange, distressed by an SVG turbulence speckle and displacement mask. It lands in a 1.5px dashed empty target box inset 18px: 0.42s, starting at 1.9x scale, -15 degrees and 3px blur, overshooting to 0.95, then settling at -6 degrees, while the sheet nudges 2px down. On phones it lands inline in the action box at -5 degrees.

### Seal Stamp
A 72px (60px on phones) circular UR seal with arc lettering, given a per-impression grain seed and ink load so no two match. Seals drop into the stages rows as they scroll in, each at its own tilt (-14 to 10 degrees) and drop, biting the hairline below the row. With reduced motion they are simply present.

## Do's and Don'ts

### Do:
- **Do** build boxes as paper cells in a 1px-gap grid over the hairline color, so every rule is one hairline wide.
- **Do** give every input box a reversed navy number tab and a condensed small-caps name, with sub-labels in shipping-document vocabulary.
- **Do** set anything the visitor types, and any filled-in reference, date or licence number, in Courier Prime ribbon ink.
- **Do** reserve flat action orange for the primary action, always with navy text and a pressed-orange hover.
- **Do** print stamps in stamp orange with multiply blending, rotation and turbulence grain, and let them overprint rules.
- **Do** use tabular figures for every number on the form.
- **Do** honor reduced motion: stamps and seals appear in place without the thump.

### Don't:
- **Don't** round UI corners; the only curves belong to stamp impressions.
- **Don't** add shadows to anything on the sheet; only the sheet itself casts one.
- **Don't** use orange for text, rules, decoration or anything that is neither a stamp nor an action.
- **Don't** set typed entries in Archivo or printed labels in Courier Prime.
- **Don't** introduce red, green or other inks for state; errors are navy hatching and a navy marker.
- **Don't** draw stamps as clean vector badges without grain, rotation and overprint.
- **Don't** place a small label above a headline; form-part captions sit beside or below the headline in the part bar, and box labels sit inside their box.
