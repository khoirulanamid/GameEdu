import { ReactNode, useState } from 'react';
import Sidebar from './Sidebar';
import type { Soal } from '../data/soal';

interface LayoutProps {
  children: ReactNode;
  daftarSoal?: Soal[];
}

export default function Layout({ children, daftarSoal = [] }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const jumlahMapel = new Set(daftarSoal.map((soal) => soal.mapel)).size;

  return (
    <div className="app-shell">
      <header className="mobile-topbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className="brand-logo" style={{ width: '34px', height: '34px', borderRadius: '10px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="8" height="8" rx="2.5" fill="#F8B878" />
              <rect x="13" y="3" width="8" height="8" rx="2.5" fill="#DCE4FF" />
              <rect x="3" y="13" width="8" height="8" rx="2.5" fill="#5BE3B8" />
              <rect x="13" y="13" width="8" height="8" rx="2.5" fill="#F598CB" />
            </svg>
          </div>
          <span className="brand-title">GameEdu</span>
        </div>

        <button
          type="button"
          className="menu-toggle-btn"
          onClick={() => setSidebarOpen((prev) => !prev)}
          aria-label="Buka menu navigasi"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>
        </button>
      </header>

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        jumlahSoal={daftarSoal.length}
        jumlahMapel={jumlahMapel}
      />

      <main className="main-content">
        <div className="page-container">{children}</div>
      </main>
    </div>
  );
}
