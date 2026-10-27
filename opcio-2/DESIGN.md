---
name: Canovelles Bàsquet Club
description: Your child's first club card, matte pastel-blue plastic printed in deep blue-slate ink, waiting for a name.
colors:
  sky: "#c4dcf0"
  sky-soft: "#d9e8f5"
  sky-deep: "#9cbfdf"
  mist: "#eef4fa"
  mist-deep: "#e2ecf6"
  white: "#ffffff"
  ink: "#24435f"
  ink-deep: "#1a3249"
  ink-soft: "#415e7a"
  butter: "#f4e6a6"
  butter-deep: "#e9d47c"
  mint: "#bfe3d3"
  mint-deep: "#93cdb4"
  error: "#8a2f45"
  error-halo: "#f2cad6"
typography:
  display:
    fontFamily: "Gabarito Variable, Gabarito, system-ui, sans-serif"
    fontSize: "clamp(44px, 5.6vw, 84px)"
    fontWeight: 750
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Gabarito Variable, Gabarito, system-ui, sans-serif"
    fontSize: "clamp(36px, 4.4vw, 64px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  quote:
    fontFamily: "Gabarito Variable, Gabarito, system-ui, sans-serif"
    fontSize: "clamp(30px, 3.3vw, 48px)"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Gabarito Variable, Gabarito, system-ui, sans-serif"
    fontSize: "clamp(26px, 2.4vw, 34px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  group-name:
    fontFamily: "Gabarito Variable, Gabarito, system-ui, sans-serif"
    fontSize: "clamp(22px, 2vw, 28px)"
    fontWeight: 600
    letterSpacing: "-0.015em"
  card-field:
    fontFamily: "Gabarito Variable, Gabarito, system-ui, sans-serif"
    fontSize: "4.6cqi"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  button:
    fontFamily: "Gabarito Variable, Gabarito, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 650
    letterSpacing: "-0.005em"
  lede:
    fontFamily: "Atkinson Hyperlegible Next Variable, Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "clamp(18px, 1.45vw, 21px)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Atkinson Hyperlegible Next Variable, Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "'tnum'"
  small:
    fontFamily: "Atkinson Hyperlegible Next Variable, Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
  caption:
    fontFamily: "Atkinson Hyperlegible Next Variable, Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
  label:
    fontFamily: "Atkinson Hyperlegible Next Variable, Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "12.5px"
    fontWeight: 700
    letterSpacing: "0.04em"
rounded:
  card: "3.7cqi"
  card-portrait: "5.5cqi"
  corner: "clamp(14px, 1.5vw, 20px)"
  button: "14px"
  control: "12px"
  focus: "6px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  page-max: "1240px"
  section: "clamp(72px, 9vw, 136px)"
  section-tight: "clamp(64px, 8vw, 120px)"
  field-gap: "20px"
  actions-gap: "12px"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.mist}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "0 24px"
    height: "52px"
  button-ink-hover:
    backgroundColor: "{colors.ink-deep}"
  button-sky:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "0 24px"
    height: "52px"
  button-sky-hover:
    backgroundColor: "{colors.sky-deep}"
  button-small:
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "42px"
  input-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "12px 14px"
    height: "52px"
  card-front:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "5cqi 5.5cqi 5.4cqi"
  card-back:
    backgroundColor: "{colors.sky-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
  season-sticker:
    backgroundColor: "{colors.butter}"
    textColor: "{colors.ink}"
    width: "14cqi"
  value-sticker-butter:
    backgroundColor: "{colors.butter}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "9px 16px 10px"
  value-sticker-mint:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "9px 16px 10px"
  value-sticker-sky:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "9px 16px 10px"
  group-tag:
    backgroundColor: "{colors.butter}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  field-label:
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
---

# Design System: Canovelles Bàsquet Club

## Overview

**Creative North Star: "The Club Carnet"**

Being part of Canovelles means having its carnet. The site is a player's club card: matte pastel-blue plastic (sky) on a misty blue ground, every word printed in one deep blue-slate ink, with the card itself as the hero object. The visitor types a name and birth year directly onto the card; the card prints the group, a butter season sticker presses on, a thin iridescent strip shimmers once along the card's edge, and the card flips in 3D to show what that group does. The same card returns at the close and on the pre-registration page as a live preview of the form.

