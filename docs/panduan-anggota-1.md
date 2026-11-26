# Anggota 1 — Repository dan Integrasi

**Nama: Khoirul Anam (NIM 2455202037)**
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

1. Clone repository ke laptopmu (kalau belum):
   ```
   git clone https://github.com/khoirulanamid/GameEdu.git
   cd GameEdu
   ```
2. Pasang semua kebutuhan project (sekali saja, sekitar 1 menit):
   ```
   npm install
   ```
3. Pastikan kamu berada di branch main yang terbaru:
   ```
   git pull origin main
   ```

## Tugasmu

- Mengundang 3 anggota lain sebagai collaborator (peran Write) dan memastikan mereka menerima undangannya.
- Memeriksa dan menggabungkan Pull Request dari anggota lain.
- Melengkapi README (isi nama dan NIM 3 anggota lain).
- Menguji alur guru dari awal sampai akhir setelah semua branch digabung.
- Mengumpulkan link repository di Google Classroom (Tahap 7).

## File yang kamu miliki

package.json di root, README.md, .gitignore, dan docker-compose.yml.

## Langkah-langkahmu

### 1. Undang 3 anggota sebagai collaborator

1. Buka https://github.com/khoirulanamid/GameEdu di browser.
2. Klik **Settings** (tab paling kanan, di atas).
3. Di menu kiri, klik **Collaborators**.
4. Klik tombol **Add people**.
5. Ketik username GitHub temanmu, pilih namanya yang muncul, klik **Add**, lalu pilih peran **Write**.
6. Ulangi untuk 2 teman lainnya.
7. Periksa apakah ketiganya sudah menerima undangan (statusnya berubah dari Pending menjadi anggota). Ingatkan yang belum menerima lewat grup.

### 2. Isi nama dan NIM anggota di README

1. Buat branch-mu:
   ```
   git checkout -b docs/lengkapi-anggota
   ```
2. Buka README.md, isi nama dan NIM 3 anggota lain di tabel anggota.
3. Simpan dan kirim perubahan itu:
   ```
   git add README.md
   git commit -m "docs: isi nama dan NIM anggota"
   git push -u origin docs/lengkapi-anggota
   ```
4. Buka GitHub, buat Pull Request dari branch docs/lengkapi-anggota ke main, minta 1 anggota lain memeriksa, lalu gabungkan (merge).

### 3. Periksa dan gabungkan Pull Request anggota lain

Setiap ada Pull Request masuk dari anggota lain:

1. Buka Pull Request-nya di GitHub.
2. Periksa file yang diubah — pastikan hanya file bagian mereka yang berubah.
3. Pastikan tidak ada konflik dengan main.
4. Gabungkan (merge), lalu hapus branch tersebut.

### 4. Uji akhir setelah semua branch digabung

1. Tarik hasil terbaru:
   ```
   git pull origin main
   ```
2. Build harus berhasil tanpa error:
   ```
   npm run build:web
   npm run build:backend
   ```
3. Uji alur guru: buka Dashboard, tambah soal baru, muat ulang browser, hapus satu soal. Jika ada yang rusak, catat dan kabari pemilik bagiannya di grup.

### 5. Kumpulkan link di Classroom

1. Salin link https://github.com/khoirulanamid/GameEdu.
2. Tempelkan pada tugas Milestone 1 di Google Classroom, lalu tekan tombol serahkan (turn in / submit).
3. Buka kembali halaman tugas dan pastikan statusnya sudah diserahkan, lalu kabari anggota lain bahwa pengumpulan selesai.

## Selesai artinya

Keempat anggota tercatat sebagai collaborator, README lengkap, semua Pull Request sudah digabung, build bersih, dan link repository sudah terkumpul di Classroom.

## Kalau mentok

| Masalah | Yang dilakukan |
|---------|----------------|
| Teman belum menerima undangan | Ingatkan lewat grup; pastikan mereka membuka email atau lonceng notifikasi GitHub dan menekan Accept invitation. |
| git pull ditolak atau muncul conflict | Jangan tekan perintah paksa (force push). Tunjukkan pesan errornya di grup, lalu selesaikan bersama dengan membuka file yang bertanda konflik dan memilih isi yang benar. |
| npm run build gagal | Baca baris error paling atas di terminal, perbaiki file yang disebut di sana, lalu jalankan build lagi. Error build hampir selalu berarti ada file yang belum di-pull dari main. |
