
CREATE TABLE IF NOT EXISTS sesi_game (
    id INT AUTO_INCREMENT PRIMARY KEY,
    kelas_id INT NOT NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'menunggu',
    mulai_pada TIMESTAMP NULL,
    selesai_pada TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_sesi_kelas
        FOREIGN KEY (kelas_id)
        REFERENCES kelas(id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS jawaban (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sesi_id INT NOT NULL,
    siswa_id INT NOT NULL,
    soal_id INT NOT NULL,
    jawaban_dipilih TINYINT NOT NULL,
    benar BOOLEAN NOT NULL DEFAULT FALSE,
    dijawab_pada TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_jawaban_sesi
        FOREIGN KEY (sesi_id)
        REFERENCES sesi_game(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_jawaban_siswa
        FOREIGN KEY (siswa_id)
        REFERENCES siswa(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_jawaban_soal
        FOREIGN KEY (soal_id)
        REFERENCES soal(id)
        ON DELETE CASCADE,

    CONSTRAINT chk_jawaban_dipilih
        CHECK (jawaban_dipilih BETWEEN 0 AND 3)
);
