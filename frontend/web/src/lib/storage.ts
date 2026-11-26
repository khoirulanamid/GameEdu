import type { Soal } from '@gameedu/types';

const KUNCI = 'gameedu-soal';

// Soal lama (sebelum 26 Nov malam) memakai field `kategori`, bukan `mapel`,
// dan belum punya kelas/levelBloom. Normalisasi di sini supaya soal yang
// sudah tersimpan — mis. soal Al-Qur'an yang dibuat lewat form lama — tetap
// tampil dengan benar setelah tipe Soal diperbarui.
type SoalLama = Soal & { kategori?: string };

export function bacaSoal(): Soal[] {
  try {
    const mentah = JSON.parse(
      localStorage.getItem(KUNCI) ?? '[]',
    ) as SoalLama[];
    return mentah.map((s) => ({
      ...s,
      mapel: s.mapel ?? s.kategori ?? '',
      kelas: s.kelas ?? 'VII',
      levelBloom: s.levelBloom ?? 'C3',
      durasiDetik: s.durasiDetik ?? 30,
    }));
  } catch {
    return [];
  }
}

export function simpanSoal(soal: Soal): void {
  const semua = bacaSoal();
  semua.push(soal);
  localStorage.setItem(KUNCI, JSON.stringify(semua));
}

export function hapusSoal(id: string): void {
  const semua = bacaSoal().filter((soal) => soal.id !== id);
  localStorage.setItem(KUNCI, JSON.stringify(semua));
}
