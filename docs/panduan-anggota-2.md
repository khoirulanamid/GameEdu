# Anggota 2 — Frontend Web Guru: Dashboard dan Soal

Final Project Milestone 1 — GameEdu — Pemrograman Web II — Dosen Pembimbing: Uli Rizki, M.Kom — Universitas Nurul Huda
Repository: https://github.com/khoirulanamid/GameEdu

> File ini hanya untukmu. Baca dari atas sampai bawah, lalu kerjakan langkah-langkahnya satu per satu. Kalau mentok, tanya di grup, jangan diam.

## Aturan main (berlaku untuk semua anggota)

Kelompok ini berisi 4 anggota yang setara dan belajar bersama. Tidak ada yang mengatur sendiri; keputusan dibuat bersama di grup.

- **Bebas mulai kapan saja** — Kerja bareng-paralel. Siapa saja boleh langsung mulai, tidak perlu menunggu anggota lain selesai dulu.
- **Satu branch untuk satu pekerjaan** — Setiap anggota bekerja di branch-nya sendiri. Tidak ada yang push langsung ke branch main.
- **Pull Request dan review** — Setelah selesai, buat Pull Request ke main. Minimal 1 anggota lain memeriksa sebelum digabung.
- **Jangan ubah file orang lain diam-diam** — Jika perlu mengubah file milik orang lain, beri tahu pemiliknya dulu di grup.
- **Lapor saat perlu saja** — Lapor di grup hanya pada 3 momen: saat Pull Request siap diperiksa, saat mentok lebih dari sehari, dan saat mau mengubah file orang lain.
- **Jangan push file berat** — Folder node_modules/ dan dist/ tidak boleh ikut ter-commit.

## Langkah awal (sekali saja)

1. Terima undangan collaborator dari GitHub (cek email atau lonceng notifikasi GitHub, lalu klik Accept invitation). Tanpa ini kamu belum bisa push.
2. Clone repository ke laptopmu:
   ```
   git clone https://github.com/khoirulanamid/GameEdu.git
   cd GameEdu
   ```
3. Pasang semua kebutuhan project (sekali saja, sekitar 1 menit):
   ```
   npm install
   ```
4. Pastikan kamu berada di branch main yang terbaru:
   ```
   git pull origin main
   ```

## Tugasmu

Peranmu adalah membuat aplikasi web guru bisa dibuka dan menampilkan Dashboard serta Daftar Soal. Bagianmu adalah yang pertama kali dilihat dosen saat membuka project — dan bagianmu juga yang membuka jalan bagi Anggota 3, karena main.tsx dan App.tsx yang kamu buat dipakai oleh semua halaman.

- Membuat main.tsx dan App.tsx beserta routing lima halaman guru.
- Membuat Layout dan Sidebar (menu Dashboard, Bank Soal, Sesi Game, Kelas & Siswa, Laporan).
- Membuat halaman Dashboard dengan kartu statistik (jumlah soal, kelas, siswa, sesi).
- Membuat halaman Daftar Soal (tabel soal + hapus soal).
- Membuat data contoh soal di folder data/ (6–8 soal bangun datar).

## File yang kamu miliki

frontend/web/src/main.tsx, App.tsx, components/, pages/Dashboard.tsx, pages/SoalList.tsx, dan data/.

## Langkah-langkahmu

1. Buat branch-mu:
   ```
   git checkout -b fitur/dashboard
   ```
2. Buat file frontend/web/src/main.tsx: titik masuk aplikasi yang menampilkan App dan memakai index.css.
3. Buat file frontend/web/src/App.tsx: routing lima halaman dengan react-router-dom (path `/` untuk Dashboard, `/bank-soal`, `/sesi-game`, `/kelas-siswa`, `/laporan`).
4. Buat komponen Layout dan Sidebar di frontend/web/src/components/: menu di kiri dengan lima menu, menu yang aktif diberi warna berbeda, dan area isi di tengah.
5. Buat file frontend/web/src/data/soal.ts: data contoh 6–8 soal bangun datar (pertanyaan, 4 pilihan jawaban, kunci jawaban, materi, tingkat kesulitan).
6. Buat halaman frontend/web/src/pages/Dashboard.tsx: kartu statistik (jumlah bank soal, kelas, siswa, sesi) dan daftar soal terbaru dari data contoh.
7. Buat halaman frontend/web/src/pages/SoalList.tsx: tabel berisi nomor, pertanyaan, materi, tingkat kesulitan, dan kunci jawaban, plus tombol hapus yang bekerja.
8. Uji di laptopmu — perintah ini harus berhasil tanpa error merah:
   ```
   npm run dev:web
   npm run build:web
   ```
9. Buka http://localhost:5173 di browser, klik semua menu satu per satu, dan pastikan halaman berpindah tanpa memuat ulang seluruh browser.
10. Simpan dan kirim pekerjaanmu:
    ```
    git add .
    git commit -m "feat: buat Dashboard dan Daftar Soal"
    git push -u origin fitur/dashboard
    ```
11. Buka GitHub, buat Pull Request dari branch fitur/dashboard ke main, kabari di grup, tunggu 1 anggota lain memeriksa, lalu gabungkan (merge).

## Selesai artinya

npm run dev:web menampilkan Dashboard dengan kartu statistik dan Daftar Soal yang bisa dihapus, dan npm run build:web berhasil tanpa error.

> Catatan penting: sampai main.tsx dan App.tsx buatanmu masuk ke main, anggota lain belum bisa menjalankan dev:web. Jadi kerjakan dua file itu dulu sebelum halaman-halaman lainnya — anggota lain bisa menulis file halamannya sendiri sambil menunggu, tetapi pengujiannya menunggu App.tsx buatanmu.

## Kalau mentok

| Masalah | Yang dilakukan |
|---------|----------------|
| npm run dev:web gagal dengan pesan entry tidak ditemukan | Periksa apakah main.tsx sudah ada di frontend/web/src/ dan index.html menunjuk ke file yang benar. |
| Halaman berpindah tapi menu tidak berubah warna | Periksa logika menu aktif di Sidebar — bandingkan path saat ini dengan path menu. |
| npm run build gagal | Baca baris error paling atas di terminal, perbaiki file yang disebut di sana, lalu jalankan build lagi. Error build hampir selalu berarti ada file yang belum di-pull dari main. |
| git pull ditolak atau muncul conflict | Jangan tekan perintah paksa (force push). Tunjukkan pesan errornya di grup, lalu selesaikan bersama dengan membuka file yang bertanda konflik dan memilih isi yang benar. |
