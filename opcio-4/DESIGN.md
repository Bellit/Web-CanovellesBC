---
name: Canovelles BC · Opció 4
description: The whole site is the scoreboard of the Pavelló Municipal de Canovelles; scroll is the game clock.
colors:
  cabinet: "#14161a"
  bezel: "#24272d"
  bezel-hi: "#33373f"
  window: "#0a0b0d"
  bulb-off: "#2a2620"
  amber: "#ffb21f"
  amber-dim: "#a5843a"
  red: "#ff4a2e"
  red-deep: "#c92c14"
  vinyl: "#f2efe6"
  vinyl-soft: "#bdb8aa"
  home: "#2b5cff"
  housing: "#000000"
typography:
  display:
    fontFamily: "'Doto Variable', monospace"
    fontSize: "clamp(72px, 10vw, 150px)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "0.02em"
    fontFeature: "tnum"
  headline:
    fontFamily: "'Sofia Sans Extra Condensed Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(48px, 7vw, 104px)"
    fontWeight: 850
    lineHeight: 0.85
    letterSpacing: "0.04em"
  title:
    fontFamily: "'Sofia Sans Extra Condensed Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(30px, 3vw, 44px)"
    fontWeight: 750
    lineHeight: 1
  readout:
    fontFamily: "'Doto Variable', monospace"
    fontSize: "clamp(24px, 2.4vw, 34px)"
    fontWeight: 900
    lineHeight: 1
    fontFeature: "tnum"
  body:
    fontFamily: "'Sofia Sans Variable', system-ui, sans-serif"
    fontSize: "clamp(17px, 1.15vw, 19px)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "'Sofia Sans Extra Condensed Variable', 'Arial Narrow', sans-serif"
    fontSize: "18px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.04em"
rounded:
  chip: "2px"
  plate: "3px"
  window: "4px"
  cabinet: "6px"
  bulb: "50%"
spacing:
  gutter: "clamp(16px, 3.4vw, 40px)"
  period: "clamp(48px, 6vw, 88px)"
  cabinet-gap: "clamp(24px, 3vw, 40px)"
  cabinet-pad: "clamp(20px, 3vw, 40px)"
  row: "12px"
  page: "1280px"
components:
  push-cap:
    backgroundColor: "{colors.red}"
    rounded: "{rounded.bulb}"
    size: "76px"
  rail-cta:
    backgroundColor: "{colors.red}"
    textColor: "{colors.vinyl}"
    typography: "{typography.label}"
    rounded: "{rounded.plate}"
    padding: "0 16px"
    height: "44px"
  nav-plate:
    backgroundColor: "{colors.vinyl}"
    textColor: "{colors.window}"
    typography: "{typography.label}"
    rounded: "{rounded.plate}"
    padding: "0 10px 0 4px"
    height: "36px"
  nav-plate-hover:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.window}"
  nav-period-chip:
    backgroundColor: "{colors.window}"
    textColor: "{colors.red}"
    rounded: "{rounded.chip}"
    padding: "2px 5px"
  side-plate-home:
    backgroundColor: "{colors.home}"
    textColor: "{colors.vinyl}"
    typography: "{typography.label}"
    padding: "6px 14px 5px"
  period-plate:
    backgroundColor: "{colors.vinyl}"
    textColor: "{colors.window}"
    typography: "{typography.label}"
    padding: "6px 12px 5px"
  vinyl-btn:
    backgroundColor: "transparent"
    textColor: "{colors.vinyl}"
    typography: "{typography.label}"
    rounded: "{rounded.plate}"
    padding: "0 18px"
    height: "48px"
  vinyl-btn-hover:
    backgroundColor: "{colors.vinyl}"
    textColor: "{colors.window}"
  console-key:
    backgroundColor: "{colors.vinyl}"
    textColor: "{colors.window}"
    typography: "{typography.label}"
    rounded: "{rounded.plate}"
    padding: "0 20px"
    height: "64px"
  input-field:
    backgroundColor: "{colors.window}"
    textColor: "{colors.vinyl}"
    typography: "{typography.body}"
    rounded: "{rounded.plate}"
    padding: "12px 14px"
    height: "52px"
  window:
    backgroundColor: "{colors.window}"
    textColor: "{colors.amber}"
    rounded: "{rounded.window}"
  cabinet:
    backgroundColor: "{colors.bezel}"
    rounded: "{rounded.cabinet}"
    padding: "{spacing.cabinet-pad}"
  lamp:
    backgroundColor: "{colors.bulb-off}"
    rounded: "{rounded.bulb}"
    size: "30px"
  lamp-lit:
    backgroundColor: "{colors.amber}"
  bulb-toggle:
    backgroundColor: "{colors.window}"
    textColor: "{colors.vinyl}"
    rounded: "{rounded.plate}"
    padding: "0 12px"
    height: "40px"
