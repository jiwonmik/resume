import type { Lang } from '../hooks/useLanguage';

interface Props {
  lang: Lang;
  onToggle: () => void;
  onBack?: () => void;
}

const links = [
  { href: '#about', en: 'About', ko: 'About' },
  { href: '#projects', en: 'Projects', ko: 'Projects' },
  { href: '#skills', en: 'Skills', ko: 'Skills' },
  { href: '#experience', en: 'Experience', ko: 'Experience' },
  { href: '#contact', en: 'Contact', ko: 'Contact' },
];

export default function Navbar({ lang, onToggle, onBack }: Props) {
  return (
    <nav className="navbar">
      <a
        href="#"
        className="navbar-logo"
        onClick={onBack ? (e) => { e.preventDefault(); onBack(); } : undefined}
      >
        jiwonmik
      </a>
      <div className="navbar-right">
        {onBack ? (
          <button className="navbar-back" onClick={onBack}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            {lang === 'en' ? 'Back to Resume' : '이력서로 돌아가기'}
          </button>
        ) : (
          <ul className="navbar-links">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href}>{lang === 'en' ? l.en : l.ko}</a>
              </li>
            ))}
          </ul>
        )}
        <button className="navbar-toggle" onClick={onToggle} aria-label="Toggle language">
          <span className={`lang-option${lang === 'en' ? ' active' : ''}`}>EN</span>
          <span className="lang-sep">/</span>
          <span className={`lang-option${lang === 'ko' ? ' active' : ''}`}>KR</span>
        </button>
      </div>
    </nav>
  );
}
