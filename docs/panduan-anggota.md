# GameEdu: Panduan per Anggota — Tugas dan Cara Push Masing-Masing

Final Project Milestone 1 — Pemrograman Web II — Dosen Pembimbing: Uli Rizki, M.Kom — Universitas Nurul Huda
Repository: https://github.com/khoirulanamid/GameEdu

| Anggota | Nama | NIM | Peran |
|---------|------|-----|-------|
| Anggota 1 | Khoirul Anam | 2455202037 | Repository dan Integrasi |
| Anggota 2 | [isi nama] | [isi NIM] | Frontend Web Guru — Dashboard dan Soal |
| Anggota 3 | [isi nama] | [isi NIM] | Frontend Web Guru — Tambah Soal dan Data |
| Anggota 4 | [isi nama] | [isi NIM] | Backend, SQL, Smartboard, dan Mobile |

> Cara memakai panduan ini: baca dulu Bab 1 (berlaku untuk semua anggota), lalu baca Bab bagianmu sendiri saja. Setiap anggota mengerjakan bagiannya masing-masing, bareng-paralel — tidak perlu menunggu orang lain selesai dulu. Kalau mentok, tanya di grup, jangan diam.

Versi dokumen (.docx) yang bisa dibagikan ke grup WhatsApp ada di berkas terpisah: `gameedu-panduan-anggota.docx`.

Panduan per anggota juga tersedia sebagai file terpisah (masing-masing bisa dibagikan langsung ke orangnya):

- [Anggota 1 — Repository dan Integrasi](panduan-anggota-1.md) (Khoirul Anam)
- [Anggota 2 — Frontend Web Guru: Dashboard dan Soal](panduan-anggota-2.md)
- [Anggota 3 — Frontend Web Guru: Tambah Soal dan Data](panduan-anggota-3.md)
- [Anggota 4 — Backend, SQL, Smartboard, dan Mobile](panduan-anggota-4.md)

## 1. Aturan main untuk semua anggota

Kelompok ini berisi 4 anggota yang setara dan belajar bersama. Tidak ada yang mengatur sendiri; keputusan dibuat bersama di grup. Setiap anggota bertanggung jawab penuh atas bagiannya sampai selesai.

- **Bebas mulai kapan saja** — Kerja bareng-paralel. Siapa saja boleh langsung mulai, tidak perlu menunggu anggota lain selesai dulu.
- **Satu branch untuk satu pekerjaan** — Setiap anggota bekerja di branch-nya sendiri. Tidak ada yang push langsung ke branch main.
- **Pull Request dan review** — Setelah selesai, buat Pull Request ke main. Minimal 1 anggota lain memeriksa sebelum digabung.
- **Jangan ubah file orang lain diam-diam** — Jika perlu mengubah file milik orang lain, beri tahu pemiliknya dulu di grup.
- **Lapor saat perlu saja** — Lapor di grup hanya pada 3 momen: saat Pull Request siap diperiksa, saat mentok lebih dari sehari, dan saat mau mengubah file orang lain.
- **Jangan push file berat** — Folder node_modules/ dan dist/ tidak boleh ikut ter-commit.

### Langkah awal — dilakukan semua anggota satu kali

1. Terima undangan collaborator dari GitHub (cek email atau lonceng notifikasi GitHub, lalu klik Accept invitation).
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

### Cara push — alur yang sama untuk semua anggota

1. Pastikan branch main di laptopmu sudah terbaru: `git pull origin main`.
2. Buat branch baru: `git checkout -b <nama-branch>`.
3. Kerjakan file-file bagianmu, lalu uji dengan perintah di Bab bagianmu sampai tidak ada error.
4. Simpan perubahanmu:
   ```
   git add .
   git commit -m "feat: <isi pekerjaanmu>"
   ```
5. Kirim branch-mu ke GitHub:
   ```
   git push -u origin <nama-branch>
   ```
6. Buka GitHub, buat Pull Request dari branch-mu ke main, kabari di grup, tunggu 1 anggota lain memeriksa, lalu gabungkan (merge). Setelah merge, hapus branch tersebut dan jalankan `git pull origin main`.

Contoh pesan commit yang benar: `feat: buat halaman Dashboard dan Daftar Soal`. Hindari pesan seperti `update`, `revisi`, atau `final2`.

## 2. Anggota 1 — Repository dan Integrasi

**Nama: Khoirul Anam (NIM 2455202037).** Peranmu adalah menjaga repository tetap rapi dan memastikan semua pekerjaan anggota lain menyatu dengan benar di branch main.