Away from the card, the page is calm and flat: wide sky and mist fields, ink rules dividing stages, generous type in Gabarito, body and labels in Atkinson Hyperlegible Next with tabular figures. Colour is quiet and lives on objects (card plastic, stickers, the photo duotone); type stays ink. Club photos are printed on card stock in a blue duotone. The crest is the identity anchor and is the only place orange exists.

Confirmed rejections: the sports-club default (dark full-bleed action hero, condensed caps, row of team cards) and the pastel-kids default (blobs, cream, rounded everything).

The old "Scorer's Acta" world survives only as a separate, intentionally different noindex event template (`src/pages/plantilles/acta.astro` with its own `acta.css`); it is not part of this system and its tokens must not be mixed in.

**Key Characteristics:**
- One object carries the story: the carnet, at credit-card ratio (1.586), tilted a few degrees, with soft layered shadow.
- Three dyes only (sky, butter, mint) on a mist ground; all type in ink or faded ink.
- Iridescence only on card edges, shimmering once when a group is found.
- Typed input prints onto the object; no toasts, no pop-ups.
- Real club photos in blue duotone, printed with the card corner.
- One motion grammar: print-in, sticker press, card flip, all on the same ease-out curve.

## Colors

Pastel card plastic on misty blue, printed in a single blue-slate ink; colour sits on objects, never on text.

### Primary
- **Card Plastic Sky** (`sky`): the carnet's front face, the groups section field, the secondary button, the focus halo on form fields, the duotone photo backing, and the browser theme colour.
- **Soft Sky** (`sky-soft`): the card's back face, the closing section field, the empty photo window.
- **Deep Sky** (`sky-deep`): every hairline on the ground (group rows, footer legal rule, facts divider), dashed card field rules and photo window, guilloche lines, the back band, link underlines, nav hover bar, field borders, scrollbar thumb, and the secondary button hover.

### Secondary
- **Season Butter** (`butter`): the pressed season sticker, the "El seu grup" tag on a matched row, the matched-row highlighter on the card back, value stickers, and text selection.
- **Butter Rim** (`butter-deep`): the inset rim of the pressed season sticker only.

### Tertiary
- **Mint** (`mint`): the photo window once a name is typed (initials appear on it), value stickers, and the start and end of the iridescent strip.
- **Deep Mint** (`mint-deep`): the underline of the printed Grup field when a group is found.

### Neutral
- **Mist** (`mist`): the page ground, header, lanyard slot, and text on ink buttons.
- **Deep Mist** (`mist-deep`): the footer field.
- **White** (`white`): writable form fields on the pre-registration page and the die-cut border of value stickers.
- **Ink** (`ink`): all type, primary button, focus outline, 2px stage and fieldset rules, checkbox accent, caret.
- **Deep Ink** (`ink-deep`): primary button hover; selection text.
- **Faded Ink** (`ink-soft`): ledes, secondary copy, field labels, placeholders, blank card values, captions.

### Meaning colour
- **Error Plum** (`error`) with **Error Halo** (`error-halo`): invalid pre-registration fields (border plus 4px halo) and their error text. This is the one meaning-colour exception to the three-dye rule.

### Named Rules
**The Three Dyes Rule.** Sky, butter and mint are the only hues besides ink and the mist neutrals. The single exception is the error plum and its halo on form validation. Nothing else gets a new hue.

**The Crest Owns the Orange Rule.** Crest orange exists only inside the crest, which is never redrawn, outlined or recoloured.

**The Ink Type Rule.** Text is ink or faded ink. Dyes appear behind type (stickers, tags, highlighter), never as the type colour; the only coloured text is the error message.

**The Edge-Only Iridescence Rule.** The iridescent strip (mint, pale blue, lilac, rose, butter) lives only on the bottom edge of carnet faces. It shimmers once, when a group is found, and is still under reduced motion.

## Typography

**Display Font:** Gabarito Variable (with Gabarito, system-ui)
**Body Font:** Atkinson Hyperlegible Next Variable (with Atkinson Hyperlegible Next, system-ui)

**Character:** Gabarito is what the card printer prints: friendly, round-shouldered titling that stays sturdy at heavy weights. Atkinson Hyperlegible Next carries the reading and the field labels with tabular figures, so birth years align in every list.

