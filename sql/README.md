# SQL — GameEdu (raw SQL, MySQL)

SQL dipisah dari kode backend: semua perubahan skema berupa file `.sql`
bern nomor di `migrations/`, tidak ada SQL yang ditulis di route/controller.

## Jalankan DB lokal

```bash
docker compose up -d            # MySQL 8.0 di localhost:3306, db gameedu
# phpMyAdmin: http://localhost:8080 (server db, pengguna gameedu, sandi gameedu_dev)
# tanpa Docker: buat DB MySQL sendiri bernama gameedu (misalnya lewat Laragon/XAMPP),
# lalu isi DATABASE_URL dengan kredensialmu sendiri
cp backend/.env.example backend/.env
npm run db:migrate             # jalankan migrations/ berurutan
npm run db:seed                # isi 3 soal contoh
```

## Menambah tabel/kolom (Milestone 2+)

1. Buat file baru `migrations/004_nama_perubahan.sql` — JANGAN edit file 001-003 yang sudah jalan.
2. Jalankan `npm run db:migrate`.
3. Perbarui `schema.sql` (snapshot) dan tipe di `packages/types/` bila perlu.

## Pilihan database

Dipakai **MySQL 8.0** (dipakai bersama phpMyAdmin, sesuai kebiasaan kelompok;
driver backend `mysql2`). Struktur folder TETAP sama kalau suatu saat ganti
database — yang berubah hanya driver backend dan sedikit sintaks SQL.

Catatan: `backend/.env` tidak ikut ter-commit (sudah ada di `.gitignore`),
jadi tiap laptop boleh memakai kredensial databasenya sendiri — Docker
(`gameedu` / `gameedu_dev`) atau Laragon/XAMPP (`root` tanpa sandi).
Laragon/XAMPP biasanya memakai MariaDB — tetap bisa dipakai, driver
`mysql2` cocok.