**Tugasmu:**
- Mengundang 3 anggota lain sebagai collaborator (peran Write) dan memastikan mereka menerima undangannya.
- Memeriksa dan menggabungkan Pull Request dari anggota lain.
- Melengkapi README (isi nama dan NIM 3 anggota lain).
- Menguji alur guru dari awal sampai akhir setelah semua branch digabung.
- Mengumpulkan link repository di Google Classroom (Tahap 7).

**File yang kamu miliki:** package.json di root, README.md, .gitignore, dan docker-compose.yml.

**Langkah-langkahmu:**
1. Buka https://github.com/khoirulanamid/GameEdu, klik Settings → Collaborators → Add people, ketik username GitHub temanmu, pilih namanya, klik Add, pilih peran Write. Ulangi untuk 2 teman lainnya.
2. Periksa apakah ketiganya sudah menerima undangan. Ingatkan yang belum menerima lewat grup.
3. Isi nama dan NIM 3 anggota lain di tabel anggota pada README.md, lalu push:
   ```
   git checkout -b docs/lengkapi-anggota
   git add README.md
   git commit -m "docs: isi nama dan NIM anggota"
   git push -u origin docs/lengkapi-anggota
   ```
4. Buat Pull Request ke main, minta 1 anggota lain memeriksa, lalu gabungkan (merge).
5. Setiap ada Pull Request masuk: periksa file yang diubah, pastikan build tidak rusak, lalu gabungkan dan hapus branch tersebut.
6. Setelah semua branch digabung: `git pull origin main`, lalu `npm run build:web` dan `npm run build:backend` — keduanya harus berhasil tanpa error.
7. Uji alur guru: buka Dashboard, tambah soal baru, muat ulang browser, hapus satu soal. Jika ada yang rusak, kabari pemilik bagiannya di grup.
8. Salin link https://github.com/khoirulanamid/GameEdu dan kumpulkan pada tugas Milestone 1 di Google Classroom, lalu pastikan statusnya sudah diserahkan dan kabari anggota lain.

**Selesai artinya:** keempat anggota tercatat sebagai collaborator, README lengkap, semua Pull Request sudah digabung, build bersih, dan link repository sudah terkumpul di Classroom.

## 3. Anggota 2 — Frontend Web Guru: Dashboard dan Soal

**Peranmu adalah membuat aplikasi web guru bisa dibuka dan menampilkan Dashboard serta Daftar Soal.** Bagianmu adalah yang pertama kali dilihat dosen saat membuka project — dan bagianmu juga yang membuka jalan bagi Anggota 3, karena main.tsx dan App.tsx yang kamu buat dipakai oleh semua halaman.

**Tugasmu:**
- Membuat main.tsx dan App.tsx beserta routing lima halaman guru.
- Membuat Layout dan Sidebar (menu Dashboard, Bank Soal, Sesi Game, Kelas & Siswa, Laporan).
- Membuat halaman Dashboard dengan kartu statistik (jumlah soal, kelas, siswa, sesi).
- Membuat halaman Daftar Soal (tabel soal + hapus soal).
- Membuat data contoh soal di folder data/ (6–8 soal bangun datar).

**File yang kamu miliki:** frontend/web/src/main.tsx, App.tsx, components/, pages/Dashboard.tsx, pages/SoalList.tsx, dan data/.

**Langkah-langkahmu:**
1. Pastikan langkah awal Bab 1 sudah dilakukan (clone, npm install, git pull origin main).
2. Buat branch-mu:
   ```
   git checkout -b fitur/dashboard
   ```
3. Buat file frontend/web/src/main.tsx: titik masuk aplikasi yang menampilkan App dan memakai index.css.
4. Buat file frontend/web/src/App.tsx: routing lima halaman dengan react-router-dom (path `/` untuk Dashboard, `/bank-soal`, `/sesi-game`, `/kelas-siswa`, `/laporan`).
5. Buat komponen Layout dan Sidebar di frontend/web/src/components/: menu di kiri dengan lima menu, menu yang aktif diberi warna berbeda, dan area isi di tengah.
6. Buat file frontend/web/src/data/soal.ts: data contoh 6–8 soal bangun datar (pertanyaan, 4 pilihan jawaban, kunci jawaban, materi, tingkat kesulitan).
7. Buat halaman frontend/web/src/pages/Dashboard.tsx: kartu statistik dan daftar soal terbaru dari data contoh.
8. Buat halaman frontend/web/src/pages/SoalList.tsx: tabel berisi nomor, pertanyaan, materi, tingkat kesulitan, dan kunci jawaban, plus tombol hapus yang bekerja.
9. Uji di laptopmu — perintah ini harus berhasil tanpa error merah:
   ```
   npm run dev:web
   npm run build:web
   ```
