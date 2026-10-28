---
name: Canovelles Bàsquet Club · Opció 3
description: The Pavelló Municipal floor as a website; flat court-colour fields framed by painted lines.
colors:
  court: "#1f4fbf"
  court-deep: "#173c93"
  zone: "#ef5a2e"
  zone-deep: "#c94419"
  outer: "#1f8a5b"
  outer-deep: "#176b46"
  line: "#ffd23f"
  ink: "#0f1b3d"
  ink-soft: "#3b4766"
  floor: "#eef0f3"
  floor-deep: "#dfe3ea"
  white: "#ffffff"
  court-mist: "#dbe4fb"
  outer-mist: "#e2f3ea"
  field-rule: "#b9c1d3"
typography:
  display:
    fontFamily: "'Anybody Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(44px, 6vw, 88px)"
    fontWeight: 850
    lineHeight: 0.98
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "'Anybody Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(36px, 4.4vw, 60px)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "'Anybody Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(24px, 2.1vw, 32px)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 100"
  lead:
    fontFamily: "'Hanken Grotesk Variable', system-ui, sans-serif"
    fontSize: "clamp(18px, 1.4vw, 21px)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "'Hanken Grotesk Variable', system-ui, sans-serif"
    fontSize: "clamp(17px, 1.15vw, 19px)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "'Hanken Grotesk Variable', system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.2
  button:
    fontFamily: "'Hanken Grotesk Variable', system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: 1
rounded:
  inset: "3px"
  base: "6px"
  pill: "999px"
spacing:
  inset: "5px"
  gap-sm: "12px"
  gap-md: "18px"
  gutter: "clamp(16px, 4vw, 48px)"
  section: "clamp(64px, 8vw, 120px)"
  page: "1240px"
components:
  button-primary:
    backgroundColor: "{colors.zone-deep}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.base}"
    padding: "0 22px"
    height: "52px"
  button-court:
    backgroundColor: "{colors.court}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.base}"
    padding: "0 22px"
    height: "52px"
  button-line:
    backgroundColor: "{colors.line}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.base}"
    padding: "0 22px"
    height: "52px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.court}"
    typography: "{typography.button}"
    rounded: "{rounded.base}"
    padding: "0 22px"
    height: "52px"
  input-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.base}"
    padding: "12px 14px"
    height: "52px"
  stage-card:
    textColor: "{colors.white}"
    rounded: "{rounded.base}"
    padding: "clamp(18px, 2vw, 28px)"
  group-chip:
    backgroundColor: "rgb(0 0 0 / 0.24)"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
  court-spot:
    backgroundColor: "{colors.court}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "4px 10px 4px 4px"
  court-spot-selected:
    backgroundColor: "{colors.line}"
    textColor: "{colors.ink}"
  detail-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.base}"
    padding: "clamp(22px, 2.4vw, 32px)"
---

# Design System: Canovelles Bàsquet Club · Opció 3

## Overview

**Creative North Star: "The Pavilion Floor"**

The site is the floor of the Pavelló Municipal de Canovelles seen from above. Every section is a whole field of one synthetic-floor colour (court blue, zone orange, outer green, ink, or the pale grey floor), and the only ornament is what a multisport floor actually carries: painted lines with round ends, keys, free-throw arcs, the centre circle, the rim and backboard. Structure is conventional (header, hero, sections, footer), so parents on a phone never have to learn the page; the character comes from colour used at full field scale and from lines that paint themselves in.

Density is relaxed and sporty: large Anybody headlines stretched wide, short Hanken Grotesk paragraphs capped around 44-46ch, generous section padding. Photos are real club photos, cropped square-cornered to the 6px base radius or run full bleed (the club family photo). The hero sets the photo inside a painted key: an orange lane on court blue with yellow lane hash marks and the free-throw semicircle outside the lane. Motion has one grammar: lines paint along their length (stroke-dashoffset) and content rises 14px, both on the same exponential ease-out, once, and not at all under reduced motion.

**Key Characteristics:**
- Whole sections as flat court-colour fields; no gradients, no textures.
- Painted lines (2-5px, round caps) as the only ornament: keys, arcs, centre circles, sidelines.
- Anybody wide (112% width) for display; Hanken Grotesk for everything read.
- Buttons are painted rectangles with an inset line, like a zone marked on the floor.
- One motion grammar: lines paint, content rises 14px, ease cubic-bezier(0.16, 1, 0.3, 1).

## Colors

A synthetic pavilion floor palette: saturated, flat field colours on a pale grey ground, with yellow reserved for lines.

### Primary
- **Court Blue** (court): the main playing field. The court finder section, the pre-registration summary card, the "Com arribar-hi" button, the header's bottom rule, brand "BC", ghost button text, focus ring on form fields. Also the theme-color.
- **Deep Court** (court-deep): pressed/hover state of court elements and the fill of the year input sitting on Court Blue.