---

# Design System: Canovelles BC · Opció 4

## Overview

**Creative North Star: "The Pavelló Scoreboard"**

Every surface is a module of one lacquered steel cabinet: the scoreboard hanging in the Pavelló Municipal de Canovelles. Information lives in black bulb windows where unlit dots are always visible behind the lit ones, names and labels are white vinyl-cut plates stuck onto the steel, and the one blue vinyl stripe marks the home side. Scroll is the game clock: the rail reads PERÍODE and a 40-minute clock that advances with the page, and each section is a numbered period (P1 El club, P2 L'escola, P3 Els grups, P4 On som, then PRÒRROGA).

The board is dense and physical but never decorative for its own sake. Depth is the depth of real hardware: recessed windows, a raised bezel lip, rivets, a push button with a skirt that travels when pressed. Light is literal: bulbs are dots that are on or off, never glowing halos. Motion is mechanical: digits tick, lamps switch on one at a time, bulb rows light top to bottom, and nothing eases or slides.

Photography is not a hero. Club photos are rendered as the board's own amber bulb matrix and resolve into the real photo only when someone asks with the toggle.

**Key Characteristics:**
- Graphite cabinet, black windows, amber and red bulbs, white vinyl plates, one home-blue stripe.
- Doto dot-matrix for every number and readout; Sofia Sans Extra Condensed for vinyl plates; Sofia Sans for running text.
- Unlit bulbs always visible behind lit ones (dot-grid windows, dim lamp housings, off dots in the canvas).
- Stepped, linear, or instant motion only; no easing curves, no sliding.
- Physical depth: recessed windows, raised cabinets, a travelling push button.

## Colors

A night-time scoreboard: near-black steel and glass carrying two bulb colors and one strip of vinyl color.

### Primary
- **Bulb Amber** (#ffb21f): the lit bulb. Big digits, readouts, lit lamps, the lit name in a lit table row, focus rings, nav hover, selection. It is light, so it only ever appears inside or on top of black.
- **Dim Amber** (#a5843a): a bulb at rest in the players panel (group numbers, birth years, team codes) before the console or hover lights the row up to full amber.

### Secondary
- **Foul Red** (#ff4a2e): the second bulb color. Score and period digits, the P1–P4 chips, error readouts, and the TEMPS MORT push button.
- **Skirt Red** (#c92c14): the push button's lower body, visible as the 6px skirt under the red cap.

### Tertiary
- **Home Blue** (#2b5cff): the single vinyl stripe for the home side. Only the LOCAL plate and the NOU FITXATGE plate carry it.

### Neutral
- **Cabinet Graphite** (#14161a): page background, the wall the board hangs on.
- **Bezel Steel** (#24272d): the cabinet modules, the top rail, the footer, the console.
- **Bezel Highlight** (#33373f): the 2px top lip of every cabinet, lamp bezel rings, table header rule, hover borders on inputs.
- **Window Black** (#0a0b0d): every bulb window, panel, input and the bulb canvas background.
- **Unlit Bulb** (#2a2620): the off state of every bulb: window dot grid, lamp at rest, canvas dots below threshold.
- **Vinyl White** (#f2efe6): plate lettering, plate backgrounds, running text.
- **Vinyl Soft** (#bdb8aa): secondary text and small window labels.
- **Housing Black** (#000000): the 2–4px borders around windows, cabinets, lamps and plates.

### Named Rules
**The Bulbs-Are-Light Rule.** Amber and red are bulb colors; they sit on Window Black or Bezel Steel. The only exceptions are the red push button and red rail CTA (painted hardware) and the amber nav-plate hover.

**The One Stripe Rule.** Home Blue marks the home side only. It never becomes a link, a button or a text color.

## Typography

**Display Font:** Doto Variable (with monospace)
**Plate Font:** Sofia Sans Extra Condensed Variable (with Arial Narrow)
**Body Font:** Sofia Sans Variable (with system-ui)

**Character:** One dot face at two scales (huge clock digits, small readouts) against tall condensed vinyl capitals; the plain sans carries everything a parent actually reads.

### Hierarchy
- **Display** (Doto 900, clamp(72px, 10vw, 150px), 1, tabular figures): the FUNDACIÓ clock and the board's big numbers (score digits clamp(64px, 9vw, 132px), PRÒRROGA, PAVELLÓ MUNICIPAL).
- **Headline** (Extra Condensed 850, clamp(48px, 7vw, 104px), 0.85, uppercase): period titles and the pre-registration H1.
- **Title** (Extra Condensed 750, clamp(30px, 3vw, 44px), 1): the lead line that opens each period.
- **Readout** (Doto 900, 24–42px): period tags, rail clock, table numbers, console output, mini-board fields.
- **Body** (Sofia Sans 400, clamp(17px, 1.15vw, 19px), 1.55): running text, capped at 52ch.
- **Label** (Extra Condensed 800, 14–24px, 0.04em, uppercase): every vinyl plate, nav plate, button label, lamp name.

### Named Rules
**The Dots-Are-Data Rule.** Doto is used only for figures and short scoreboard readouts in uppercase, always inside a window. Sentences are never set in Doto.

**The Plate Rule.** Outside Doto readouts, any uppercase label is a vinyl plate (Extra Condensed 800, 0.04em). There is no other uppercase style.

## Layout

A single 1280px column with a fluid gutter (clamp(16px, 3.4vw, 40px)). The first viewport is one wide board in three columns (LOCAL | clock | VISITANT); below it, each period is its own cabinet module separated by a 3px black seam, with period padding of clamp(48px, 6vw, 88px). Inside a cabinet: a period head (window tag P1–P4, plate headline, a right-aligned vinyl plate), then asymmetric two-column rows (5/7, 7/5, 8/4) that alternate which side holds the bulb photo.

The rail is sticky (min-height 64px): crest, nav plates, the PERÍODE and clock window, and the TEMPS MORT CTA. At ≤980px the board restacks to clock on top with LOCAL/VISITANT below, all period rows collapse to one column, and the nav plates drop to a second rail strip that scrolls horizontally. At ≤620px LOCAL and VISITANT sit side by side above the clock, lamp grids go to one column, and the players table drops the team column. The pre-registration page is a 7/5 grid with a sticky mini-board that moves above the form at ≤900px.

## Elevation & Depth

Depth is hardware depth: modules are raised plates with a lit top lip, windows are recessed glass, and the push button physically travels. There are no glows. The window dot grid (a radial-gradient pattern of Unlit Bulb dots on a 9px pitch) is the only gradient in the system, and it exists to draw the unlit bulbs.

### Shadow Vocabulary
- **Cabinet lift** (`box-shadow: inset 0 2px 0 #33373f, 0 30px 60px -30px rgb(0 0 0 / 0.9)`): the board and every period cabinet.
- **Window recess** (`box-shadow: inset 0 2px 6px rgb(0 0 0 / 0.9)`): every bulb window; inputs use `inset 0 2px 5px rgb(0 0 0 / 0.8)`.
- **Push skirt** (`box-shadow: 0 6px 0 #c92c14, 0 10px 18px rgb(0 0 0 / 0.55), inset 0 -4px 0 rgb(0 0 0 / 0.18)`): the red push cap at rest; on press it drops 5px and the skirt collapses to 1px.
- **Key** (`box-shadow: inset 0 -4px 0 rgb(0 0 0 / 0.22), 0 6px 12px rgb(0 0 0 / 0.55)`): the console ENTRA key and rail CTA; pressing translates 2–3px down.
- **Lamp bezel** (`box-shadow: 0 0 0 3px #33373f`): the steel ring around each lamp housing.

### Named Rules
**The No-Glow Rule.** Lit means filled with amber or red. No blurred colored shadows, no text-shadow, no neon.

**The Press-Travels Rule.** Pressable hardware (push cap, keys) translates down on :active and its shadow shortens; nothing else moves.

## Shapes

Industrial and nearly square. Plates and keys take 3px corners, windows 4px, cabinets 6px, period chips 2px. Bulbs, lamps, rivets and the push cap are perfect circles. Every window, cabinet, lamp and plate is held by a solid black housing border (2px on plates and inputs, 3px on windows and cabinets, 4px around lamps). Rivets are flat two-tone discs (10px, #3a3e46 face, 2px #111215 rim) at the four corners of the board.

## Components

### Buttons
Hardware, not UI chrome.
- **Push button (TEMPS MORT):** a 76px Foul Red circular cap with a 5px steel ring and a vinyl arrow, beside a plate label (clamp(26px, 2.4vw, 34px)) and a soft sub-line. Used for every pre-registration call and the form's ENVIA. Press drops the cap 5px in 0.08s linear. Focus puts a 3px amber ring on the cap.
- **Rail CTA:** a red 44px plate with a blinking amber LED (1.2s steps(1)); the compact TEMPS MORT on the rail, hidden on the pre-registration page.
- **Vinyl outline button:** 48px, 2px vinyl border, plate label 21px; fills vinyl with black text on hover (0.15s linear). Secondary actions such as directions and email.
- **Console key (ENTRA):** a 64px vinyl key with a key shadow that travels 3px on press.

### Chips
- **Period chip:** Doto 900 P1–P4 in red on a black 2px-radius chip, inset at the start of each nav plate. Decorative and aria-hidden; the nav label carries the meaning.

### Cards / Containers
- **Cabinet module:** Bezel Steel, 3px black border, 6px corners, Cabinet lift shadow, padding clamp(20px, 3vw, 40px), gap clamp(24px, 3vw, 40px). The one container for every period.
- **Window:** Window Black with the unlit dot grid, 3px black border, 4px corners, recessed. Holds every Doto figure.
- **Panel:** a plain Window Black box (no dot grid) for lists and tables that hold body text (Valors lamps, players table).

### Inputs / Fields
- **Style:** Window Black, 2px black border, 3px corners, 52px min-height, body 18px, recessed inset shadow. The console year input is a dot-grid window with 42px amber Doto.
- **Focus:** border turns amber (inputs drop the outline for the border change); hover borders go to Bezel Highlight.
- **Error:** border Foul Red, message in bold 15px #ff7a63 below the field; the console readout turns red.

### Navigation
- **Vinyl plates:** each link is a 36px vinyl-white plate with black text, a black 2px border and its period chip; hover fills amber. At ≤980px the plates move to a second rail strip (34px, 15px text) that scrolls sideways.
- **Game clock:** a black window on the rail with a red Doto period digit and an amber MM:SS clock driven by scroll position (0 to 40:00) and by which period section has crossed 45% of the viewport.

### Lamp Panel (signature)
A list where each item is a 30px lamp: Unlit Bulb face in a 4px black housing with a 3px Bezel Highlight ring. When the list enters the viewport, lamps switch to amber one by one every 260ms with no transition, and their plate names turn amber. Reduced motion lights all at once. Used for Valors and the escola steps.

### Bulb Photo (signature)
A window whose canvas redraws a club photo as amber dots on the board's pitch (7–10px), dot radius and alpha set by luminance stretched between the 4th and 96th percentiles; dark cells stay as unlit dots. Rows switch on top to bottom over 600ms when 35% visible. A real `<button aria-pressed>` (VEURE LA FOTO / TORNAR A LES BOMBETES) bottom-right, or a click on the window, swaps to the real photo with a 4-step opacity change.

### Board Console
A Bezel Steel console where a parent keys a four-digit birth year; the readout window answers in Doto ("2017 > MINI") and the matching row of the players table lights (row background #1f1a10, number red, values amber).

## Do's and Don'ts

### Do:
- **Do** put every number and readout in Doto inside a dot-grid window, with the unlit bulbs visible behind it.
- **Do** make every uppercase label a vinyl plate (Extra Condensed 800, 0.04em, 3px corners).
- **Do** give every new section its own cabinet module with a window period tag and a plate headline.
- **Do** animate with steps(), linear 0.08–0.15s, or setTimeout ticks; honour prefers-reduced-motion by jumping straight to the end state.
- **Do** route every pre-registration call through the red push button or the rail CTA.

### Don't:
- **Don't** add gradients other than the unlit-bulb dot grid.
- **Don't** add glows, neon, text-shadow or colored blurred shadows; a lit bulb is a filled dot.
- **Don't** use easing curves or sliding/translate entrances; the only translation is a pressed button travelling down.
- **Don't** show a club photo as a plain hero image; photos enter as a Bulb Photo.
- **Don't** use Home Blue for anything except the home-side plate.
- **Don't** set sentences in Doto, or body copy in the condensed plate face.
