# SQL — GameEdu (raw SQL, PostgreSQL)

SQL dipisah dari kode backend: semua perubahan skema berupa file `.sql`
bern nomor di `migrations/`, tidak ada SQL yang ditulis di route/controller.

## Jalankan DB lokal

```bash
docker compose up -d db        # Postgres 16 di localhost:5432, db gameedu
# tanpa Docker: buat DB Postgres sendiri bernama gameedu, lalu isi DATABASE_URL
cp backend/.env.example backend/.env
npm run db:migrate             # jalankan migrations/ berurutan
npm run db:seed                # isi 3 soal contoh
```

## Menambah tabel/kolom (Milestone 2+)

1. Buat file baru `migrations/004_nama_perubahan.sql` — JANGAN edit file 001-003 yang sudah jalan.
2. Jalankan `npm run db:migrate`.
3. Perbarui `schema.sql` (snapshot) dan tipe di `packages/types/` bila perlu.

## Pilihan database

Dipakai **PostgreSQL 16** (alasan: `gen_random_uuid()` bawaan, CHECK/foreign key
jelas, cocok dengan `pg` di backend). Kalau kelompok/dosen minta **MySQL**,
struktur folder TETAP sama — yang berubah hanya driver backend (`pg` → `mysql2`)
dan sedikit sintaks SQL (`UUID`/`SERIAL`, `ON CONFLICT` → `ON DUPLICATE KEY`).