### Hierarchy
- **Display** (750, clamp(44px, 5.6vw, 84px), 0.98, -0.035em): the one H1 per page, sentence case. The closing question runs at clamp(40px, 5vw, 72px).
- **Headline** (700, clamp(36px, 4.4vw, 64px), -0.03em): section H2s.
- **Quote** (650, clamp(30px, 3.3vw, 48px), 1.08): the club quote.
- **Title** (700, clamp(26px, 2.4vw, 34px)): stage names in the groups list; fieldset legends at clamp(22px, 2vw, 28px).
- **Group Name** (600, clamp(22px, 2vw, 28px)): group rows; rises to 800 when matched.
- **Card Field** (650, 4.6cqi; name 5.6cqi): typed and printed values on the carnet, with a 1px white emboss. Sizes scale with the card's container, not the viewport.
- **Button** (650, 18px; 16px small).
- **Lede** (400, clamp(18px, 1.45vw, 21px), faded ink, 34-44ch).
- **Body** (400, 18px, 1.55, tabular figures).
- **Small / Caption** (16px / 15px): notes, team lists, captions, helper text, usually faded ink.
- **Label** (700, 12.5px, 0.04em, uppercase, faded ink): printed field labels on the card and definition terms; never above a heading.

### Named Rules
**The Printed Card Rule.** Anything the card printer would print (titles, names, group, typed values, buttons) is Gabarito; anything read or labelled is Atkinson.

**The Tabular Years Rule.** Body runs with tabular figures site-wide so year ranges stack cleanly.

## Layout

A centred page (max 1240px, gutter clamp(16px, 4vw, 48px)) with full-bleed colour fields per section: mist hero, sky groups, mist where/club, soft-sky close, deep-mist footer. Sections pad at clamp(64px, 8vw, 120px) to clamp(72px, 9vw, 136px).

Splits are asymmetric 12-column fractions: hero 5/7 (copy left, carnet right), section heads 7/5 or 6/6 aligned to the baseline, stages 3/9, where 6/5, values 5/7, close 6/5, pre-registration 7/5 with a sticky card preview (top 112px). Header is sticky, 76px (64px on phones).

Responsive: at 960px every split collapses to one column and group rows reflow to name and years with teams and note below; at 900px the pre-registration preview moves above the form; at 760px the nav links move into a "Menú" toggle (sky, 12px corner) that drops a sky-soft panel under the bar with large Gabarito links and a full-width ink pre-registration button; below 440px the bar button hides and the menu carries it; at 560px hero actions stack full width and fieldsets go single-column. The carnet switches to a portrait layout by container query below 520px of its own width.

## Elevation & Depth

