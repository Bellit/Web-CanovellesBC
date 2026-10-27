---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/preinscripcio.astro"]
---

## Scope

Home page (`src/pages/index.astro`) of Canovelles BC v2, redesign round 2, plus the pre-registration page it links to (`src/pages/preinscripcio.astro`). Mode: Persuade. Code-led build (no image generation available). The previous "acta" world is kept only as an event template at `src/pages/plantilles/acta.astro` (noindex, own acta.css); it is not part of this world.

## Audience, job, action

New families in Canovelles on a phone. Job: see there is a group for their child's age, where it trains, and that the club will look after them. Primary action: the birth-year finder on the carnet, which leads to the separate pre-registration page with name, year and group carried over. Feeling: warm and close, a neighbourhood club. Avoid: childish, template look, too much text, strong contrast.

## Direction contract

THESIS: Being part of Canovelles means having its carnet: the home page is your child's club card, half-printed, waiting for a name. It refuses the sports-club default (dark full-bleed action hero, condensed caps, row of team cards) and the pastel-kids default (blobs, cream, rounded everything).

OWN-WORLD: Matte pastel-blue card plastic (~#C4DCF0) as the page's dominant field, a misty blue ground, deep blue-slate ink (~#24435F) for all type; three dyes only: sky, butter (~#F4E6A6) for the season sticker, mint (~#BFE3D3); a thin pastel iridescent strip (mint/rose/lilac) on card edges only; crest orange lives only in the crest. ISO card corner ratio as the one corner language. Type: Gabarito for printed card titling, Atkinson Hyperlegible Next for fields and body, tabular figures. Real club photos (already blue-duotoned) printed on card stock.

STORY: The parent sees a carnet with the crest and an empty name line, types the child's name and birth year directly on it, watches the card print their group and the 2026-27 sticker, flips it to read what that group does, and continues to pre-registration with everything filled.

FIRST VIEWPORT: Slim nav (crest, three links, "Preinscripció" button). Left 5 cols: H1 in Gabarito ~clamp(44px,5.6vw,84px), one-line lede. Right 7 cols: the carnet at credit-card ratio, tilted ~-3deg, soft offset shadow: crest, "Carnet de jugador · Temporada 2026-27", photo window, editable fields Nom / Any de naixement, printed Grup field, butter season sticker, iridescent edge strip, lanyard slot; primary ink button under it. Mobile: H1, then the carnet in portrait orientation full width.

FORM: Candidate 4 of my grounded list (carnet de soci/jugador), assigned by the re-roll. Seed key aae1d5cd (reroll 1). Raises: colour only on edges, text calm (iridescent cloud edge); the carnet is the only box on the page (cracktro scroller); typed input prints onto the object, no toasts (phosphor terminal); matched group gains weight in the list (chromatophore skin). Signature interaction: typing name and year prints onto the card, the group stamps in and the season sticker presses on; the card flips (3D) to its back with that group's details. Motion grammar: print-in, sticker press, card flip; one moment, ease-out.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Birth-year ranges per group still need club confirmation.
- Form service; schedules and fees; social links.
