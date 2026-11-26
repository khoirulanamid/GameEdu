import { useState } from "react";
import { Link } from "react-router-dom";
import type {
  Soal,
  KunciJawaban,
  TingkatKesulitan,
  LevelBloom,
} from "@gameedu/types";

interface TambahSoalProps {
  onSimpan?: (soal: Soal) => void;
}

const HURUF_OPSI: KunciJawaban[] = ["A", "B", "C", "D"];

const DAFTAR_KELAS = ["VII", "VIII", "IX"];

const LEVEL_BLOOM: { kode: LevelBloom; label: string }[] = [
  { kode: "C1", label: "C1 · Mengingat" },
  { kode: "C2", label: "C2 · Memahami" },
  { kode: "C3", label: "C3 · Menerapkan" },
  { kode: "C4", label: "C4 · Menganalisis" },
  { kode: "C5", label: "C5 · Mengevaluasi" },
  { kode: "C6", label: "C6 · Mencipta" },
];

export default function TambahSoal({ onSimpan }: TambahSoalProps) {
  const [pertanyaan, setPertanyaan] = useState("");
  const [pilihan, setPilihan] = useState(["", "", "", ""]);
  const [jawabanBenar, setJawabanBenar] = useState<KunciJawaban | "">("");
  const [mapel, setMapel] = useState("");
  const [bab, setBab] = useState("");
  const [materi, setMateri] = useState("");
  const [kelas, setKelas] = useState("VII");
  const [tingkat, setTingkat] = useState<TingkatKesulitan>("Mudah");
  const [levelBloom, setLevelBloom] = useState<LevelBloom>("C3");
  const [durasi, setDurasi] = useState("30");
  const [pembahasan, setPembahasan] = useState("");
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
      !mapel.trim() ||
      !materi.trim()
    ) {
      setError("Mapel, materi, pertanyaan, keempat pilihan, dan jawaban benar harus diisi!");
      return;
    }

    const soalBaru: Soal = {
      id: Date.now().toString(),
      pertanyaan,
      pilihan: { A: pilihan[0], B: pilihan[1], C: pilihan[2], D: pilihan[3] },
      kunciJawaban: jawabanBenar,
      mapel,
      bab: bab.trim() || undefined,
      materi,
      kelas,
      tingkat,
      levelBloom,
      durasiDetik: Math.max(5, Number(durasi) || 30),
      pembahasan: pembahasan.trim() || undefined,
    };

    onSimpan?.(soalBaru);

    setError("");
    setPertanyaan("");
    setPilihan(["", "", "", ""]);
    setJawabanBenar("");
    setMapel("");
    setBab("");
    setMateri("");
    setKelas("VII");
    setTingkat("Mudah");
    setLevelBloom("C3");
    setDurasi("30");
    setPembahasan("");
  };

  return (
    <div>
      <section className="card page-header-card">
        <div>
          <h1 className="page-title">Tambah Soal</h1>
          <p className="page-subtitle">
            Buat soal pilihan ganda baru untuk bank soal — semua mata pelajaran.
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
            <label className="form-label" htmlFor="mapel">
              Mapel
            </label>
            <input
              id="mapel"
              className="form-input"
              value={mapel}
              onChange={(e) => {
                setMapel(e.target.value);
                setError("");
              }}
              placeholder="Contoh: Matematika"
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="bab">
              Bab
            </label>
            <input
              id="bab"
              className="form-input"
              value={bab}
              onChange={(e) => {
                setBab(e.target.value);
                setError("");
              }}
              placeholder="Contoh: Bab 3 · Bangun Datar"
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="kelas">
              Kelas
            </label>
            <select
              id="kelas"
              className="form-input"
              value={kelas}
              onChange={(e) => setKelas(e.target.value)}
            >
              {DAFTAR_KELAS.map((k) => (
                <option key={k} value={k}>
                  Kelas {k}
                </option>
              ))}
            </select>
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

          <div className="form-field">
            <label className="form-label" htmlFor="levelBloom">
              Level Bloom
            </label>
            <select
              id="levelBloom"
              className="form-input"
              value={levelBloom}
              onChange={(e) => setLevelBloom(e.target.value as LevelBloom)}
            >
              {LEVEL_BLOOM.map((level) => (
                <option key={level.kode} value={level.kode}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="durasi">
              Durasi (detik)
            </label>
            <input
              id="durasi"
              type="number"
              min={5}
              max={300}
              className="form-input"
              value={durasi}
              onChange={(e) => setDurasi(e.target.value)}
            />
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

        <div className="form-field" style={{ marginTop: "14px" }}>
          <label className="form-label" htmlFor="pembahasan">
            Pembahasan (opsional)
          </label>
          <textarea
            id="pembahasan"
            className="form-input form-textarea"
            value={pembahasan}
            onChange={(e) => setPembahasan(e.target.value)}
            placeholder="Penjelasan jawaban benar, tampil setelah jawaban dibuka"
          />
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