### Secondary
- **Zone Orange** (zone): the painted key. The hero lane behind the photo, the paint inside the court finder key, the final CTA field (with ink body text and white headline), the sideline rule and nav hover underline.
- **Deep Zone** (zone-deep): the default button fill (white text clears AA at 17px bold) and error text/borders in forms. Also the Formació stage card.

### Tertiary
- **Outer Green** (outer): the outer floor colour named by the world; the shipped build uses its deep variant for fields.
- **Deep Outer Green** (outer-deep): the El club field and the Escola stage card; also the Escola group terms and the form success message on light ground.
- **Line Yellow** (line): painted lines on dark fields (hero key, rim, route, side court), selected court spot, the yellow button on the orange field, footer headings, value titles on green, focus outline, text selection.

### Neutral
- **Ink** (ink): text on light ground, the footer field, the Veterans stage card.
- **Soft Ink** (ink-soft): secondary paragraphs and leads on the floor.
- **Floor Grey** (floor): the quiet page ground; also the translucent header.
- **Floor Rule** (floor-deep): 2px dividers on the floor (Escola group list, mobile nav row).
- **White** (white): text on fields, court lines in the finder, detail card surface.
- **Court Mist / Outer Mist** (court-mist, outer-mist): softened paragraph text on the blue and green fields respectively, instead of opacity.
- **Field Rule** (field-rule): resting 2px border of form inputs.

### Named Rules
**The Whole Field Rule.** A floor colour is used as an entire section or card field, never as a small accent dot on grey. If a colour appears, it owns its area.

**The Yellow Is Paint Rule.** Line Yellow is for lines, focus, selection and the one yellow button; it is never a section background.

## Typography

**Display Font:** Anybody Variable (with Arial Narrow, sans-serif)
**Body Font:** Hanken Grotesk Variable (with system-ui, sans-serif)

**Character:** Anybody stretched wide and heavy reads like lettering painted on a sports hall wall; Hanken Grotesk is plain, warm and legible on a phone in daylight.

### Hierarchy
- **Display** (850, clamp(44px, 6vw, 88px), 0.98, -0.035em, width 112%): the hero headline and the pre-registration page title only.
- **Headline** (800, clamp(36px, 4.4vw, 60px), 0.98, -0.02em, width 112%): section h2s; the finder and final CTA run slightly larger (up to 64px and 72px).
- **Title** (800, clamp(24px, 2.1vw, 32px), width 100%): stage cards, value titles (24px), detail-card group name (up to 42px), form legends (22-28px at 112%).
- **Lead** (400, clamp(18px, 1.4vw, 21px), 1.55): the paragraph right under a headline; 44-46ch max.
- **Body** (400, clamp(17px, 1.15vw, 19px), 1.55): running text; 16px inside cards.
- **Label** (700, 14px): group chips, detail-card terms, notes. Sentence case; no tracking.
- **Numerals** (Anybody 800, tabular-nums): the year input (24px, 0.06em) and detail-card values (22px).

### Named Rules
**The Wide Voice Rule.** Width 112% is for page and section headlines; card-level titles drop back to 100% so they fit narrow fields.

## Layout

A centred page of 1240px with fluid gutters (clamp(16px, 4vw, 48px)). Sections stack as full-width fields with vertical padding of clamp(64px, 8vw, 120px). Inside, two-column asymmetric grids carry most content (11fr/9fr hero, 4fr/6fr finder, 5fr/6fr and 5fr/7fr content splits, 7fr/4fr pre-registration form plus sticky summary), all collapsing to one column at 900px. The stages band is a flex row where each card grows by its number of groups and stacks vertically under 900px. The header is sticky (72px) and splits into two rows with a scrollable link row at 860px; scroll padding follows (88px / 128px). Button groups gap 12px; heading-to-lead spacing is 16-18px.

## Elevation & Depth

Flat at rest. Depth comes from colour fields abutting each other, not from shadows. Shadow appears only as a response to hover on buttons and stage cards (a lift of 2-4px with the soft hover shadow) and once, structurally, under the court finder's detail card, which sits on Court Blue and needs separation.

### Shadow Vocabulary
- **Hover lift** (`box-shadow: 0 2px 4px rgb(15 27 61 / 0.08), 0 14px 32px -12px rgb(15 27 61 / 0.3)`): buttons and stage cards on hover, removed on active.
- **Card on field** (`box-shadow: 0 18px 40px -18px rgb(5 14 40 / 0.6)`): the white detail card on Court Blue.

### Named Rules
**The Flat Floor Rule.** Surfaces are flat at rest; a shadow means "this responds to you" or "this card is lifted off the court".

