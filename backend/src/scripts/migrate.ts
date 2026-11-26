
import "dotenv/config";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { db } from "../config/db.js";

const currentFile = fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFile);

const migrationsDir = path.resolve(
  currentDir,
  "../../../sql/migrations"
);

const migrationFiles = [
  "001_create_soal.sql",
  "002_create_kelas_siswa.sql",
  "003_create_sesi_jawaban.sql",
];

async function migrate() {
  try {
    for (const file of migrationFiles) {
      const filePath = path.join(migrationsDir, file);
      const sql = await fs.readFile(filePath, "utf-8");

      const statements = sql
        .split(";")
        .map((statement) => statement.trim())
        .filter(Boolean);

      for (const statement of statements) {
        await db.query(statement);
      }

      console.log(`Berhasil menjalankan migrasi: ${file}`);
    }

    console.log("Semua migrasi berhasil dijalankan.");
  } catch (error) {
    console.error("Migrasi gagal:", error);
    process.exitCode = 1;
  } finally {
    await db.end();
  }
}

migrate();
