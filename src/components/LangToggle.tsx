import type { Lang } from '../hooks/useLanguage';

interface Props {
  lang: Lang;
  onToggle: () => void;
}

export default function LangToggle({ lang, onToggle }: Props) {
  return (
    <button className="lang-toggle" onClick={onToggle} aria-label="Toggle language">
      <span className={`lang-option${lang === 'en' ? ' active' : ''}`}>EN</span>
      <span className="lang-sep">/</span>
      <span className={`lang-option${lang === 'ko' ? ' active' : ''}`}>KR</span>
    </button>
  );
}
