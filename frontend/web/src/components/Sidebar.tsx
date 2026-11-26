import { NavLink } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  to: string;
  label: string;
  end?: boolean;
  icon: JSX.Element;
}

const menuItems: MenuItem[] = [
  {
    to: '/',
    label: 'Dashboard',
    end: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10.5L12 3l9 7.5" />
        <path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" />
      </svg>
    ),
  },
  {
    to: '/bank-soal',
    label: 'Bank Soal',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h10" />
      </svg>
    ),
  },
  {
    to: '/sesi-game',
    label: 'Sesi Game',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="6" />
        <path d="M6 12h4" />
        <path d="M8 10v4" />
        <circle cx="15.5" cy="11" r="1" fill="currentColor" />
        <circle cx="17.5" cy="13" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    to: '/kelas-siswa',
    label: 'Kelas & Siswa',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    to: '/laporan',
    label: 'Laporan',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 16v-4" />
        <path d="M12 16V8" />
        <path d="M17 16v-7" />
      </svg>
    ),
  },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      <div
        className={`sidebar-backdrop ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div>
          <div className="brand-box">
            <div className="brand-logo" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="8" height="8" rx="2.5" fill="#F8B878" />
                <rect x="13" y="3" width="8" height="8" rx="2.5" fill="#DCE4FF" />
                <rect x="3" y="13" width="8" height="8" rx="2.5" fill="#5BE3B8" />
                <rect x="13" y="13" width="8" height="8" rx="2.5" fill="#F598CB" />
              </svg>
            </div>
            <div>
              <div className="brand-title">GameEdu</div>
              <div className="brand-subtitle">Dashboard Guru</div>
            </div>
          </div>

          <nav className="sidebar-nav" aria-label="Menu Guru">
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={onClose}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="sidebar-footer">
          <div className="teacher-card">
            <div className="teacher-card-badge">Matematika • Aktif</div>
            <div className="teacher-card-name">Ruang Guru</div>
            <div className="teacher-card-meta">Materi Bangun Datar</div>
          </div>
        </div>
      </aside>
    </>
  );
}
