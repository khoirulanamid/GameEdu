import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import ConfirmDialog from '../components/ConfirmDialog';
import Toast from '../components/Toast';
import { Soal, TingkatKesulitan } from '../data/soal';

interface SoalListProps {
  daftarSoal: Soal[];
  onHapusSoal: (id: string) => void;
  onResetSoal: () => void;
}

type FilterLevel = 'Semua' | TingkatKesulitan;

function getLevelBadgeClass(level: TingkatKesulitan): string {
  if (level === 'Mudah') return 'badge-mudah';
  if (level === 'Sedang') return 'badge-sedang';
  return 'badge-sulit';
}

export default function SoalList({
  daftarSoal,
  onHapusSoal,
  onResetSoal,
}: SoalListProps) {
  const [kataKunci, setKataKunci] = useState('');
  const [filterTingkat, setFilterTingkat] = useState<FilterLevel>('Semua');
  const [filterMapel, setFilterMapel] = useState('Semua');
  const [filterKelas, setFilterKelas] = useState('Semua');
  const [soalAkanDihapus, setSoalAkanDihapus] = useState<Soal | null>(null);
  const [pesanHapus, setPesanHapus] = useState<string | null>(null);

  const daftarMapel = useMemo(
    () => [...new Set(daftarSoal.map((soal) => soal.mapel))].sort(),
    [daftarSoal],
  );
  const daftarKelas = useMemo(
    () => [...new Set(daftarSoal.map((soal) => soal.kelas))].sort(),
    [daftarSoal],
  );

  const soalTersaring = useMemo(() => {
    const query = kataKunci.trim().toLowerCase();
    return daftarSoal.filter((soal) => {
      const cocokTingkat =
        filterTingkat === 'Semua' || soal.tingkat === filterTingkat;
      const cocokMapel = filterMapel === 'Semua' || soal.mapel === filterMapel;
      const cocokKelas = filterKelas === 'Semua' || soal.kelas === filterKelas;
      const cocokCari =
        !query ||
        soal.pertanyaan.toLowerCase().includes(query) ||
        soal.mapel.toLowerCase().includes(query) ||
        soal.materi.toLowerCase().includes(query);
      return cocokTingkat && cocokMapel && cocokKelas && cocokCari;
    });
  }, [daftarSoal, kataKunci, filterTingkat, filterMapel, filterKelas]);

  const resetSemuaFilter = () => {
    setKataKunci('');
    setFilterTingkat('Semua');
    setFilterMapel('Semua');
    setFilterKelas('Semua');
  };

  const levels: FilterLevel[] = ['Semua', 'Mudah', 'Sedang', 'Sulit'];

  return (
    <div>
      <section className="card page-header-card">
        <div>
          <h1 className="page-title">Bank Soal</h1>
          <p className="page-subtitle">
            Daftar soal semua mata pelajaran untuk kuis dan game kelas.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="badge badge-kunci" style={{ padding: '8px 14px', fontSize: '0.84rem' }}>
            {daftarSoal.length} soal tersimpan
          </span>
          <Link to="/bank-soal/tambah" className="btn-primary">
            <span>+ Tambah Soal</span>
          </Link>
        </div>
      </section>

      <div className="filter-toolbar">
        <input
          type="search"
          className="search-input"
          placeholder="Cari pertanyaan, mapel, atau materi..."
          value={kataKunci}
          onChange={(e) => setKataKunci(e.target.value)}
          aria-label="Cari soal"
        />

        <select
          className="filter-select"
          value={filterMapel}
          onChange={(e) => setFilterMapel(e.target.value)}
          aria-label="Filter mapel"
        >
          <option value="Semua">Semua mapel</option>
          {daftarMapel.map((mapel) => (
            <option key={mapel} value={mapel}>
              {mapel}
            </option>
          ))}
        </select>

        <select
          className="filter-select"
          value={filterKelas}
          onChange={(e) => setFilterKelas(e.target.value)}
          aria-label="Filter kelas"
        >
          <option value="Semua">Semua kelas</option>
          {daftarKelas.map((kelas) => (
            <option key={kelas} value={kelas}>
              Kelas {kelas}
            </option>
          ))}
        </select>

        <div className="filter-pills" role="group" aria-label="Filter tingkat kesulitan">
          {levels.map((level) => (
            <button
              key={level}
              type="button"
              className={`filter-pill ${filterTingkat === level ? 'active' : ''}`}
              onClick={() => setFilterTingkat(level)}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <section className="card table-card">
        {soalTersaring.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-title">
              {daftarSoal.length === 0
                ? 'Daftar soal masih kosong'
                : 'Tidak ada soal yang cocok dengan filter'}
            </div>
            <p className="empty-state-desc">
              {daftarSoal.length === 0
                ? 'Semua soal contoh telah dihapus. Klik tombol di bawah untuk mengembalikan 8 soal contoh Bangun Datar.'
                : 'Coba ubah kata kunci pencarian atau pilih filter tingkat kesulitan Semua.'}
            </p>
            {daftarSoal.length === 0 ? (
              <button type="button" className="btn-primary" onClick={onResetSoal}>
                Muat Ulang Soal Contoh
              </button>
            ) : (
              <button
                type="button"
                className="btn-secondary"
                onClick={resetSemuaFilter}
              >
                Reset Filter
              </button>
            )}
          </div>
        ) : (
          <div className="table-responsive">
            <table className="soal-table">
              <thead>
                <tr>
                  <th style={{ width: '56px' }}>No</th>
                  <th>Pertanyaan</th>
                  <th style={{ width: '150px' }}>Materi</th>
                  <th style={{ width: '140px' }}>Tingkat Kesulitan</th>
                  <th style={{ width: '190px' }}>Kunci Jawaban</th>
                  <th style={{ width: '150px' }}>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {soalTersaring.map((soal, index) => (
                  <tr key={soal.id}>
                    <td style={{ fontWeight: 700, color: 'var(--text-secondary)' }}>
                      {index + 1}
                    </td>
                    <td>
                      <div className="soal-question-text">{soal.pertanyaan}</div>
                      <div className="soal-options-grid">
                        {(['A', 'B', 'C', 'D'] as const).map((opsi) => (
                          <div
                            key={opsi}
                            className={`soal-option-item ${
                              soal.kunciJawaban === opsi ? 'is-answer' : ''
                            }`}
                          >
                            <span>{opsi}.</span>
                            <span>{soal.pilihan[opsi]}</span>
                          </div>
                        ))}
                      </div>
                      <div className="soal-meta">
                        {soal.mapel}
                        {soal.bab ? ` · ${soal.bab}` : ''} · Kelas{' '}
                        {soal.kelas} · Bloom {soal.levelBloom}
                      </div>
                      {soal.pembahasan && (
                        <div className="soal-pembahasan">
                          Pembahasan: {soal.pembahasan}
                        </div>
                      )}
                    </td>
                    <td>
                      <span className="badge badge-materi">{soal.materi}</span>
                    </td>
                    <td>
                      <span className={`badge ${getLevelBadgeClass(soal.tingkat)}`}>
                        {soal.tingkat}
                      </span>
                    </td>
                    <td>
                      <span className="badge badge-kunci">
                        {soal.kunciJawaban} · {soal.pilihan[soal.kunciJawaban]}
                      </span>
                    </td>
                    <td>
                      <div className="aksi-buttons">
                        <Link
                          to={`/bank-soal/edit/${soal.id}`}
                          className="btn-edit"
                          aria-label={`Edit soal nomor ${index + 1}`}
                        >
                          Edit
                        </Link>
                        <button
                          type="button"
                          className="btn-delete"
                          onClick={() => setSoalAkanDihapus(soal)}
                          aria-label={`Hapus soal nomor ${index + 1}`}
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {soalAkanDihapus && (
        <ConfirmDialog
          soal={soalAkanDihapus}
          onBatal={() => setSoalAkanDihapus(null)}
          onKonfirmasi={() => {
            onHapusSoal(soalAkanDihapus.id);
            setSoalAkanDihapus(null);
            setPesanHapus('Soal berhasil dihapus.');
          }}
        />
      )}
      {pesanHapus && (
        <Toast message={pesanHapus} onClose={() => setPesanHapus(null)} />
      )}
    </div>
  );
}
