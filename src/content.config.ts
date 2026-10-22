import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const equips = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/equips' }),
  schema: ({ image }) =>
    z.object({
      nom: z.string(),
      categoria: z.enum(['escola', 'base', 'senior', 'veterans']),
      genere: z.enum(['masculi', 'femeni', 'mixt']),
      temporada: z.string(),
      entrenadors: z.array(z.string()).default([]),
      horaris: z.array(z.object({ dia: z.string(), hora: z.string(), lloc: z.string().optional() })).default([]),
      foto: image().optional(),
      urlResultats: z.url().optional(),
      ordre: z.number(),
    }),
});

const noticies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/noticies' }),
  schema: ({ image }) =>
    z.object({
      titol: z.string(),
      data: z.coerce.date(),
      resum: z.string(),
      portada: image().optional(),
      etiquetes: z.array(z.string()).default([]),
      equip: z.string().optional(),
      esborrany: z.boolean().default(false),
    }),
});

const activitats = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/activitats' }),
  schema: ({ image }) =>
    z.object({
      nom: z.string(),
      resum: z.string(),
      inici: z.coerce.date().optional(),
      fi: z.coerce.date().optional(),
      preu: z.string().optional(),
      inclou: z.array(z.string()).default([]),
      pdf: z.string().optional(),
      portada: image().optional(),
      ordre: z.number().default(0),
    }),
});

const patrocinadors = defineCollection({
  loader: file('./src/content/patrocinadors.json'),
  schema: z.object({
    id: z.string(),
    nom: z.string(),
    logo: z.string(),
    url: z.url().optional(),
    nivell: z.enum(['principal', 'or', 'col·laborador']),
  }),
});

export const collections = { equips, noticies, activitats, patrocinadors };
