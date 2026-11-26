export type TingkatKesulitan = 'Mudah' | 'Sedang' | 'Sulit';
export type KunciJawaban = 'A' | 'B' | 'C' | 'D';

export interface Soal {
  id: string;
  pertanyaan: string;
  pilihan: { A: string; B: string; C: string; D: string };
  kunciJawaban: KunciJawaban;
  kategori: string;
  materi: string;
  tingkat: TingkatKesulitan;
  durasiDetik?: number;
}
