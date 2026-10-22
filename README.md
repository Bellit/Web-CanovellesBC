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

Netlify: connecta el repositori i ja està; `netlify.toml` defineix el build i les redireccions 301 de les URLs de l'antic WordPress.
Els formularis (`contacte`, `preinscripcio`, `patrocini`) funcionen amb Netlify Forms. Activa les notificacions per correu a *Site settings → Forms*.