10. Buka http://localhost:5173 di browser, klik semua menu satu per satu, dan pastikan halaman berpindah tanpa memuat ulang seluruh browser.
11. Simpan dan kirim pekerjaanmu:
    ```
    git add .
    git commit -m "feat: buat Dashboard dan Daftar Soal"
    git push -u origin fitur/dashboard
    ```
12. Buat Pull Request ke main, kabari di grup, tunggu 1 anggota lain memeriksa, lalu gabungkan (merge).

**Selesai artinya:** npm run dev:web menampilkan Dashboard dengan kartu statistik dan Daftar Soal yang bisa dihapus, dan npm run build:web berhasil tanpa error.

> Catatan penting: sampai main.tsx dan App.tsx buatanmu masuk ke main, anggota lain belum bisa menjalankan dev:web. Jadi kerjakan dua file itu dulu sebelum halaman-halaman lainnya — anggota lain bisa menulis file halamannya sendiri sambil menunggu, tetapi pengujiannya menunggu App.tsx buatanmu.

## 4. Anggota 3 — Frontend Web Guru: Tambah Soal dan Data

**Peranmu adalah membuat guru bisa menambah soal baru lewat formulir, dan membuat tipe data Soal yang dipakai bersama oleh frontend dan backend.** Kamu bisa mulai menulis file-filemu kapan saja — tetapi untuk menguji formulirmu di browser, kamu menunggu main.tsx dan App.tsx dari Anggota 2 masuk ke main dulu.

**Tugasmu:**
- Membuat tipe Soal di packages/types/ (dipakai frontend dan backend).
- Membuat halaman SoalForm: formulir tambah soal (pertanyaan, 4 pilihan jawaban, jawaban benar, kategori, tingkat kesulitan).
- Membuat validasi formulir: pertanyaan tidak boleh kosong, harus ada 4 pilihan, dan harus ada 1 jawaban benar yang dipilih.
- Menyimpan soal baru di localStorage supaya tetap ada setelah browser dimuat ulang.

**File yang kamu miliki:** packages/types/, frontend/web/src/pages/SoalForm.tsx, dan frontend/web/src/lib/.

**Langkah-langkahmu:**
1. Pastikan langkah awal Bab 1 sudah dilakukan (clone, npm install, git pull origin main).
2. Buat branch-mu:
   ```
   git checkout -b fitur/soal-form
   ```
3. Buat file packages/types/src/soal.ts: tipe Soal berisi id, pertanyaan, pilihan (4 jawaban), jawabanBenar, kategori, dan tingkat.
4. Buat file frontend/web/src/lib/storage.ts: fungsi simpan dan baca soal dari localStorage.
5. Buat halaman frontend/web/src/pages/SoalForm.tsx: formulir dengan kolom pertanyaan, 4 kolom pilihan jawaban, pilihan jawaban benar, kategori, dan tingkat kesulitan, plus tombol Simpan.
6. Tambahkan validasi: jika pertanyaan kosong, pilihan kurang dari 4, atau jawaban benar belum dipilih, tampilkan pesan kesalahan dan jangan menyimpan.
7. Setelah Anggota 2 menggabungkan App.tsx ke main, jalankan `git pull origin main` di laptopmu, lalu uji formulirmu:
   ```
   npm run dev:web
   npm run build:web
   ```
8. Uji di browser: isi formulir, tekan Simpan, periksa soalmu muncul di Daftar Soal, muat ulang browser, dan pastikan soalmu masih ada.
9. Simpan dan kirim pekerjaanmu:
   ```
   git add .
   git commit -m "feat: buat SoalForm dan tipe Soal"
   git push -u origin fitur/soal-form
   ```
10. Buat Pull Request ke main, kabari di grup, tunggu 1 anggota lain memeriksa, lalu gabungkan (merge).

**Selesai artinya:** formulir tambah soal bisa menyimpan soal baru, soal yang disimpan muncul di Daftar Soal dan tetap ada setelah browser dimuat ulang, dan npm run build:web berhasil tanpa error.

## 5. Anggota 4 — Backend, SQL, Smartboard, dan Mobile

**Peranmu adalah membuat sisi server (backend dan database) serta kerangka smartboard dan mobile.** Bagianmu paling mandiri: kamu tidak perlu menunggu Anggota 2 atau 3, karena backend diuji lewat terminal, bukan lewat tampilan web.

**Tugasmu:**
- Membuat backend: server Express, route health dan soal, controller, service, dan repository.
- Menulis file SQL: 3 migrasi (soal, kelas/siswa, sesi/jawaban) dan 1 seed berisi 3 soal contoh.
- Membuat script migrate dan seed yang menjalankan file SQL secara berurutan.
- Membuat kerangka frontend/smartboard dan frontend/mobile (satu halaman judul sederhana).
- Membuat komponen bersama di packages/ui/ (Button, Card, Badge).