Hybrid: the ground is flat and tonal, card-stock objects lift. Depth on the page comes from colour fields and rules (2px ink between stages, 1px deep sky between rows). Only objects made of card or sticker carry shadow, always soft, ink-tinted and layered, never hard-offset.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 1px 1px rgb(36 67 95 / 0.06), 0 10px 24px -8px rgb(36 67 95 / 0.22), 0 32px 60px -24px rgb(36 67 95 / 0.28)`): the carnet faces and the value sticker sheet.
- **Ink button** (`box-shadow: 0 8px 18px -10px rgb(36 67 95 / 0.6)`): primary button only.
- **Sticker** (`box-shadow: 0 1px 1px rgb(36 67 95 / 0.12), 0 4px 10px -4px rgb(36 67 95 / 0.35)`): value stickers and the matched-row tag (single-layer variant).
- **Slot inset** (`box-shadow: inset 0 1px 2px rgb(36 67 95 / 0.35)`): the lanyard slot.
- **Focus halo** (`box-shadow: 0 0 0 4px` sky): focused form fields; error plum fields swap to the rose halo.

### Named Rules
**The Card Stock Lifts Rule.** Only physical card objects (the carnet, the sticker sheet, stickers) cast shadow. Sections, rows, photos and text never do.

## Shapes

One corner language derived from the ISO card: the carnet's radius is 3.7% of its width (3.7cqi; 5.5cqi in portrait), and the same proportion reappears as the shared corner (clamp(14px, 1.5vw, 20px)) on photos and the sticker sheet, 14px on buttons and 12px on small buttons and form fields. Pills (999px) are reserved for die-cut stickers and the matched-row tag; the season sticker is a circle. Stickers and the carnet carry small rotations (card -3deg hero, 4deg close, 2deg preview; stickers -4deg to 4deg); text blocks and photos are never rotated.

## Components

### Buttons
Printed on the card: firm, rounded at the card corner.
- **Shape:** 14px radius, min height 52px, Gabarito 650 18px, optional 20px SVG stroke icon.
- **Ink (primary):** ink fill, mist text, ink button shadow; hover to deep ink with the arrow nudging 3px right; active presses 1px down. 0.3s ease-out.
- **Sky (secondary):** sky fill, ink text, no shadow; hover to deep sky. Used for the card flip, beside the primary.
- **Small:** 42px, 12px radius, 16px; the header's pre-registration button.
- **Text link:** bold ink with a deep-sky underline and an arrow icon for tertiary actions.

### Inputs / Fields
- **Style:** white, 1.5px deep-sky border, 12px radius, min height 52px, 18px text; labels above in bold 16px ink.
- **Hover / Focus:** border to faded ink; focus to ink border with a 4px sky halo.
- **Error:** plum border, rose halo, bold 15px plum message below.
- **On the card:** borderless inputs on a dashed deep-sky rule; focus turns the rule solid ink with a faint white wash.

### Navigation
Sticky mist bar: crest plus "Canovelles BC" in Gabarito 750, three bold 16px links whose deep-sky underline draws in from the left on hover, and the small ink button. Below 760px the links collapse into a sky "Menú" toggle (two bars that cross into an X) opening a disclosure panel: sky-soft plastic with the card corner on its bottom edge, 26px Gabarito links on deep-sky rules, and the full-width ink pre-registration button. It closes on a link, on Escape (focus returns to the toggle) and when the viewport widens; it is not a modal.

### Carnet (signature component)
Credit-card ratio (1.586) on sky plastic with a white sheen gradient, guilloche lines in deep sky, a lanyard slot, crest and club name, "Carnet de jugador · Temporada" printed in small uppercase faded ink, a 3:4 photo window (dashed, silhouette; turns mint with initials once a name is typed), Nom / Any de naixement / Grup fields, the circular dashed season placeholder, the motto, and the iridescent bottom strip.
- **Found:** the group stamps in (0.55s, scale and blur), the butter sticker presses on (0.6s), the strip shimmers once (1.6s), the Grup rule turns deep mint.
- **Flip:** 3D rotateY over 0.9s; the back (soft sky, deep-sky band) lists every group with the found one highlighted in butter, or shows that group's name, years, note and a pre-registration link. Reduced motion cross-fades instead.
- **Preview mode:** the same card mirrors inputs elsewhere (closing section, pre-registration page).

### Group Rows
Stage title column beside rows of group name, years, teams, note on 1px deep-sky rules. A match raises the name to 800 and presses a tilted butter "El seu grup" tag onto the row.

### Stickers
Die-cut pills in butter, mint or sky with a 4px white border, Gabarito 700 19px, tilted per item, on one white card-lift sheet; hover straightens and lifts 2px.

### Prints (photos)
Club photos in blue duotone with the shared corner on a sky backing, no border. The location photo ships already duotoned; the family photo is duotoned at runtime by the inline SVG filter `#duotone` (ink-navy to mist).

## Do's and Don'ts

### Do:
- **Do** let the carnet be the story: type onto it, print the result onto it, flip it for detail.
- **Do** keep all type in ink (#24435f) or faded ink, and put colour behind it on objects.
- **Do** use only sky, butter and mint as hues; reserve plum (#8a2f45) and its rose halo for form errors.
- **Do** derive corners from the card ratio (3.7cqi on the card, 14px buttons, 12px fields); pills only for stickers.
- **Do** animate with the one ease-out curve (cubic-bezier(0.16, 1, 0.3, 1)) and only for print-in, sticker press, card flip and the single strip shimmer; disable them under reduced motion.
- **Do** render club photos in the blue duotone with the shared corner.
- **Do** separate stages with 2px ink rules and rows with 1px deep-sky rules.

### Don't:
- **Don't** use the sports-club default: dark full-bleed action hero, condensed caps, row of team cards.
- **Don't** use the pastel-kids default: blobs, cream grounds, rounded everything.
- **Don't** put the iridescent strip anywhere but card edges, or loop its shimmer.
- **Don't** apply crest orange outside the crest, or redraw, outline or recolour the crest.
- **Don't** confirm input with toasts or pop-ups; print it onto the card.
- **Don't** add hard offset shadows or shadow on sections, rows, photos or text.
- **Don't** put eyebrow labels or kickers above headings.
- **Don't** reuse acta template tokens (petrol ink, biro hand face, square cells) in this world.
