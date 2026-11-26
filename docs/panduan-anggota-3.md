# Anggota 3 — Frontend Web Guru: Tambah Soal dan Data

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

Peranmu adalah membuat guru bisa menambah soal baru lewat formulir, dan membuat tipe data Soal yang dipakai bersama oleh frontend dan backend. Kamu bisa mulai menulis file-filemu kapan saja — tetapi untuk menguji formulirmu di browser, kamu menunggu main.tsx dan App.tsx dari Anggota 2 masuk ke main dulu.

- Membuat tipe Soal di packages/types/ (dipakai frontend dan backend).
- Membuat halaman SoalForm: formulir tambah soal (pertanyaan, 4 pilihan jawaban, jawaban benar, kategori, tingkat kesulitan).
- Membuat validasi formulir: pertanyaan tidak boleh kosong, harus ada 4 pilihan, dan harus ada 1 jawaban benar yang dipilih.
- Menyimpan soal baru di localStorage supaya tetap ada setelah browser dimuat ulang.

## File yang kamu miliki

packages/types/, frontend/web/src/pages/SoalForm.tsx, dan frontend/web/src/lib/.

## Langkah-langkahmu

1. Buat branch-mu:
   ```
   git checkout -b fitur/soal-form
   ```
2. Buat file packages/types/src/soal.ts: tipe Soal berisi id, pertanyaan, pilihan (4 jawaban), jawabanBenar, kategori, dan tingkat.
3. Buat file frontend/web/src/lib/storage.ts: fungsi simpan dan baca soal dari localStorage.
4. Buat halaman frontend/web/src/pages/SoalForm.tsx: formulir dengan kolom pertanyaan, 4 kolom pilihan jawaban, pilihan jawaban benar, kategori, dan tingkat kesulitan, plus tombol Simpan.
5. Tambahkan validasi: jika pertanyaan kosong, pilihan kurang dari 4, atau jawaban benar belum dipilih, tampilkan pesan kesalahan dan jangan menyimpan.
6. Setelah Anggota 2 menggabungkan App.tsx ke main, jalankan `git pull origin main` di laptopmu, lalu uji formulirmu:
   ```
   npm run dev:web
   npm run build:web
   ```
7. Uji di browser: isi formulir, tekan Simpan, periksa soalmu muncul di Daftar Soal, muat ulang browser, dan pastikan soalmu masih ada.
8. Simpan dan kirim pekerjaanmu:
   ```
   git add .
   git commit -m "feat: buat SoalForm dan tipe Soal"
   git push -u origin fitur/soal-form
   ```
9. Buka GitHub, buat Pull Request dari branch fitur/soal-form ke main, kabari di grup, tunggu 1 anggota lain memeriksa, lalu gabungkan (merge).

## Selesai artinya

Formulir tambah soal bisa menyimpan soal baru, soal yang disimpan muncul di Daftar Soal dan tetap ada setelah browser dimuat ulang, dan npm run build:web berhasil tanpa error.

## Kalau mentok

| Masalah | Yang dilakukan |
|---------|----------------|
| npm run dev:web gagal sebelum Anggota 2 selesai | Itu normal: main.tsx dan App.tsx belum ada. Tunggu Anggota 2 menggabungkan branch-nya, lalu jalankan git pull origin main dan coba lagi. |
| Soal hilang setelah browser dimuat ulang | Periksa fungsi simpan dan baca di lib/storage.ts — pastikan soal ditulis ke localStorage saat Simpan ditekan dan dibaca saat halaman dibuka. |
| Validasi tidak jalan (soal kosong tetap tersimpan) | Periksa urutan di tombol Simpan: validasi harus berjalan dulu, dan penyimpanan hanya jalan kalau validasi lolos. |
| npm run build gagal | Baca baris error paling atas di terminal, perbaiki file yang disebut di sana, lalu jalankan build lagi. |
| git pull ditolak atau muncul conflict | Jangan tekan perintah paksa (force push). Tunjukkan pesan errornya di grup, lalu selesaikan bersama dengan membuka file yang bertanda konflik dan memilih isi yang benar. |
