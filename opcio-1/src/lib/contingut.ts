import { getCollection } from 'astro:content';

const formatData = new Intl.DateTimeFormat('ca', { day: 'numeric', month: 'long', year: 'numeric' });

export const dataLlarga = (data: Date) => formatData.format(data);

/** Notícies publicades (sense esborranys), de la més recent a la més antiga. */
export async function getNoticies() {
  const totes = await getCollection('noticies', ({ data }) => !data.esborrany);
  return totes.sort((a, b) => b.data.data.getTime() - a.data.data.getTime());
}

export async function getEquips() {
  const equips = await getCollection('equips');
  return equips.sort((a, b) => a.data.ordre - b.data.ordre);
}

export async function getActivitats() {
  const activitats = await getCollection('activitats');
  return activitats.sort((a, b) => a.data.ordre - b.data.ordre);
}
