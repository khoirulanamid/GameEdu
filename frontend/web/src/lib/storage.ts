import type { Soal } from '@gameedu/types';

const KUNCI_TAMBAHAN = 'gameedu-soal';
const KUNCI_SEMUA = 'gameedu-semua-soal';

// Soal lama (sebelum 26 Nov malam) memakai field `kategori`, bukan `mapel`,
// dan belum punya kelas/levelBloom. Normalisasi di sini supaya soal yang
// sudah tersimpan — mis. soal Al-Qur'an yang dibuat lewat form lama — tetap
// tampil dengan benar setelah tipe Soal diperbarui.
type SoalLama = Soal & { kategori?: string };

function normalisasi(semua: SoalLama[]): Soal[] {
  return semua.map((s) => ({
    ...s,
    mapel: s.mapel ?? s.kategori ?? '',
    kelas: s.kelas ?? 'VII',
    levelBloom: s.levelBloom ?? 'C3',
    durasiDetik: s.durasiDetik ?? 30,
  }));
}

function bacaSoalTambahan(): Soal[] {
  try {
    return JSON.parse(
      localStorage.getItem(KUNCI_TAMBAHAN) ?? '[]',
    ) as SoalLama[];
  } catch {
    return [];
  }
}

// Daftar penuh: soal contoh + soal tambahan + hasil edit. Pertama kali
// dipanggil, daftar dimigrasi dari soal contoh + kunci lama, lalu disimpan
// ke kunci baru — jadi edit dan hapus soal contoh pun tersimpan dan tidak
// hilang saat refresh.
export function bacaSemuaSoal(contoh: Soal[]): Soal[] {
  try {
    const tersimpan = JSON.parse(
      localStorage.getItem(KUNCI_SEMUA) ?? 'null',
    ) as SoalLama[] | null;
    if (tersimpan) return normalisasi(tersimpan);
  } catch {
    // abaikan isi rusak, lanjut ke migrasi di bawah
  }
  const gabungan = normalisasi([...contoh, ...bacaSoalTambahan()]);
  localStorage.setItem(KUNCI_SEMUA, JSON.stringify(gabungan));
  return gabungan;
}

export function simpanSemuaSoal(semua: Soal[]): void {
  localStorage.setItem(KUNCI_SEMUA, JSON.stringify(semua));
}
