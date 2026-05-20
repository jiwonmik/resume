import type { Lang } from '../hooks/useLanguage';

interface Props {
  lang: Lang;
  onToggle: () => void;
}

const links = [
  { href: '#about', en: 'About', ko: 'About' },
  { href: '#projects', en: 'Projects', ko: 'Projects' },
  { href: '#skills', en: 'Skills', ko: 'Skills' },
  { href: '#experience', en: 'Experience', ko: 'Experience' },
  { href: '#contact', en: 'Contact', ko: 'Contact' },
];

export default function Navbar({ lang, onToggle }: Props) {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo">jiwonmik</a>
      <div className="navbar-right">
        <ul className="navbar-links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href}>{lang === 'en' ? l.en : l.ko}</a>
            </li>
          ))}
        </ul>
        <button className="navbar-toggle" onClick={onToggle} aria-label="Toggle language">
          <span className={`lang-option${lang === 'en' ? ' active' : ''}`}>EN</span>
          <span className="lang-sep">/</span>
          <span className={`lang-option${lang === 'ko' ? ' active' : ''}`}>KR</span>
        </button>
      </div>
    </nav>
  );
}
