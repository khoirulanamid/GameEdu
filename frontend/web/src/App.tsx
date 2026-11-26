import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import PlaceholderPage from './components/PlaceholderPage';
import { Soal, soalContoh } from './data/soal';
import Dashboard from './pages/Dashboard';
import SoalList from './pages/SoalList';

export default function App() {
  const [daftarSoal, setDaftarSoal] = useState<Soal[]>(soalContoh);

  const handleHapusSoal = (id: string) => {
    setDaftarSoal((prev) => prev.filter((soal) => soal.id !== id));
  };

  const handleResetSoal = () => {
    setDaftarSoal(soalContoh);
  };

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard daftarSoal={daftarSoal} />} />
          <Route
            path="/bank-soal"
            element={
              <SoalList
                daftarSoal={daftarSoal}
                onHapusSoal={handleHapusSoal}
                onResetSoal={handleResetSoal}
              />
            }
          />
          <Route
            path="/sesi-game"
            element={
              <PlaceholderPage
                badgeText="Mode Interaktif Kelas"
                title="Sesi Game"
                subtitle="Pilih mode permainan untuk ditayangkan di smartboard dan diikuti siswa lewat ponsel."
                items={[
                  {
                    badge: 'SC · Speed Clash',
                    title: 'Speed Clash — Bangun Datar',
                    description:
                      'Siswa menjawab cepat soal pilihan ganda. Jawaban tercepat yang benar mendapat poin lebih tinggi.',
                    meta: `${daftarSoal.length} soal tersedia · Mode latihan & kelas`,
                  },
                  {
                    badge: 'TG · Territory Grid',
                    title: 'Territory Grid — Rebut Petak',
                    description:
                      'Kelompok siswa bekerja sama merebut petak di papan smartboard dengan menjawab soal tingkat Sedang dan Sulit.',
                    meta: '4 tim maksimal · Smartboard & Mobile',
                  },
                ]}
              />
            }
          />
          <Route
            path="/kelas-siswa"
            element={
              <PlaceholderPage
                badgeText="Data Kelas"
                title="Kelas & Siswa"
                subtitle="Daftar kelas dan rombongan belajar yang terhubung ke sesi permainan GameEdu."
                items={[
                  {
                    badge: 'VII-A · Aktif',
                    title: 'Kelas VII-A (32 Siswa)',
                    description:
                      'Kelas matematika bangun datar sesi pagi. Terhubung dengan smartboard ruang kelas.',
                    meta: '32 siswa terdaftar · Wali kelas aktif',
                  },
                  {
                    badge: 'VII-B · Aktif',
                    title: 'Kelas VII-B (32 Siswa)',
                    description:
                      'Siap mengikuti sesi latihan mandiri maupun permainan kelompok di kelas.',
                    meta: '32 siswa terdaftar · Siap main',
                  },
                  {
                    badge: 'VIII-A · Aktif',
                    title: 'Kelas VIII-A (32 Siswa)',
                    description:
                      'Mengulang konsep keliling dan luas bangun datar sebagai materi pengayaan.',
                    meta: '32 siswa terdaftar · Pengayaan',
                  },
                  {
                    badge: 'VIII-B · Aktif',
                    title: 'Kelas VIII-B (32 Siswa)',
                    description:
                      'Terdaftar untuk uji coba permainan interaktif Territory Grid.',
                    meta: '32 siswa terdaftar · Uji coba',
                  },
                ]}
              />
            }
          />
          <Route
            path="/laporan"
            element={
              <PlaceholderPage
                badgeText="Rekap Nilai"
                title="Laporan Hasil Belajar"
                subtitle="Ringkasan hasil sesi kuis dan tingkat ketuntasan siswa pada materi Bangun Datar."
                items={[
                  {
                    badge: 'Akurasi 84%',
                    title: 'Sesi Speed Clash · Kelas VII-A',
                    description:
                      'Rata-rata waktu jawab 14 detik per soal dengan tingkat pemahaman tinggi pada materi Persegi dan Segitiga.',
                    meta: '32 peserta · Selesai',
                  },
                  {
                    badge: 'Akurasi 79%',
                    title: 'Sesi Territory Grid · Kelas VII-B',
                    description:
                      'Soal luas trapesium dan belah ketupat menjadi tantangan utama yang perlu dibahas ulang di kelas.',
                    meta: '4 tim peserta · Selesai',
                  },
                ]}
              />
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