**File yang kamu miliki:** backend/src/ semuanya, sql/migrations/ dan sql/seeds/, frontend/smartboard/, frontend/mobile/, packages/ui/, dan folder docs/.

**Langkah-langkahmu:**
1. Pastikan langkah awal Bab 1 sudah dilakukan (clone, npm install, git pull origin main).
2. Buat branch-mu:
   ```
   git checkout -b fitur/backend-sql
   ```
3. Buat file backend/src/index.ts (menjalankan server di port 3001) dan backend/src/app.ts (aplikasi Express dan pendaftaran route).
4. Buat route, controller, service, dan repository untuk soal — ingat aturannya: SQL hanya boleh ada di repositories/, tidak di route, controller, atau service.
5. Buat file SQL di sql/migrations/: 001_create_soal.sql, 002_create_kelas_siswa.sql, dan 003_create_sesi_jawaban.sql, lalu buat sql/seeds/001_seed_soal.sql berisi 3 soal contoh.
6. Buat script migrate dan seed di backend/src/scripts/ yang menjalankan file SQL secara berurutan.
7. Buat kerangka frontend/smartboard dan frontend/mobile: masing-masing satu halaman judul sederhana (contoh: GameEdu Smartboard dan GameEdu Mobile — Siswa).
8. Buat komponen Button, Card, dan Badge di packages/ui/.
9. Uji backend di laptopmu — perintah ini harus berhasil:
   ```
   docker compose up -d db
   npm run db:migrate
   npm run db:seed
   npm run dev:backend
   npm run build:backend
   ```
10. Periksa di terminal atau browser: GET http://localhost:3001/api/health harus menjawab `{"status":"ok"}`. Jika Docker belum terpasang di laptopmu, kabari di grup — migrasi dan seed bisa diuji nanti bersama Anggota 1, tetapi kode backend dan SQL tetap harus selesai dan di-push.
11. Simpan dan kirim pekerjaanmu:
    ```
    git add .
    git commit -m "feat: buat backend soal dan migrasi SQL"
    git push -u origin fitur/backend-sql
    ```
12. Buat Pull Request ke main, kabari di grup, tunggu 1 anggota lain memeriksa, lalu gabungkan (merge).

**Selesai artinya:** GET /api/health menjawab `{"status":"ok"}`, migrasi dan seed berjalan berurutan, npm run build:backend berhasil tanpa error, dan smartboard serta mobile menampilkan halaman judulnya.

## 6. Kalau mentok — jangan diam

| Masalah | Yang dilakukan |
|---------|----------------|
| git pull ditolak atau muncul conflict | Jangan tekan perintah paksa (force push). Tunjukkan pesan errornya di grup, lalu selesaikan bersama dengan membuka file yang bertanda konflik dan memilih isi yang benar. |
| npm run dev:web gagal sebelum Anggota 2 selesai | Itu normal: main.tsx dan App.tsx belum ada. Tunggu Anggota 2 menggabungkan branch-nya, lalu jalankan git pull origin main dan coba lagi. |
| npm run build gagal | Baca baris error paling atas di terminal, perbaiki file yang disebut di sana, lalu jalankan build lagi. Error build hampir selalu berarti ada file yang belum di-pull dari main. |
| Docker belum terpasang (Anggota 4) | Kabari di grup. Kode backend dan SQL tetap diselesaikan dan di-push; pengujian migrate/seed dilakukan bersama Anggota 1. |
| Tidak tahu harus mulai dari file yang mana | Buka Bab bagianmu dan kerjakan file pertama yang tercantum di sana. Kalau masih bingung, tanya di grup dengan menyebut nama file-nya. |

## 7. Checklist akhir — masing-masing mencentang bagiannya

- Anggota 1: keempat anggota sudah collaborator, README lengkap, semua Pull Request digabung, link terkumpul di Classroom.
- Anggota 2: Dashboard tampil dengan kartu statistik, Daftar Soal bisa dihapus, npm run build:web berhasil.
- Anggota 3: SoalForm menyimpan soal baru, soal tetap ada setelah browser dimuat ulang, npm run build:web berhasil.
- Anggota 4: GET /api/health menjawab `{"status":"ok"}`, migrasi dan seed berjalan, npm run build:backend berhasil, smartboard dan mobile menampilkan halaman judul.

Milestone 1 selesai pada fondasi, bukan pada fitur. Yang dinilai adalah repository publik yang rapi, struktur yang benar, dan tampilan guru yang bisa dibuka dan dipakai. Kerjakan bagianmu, push lewat Pull Request, dan bantu periksa pekerjaan temanmu — itu sudah cukup.
