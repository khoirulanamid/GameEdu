import { Link } from 'react-router-dom';
import { Soal, TingkatKesulitan } from '../data/soal';

interface DashboardProps {
  daftarSoal: Soal[];
}

function getLevelBadgeClass(level: TingkatKesulitan): string {
  if (level === 'Mudah') return 'badge-mudah';
  if (level === 'Sedang') return 'badge-sedang';
  return 'badge-sulit';
}

function getLevelShortCode(level: TingkatKesulitan): string {
  if (level === 'Mudah') return 'MD';
  if (level === 'Sedang') return 'SD';
  return 'SL';
}

export default function Dashboard({ daftarSoal }: DashboardProps) {
  const soalTerbaru = daftarSoal.slice(0, 4);
  const jumlahMudah = daftarSoal.filter((s) => s.tingkat === 'Mudah').length;
  const jumlahSedang = daftarSoal.filter((s) => s.tingkat === 'Sedang').length;
  const jumlahSulit = daftarSoal.filter((s) => s.tingkat === 'Sulit').length;

  const stats = [
    {
      label: 'Total Bank Soal',
      value: `${daftarSoal.length} soal`,
      meta: 'Materi Bangun Datar',
      footer: `${daftarSoal.length} siap dipakai`,
      progress: Math.min(100, Math.round((daftarSoal.length / 10) * 100)),
      iconBg: 'var(--peach-bg)',
      iconColor: 'var(--peach-text)',
      fillColor: 'var(--peach-solid)',
      footerColor: 'var(--peach-text)',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h10" />
        </svg>
      ),
    },
    {
      label: 'Kelas Aktif',
      value: '4 kelas',
      meta: 'VII-A, VII-B, VIII-A, VIII-B',
      footer: '4 kelas terhubung',
      progress: 80,
      iconBg: 'var(--mint-bg)',
      iconColor: 'var(--mint-text)',
      fillColor: 'var(--mint-solid)',
      footerColor: 'var(--mint-text)',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" />
          <path d="M5 21V7l7-4 7 4v14" />
          <path d="M9 21v-6h6v6" />
        </svg>
      ),
    },
    {
      label: 'Total Siswa',
      value: '128 siswa',
      meta: 'Terdaftar di 4 kelas',
      footer: '94% hadir minggu ini',
      progress: 94,
      iconBg: 'var(--indigo-bg)',
      iconColor: 'var(--indigo-text)',
      fillColor: 'var(--indigo-solid)',
      footerColor: 'var(--indigo-text)',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      label: 'Sesi Game',
      value: '6 sesi',
      meta: 'Speed Clash & Territory Grid',
      footer: '2 sesi siap dimainkan',
      progress: 65,
      iconBg: 'var(--lavender-bg)',
      iconColor: 'var(--lavender-text)',
      fillColor: '#7c3aed',
      footerColor: 'var(--lavender-text)',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="6 3 20 12 6 21 6 3" />
        </svg>
      ),
    },
  ];

  return (
    <div className="dashboard-layout">
      <div className="dashboard-main">
        {/* Hero Banner Card matching PPT */}
        <section className="card hero-banner">
          <div className="hero-copy">
            <h1 className="hero-title">Ubah materi jadi arena kelas</h1>
            <p className="hero-desc">
              Kelola bank soal bangun datar, siapkan sesi kuis interaktif di smartboard, dan pantau kesiapan siswa dari satu tempat.
            </p>
            <div className="hero-actions">
              <Link to="/bank-soal" className="btn-primary">
                <span>Buka Bank Soal</span>
                <span className="btn-primary-arrow" aria-hidden="true">→</span>
              </Link>
              <Link to="/sesi-game" className="btn-secondary">
                <span>Buat Sesi Game</span>
              </Link>
            </div>
          </div>

          <div className="arena-tile-grid" aria-hidden="true">
            <div className="arena-tile tile-lavender">A</div>
            <div className="arena-tile tile-periwinkle" />
            <div className="arena-tile tile-muted" />
            <div className="arena-tile tile-amber">B</div>

            <div className="arena-tile tile-muted" />
            <div className="arena-tile tile-cobalt">★</div>
            <div className="arena-tile tile-periwinkle" />
            <div className="arena-tile tile-amber" />

            <div className="arena-tile tile-mint">C</div>
            <div className="arena-tile tile-muted" />
            <div className="arena-tile tile-pink" />
            <div className="arena-tile tile-pink">D</div>
          </div>
        </section>

        {/* 4 Stat Cards */}
        <section className="stats-grid" aria-label="Statistik ringkas">
          {stats.map((stat) => (
            <article key={stat.label} className="card stat-card">
              <div className="stat-top">
                <div
                  className="stat-icon-box"
                  style={{ background: stat.iconBg, color: stat.iconColor }}
                >
                  {stat.icon}
                </div>
                <div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-value">{stat.value}</div>
                </div>
              </div>
              <div className="stat-meta">{stat.meta}</div>
              <div className="stat-progress-track">
                <div
                  className="stat-progress-fill"
                  style={{ width: `${stat.progress}%`, background: stat.fillColor }}
                />
              </div>
              <div className="stat-footer-text" style={{ color: stat.footerColor }}>
                {stat.footer}
              </div>
            </article>
          ))}
        </section>

        {/* Lower Section: Mode Cards + Latest Questions */}
        <section className="dashboard-lower">
          <div className="mode-stack">
            <article className="card mode-card">
              <div className="mode-badge mode-badge-sc">SC</div>
              <div>
                <h2 className="mode-title">Speed Clash</h2>
                <p className="mode-desc">
                  Adu cepat menjawab benar. Cocok untuk pemanasan materi bangun datar.
                </p>
                <Link to="/sesi-game" className="btn-mint">
                  Pakai Mode
                </Link>
              </div>
            </article>

            <article className="card mode-card">
              <div className="mode-badge mode-badge-tg">TG</div>
              <div>
                <h2 className="mode-title">Territory Grid</h2>
                <p className="mode-desc">
                  Tim merebut petak di smartboard. Petak sulit bernilai lebih tinggi.
                </p>
                <Link to="/sesi-game" className="btn-mint">
                  Pakai Mode
                </Link>
              </div>
            </article>
          </div>

          <article className="card latest-soal-card">
            <div className="section-header">
              <h2 className="section-title">Soal terbaru · Bangun Datar</h2>
              <Link to="/bank-soal" className="section-link">
                Lihat semua ({daftarSoal.length})
              </Link>
            </div>

            {soalTerbaru.length === 0 ? (
              <div className="empty-state" style={{ padding: '24px 12px' }}>
                <div className="empty-state-title">Belum ada soal tersimpan</div>
                <p className="empty-state-desc">
                  Semua soal contoh telah dihapus. Buka Bank Soal untuk memuat ulang data contoh.
                </p>
                <Link to="/bank-soal" className="btn-outline-sm">
                  Buka Bank Soal
                </Link>
              </div>
            ) : (
              <div className="latest-soal-list">
                {soalTerbaru.map((soal) => (
                  <div key={soal.id} className="latest-soal-item">
                    <div className="latest-soal-left">
                      <div className={`level-square ${getLevelBadgeClass(soal.tingkat)}`}>
                        {getLevelShortCode(soal.tingkat)}
                      </div>
                      <div className="latest-soal-text">
                        <div className="latest-soal-question" title={soal.pertanyaan}>
                          {soal.pertanyaan}
                        </div>
                        <div className="latest-soal-meta">
                          {soal.materi} · Kunci {soal.kunciJawaban} · {soal.tingkat}
                        </div>
                      </div>
                    </div>

                    <div className="latest-soal-right">
                      <span className="duration-label">{soal.durasiDetik} dtk</span>
                      <Link to="/bank-soal" className="btn-outline-sm">
                        Kelola
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </article>
        </section>
      </div>

      {/* Right Info Rail matching PPT */}
      <aside className="dashboard-rail" aria-label="Informasi Tambahan">
        <section className="card rail-card">
          <div className="section-header" style={{ marginBottom: '12px' }}>
            <h2 className="section-title">Notifikasi</h2>
            <Link to="/sesi-game" className="section-link" aria-label="Lihat sesi game">
              →
            </Link>
          </div>

          <div className="rail-list">
            <div className="rail-item">
              <div className="rail-icon" style={{ background: 'var(--mint-bg)', color: 'var(--mint-text)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <div className="rail-item-title">Bank soal siap</div>
                <div className="rail-item-desc">{daftarSoal.length} soal Bangun Datar aktif</div>
              </div>
            </div>

            <div className="rail-item">
              <div className="rail-icon" style={{ background: 'var(--peach-bg)', color: 'var(--peach-text)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                  <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                </svg>
              </div>
              <div>
                <div className="rail-item-title">Sesi selesai</div>
                <div className="rail-item-desc">Speed Clash · Kelas VII-A</div>
              </div>
            </div>

            <div className="rail-item">
              <div className="rail-icon" style={{ background: 'var(--indigo-bg)', color: 'var(--indigo-text)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="13" rx="2" />
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                </svg>
              </div>
              <div>
                <div className="rail-item-title">Smartboard siap</div>
                <div className="rail-item-desc">Ruang Kelas VII-A terhubung</div>
              </div>
            </div>
          </div>
        </section>

        <section className="card rail-card">
          <div className="section-header" style={{ marginBottom: '12px' }}>
            <h2 className="section-title">Tips hari ini</h2>
          </div>

          <div className="tip-box">
            <div className="tip-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="8 5 19 12 8 19 8 5" />
              </svg>
            </div>
            <div>
              <div className="rail-item-title" style={{ marginBottom: '4px' }}>
                Campur tingkat kesulitan
              </div>
              <p className="rail-item-desc">
                Sisipkan soal tingkat Sulit di antara soal Mudah &amp; Sedang agar siswa tidak hanya adu cepat.
              </p>
            </div>
          </div>
        </section>

        <section className="card rail-card">
          <div className="section-header" style={{ marginBottom: '10px' }}>
            <h2 className="section-title">Sebaran Soal</h2>
          </div>

          <div className="dist-row">
            <span>Tingkat Mudah</span>
            <span className="badge badge-mudah">{jumlahMudah} soal</span>
          </div>
          <div className="dist-row">
            <span>Tingkat Sedang</span>
            <span className="badge badge-sedang">{jumlahSedang} soal</span>
          </div>
          <div className="dist-row">
            <span>Tingkat Sulit</span>
            <span className="badge badge-sulit">{jumlahSulit} soal</span>
          </div>
        </section>
      </aside>
    </div>
  );
}
