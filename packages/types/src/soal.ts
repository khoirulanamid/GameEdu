export type TingkatKesulitan = 'Mudah' | 'Sedang' | 'Sulit';
export type KunciJawaban = 'A' | 'B' | 'C' | 'D';
export type LevelBloom = 'C1' | 'C2' | 'C3' | 'C4' | 'C5' | 'C6';

export interface Soal {
  id: string;
  pertanyaan: string;
  pilihan: { A: string; B: string; C: string; D: string };
  kunciJawaban: KunciJawaban;
  mapel: string;
  bab?: string;
  materi: string;
  kelas: string;
  tingkat: TingkatKesulitan;
  levelBloom: LevelBloom;
  durasiDetik?: number;
  pembahasan?: string;
}
