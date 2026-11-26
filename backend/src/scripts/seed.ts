
import "dotenv/config";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { db } from "../config/db.js";

const currentFile = fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFile);

const seedFile = path.resolve(
  currentDir,
  "../../../sql/seeds/001_seed_soal.sql"
);

async function seed() {
  try {
    const sql = await fs.readFile(seedFile, "utf-8");

    const statements = sql
      .split(";")
      .map((statement) => statement.trim())
      .filter(Boolean);

    for (const statement of statements) {
      await db.query(statement);
    }

    console.log("Berhasil menjalankan seed soal.");
  } catch (error) {
    console.error("Seed gagal:", error);
    process.exitCode = 1;
  } finally {
    await db.end();
  }
}

seed();
