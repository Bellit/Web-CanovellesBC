// Dades generals del club.
export const club = {
  nom: 'Canovelles Bàsquet Club',
  nomCurt: 'Canovelles BC',
  lema: '#SomClubSomFamília',
  fundacio: 1995,
  escola: 2000,
  temporada: '2026-27',
  equips: 18,
  descripcio:
    'Club de bàsquet de Canovelles (Vallès Oriental) des de 1995. Escola des del 2000 i equips per a totes les edats.',
  adreca: {
    pavello: 'Pavelló Municipal de Canovelles',
    carrer: 'C/ Diagonal, s/n',
    cp: '08420',
    poblacio: 'Canovelles',
    mapa: 'https://www.google.com/maps/search/?api=1&query=Pavell%C3%B3+Municipal+Canovelles',
  },
  correus: {
    general: 'canovellesbc@canovellesbc.com',
    junta: 'juntadirectiva@canovellesbc.com',
  },
  federacio: 'https://www.basquetcatala.cat',
} as const;

export type Genere = 'masc' | 'fem' | 'mixt';

export interface Grup {
  num: number;
  nom: string;
  /** Anys de naixement [més gran, més petit]. null = sense límit. */
  anys: [number | null, number | null];
  equips: Genere[];
  nota: string;
}

// PENDENT DE CONFIRMAR PEL CLUB: els anys de naixement surten de les categories
// estàndard de la Federació per a la temporada 2026-27.
// Els números de fila (4-15) són els dorsals clàssics d'una acta de bàsquet.
export const grups: Grup[] = [
  { num: 4, nom: 'Escoleta', anys: [2021, 2022], equips: ['mixt'], nota: 'Primer contacte amb la pilota, jugant.' },
  { num: 5, nom: 'Escobol', anys: [2019, 2020], equips: ['mixt'], nota: 'Primeres normes i primers partits.' },
  { num: 6, nom: 'Pre-Mini', anys: [2017, 2018], equips: ['fem', 'mixt'], nota: 'Competició federada adaptada a l’edat.' },
  { num: 7, nom: 'Mini', anys: [2015, 2016], equips: ['masc', 'fem'], nota: 'El pas cap als equips de formació.' },
  { num: 8, nom: 'Infantil', anys: [2013, 2014], equips: ['masc', 'fem'], nota: 'Inclou el Preinfantil femení.' },
  { num: 9, nom: 'Cadet', anys: [2011, 2012], equips: ['masc', 'fem'], nota: 'Formació i competició.' },
  { num: 10, nom: 'Júnior', anys: [2009, 2010], equips: ['fem'], nota: 'L’últim pas abans dels sèniors.' },
  { num: 11, nom: 'Sots-21 i Sots-25', anys: [2002, 2008], equips: ['masc'], nota: 'Per seguir jugant després del júnior.' },
  { num: 12, nom: 'Sèniors', anys: [null, 2001], equips: ['masc', 'fem'], nota: 'Els primers equips del club.' },
  { num: 13, nom: 'Veteranes', anys: [null, null], equips: ['fem'], nota: 'El bàsquet no té edat. Dos equips.' },
];

export const valors = [
  { nom: 'Generositat', text: 'Ens ajudem, dins de l’equip i amb tot el club.' },
  { nom: 'Respecte', text: 'Per la família del club, pels àrbitres i pels rivals.' },
  { nom: 'Pertinença', text: 'No importa d’on vinguis: lluïm l’escut amb orgull.' },
  { nom: 'Compromís', text: 'Amb un mateix, amb l’equip i amb el club.' },
  { nom: 'Humilitat', text: 'Som un club petit, però els nostres jugadors són molt grans.' },
  { nom: 'Perseverança', text: 'Seguir avançant, siguin quins siguin els resultats.' },
] as const;

// Etapes del club (portada v2): agrupen els grups de més petit a més gran.
export const etapes = [
  { nom: 'Escola', text: 'Aprendre jugant, sense pressa.', grups: ['Escoleta', 'Escobol'] },
  { nom: 'Formació', text: 'Competició federada adaptada a cada edat.', grups: ['Pre-Mini', 'Mini', 'Infantil', 'Cadet', 'Júnior'] },
  { nom: 'Sèniors', text: 'Per seguir jugant després del júnior.', grups: ['Sots-21 i Sots-25', 'Sèniors'] },
  { nom: 'Veteranes', text: 'El bàsquet no té edat.', grups: ['Veteranes'] },
] as const;

export const generesNom: Record<Genere, string> = { masc: 'Masculí', fem: 'Femení', mixt: 'Mixt' };

/** Text dels anys de naixement d'un grup. */
export const nascuts = (anys: [number | null, number | null]) => {
  const [a, b] = anys;
  if (a === null && b === null) return 'Adultes';
  if (a === null) return `${b} o abans`;
  return a === b ? `${a}` : `${a}–${b}`;
};

/** Grup que correspon a un any de naixement, o null si encara és massa aviat. */
export const grupPerAny = (any: number): Grup | null => {
  for (const g of grups) {
    const [a, b] = g.anys;
    if (a !== null && b !== null && any >= a && any <= b) return g;
  }
  const adult = grups.find((g) => g.anys[0] === null && g.anys[1] !== null);
  if (adult && adult.anys[1] !== null && any <= adult.anys[1]) return adult;
  return null;
};
