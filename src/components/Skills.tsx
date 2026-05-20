import type { T } from '../hooks/useLanguage';

interface Props { t: T }

const skillGroups = [
  {
    key: 'ai',
    label: { en: 'AI / Agent Systems', ko: 'AI / 에이전트 시스템' },
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3h1V6a4 4 0 0 1 4-4z" />
        <circle cx="9" cy="11" r="1" fill="currentColor" />
        <circle cx="15" cy="11" r="1" fill="currentColor" />
      </svg>
    ),
    skills: [
      { name: 'LangGraph / LangChain', pct: 92 },
      { name: 'Prompt Engineering', pct: 90 },
      { name: 'RAG & Agent Orchestration', pct: 88 },
      { name: 'LangSmith / Tracing', pct: 82 },
      { name: 'OpenRouter / Model Routing', pct: 80 },
    ],
  },
  {
    key: 'backend',
    label: { en: 'Backend & Infrastructure', ko: '백엔드 & 인프라' },
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="3" width="20" height="4" rx="1" />
        <rect x="2" y="10" width="20" height="4" rx="1" />
        <rect x="2" y="17" width="20" height="4" rx="1" />
        <circle cx="6" cy="5" r="0.8" fill="currentColor" />
        <circle cx="6" cy="12" r="0.8" fill="currentColor" />
        <circle cx="6" cy="19" r="0.8" fill="currentColor" />
      </svg>
    ),
    skills: [
      { name: 'Python', pct: 93 },
      { name: 'Node.js / TypeScript', pct: 88 },
      { name: 'RabbitMQ / Redis', pct: 85 },
      { name: 'Socket.IO / WebSocket', pct: 83 },
      { name: 'Docker / AWS', pct: 78 },
    ],
  },
  {
    key: 'data',
    label: { en: 'Frontend & Data', ko: '프론트엔드 & 데이터' },
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    skills: [
      { name: 'React / TypeScript', pct: 88 },
      { name: 'PostgreSQL', pct: 85 },
      { name: 'ClickHouse', pct: 82 },
      { name: 'SQL & Data Modeling', pct: 85 },
      { name: 'Airflow', pct: 72 },
    ],
  },
];

export default function Skills({ t }: Props) {
  return (
    <section className="section" id="skills">
      <p className="section-label">// {t({ en: 'Skills', ko: '기술 스택' })}</p>
      <h2 className="section-heading">{t({ en: 'Tech Stack', ko: '기술 스택' })}</h2>
      <p className="section-sub">{t({ en: 'The tools and technologies I work with daily.', ko: '현재 사용하는 기술들입니다.' })}</p>
      <div className="skills-grid">
        {skillGroups.map(group => (
          <div className="skill-group" key={group.key}>
            <div className="skill-group-header">
              <span className="skill-icon">{group.icon}</span>
              <h4>{t(group.label)}</h4>
            </div>
            <div className="skill-bars">
              {group.skills.map(s => (
                <div className="skill-bar-row" key={s.name}>
                  <div className="skill-bar-meta">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-pct">{s.pct}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div className="skill-bar-fill" style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
