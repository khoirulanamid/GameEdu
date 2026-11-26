# Backend — GameEdu API

Node + Express + TypeScript. Satu-satunya lapisan yang boleh bicara ke database
adalah `src/repositories/` (via `src/config/db.ts`). Route/controller/service
TIDAK BOLEH menulis SQL.

## Jalankan (dev)

```bash
cp .env.example .env   # isi DATABASE_URL kalau perlu
npm run dev --workspace=@gameedu/backend   # atau dari root: npm run dev:backend
# cek: curl http://localhost:3001/api/health
```

## Endpoint Milestone 1 (kerangka)

- `GET /api/health` → `{ status: 'ok', service: 'gameedu-backend' }` (tanpa DB)
- `GET /api/soal` → daftar soal dari DB (butuh migrate + seed dulu, kalau belum: 503 + pesan jelas)
- `POST /api/soal` → tambah soal (validasi: pertanyaan + 4 pilihan + jawabanBenar 0-3)

## Migrasi & seed (dari root)

```bash
npm run db:migrate   # jalankan sql/migrations/ berurutan
npm run db:seed      # isi data contoh
```
