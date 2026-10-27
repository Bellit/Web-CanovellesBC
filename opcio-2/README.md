# Canovelles BC: web v2

Nova web del Canovelles Bàsquet Club, feta amb [Astro](https://astro.build). De moment hi ha la portada i la pàgina de preinscripció.

## Ordres

| Ordre | Què fa |
|---|---|
| `npm install` | Instal·la les dependències |
| `npm run dev` | Servidor local a `http://localhost:4321` |
| `npm run build` | Genera la web a `dist/` |
| `npm run preview` | Serveix `dist/` en local |

## On és cada cosa

| Què | On |
|---|---|
| Dades del club, grups i valors | `src/data/club.ts` |
| Portada | `src/pages/index.astro` |
| Preinscripció | `src/pages/preinscripcio.astro` |
| Carnet (anvers, dors i vista prèvia) | `src/components/Carnet.astro` |
| Plantilla per a esdeveniments amb inscripció (estil acta, no indexada) | `src/pages/plantilles/acta.astro` + `src/styles/acta.css` |
| Estils generals i colors | `src/styles/global.css` |
| Fotos | `src/assets/fotos/` |
| Escut i favicon | `public/escut.svg`, `public/favicon.svg` |
| Sistema de disseny | `DESIGN.md` |

## Pendent

- Confirmar els anys de naixement de cada grup (`src/data/club.ts`).
- Servei per al formulari de preinscripció: ara obre el correu de qui l'omple amb les dades preparades.
- Horaris, quotes i xarxes socials.
