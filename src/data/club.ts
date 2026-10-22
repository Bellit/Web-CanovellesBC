// Dades generals del club. Les xarxes buides no es mostren.
export const club = {
  nom: 'Canovelles Bàsquet Club',
  nomCurt: 'Canovelles BC',
  lema: '#SomClubSomFamília',
  fundacio: 1995,
  temporada: '2026-27',
  descripcio:
    'Club de bàsquet de Canovelles (Vallès Oriental) des de 1995. Escola, formació i equips sèniors amb un valor central: som una família.',
  adreca: {
    carrer: 'C/ Diagonal, s/n',
    cp: '08420',
    poblacio: 'Canovelles',
    provincia: 'Barcelona',
    pavello: 'Pavelló Municipal de Canovelles',
    mapa: 'https://www.google.com/maps/search/?api=1&query=Pavell%C3%B3+Municipal+Canovelles',
  },
  correus: {
    general: 'canovellesbc@canovellesbc.com',
    junta: 'juntadirectiva@canovellesbc.com',
  },
  xarxes: {
    instagram: '',
    facebook: '',
    x: '',
    youtube: '',
  },
  federacio: 'https://www.basquetcatala.cat',
} as const;

export const navegacio = [
  { href: '/club/', label: 'El club' },
  { href: '/equips/', label: 'Equips' },
  { href: '/escola/', label: 'Escola' },
  { href: '/noticies/', label: 'Notícies' },
  { href: '/activitats/', label: 'Activitats' },
  { href: '/patrocinadors/', label: 'Patrocinadors' },
  { href: '/contacte/', label: 'Contacte' },
] as const;

export const categories = {
  escola: { label: 'Escola', descripcio: 'Els primers bots: Escoleta i Escobol.' },
  base: { label: 'Formació', descripcio: 'De Pre-Mini a Júnior, competició federada.' },
  senior: { label: 'Sèniors', descripcio: 'Sots-21, Sots-25 i primers equips.' },
  veterans: { label: 'Veterans', descripcio: 'El bàsquet no té edat.' },
} as const;

export const valors = [
  { nom: 'Generositat', text: 'Ajudar-nos els uns als altres, dins de l’equip i amb tot el club.' },
  { nom: 'Respecte', text: 'Per la família del club, pels àrbitres i pels equips rivals.' },
  { nom: 'Pertinença', text: 'No importa d’on vinguis: lluim l’escut amb orgull.' },
  { nom: 'Compromís', text: 'Amb un mateix, amb l’equip i amb el club.' },
  { nom: 'Humilitat', text: 'Som un club petit, però els nostres jugadors són molt grans.' },
  { nom: 'Perseverança', text: 'Seguir avançant, siguin quins siguin els resultats.' },
] as const;
