/**
 * Satu tempat untuk teks pembuka WhatsApp.
 * Penanda [kafilah] supaya Asri tahu mesej ini datang dari laman,
 * bukan dari iklan atau rujukan mulut ke mulut.
 */
export type Bahagian = 'haji' | 'umrah' | 'pelancongan';

const subjek: Record<Bahagian, string> = {
  haji: 'haji',
  umrah: 'umrah',
  pelancongan: 'pelancongan',
};

export function mesejWa(bahagian?: Bahagian): string {
  const topik = bahagian ? subjek[bahagian] : 'haji/umrah';
  return `Salam. Saya ada pertanyaan berkenaan ${topik}. Boleh bantu saya? [kafilah]`;
}
