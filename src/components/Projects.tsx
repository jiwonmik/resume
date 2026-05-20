import type { T } from '../hooks/useLanguage';

interface Props { t: T }

const dataAssistant = {
  key: 'data-assistant',
  icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  title: { en: 'Data Assistant', ko: 'Data Assistant' },
  desc: {
    en: 'Conversational AI product for music-industry analytics. Text-to-SQL multi-agent with RAG, intent classification, credit-based usage, and production tracing via LangSmith. Reached 351 MAU with 76% monthly retention within 2 months of beta launch.',
    ko: '음악 산업 분석을 위한 대화형 AI 제품. RAG, 의도 분류, 크레딧 기반 사용량, LangSmith 트레이싱을 갖춘 Text-to-SQL 멀티 에이전트. 베타 출시 2개월 만에 MAU 351명, 월간 재방문율 76% 달성.',
  },
  tags: ['LangGraph', 'Python', 'ClickHouse', 'RabbitMQ', 'Socket.IO', 'React', 'OpenRouter'],
};

const dataAssistantTools = [
  {
    key: 'conversation-debugger',
    badge: { en: 'Built before LangSmith', ko: 'LangSmith 이전에 직접 구축' },
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
      </svg>
    ),
    title: { en: 'Conversation Debugger', ko: 'Conversation Debugger' },
    desc: {
      en: 'Before LangSmith was viable in production, I built a custom checkpoint-based debugger. Any team member could inspect every decision node, tool call, and state transition — cutting diagnosis from hours to minutes.',
      ko: 'LangSmith 이전에 직접 체크포인트 기반 디버거를 구축. 팀 누구든 결정 노드·툴 호출·상태 전이를 실시간 확인 — 장애 원인 파악을 수 시간에서 수 분으로 단축.',
    },
    tags: ['Python', 'LangGraph', 'React', 'TypeScript', 'Custom Observability'],
  },
  {
    key: 'agent-admin',
    badge: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: { en: 'No-Code Agent Admin', ko: 'No-Code Agent Admin' },
    desc: {
      en: 'Internal admin UI for end-to-end agent management — prompt editing, model selection, temperature, and versioning. Eliminated engineering bottlenecks for non-technical stakeholders.',
      ko: '프롬프트 편집, 모델 선택, temperature, 버저닝을 포함한 에이전트 관리용 노코드 어드민 UI. 비개발 직군의 병목 제거.',
    },
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
];

const otherProjects = [
  {
    key: 'enterprise-dashboard',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: { en: 'Enterprise Analytics Dashboard', ko: '엔터프라이즈 분석 대시보드' },
    desc: {
      en: 'Self-serve analytics platform with dimension/metric classification, chart-to-table cross-interaction, and a configuration snapshot editor for real-time state observability.',
      ko: '차원·지표 분류, 차트→테이블 크로스 인터랙션 및 설정 스냅샷 에디터를 갖춘 셀프서브 분석 플랫폼.',
    },
    tags: ['React', 'TypeScript', 'Chart.js', 'PostgreSQL', 'Node.js'],
  },
  {
    key: 'cloud-ids',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: { en: 'Cloud Intrusion Detection System', ko: '클라우드 침입 탐지 시스템' },
    desc: {
      en: 'CNN-based network intrusion detection against DoS attacks, developed as undergraduate research funded by the National Research Foundation of Korea. Published in Electronics (IF 2.690).',
      ko: '한국연구재단 지원 학부 연구 과제로 개발한 CNN 기반 DoS 공격 탐지 시스템. Electronics (IF 2.690) 게재.',
    },
    tags: ['Python', 'CNN', 'Network Security'],
  },
];

export default function Projects({ t }: Props) {
  return (
    <section className="section" id="projects">
      <p className="section-label">// {t({ en: 'Projects', ko: '프로젝트' })}</p>
      <h2 className="section-heading">{t({ en: "What I've Built", ko: '만든 것들' })}</h2>
      <p className="section-sub">{t({ en: 'A selection of products and tools I shipped.', ko: '제가 만든 제품과 도구들입니다.' })}</p>

      {/* Featured project */}
      <div className="project-card project-card--featured project-card--full">
        <div className="project-card-header">
          <span className="project-icon">{dataAssistant.icon}</span>
          <h3>
            <a
              href="https://www.linkedin.com/posts/helloakashm_very-excited-to-launch-data-assistant-on-ugcPost-7452494950476324864-pFpt?utm_source=share&utm_medium=member_desktop&rcm=ACoAACbCuucB5FTWw-mVOygKE7eWMQiXNLfojMY"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              {t(dataAssistant.title)}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </h3>
        </div>
        <p className="project-desc">{t(dataAssistant.desc)}</p>
        <div className="project-tags">
          {dataAssistant.tags.map(tag => <span key={tag}>{tag}</span>)}
        </div>
      </div>

      {/* Tools built for Data Assistant */}
      <div className="project-subgroup">
        <p className="project-subgroup-label">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          {t({ en: 'Tooling built for Data Assistant', ko: 'Data Assistant를 위해 구축한 도구' })}
        </p>
        <div className="project-subgrid">
          {dataAssistantTools.map(p => (
            <div className="project-card project-card--sub" key={p.key}>
              <div className="project-card-header">
                <span className="project-icon">{p.icon}</span>
                <h3>{t(p.title)}</h3>
              </div>
              {p.badge && (
                <span className="project-badge">{t(p.badge)}</span>
              )}
              <p className="project-desc">{t(p.desc)}</p>
              <div className="project-tags">
                {p.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other projects */}
      <div className="projects-grid">
        {otherProjects.map(p => (
          <div className="project-card" key={p.key}>
            <div className="project-card-header">
              <span className="project-icon">{p.icon}</span>
              <h3>{t(p.title)}</h3>
            </div>
            <p className="project-desc">{t(p.desc)}</p>
            <div className="project-tags">
              {p.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
