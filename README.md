# GameEdu — STRUKTUR FOLDER SAJA (isi dibuat sendiri oleh kelompok)

Final Project Milestone 1 — Pemrograman Web II
Dosen: Uli Rizki, M.Kom — Universitas Nurul Huda

> Repo ini HANYA berisi struktur folder + file config.
> Semua kode fitur (halaman, form, API, SQL) dibuat sendiri oleh kelompok.
> Template lengkap yang dulu pernah ada disimpan sebagai backup di VM saja,
> bukan di repo ini — kalau mentok, minta petunjuk, jangan salin mentah-mentah.

## Keputusan yang sudah disepakati (26 Nov 2026)

- Opsi B: `frontend/` + `backend/` + `sql/` terpisah di root.
- Frontend: React 18 + TypeScript + Vite 5.
- Backend: Node + Express + TypeScript (port 3001).
- Database: PostgreSQL 16, raw SQL migration.

## Struktur folder

```text
GameEdu/
├── package.json                 # workspaces: frontend/* + backend + packages/*
├── docker-compose.yml           # DB Postgres lokal (dev saja)
├── .gitignore  .nvmrc (Node 20)
├── frontend/                    # SEMUA frontend (React + Vite)
│   ├── web/                     # Dashboard Guru — FOKUS Milestone 1
│   │   ├── package.json  vite.config.ts  tsconfig.json  index.html
│   │   └── src/
│   │       ├── main.tsx         # <-- BUAT SENDIRI (render App)
│   │       ├── App.tsx          # <-- BUAT SENDIRI (router)
│   │       ├── components/      # Layout, Sidebar, dll. — BUAT SENDIRI
│   │       ├── pages/           # Dashboard, SoalList, SoalForm, dll. — BUAT SENDIRI
│   │       ├── data/            # data contoh soal — BUAT SENDIRI
│   │       └── lib/             # penyimpanan soal (localStorage dulu) — BUAT SENDIRI
│   ├── smartboard/              # kerangka Milestone 2 — BUAT SENDIRI isinya
│   └── mobile/                  # kerangka Milestone 2, PWA — BUAT SENDIRI isinya
├── backend/                     # API SAJA (tanpa React)
│   ├── package.json  tsconfig.json  .env.example
│   └── src/
│       ├── index.ts             # <-- BUAT SENDIRI (jalankan server)
│       ├── app.ts               # <-- BUAT SENDIRI (Express + route)
│       ├── routes/              # health.routes, soal.routes — BUAT SENDIRI
│       ├── controllers/         # BUAT SENDIRI
│       ├── services/            # BUAT SENDIRI (validasi)
│       ├── repositories/        # BUAT SENDIRI — satu-satunya tempat berisi SQL
│       ├── config/              # env, db (pg Pool) — BUAT SENDIRI
│       ├── middlewares/         # BUAT SENDIRI
│       └── scripts/             # migrate, seed — BUAT SENDIRI
├── sql/                    # SQL SAJA
│   ├── migrations/              # 001_create_soal.sql, 002_..., 003_... — BUAT SENDIRI
│   ├── seeds/                   # 001_seed_soal.sql — BUAT SENDIRI
│   └── (schema.sql dibuat sendiri setelah migrasi jadi)
└── packages/
    ├── types/                   # tipe Soal, Kelas, Siswa, Sesi — BUAT SENDIRI
    └── ui/                      # Button, Card, Badge — BUAT SENDIRI
```

File `.gitkeep` di folder kosong hanya penanda supaya Git melacak folder
kosong itu. Hapus `.gitkeep` itu saat folder sudah berisi file sungguhan.

## Aturan pemisah (wajib dipegang 4 orang)

- Frontend tidak boleh akses DB langsung dan tidak boleh import dari `backend/`.
  Cuma boleh `fetch` ke API (`http://localhost:3001/api/...`).
- Backend tidak boleh import komponen React, cuma boleh pakai tipe dari `packages/types/`.
- SQL tidak boleh nyebar di route/controller/service. Semua SQL hidup di
  `sql/migrations/`, backend cuma manggil lewat `repositories/`.

## Cara mulai (di laptop masing-masing)

```bash
cd GameEdu
npm install          # sekali saja, install semua workspace
# lalu isi kode sesuai pembagian tugas di bawah, baru:
npm run dev:web      # Dashboard Guru di http://localhost:5173
npm run dev:backend  # API di http://localhost:3001/api/health
```

## Pembagian tugas — 4 orang (yang membuat kode)

| # | Peran | Yang harus dibuat |
|---|---|---|
| 1 | **Ketua + Repo & Integrasi** | Repo Public, undang collaborator, merge PR, uji akhir, submit link Classroom |
| 2 | **Frontend Web Guru — Dashboard & Soal** | `frontend/web/src/pages/Dashboard.tsx`, `SoalList.tsx`, `src/data/` |
| 3 | **Frontend Web Guru — Tambah Soal & Data** | `frontend/web/src/pages/SoalForm.tsx`, `src/lib/`, `packages/types/` |
| 4 | **Backend + SQL + Smartboard/Mobile** | `backend/src/` semuanya, `sql/migrations/` + `seeds/`, kerangka `frontend/smartboard/` + `frontend/mobile/`, `packages/ui/` |

## Checklist Milestone 1 (isi sendiri, jangan dicentang kalau belum bisa dijelaskan)

- [ ] Dashboard Guru tampil dan bisa dijelaskan cara kerjanya
- [ ] Tambah Soal bisa simpan + muncul di Daftar Soal
- [ ] `GET /api/health` jawab `{"status":"ok"}`
- [ ] Migrasi + seed jalan, tabel soal terisi 3 soal contoh
- [ ] Link repo Public dikumpulkan di Classroom
