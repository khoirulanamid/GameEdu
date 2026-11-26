
INSERT INTO soal
    (pertanyaan, pilihan, jawaban_benar, kategori, tingkat)
VALUES
(
    'Apa kepanjangan dari CPU?',
    JSON_ARRAY(
        'Central Processing Unit',
        'Computer Personal Unit',
        'Central Program Utility',
        'Control Processing User'
    ),
    0,
    'Komputer',
    'Mudah'
),
(
    'Manakah yang termasuk bahasa pemrograman?',
    JSON_ARRAY(
        'HTML',
        'Python',
        'CSS',
        'HTTP'
    ),
    1,
    'Pemrograman',
    'Mudah'
),
(
    'Apa fungsi utama database?',
    JSON_ARRAY(
        'Mengedit gambar',
        'Menjalankan video',
        'Menyimpan dan mengelola data',
        'Mengatur tampilan layar'
    ),
    2,
    'Database',
    'Mudah'
);
