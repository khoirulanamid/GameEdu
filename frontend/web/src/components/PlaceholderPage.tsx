import { Link } from 'react-router-dom';

interface PlaceholderCardItem {
  badge: string;
  title: string;
  description: string;
  meta: string;
}

interface PlaceholderPageProps {
  title: string;
  subtitle: string;
  badgeText: string;
  items: PlaceholderCardItem[];
}

export default function PlaceholderPage({
  title,
  subtitle,
  badgeText,
  items,
}: PlaceholderPageProps) {
  return (
    <div>
      <section className="card page-header-card">
        <div>
          <span className="badge badge-materi" style={{ marginBottom: '8px' }}>
            {badgeText}
          </span>
          <h1 className="page-title">{title}</h1>
          <p className="page-subtitle">{subtitle}</p>
        </div>

        <Link to="/bank-soal" className="btn-primary">
          <span>Kelola Bank Soal</span>
          <span className="btn-primary-arrow" aria-hidden="true">→</span>
        </Link>
      </section>

      <div className="placeholder-grid">
        {items.map((item) => (
          <article key={item.title} className="card placeholder-card">
            <div>
              <span className="badge badge-kunci">{item.badge}</span>
            </div>
            <h2 className="section-title">{item.title}</h2>
            <p className="page-subtitle">{item.description}</p>
            <div className="latest-soal-meta" style={{ marginTop: '4px' }}>
              {item.meta}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
