
import { useState } from "react";
import type { Soal } from "@gameedu/types";

interface TambahSoalProps {
  onSimpan?: (soal: Soal) => void;
}

export default function TambahSoal({ onSimpan }: TambahSoalProps) {
  const [pertanyaan, setPertanyaan] = useState("");
  const [pilihan, setPilihan] = useState(["", "", "", ""]);
  const [jawabanBenar, setJawabanBenar] = useState("");
  const [kategori, setKategori] = useState("");
  const [tingkat, setTingkat] = useState("Mudah");

  const handlePilihan = (index: number, value: string) => {
    setPilihan((prev) =>
      prev.map((item, i) => (i === index ? value : item))
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!pertanyaan.trim() || pilihan.some((p) => !p.trim()) ||
        !jawabanBenar || !kategori.trim()) {
      alert("Semua kolom harus diisi!");
      return;
    }

    const soalBaru: Soal = {
      id: Date.now().toString(),
      pertanyaan,
      pilihan,
      jawabanBenar,
      kategori,
      tingkat,
    };

    onSimpan?.(soalBaru);

    alert("Soal berhasil dibuat!");

    setPertanyaan("");
    setPilihan(["", "", "", ""]);
    setJawabanBenar("");
    setKategori("");
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
            <label>Pilihan {index + 1}</label>
            <input
              value={item}
              onChange={(e) => handlePilihan(index, e.target.value)}
              placeholder={`Jawaban ${index + 1}`}
            />
          </div>
        ))}

        <label>Jawaban Benar</label>
        <select
          value={jawabanBenar}
          onChange={(e) => setJawabanBenar(e.target.value)}
        >
          <option value="">Pilih jawaban benar</option>
          {pilihan.filter((p) => p.trim()).map((p, i) => (
            <option key={i} value={p}>{p}</option>
          ))}
        </select>

        <label>Kategori</label>
        <input
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
          placeholder="Contoh: Matematika"
        />

        <label>Tingkat Kesulitan</label>
        <select
          value={tingkat}
          onChange={(e) => setTingkat(e.target.value)}
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
