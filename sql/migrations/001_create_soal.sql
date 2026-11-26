
CREATE TABLE IF NOT EXISTS soal (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pertanyaan TEXT NOT NULL,
    pilihan JSON NOT NULL,
    jawaban_benar TINYINT NOT NULL,
    kategori VARCHAR(100) NOT NULL,
    tingkat VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT chk_jawaban_benar
        CHECK (jawaban_benar BETWEEN 0 AND 3)
);
