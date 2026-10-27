# Canovelles BC: propostes de web

Aquest repositori conté diverses propostes de web per al Canovelles Bàsquet Club. Cada proposta és un projecte [Astro](https://astro.build) independent.

| Carpeta | Què és |
|---|---|
| `portada/` | Pàgina per triar la proposta (HTML estàtic) |
| `opcio-1/` | Proposta 1: web completa, blau marí i groc (vegeu `opcio-1/README.md`) |
| `opcio-2/` | Proposta 2: web v2 amb el carnet del club (vegeu `opcio-2/README.md`) |

## Previsualització (GitHub Pages)

Cada `push` a `main` publica-ho tot amb `.github/workflows/pages.yml`:

- <https://bellit.github.io/Web-CanovellesBC/>: portada
- <https://bellit.github.io/Web-CanovellesBC/opcio-1/>
- <https://bellit.github.io/Web-CanovellesBC/opcio-2/>

Les còpies de previsualització porten `noindex` perquè Google no les indexi.

## Treballar en una proposta

```
cd opcio-1
npm install
npm run dev
```

## Afegir una proposta nova

1. Crea la carpeta `opcio-3/` amb el projecte Astro. Ha de llegir `SITE_URL` i `BASE_PATH` a `astro.config.mjs` i fer servir `import.meta.env.BASE_URL` als enllaços interns.
2. Afegeix `opcio-3` a la llista `matrix.opcio` del workflow.
3. Afegeix una targeta a `portada/index.html`.

## Hosting definitiu

Quan el club triï una proposta, n'hi ha prou amb fer `npm run build` dins de la seva carpeta i pujar el contingut de `dist/` a l'arrel de `canovellesbc.com`.
