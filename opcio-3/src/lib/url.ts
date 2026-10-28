/** Afegeix la ruta base (p. ex. /Web-CanovellesBC/opcio-3) als enllaços interns. */
export const url = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + path;
