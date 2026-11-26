# Anggota 4 — Backend, SQL, Smartboard, dan Mobile

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

Peranmu adalah membuat sisi server (backend dan database) serta kerangka smartboard dan mobile. Bagianmu paling mandiri: kamu tidak perlu menunggu Anggota 2 atau 3, karena backend diuji lewat terminal, bukan lewat tampilan web.

- Membuat backend: server Express, route health dan soal, controller, service, dan repository.
- Menulis file SQL: 3 migrasi (soal, kelas/siswa, sesi/jawaban) dan 1 seed berisi 3 soal contoh.
- Membuat script migrate dan seed yang menjalankan file SQL secara berurutan.
- Membuat kerangka frontend/smartboard dan frontend/mobile (satu halaman judul sederhana).
- Membuat komponen bersama di packages/ui/ (Button, Card, Badge).

## File yang kamu miliki

backend/src/ semuanya, sql/migrations/ dan sql/seeds/, frontend/smartboard/, frontend/mobile/, packages/ui/, dan folder docs/.

## Langkah-langkahmu

1. Buat branch-mu:
   ```
   git checkout -b fitur/backend-sql
   ```
2. Buat file backend/src/index.ts (menjalankan server di port 3001) dan backend/src/app.ts (aplikasi Express dan pendaftaran route).
3. Buat route, controller, service, dan repository untuk soal — ingat aturannya: SQL hanya boleh ada di repositories/, tidak di route, controller, atau service.
4. Buat file SQL di sql/migrations/: 001_create_soal.sql, 002_create_kelas_siswa.sql, dan 003_create_sesi_jawaban.sql, lalu buat sql/seeds/001_seed_soal.sql berisi 3 soal contoh.
5. Buat script migrate dan seed di backend/src/scripts/ yang menjalankan file SQL secara berurutan.
6. Buat kerangka frontend/smartboard dan frontend/mobile: masing-masing satu halaman judul sederhana (contoh: GameEdu Smartboard dan GameEdu Mobile — Siswa).
7. Buat komponen Button, Card, dan Badge di packages/ui/.
8. Uji backend di laptopmu — perintah ini harus berhasil:
   ```
   docker compose up -d
   npm run db:migrate
   npm run db:seed
   npm run dev:backend
   npm run build:backend
   ```
9. Periksa di terminal atau browser: GET http://localhost:3001/api/health harus menjawab `{"status":"ok"}`. Buka juga phpMyAdmin di http://localhost:8080 (pengguna gameedu, sandi gameedu_dev) untuk melihat tabel dan isi database. Jika Docker belum terpasang di laptopmu, kabari di grup — migrasi dan seed bisa diuji nanti bersama Anggota 1, tetapi kode backend dan SQL tetap harus selesai dan di-push.

> **Tanpa Docker (Laragon/XAMPP):** kalau di laptopmu sudah ada Laragon atau XAMPP, lewati `docker compose up -d`. Buat database bernama `gameedu` di phpMyAdmin Laragon/XAMPP, lalu isi `backend/.env` dengan kredensialmu sendiri (Laragon/XAMPP: pengguna `root` tanpa sandi, jadi `DATABASE_URL=mysql://root@localhost:3306/gameedu`). Setelah itu jalankan `npm run db:migrate` dan `npm run db:seed` seperti biasa. Laragon/XAMPP biasanya memakai MariaDB — tetap bisa dipakai, driver mysql2 cocok. File `backend/.env` tidak ikut ter-commit (sudah ada di `.gitignore`), jadi tiap laptop boleh memakai kredensial databasenya sendiri.
10. Simpan dan kirim pekerjaanmu:
    ```
    git add .
    git commit -m "feat: buat backend soal dan migrasi SQL"
    git push -u origin fitur/backend-sql
    ```
11. Buka GitHub, buat Pull Request dari branch fitur/backend-sql ke main, kabari di grup, tunggu 1 anggota lain memeriksa, lalu gabungkan (merge).

## Selesai artinya

GET /api/health menjawab `{"status":"ok"}`, migrasi dan seed berjalan berurutan, npm run build:backend berhasil tanpa error, dan smartboard serta mobile menampilkan halaman judulnya.

## Kalau mentok

| Masalah | Yang dilakukan |
|---------|----------------|
| Docker belum terpasang | Kabari di grup. Kode backend dan SQL tetap diselesaikan dan di-push; pengujian migrate/seed dilakukan bersama Anggota 1. |
| GET /api/health tidak menjawab | Periksa apakah server jalan di port 3001 (cek log terminal dev:backend) dan apakah route health terdaftar di app.ts. |
| db:migrate gagal | Baca pesan error SQL-nya — biasanya nama tabel sudah ada (jalankan ulang dari database kosong) atau ada salah ketik di file migrasi. Perbaiki file SQL-nya, lalu jalankan lagi. |
| npm run build:backend gagal | Baca baris error paling atas di terminal, perbaiki file yang disebut di sana, lalu jalankan build lagi. |
| git pull ditolak atau muncul conflict | Jangan tekan perintah paksa (force push). Tunjukkan pesan errornya di grup, lalu selesaikan bersama dengan membuka file yang bertanda konflik dan memilih isi yang benar. |
