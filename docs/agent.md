# Panduan Perbaikan untuk Dinda — Email Git & Bentuk Soal

> File ini untuk Dinda Puspita Ayu (Anggota 3). Dua hal yang perlu diperbaiki sebelum membuka Pull Request: (1) email git supaya commit tercatat atas namamu di GitHub, (2) bentuk Soal disamakan dengan Daryanto dan branch disinkronkan dengan main. Kerjakan Bagian 1 dulu (5 menit), lalu Bagian 2, lalu Bagian 3.

## Bagian 1 — Perbaiki email git supaya commit tercatat atas namamu

Kenapa: commit "feat: add soal form" kemarin tidak menampilkan username kamu di GitHub, karena email yang dipakai git di laptopmu bukan email akun GitHub-mu. Akibatnya kamu tidak tercatat sebagai contributor.

1. Cek email yang dipakai git sekarang:
   ```
   git config user.email
   git config user.name
   ```
2. Cek email akun GitHub-mu: buka github.com, klik foto profil, pilih Settings, lalu Emails, dan lihat "Primary email address". (Di halaman yang sama ada juga alamat noreply GitHub — alamat itu juga boleh dipakai.)
3. Samakan git dengan email itu:
   ```
   git config --global user.name "Dinda Puspita Ayu"
   git config --global user.email "email-akun-github@contoh.com"
   ```
   Ganti `email-akun-github@contoh.com` dengan email aslimu. `--global` berarti berlaku untuk semua repository di laptopmu; hapus `--global` kalau hanya mau berlaku di GameEdu.
4. Commit yang sudah ter-push tidak ikut berubah — yang tercatat mulai commit berikutnya. Cara cek berhasil: setelah push commit baru, buka commit itu di GitHub — foto profil dan username kamu harus muncul dan bisa diklik.
5. Opsional — kalau mau commit kemarin ikut tercatat, lakukan ini HANYA di branch-mu sendiri (`fitur/soal-form`), jangan pernah di `main`:
   ```
   git checkout fitur/soal-form
   git commit --amend --reset-author --no-edit
   git push --force-with-lease origin fitur/soal-form
   ```

## Bagian 2 — Samakan bentuk Soal

Kenapa: saat ini ada dua bentuk Soal yang berbeda — Daryanto memakai pilihan `{A, B, C, D}` dengan kunci jawaban huruf, sedangkan form kamu memakai array string dengan jawaban benar berupa teks pilihan. Supaya soal dari form kamu bisa tampil di Daftar Soal Daryanto, dipakai SATU bentuk yang sama, yaitu tipe bersama di `packages/types/`.

### Bentuk Soal yang disepakati

Ganti isi `packages/types/src/soal.ts` menjadi seperti ini:

```ts
export type TingkatKesulitan = 'Mudah' | 'Sedang' | 'Sulit';
export type KunciJawaban = 'A' | 'B' | 'C' | 'D';

export interface Soal {
  id: string;
  pertanyaan: string;
  pilihan: { A: string; B: string; C: string; D: string };
  kunciJawaban: KunciJawaban;
  kategori: string;
  materi: string;
  tingkat: TingkatKesulitan;
  durasiDetik?: number;
}
```

### Yang diubah di TambahSoal.tsx

1. Jawaban benar disimpan sebagai HURUF (A/B/C/D), bukan teks pilihannya. Ubah dropdown jawaban benar menjadi:
   ```tsx
   <label>Jawaban Benar</label>
   <select value={jawabanBenar} onChange={(e) => setJawabanBenar(e.target.value)}>
     <option value="">Pilih jawaban benar</option>
     {(['A', 'B', 'C', 'D'] as const).map((huruf, i) => (
       <option key={huruf} value={huruf} disabled={!pilihan[i].trim()}>
         {huruf}. {pilihan[i]}
       </option>
     ))}
   </select>
   ```
   State `jawabanBenar` tetap string, tapi isinya sekarang huruf.
