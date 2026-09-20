import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Satu skema untuk semua panduan. Setiap medan ada sebab.
const panduan = z.object({
  tajuk: z.string(),
  // Memaksa setiap halaman menjawab satu soalan. Disiplin teras semantic SEO.
  soalanUtama: z.string(),
  penerangan: z.string(),
  hab: z.string(),
  entiti: z.array(z.string()).default([]),
  // Pautan dalaman ditetapkan secara sedar, bukan dijana dari tag.
  berkaitan: z.array(z.string()).default([]),
  // Memacu dateModified dalam schema. Bukan masa binaan.
  dikemaskini: z.coerce.date(),
  penulis: z.string().default('asri'),
  draf: z.boolean().default(false),
});

const koleksi = (base: string) =>
  defineCollection({ loader: glob({ pattern: '**/*.md', base }), schema: panduan });

export const collections = {
  haji: koleksi('./src/content/haji'),
  umrah: koleksi('./src/content/umrah'),
  pelancongan: koleksi('./src/content/pelancongan'),
};
