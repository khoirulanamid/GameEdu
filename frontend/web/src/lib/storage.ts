import type { Soal } from '@gameedu/types';

const KUNCI = 'gameedu-soal';

export function bacaSoal(): Soal[] {
  try {
    return JSON.parse(localStorage.getItem(KUNCI) ?? '[]') as Soal[];
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
