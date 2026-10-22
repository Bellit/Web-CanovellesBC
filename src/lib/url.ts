const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Afegeix la ruta base (p. ex. /Web-CanovellesBC a GitHub Pages) a un camí absolut del web. */
export const url = (path: string) => `${base}${path}`;
