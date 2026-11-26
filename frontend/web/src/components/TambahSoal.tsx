import { useState } from "react";
import type { Soal, KunciJawaban, TingkatKesulitan } from "@gameedu/types";

interface TambahSoalProps {
  onSimpan?: (soal: Soal) => void;
}

const HURUF_OPSI: KunciJawaban[] = ["A", "B", "C", "D"];

export default function TambahSoal({ onSimpan }: TambahSoalProps) {
  const [pertanyaan, setPertanyaan] = useState("");
  const [pilihan, setPilihan] = useState(["", "", "", ""]);
  const [jawabanBenar, setJawabanBenar] = useState<KunciJawaban | "">("");
  const [kategori, setKategori] = useState("");
  const [materi, setMateri] = useState("");
  const [tingkat, setTingkat] = useState<TingkatKesulitan>("Mudah");

  const handlePilihan = (index: number, value: string) => {
    setPilihan((prev) =>
      prev.map((item, i) => (i === index ? value : item))
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!pertanyaan.trim() || pilihan.some((p) => !p.trim()) ||
        !jawabanBenar || !kategori.trim() || !materi.trim()) {
      alert("Semua kolom harus diisi!");
      return;
    }

    const soalBaru: Soal = {
      id: Date.now().toString(),
      pertanyaan,
      pilihan: { A: pilihan[0], B: pilihan[1], C: pilihan[2], D: pilihan[3] },
      kunciJawaban: jawabanBenar,
      kategori,
      materi,
      tingkat,
      durasiDetik: 30,
    };

    onSimpan?.(soalBaru);

    alert("Soal berhasil dibuat!");

    setPertanyaan("");
    setPilihan(["", "", "", ""]);
    setJawabanBenar("");
    setKategori("");
    setMateri("");
    setTingkat("Mudah");
  };

  return (
    <div>
      <h2>Tambah Soal</h2>

      <form onSubmit={handleSubmit}>
        <label>Pertanyaan</label>
        <textarea
          value={pertanyaan}
          onChange={(e) => setPertanyaan(e.target.value)}
          placeholder="Masukkan pertanyaan"
        />

        <h3>Pilihan Jawaban</h3>

        {pilihan.map((item, index) => (
          <div key={index}>
            <label>Pilihan {HURUF_OPSI[index]}</label>
            <input
              value={item}
              onChange={(e) => handlePilihan(index, e.target.value)}
              placeholder={`Jawaban ${HURUF_OPSI[index]}`}
            />
          </div>
        ))}

        <label>Jawaban Benar</label>
        <select
          value={jawabanBenar}
          onChange={(e) => setJawabanBenar(e.target.value as KunciJawaban | "")}
        >
          <option value="">Pilih jawaban benar</option>
          {HURUF_OPSI.map((huruf, i) => (
            <option key={huruf} value={huruf} disabled={!pilihan[i].trim()}>
              {huruf}. {pilihan[i]}
            </option>
          ))}
        </select>

        <label>Kategori</label>
        <input
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
          placeholder="Contoh: Matematika"
        />

        <label>Materi</label>
        <input
          value={materi}
          onChange={(e) => setMateri(e.target.value)}
          placeholder="Contoh: Persegi"
        />

        <label>Tingkat Kesulitan</label>
        <select
          value={tingkat}
          onChange={(e) => setTingkat(e.target.value as TingkatKesulitan)}
        >
          <option value="Mudah">Mudah</option>
          <option value="Sedang">Sedang</option>
          <option value="Sulit">Sulit</option>
        </select>

        <button type="submit">Simpan Soal</button>
      </form>
    </div>
  );
}
