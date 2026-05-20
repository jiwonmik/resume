import TechBackground from './TechBackground';
import type { T } from '../hooks/useLanguage';

interface Props { t: T }

export default function Hero({ t }: Props) {
  return (
    <header className="hero">
      <TechBackground />
      <div className="hero-inner">
        <div className="hero-badge">
          <span className="badge-dot" />
          {t({ en: 'Open to new opportunities', ko: '새로운 기회를 찾고 있습니다' })}
        </div>

        <h1 className="hero-name">
          <span className="name-plain">Jiwon</span>
          <span className="name-gradient"> Kim</span>
        </h1>

        <p className="hero-title">
          {t({ en: 'AI Engineer · Agent Systems · Full-Stack', ko: 'AI 엔지니어 · 에이전트 시스템 · 풀스택' })}
        </p>

        <p className="hero-desc">
          {t({
            en: 'Started as a frontend engineer — always cared about what users actually experience. Now I build full AI systems end-to-end, from architecture to UX.',
            ko: '프론트엔드 엔지니어로 시작해, 유저가 실제로 경험하는 것을 중심에 둡니다. 지금은 AI 시스템 전체를 아키텍처부터 UX까지 설계하고 만듭니다.',
          })}
        </p>

        <div className="hero-actions">
          <a href="mailto:jiwonmik@gmail.com" className="btn-primary">
            {t({ en: 'Get in Touch', ko: '연락하기' })}
          </a>
          <a href="#experience" className="btn-secondary">
            {t({ en: 'View Work', ko: '경력 보기' })}
          </a>
          <div className="hero-social">
            <a href="https://github.com/jiwonmik" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a href="mailto:jiwonmik@gmail.com" aria-label="Email">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>scroll</span>
        <svg width="10" height="12" viewBox="0 0 10 14" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 1v12M1 9l4 4 4-4" />
        </svg>
      </div>
    </header>
  );
}
