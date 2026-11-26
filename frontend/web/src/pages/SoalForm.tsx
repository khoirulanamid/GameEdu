import { Link, useNavigate, useParams } from 'react-router-dom';
import type { Soal } from '@gameedu/types';
import TambahSoal from '../components/TambahSoal';

interface SoalFormProps {
  daftarSoal: Soal[];
  onTambah: (soal: Soal) => void;
  onEdit: (soal: Soal) => void;
}

export default function SoalForm({ daftarSoal, onTambah, onEdit }: SoalFormProps) {
  const navigate = useNavigate();
  const { id } = useParams();
  const soalAwal = id ? daftarSoal.find((soal) => soal.id === id) : undefined;

  if (id && !soalAwal) {
    return (
      <div>
        <section className="card page-header-card">
          <div>
            <h1 className="page-title">Soal tidak ditemukan</h1>
            <p className="page-subtitle">
              Soal yang mau diedit sudah dihapus atau tautannya salah.
            </p>
          </div>
          <Link to="/bank-soal" className="btn-primary">
            <span>Kembali ke Bank Soal</span>
          </Link>
        </section>
      </div>
    );
  }

  return (
    <TambahSoal
      soalAwal={soalAwal}
      onSimpan={(soal) => {
        if (soalAwal) {
          onEdit(soal);
          navigate('/bank-soal', { state: { toast: 'Soal berhasil diubah!' } });
        } else {
          onTambah(soal);
          navigate('/bank-soal', { state: { toast: 'Soal berhasil dibuat!' } });
        }
      }}
    />
  );
}
