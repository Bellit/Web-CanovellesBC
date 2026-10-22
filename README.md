# Canovelles BC: web oficial

Web estàtica feta amb [Astro](https://astro.build) i Tailwind CSS v4. Tot el contingut són fitxers Markdown i JSON dins del repositori.

## Ordres

| Ordre | Què fa |
|---|---|
| `npm install` | Instal·la les dependències |
| `npm run dev` | Servidor local a `http://localhost:4321` |
| `npm run build` | Genera la web a `dist/` (valida el contingut) |
| `npm run preview` | Serveix `dist/` en local |
| `npx astro check` | Comprova els tipus |

## Com editar el contingut

| Què | On |
|---|---|
| Dades del club (adreça, correus, xarxes, temporada) | `src/data/club.ts` |
| Equips | `src/content/equips/*.md`: entrenadors, horaris, foto i `urlResultats` |
| Notícies | `src/content/noticies/AAAA-MM-DD-titol.md` (copia `_plantilla.md`) |
| Activitats i tornejos | `src/content/activitats/*.md` |
| Patrocinadors | `src/content/patrocinadors.json` (logos a `public/patrocinadors/`) |
| Fotos | `src/assets/fotos/` (s'optimitzen automàticament) |
| PDFs | `public/docs/` |
| Escut | `public/escut.svg` i `public/favicon.svg` (ara és **provisional**) |

Exemple de patrocinador:

```json
[{ "id": "forn-pep", "nom": "Forn Pep", "logo": "/patrocinadors/forn-pep.svg", "url": "https://...", "nivell": "principal" }]
```

## Desplegament

### Previsualització (GitHub Pages)

Cada `push` a `main` publica la web a <https://bellit.github.io/Web-CanovellesBC/> amb `.github/workflows/pages.yml`.
Aquesta còpia porta `noindex` perquè Google no la indexi.

### Hosting definitiu

`npm run build` genera la web per a `https://canovellesbc.com` a la carpeta `dist/`. Només cal pujar-ne el contingut a l'arrel del hosting.

Als enllaços interns, fes servir sempre el helper `url()` (`src/lib/url.ts`), que hi afegeix la ruta base quan la web no és a l'arrel. Als fitxers Markdown, els enllaços `/...` s'ajusten sols.

**Pendent:**
- Redireccions 301 de les URLs de l'antic WordPress: `/historia/` → `/club/historia/`, `/valors-missio-i-visio/` → `/club/valors/`, `/equipos/` → `/equips/`, `/contacta/` → `/contacte/`, `/torneo-premini/` → `/activitats/torneig-premini/` i `/3d3/` → `/activitats/torneig-3d3/`.
- Servei per als formularis (`contacte`, `preinscripcio`, `patrocini`).
