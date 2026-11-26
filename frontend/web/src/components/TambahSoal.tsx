import { useState } from "react";
import { Link } from "react-router-dom";
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
  const [error, setError] = useState("");

  const handlePilihan = (index: number, value: string) => {
    setPilihan((prev) =>
      prev.map((item, i) => (i === index ? value : item))
    );
    setError("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const indeksBenar = jawabanBenar ? HURUF_OPSI.indexOf(jawabanBenar) : -1;
    if (
      !pertanyaan.trim() ||
      pilihan.some((p) => !p.trim()) ||
      !jawabanBenar ||
      indeksBenar < 0 ||
      !pilihan[indeksBenar].trim() ||
      !kategori.trim() ||
      !materi.trim()
    ) {
      setError("Semua kolom harus diisi dan jawaban benar harus dipilih!");
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

    setError("");
    setPertanyaan("");
    setPilihan(["", "", "", ""]);
    setJawabanBenar("");
    setKategori("");
    setMateri("");
    setTingkat("Mudah");
  };

  return (
    <div>
      <section className="card page-header-card">
        <div>
          <h1 className="page-title">Tambah Soal</h1>
          <p className="page-subtitle">
            Buat soal pilihan ganda baru untuk bank soal Bangun Datar.
          </p>
        </div>
        <Link to="/bank-soal" className="btn-secondary">
          <span>← Kembali ke Bank Soal</span>
        </Link>
      </section>

      <form onSubmit={handleSubmit} className="card form-card">
        <h2 className="form-section-title">Identitas soal</h2>
        <div className="form-grid-3">
          <div className="form-field">
            <label className="form-label" htmlFor="kategori">
              Kategori
            </label>
            <input
              id="kategori"
              className="form-input"
              value={kategori}
              onChange={(e) => {
                setKategori(e.target.value);
                setError("");
              }}
              placeholder="Contoh: Matematika"
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="materi">
              Materi
            </label>
            <input
              id="materi"
              className="form-input"
              value={materi}
              onChange={(e) => {
                setMateri(e.target.value);
                setError("");
              }}
              placeholder="Contoh: Persegi"
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="tingkat">
              Tingkat Kesulitan
            </label>
            <select
              id="tingkat"
              className="form-input"
              value={tingkat}
              onChange={(e) => {
                setTingkat(e.target.value as TingkatKesulitan);
                setError("");
              }}
            >
              <option value="Mudah">Mudah</option>
              <option value="Sedang">Sedang</option>
              <option value="Sulit">Sulit</option>
            </select>
          </div>
        </div>

        <h2 className="form-section-title">Isi soal</h2>
        <div className="form-field">
          <label className="form-label" htmlFor="pertanyaan">
            Pertanyaan
          </label>
          <textarea
            id="pertanyaan"
            className="form-input form-textarea"
            value={pertanyaan}
            onChange={(e) => {
              setPertanyaan(e.target.value);
              setError("");
            }}
            placeholder="Masukkan pertanyaan"
          />
        </div>

        <span className="form-label">Pilihan jawaban</span>
        <p className="form-hint">
          Isi keempat pilihan, lalu pilih lingkaran di samping jawaban yang benar.
        </p>
        <div className="option-list">
          {pilihan.map((item, index) => (
            <label
              key={HURUF_OPSI[index]}
              className={`option-row ${
                jawabanBenar === HURUF_OPSI[index] ? "is-answer" : ""
              }`}
            >
              <input
                type="radio"
                name="jawabanBenar"
                value={HURUF_OPSI[index]}
                checked={jawabanBenar === HURUF_OPSI[index]}
                disabled={!item.trim()}
                onChange={() => {
                  setJawabanBenar(HURUF_OPSI[index]);
                  setError("");
                }}
                className="option-radio"
                aria-label={`Jawaban benar: pilihan ${HURUF_OPSI[index]}`}
              />
              <span className="option-letter">{HURUF_OPSI[index]}</span>
              <input
                className="option-input"
                value={item}
                onChange={(e) => handlePilihan(index, e.target.value)}
                placeholder={`Jawaban ${HURUF_OPSI[index]}`}
                aria-label={`Pilihan ${HURUF_OPSI[index]}`}
              />
            </label>
          ))}
        </div>

        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}

        <div className="form-actions">
          <Link to="/bank-soal" className="btn-secondary">
            Batal
          </Link>
          <button type="submit" className="btn-primary">
            Simpan Soal
          </button>
        </div>
      </form>
    </div>
  );
}