2. Tambahkan kolom `materi` (input teks, contoh: "Persegi") di bawah kolom kategori.
3. Ketik state tingkat sebagai `TingkatKesulitan`: ubah `useState("Mudah")` menjadi `useState<TingkatKesulitan>("Mudah")`, dan pada `onChange`-nya pakai `setTingkat(e.target.value as TingkatKesulitan)`.
4. Saat menyimpan, ubah array pilihan menjadi objek A–D:
   ```ts
   const soalBaru: Soal = {
     id: Date.now().toString(),
     pertanyaan,
     pilihan: { A: pilihan[0], B: pilihan[1], C: pilihan[2], D: pilihan[3] },
     kunciJawaban: jawabanBenar as KunciJawaban,
     kategori,
     materi,
     tingkat,
   };
   ```
   Jangan lupa import tipenya di atas file: `import type { Soal, KunciJawaban, TingkatKesulitan } from "@gameedu/types";`

### Simpan ke localStorage

Buat file `frontend/web/src/lib/storage.ts`:

```ts
import type { Soal } from '@gameedu/types';

const KUNCI = 'gameedu-soal';

export function bacaSoal(): Soal[] {
  try {
    return JSON.parse(localStorage.getItem(KUNCI) ?? '[]') as Soal[];
  } catch {
    return [];
  }
}

export function simpanSoal(soal: Soal): void {
  const semua = bacaSoal();
  semua.push(soal);
  localStorage.setItem(KUNCI, JSON.stringify(semua));
}
```

### Buat halaman SoalForm dan hubungkan ke routing

Buat file `frontend/web/src/pages/SoalForm.tsx`:

```tsx
import { useNavigate } from 'react-router-dom';
import TambahSoal from '../components/TambahSoal';
import { simpanSoal } from '../lib/storage';

export default function SoalForm() {
  const navigate = useNavigate();
  return (
    <TambahSoal
      onSimpan={(soal) => {
        simpanSoal(soal);
        navigate('/bank-soal');
      }}
    />
  );
}
```

Lalu tambahkan route-nya di `App.tsx` (versi main yang dipertahankan di Bagian 3) dan tombol "Tambah Soal" di halaman `SoalList` yang mengarah ke `/bank-soal/tambah`.

## Bagian 3 — Sinkronkan branch dengan main (bereskan conflict)

Kenapa: branch kamu dibuat dari `main` yang lama, sebelum Dashboard Daryanto di-merge. Kalau langsung buka PR, akan conflict di `App.tsx`, `main.tsx`, dan `index.css`.

1. Pindah ke branch-mu dan tarik main terbaru:
   ```
   git checkout fitur/soal-form
   git pull origin main
   ```
2. Git akan menampilkan conflict di tiga file itu. Buka masing-masing file di VS Code — di bagian conflict ada tombol pilihan:
   - Pilih **"Accept Incoming Change"** (versi main / punya Daryanto) untuk `App.tsx`, `main.tsx`, dan `index.css`. ("Incoming" artinya perubahan yang masuk dari main; "Current" artinya versi branch-mu.)
   - Kalau ada gaya CSS punyamu sendiri di `index.css` yang mau dipertahankan, tambahkan manual setelah memilih versi main.
3. Setelah itu tambahkan route form (Bagian 2) ke `App.tsx` yang sudah dipertahankan.
4. Tandai conflict selesai dan push:
   ```
   git add .
   git commit -m "chore: gabungkan main dan samakan bentuk Soal"
   git push
   ```
5. Uji di laptopmu:
   ```
   npm run build:web
   npm run dev:web
   ```
   `build:web` harus berhasil tanpa error. Buka http://localhost:5173, masuk ke halaman tambah soal, isi form, simpan — soal harus muncul di Daftar Soal dan tetap ada setelah browser dimuat ulang.
6. Baru buka Pull Request ke `main` di GitHub, lalu kabari di grup supaya diperiksa dulu sebelum di-merge.

## Checklist selesai

- [ ] `git config user.email` sudah sama dengan email akun GitHub
- [ ] Commit baru di GitHub menampilkan username kamu
- [ ] `packages/types/src/soal.ts` sudah bentuk yang disepakati
- [ ] Form menyimpan huruf kunci jawaban (A–D) dan ada kolom materi
- [ ] `lib/storage.ts` dan `pages/SoalForm.tsx` sudah dibuat, route sudah ditambahkan
- [ ] Branch sudah digabung dengan main, conflict sudah beres, `npm run build:web` berhasil
- [ ] Pull Request sudah dibuka dan diperiksa anggota lain sebelum di-merge

Catatan: penyambungan penuh ke Daftar Soal (membaca soal tersimpan dari localStorage di halaman Daftar Soal) dilakukan setelah PR ini di-merge, bersama Daryanto.