## Shapes

Gently squared corners (6px) on fields that are cards, buttons, inputs and inset photos; full-bleed sections have none. The inset painted line inside buttons and stage cards uses a tighter 3px corner, offset 5px (buttons) or 8px (cards), in translucent white. Pills (999px) are reserved for small markers: group chips and court spots. Lines are strokes with round caps and joins, 2-5px depending on scale; the paint token is 4px for rules drawn in CSS (sideline, value separators, form legends). Arcs and circles are geometric, taken from real court markings.

## Components

### Buttons
Painted rectangles with a line inset, like a zone marked on the floor.
- **Shape:** gently squared (6px), 52px tall (44px in the header), 22px horizontal padding; inner 2px line at 5px inset with a 3px corner.
- **Primary:** Deep Zone fill, white 17px bold text, optional trailing arrow drawn as a stroked SVG (2.4 stroke, round caps).
- **Hover / Focus:** lifts 2px with the hover shadow, the inner line widens to a 3px inset, the arrow nudges 3px right; active returns flat. Focus is the global 3px Line Yellow outline at 3px offset.
- **Court:** Court Blue fill, for wayfinding ("Com arribar-hi").
- **Line:** Line Yellow fill with ink text and an ink inset line; used on Court Blue (finder search) and Zone Orange (final CTA).
- **Ghost:** transparent, text and inset line in currentColor (Court Blue on the floor), the line flush to the edge.

### Chips
- **Group chip:** pill, 24% black over the stage card colour, white 14px bold. Static labels, not filters.

### Cards / Containers
- **Stage card:** whole-field colour (Deep Outer, Deep Zone, Court, Ink in that order), 6px corners, inset 2px white line at 40% opacity, white text; rises 4px with the hover shadow.
- **Detail card:** white on Court Blue, 6px corners, card-on-field shadow, Court Blue title, Anybody numerals.
- **Summary card (pre-registration):** Court Blue, 28px padding, sticky, a small yellow line drawing of a half court on top, numbered steps with yellow markers.

### Inputs / Fields
- **Style:** white, 2px Field Rule border, 6px corners, 52px tall, 18px text; labels above in 700.
- **Focus:** border turns Court Blue with a 4px Court Blue halo at 20%.
- **Error:** border and message in Deep Zone, 15px 600, message hidden when empty.
- **On a field:** the finder's year input inverts: Deep Court fill, 3px white border turning yellow on focus, Anybody 24px tabular numerals.
- **Form sections:** legends are Anybody titles over a 4px Court Blue rule.

### Navigation
Translucent Floor Grey header with blur and a 3px Court Blue bottom rule; crest plus "Canovelles BC" in Anybody 19px with "BC" in Court Blue; four 16px semibold links whose 3px Zone Orange underline paints from the left on hover; a compact primary button on the right. Under 860px the links move to a second, horizontally scrollable row over a Floor Rule line.

### Court Finder (signature)
A top-down half court in SVG on the Court Blue field: white 4px court lines, the key filled Zone Orange, yellow rim, white backboard. Ten groups sit as pill spots from the rim (Escoleta) to half court (Veteranes). Entering a birth year or tapping a spot paints a yellow route from the rim through each earlier group to the selected one, rolls a drawn ball there (rotation proportional to distance), marks the spot yellow with ink text, and opens the white detail card with a group-specific pre-registration button.

### Painted Key (hero)
The hero image sits in a Court Blue frame: an orange lane painted from the bottom, the photo inset inside it, and yellow 5px strokes for the lane outline, hash marks on both sides and the free-throw semicircle above the lane. The strokes paint in on load.

## Do's and Don'ts

### Do:
- **Do** give each section one whole floor colour (court, zone, outer-deep, ink, or floor) and keep its content inside that field.
- **Do** draw ornament only from real court markings, as round-capped strokes (2-5px) that paint in via stroke-dashoffset when entering the viewport.
- **Do** use Deep Zone for the default button and white text; use the Line button on blue or orange fields.
- **Do** reveal content by rising 14px over 0.9s on cubic-bezier(0.16, 1, 0.3, 1), staggered 90ms, once; switch all of it off under prefers-reduced-motion.
- **Do** soften text on coloured fields with a tinted mist colour (court-mist, outer-mist), not opacity.

### Don't:
- **Don't** use gradients, textures or glow; the floor is flat paint.
- **Don't** make Line Yellow a section background or body text colour on the floor.
- **Don't** add shadows to surfaces at rest; shadow is hover feedback or the one card lifted off the court.
- **Don't** use white body text on Zone Orange; on that field body text is ink and only the large headline is white.
- **Don't** redraw or recolour the club crest; it sits on the Floor Grey header and the Ink footer as supplied.
