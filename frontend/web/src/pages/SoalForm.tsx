import { useNavigate } from 'react-router-dom';
import type { Soal } from '@gameedu/types';
import TambahSoal from '../components/TambahSoal';
import { simpanSoal } from '../lib/storage';

interface SoalFormProps {
  onTambah: (soal: Soal) => void;
}

export default function SoalForm({ onTambah }: SoalFormProps) {
  const navigate = useNavigate();
  return (
    <TambahSoal
      onSimpan={(soal) => {
        simpanSoal(soal);
        onTambah(soal);
        navigate('/bank-soal', { state: { toast: 'Soal berhasil dibuat!' } });
      }}
    />
  );
}
